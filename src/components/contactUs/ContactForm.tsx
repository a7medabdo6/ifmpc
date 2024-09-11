import React from 'react';
import { TextField, Typography, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomButton from '../custom/CustomButton';
import { colors } from '@/utils/colors';
import { useTranslations } from 'next-intl';
import { useAppSelector } from '@/lib/hooks';
import { CacheProvider } from '@emotion/react';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';

const theme = (outerTheme?: Theme) =>
  createTheme({
    direction: 'rtl',
    palette: {
      mode: outerTheme?.palette?.mode || 'light',
    },
  });

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const useStyles = makeStyles({
  textField: {
    '& .MuiInputBase-root': {
      height: '42px',
    },
  },
  title: {
    fontWeight: 600,
    marginBottom: '15px',
    color: '#262626',
  },
  multiline: {},
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
  const t = useTranslations('contactUs');
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const isArabic = pathAfterSlash === 'ar';

  const renderTextField = (
    label: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    multiline: boolean = false,
    rows: number = 1
  ) => {
    const textField = (
      <TextField
        className={multiline ? classes.multiline : classes.textField}
        fullWidth
        label={label}
        variant="outlined"
        value={value}
        onChange={onChange}
        multiline={multiline}
        rows={rows}
      />
    );

    if (isArabic) {
      return (
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <div dir="rtl">{textField}</div>
          </ThemeProvider>
        </CacheProvider>
      );
    }

    return textField;
  };

  return (
    <Box sx={{ backgroundColor: '#fff', padding: '3.5rem', borderRadius: '8px' }}>
      <Typography className={classes.title} variant="h6" gutterBottom>
        {title}
      </Typography>
      <form noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {renderTextField(t('firstName'), firstName, onFirstNameChange)}
          </Grid>
          <Grid item xs={12} sm={6}>
            {renderTextField(t('lastName'), lastName, onLastNameChange)}
          </Grid>
          <Grid item xs={12}>
            {renderTextField(t('phoneNumber'), phoneNumber, onPhoneNumberChange)}
          </Grid>
          <Grid item xs={12}>
            {renderTextField(t('emailAddress'), emailAddress, onEmailAddressChange)}
          </Grid>
          <Grid item xs={12}>
            {renderTextField(t('writeMessage'), message, onMessageChange, true, 4)}
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
              {t('contactWithUs')}
            </CustomButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ContactForm;
