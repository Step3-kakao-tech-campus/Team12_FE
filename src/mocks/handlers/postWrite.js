import { http, HttpResponse } from 'msw';

const postWriteHandlers = [
  http.post('/articles/write', async ({ request }) => {
    const newPost = await request.json();

    return HttpResponse.json(newPost, { status: 201 });
  }),
];

export default postWriteHandlers;
