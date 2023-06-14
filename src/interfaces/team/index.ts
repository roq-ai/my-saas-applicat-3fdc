import { GuestRequestInterface } from 'interfaces/guest-request';
import { TaskInterface } from 'interfaces/task';
import { TeamMemberInterface } from 'interfaces/team-member';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TeamInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  guest_request?: GuestRequestInterface[];
  task?: TaskInterface[];
  team_member?: TeamMemberInterface[];
  user?: UserInterface;
  _count?: {
    guest_request?: number;
    task?: number;
    team_member?: number;
  };
}

export interface TeamGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
