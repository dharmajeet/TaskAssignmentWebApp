import React, { useEffect, useState } from 'react';
// material-ui
import { gridSpacing } from 'store/constant';
import { OfficersDescription } from "../../api/userAssignment";
import { DataGrid } from '@mui/x-data-grid';
import {
    Grid,
    TextField,
    Button
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const UserDashboard = () => {
    const theme = useTheme();

    const [isLoading, setLoading] = useState(true);
    const [assignments, setAssignments] = useState([]);
    const [searchDate, setSearchDate] = useState("");

    useEffect(async () => {
        setLoading(false);
        let val = await OfficersDescription.getOfficersDescription()
        setAssignments(val)
    }, []);

    const getOfficerDetailsByDate = (async () => {
        if (searchDate !== '') {
            let val = await OfficersDescription.getOfficersData(searchDate)
            setAssignments(val)

        }
    })


    const gridColumns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "description", headerName: "Description", width: 250 },
        { field: "followUpDate", headerName: "Follow Up Date", width: 250 },
        { field: "place", headerName: "Place", width: 250 },
        { field: "assignTo", headerName: "Assigned To", width: 250 },
    ];

    return (
        <Grid container spacing={gridSpacing} >
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid container>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                fullWidth
                                label="Description"
                                margin="normal"
                                name="searchDate"
                                type="text"
                                value={searchDate}
                                onChange={(e) => setSearchDate(e.target.value)}
                                sx={{ ...theme.typography.customInput }}
                            />
                        </Grid>
                        <Button

                            size="large"
                            type="submit"
                            variant="contained"
                            color="secondary"
                            onClick={() => getOfficerDetailsByDate()}
                        >
                            Submit
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <div id="gridPayrent" style={{ height: "700px", width: "100%" }}>
                            <DataGrid columns={gridColumns} rows={assignments} />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default UserDashboard;
