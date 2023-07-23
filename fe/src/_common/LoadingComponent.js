import {Box, CircularProgress} from "@mui/material";
import {DrawerHeader} from "./drawer";

export default function LoadingComponent() {
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
            <DrawerHeader/>
            <CircularProgress/>
        </Box>
    );
}