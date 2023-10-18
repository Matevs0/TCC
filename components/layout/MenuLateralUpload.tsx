"Use Client"

import { useRouter } from "next/router";
import { BsCloudUpload } from "react-icons/bs";

import { useState, useCallback } from 'react';

import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";

const MenuLateralUpload = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();

  const onClick = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    router.push('/');
  }, [loginModal, router, currentUser]);


  return (
    <div onClick={onClick}>
      <div
        className="
          mt-6
          lg:hidden
          rounded-full
          h-14
          w-14
          p-4
          flex
          items-center
          justify-center
          bg-slate-50
          hover:bg-opacity-90
          transition
          cursor-pointer
        ">
          <BsCloudUpload size={24} color='black' />
      </div>
      <div
        className="
        mt-6
        hidden
        lg:block
        px-4
        py-2
        rounded-full
        bg-slate-50
        hover:bg-opacity-90
        transition
        cursor-pointer
        ">
          <p className="
          hidden
          lg:block
          text-center
          font-semibold
          text-black
          text-[20px]
          ">
            Upload
          </p>
      </div>
    </div>
  );
}

export default MenuLateralUpload;