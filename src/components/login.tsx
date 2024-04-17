import { Box, Container, FormGroup, TextField } from "@mui/material";

function Login() {

    return (
        <>

            <Container maxWidth="md">
                <Box component={FormGroup}>

                    <TextField id="outlined-basic" label="Username" variant="outlined" required />
                </Box>
                <TextField id="outlined-basic" label="Password" variant="outlined" required />
            </Container>
        </>
    );
}

export default Login
