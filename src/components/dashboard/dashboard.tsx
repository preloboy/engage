import { Box, Container } from '@mui/material';
import Sidebar from './tools/sidebar';
import Home from './screens/home';

const Dashboard = () => {
    return (
        <>
            <Container component='div' maxWidth='xl'>
                <Box display={'flex'} >
                    <Box>
                        <Sidebar />
                    </Box>
                    <Box>
                        <Home />
                    </Box>
                </Box>
            </Container>
        </>
    )
}
export default Dashboard