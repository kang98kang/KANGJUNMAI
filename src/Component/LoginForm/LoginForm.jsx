import React, { useState } from "react";
import "./LoginForm.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginForm = () => {
  const [action, setAction] = useState("");

  const registerLink = () => {
    setAction(" active");
  };

  const loginLink = () => {
    setAction("");
  };

  return (
    <div className={`wrapper${action}`}>
      <div className="form-box login">
        <form action="">
          <h1>로그인</h1>
          <div className="input-box">
            <input type="text" placeholder="아이디" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="비밀번호" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              계정 기억하기
            </label>

            <a href="#">비밀번호를 잊으셨나요?</a>
          </div>
          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              아직 계정이 없으신가요?{" "}
              <a href="#" onClick={registerLink}>
                가입하기
              </a>{" "}
            </p>
            <br />
            <p>
              <a href="#" target="blank">
                게스트로 입장하기
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form action="">
          <h1>회원가입</h1>
          <div className="input-box">
            <input type="text" placeholder="아이디" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="이메일" required />
            <FaEnvelope className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="비밀번호" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              약관 동의 합니다.<div className=""></div>
            </label>
          </div>
          <button type="submit">가입하기</button>

          <div className="register-link">
            <p>
              이미 계정이 있으신가요?
              <a href="#" onClick={loginLink}>
                로그인하기
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
