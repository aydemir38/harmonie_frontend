import { useField } from 'formik';

import { FormField,Label } from "semantic-ui-react";
import React from 'react'

export default function HarmonieTextInput({...props}) {
    //console.log(props);
    //reflect api
    //bu hook bilgi toplayan fonksiyon (useField)
    const [field,meta] = useField(props) 
   // console.log(meta)
    return (
        
        <FormField error = {meta.touched && !!meta.error}>
            <input {...field} {...props}/>
            {meta.touched && !!meta.error ? (

                <Label pointing basic color="red" content={meta.error}></Label>
            ) : null }
        </FormField>


    )
}
