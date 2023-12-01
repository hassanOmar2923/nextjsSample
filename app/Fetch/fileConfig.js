"use client"
import * as yup from 'yup';
export const FileConfig={
    formTitle:"Sample",
    endpoint:"sample",
    page:"sample page",
    schema :yup.object({
        id: yup.number().required('id is required'),
        name: yup.string().required('name is required'),
        // phone: yup.number().required('phone is required'),
        // hassan: yup.number().required('phone is required'),
      
      }),
      columns:['userId','id','title','Completed','actions']
}

