import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://WanderBuddy.cloud281cmpe.com/">
                http://WanderBuddy.cloud281cmpe.com/
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright;