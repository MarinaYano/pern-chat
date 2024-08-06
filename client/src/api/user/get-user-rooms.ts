import { AxiosResponse } from 'axios';
import { UserRoomType } from '../../types';
import { instance } from '../base';

export const getUserRooms: () => Promise<
  AxiosResponse<UserRoomType[]>
> = async () => {
  const res = await instance.get('/user/rooms');
  return res;
};
