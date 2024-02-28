import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
            <Image src="/images/logo.png"  alt="hero image"
              width={89}  height={50}
            />
        </Link></span>
        <p className="text-slate-600">All rights reserved. AKILI GROUP</p>
      </div>
    </footer>
  );
};

export default Footer;
