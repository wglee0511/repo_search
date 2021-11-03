# Repository 검색기

## stack

    - React
    - Redux
    - Redux toolkit
    - Redux-thunk
    - Axios
    - Styled-components
    - Material-UI

## 사용방법

    - 터미널 npm start 기입하여 프론트 로컬서버를 작동
    - 검색창에 repository를 검색
    - repository이름을 클릭하면 해당 repository로 이동(새창)
    - 추가하고 싶은 repository를 추가버튼을 클릭하여 추가 (4개까지 추가가능하며 표시 및 알람 작동)
    - 최상단 Stored Repo를 클릭하거나 검색창 아래 화살표 버튼을 클릭하여 저장되어 있는 repository를 확인
    - 저장된 repository를 삭제버튼을 통해 삭제
    - 최상단 Issues를 클릭하여 추가된 repository의 issue들을 확인
    - repository이름을 클릭하여 해당 repository로 이동하거나 description을 클릭하여 해당 issue의 상세페이지로 이동

## 주의사항

    - 컴포넌트 관련
        - div 이용시 elements 폴더 Grid 숙지 후 재이용 할 것
        - button 이용시 elements 폴더 Button 숙지 후 재이용 할 것
        - input 이용시 elements 폴더 Input 숙지 후 재이용 할 것
        - Header
            - url이 home일 경우 전체화면과 현재 저장된 repository 확인가능하게
            - 이외에는 navbar 역할
        - Main.jsx는 빈 컴포넌트

    - 리덕스 관련
        - isLoading 관련 통일할 것

    - 공통 관련
        - console.log() 대신 testLogger 이용할 것
        - style 관련 styles -> theme 참고하여 스타일 설정
        - 알림기능 react-notifications 패키지 참고할 것
