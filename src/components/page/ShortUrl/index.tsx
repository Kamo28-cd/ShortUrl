import FormComponent from "@src/components/common/FormComponent";
import { shortUrlSchema } from "@src/schema";
import React from "react";
import { shortUrlFormFields, shortUrlInitialVal } from "../index.data";
import { UrlComponentProps } from "@src/types/FormFields";
import FormLayout from "@src/components/common/FormLayout";

const ShortUrl: React.FC<UrlComponentProps> = ({ url }) => (
  <FormLayout bodyText={url} buttonText={"Get URL"}>
    <FormComponent
      formFields={shortUrlFormFields}
      initialValues={shortUrlInitialVal}
      formSchema={shortUrlSchema}
    />
  </FormLayout>
);
export default ShortUrl;
