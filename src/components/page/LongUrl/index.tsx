import FormComponent from "@components/common/FormComponent";
import React from "react";
import { longUrlInitialVal, longUrlFormFields } from "../index.data";
import { longUrlSchema } from "@src/schema";
import { UrlComponentProps } from "@src/types/FormFields";
import FormLayout from "@src/components/common/FormLayout";
import SelectType from "../SelectType";

const LongUrl: React.FC<UrlComponentProps> = ({ url }) => (
  <FormLayout bodyText={url} buttonText={"Shorten"}>
    <FormComponent
      formFields={longUrlFormFields}
      initialValues={longUrlInitialVal}
      formSchema={longUrlSchema}
    />
  </FormLayout>
);
export default LongUrl;
