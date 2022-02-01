import react from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-withe justify-content-center">
      <ul className="navbar-nav col-md-4    ">
        <li className="nav-item ">
          <a className="nav-link active " href="#">
            درباره سین
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active " href="#">
            تماس باما
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">
            راهنمای سین
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active" href="#">
            پنل فروشندگان
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active " href="">
            ثبت نام
          </a>
        </li>
        <li>
          <h6 className="pt-2 mt-1">/</h6>
        </li>
        <li>
          {" "}
          <a className="nav-link active" href="">
            ورود
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
