import React, { useState } from 'react';
import { Avatar, Box, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import bgImg from '../../assets/bg-image.jpg';
import animationData from '../../assets/Login.json';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Lottie from 'lottie-react';
import CustomTypography from '../../components/customFormControls/CustomTypography';
import CustomTextField from '../../components/customFormControls/CustomTextField';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import EnhancedEncryptionOutlinedIcon from '@mui/icons-material/EnhancedEncryptionOutlined';
import { useNavigate } from 'react-router-dom';
import CustomStyledBox from '../../components/customComponents/CustomStyledBox';
import CustomButton from '../../components/customFormControls/CustomButton';

const LoginPage = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {};

    if (!loginData.email.trim()) {
      newErrors.email = "* Email is required";
    }
    if (!loginData.password.trim()) {
      newErrors.password = "* Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setLoginData({ ...loginData, [field]: value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleLoginBtn = () => {
    if (validateForm()) {
      console.log("Validated: ", loginData)
    }
  }

  const handleCreateAccount = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/register')
    }, 1000)
  }

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
        {/* Login Container Box with Image */}
        <CustomStyledBox className={isAnimating ? 'flip-open-animation' : ''}>

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


              {/* Grid containing Login page Starts*/}
              <Grid size={{ xs: 12, sm: 12, lg: 7 }} sx={{
                backgroundColor: "#bec2da",
                padding: { xs: "10px", sm: "40px" },
              }}>
                <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                  <Avatar sx={{ bgcolor: "white", color: "black", marginTop: { xs: "5px", sm: "10px" } }} >
                    <LockOutlinedIcon />
                  </Avatar>
                  <CustomTypography sx={{ fontSize: { xs: "18px", sm: "24px" } }}>SignIn / LogIn</CustomTypography>

                  <Stack width="100%" padding={{ xs: "20px 20px 0 20px", sm: "20px 60px 0 60px" }}>
                    <CustomTextField autoComplete="off"
                      label={"Enter your email-id"}
                      value={loginData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      error={!!errors.email}
                      helperText={errors.email}
                      sx={{ marginTop: "10px" }}
                      autoFocus
                      icon={<AttachEmailOutlinedIcon />} />

                    <CustomTextField
                      type="password"
                      value={loginData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      error={!!errors.password}
                      helperText={errors.password}
                      label={"Enter your password"}
                      sx={{ marginTop: "20px" }}
                      icon={<EnhancedEncryptionOutlinedIcon />} />

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        width: "100%",
                      }}
                    >
                      <CustomTypography
                        className="flip-label"
                        sx={{
                          fontSize: { xs: "9px", sm: "11px" }, color: "blue"
                        }}
                        onClick={() => {
                          navigate('/forgotpassword');
                        }}
                      >
                        Forgot password?
                      </CustomTypography>
                    </div>

                    <CustomButton onClick={handleLoginBtn} sx={{ mt: "10px" }}>
                      Sign In
                    </CustomButton>
                  </Stack>

                  <CustomTypography sx={{ fontSize: "12px", marginBottom: "10px" }}>Not registered yet? <span className='flip-label' onClick={handleCreateAccount}>Create an account</span></CustomTypography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </CustomStyledBox>
      </Box>
    </>
  );
};

export default LoginPage;