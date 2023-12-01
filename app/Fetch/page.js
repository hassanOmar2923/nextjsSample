"use client"
import UseForm from "@/lib/useForm";
import axios from "axios";
import { FileConfig } from "./fileConfig";

export const fetchSampleData=async()=>{
  return await axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => res?.data);
}
export default async function Fetch(){
    const importantFile=FileConfig
    // console.log("importantFile",importantFile.schema)
  const {data}=await axios.get("https://jsonplaceholder.typicode.com/todos/1")
  const sampleData=await fetchSampleData()

//   console.log("data",data)
  
    return ( 
        <div> 
          <p>{importantFile.page}</p>
          <UseForm formData={importantFile.schema._nodes} validation={importantFile?.schema}/>
            <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            {importantFile.columns.map(column =>{
              return <th className="border p-2">{column}</th>
            
            })}
            

          </tr>
        </thead>

            {sampleData?.map((data,index)=>{
                return  <tr key={index}>
                      {/* {importantFile.columns.map(column =>{
                        // console.log(`${data}.${column}`)
              // return <td className="border p-2">{"[data].`${column}`}"}</td>
              // return <td className="border p-2">{`${[data]}.${column}`}</td>
              return <td className="border p-2">`${{data}}.${{column}}`</td>
            })} */}
                    <td className="border p-2">{data.userId}</td>
                    <td className="border p-2">{data.id}</td>
                    <td className="border p-2">{data.title}</td>
                    <td className="border p-2"> {data.completed == true ? "yes":"no"}</td>
                    <td className="border p-2">
                    <button type="submit" className="bg-blue-500 text-black px-4 py-2 rounded-md mt-4">Login</button>
                    <button type="submit" className="bg-blue-500 text-black px-4 py-2 rounded-md mt-4">Login</button>

                    </td>

                    </tr>
               
            })}
            </table>

        </div>
    )
}
