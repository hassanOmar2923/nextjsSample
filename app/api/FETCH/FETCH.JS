export const POST=async (req,)=>{

    const data = await req.json();
     console.log(data.data)
    console.log("object")
    return Response.json({status:true,message:"Success",});

}