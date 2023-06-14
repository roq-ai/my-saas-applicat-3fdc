import axios from 'axios';
import queryString from 'query-string';
import { GuestRequestInterface, GuestRequestGetQueryInterface } from 'interfaces/guest-request';
import { GetQueryInterface } from '../../interfaces';

export const getGuestRequests = async (query?: GuestRequestGetQueryInterface) => {
  const response = await axios.get(`/api/guest-requests${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createGuestRequest = async (guestRequest: GuestRequestInterface) => {
  const response = await axios.post('/api/guest-requests', guestRequest);
  return response.data;
};

export const updateGuestRequestById = async (id: string, guestRequest: GuestRequestInterface) => {
  const response = await axios.put(`/api/guest-requests/${id}`, guestRequest);
  return response.data;
};

export const getGuestRequestById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/guest-requests/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteGuestRequestById = async (id: string) => {
  const response = await axios.delete(`/api/guest-requests/${id}`);
  return response.data;
};
