"use client"
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from "react-hook-form"; 
import * as yup from "yup"
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const schema =yup.object({
  // id: yup.number().required('id is required'),
  name: yup.string().required('name is required'),
  phone: yup.string().required('phone is required'),
  email: yup.string().required('email is required'),
  message: yup.string().required('message is required').max(150),
  Domain: yup.string().required('Domain is required')
})
export default function Home() {
  const [leading,setLoading] =useState(false)
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const formSubmit=async(data) => {
    try {
      setLoading(true)
    const response = await fetch('/api/POST', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res)=>{
     if(res.status ==200){
      setLoading(false)
      toast.success('mahad sanid, hubi g-mail inbox-kaga, hadaad g-mail kuso gareen hakala xishoon inaad ku celcliso')

     }else{
      setLoading(false)
      toast.error('error accured, please try again')
     }
    })
   
    } catch (error) {
      setLoading(false)
      toast.error('error accured, please try again')
    }
    

    // console.log(await response.json()) ;
    //  const POST=await fetch("api/FETCH", {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8"
    //     },
    //     body:JSON.stringify(data),
        
    //   });
    //   console.log(await POST.json())
    
}

  return (
    <div className='mt-5'>
      <ToastContainer/>
      <div>
        <div className="flex flex-col bg-gray-100 my-5">
  <div className="flex items-center justify-between mb-4">
    <p >formkan buuxi si aan anaga kugu iibino wax walbo aad rabto ama toos adiga ugado <b><a href='https://hostbile.com/client/index.php?rp=/store/shared-hosting/personal'>go to hostibile</a></b></p>
  </div>
</div>

      </div>
<form onSubmit={handleSubmit(formSubmit)}>

<div className='flex justify-center mx-2' >

<div>


<div className='flex my-4 gap-5'>
<div>

<label className="mb-2">E-mail:</label> 
<input placeholder='geli e-mail-kaga' type='email' {...register(`email`)}  className="w-full border border-[#FF5111] rounded-md p-2 text-gray-700" />
{errors.email && <span className="text-red-600">{errors.email.message}</span>}
</div>
<div>

<label className="mb-2">name:</label> 
<input placeholder='geli name-kaga'  {...register(`name`)}  className="w-full border border-[#FF5111] rounded-md p-2 text-gray-700" />
{errors.email && <span className="text-red-600">{errors.name.message}</span>}
</div>
</div>
<div className='flex my-4 gap-5'>
<div>
  
  <label className="mb-2">phone:</label>
   
  <input placeholder='geli tell-kaga'  {...register(`phone`)}   className="w-full border border-[#FF5111] rounded-md p-2 text-gray-700" />
  {errors.phone && <span className="text-red-600">{errors.phone.message}</span>}
  </div>
<div>
<label className="mb-2">Domain name:</label> 
<input placeholder='geli Domain name-ka' {...register(`Domain`)}   className="w-full border border-[#FF5111] rounded-md p-2 text-gray-700" />
{errors.Domain && <span className="text-red-600">{errors.Domain.message}</span>}
</div>

  
</div>
<label className="mb-2">message: </label> 
<textarea placeholder='geli dalabkga halkaan' {...register(`message`)}   className="w-full border border-[#FF5111] rounded-md  text-gray-700 focus:border-[#0B3870]" />
{errors.message && <span className="text-red-600">{errors.message.message}</span>}

<button type='submit' className=" w-full px-4 py-2 rounded-md bg-[#FF5111] text-white font-bold shadow-md hover:bg-[#0B3870] transition duration-150">{leading ? "..." :"place order"}</button>

</div>
</div>
</form>

    
   
    </div>
    
  )
}
