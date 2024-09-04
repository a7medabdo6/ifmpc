import React from 'react';
import { TextField, Typography, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomButton from '../custom/CustomButton';
import { colors } from '@/utils/colors';

const useStyles = makeStyles({
  textField: {
    '& .MuiInputBase-root': {
      height: '42px',
    },
  
  },
  title: {
    fontWeight: 600,
    marginBottom: '15px',
    color:'#262626' 
  },
  multiline: {
  }
});

interface ContactFormProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  message: string;
  onFirstNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLastNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPhoneNumberChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailAddressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onMessageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  title: string;
  buttonText: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  firstName,
  lastName,
  phoneNumber,
  emailAddress,
  message,
  onFirstNameChange,
  onLastNameChange,
  onPhoneNumberChange,
  onEmailAddressChange,
  onMessageChange,
  onClick,
  title,
  buttonText
}) => {
  const classes = useStyles();

  return (
    <Box sx={{ backgroundColor: '#fff', padding: '3.5rem', borderRadius: '8px' }}>
      <Typography className={classes.title} variant="h6" gutterBottom>
        {title}
      </Typography>
      <form noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.textField}
              fullWidth
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={onFirstNameChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.textField}
              fullWidth
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={onLastNameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              fullWidth
              label="Phone Number"
              variant="outlined"
              value={phoneNumber}
              onChange={onPhoneNumberChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              fullWidth
              label="Email Address"
              variant="outlined"
              value={emailAddress}
              onChange={onEmailAddressChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.multiline}
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              value={message}
              onChange={onMessageChange}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomButton
              onClick={onClick}
              customColor="white"
              width="100%"
              height="48px"
              backgroundColor={colors.active}
              borderRadius="4px"
            >
              {buttonText}
            </CustomButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ContactForm;
