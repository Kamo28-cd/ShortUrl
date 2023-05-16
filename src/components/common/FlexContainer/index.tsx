import React, { ReactNode } from "react";
import { StyledWrapper } from "./styles";

interface CardContainerProps {
  children: ReactNode;
  $flexDirection?: "column" | "row";
  $width?: string;
}

const FlexContainer: React.FC<CardContainerProps> = ({
  children,
  $flexDirection,
  $width,
}) => {
  return (
    <StyledWrapper
      $flexDirection={$flexDirection && $flexDirection}
      className={"container"}
      width={$width && $width}
    >
      {children}
    </StyledWrapper>
  );
};

export default FlexContainer;
