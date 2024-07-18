import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import LoginForm from "./LoginForm/LoginForm";
import Main from "./Main/Main";
import Layout from "./Layout";
import Cart from "./Cart/Cart";
import Register from "./LoginForm/Register";
import ProductList from "./Product/ProductList";
import ProductDetail from "./Product/ProductDetail";

export default function RoutesSetup() {
  const location = useLocation();
  // prettier-ignore
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
                <Route path="/" element={<Navigate to="/Login" />} />
                <Route path="/Register" element={<Register/>}/> 
                <Route path="/Login" element={<LoginForm />} /> 
                <Route path="/" element={<Layout />}>
                <Route path="/Main" index element={<Main />} />
                <Route path="/Cart" element={<Cart />}/>
                <Route path="/ProductList" element={<ProductList />}/>
                <Route path="/ProductDetail" element={<ProductDetail />}/>
                </Route>
        </Routes>
        </CSSTransition>
        </TransitionGroup>
    )
}
