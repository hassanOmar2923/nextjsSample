"use client"
import { useForm } from "react-hook-form";  
import { yupResolver } from '@hookform/resolvers/yup';
export default function UseForm({formData,validation}){
// const Yupvalidation=validation
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
      } = useForm({ resolver: yupResolver(validation) });
// console.log("validation",validation)
const formSubmit=(data) => {
    console.log(data)
}
    // console.log(formData)
    return (
        <div className='flex justify-center'>
            
            <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col mb-4">

             {formData?.map((data)=>{
               return <>
               <label className="mb-2">{data}</label> 
                <input  {...register(`${data}`, { required: true })} className="w-full border border-gray-300 rounded-md p-2 text-gray-700" />
                {errors.data && <span className="text-red-600">Email is required</span>}
                </>
            })} 
                <button type="submit" className="bg-blue-500 text-black px-4 py-2 rounded-md mt-4">Login</button>
            </form>
    
    </div>
    )
}