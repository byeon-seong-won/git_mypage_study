<h1> My page </h1>
: React를 활용한 마이페이지 SPA 



<h2>Site Map</h2>
<img alt="image" src="https://github.com/byeon-seong-won/react.js_shopmall_project/assets/136781516/ef725284-e9f4-45ad-b86b-d50dc5a7260b)"


[개인 프로젝트: 2023.7 ~ 2023.08]
<br>
<br>

<h1> Pages </h1>
: 총 3 페이지 (Home | Todolist | Memo)
컴포넌트 분리 (menu + tabcontent)
<br>


🔧 Home Page (App.js)
<p>- moment를 활용해 오늘 추가된 todo 및 memo 가져오기</p>
<p>- 왼쪽 메뉴 클릭시 해당 컨텐츠 노출</p>
<p>- light mode와 dark mode에 따른 메뉴와 전체 컨텐츠 색상 변동</p>
<p>- 오른쪽 상단 현재 날짜 노출</p>
<p>- 왼쪽 메뉴와 오른쪽 컨텐츠 각각 component로 분리/p>
<br>
<br>

🔧 Todolist (todolist.js) : 할일 리스트와 + 완료 항목(default : 항목없는 notfound 이미지) 으로 구성
<p>- CRUD : 추가 수정 삭제 읽기 가능 (redux로 상태관리)</p>
<p>- useEffect를 이용해 조건문 생성 -> 해당 탭에서의 현재 완료항목 배열을 가져와서 있을경우 항목을 나열,
없을 경우 notfound이미지</p>
<p>- 할일 추가시 기존 항목과 중복 체크 (수정완료된 항목 포함) -> 중복시 alert창 띄우고 return</p>
<p>- 항목 수정시 내용이 없다면 alert창 띄우고 return</p>
<p>- 완료 체크시 최종적으로 수정된 내용으로 완료항목 이동</p>
<p>- 완료 체크시 redux와 useState를 이용해 해당 항목에 취소선 생성과 아이콘 style삭제되고 수정 및 삭제 버튼 비활성화</p>

<br>
<br>

🔧 Memo (memo.js)
<p>- CRUD : 추가 수정 삭제 읽기 가능 (redux로 상태관리)</p>
<p>- '+'버튼 클릭시 메모장 생성됨, 해당 메모장 클릭시 내용 수정 가능</p>
<p>- 각 메모장의 배경 색상 선택 가능</p>
<p>- 배경색상은 최종 수정된 색상으로 유지</p>

<br>
<br>









