import React from 'react';
import { Avatar, Box, Container, Stack, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import bgImg from '../assets/bg-image.jpg';
import animationData from '../assets/Login.json';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Lottie from 'lottie-react';

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "79%",
  height: "auto",
  backgroundColor: "white",
  boxShadow: 24,
  borderRadius: theme.shape.borderRadius,
}));


const LoginPage = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <StyledBox>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid size={{ xs: 12, sm: 12, lg: 5 }}>
              <Lottie
                animationData={animationData}
                loop
                autoplay
                style={{ width: "100%", maxWidth: "400px", height: "auto", marginTop: "10px" }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, lg: 7 }} sx={{ backgroundColor: "blue" }}>
              <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Avatar sx={{ bgcolor: "white", color: "blue", marginTop:"10px" }} >
                  <LockOutlinedIcon />
                </Avatar>
                <Typography>SignIn</Typography>
              </Stack>

            </Grid>
          </Grid>
        </Box>
      </StyledBox>
    </Box>
  );
};

export default LoginPage;
