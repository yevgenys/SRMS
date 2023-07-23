import {Box, Button, Card, CardActions, CardContent, CardHeader, Grid, TextField} from "@mui/material";
import {DrawerHeader} from "../_common/drawer";
import {useState} from "react";
import validator from "validator";
import {DatePicker} from "@mui/x-date-pickers";
import DisplaySnackbar from "../_common/user_feedback";
import LoadingComponent from "../_common/LoadingComponent";
import dayjs from "dayjs";
import {createStudent} from "./service";

export default function StudentComponent() {
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [email, setEmail] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarType, setSnackbarType] = useState("error");
    const [snackbarMsg, setSnackbarMsg] = useState(null);

    const handleStudentCreate = async () => {
        try {
            setLoading(true);
            const formattedDate = dateOfBirth.toJSON().split("T")[0];
            await createStudent(firstName, lastName, formattedDate, email);
            setSnackbarMsg(`Student ${firstName} was created`);
            setSnackbarType("success");
            setSnackbarOpen(true);
        } catch (err) {
            setSnackbarType("error");
            setSnackbarOpen(true);
            const errMsg = err.response !== undefined ? JSON.stringify(err.response.data) : err;
            setSnackbarMsg(`${err.message}: ${errMsg}`);
        } finally {
            setFirstName("");
            setLastName("");
            setDateOfBirth("");
            setEmail("");
            setLoading(false);
        }
    };

    const handleFirstNameChange = (e) => {
        const {value} = e.target;
        setFirstName(value);
    }

    const handleLastNameChange = (e) => {
        const {value} = e.target;
        setLastName(value);
    }

    const handleEmailChange = (e) => {
        const {value} = e.target;
        setEmail(value);
    }

    const atLeast10Years = dayjs().subtract(10, 'year');
    const isDateValid = Boolean(dateOfBirth) && dateOfBirth.isValid();
    const formValid = Boolean(firstName) && Boolean(lastName) && isDateValid && validator.isEmail(email);

    return (
        loading ?
            <LoadingComponent/>
            :
            <Box component="main" sx={{p: 1}}>
                <DrawerHeader/>
                <Card>
                    <CardHeader title="Add a new student"/>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="firstName"
                                    variant="outlined"
                                    value={firstName}
                                    required
                                    error={!firstName}
                                    onChange={handleFirstNameChange}
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    helperText={!firstName ? "Incorrect First Name." : ""}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    value={lastName}
                                    id="lastName"
                                    label="Last Name"
                                    helperText={!lastName ? "Incorrect Last Name." : ""}
                                    name="lastName"
                                    error={!lastName}
                                    onChange={handleLastNameChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <DatePicker label="Date of birth" sx={{width: "100%"}}
                                            format="DD/MM/YYYY"
                                            value={dateOfBirth}
                                            maxDate={atLeast10Years}
                                            slotProps={{
                                                textField: {
                                                    readOnly: true,
                                                },
                                            }}
                                            onChange={(newValue) => setDateOfBirth(newValue)}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    value={email}
                                    required
                                    fullWidth
                                    id="email"
                                    type="email"
                                    label="Email Address"
                                    name="email"
                                    error={!validator.isEmail(email)}
                                    helperText={!validator.isEmail(email) ? "Incorrect email." : ""}
                                    onChange={handleEmailChange}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Box sx={{flexGrow: 1}}>
                            <Button variant="contained" onClick={handleStudentCreate} disabled={!formValid}>
                                Create
                            </Button>
                        </Box>
                    </CardActions>
                </Card>
                <DisplaySnackbar
                    snackbarOpen={snackbarOpen}
                    setSnackbarOpen={setSnackbarOpen}
                    snackbarType={snackbarType}
                    snackbarMsg={snackbarMsg}/>
            </Box>
    )
}