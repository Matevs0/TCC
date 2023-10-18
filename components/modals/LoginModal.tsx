"Use Client"

import { useState, useCallback } from 'react';
import { signIn } from "next-auth/react"

import Input from "../Input";
import Modal from "../Modal";

import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";

const LoginModal = () => {
const loginModal = useLoginModal();
const registerModal = useRegisterModal();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  /* FUNÇÃO QUE ENVIA DA TELA DE CRIAÇÃO PARA A TELA DE LOGIN */
  const onToggle = useCallback(() =>{
    if(isLoading){
      return;
    }

    loginModal.onClose();
    registerModal.onOpen();
  }, [isLoading, registerModal, loginModal]);

  /*  FUNÇÃO PARA ENTRADA DE USUÁRIOS */
  const onSubmit = useCallback( async () => {
    try{
      setIsLoading(true);

      await signIn('credentials', {
        email,
        password
      })

      loginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
}, [loginModal, email, password]);
  
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />

      <Input 
        placeholder="Password"
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
)

  const footerContent = (
    <div className='text-neutral-400 text-center mt-4'>
      <p>Primeira vez usando o Feat?
        <span 
        onClick={onToggle}
        className='
        text-white
        cursor-pointer
        hover:underline'
        > Crie uma conta</span>
      </p>
    </div>
)

  return (
    <Modal 
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Entrar"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default LoginModal;