import Link from "next/link";
import React from "react";
import Logo from "./Logo"

const CustomLink = ({href, title, className=""}) => {
  return(
    // A custom link so that when the user navigates to pages it will apply to this
    <Link href={href} className={`${className}`}>
       {title}
    </Link>
  )
}


const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home"/>
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/articles" title="Articles" />
      </nav>
      
      // Social media links that will open in a new page
      <nav>
        <Link href="/" target ={"_blank"}>T</Link>
        <Link href="/" target ={"_blank"}>T</Link>
        <Link href="/" target ={"_blank"}>T</Link>
        <Link href="/" target ={"_blank"}>T</Link>

      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
      <Logo />
      </div>
    </header>  
  )
}

export default NavBar
