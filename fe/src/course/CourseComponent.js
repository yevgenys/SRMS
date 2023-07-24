import React, {useState} from "react";
import LoadingComponent from "../_common/LoadingComponent";
import {DrawerHeader} from "../_common/drawer";
import SnackbarWrapperComponent from "../_common/SnackbarWrapperComponent";
import {Box, Button, Card, CardActions, CardContent, CardHeader, Grid, TextField} from "@mui/material";
import {createCourse} from "./service";

export default function CourseComponent() {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarType, setSnackbarType] = useState("error");
    const [snackbarMsg, setSnackbarMsg] = useState(null);

    const handleNameChange = (e) => {
        const {value} = e.target;
        setName(value);
    }

    const formValid = Boolean(name);

    const handleCourseCreate = async () => {
        try {
            setLoading(true);
            await createCourse(name);
            setSnackbarMsg(`Course ${name} was created`);
            setSnackbarType("success");
            setSnackbarOpen(true);
        } catch (err) {
            setSnackbarType("error");
            setSnackbarOpen(true);
            const errMsg = err.response !== undefined ? JSON.stringify(err.response.data) : err;
            setSnackbarMsg(`${err.message}: ${errMsg}`);
        } finally {
            setName("");
            setLoading(false);
        }
    };

    return (
        loading ?
            <LoadingComponent/>
            :
            <Box component="main" sx={{p: 1, flexGrow: 0.2}}>
                <DrawerHeader/>
                <Card>
                    <CardHeader title="Add a new course"/>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    name="name"
                                    variant="outlined"
                                    value={name}
                                    required
                                    error={!name}
                                    onChange={handleNameChange}
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    helperText={!name ? "Incorrect Name." : ""}
                                    autoFocus
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Box sx={{flexGrow: 1}}>
                            <Button variant="contained" onClick={handleCourseCreate} disabled={!formValid}>
                                Create
                            </Button>
                        </Box>
                    </CardActions>
                </Card>
                <SnackbarWrapperComponent
                    snackbarOpen={snackbarOpen}
                    setSnackbarOpen={setSnackbarOpen}
                    snackbarType={snackbarType}
                    snackbarMsg={snackbarMsg}/>
            </Box>
    );
}