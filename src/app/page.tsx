"use client";

import {SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "@/types/Inputs";

const Page = () => {
  // Criação do formulário
  const { 
    handleSubmit, 
    register,
    formState: { errors } 
  } = useForm<Inputs>();

  // Função para receber os dados
  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  }

  return (
    <div className="container mx-auto">

      {/* Criação do formlário com registro */}
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input 
          {...register('name', { required: true, minLength: 3, maxLength: 20 })} 
          className="border border-white p-3 text-black"
          placeholder="Digite seu nome"
        />
        {errors.name?.type === 'required' && <p>Campo obrigatório</p>}
        {/* {errors.name && <p>Este item precisa ser preenchido corretamente</p>} */}
        {errors.name?.type === 'minLength' && <p>Precisa ter 2 caracteres</p>}
        <input 
          {...register('lastName')} 
          className="block mt-4 border border-white p-3 text-black"
          placeholder="Digite seu nome"
        />

        <input
          type="number" 
          {...register('age', { required: 'Campo idade obrigatório', min: 18, max: 120 })} 
          className="block mt-4 border border-white p-3 text-black"
          placeholder="Digite sua idade"
        />
        {/* {errors.age && <p>Idade precisa ser entre 18 e 120 anos.</p>} */}
        {errors.age && <p>{errors.age.message}</p>}
        <input type="submit" value="Enviar" />

      </form>  

    </div>     
  );
}

export default Page;