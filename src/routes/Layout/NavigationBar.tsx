import { Link } from "../../Component/Link";
import "./NavigationBar.css";
import Logo from "../../Component/Assets/KangJ.png";
import { FaBullhorn } from "react-icons/fa6";
import { FaShoppingCart, FaWineBottle } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";

export default function NavigationBar() {
  // prettier-ignore
  return (
    <div className="head">
      <div className="inner">
        <Link to="/main" className="logo">
          <img  src={Logo} alt="강준마이" />
          </Link>
        <ul className="main-menu">
         <li className="item__name"><a href=""><span><FaBullhorn size="15" />
          </span>
         <span>공지</span></a></li>
          <li className="item__name"><a href="/ProductList"><span><FaWineBottle size="15"/>
          </span><span>주류</span></a></li>
          <li className="item__name"><a href="/Cart"><span><FaShoppingCart size="15"/>
          </span><span>장바구니</span></a></li>
          <li className="item__name"><a href="/Login"><span><IoLogIn size="15" />
          </span><span>로그인</span></a></li>
        </ul>
      </div>
  
  {/* <div className="badges">
    <div className="badge">
      <img src="./images/badge1.jpg" alt="Badge" />
    </div>
    <div className="badge">
      <img src="./images/badge2.jpg" alt="Badge" />
    </div>
  </div> */}
    </div>
  )
}
