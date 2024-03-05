import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, CardActions, CardContent, Typography, Dialog, DialogActions, DialogTitle } from '@mui/material';
import SimpleAlert from './Alert';
import DeleteIcon from '@mui/icons-material/Delete';


const Appointment = ({userId}) => {
    const [Data, setData] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [alertOpen, setAlertOpen] = useState(false);
    
    useEffect(() => {
        axios.get("http://localhost:3005/viewAppointment")
            .then(response => {
               setData(response.data)
            })
            .catch(err => console.log(err));
    }, []);
    const filteredData = Data.filter(value => value.userId === userId && value.Status !=='cancelled');
    const cancelHandler = () => {
           selectedAppointment.Status='cancelled'
           
            axios.put("http://localhost:3005/Appointmentedit/" + selectedAppointment._id, selectedAppointment)
                .then((response) => {
                 setAlertOpen(true)
                })
                .catch(err => console.log(err));
        
    };
    return (
        <div>
            <SimpleAlert open={alertOpen} onClose={() => setAlertOpen(false)} message="Appointment cancelled" />
            <Button variant="contained" href='/prof'>Book Appointment</Button> <br /> <br />
            {filteredData.map((value, index) => {
                const Bcolor = value.Status === 'confirmed' ? 'rgba(0, 255, 0, 0.1)' : 
                                    value.Status === 'rejected' ? 'rgba(255, 0, 0, 0.1)' : 
                                    'rgba(255, 255, 0, 0.1)';
                const Tcolor = value.Status === 'confirmed' ? 'green' : 
                                  value.Status === 'rejected' ? 'red' : 
                                  'black';

                return (
                 
                    <div key={index} style={{ display: 'flex', justifyContent: 'center'}}>
                           
                        <Card sx={{ minWidth: 600, backgroundColor: Bcolor, marginBottom:'20px'}} >
    <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           {value.Incharge}
        </Typography>
        <Typography variant="h7" component="div">
            <small>Date:</small>{value.Date}  <small>Time:</small>{value.Time}
        </Typography>
        <Typography sx={{ mb: 1.5, color: Tcolor }}>
            {value.Status}
        </Typography>
        {value.Helper !== null && (
                                <Typography variant="body2">
                                    <small>Remarks:</small>{value.Helper}
                                </Typography>
                            )}

    </CardContent>
    <CardActions>
    {value.Status === 'rejected' ? (
        <DeleteIcon />
    ) : (
        <Button size="small" onClick={() => {
            setOpenDialog(true);
            setSelectedAppointment(value);
        }}>cancel</Button>
    )}
</CardActions>
</Card>
<Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
    <DialogTitle>Are you sure to cancel?</DialogTitle>
    <DialogActions>
        <Button onClick={() => {
            // Handle cancel logic here
            setOpenDialog(false);
        }}>No</Button>
        <Button onClick={() => {
           cancelHandler()
            setOpenDialog(false);
        }}>Yes</Button>
    </DialogActions>
</Dialog>

                    </div>
                );
            })}
        </div>
    );
};

export default Appointment;
