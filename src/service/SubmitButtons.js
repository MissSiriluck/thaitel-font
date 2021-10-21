import * as React from "react";
import Stack from "@mui/material/Stack";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { styled } from "@mui/system";

const CustomButtonRoot = styled("span")(`
  background-color: #DC3C3F;
  display: flex;
  padding: 5px 20px;
  margin-top: 12px;
  height: 27px; 
  width: 60vw;
  border-radius: 4px;
  color: #fff;
  font-weight: 400;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #FF0005;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #9a2a2c;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`);

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

export default function UnstyledButtonsSpan({ children }) {
  return (
    <Stack spacing={2} direction="row">
      <CustomButton>{children}</CustomButton>
      {/* <CustomButton disabled>Disabled</CustomButton> */}
    </Stack>
  );
}
