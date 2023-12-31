import * as yup from 'yup';

export const guestRequestValidationSchema = yup.object().shape({
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  team_id: yup.string().nullable().required(),
});
