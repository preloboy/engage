import { Box, Container } from '@mui/material';
import Sidebar from './tools/sidebar';

const Dashboard = () => {
    return (
        <>
            <Container component='div' maxWidth='xl'>
                <Box display={'flex'} >
                    <Box>
                        <Sidebar />
                    </Box>
                    <Box>
                        <h1>test2</h1>
                    </Box>
                </Box>
            </Container>
        </>
    )
}
export default Dashboard