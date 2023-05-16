import styled, { css } from "styled-components";

export const StyledWrapper = styled.div<{
  $flexDirection?: string;
  width?: string;
}>(({ $flexDirection, width }) => {
  return css`
    width: ${width ? width + "px" : "auto"};
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: ${$flexDirection ? $flexDirection : "row"};

    .MuiOutlinedInput-input {
      width: 100%;
    }
  `;
});
