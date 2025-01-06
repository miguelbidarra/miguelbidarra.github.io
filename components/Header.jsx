import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import MobileNavBar from "./MobileNavBar";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between">
        {/*logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Miguel Barbosa<span className="text-accent">.</span>
          </h1>
        </Link>

        {/*desktop nav & hire me button*/}
        <div className="hidden xl:flex justify-between items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/*mobile nav*/}
        <div className="xl:hidden">
          <MobileNavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
