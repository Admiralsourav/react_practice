import { Box, Button, Container, TextField } from '@material-ui/core';
import React from 'react';

function Login (props){
    return(
        <React.Fragment>
        
        <Container>
            <Box display='flex' margin={2} alignItems='center' justifyContent='center'>
                <TextField id="userName" label="User Name" variant="outlined" />
            </Box>

            <Box display='flex' margin={2} alignItems='center' justifyContent='center'>
                <TextField id="password" label="password" variant="outlined" />
            </Box>

            <Box display='flex' margin={2} alignItems='center' justifyContent='center'>
                <Button variant="contained">Submit</Button>
            </Box>
        </Container>
        

        </React.Fragment>
    );
}

export default Login;



