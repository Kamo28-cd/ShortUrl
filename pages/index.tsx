import axios from "@src/api/axios";
import React, { useEffect, useState } from "react";
import LongUrl from "@src/components/page/LongUrl";
import FormObserver from "@src/components/common/FormComponent/FormObserver";
import { Formik, Form } from "formik";
import { longUrlSchema, shortUrlSchema } from "@src/schema";
import {
  longUrlInitialVal,
  shortUrlInitialVal,
} from "@src/components/page/index.data";
import ShortUrl from "@src/components/page/ShortUrl";
import SelectType from "@src/components/page/SelectType";
import { Typography } from "@mui/material";
import { StyledMain } from "@src/components/common/StyledMain";
import { AlertType, ResponseURL } from "@src/types/FormFields";
import AlertComponent from "@src/components/page/AlertComponent";
import PreviousUrls from "@src/components/page/PreviousUrls";

export type ToggleType = "longUrl" | "shortUrl";
export interface DataType {
  longUrlInput?: string;
  shortUrlInput?: string;
}

const initialUrls = {
  urlShort: "",
  urlLong: "",
};

export default function Home() {
  const [responseUrl, setResponseUrl] = useState<ResponseURL>(initialUrls);
  const [toggleType, setToggleType] = useState<ToggleType>("longUrl");
  const [alertType, setAlertType] = useState<AlertType>();
  const [alertMessage, setAlertMessage] = useState([""]);
  const [toggleModal, setToggleModal] = useState(false);
  const [prevUrls, setPrevUrls] = useState<ResponseURL[]>([initialUrls]);

  useEffect(() => {
    getUrls();
  }, [responseUrl]);

  const heading =
    toggleType === "longUrl" ? (
      <Typography variant="h4" component={"h2"} style={{ textAlign: "center" }}>
        Lets shorten your URL
      </Typography>
    ) : (
      <Typography variant="h4" component={"h2"} style={{ textAlign: "center" }}>
        Get your original URL
      </Typography>
    );

  const alertObject = { alertType, alertMessage, toggleModal, setToggleModal };

  const getUrls = async () => {
    try {
      const response = await axios.get(`/api/url/get-all`, {
        headers: { "Content-Type": "application/json" },
      });

      setPrevUrls(response.data.url);
    } catch (err) {}
  };

  const handleSubmit = async (data: DataType) => {
    const urlType: ToggleType =
      data.longUrlInput?.length && data.longUrlInput?.length > 1
        ? "longUrl"
        : "shortUrl";

    const apiURI = urlType === "longUrl" ? "send" : "get";

    try {
      const response = await axios.post(
        `/api/url/${apiURI}-long`,
        JSON.stringify({
          url: urlType === "longUrl" ? data.longUrlInput : data.shortUrlInput,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setResponseUrl(response.data["url"]);
    } catch (err: any) {
      console.log("Error", err.response.data.msg);
      setToggleModal(true);
      setAlertMessage([`${err.response.data.msg}`]);
      setAlertType("error");
    }
  };

  return (
    <StyledMain>
      <Formik
        validationSchema={
          toggleType === "longUrl" ? longUrlSchema : shortUrlSchema
        }
        initialValues={
          toggleType === "longUrl" ? longUrlInitialVal : shortUrlInitialVal
        }
        onSubmit={(data) => handleSubmit(data)}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <FormObserver />
            {heading}
            <SelectType
              handleSelect={setToggleType}
              handleChange={setFieldValue}
            />
            {toggleType === "longUrl" ? (
              <LongUrl url={responseUrl.urlShort} />
            ) : (
              <ShortUrl url={responseUrl.urlLong} />
            )}
          </Form>
        )}
      </Formik>
      <PreviousUrls previousUrls={prevUrls} />

      <AlertComponent heading="Ooops! Something went wrong" {...alertObject} />
    </StyledMain>
  );
}
