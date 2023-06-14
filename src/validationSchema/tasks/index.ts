import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  team_id: yup.string().nullable().required(),
  assigned_to: yup.string().nullable(),
});
