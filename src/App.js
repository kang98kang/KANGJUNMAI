import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TransitionGroup } from "react-transition-group"; //화면전환 애니메이션 라이브러리
import LoginForm from "./Component/LoginForm/LoginForm";
import "./App.css"; // 애니메이션 스타일 정의를 위해 CSS 파일을 추가해줘

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<GalleryPage />} />
//         <Route path="/gallery" element={<DetailCardPage />}>
//           <Route path=":cardId" element={<DetailCard />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

function App() {
  return (
    <>
      {/* <LoginForm /> */}
      <Main />
    </>
  );
}

export default App;
