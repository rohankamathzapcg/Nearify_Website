import React, { useState } from 'react';
import { Avatar, Box, Button, Stack, styled } from '@mui/material';
import Grid from '@mui/material/Grid2';
import bgImg from '../assets/bg-image.jpg';
import animationData from '../assets/Login.json';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Lottie from 'lottie-react';
import CustomTypography from '../components/customFormControls/CustomTypography';
import CustomTextField from '../components/customFormControls/CustomTextField';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import EnhancedEncryptionOutlinedIcon from '@mui/icons-material/EnhancedEncryptionOutlined';
import { useNavigate } from 'react-router-dom';

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
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/register')
    }, 1000)
  }

  return (
    <>
      {/* Background Box with Image */}
      <Box
        sx={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        {/* Login Container Box with Image */}
        <StyledBox className={isAnimating ? 'flip-open-animation' : ''}>

          <Box sx={{ flexGrow: 1 }}>

            <Grid container>
              {/* Grid containing Lottie Animation Starts*/}
              <Grid size={{ xs: 12, sm: 12, lg: 5 }} sx={{ display: { xs: "none", lg: "flex" }, justifyContent: "center", alignItems: "center" }}>
                <Lottie
                  animationData={animationData}
                  loop
                  autoplay
                  style={{ width: "100%", maxWidth: "400px", height: "auto", marginTop: "10px" }}
                />
              </Grid>
              {/* Grid containing Lottie Animation Ends*/}

              {/* Grid containing Login page Starts*/}
              <Grid size={{ xs: 12, sm: 12, lg: 7 }} sx={{
                backgroundColor: "#bec2da",
                padding: { xs: "10px", sm: "40px" },
              }}>
                <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                  <Avatar sx={{ bgcolor: "white", color: "#bec2da", marginTop: { xs: "5px", sm: "10px" } }} >
                    <LockOutlinedIcon />
                  </Avatar>
                  <CustomTypography variant='h6' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>SignIn / LogIn</CustomTypography>

                  <Stack width="100%" padding={{ xs: "20px 20px 0 20px", sm: "20px 60px 0 60px" }}>

                    <CustomTextField autoComplete="off" label={"Enter your email-id"} sx={{ marginTop: "20px" }} autoFocus icon={<AttachEmailOutlinedIcon />} />
                    <CustomTextField type="password" label={"Enter your password"} sx={{ marginTop: "20px" }} icon={<EnhancedEncryptionOutlinedIcon />} />
                    <CustomTypography variant='h6' sx={{ fontSize: { xs: "9px", sm: "12px" }, textAlign: "right" }}>Forgot password?</CustomTypography>
                    <Button type="submit" variant='contained' size='normal' sx={{ mt: "10px", borderRadius: 28, color: "#ffffff", minWidth: "170px", backgroundColor: "#FF9A01" }}>
                      <CustomTypography variant='p' sx={{ marginTop: "0px" }}>Sign In</CustomTypography>
                    </Button>

                  </Stack>

                  <CustomTypography sx={{ fontSize: "12px", marginBottom: "10px" }}>Not registered yet? <span className='flip-label' onClick={handleCreateAccount}>Create an account</span></CustomTypography>

                </Stack>

              </Grid>

            </Grid>

          </Box>

        </StyledBox>

      </Box>
    </>
  );
};

export default LoginPage;
