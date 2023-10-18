"Use Client"

import { useRouter } from "next/router";
import { BsHeadphones } from "react-icons/bs";

const MenuLogo = () => {
    const router = useRouter();

    return ( 
        <div 
            onClick={() => router.push('/')}
        className="
            rounded-full
            h-14
            w-14
            p-4
            flex
            items-center
            justify-center
            hover:bg-blue-300
            hover:bg-opacity-10
            cursor-pointer
            transition
        ">
            <BsHeadphones size={28} color="white"/>
        </div>
    );
}

export default MenuLogo
