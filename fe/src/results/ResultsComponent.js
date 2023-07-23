import React, {useEffect, useState} from "react";
import LoadingComponent from "../_common/LoadingComponent";
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {DrawerHeader} from "../_common/drawer";
import DisplaySnackbar from "../_common/user_feedback";
import {listResults} from "./service";

export default function ResultsComponent() {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarType, setSnackbarType] = useState("error");
    const [snackbarMsg, setSnackbarMsg] = useState(null);

    const getData = async () => {
        try {
            setLoading(true);
            const {data} = await listResults();
            setResults(data);
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
    }, [results.length]);

    return (loading ? <LoadingComponent/> : <Box component="main" sx={{p: 1, flexGrow: 0.5}}>
            <DrawerHeader/>
            <TableContainer component={Paper} sx={{p: 3}}>
                <Table aria-label="Students">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" sx={{fontWeight: "bold"}}>Date</TableCell>
                            <TableCell align="center" sx={{fontWeight: "bold"}}>Course</TableCell>
                            <TableCell align="center" sx={{fontWeight: "bold"}}>Student</TableCell>
                            <TableCell align="center" sx={{fontWeight: "bold"}}>Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {results.map((row) => (<TableRow
                                key={row.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                            <TableCell align="center">{row.datetime}</TableCell>
                            <TableCell align="center">{row.course}</TableCell>
                                <TableCell align="center">{row.student}</TableCell>
                                <TableCell align="center">{row.score}</TableCell>
                            </TableRow>))}
                    </TableBody>
                </Table>
            </TableContainer>
            <DisplaySnackbar
                snackbarOpen={snackbarOpen}
                setSnackbarOpen={setSnackbarOpen}
                snackbarType={snackbarType}
                snackbarMsg={snackbarMsg}/>
        </Box>);
}