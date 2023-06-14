import * as yup from 'yup';
import { guestRequestValidationSchema } from 'validationSchema/guest-requests';
import { taskValidationSchema } from 'validationSchema/tasks';
import { teamMemberValidationSchema } from 'validationSchema/team-members';

export const teamValidationSchema = yup.object().shape({
  description: yup.string(),
  image: yup.string(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
  guest_request: yup.array().of(guestRequestValidationSchema),
  task: yup.array().of(taskValidationSchema),
  team_member: yup.array().of(teamMemberValidationSchema),
});
