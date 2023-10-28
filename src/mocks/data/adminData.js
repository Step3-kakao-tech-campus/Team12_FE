export const REQUEST_LIST = {
  success: true,
  response: {
    user: [
      {
        userId: 1,
        nickname: '홍길동',
      },
      {
        userId: 2,
        nickname: '카테캠',
      },
      {
        userId: 3,
        nickname: '12조',
      },
      {
        userId: 4,
        nickname: 'msw',
      },
    ],
  },
  error: null,
};

export const REQUEST_DETAIL = {
  success: true,
  response: {
    userId: 1,
    nickname: '홍길동',
    imageUrl: 'https://aws.amazon.com',
  },
  error: null,
};
