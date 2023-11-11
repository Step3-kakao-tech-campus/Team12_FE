# 전남대 12조 - 픽업셔틀

<div align='center'>
	
![image](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/fb603ed5-cf9e-435a-8a09-07d61d47f1be)

</div>

<br><br>

## 목차

[1. 최종 과제 제출](#최종-과제-제출)

[2. 시작 가이드](#시작-가이드)

[3. 프로젝트 정보](#프로젝트-정보)

[4. 기술 스택](#기술-스택)

[5. 페이지별 화면구성과 주요 기능](#페이지별-화면구성과-주요-기능)

[6. 아키텍쳐](#아키텍쳐)


## 최종 과제 제출

### 1️⃣ 팀 내 배포 링크 모음

프론트, 백 데이터 등 배포 중인 인스턴스 주소

```
FE : https://k0d01653e1a11a.user-app.krampoline.com/
```

```
BE : https://k0d01653e1a11a.user-app.krampoline.com/api
```

### 2️⃣ 최신 ERD 이미지 파일 (링크X)

![image](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/ea6a157e-604d-4a3d-abe2-f3aec681754d)


### 3️⃣ 각 트랙별 코딩에 대한 간략한 설명

```
3. 프로젝트 정보 | 4. 기술 스택 | 5. 페이지별 화면 구성과 주요 기능 파트에 서술해 놓았습니다😀
```

## 시작 가이드

### Installation

```
$ git clone https://github.com/Step3-kakao-tech-campus/Team12_FE.git
$ cd Team12_FE
$ npm install
$ npm start
```

## 프로젝트 정보

### 프로젝트 간단 소개

```
픽업셔틀은 대학생들을 위한 음료 대리 픽업 서비스로, 배달을 시키기에는 부담스럽고 직접 포장을 하기는 힘든 대학생들이
'피커(대리픽업자)'에게 조금의 픽업팁을 주고 대리 픽업을 해다 줄 수 있도록 연결해주는 서비스입니다.
```

### FE 개발팀 소개

|                                      신효원                                      |                                      조배경                                       |                                                              김단빈                                                              |
| :------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
| <img width="160px" src="https://avatars.githubusercontent.com/u/67001905?v=4" /> | <img width="160px" src="https://avatars.githubusercontent.com/u/102566546?v=4" /> | <img width="160px" src="https://avatars.githubusercontent.com/u/97265303?s=400&u=d956702284666a11164c6ea6453839b139b05105&v=4"/> |
|                        전남대학교 소프트웨어공학과 3학년                         |                       전남대학교 컴퓨터정보통신공학과 3학년                       |                                                전남대학교 소프트웨어공학과 3학년                                                 |

<br><br>

### 서비스 기획 의도

```
- 학교를 다니는 대학생들에게 커피는 일상에서 떼어놓을 수 없는 존재! ☕
- 하지만, 학교 내에서 커피를 사러 주변 카페까지 갔다오기엔 귀찮음.. 🏪
- 또한 시간적 여유가 없어 바쁜 몇몇 대학생들에게 커피를 사러 나간다는 것은 쉽지 않은 일.. ⏱
- 그렇다고 카페 음료를 배달 시키자니 높은 최소 주문금액과 배달료가 발목을 붙잡는다! 💲
- 아! 학교로 오는 누군가에게 편하게 음료를 대신 사와달라고 할 순 없을까? ⇒ ✨ 픽업셔틀의 탄생 ✨
- 오더(주문자)🙋‍♀️ : 부담스러운 최소주문금액 & 배달료 대신 적은 금액의 픽업팁을 내고 음료를 받을 수 있게!
- 피커(대리픽업자)🚶‍♂️ : 학교 가는김에 내 음료 살겸 픽업 셔틀 보고 추가로 픽업도 해다 주고, 돈도 벌고!
```

### 주안점을 두고 개발한 기능

#### ⭐️ 카카오 로그인으로 간편한 로그인

- 카카오 로그인 API를 활용하여 대학생들이 많이들 사용하는 카카오톡으로 간편하게 로그인 하여 귀찮은 회원가입 없이 간편하게 서비스 이용 가능!

#### ⭐️ 빠른 공고 정보 확인과 손 쉬운 매칭

- 한 공고를 클릭하면 픽업할 카페, 픽업해줄 장소, 메뉴, 픽업팁 등을 한눈에 확인 가능!
- 해당 공고에서 픽업하기를 클릭하고 픽업 후 전달까지의 예상 도착 시간을 작성하면 오더-피커 간에 바로 매칭 완료

#### ⭐️ 학교 학생들을 이용해 정확하고 신속하게!

- 우리 학교 내부 위치는 학교 학생들이 더욱 잘 아는법!!
- 학생증 인증을 통해 우리 학교 학생들만이 픽업 셔틀을 이용할 수 있도록 개발
- 피커가 학교 학생이므로 길을 잃지 않고 정확하고 신속하게 전달해줄 수 있다!


#### ⭐️ 내가 원하는 카페만 쏙쏙 골라 픽업!

- 내가 자주 가는 카페만 필터링 하여 공고 확인 & 카페에 가는 김에 픽업까지!
- 내 음료 사러 가는김에 돈도 벌고 일석이조?! 🤩

## 기술 스택

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)

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

## 페이지별 화면구성과 주요 기능

### 메인 페이지

![메인화면(로그인 X)](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/82a472fc-d17e-4e02-af90-35fe12e4ffbf)

- 픽업셔틀 서비스의 메인 홈페이지 입니다!
- 상단 내비게이션 바를 통해 공고작성 & 공고현황 & 마이페이지로의 이동이 가능합니다.
- 현재 공고현황 게시판에 올라온 가장 최근 3개의 글을 간략하게 보여줍니다.

### 로그인 페이지

![로그인](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/a5e5f317-9e1e-437a-97ce-9dbf67379096)

- 카카오 로그인 버튼을 눌러, 카카오 연동 로그인을 통해 간편하게 서비스를 바로 이용하실 수 있습니다! 😊

### 회원가입 페이지(계좌정보 입력 페이지)

![카카오 로그인 시 계정 정보가 없을 때 넘어가는 화면](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/4e07e276-f0ac-4be4-9c18-f6c77d4556fd)

- 만약 픽업셔틀 서비스에 처음 가입하신 이용자라면, 추가로 계좌정보를 입력하는 페이지가 나타납니다.
- 모두 입력을 하고나면, 로그인이 되며 픽업셔틀을 이용할 수 있습니다.

### 공고 현황 페이지

![공고현황](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/eae27152-1ab5-4731-81b6-956614e48b18)

- 무한스크롤을 통해 편하게 전체 공고글 조회가 가능합니다!
- 필터링을 통해 가게 별로 공고를 확인할 수 있습니다.
- 각각의 공고를 누르면 해당 공고의 상세페이지로 이동합니다.
- 오른쪽 하단의 `+`버튼을 누르면 공고 작성 페이지로 이동합니다.

### 공고 작성 페이지

| 공고작성 입장 페이지 | 공고 주문 정보 작성 페이지(1/3) | 공고 요청 사항 작성 페이지(2/3) | 공고 마감 기한 작성 페이지(3/3)  | 
| :------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :---: |
| ![공고작성 입장](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/683e21a1-bc19-4e9c-b133-50bdf62c6f83) | ![공고 작성](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/895174b5-ce01-4cc1-91ea-6f54f8491feb) | ![공고 작성-2](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/feea50a9-06a5-47e6-8e69-e171c7b4609e) | ![공고 작성-4](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/9082681f-92ce-4aff-bd80-af047b869461) |

- 주문 정보, 요청 사항, 마감 기한을 입력하여 공고를 등록할 수 있습니다.
- 필수 항목들을 입력하지 않고 ‘다음’으로 넘어갈 경우 에러 메시지로 입력 해야한다고 알립니다.
- 모든 필수 정보를 입력하고 다음을 누르면, 공고글이 등록되며 공고 현황 페이지에서 확인할 수 있습니다!

### 공고 상세 페이지

| 공고 상세 페이지(매칭전 & 작성자 o) | 공고 상세 페이지(매칭후 & 작성자 o)  | 공고 상세 페이지(매칭전 & 작성자 x)  | 공고 상세 페이지(매칭후 & 작성자 x)  | 
|:--:|:--:|:--:|:--:|
| ![공고 상세 페이지-작성자](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/bfd069d6-ae78-4ec5-a08c-d6a9f15e2b40) | ![공고 상세 페이지-작성자-1](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/e66f2f86-23b1-47b4-b2fe-f98b3249f91e) | ![공고 상세 페이지-피커](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/aaa4a5dd-04cf-488b-8835-f6f0a9e7ba0e) | ![공고 상세 페이지-피커-3](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/81fd08b8-134e-44e8-bf16-3f8a0cbfb87c) |

- 공고 작성자가 작성한 공고의 상세 정보를 보여줍니다.
- 해당 공고의 작성자인 경우 픽업 버튼이 없고, 그 공고가 매칭이 안된 공고일 경우 오른쪽 점 3개(옵션 버튼)를 눌러 공고를 삭제할 수 있습니다.
- 작성자이고 매칭 된 공고일 경우 삭제가 불가하고 해당 공고를 수락한 피커의 정보가 나타납니다.
- 피커(작성자가 아닌 상태)이고 매칭이 안된 공고일 경우 공고 픽업하기를 클릭하여 공고를 수락 및 픽업할 수 있습니다.
- 피커(작성자가 아닌 상태)이고 매칭 된 공고일 경우 픽업하기 버튼이 비활성화 됩니다.

### 마이페이지

| USER | STUDENT | ADMIN |
|--|--|--|
| ![마이페이지-학생 미인증](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/8c2a0b1b-fe1f-4d8e-8f8b-184537d320ea) | ![마이페이지-학생 인증](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/a174492e-3da0-42d7-b934-a801b8da9bcc) | ![마이페이지-관리자 일 때](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/9bb0626b-c58b-4bb6-8251-aff0aab879d2) |

- 학생증 인증 여부에 따라 `USER` / `STUDENT`로 나뉘며, 관리자일 경우 `ADMIN`에 해당합니다.
- 로그아웃 버튼을 눌러 로그아웃이 가능합니다.
- 학생증 인증이 안된 경우 학생증 인증을 눌러 학생증 인증 페이지로 이동이 가능합니다.
- 학생증 인증이 완료된 경우 수락한 공고글과 작성한 공고글을 확인할 수 있습니다.
- 관리자인 경우 관리자 페이지를 눌러 관리자 페이지로 이동이 가능합니다.

#### 마이페이지 - 학생증 업로드(인증)(USER)

| 학생증 업로드 전 | 학생증 업로드 후|
| -- | -- |
| ![마이페이지-학생증 인증](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/2cc3d653-2643-4f62-b3f1-7b2f328992d6) | ![마이페이지-학생증인증](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/15043a7b-0e85-4e01-afa5-29a3e07018d5) |

- 학생증 인증을 신청하지 않은 경우 업로드 버튼을 눌러 학생증 업로드 및 인증을 신청할 수 있습니다.
- 학생증 인증을 신청 한 경우 인증 검토 중이라는 메시지를 보여줍니다.
- 학생증 인증 신청 이후, 관리자에 의해 인증이 승인되면 STUDENT 등급으로 올라갑니다!(모든 서비스 정상 이용 가능)

#### 마이페이지 - 관리자 인증 요청 관련 페이지(ADMIN)

| 학생증 인증 요청 목록 페이지 |  학생증 인증 요청 상세 페이지  |
| -- | -- |
| ![관리자페이지](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/9361be60-1f11-4b88-b358-cdcf9213f01b) | ![관리자페이지-인증상세](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/238ad8e8-6fbf-4c5c-9b02-6ecb9b9280e3) |

- 관리자는 학생증 인증 신청 목록을 확인할 수 있습니다.
- 관리자는 이름을 클릭하여 상세페이지 이동 후, 해당 학생의 학생 인증을 수락하거나 거절할 수 있습니다.

## 아키텍쳐

> Atomic Design Pattern 적용

### 디렉터리 구조

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

### 참고

[![Notion](https://img.shields.io/badge/12조_Notion-orange?&logo=Notion)](https://bronzed-amount-986.notion.site/3-0f2568d4eb0349408dca2f133aa29534)
