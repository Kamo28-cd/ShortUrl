import * as yup from "yup";

const UrlRegExp =
  /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;

export const longUrlSchema = yup.object().shape({
  longUrlInput: yup
    .string()
    .required(
      "Error - Empty Input: Please enter the URL you would like to shorten"
    )
    .matches(UrlRegExp, "Error - Invalid URL: Please enter a valid URL"),
});

export const shortUrlSchema = yup.object().shape({
  shortUrlInput: yup
    .string()
    .required(
      "Error - Empty Input: Please enter the shortened URL to find the original"
    )
    .matches(UrlRegExp, "Error - Invalid URL: Please enter a valid URL"),
});
