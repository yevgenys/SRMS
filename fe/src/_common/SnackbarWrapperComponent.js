import {Alert, Portal, Snackbar} from "@mui/material";

export default function SnackbarWrapperComponent({snackbarOpen, setSnackbarOpen, snackbarType, snackbarMsg}) {
    return (
        <Portal>
            <Snackbar anchorOrigin={{
                vertical: 'top',
                horizontal: 'center'
            }}
                      open={snackbarOpen}
                      autoHideDuration={6000}
                      sx={{zIndex: 9999}}
                      onClose={() => setSnackbarOpen(false)}>
                <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarType} sx={{width: '100%'}}>
                    {snackbarMsg}
                </Alert>
            </Snackbar>
        </Portal>
    );

}