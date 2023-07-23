import {Typography} from "@mui/material";
import {DrawerHeader, Main} from "../_common/main_window";

export default function HomeComponent() {
    return (
        <Main elevation={0}>
            <DrawerHeader/>
            <Typography>Please select category from side menu</Typography>
        </Main>
    );
}