import Link from 'next/link';
import React from 'react';

const NavAuthButton = () => {
    return (
        <div>
            


        <Link href="/signin">
                  
                  <button
                      className="
                        px-5 py-2
        
                        rounded-xl
        
                        bg-cyan-200
                        border border-cyan-400/30
        
                        backdrop-blur-md
        
                        text-black
                        text-sm
                        font-medium
        
                        hover:bg-cyan-500/25
                        hover:border-cyan-400/60
        
                        transition-all
                        duration-300
                      "
                    >
                      Sign In
                    </button>
        
                  
                  </Link>



        </div>
    );
};

export default NavAuthButton;