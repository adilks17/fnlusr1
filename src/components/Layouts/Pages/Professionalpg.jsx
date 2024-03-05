import React, { useState } from 'react';
import './Professional.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Buffer } from 'buffer';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import axios from 'axios';
import SimpleAlert from './Alert';
import ChatWindow from './ChatWindow';

const Professionalpg = (props) => {
    const [activeTab, setActiveTab] = useState('about');
    const value = props.data;
    const Pid = props.data.Pid
    const userId = props.userId;
    const [alertOpen, setAlertOpen] = useState(false); // Add this line for alert state

    const [showChat, setShowChat] = useState(false);

    const handleToggleChat = () => {
        setShowChat((prevState) => !prevState);
    };

    const [appointment, setAppointment] = useState({
        'Date': '',
        'Time': '',
        'InchargeId': value.Pid,
        'Incharge': value.Name,
        'Status': 'Waiting for confirmation',
        'Helper': null,
        'userId': userId
    });
    const inputHandler = (event) => {
        const { name, value } = event.target
        setAppointment((appointment) => ({ ...appointment, [name]: value }))
    }

    const handleBookAppointment = () => {
        setOpen(true);
    };

    const handleConfirmAppointment = () => {
        axios.post("http://localhost:3005/newAppointment", appointment)
            .then(() => {
                setAlertOpen(true);
            })
            .catch((err) => console.log(err));
        setOpen(false);
    };
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <SimpleAlert open={alertOpen} onClose={() => setAlertOpen(false)} message="Appointment Requested successfully,check the confirmation!!!" />


            
                <div className='body'>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                    <div className="container emp-profile">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-img">
                                    <img src={`data:image/jpeg;base64,${Buffer.from(value.image1.data).toString('base64')}`} alt=""/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="profile-head">
                                    <h5>{value.Name}</h5>
                                    <h6>{value.Workinfo}</h6>
                                    <p className="profile-rating">RATING : <span>{value.Rating}</span></p>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a
                                                className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
                                                onClick={() => setActiveTab('about')}
                                                href="#home"
                                                role="tab"
                                                aria-controls="home"
                                                aria-selected="true"
                                            >
                                                About
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className={`nav-link ${activeTab === 'timeline' ? 'active' : ''}`}
                                                onClick={() => setActiveTab('timeline')}
                                                href="#profile"
                                                role="tab"
                                                aria-controls="profile"
                                                aria-selected="false"
                                            >
                                                Appointment
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                            <button className="profile-edit-btn" onClick={handleToggleChat}>CHAT</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-work">
                                    <p>Awards & Achievements</p>
                                    {value.Awards}<br/>
                                    {value.Achievements}
                                    <p>Social</p>
                                    <a href={value.Instagram}><InstagramIcon/></a>
                                    <a href={value.Facebook}><FacebookIcon/></a>
                                    <a href={value.X}><XIcon/></a>
                                    <a href={value.Linkedin}><LinkedInIcon/></a>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="tab-content profile-tab" id="myTabContent">
                                    <div className={`tab-pane fade ${activeTab === 'about' ? 'show active' : ''}`} id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Qualification</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{value.Qualification}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{value.Experience}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{value.Email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{value.Contact}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Office Address</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{value.OfficeAddress}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tab-pane fade ${activeTab === 'timeline' ? 'show active' : ''}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Monday</label>
                                            </div>
                                            <div className="col-md-6">
                                                {value.workingHours && value.workingHours.monday && value.workingHours.monday.closed ? <p>closed</p> : <p>{value.workingHours.monday.from}-{value.workingHours.monday.to}</p>} 
                                            </div> 
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Tuesday</label>
                                            </div>
                                            <div className="col-md-6">
                                                {value.workingHours && value.workingHours.tuesday && value.workingHours.tuesday.closed ? <p>closed</p> : <p>{value.workingHours.tuesday.from}-{value.workingHours.tuesday.to}</p>} 
                                            </div> 
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Wednesday</label>
                                            </div>
                                            <div className="col-md-6">
                                                {value.workingHours && value.workingHours.wednesday && value.workingHours.wednesday.closed ? <p>closed</p> : <p>{value.workingHours.wednesday.from}-{value.workingHours.wednesday.to}</p>} 
                                            </div> 
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Thursday</label>
                                            </div>
                                            <div className="col-md-6">
                                                {value.workingHours && value.workingHours.thursday && value.workingHours.thursday.closed ? <p>closed</p> : <p>{value.workingHours.thursday.from}-{value.workingHours.thursday.to}</p>} 
                                            </div> 
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Friday</label>
                                            </div>
                                            <div className="col-md-6">
                                                {value.workingHours && value.workingHours.friday && value.workingHours.friday.closed ? <p>closed</p> : <p>{value.workingHours.friday.from}-{value.workingHours.friday.to}</p>} 
                                            </div> 
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Saturday</label>
                                            </div>
                                            <div className="col-md-6">
                                                {value.workingHours && value.workingHours.saturday && value.workingHours.saturday.closed ? <p>closed</p> : <p>{value.workingHours.saturday.from}-{value.workingHours.saturday.to}</p>} 
                                            </div> 
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Sunday</label>
                                            </div>
                                            <div className="col-md-6">
                                                {value.workingHours && value.workingHours.sunday && value.workingHours.sunday.closed ? <p>closed</p> : <p>{value.workingHours.sunday.from}-{value.workingHours.sunday.to}</p>} 
                                            </div> 
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <label>Others</label><br/>
                                                <p>Session Charge:{value.Rate}</p>
                                                <Button variant="contained" onClick={handleBookAppointment}>Book Appointment</Button>
                {/* {appointment && <p>Your appointment details: {appointment}</p>} */}
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Book Appointment</DialogTitle>
                    <DialogContent>
                        <TextField
                            margin="dense"
                            id="appointment-date"
                            label="Appointment Date"
                            type="date"
                            name='Date'
                            value={appointment.Date}
                            onChange={inputHandler}
                            fullWidth
                        />
                        <br />
                        
                        <TextField
                            margin="dense"
                            id="appointment-time"
                            label="Appointment Time"
                            type="time"
                          name='Time'
                            value={appointment.Time}
                            onChange={inputHandler}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleConfirmAppointment}>Confirm</Button>
                    </DialogActions>
                </Dialog>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {showChat && <ChatWindow onClose={handleToggleChat}  props={{ userId, Pid }}  />}
           
        </div>
    );
};


export default Professionalpg;
