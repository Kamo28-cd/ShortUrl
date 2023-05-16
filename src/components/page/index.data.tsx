import { TextFormField } from "@components/common/FormFields/TextFormField";

export const longUrlFormFields = [
  {
    label: "Enter Original URL to Shorten",
    name: "longUrlInput",
    component: TextFormField,
  },
];

export const longUrlInitialVal = {
  longUrlInput: "",
};

export const shortUrlFormFields = [
  {
    label: "Enter Shortened URL to get Original",
    name: "shortUrlInput",
    component: TextFormField,
  },
];

export const shortUrlInitialVal = {
  shortUrlInput: "",
};
