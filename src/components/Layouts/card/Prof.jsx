import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import { Buffer } from 'buffer';
import InfoIcon from '@mui/icons-material/Info';
import Professionalpg from '../Pages/Professionalpg';


const Prof = ({userId}) => {
  var [Professional, setProfessional] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3005/viewProfessional")
      .then(response => {
        setProfessional(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  var [selected,setSelected]=useState();
  var [update,setUpdate]=useState(false);

  const updateValues = (value) =>{
    setSelected(value);
    setUpdate(true);
  }
  var result =<div style={{ display: 'flex', flexWrap: 'wrap' }}>
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
            <InfoIcon   onClick={()=>updateValues(value)}/>
          
            </Typography>
          </div>
        </CardContent>
      </Card>
    )
  })}
</div>

if (update) {
  result=<Professionalpg data={selected} userId={userId} method='put'/>
 }
  return (result);
}

export default Prof;
