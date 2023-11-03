import { instance } from './otherIndex';

/* eslint-disable-next-line */
export const uploadCard = () => {
  return instance.patch('/mypage/image/url');
};
