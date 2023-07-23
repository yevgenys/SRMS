import {Box, Typography} from "@mui/material";
import {DrawerHeader} from "../_common/drawer";

export default function HomeComponent() {
    return (
        <Box component="main" sx={{p: 1}}>
            <DrawerHeader/>
            <Typography variant="h2">Please select category from the side menu</Typography>
        </Box>
    );
}