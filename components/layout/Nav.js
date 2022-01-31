import react from "react";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-withe">
      <div class="container-fluid  ">
        <div class="collapse navbar-collapse  " id="navbarNav">
          <ul class="navbar-nav col-md-4 ms-auto  ">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                درباره سین
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active " href="#">
                تماس باما
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                راهنمای سین
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link active" href="#">
                پنل فروشندگان
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active ">ورود/ثبت نام</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
