import { Container, Grid, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import React, { useContext, useState } from 'react';
import { CreateResidentContext2 } from '../../context/CreateResidentContext2';
import AddRoomsForm from './AddRoomsForm';
import RoomList from './RoomList';

const CustomButtonRoot = styled('button')(`
    background-color: none;
    padding: 10px 20px;
    border-radius: 30px;
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

function RoomsInResident() {
  const [isAdding, setIsAdding] = useState(false);
  const { createResident, setCreateResident } = useContext(CreateResidentContext2);

  const addRoomCollection = (room) => {
    const clone = [...createResident.roomCollection];
    clone.push(room);
    setCreateResident((cur) => ({ ...cur, roomCollection: clone }));
    setIsAdding(false);
  };

  const deleteRoomCollection = (index) => {
    const clone = [...createResident.roomCollection];
    clone.splice(index, 1);
    setCreateResident((cur) => ({ ...cur, roomCollection: clone }));
  };

  const editRoomCollection = (index, editRoom) => {
    const clone = [...createResident.roomCollection];
    clone[index] = editRoom;
    setCreateResident((cur) => ({ ...cur, roomCollection: clone }));
  };

  const handleClickAdd = () => {
    setIsAdding(true);
  };

  return (
    <Container maxWidth='md'>
      <Stack spacing={2} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Grid item>
          <Typography sx={{ fontSize: '36px' }}>ห้องทั้งหมดของคุณ</Typography>
        </Grid>
        {createResident.roomCollection.map((room, index) => (
          <RoomList
            key={index}
            index={index}
            room={room}
            deleteRoomCollection={deleteRoomCollection}
            editRoomCollection={editRoomCollection}
          />
        ))}
      </Stack>

      {isAdding ? (
        <AddRoomsForm addRoomCollection={addRoomCollection} />
      ) : (
        <Grid item sx={{ display: 'flex', justifyContent: 'end' }}>
          <Grid container xs={12} justifyContent='end'>
            <Grid
              item
              xs={2.5}
              sx={{
                display: 'flex',
                justifyContent: 'end',
                marginBottom: '25px',
              }}
            >
              <CustomButton
                sx={{
                  background: '#64CEEF',
                  color: '#fff',
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  marginBottom: '50px',
                  marginTop: '20px',
                  height: '40px',
                }}
                onClick={handleClickAdd}
              >
                <Typography
                  style={{
                    fontSize: 16,
                    justifyContent: 'start',
                  }}
                >
                  เพิ่มประเภทห้องพัก
                </Typography>
              </CustomButton>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default RoomsInResident;
