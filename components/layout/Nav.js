import react from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-withe">
      <div className="container-fluid  ">
        <div className="collapse navbar-collapse  " id="navbarNav">
          <ul className="navbar-nav col-md-4 ms-auto  ">
            <li className="nav-item">
              <a className="nav-link active" href="#">
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
              <a className="nav-link active ">ورود/ثبت نام</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
