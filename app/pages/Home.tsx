import type { Route } from "./+types/Home";
import GlobalShell from "../components/globalTheme/globalShell";
import HomeBody from "../components/home/homeBody";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (

      <HomeBody />

  );
}
