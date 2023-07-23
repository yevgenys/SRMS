import {useEffect, useState} from "react";
import {listStudents} from "../_services/StudentsService";
import {DrawerHeader} from "../_common/main_window";
import {Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import LoadingComponent from "../_common/LoadingComponent";
import DeleteIcon from '@mui/icons-material/Delete';

export default function StudentListComponent(props) {
    const [loading, setLoading] = useState(false);
    const [students, setStudents] = useState([]);

    const getData = async () => {
        setLoading(true);
        const {data} = await listStudents();
        setStudents(data);
        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, [students.length]);

    console.log(students);

    return (
        loading ?
            <LoadingComponent/>
            :
            <Box component="main" sx={{p: 1, flexGrow: 1}}>
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
                                    key={row.email}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell align="center">{row.first_name} {row.last_name}</TableCell>
                                    <TableCell align="center">{row.date_of_birth}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="center">
                                        <IconButton aria-label="delete">
                                            <DeleteIcon/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
    );
}