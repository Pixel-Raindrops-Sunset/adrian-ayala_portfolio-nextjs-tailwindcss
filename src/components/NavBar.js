import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "./Logo";
import { TwitterIcon, GitHubIcon, LinkedInIcon } from "./Icons";
import {motion} from "framer-motion"


const CustomLink = ({href, title, className=""}) => {
  const router = useRouter();
  // console.log(router) look at the available properties 
  return(
    // A custom link so that when the user navigates to pages it will apply to this
    <Link href={href} className={`${className} relative group`}>
       {title}
       {/* Style the header links with thick or thin underscore that will have an animation
       effect when hovering  */}
       {/* Keep underscore under current page using the useRouter and rounter.asPath property */}
       <span className={`h-[1px] inline-block bg-slate-500 absolute left-0 -bottom-0.5
       group-hover:w-full transition-[width] ease duration-500 ${router.asPath === href ? 'w-full' : 'w-0'}`}>
        &nbsp;
       </span>
    </Link>
  )
}


const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        
        <CustomLink href="/" title="Home" className="mr-4"/>
        <CustomLink href="/about" title="About" className="mx-4"/>
        <CustomLink href="/projects" title="Projects" className="mx-4"/>
        <CustomLink href="/articles" title="Articles" className="mx-4"/>
      </nav>
        
{/* Removing link element and placing a element in place, added social media profile links
that have a small bounce when user hovers over caused from framer-motion        */}
      <nav className="flex items-center justify-center flex-wrap">
        
        <motion.a href="https://twitter.com/tonedef_ari" target={"_blank"} 
          className="w-6 mx-3"
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}>
          <TwitterIcon />  
        </motion.a>
        
        <motion.a href="https://github.com/LazyRubiksCube" target={"_blank"}
          className="w-6 mx-3"
          whileTap={{scale:0.9}}
          whileHover={{y:-2}}
          >
          <GitHubIcon />
        </motion.a>
        
        <motion.a href="https://www.linkedin.com/in/adrian-ayala-09a51834/" target={"_blank"}
          className="w-6 mx-3"
          whileTap={{scale:0.9}}
          whileHover={{y:-2}}>
          <LinkedInIcon />
        </motion.a>
         

      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
      <Logo />
      </div>

    </header>  
  )
}

export default NavBar
