import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import HarmonieTextInput from "../utilities/customFormControls/HarmonieTextInput";

export default function ProductAdd() {
  const initialValues = { productName: " ", unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required("productname mandatory/obligatorisch/zorunlu"),
    unitPrice: Yup.number().required("productprice mandatory/obligatorisch/zorunlu"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
           <HarmonieTextInput  name="productName" placeholder="productname"/> 

           <HarmonieTextInput  name="unitPrice" placeholder="productprice"/> 

          {/*
           (Wir haben die folgenden Komponenten selbst bei Utilities entworfen und
           sie in den beiden Zeilen oben platziert, hier nicht erforderlich)
           (bu componentleri kendimiz utilities de tasarlayip yukarida iki satira düsürdük buraya gerek kalmadi)

           <FormField>
            <Field name="productName" placeholder="produktname"></Field>

            <ErrorMessage
              name="productName"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField> 

          <FormField>
            <Field name="unitPrice" placeholder="unitprice"></Field>
            <ErrorMessage
              name="unitPrice"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>  */}
          
          <Button color="green" type="submit">
            Hinzufügen
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
