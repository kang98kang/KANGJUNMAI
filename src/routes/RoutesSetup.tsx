import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import Main from "./Main/Main";
import Layout from "./Layout";

export default function RoutesSetup() {
  // prettier-ignore
  return (
        <Routes>
                <Route path="/" element={<Navigate to="/Login" />} />
                <Route path="/Login" element={<LoginForm />} /> 
                <Route path="/" element={<Layout />}>
                <Route path="/Main" index element={<Main />} />
                </Route>
        </Routes>
    )
}
