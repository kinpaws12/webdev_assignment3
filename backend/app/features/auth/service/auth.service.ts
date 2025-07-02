import { env } from "../../../config/env";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AuthticatedUser, LeanUser, SigninUser } from "../../users/types/user.type";
import { UserModel } from "../../users/models/user.model";

export class AuthService {
    // signup
    static async register(data: {
        name: string;
        email: string;
        password: string;
        phone?: string;
        receiveUpdates?: boolean;
        role?: "USER" | "ORGANIZER";
    }) 
    {
        const hashPassword = await bcrypt.hash(data.password, 12);

        if (data.name?.trim() === '') delete (data as any).name;
        
        const user = await UserModel.create({ ...data, password: hashPassword });
        const { _id, name, email, role } = user.toObject() as LeanUser;
        const registered_User = { 
                    id: _id.toString(), 
                    name, 
                    email, 
                    role 
                }
        return registered_User;
    }

    // login
    static async login(
        {email, password}: SigninUser
    ): Promise<AuthticatedUser> {
        const user = await UserModel
            .findOne({ email })
            .select("+password")
            .lean<LeanUser>();

        console.log("user is: ", user); // log user entity

        if (!user) throw new Error("Invalid credentials");

        const ok = await bcrypt.compare(password, user.password);
        if (!ok) throw new Error("Invalid credentials");

        const { _id, name, email: userEmail, role } = user;
        const accessToken = this.signToken(user); 
        const refreshToken = this.refreshToken(user);

        return {
            user: { id: _id.toString(), name, email, role }, 
            token: accessToken,
            refreshToken
        };
    }

    // reset password
    static async resetPassword(email: string) {
        
    }

    private static signToken(user: LeanUser): string {
        if (!env.JWT_SECRET) throw new Error("Jwt tokwn is missing!");
        const payload = { sub: user._id, role: user.role, type: "access-jwt"};
        const token = jwt.sign(payload, env.JWT_SECRET, { 
            expiresIn: "5m",
            issuer: "event-flow-server",
            audience: `event-flow-client-${user.name}`
        });
        return token;
    }

    private static refreshToken(user: LeanUser): string {
        if (!env.JWT_REFRESH_SECRET) throw new Error("Refresh token is missing!");
        const payload = { sub: user._id, role: user.role, type: "refresh-jwt" };
        const refresh_token = jwt.sign(payload, env.JWT_REFRESH_SECRET, {
            expiresIn: "1d",
            issuer: "event-flow-server",
                audience: `event-flow-client-${user.name}`
        });
        return refresh_token;
    }

    static async rotateAccessToken(refreshToken: string): Promise<string> {
        if (!env.JWT_REFRESH_SECRET) {
            throw new Error("JWT_REFRESH_SECRET is not set");
        }

        let payload: jwt.JwtPayload;
        try {
            payload = jwt.verify(refreshToken, env.JWT_REFRESH_SECRET) as jwt.JwtPayload;
        } catch {
            throw new Error("Invalid or expired refresh token");
        }

        if (payload.type !== "refresh-jwt") {
            throw new Error("Wrong token type");
        }

        const user = await UserModel.findById(payload.sub).lean<LeanUser>();
        if (!user) throw new Error("User not found");

        return this.signToken(user);
    }
}