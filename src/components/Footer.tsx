import React from 'react';
import { Grid, Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f4f6f9', py: 2 }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={6} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            NicoAssist versión 2.0.0
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            Desarrollado por <Link href="https://apptelink.com/" target="_blank" color="inherit" underline="hover">Apptelink S.A</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
