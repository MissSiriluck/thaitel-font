import React, { useContext, useState } from "react";
//Material 
import { Grid, Box } from "@mui/material";
// import { BackgroundContainer } from "../assets/images/bg_container_residentregisterpage2.jpeg";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessIcon from "@mui/icons-material/Business";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import Typography from "@mui/material/Typography";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { height, styled } from "@mui/system";
import ChoiceChooseTypeForm from "./ChoiceChooseTypeForm";

const CustomButtonRoot = styled("button")(`
    background-color: none;
    padding: 5px 20px;
    border-radius: 10px;
    color: #fff;
    font-weight: 600;
    font-family: 'Noto Sans Thai', sans-serif;
    font-size: 14px;
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
`);

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

function ChooseTypeForm({ createResident, setCreateResident, createResidentError, setCreateResidentError }) {

    const handleChangeChooseType = e => {
      setCreateResident({ ...createResident, residentTypeOf: e.target.value });
    }

    return (
  <FormControl component="fieldset" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', padding: '20px' }}>
  <FormLabel component="legend" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center', width: '100%'}}
  >
    <Typography sx={{fontSize:'19px', fontWeight: 400, color: '#000'}}>
      ประเภทที่พัก
    </Typography>
  </FormLabel>
  <RadioGroup row aria-label="resident" name="row-radio-buttons-group" >
    <FormControlLabel value="HOTEL" control={<Radio />} 
    checked={createResident.residentTypeOf === 'HOTEL'.toUpperCase()}
    onChange={handleChangeChooseType}
    label={ 
      <ChoiceChooseTypeForm typeResident={"Hotel"} iconResident={
        <BusinessIcon
              sx={{
                fontSize: "75px",
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                color: "black",
              }}
            />
      }/>
    } 
    />
    <FormControlLabel value="APARTMENT" control={<Radio />} 
    onChange={handleChangeChooseType}
    checked={createResident.residentTypeOf === 'APARTMENT'.toUpperCase()}
    label={ 
      <ChoiceChooseTypeForm typeResident={"Apartment"} iconResident={
        <ApartmentIcon
              sx={{
                fontSize: "75px",
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                color: "black",
              }}
              
            />
      } 
      />
    }
      />
    <FormControlLabel value="VILLA" control={<Radio />} 
    onChange={handleChangeChooseType}
    checked={createResident.residentTypeOf === 'VILLA'.toUpperCase()}

    label={
      <ChoiceChooseTypeForm typeResident={"Villa"} 
      sx={{}}
      iconResident={
        <HolidayVillageIcon
              sx={{
                fontSize: "75px",
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                color: "black",
              }}
            />
      }/>
    }
    />
    {createResidentError.residentTypeOf ? <Typography sx={{color: '#d32f2f', fontSize:'13px'}}> {createResidentError.residentTypeOf}</Typography>: ""}
  </RadioGroup>
</FormControl>

    )
}

export default ChooseTypeForm
