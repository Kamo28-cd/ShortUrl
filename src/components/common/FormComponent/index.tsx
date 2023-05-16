import React, { ReactNode } from "react";
import { Field, Form, Formik } from "formik";
import { UserFormParams } from "@/types/FormFields";
import FormObserver from "./FormObserver";

const FormComponent: React.FC<UserFormParams> = ({ formFields }) => (
  <>
    {/* <FormObserver /> */}
    {formFields.map((fields, index): ReactNode => {
      return (
        <Field
          key={index}
          label={fields.label}
          name={fields.name}
          component={fields.component}
          options={fields.options ? fields.options : ""}
        />
      );
    })}
  </>
);

export default FormComponent;
