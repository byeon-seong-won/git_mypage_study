<h1> My page </h1>
: React를 활용한 마이페이지 SPA 



<h2>Site Map</h2>
<img alt="image" src="https://github.com/byeon-seong-won/react.js_shopmall_project/assets/136781516/ef725284-e9f4-45ad-b86b-d50dc5a7260b)"


[개인 프로젝트: 2023.7 ~ 2023.08]
<br>
<br>

<h1> Pages </h1>
: 총 3 페이지 (Home | Detail | Cart)
<br>

🔧 Home Page (App.js)
<p>- Router를 이용해 페이지 나누기</p>
<p>- node.js와 mysql 연동으로 DB에 있는 데이터로 가져오기</p>
<p>- DB 데이터를 이용해 최근본상품 구현</p>
<p>- 로그인 기능</p>
<p>- createSlice.js 파일과 컴포넌트를 분리/p>
<p>- axios get을 통해 상품 데이터 "더보기" 버튼 클릭시 보여주기(+map 반복문으로 레이아웃 구성)</p>
<p>- 상품 더보기 버튼 구현(+준비된 데이터가 끝나면 버튼 없애기)</p>
<p>- 정렬 버튼 구현(가격순|abc순|cba순|11만원이하|원래대로) {SortBtns.js}</p>
<p>- 상품 이미지를 클릭하면 해당 상품 Detail page로 이동</p>
<p>- 재고 데이터 표시</p>
<p>- top menu 항목 클릭시 해당하는 컨텐츠 표시(페이지 이동/모달창)</p>
<p>- 로그인(모달창) 정규식 검사(이메일 형식/비밀번호 대문자 포함 체크) {LoginForm.js}</p>
<p>- useEffect와 addEventListener를 이용한 헤더 스크롤 이벤트 구현</p>


<br>
<br>

🔧 Detail Page (detail.js)
<p>- useEffect를 활용해 페이지가 로드되면 알림창 띄우기 + 애니메이션 효과</p>
<p>- 주문하기 버튼 클릭시 재고가 줄어듦 + Cart page로 이동 + 장바구니 리스트에 담김(dispatch로 데이터 전송 -> redux로 상태관리)</p>
<p>- select box에서 선택한 사이즈 값 장바구니로 전달</p>
<p>- 장바구니 버튼 클릭시 장바구니 페이지 이동</p>
<p>- 뒤로가기 버튼(Home으로 이동)</p>
<p>- 탭 기능 구현(+애니메이션 효과)</p>

<br>
<br>

🔧 Cart Page (cart.js)
<p>- redux로 상태관리(index.js)</p>
<p>- 수량 변경 버튼(+수량이 음수가 되지 않도록 조절하는 기능)</p>
<p>- Detail Page에서 같은 상품을 주문하면 항목추가가 아닌 수량증가가 되는 기능</p>
<p>- 장바구니 항목 삭제 기능</p>
<p>- 이벤트 알림창 표시</p>
<p>- 페이지 뒤로가기 버튼</p>
<p>- 수량이 1인상태에서 - 버튼클릭시 삭제 모달창 띄우기


<br>
<br>


<h1> 💻 [2023.08.07~ ] 코드 수정 💻 </h1>
<li>
  Cart page 수량증감 버튼 동작 안 되는 부분 해결
</li>
<li>
  createSlice를 컴포넌트별로 새로운 파일로 분리
</li>
<li>
  App.js 컴포넌트 새로운 파일로 분리
</li>


<br>
<br>



<h1> 💻 [2023.06.27] nodex.js 와 mysql 연동 💻 </h1>

<p> 1. node.js </p>
<br>
<p> 2. mysql에 "product" 데이터베이스 생성 후 "products" 테이블 생성 </p>
<img width="152" alt="image" src="https://github.com/byeon-seong-won/react.js_shopmall_project/assets/136781516/436b9e94-f81f-4f6d-9055-30747344df29">
<br>
<p> 3. "products" 테이블에 id와 name, count, price 칼럼을 생성 한 후 에 30개의 데이터를 넣음</p>
<img width="284" alt="image" src="https://github.com/byeon-seong-won/react.js_shopmall_project/assets/136781516/1cc8ff79-f5a3-4400-a30f-f1b7644f4c49">
<br>
<p> 4. 변수 shoes에 "products" 테이블을 담아 가져옴</p>
<img width="257" alt="image" src="https://github.com/byeon-seong-won/react.js_shopmall_project/assets/136781516/079c2186-7a1d-42da-b0ae-36e6b7ed3c51">
<br>
<p> 5. map 함수를 이용해 shoes안에 있는 데이터들을 뿌려준다. </p>
<img width="269" alt="image" src="https://github.com/byeon-seong-won/react.js_shopmall_project/assets/136781516/46ed1875-f10d-42e0-baf1-31d9361824f7">






