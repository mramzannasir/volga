import React from "react";
import Link from "next/link";
import { Data } from "assets/Data";

const Navbar = () => {
  return (
    <div>
      <div className="flex gap-3 text-white  ">
        <Link href={"/"}>Home</Link>
        <Link href={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
