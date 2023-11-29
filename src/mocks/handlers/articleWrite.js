import { http, HttpResponse } from 'msw';

const articleWriteHandlers = [
  http.post('/articles/write', async ({ request }) => {
    const newArticle = await request.json();

    return HttpResponse.json(newArticle, { status: 201 });
  }),
];

export default articleWriteHandlers;
