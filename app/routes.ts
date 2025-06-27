import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
//layout1: Global theme layout for most pages
  layout("./components/globalTheme/globalShell.tsx", [
    index("./pages/Home.tsx"),
    route("account", "./pages/Account.tsx"),
    //other routes share the global layout

    layout("./components/dashboard/Dashboard.tsx", [
        // route("account", "./pages/Account.tsx"),
        // route("eventmanagement", "./pages/EventManagement.tsx"),
        // other routes share the Dashboard shell
    ])
  ]),

  //layout2: Layout for auth pages
  layout("./features/auth/theme/AuthLayout.tsx", [
    route("login", "./pages/Login.tsx"),
    route("signup", "./pages/Signup.tsx")
  ]),

] satisfies RouteConfig;
