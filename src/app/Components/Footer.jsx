import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div >
            
            
    <footer className="footer sm:footer-horizontal bg-[#020617]/90 text-white/70 p-10">
  
        <Link
        href="/"
        className="relative z-10 shrink-0"
        >
        <h1 className="font-bold  tracking-wide leading-none">
        <span className="text-cyan-400 text-[18px] sm:text-[20px] md:text-[24px]">
            AURA
        </span>
        <span className="text-white text-[18px] sm:text-[20px] md:text-[24px]">
            HOME
        </span>
        </h1>
        </Link>


  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    
  </nav>
</footer>




        </div>
    );
};

export default Footer;


