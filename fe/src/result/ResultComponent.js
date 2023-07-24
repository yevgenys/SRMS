import {useEffect, useState} from "react";
import {listStudents} from "../students/service";
import LoadingComponent from "../_common/LoadingComponent";
import {DrawerHeader} from "../_common/drawer";
import {
    Autocomplete,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import SnackbarWrapperComponent from "../_common/SnackbarWrapperComponent";
import {listCourses} from "../courses/service";
import {SCORES} from "../_common/constants";
import {createResults} from "./service";

export default function ResultComponent() {
    const [loading, setLoading] = useState(false);
    const [courses, setCourses] = useState([]);
    const [students, setStudents] = useState([]);
    const [course, setCourse] = useState(null);
    const [student, setStudent] = useState(null);
    const [score, setScore] = useState("A");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarType, setSnackbarType] = useState("error");
    const [snackbarMsg, setSnackbarMsg] = useState(null);

    const getData = async () => {
        try {
            setLoading(true);
            const dataCourses = await listCourses();
            setCourses(dataCourses.data);
            const dataStudents = await listStudents();
            setStudents(dataStudents.data);
        } catch (err) {
            setSnackbarType("error");
            const errMsg = err.response !== undefined ? JSON.stringify(err.response.data) : err;
            setSnackbarMsg(`${err.message}: ${errMsg}`);
            setSnackbarOpen(true);
        } finally {
            setLoading(false);
        }
    };

    const handleScoreCreate = async () => {
        try {
            setLoading(true);
            await createResults(student, course, score);
            setSnackbarMsg(`Score was added for student id ${student}`);
            setSnackbarType("success");
            setSnackbarOpen(true);
            setCourse(null);
            setStudent(null);
        } catch (err) {
            setSnackbarType("error");
            const errMsg = err.response !== undefined ? JSON.stringify(err.response.data) : err;
            setSnackbarMsg(`${err.message}: ${errMsg}`);
            setSnackbarOpen(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, [courses.length, students.length]);

    const formValid = Boolean(student) && Boolean(course) && Boolean(score);

    return (
        loading ?
            <LoadingComponent/>
            :
            <Box component="main" sx={{p: 1, flexGrow: 0.6}}>
                <DrawerHeader/>
                <Card>
                    <CardHeader title="Add a new score for a student"/>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={5}>
                                <Autocomplete
                                    disablePortal
                                    id="course"
                                    options={courses}
                                    onChange={(e, option) => setCourse(option.id)}
                                    getOptionLabel={(option) => option.name}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Course"/>
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <Autocomplete
                                    disablePortal
                                    id="student"
                                    options={students}
                                    onChange={(e, option) => setStudent(option.id)}
                                    getOptionLabel={(option) => `${option.first_name} ${option.last_name}`}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Student"/>
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <FormControl fullWidth>
                                    <InputLabel id="score-label">Score</InputLabel>
                                    <Select
                                        labelId="score-label"
                                        id="score"
                                        value={score}
                                        label="Score"
                                        onChange={(e) => setScore(e.target.value)}
                                    >
                                        {SCORES.map(sc => <MenuItem value={sc}>{sc}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Box sx={{flexGrow: 1}}>
                            <Button variant="contained" onClick={handleScoreCreate} disabled={!formValid}>
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