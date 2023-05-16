import { Typography } from "@mui/material";
import React, { FormEventHandler, ReactNode } from "react";
import CustomButton from "../CustomButton";
import FlexContainer from "../FlexContainer";

interface FormLayoutProps {
  children: ReactNode;
  bodyText?: string;
  buttonText: string;
}

const FormLayout: React.FC<FormLayoutProps> = ({
  children,
  bodyText,
  buttonText,
}) => {
  return (
    <FlexContainer $width="500" $flexDirection="column">
      {children}
      <Typography variant="body1" component={"p"}>
        {bodyText ? "Your URL is: " + bodyText : ""}
      </Typography>
      <CustomButton type="submit" $buttonType="primary" $buttonSize="standard">
        {buttonText}
      </CustomButton>
    </FlexContainer>
  );
};

export default FormLayout;
