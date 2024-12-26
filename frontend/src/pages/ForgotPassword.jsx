import { Avatar, Box, Stack } from '@mui/material';
import React from 'react';
import bgImg from '../assets/bg-image.jpg';
import CustomStyledBox from '../components/customComponents/CustomStyledBox';
import CustomTextField from '../components/customFormControls/CustomTextField';
import Grid from '@mui/material/Grid2';
import Lottie from 'lottie-react';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import EnhancedEncryptionOutlinedIcon from '@mui/icons-material/EnhancedEncryptionOutlined';
import animationData from '../assets/ForgotPassword.json'
import CustomTypography from '../components/customFormControls/CustomTypography';
import CustomButton from '../components/customFormControls/CustomButton';

const ForgotPassword = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >

        <CustomStyledBox>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              {/* Grid containing Lottie Animation Starts*/}
              <Grid size={{ xs: 12, sm: 12, lg: 5 }} sx={{ display: { xs: "none", lg: "flex" }, justifyContent: "center", alignItems: "center" }}>
                <Lottie
                  animationData={animationData}
                  loop
                  autoplay
                  style={{ width: "100%", maxWidth: "300px", height: "auto", marginTop: "10px" }}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 12, lg: 7 }} sx={{
                backgroundColor: "#bec2da",
                padding: { xs: "10px", sm: "40px" },
              }}>
                <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                  <Avatar sx={{ bgcolor: "white", color: "black", marginTop: { xs: "5px", sm: "10px" } }} >
                    <PsychologyAltIcon />
                  </Avatar>
                  <CustomTypography sx={{ fontSize: { xs: "18px", sm: "24px" } }}>Forgot your password?</CustomTypography>

                  <Stack width="100%" padding={{ xs: "20px 20px 0 20px", sm: "20px 60px 0 60px" }}>
                    <CustomTextField autoComplete="off"
                      label={"Enter your email-id"}
                      sx={{ marginTop: "10px" }}
                      autoFocus
                      icon={<AttachEmailOutlinedIcon />} />
                    <CustomButton sx={{ mt: "20px" }} >Verify</CustomButton>
                  </Stack>

                </Stack>
              </Grid>

            </Grid>
          </Box>

        </CustomStyledBox>

      </Box>
    </>
  );
}

export default ForgotPassword;
