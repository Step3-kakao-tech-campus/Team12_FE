import { http, HttpResponse } from 'msw';
import { REQUEST_LIST, REQUEST_DETAIL } from '../data/adminData';

const adminHandlers = [
  http.get('/admin', () => {
    return HttpResponse.json(REQUEST_LIST);
  }),

  http.get('/admin/auth/1', () => {
    return HttpResponse.json(REQUEST_DETAIL);
  }),
];

export default adminHandlers;
