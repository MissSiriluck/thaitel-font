import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { styled } from "@mui/system";

//customize google style
const FacebookCustomButtonRoot = styled("button")(`
      background-color: #415DAE;
      color: #fff;
      padding: 10px 20px;
      border-radius: 5px; 
      height: 51px;   
      font-weight: 600;
      font-family: 'Noto Sans Thai', sans-serif;
      font-size: 14px;
      transition: all 200ms ease;
      cursor: pointer;
      box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
      border: none;
      outline: none;
  
      &:hover {  
          background-color: #677dbe;
      }
  
      &.${buttonUnstyledClasses.active} {
          background-color: #2d4179;
      }
  
      &.${buttonUnstyledClasses.focusVisible} {
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
  `);

export function FacebookCustomButton(props) {
  return <ButtonUnstyled {...props} component={FacebookCustomButtonRoot} />;
}
