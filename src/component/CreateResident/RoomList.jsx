import { Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import EditRoomForm from './EditRoom';

const CustomButtonRoot = styled('button')(`
    background-color: none;
    padding: 10px 20px;
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

function RoomList({ index, room, deleteRoomCollection, editRoomCollection }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleClickDeleteRoom = () => {
    deleteRoomCollection(index);
  };

  const handleClickEdit = () => {
    setIsEdit(true);
  };

  if (isEdit) {
    return <EditRoomForm index={index} room={room} editRoomCollection={editRoomCollection} setIsEdit={setIsEdit} />;
  }

  return (
    <Stack
      xs={12}
      direction='row'
      spacing={2}
      sx={{
        padding: '20px',
        border: '2px solid #c4c4c4',
        borderRadius: '10px',
        justifyContent: 'space-between',
        height: '14vh',
      }}
    >
      <Grid item>
        <Typography sx={{ fontSize: '18px' }}>
          {/* ห้องมาตรฐานเตียงเดี่ยว */}
          {/* {props.roomName} */}
          {room.roomTypeOf}
        </Typography>
      </Grid>

      <Grid
        item
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
          xs={12}
        >
          <Typography>จำนวนห้องพัก :</Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              border: '1px solid #c4c4c4',
              borderRadius: '5px',
              marginLeft: '20px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              style={{
                fontSize: 14,
                marginBottom: '1px',
                justifyContent: 'center',
                fontWeight: 500,
                padding: '0 10px',
                width: '50px',
              }}
              sx={{ display: 'flex' }}
            >
              {room.roomAmount}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        xs={3}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        spacing={1}
      >
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <CustomButton
            sx={{
              background: '#FFFFFF',
              color: '#07133C',
              border: '1px solid #07133C',
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              height: '40px',
            }}
            onClick={handleClickEdit}
          >
            <Typography
              style={{
                fontSize: 14,
                marginBottom: '1px',
                justifyContent: 'center',
                fontWeight: 500,
                padding: '0 10px',
              }}
            >
              EDIT
            </Typography>
          </CustomButton>
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <CustomButton
            sx={{
              background: '#c62828',
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              height: '40px',
            }}
            onClick={handleClickDeleteRoom}
          >
            <Typography
              style={{
                fontSize: 14,
                marginBottom: '1px',
                justifyContent: 'center',
                fontWeight: 400,
              }}
            >
              DELETE
            </Typography>
          </CustomButton>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default RoomList;
