import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { OfficersDescription } from "../.././../api/userAssignment";
// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Grid,
    TextField,
    useMediaQuery
} from '@mui/material';

import AnimateButton from 'ui-component/extended/AnimateButton';
import DateTimePicker from 'react-datetime-picker';


const AddOfficerRegister = ({ ...others }) => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    const [followUpDate, onChangeDate] = useState(new Date());
    const [description, setDescription] = useState('');
    const [place, setPlace] = useState('');
    const [assignTo, setAssignTo] = useState('');

    const addData = (() => {
        OfficersDescription.addOfficersDescription(
            {
                description: description,
                place: place,
                assignToOfficer: assignTo,
                followUpDateOfficer: followUpDate
            }
        )
    })


    return (
        <>

            <Grid container spacing={matchDownSM ? 0 : 2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Description"
                        margin="normal"
                        name="description"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        sx={{ ...theme.typography.customInput }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Place"
                        margin="normal"
                        name="lname"
                        type="place"
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        sx={{ ...theme.typography.customInput }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={matchDownSM ? 0 : 2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Assign To"
                        margin="normal"
                        name="assignTo"
                        type="text"
                        value={assignTo}
                        onChange={(e) => setAssignTo(e.target.value)}
                        sx={{ ...theme.typography.customInput }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <DateTimePicker onChange={onChangeDate} value={followUpDate} />
                </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
                <Button
                    disableElevation
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="secondary"
                    onClick={() => addData()}
                >
                    Submit
                </Button>
            </Box>
        </>
    );
};

export default AddOfficerRegister;
