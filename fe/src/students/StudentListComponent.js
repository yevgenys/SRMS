import {useEffect, useState} from "react";
import {deleteStudent, listStudents} from "../_services/StudentsService";
import {DrawerHeader} from "../_common/main_window";
import {Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import LoadingComponent from "../_common/LoadingComponent";
import DeleteIcon from '@mui/icons-material/Delete';
import DisplaySnackbar from "../_common/user_feedback";

export default function StudentListComponent() {
    const [loading, setLoading] = useState(false);
    const [students, setStudents] = useState([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarType, setSnackbarType] = useState("error");
    const [snackbarMsg, setSnackbarMsg] = useState(null);

    const getData = async () => {
        try {
            setLoading(true);
            const {data} = await listStudents();
            setStudents(data);
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
    }, [students.length]);

    const deleteAndRefreshPage = async (id) => {
        try {
            setLoading(true);
            await deleteStudent(id);
            await getData();
            setSnackbarType("success");
            setSnackbarMsg(`Deleted user with id: ${id}`);
            setSnackbarOpen(true);
        } catch (err) {
            setSnackbarOpen(true);
            const errMsg = err.response !== undefined ? JSON.stringify(err.response.data) : err;
            setSnackbarMsg(`${err.message}: ${errMsg}`);
        } finally {
            setLoading(false);
        }
    };

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
                                <TableCell align="center" sx={{fontWeight: "bold"}}>Name &amp; Family name</TableCell>
                                <TableCell align="center" sx={{fontWeight: "bold"}}>Date of birth</TableCell>
                                <TableCell align="center" sx={{fontWeight: "bold"}}>Email address</TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {students.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell align="center">{row.first_name} {row.last_name}</TableCell>
                                    <TableCell align="center">{row.date_of_birth}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
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