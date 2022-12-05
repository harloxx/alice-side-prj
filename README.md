## ELICE FRONTEND PA

### What I used  
- Package Manager <img src="https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white">  

- Frontend <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white">  <img src="https://img.shields.io/badge/TypeScript-007396?style=flat-square&logo=TypeScript&logoColor=white">   <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/Scss-DB7093?style=flat-square&logo=Sass&logoColor=white">  

- Code Formmater <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=React&logoColor=white">

### Code Structure  
```
📂 src
├─ 📂 api  ▶️ api 호출 
├─ 📂 constants  ▶️ 상수 값
├─ 📂 components  ▶️ 페이지에 사용되는 컴포넌트
├─ 📂 pages  ▶️ 렌더링 할 페이지
├─ 📂 store  ▶️ 리덕스
├─ 📂 styles  ▶️ 공통적으로 사용되는 스타일 값 관리
├─ 📂 utils  ▶️ 자주 사용되는 함수
└─ 📂 _mock  ▶️ 샘플 데이터

```


### Demo    
https://user-images.githubusercontent.com/79822913/205503858-a82f5692-b15e-49e2-a3c0-36feff552695.mp4







https://user-images.githubusercontent.com/79822913/205580043-9ccb6f2a-6a3b-4c09-ba00-4d7f71c556ba.mp4






+ 반응형 UI
+ 검색 및 필터링(무료, 유료, 구독)
+ 페이지네이션
+ 리덕스 활용하여 필터링 목록, input 값 저장


### Prob  
https://user-images.githubusercontent.com/79822913/205503940-689ac567-b5ac-4b13-b4f8-d8ee48d934a8.mp4


  

페이지네이션 시 숫자들 렌더링이 바로 일어나지 않는 문제가 있습니다. useState의 비동기적 동작이 문제인 듯 합니다. 동기적으로 동작시키기 위해 setState를 함수형식으로 작성해보았지만 해결되지 않았습니다.   



