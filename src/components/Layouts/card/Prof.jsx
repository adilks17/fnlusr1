import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import { Buffer } from 'buffer';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Prof = () => {
  var [Professional, setProfessional] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3005/viewProfessional")
      .then(response => {
        setProfessional(response.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Professional.map((value, index) => {
        return (
          <Card key={index} style={{ width: 500, margin: '10px', display: 'flex' }}>
            <CardMedia
              component="img"
              style={{ width: 240, height: '100%' }}
              image={`data:image/jpeg;base64,${Buffer.from(value.image1.data).toString('base64')}`}
              alt="..."
            />
            <CardContent style={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px' }}>
              <div>
                <Typography component="h2" variant="h5">
                  {value.Name.toUpperCase()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <small>{value.Workinfo} <br />
                  {value.District},{value.State} <br />
                    {value.Contact} <br />
                    {value.Email}</small>
                </Typography>
              </div>
              <div style={{ alignSelf: 'flex-end' }}>
                <Typography variant="body2" color="text.secondary">
                  <QuestionAnswerIcon /><a href={value.Linkedin}> <LinkedInIcon /></a>
                </Typography>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  );
}

export default Prof;
