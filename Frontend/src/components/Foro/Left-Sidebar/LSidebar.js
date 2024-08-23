import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import './LSidebar.css';
import 'boxicons/css/boxicons.min.css';


const LSidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh-100" role="button">
          <div className="mt-3">
            <a href="!#" className="text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline">
              <i class='bx bx-water'></i>
              <span className="f5-4" >Restart Ocean</span>
            </a>
            <hr className="text-white d-none d-sm-block bg-dark"></hr>
            <ul className="nav nav-pills flex-column mt-2 mt-sm-0" id="parentM">
              <li className="nav-item my-1 py-2 py-sm-0">
                <a href="!#" className="nav-link text-white text-center text-sm-start" aria-current="page">
                  <i className="bi bi-speedometer2"></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </a>
              </li>
              <li className="nav-item my-1 py-2 py-sm-0">
                <a href="#submenu" className="nav-link" data-bs-toggle="collapse" aria-current="page">
                  <i className="bi bi-grid"></i>
                  <span className="ms-2 d-none d-sm-inline">Products</span>
                  <i className="bi bi-arrow-down-short ms-0 ms-sm-3"></i>
                </a>
                <ul className="nav collapse ms-2" id='submenu' data-bs-parent="#parentM">
                  <li className="nav-item">
                    <a className="nav-link text-white" href="!#" aria-current="page">
                      <span className="d-none d-sm-inline">Item</span> 1
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="!#">
                      <span className="d-none d-sm-inline">Item</span> 2
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="!#">
                      <span className="d-none d-sm-inline">Item</span> 3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item my-1 py-2 py-sm-0">
                <a href="!#" className="nav-link text-white text-center text-sm-start" aria-current="page">
                  <i className="bi bi-house"></i>
                  <span className="ms-2 d-none d-sm-inline">House</span>
                </a>
              </li>
              <li className="nav-item my-1 py-2 py-sm-0">
                <a href="!#" className="nav-link text-white text-center text-sm-start" aria-current="page">
                  <i className="bi bi-people"></i>
                  <span className="ms-2 d-none d-sm-inline">Customers</span>
                </a>
              </li>

            </ul>

          </div>
          <div className="dropdown open">
            <a href="!#" className="btn border-none dropdown-toggle text-white" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="bi bi-person f5-4"></i><span className="fs-5 ms-3 d-none d-sm-inline">Usuario</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="triggerId">
              <a className="dropdown-item" href="!#">Perfil</a>
              <a className="dropdown-item" href="!#">Configuraciones</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LSidebar;
