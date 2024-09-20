import { NavLink } from 'react-router-dom';
export const Header = () => {
  return (
    <header>
      <div className="header-area">
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-1">
                <div className="logo">
                  <NavLink to="/">
                    <img src="assets/img/logo/logo.png" alt="Logo" />
                  </NavLink>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-md-10">
                <div className="menu-main d-flex align-items-center justify-content-end">
                  <div className="main-menu f-right d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'active-link' : '')}
                          >
                            Home
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? 'active-link' : '')}
                          >
                            About
                          </NavLink>
                        </li>
                        {/* Additional links */}
                        <li>
                          <NavLink to="/services"  className={({ isActive }) => (isActive ? 'active-link' : '')}>Services</NavLink>
                        </li>
                        <li>
                          <NavLink to="/portfolio"  className={({ isActive }) => (isActive ? 'active-link' : '')}>Portfolio</NavLink>
                        </li>
                        {/* <li> */}
                          {/* <NavLink>Page</NavLink> */}
                          {/* <ul className="submenu"> */}
                            <li>
                              <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active-link' : '')}>Blog</NavLink>
                            </li>
                            {/* <li>
                              <NavLink to="/blog-details">Blog Details</NavLink>
                            </li>
                            <li>
                              <NavLink to="/elements">Elements</NavLink>
                            </li>
                            <li>
                              <NavLink to="/portfolio-details">Portfolio Details</NavLink>
                            </li> */}
                          {/* </ul> */}
                        {/* </li> */}
                        <li>
                          <NavLink to="/contact">Contact</NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-right-btn f-right d-none d-xl-block ml-20">
                    <NavLink to="#" className="btn header-btn">
                      Get Free Consultant
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
