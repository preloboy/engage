import { Paper, Container, Typography, TextField, Button, CssBaseline } from "@mui/material"

function Create() {
    return (
        <>
            <CssBaseline />
            <Paper elevation={3}>
                <Container maxWidth="md" sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Typography variant="h5" component="h2" sx={{ marginY: 3 }}>Create Account</Typography>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" required />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" required />
                    <TextField id="outlined-basic" label="Username" variant="outlined" required />
                    <TextField id="outlined-basic" label="Password" variant="outlined" required />
                    <TextField id="outlined-basic" label="Confirm Password" variant="outlined" required />
                    <Button variant="contained" sx={{ marginTop: 1 }}>Login</Button>
                    <Typography variant="subtitle2" gutterBottom>Forgot Password</Typography>
                </Container>
            </Paper>
        </>
    )
}

export default Create