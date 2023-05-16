import React, { ReactNode } from "react";
import CardComponet from "../CardComponent";
import { ThemeProvider } from "@mui/material/styles";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import theme from "@utils/theme/theme";
import { StyledContainer } from "./styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { AlertType } from "@src/types/FormFields";
import { Typography } from "@mui/material";

interface AlertCardProps {
  messages: string[];
  heading?: string;
  feedback?: string;
  type?: AlertType;
  children?: ReactNode;
  className?: string;
}

const AlertCard: React.FC<AlertCardProps> = ({
  messages,
  heading,
  feedback,
  type,
  children,
  className,
}) => {
  return (
    <StyledContainer className={className} $isDisplayed={true}>
      <CardComponet>
        <ThemeProvider theme={theme}>
          {type === "success" ? (
            <CheckCircleOutlineIcon color="success" fontSize="large" />
          ) : type === "error" ? (
            <ErrorOutlineIcon color="error" fontSize="large" />
          ) : type === "warning" ? (
            <WarningAmberIcon color="warning" fontSize="large" />
          ) : null}
        </ThemeProvider>
        {heading ? (
          <Typography variant="h6" fontWeight={600}>
            {heading}
          </Typography>
        ) : null}
        {feedback ? <Typography variant="body1">{feedback}</Typography> : null}
        <StyledContainer className={"message"} $isDisplayed={true}>
          {messages.map((message, index) => (
            <Typography variant="body1" key={index}>
              {message}
            </Typography>
          ))}
        </StyledContainer>

        {children}
      </CardComponet>
    </StyledContainer>
  );
};

export default AlertCard;
