import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import SpeedDialComp from '../../SpeedDial/SpeedDialComp';

export default function CommCards({name,photo, spec, links}) {
  return (
    <Card sx={{ minHeight: '52vh', width: 320, borderRadius:"1.5vw", border:"none", position:"relative" }}>
      <SpeedDialComp links={links}  />
      <CardCover sx={{position:"absolute"}}>

        <img
        className='object-contain'
          src={photo}
          // srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="title-lg" textColor="#fff">
          {name}
        </Typography>
        <Typography
        //   startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          {spec}
        </Typography>
      </CardContent>
    </Card>
  );
}
