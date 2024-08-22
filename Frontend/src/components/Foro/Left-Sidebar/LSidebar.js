import React, { useState } from 'react';
import "LSidebar.module.css"

const LSidebar = () => {
  const [openSections, setOpenSections] = useState({
    home: false,
    dashboard: true,
    orders: true,
    account: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="flex-shrink-0 p-3 bg-white" style={{ width: '280px' }}>
      <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
        <svg className="bi me-2" width="30" height="24">
          <use xlinkHref="Bootstrap" />
        </svg>
        <span className="fs-5 fw-semibold">Collapsible</span>
      </a>
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          <button
            className={`btn btn-toggle align-items-center rounded ${openSections.home ? '' : 'collapsed'}`}
            onClick={() => toggleSection('home')}
            aria-expanded={openSections.home}
          >
            Home
          </button>
          <div className={`collapse ${openSections.home ? 'show' : ''}`} id="home-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <a href="!#" className="link-dark rounded">Overview</a>
              </li>
              <li>
                <a href="!#" className="link-dark rounded">Updates</a>
              </li>
              <li>
                <a href="!#" className="link-dark rounded">Reports</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className={`btn btn-toggle align-items-center rounded ${openSections.dashboard ? '' : 'collapsed'}`}
            onClick={() => toggleSection('dashboard')}
            aria-expanded={openSections.dashboard}
          >
            Dashboard
          </button>
          <div className={`collapse ${openSections.dashboard ? 'show' : ''}`} id="dashboard-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <a href="!#" className="link-dark rounded">Overview</a>
              </li>
              <li>
                <a href="!#" className="link-dark rounded">Weekly</a>
              </li>
              <li>
                <a href="!#" className="link-dark rounded">Monthly</a>
              </li>
              <li>
                <a href="!#" className="link-dark rounded">Annually</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className={`btn btn-toggle align-items-center rounded ${openSections.orders ? '' : 'collapsed'}`}
            onClick={() => toggleSection('orders')}
            aria-expanded={openSections.orders}
          >
            Orders
          </button>
          <div className={`collapse ${openSections.orders ? 'show' : ''}`} id="orders-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <a href="!#" className="link-dark rounded">New</a>
              </li>
              <li>
                <a href="!#" className="link-dark rounded">Processed</a>
              </li>
              <li>
                <a href="!#" className="link-dark rounded">Shipped</a>
              </li>
              <li>
                <a href="!#" className="link-dark rounded">Returned</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="border-top my-3"></li>
        <li className="mb-1">
          <button
            className={`btn btn-toggle align-items-center rounded ${openSections.account ? '' : 'collapsed'}`}
            onClick={() => toggleSection('account')}
            aria-expanded={openSections.account}
          >
            Account
          </button>
          <div className={`collapse ${openSections.account ? 'show' : ''}`} id="account-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <a href="!#" className="link-dark rounded">New...</a>
              </li>
              <li>
                <a href="!#" className="link-dark rounded">Profile</a>
              </li>
              <li>
                <a href="!#" className="link-dark rounded">Settings</a>
              </li>
              <li>
                <a href="!#" className="link-dark rounded">Sign out</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LSidebar;
