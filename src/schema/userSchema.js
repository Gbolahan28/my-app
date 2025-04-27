import * as Yup from 'yup';

export const profileInfoValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First name is too short')
    .max(30, 'First name is too long')
    .notRequired(),
  lastName: Yup.string()
    .min(2, 'Last name is too short')
    .max(30, 'Last name is too long')
    .notRequired(),
  email: Yup.string().email('Please enter a valid email').notRequired(),
});

export const passwordChangeValidationSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Current password is required'),
  newPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    )
    .notOneOf(
      [Yup.ref('currentPassword')],
      'New password must be different from current password',
    )
    .required('New password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

export const conditionalPasswordValidationSchema = Yup.object().shape({
  currentPassword: Yup.string().when(['newPassword', 'confirmPassword'], {
    is: (newPassword, confirmPassword) => newPassword || confirmPassword,
    then: schema =>
      schema
        .required('Current password is required')
        .min(6, 'Password must be at least 6 characters'),
    otherwise: schema => schema,
  }),
  newPassword: Yup.string().when('currentPassword', {
    is: val => val && val.length > 0,
    then: schema =>
      schema
        .required('New password is required')
        .min(6, 'Password must be at least 6 characters')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
          'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
        )
        .notOneOf(
          [Yup.ref('currentPassword')],
          'New password must be different from current password',
        ),
    otherwise: schema => schema,
  }),
  confirmPassword: Yup.string().when('newPassword', {
    is: val => val && val.length > 0,
    then: schema =>
      schema
        .required('Please confirm your password')
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
    otherwise: schema => schema,
  }),
});
