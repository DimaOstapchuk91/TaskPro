import * as Yup from 'yup';

const nameValid = Yup.string()
  .required('Name is required')
  .min(2, 'Minimum 2 symbols')
  .max(50, 'Maximum 50 symbols');

const emailValid = Yup.string()
  .required('Email is required')
  .matches(
    /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    'Invalid email format'
  );

const avatarValid = Yup.string().matches(
  /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
  'Avatar must be a valid image URL'
);

const themeValid = Yup.mixed<'dark' | 'light' | 'violet'>()
  .oneOf(['dark', 'light', 'violet'], 'Theme must be dark, light, or violet')
  .optional();

const passwordValid = Yup.string()
  .required('Password is required')
  .min(7, 'Minimum 7 symbols')
  .max(50, 'Maximum 50 symbols');

export const orderRegistrationSchema = Yup.object({
  name: nameValid,
  email: emailValid,
  password: passwordValid,
  confirmPassword: Yup.string()
    .required('Confirm password required')
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
});

export const orderLoginSchema = Yup.object({
  email: emailValid,
  password: passwordValid,
});

export const orderEditUserSchema = Yup.object({
  name: nameValid,
  email: emailValid,
  avatar: avatarValid,
  theme: themeValid,
});
