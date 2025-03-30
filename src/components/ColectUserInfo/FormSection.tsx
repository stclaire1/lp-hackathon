import { Contact } from 'lucide-react';
import React from 'react';
import ContactForm from './ContactForm';

const FormSection = () => {
    return (
        <div className='flex flex-col container items-center justify-between px-8 my-12 md:flex-row md:gap-8 lg:px-44'>
            <div className='text-agro-green text-center md:text-left w-full max-w-2xl'>
                <h1 className='text-3xl font-bold mb-4 md:text-4xl'>Quase lá!</h1>
                <p className='text-sm mb-7 mt-30 italic font-light md:text-base'>Antes de testar nosso chat <b>precisamos de algumas informações</b>. Por favor, preencha o formulário para prosseguir!</p>
            </div>
            <ContactForm />
        </div>
    )
}

export default FormSection;