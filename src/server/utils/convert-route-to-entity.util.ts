const mapping: Record<string, string> = {
  'guest-requests': 'guest_request',
  tasks: 'task',
  teams: 'team',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
