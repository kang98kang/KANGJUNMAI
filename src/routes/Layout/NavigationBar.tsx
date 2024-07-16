import { Link } from "../../Component/Link";

export default function NavigationBar() {
  // prettier-ignore
  return (
    <div className="flex p-4 bg-red-700 ">
      <Link to="/" >Home</Link>
      <Link to="/board" className="ml-4">Board</Link>
    </div>
  )
}
