import { http, HttpResponse } from 'msw';
import { REQUEST_LIST, REQUEST_DETAIL } from '@/mocks/data/adminData';

const adminHandlers = [
  http.get('/admin/auth/list', () => {
    return HttpResponse.json(REQUEST_LIST);
  }),

  http.get('/admin/auth/list/:id', () => {
    return HttpResponse.json(REQUEST_DETAIL);
  }),
];

export default adminHandlers;
