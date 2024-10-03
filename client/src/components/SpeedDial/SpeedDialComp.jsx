import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { IoMail } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';




export default function SpeedDialComp({links}) {

  const actions = [
    { icon: <IoMail size={25} />, name: 'Mail', link: `mailto:${links?.mail || ''}` }, 
    { icon: <IoLogoLinkedin size={25} />, name: 'Linkedin', link: links?.linkedin }, 
  ];
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNavigate = (link) => {
    if (link) {
      // Opens the link in a new tab/window
      window.open(link, '_blank');
    }
  };

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', position:"absolute",right:"0%", zIndex:"1000", bottom:"0%",  flexGrow: 1, bgcolor:"white" }}>
      <SpeedDial
        ariaLabel="SpeedDial controlled"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon sx={{ color: 'black' }} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        FabProps={{
          sx: {
            bgcolor: 'white', 
            '&:hover': {
              bgcolor: 'white',
            },
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              handleNavigate(action.link); // Navigate to the link
              handleClose(); // Close the SpeedDial
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
