import { Outlet } from "react-router-dom";
import { NavbarSemAvatar } from "../components/NavbarWithoutAvatar";
import { Footer } from "../components/Footer";

export function Layout() {
  return (
    <>
      <NavbarSemAvatar />
      <Outlet />
      <Footer />
    </>
  );
}
