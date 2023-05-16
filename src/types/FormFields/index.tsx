import SelectFormField from "@components/common/FormFields/SelectFormField";

import { TextFormField } from "@components/common/FormFields/TextFormField";
import NumberFormField from "@components/common/FormFields/NumberFormField";

import { AnyObject } from "yup/lib/types";
import StringSchema, { RequiredStringSchema } from "yup/lib/string";
import { RequiredNumberSchema } from "yup/lib/number";
import ObjectSchema, {
  Assign,
  ObjectShape,
  TypeOfShape,
  AssertsShape,
} from "yup/lib/object";

import { RequiredBooleanSchema } from "yup/lib/boolean";
import { longUrlSchema, shortUrlSchema } from "../../schema";
import { RemoveNullKeys } from "../HelperTypes";
import { ToggleType } from "pages";
import { FormEventHandler } from "react";

export type SelectFormFieldType = typeof SelectFormField;
export type TextFormFieldType = typeof TextFormField;
export type NumberFormFieldType = typeof NumberFormField;

//n
export interface UserFormParams {
  formFields: Array<{
    label: string;
    name: string;
    component: SelectFormFieldType | TextFormFieldType | NumberFormFieldType;
    options?:
      | Array<string | number>
      | {
          label: string;
          value: string;
        }[];
  }>;
  initialValues: {
    sex?: string;
    guaranteePeriod?: string;
    insuredLives?: string;
    paymentFrequency?: string;
    dob?: string;
    spouseDob?: string;
    incomePercentOnSecondLife?: string;
    spouseSex?: string;
    [x: string]: string | number | undefined;
  };
  formSchema?: typeof longUrlSchema | typeof shortUrlSchema;
}

export interface UrlComponentProps {
  url: string;
}

export type AlertType = "error" | "success" | "warning";
//n
export type ISelectField = Array<{
  id?: string;
  label: string;
  value: string;
  name?: string;
}>;

export interface ResponseURL {
  urlShort: string;
  urlLong: string;
}
