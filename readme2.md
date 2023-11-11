# 전남대 12조 - 픽업셔틀

<div align='center'>
<img width="500" src="./src/assets/images/carousel2.png" alt="픽업셔틀">
</div>
<br><br>

## 목차

1. 최종 과제 제출

2. 프로젝트 정보

3. 시작 가이드

4. 기술 스택

5. 페이지별 화면구성과 주요 기능

6. 아키텍쳐

<br>

## 1. 최종 과제 제출

### 1️⃣ 팀 내 배포 링크 모음

프론트, 백 데이터 등 배포 중인 인스턴스 주소 모음

- FE :
- BE :

### 2️⃣ 최신 ERD 이미지 파일 (링크X)

ERD 이미지

### 3️⃣ 각 트랙별 코딩에 대한 간략한 설명

> 서비스 기획 의도

- 부담스러운 배달팁, 하지만 포장을 하기엔 부족한 시간과 귀찮음에 대신 픽업해줄 사람을 찾는 오더
- 짜투리 시간은 많지만 아르바이트를 하기엔 부족한 시간 동안 용돈을 벌고 싶은 피커

=> 오더와 피커를 연결시켜 주는 서비스를 기획하게 되었습니다.

<br>

> 주안점을 두고 개발한 기능

#### ⭐️ 카카오 로그인으로 간편한 로그인

- 대학생들이 접근하기 쉬운 카카오 로그인 api를 활용하여 회원가입 없이 간편하게 서비스 이용 가능

#### ⭐️ 같은 매장에서 주문한 음료들을 한꺼번에 픽업

- 같은 매장만을 필터링 하여 한번에 여러 주문을 받는 것이 가능

#### ⭐️ 빠른 공고 정보 확인과 손 쉬운 매칭

- 공고가 올라오면 공고 클릭 한번에 매장, 픽업장소, 메뉴와 픽업팁까지 한번에 확인 가능

- 해당 공고에서 픽업하기를 누르고 가게 도착예정을 쓰면 바로 매칭이 성사됨

<br><br>

## 2. 프로젝트 정보

### 프로젝트 소개

픽업셔틀은 음료 대리 픽업 서비스로, 배달을 시키기에는 부담스럽고 직접 포장을 하기는 힘든 사용자들이 '피커'에게 픽업팁을 주고 대리 픽업을 할 수 있게 연결해주는 서비스입니다.

<br>

### FE 팀원 소개

|                                      신효원                                      |                                      조배경                                       |                                                              김단빈                                                              |
| :------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
| <img width="160px" src="https://avatars.githubusercontent.com/u/67001905?v=4" /> | <img width="160px" src="https://avatars.githubusercontent.com/u/102566546?v=4" /> | <img width="160px" src="https://avatars.githubusercontent.com/u/97265303?s=400&u=d956702284666a11164c6ea6453839b139b05105&v=4"/> |
|                        전남대학교 소프트웨어공학과 3학년                         |                       전남대학교 컴퓨터정보통신공학과 3학년                       |                                                전남대학교 소프트웨어공학과 3학년                                                 |

<br><br>

## 3. 시작 가이드

### Installation

```
$ npm install @tanstack/react-query
$ npm install @tanstack/react-query-devtools
$ npm install redux
$ npm install react-redux
$ npm i react-router-dom
$ npm i axios
$ npm i sweetalert2
$ npm install --save react-toastify
$ npm install react-icons --save
$ npm install react-hook-form
$ npm install -D eslint
```

<br><br>

## 4. 기술 스택

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Development

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React](https://img.shields.io/badge/createreactapp-09D3AC?style=for-the-badge&logo=createreactapp&logoColor=white)
![ReactQuery](https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![ESLint](https://img.shields.io/badge/ESlint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)

### Communication

![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)

<br><br>

## 5. 페이지별 화면 구성과 주요 기능

#### 메인 페이지

메인페이지 사진

#### 로그인 페이지

로그인 페이지 사진

#### 공고 현황 페이지

#### 공고 작성 페이지

#### 공고 상세 페이지

#### 마이 페이지

#### 관리자 페이지

#### 학생증 인증 상세 페이지

<br><br>

## 6. 페이지별 주요 기능

1. 메인 페이지

-

```
1.1 페이지 내비게이트 기능
1.1.1 홈페이지 이동 기능(로고 클릭)
1.1.2 공고 현황 페이지 이동 기능
1.1.3 공고 작성 페이지 이동 기능
1.1.4 마이페이지 이동 기능

1.2 캐러셀 기능
1.2.1 캐러셀을 통한 서비스 정보 출력 기능

1.3 최신 공고글 노출 기능
1.3.1 최신 공고글 홈페이지 중앙 출력 기능
```

2. 로그인 페이지

```
3.1 로그인 기능
3.1.1 로그인 기능(카카오 로그인)
```

3. 공고 현황 페이지

```
4.1 등록된 공고 조회
4.1.1 전체 공고글 조회
4.1.2 공고 상세 페이지로 이동(각각의 공고 클릭)

4.2 공고 작성 입장페이지 이동 기능
4.2.1 공고 작성 입장페이지로 이동(공고 작성 버튼 클릭)

4.3 공고 필터링 기능
4.3.1 가게 별 정렬 기능

```

4. 공고 작성 페이지

```
5.1 공고 작성 페이지 이동
5.1.1 공고 작성 페이지로 이동(공고 작성하기 버튼 클릭)

5.2 공고 작성 기능
5.2.1 첫번째로 ‘주문 정보’ 관련 정보 입력 (주문 매장, 주문 메뉴)
5.2.2 두번째로 ‘요청 사항’ 관련 정보 입력(픽업 장소,  픽업팁 , 요청사항)
5.2.3 세번째로 ‘마감기한’ 관련 정보 입력(마감기한 시/분 입력)
5.2.4 각 페이지에서 ‘다음’ 버튼 클릭 시 다음 작성 페이지로 이동
5.2.5 각 페이지에서 ‘이전’ 버튼 클릭 시 이전 작성 페이지로 이동
5.2.6 필수 항목들을 입력하지 않고 ‘다음’으로 넘어갈 경우 빨간 색 테두리 및 글씨로 입력 해야함을 알림
5.2.7 마지막 작성 페이지(마감기한 창)에서 ‘등록’ 버튼 클릭 시 등록 확인 모달 창 띄움
5.2.8 등록 확인 모달 창에서 ‘확인’ 버튼 클릭 시 입력한 공고 항목들을 보여줄 공고 상세 페이지로 이동
```

5. 공고 상세 페이지

```
6.1 공고상세페이지 조회
6.1.1 공고 상세 정보 출력기능
(사용자가 작성한 공고인지 아닌지 여부에 따라 내용 다름)
(사용자가 작성한 공고 o → 작성자 입장에서의 상세페이지)
(사용자가 작성한 공고 x → 피커 입장에서의 상세페이지)

6.2 피커: 공고상세페이지 수락
6.2.1 해당글의 작성자가 아닐 때만 ‘이 음료 픽업하기’ 버튼을 통해 해당 공고를 픽업할 수 있음
6.2.2 ‘이 음료 픽업하기’ 버튼을 클릭하면 ‘이 음료를 픽업하시겠습니까?’ 모달 창이 뜨고, ‘수락’ 혹은 ‘취소’ 버튼을 클릭할 수 있음
6.2.3 ‘수락’ 버튼을 클릭하면 피커에 대한 정보를 입력하기 위해 예상 도착 시간 입력 창으로 넘어감
6.2.4  ‘입력 완료’를 클릭하면 매칭이 성사됨
6.2.5 ‘취소’를 클릭하면 공고 상세 페이지로 이동함
6.2.6 다시 자신이 픽업한 상세 페이지로 넘어감

6.3 작성자: 공고상세페이지 삭제
6.3.1 오른쪽 상단의 옵션 버튼(점 세개)를 클릭해서 삭제 옵션을 볼 수 있음
6.3.2 삭제를 클릭하면 자신이 작성한 공고가 삭제 되고 공고 목록 페이지로 이동함
```

6. 마이 페이지

```
7.1 학생증 인증 기능(페이지 이동)
7.1.1 학생증 업로드 페이지 이동 기능(학생증 인증 버튼 클릭)
7.1.2 학생증 사진 업로드
7.1.3 관리자에게 인증 요청(등록 버튼 클릭)
7.1.4 마이페이지로 이동(취소 버튼 클릭)

7.2 관리자 페이지 이동 기능(페이지 이동)
7.2.1 관리자 페이지 버튼을 클릭하면 관리자 페이지로 이동

7.3 수락한 공고글 조회 기능
7.3.1 픽업 수락한 공고글 확인 기능
7.3.2 공고 상세 페이지 이동 기능(공고글 클릭)

7.4 작성한 공고글 조회 기능
7.4.1 작성한 공고글 확인 기능
7.4.2 공고 상세 페이지 이동 기능(공고글 클릭)
```

7. 관리자 페이지

```
8.1 학생 인증 요청 목록
8.1.1 학생증 인증 요청 신청 목록을 조회
8.1.2 학생증 인증 요청 상세 페이지로 이동

```

8. 학생증 인증 상세 페이지

```
9.1 학생증 인증 요청 승인/거절 기능(확인 필요)
9.1.1 유저 정보 확인
9.1.2 학생증 인증 승인/거절
```

<br><br>

## 6. 아키텍쳐

#### 디자인 패턴

- Atomic Design Pattern

<br>

#### 네이밍 컨벤션

<br>

#### 디렉터리 구조

```
📁 public
📁 src
├── apis
│   └─ api
├── assets
│   └─ images
│        └─ image
├── components(아토믹 패턴 적용)
│   ├─ atoms
│   ├─ molecules
│   ├─ organisms
│   └─ templates
├── hooks
│   └─ use{name}
├── pages
│   └─ page
├── styles
├── utils
│   └─ ex) comma.js, constants.js
├── App.js
└── index.js
```

<br>

## 참고

[![Notion](https://img.shields.io/badge/12조_Notion-orange?&logo=Notion)](https://bronzed-amount-986.notion.site/3-0f2568d4eb0349408dca2f133aa29534)
