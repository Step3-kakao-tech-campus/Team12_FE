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

#### ⭐️ 같은 카페에서 주문한 음료들을 한꺼번에 픽업

- 같은 매장만을 필터링 하여 한번에 여러 주문을 받는 것이 가능

#### ⭐️ 빠른 공고 정보 확인과 손 쉬운 매칭

- 한 공고를 클릭하면 픽업할 카페, 픽업해줄 장소, 메뉴, 픽업팁 등을 한눈에 확인 가능
- 해당 공고에서 픽업하기를 클릭하고 픽업 후 전달까지의 예상 도착 시간을 작성하면 바로 매칭이 성사됨

#### ⭐️ 먹튀 방지를 위한 학생증 인증 시스템

- 피커팁만 받고 픽업을 안할 경우를 방지하기 위해 전남대학교 학생증을 인증하여 전남대 학생들만 사용이 가능

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
$ npm install
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

### 1. 메인 페이지

- 상단 네비게이션바에서 공고작성페이지, 공고현황페이지, 마이페이지 이동이 가능합니다.
- 픽업셔틀의 서비스 정보를 보여주는 캐러셀이 있습니다.
- 가장 최신의 공고글 3개를 노출합니다.

<img width="200" src="https://github.com/kimdanbin/Team12_Image/blob/main/mainPage.png?raw=true" alt="메인페이지">

<br>

### 2. 로그인 페이지

- 카카오 로그인 버튼을 눌러서 로그인이 가능합니다.

<img width="200" src="https://raw.githubusercontent.com/kimdanbin/Team12_Image/main/loginPage.png" alt="로그인페이지">

<br>

#### 공고 현황 페이지

- 무한스크롤을 사용해서 마우스 휠을 사용해 전체 공고글 조회가 가능합니다.
- 가게 별로 공고를 확인할 수 있는 필터링이 가능합니다.
- 각각의 공고를 누르면 해당 공고의 상세페이지로 이동합니다.
- +버튼을 누르면 공고 작성 페이지로 이동합니다.

<img width="200" src="https://github.com/kimdanbin/Team12_Image/blob/main/postList.png?raw=true" alt="공고 현황 페이지">

<br>

#### 공고 작성 페이지

- 주문 정보, 요청 사항, 마감 기한을 입력하여 공고를 등록할 수 있습니다.
- 필수 항목들을 입력하지 않고 ‘다음’으로 넘어갈 경우 에러 메시지로 입력 해야한다고 알립니다.

<img width="200" src="https://github.com/kimdanbin/Team12_Image/blob/main/posrWriteIntro.png?raw=true" alt="공고 작성 페이지1">
<img width="200" src="https://github.com/kimdanbin/Team12_Image/blob/main/postWrite1.png?raw=true" alt="공고 작성 페이지2">
<img width="200" src="https://github.com/kimdanbin/Team12_Image/blob/main/postWrite2.png?raw=true" alt="공고 작성 페이지3">
<img width="200" src="https://github.com/kimdanbin/Team12_Image/blob/main/postWrite3.png?raw=true" alt="공고 작성 페이지4">

<br>

#### 공고 상세 페이지

- 공고 작성자가 작성한 공고으 상세 정보를 보여줍니다.
- 작성자이고 매칭이 안됐을 경우 픽업버튼이 없고 오른쪽 점3개를 눌러 공고를 삭제할 수 있습니다.
- 작성자이고 매칭이 됐을 경우 점3개가 사라지고 피커 정보가 나타납니다.
- 피커이고 매칭이 안됐을 경우 공고 픽업하기를 눌러 공고를 픽업할 수 있습니다.
- 피커이고 매칭이 됐을 경우 픽업버튼이 비활성화 됩니다.

<br>

#### 마이 페이지

- 로그아웃 버튼을 눌러 로그아웃이 가능합니다.
- 학생증 인증이 안된 경우 학생증 인증을 눌러 학생증 인증 페이지로 이동이 가능합니다.
- 학생증 인증이 완료된 경우 수락한 공고글과 작성한 공고글을 확인할 수 있습니다.
- 관리자인 경우 관리자 페이지를 눌러 관리자 페이지로 이동이 가능합니다.

<img width="200" src="https://github.com/kimdanbin/Team12_Image/blob/main/myPage1.png?raw=true" alt="마이 페이지">

<br>

#### 관리자 페이지

- 학생증 인증 신청 목록을 확인할 수 있습니다.
- 이름을 클릭하면 해당 학생의 신청을 수락하거나 거절할 수 있습니다.

<br>

#### 학생증 인증 상세 페이지

- 학생증 인증을 신청안한 경우 업로드 버튼을 눌러 학생증을 업로드할 수 있습니다.
- 학생증 인증을 신청 한 경우 검토중 메시지를 보여줍니다.

<img width="200" src="https://github.com/kimdanbin/Team12_Image/blob/main/waitApproval.png?raw=true" alt="학생증 인증 상세 페이지">

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
├── 📁 apis
├── 📁 assets
│   └─ 📁 images
├── 📁 components(아토믹 패턴 적용)
│   ├─ 📁 atoms
│   ├─ 📁 layout
│   ├─ 📁 molecules
│   ├─ 📁 organisms
│   └─ 📁 templates
├── 📁 constant
├── 📁 mocks
├── 📁 pages
├── 📁 styles
├── 📁 utils
├── App.js
├── global.css
└── index.js
```

<br><br>

## 참고

[![Notion](https://img.shields.io/badge/12조_Notion-orange?&logo=Notion)](https://bronzed-amount-986.notion.site/3-0f2568d4eb0349408dca2f133aa29534)
