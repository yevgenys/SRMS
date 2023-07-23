import {useEffect, useState} from "react";
import LoadingComponent from "../_common/LoadingComponent";
import {Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {deleteCourse} from "../course/service";
import DisplaySnackbar from "../_common/user_feedback";
import {DrawerHeader} from "../_common/drawer";
import DeleteIcon from "@mui/icons-material/Delete";
import {listCourses} from "./service";

export default function CoursesComponent() {
    const [loading, setLoading] = useState(false);
    const [courses, setCourses] = useState([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarType, setSnackbarType] = useState("error");
    const [snackbarMsg, setSnackbarMsg] = useState(null);

    const getData = async () => {
        try {
            setLoading(true);
            const {data} = await listCourses();
            setCourses(data);
        } catch (err) {
            setSnackbarType("error");
            const errMsg = err.response !== undefined ? JSON.stringify(err.response.data) : err;
            setSnackbarMsg(`${err.message}: ${errMsg}`);
            setSnackbarOpen(true);
        } finally {
            setLoading(false);
        }
    };

    const deleteAndRefreshPage = async (id) => {
        try {
            setLoading(true);
            await deleteCourse(id);
            await getData();
            setSnackbarType("success");
            setSnackbarMsg(`Deleted course with id: ${id}`);
            setSnackbarOpen(true);
        } catch (err) {
            setSnackbarOpen(true);
            const errMsg = err.response !== undefined ? JSON.stringify(err.response.data) : err;
            setSnackbarMsg(`${err.message}: ${errMsg}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, [courses.length]);

    return (
        loading ?
            <LoadingComponent/>
            :
            <Box component="main" sx={{p: 1, flexGrow: 0.5}}>
                <DrawerHeader/>
                <TableContainer component={Paper} sx={{p: 3}}>
                    <Table aria-label="Students">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" sx={{fontWeight: "bold"}}>Name</TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {courses.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">
                                        <IconButton aria-label="delete" onClick={() => deleteAndRefreshPage(row.id)}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <DisplaySnackbar
                    snackbarOpen={snackbarOpen}
                    setSnackbarOpen={setSnackbarOpen}
                    snackbarType={snackbarType}
                    snackbarMsg={snackbarMsg}/>
            </Box>
    );
}