import * as Yup from 'yup';

const nameValid = Yup.string()
  .min(2, 'Minimum 2 symbols')
  .max(50, 'Maximum 50 symbols');

const emailValid = Yup.string().matches(
  /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
  'Invalid email format'
);

const avatarValid = Yup.string().matches(
  /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
  'Avatar must be a valid image URL'
);

// const themeValid = Yup.mixed<'dark' | 'light' | 'violet'>()
//   .oneOf(['dark', 'light', 'violet'], 'Theme must be dark, light, or violet')
//   .optional();

const passwordValid = Yup.string()
  .min(7, 'Minimum 7 symbols')
  .max(50, 'Maximum 50 symbols');

const titleValid = Yup.string()
  .required('Title is required')
  .min(2, 'Minimum 2 symbols')
  .max(50, 'Maximum 50 symbols');

const descriptionValid = Yup.string()
  .min(6, 'Minimum 6 symbols')
  .max(300, 'Max 300 symbols')
  .required();

export const orderRegistrationSchema = Yup.object({
  name: nameValid.required('Name is required'),
  email: emailValid.required('Email is required'),
  password: passwordValid.required('Password is required'),
  confirmPassword: Yup.string()
    .required('Confirm password required')
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
});

export const orderLoginSchema = Yup.object({
  email: emailValid.required('Email is required'),
  password: passwordValid.required('Password is required'),
});

export const orderEditUserSchema = Yup.object({
  name: nameValid.nullable(),
  email: emailValid.nullable(),
  avatar_url: avatarValid.nullable(),
  password: passwordValid.nullable(),
});

export const orderBoardSchema = Yup.object({
  boardTitle: titleValid,
  boardIcon: Yup.string()
    .required('Icon is required')
    .oneOf(
      [
        'icon-star',
        'icon-container',
        'icon-puzzle',
        'icon-project',
        'icon-colors',
        'icon-hexagon',
        'icon-lightning',
        'icon-loading',
      ],
      'Invalid icon selection'
    ),
  boardBg: Yup.string().nullable(),
});

export const orderNeedHelpShema = Yup.object({
  email: emailValid.required(),
  comment: descriptionValid,
});

export const orderColumnShema = Yup.object({
  columnTitle: titleValid,
});

export const orderTaskShema = Yup.object({
  title: titleValid,
  description: descriptionValid,
  priority: Yup.string()
    .oneOf(['High', 'Medium', 'Low', 'Without'])
    .required('Choose a priority'),
  deadline: Yup.date()
    .min(new Date(), 'The date must be in the future.')
    .required('Choose a deadline date'),
});

// Types

export type LoginFormValues = Yup.InferType<typeof orderLoginSchema>;

export type RegistrationFormValues = Yup.InferType<
  typeof orderRegistrationSchema
>;

export type BoardFormValues = Yup.InferType<typeof orderBoardSchema>;
export type EditUserValues = Yup.InferType<typeof orderEditUserSchema>;
export type NeedHelpValues = Yup.InferType<typeof orderNeedHelpShema>;
export type ColumnValues = Yup.InferType<typeof orderColumnShema>;

export type TaskValues = Yup.InferType<typeof orderTaskShema>;
