import { Button, Container, CssBaseline, Paper, TextField, Typography } from "@mui/material";

function Login() {

    return (
        <>
            <CssBaseline />
            <Paper elevation={3}>
                <Container maxWidth="md" sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Typography variant="h5" component="h2" sx={{ marginY: 3 }}>Login</Typography>
                    <TextField id="outlined-basic" label="Username" variant="outlined" required />
                    <TextField id="outlined-basic" label="Password" variant="outlined" required />
                    <Button variant="contained" sx={{ marginTop: 1 }}>Login</Button>
                    <Typography variant="subtitle2" gutterBottom>Forgot Password</Typography>
                </Container>
            </Paper>
        </>
    );
}

export default Login
