import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';

import SimpleAlert from '../Pages/Alert';
const Heveedit = (props) => {
    var [inputs, setInputs] = useState(props.data);
    const [alertOpen, setAlertOpen] = useState(false);
    const inputHandler = (event) => {
        const { name, value } = event.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
    };

    const addHandler = () => {
        if (props.method === 'put') {
            axios.put("http://localhost:3005/Heveedit/" + inputs._id, inputs)
                .then((response) => {
                    setAlertOpen(true)
                    window.location.reload(false);
                })
                .catch(err => console.log(err));
        }
    };

    const [textFieldWidth, setTextFieldWidth] = useState('100%');

    useEffect(() => {
        const handleResize = () => {
            const maxWidth = 650;
            const windowWidth = window.innerWidth;
            const width = windowWidth > maxWidth ? maxWidth : windowWidth;
            setTextFieldWidth(`${width}px`);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    console.log("inputs.Leve:", inputs.Leve); // Check the current value of inputs.Leve

    return (
        <div>
            
              <SimpleAlert open={alertOpen} onClose={() => setAlertOpen(false)} message="Appointment cancelled" />
            <TextField
                id="standard-textarea"
                label="Leve"
                placeholder="Placeholder"
                multiline
                variant="standard"
                name="Leve"
                value={inputs.Leve}
                onChange={inputHandler}
                style={{ width: textFieldWidth }}
            />
            <br /><br />

            <TextField
                id="standard-textarea"
                label="Response"
                placeholder="Placeholder"
                multiline
                variant="standard"
                name='Response'
                InputProps={{
                  readOnly: true,
                }}
                value={inputs.Response}
                onChange={inputHandler}
                style={{ width: textFieldWidth }}
            />
            <br /><br />
            <Button variant="contained" onClick={addHandler}>Submit</Button>
        </div>
    );
};

export default Heveedit;
