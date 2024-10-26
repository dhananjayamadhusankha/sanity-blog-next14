"use client";

import Link from "next/link";
import ProfileImage from "../../public/images/profile.jpg";
import Image from "next/image";
import { Github, Globe, Linkedin, Menu } from "lucide-react";
import { useState } from "react";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between max-w-6xl px-5 py-4 mx-auto font-bold">
      {/* Profile Image */}
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src={ProfileImage}
            alt="Image"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        </Link>
        <h1>Dhananjaya</h1>
      </div>

      {/* Menu Icon */}
      <div className="md:hidden flex items-center space-x-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`transform transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Links for Medium Screens */}
      <div className="hidden md:flex text-gray-500 items-center space-x-8">
        <Link
          href="https://dhananjaya-portfolio.vercel.app/"
          className="hover:text-primary text-sm flex flex-col items-center gap-y-1"
          target="_blank"
        >
          <Globe className="h-6 w-6" /> Portfolio
        </Link>
        <Link
          href="https://github.com/dhananjayamadhusankha"
          className="hover:text-primary text-sm flex flex-col items-center gap-y-1"
          target="_blank"
        >
          <Github className="h-6 w-6" /> GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/dhananjayamadhusankha?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6gfviK0aQG%2BfAPHom2hRgg%3D%3D"
          className="hover:text-primary text-sm flex flex-col items-center gap-y-1"
          target="_blank"
        >
          <Linkedin className="h-6 w-6" /> LinkedIn
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-5 bg-white shadow-lg p-5 rounded-md flex flex-col items-center space-y-4 animate-slide-in">
          <Link
            href="https://dhananjaya-portfolio.vercel.app/"
            className="hover:text-primary text-sm flex items-center space-x-1"
            target="_blank"
          >
            <Globe className="h-6 w-6" /> <span>Portfolio</span>
          </Link>
          <Link
            href="https://github.com/dhananjayamadhusankha"
            className="hover:text-primary text-sm flex items-center space-x-1"
            target="_blank"
          >
            <Github className="h-6 w-6" /> <span>GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/dhananjayamadhusankha?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6gfviK0aQG%2BfAPHom2hRgg%3D%3D"
            className="hover:text-primary text-sm flex items-center space-x-1"
            target="_blank"
          >
            <Linkedin className="h-6 w-6" /> <span>LinkedIn</span>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
