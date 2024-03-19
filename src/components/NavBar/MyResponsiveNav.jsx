import { useState } from "react";
import Links from "../Links/Links";
import { TiThMenuOutline } from "react-icons/ti";
import { MdOutlineCloseFullscreen } from "react-icons/md";

const MyResponsiveNav = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { path: "/home", name: "Home", id: 1 },
    { path: "/about", name: "About", id: 2 },
    { path: "/contact", name: "Contact", id: 3 },
    { path: "/services", name: "Services", id: 4 },
    { path: "/login", name: "Login", id: 5 },
  ];

  return (
    <nav className=" bg-red-300  text-black">
      <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <MdOutlineCloseFullscreen></MdOutlineCloseFullscreen>
        ) : (
          <TiThMenuOutline></TiThMenuOutline>
        )}
      </div>
      <ul
        className={`md:flex  ${
          open ? "top-160" : "-top-60"
        } bg-red-300  text-black font-semibold duration-1000  text-2xl p-4 mx-5 shadow-lg absolute md:static`}
      >
        {routes.map((route) => (
          <Links key={route.id} route={route}></Links>
        ))}
      </ul>
    </nav>
  );
};

export default MyResponsiveNav;
