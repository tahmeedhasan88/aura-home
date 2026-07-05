"use client";
import { usePathname, useRouter } from 'next/navigation';

import React from 'react';

const AddListing = ({ home }) => {

const isLogin = false;
const router = useRouter();
const path = usePathname();
const add2Listig = () => {
    
    if (isLogin) alert(home.id)

    else{
        router.push(`/signin?callback=${path}`);
    }
    
}

    return (
        <div>
            <button onClick={add2Listig} className="w-full sm:w-auto inline-flex items-center justify-center rounded-3xl bg-emerald-500 px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-black transition hover:scale-[1.01]">
                              Add Listing
                            </button>
        </div>
    );
};

export default AddListing;