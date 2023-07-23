import {Box, CircularProgress} from "@mui/material";
import {DrawerHeader} from "./main_window";

export default function LoadingComponent() {
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
            <DrawerHeader/>
            <CircularProgress/>
        </Box>
    );
}