import React, { useState, useContext } from "react";
import "./LoginForm.css";
import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(email, password);
      navigate("/Main");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section>
      <div className="wrapper">
        <div className="form-box login">
          <form onSubmit={handleSubmit}>
            <h1>로그인</h1>
            <div className="input-box">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일"
                required
              />
              <FaEnvelope className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                required
              />
              <FaLock className="icon" />
            </div>
            {/* <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                계정 기억하기
              </label>

              <a href="#">비밀번호를 잊으셨나요?</a>
            </div> */}
            <button type="submit">Login</button>

            <div className="register-link">
              <p>
                아직 계정이 없으신가요? <Link to="/Register">가입하기</Link>
              </p>
              <br />
              <p>
                <Link to="/Main">게스트로 입장하기</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
