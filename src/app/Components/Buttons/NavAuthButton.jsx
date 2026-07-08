"use client";
import { User } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const NavAuthButton = () => {

    const session = useSession();

    return (
        <div>
            
        {session.status === "authenticated" ? 
        
        <button
              className="
                w-9
                h-9

                rounded-full

                bg-white/10
                border
                border-white/15

                flex
                items-center
                justify-center

                text-white/80
              "
            >
              <User size={16} />
            </button> 
              
              : 
        


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
}



        


        </div>
    );
};

export default NavAuthButton;