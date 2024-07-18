import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { AuthContext } from "../../contexts/AuthContext";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      register(email, password, name);
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section>
      <div className="wrapper">
        <div className="form-box register">
          <form onSubmit={handleSubmit} className="register-form">
            <h1>회원가입</h1>
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
            <div className="input-box">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름"
                required
              />
              <FaUser className="icon" />
            </div>
            <button type="submit">가입하기</button>
            <div className="input-box">
              <Link to="/Login">
                <IoMdArrowRoundBack size="40px" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
