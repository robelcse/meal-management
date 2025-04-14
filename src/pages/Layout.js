export default function Layout({ children }) {

    return (

        <div className="wrapper">
            <nav id="sidebar" className="sidebar">
                <div className="sidebar-content js-simplebar">
                    <a className="sidebar-brand" href="dashboard-ecommerce.html">
                        <img src="./../assets/img/logo.png" height="auto" width="130" alt="Revo Interactive" />
                    </a>
                    <ul className="sidebar-nav">

                        <li className="sidebar-header">
                            Pages
                        </li>
                        <li className="sidebar-item active ">
                            <a className="accordion-button  collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard"
                                aria-expanded="false">
                                <i className="align-middle" data-feather="sliders"></i> <span
                                    className="align-middle">Dashboard</span>
                            </a>

                            <ul id="dashboard" className="sidebar-dropdown list-unstyled accordion-collapse collapse show"
                                data-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link" href="index.html">Analytics</a></li>
                                <li className="sidebar-item active"><a className="sidebar-link"
                                    href="dashboard-ecommerce.html">E-Commerce</a></li>
                            </ul>
                        </li>

                        <li className="sidebar-item ">
                            <a data-bs-toggle="collapse" data-bs-target="#widget" aria-expanded="false"
                                className="accordion-button collapsed ">
                                <i className="align-middle" data-feather="layout"></i> <span
                                    className="align-middle">Widgets</span>
                            </a>
                            <ul id="widget" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link" href="general.html">General</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="charts-chartjs.html">Chart</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="map.html">Map</a></li>
                            </ul>
                        </li>

                        <li className="sidebar-item">
                            <a data-bs-toggle="collapse" data-bs-target="#auth-pages" className="accordion-button collapsed "><i
                                className="align-middle" data-feather="user"></i> <span className="align-middle">Auth</span>
                            </a>
                            <ul id="auth-pages" className="sidebar-dropdown list-unstyled collapse" data-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link" href="pages-sign-in.html">Login</a>
                                </li>
                                <li className="sidebar-item"><a className="sidebar-link" href="pages-sign-in-2.html">Login2</a>
                                </li>
                                <li className="sidebar-item"><a className="sidebar-link" href="pages-sign-in-3.html">Login3</a>
                                </li>
                                <li className="sidebar-item"><a className="sidebar-link" href="pages-sign-up.html">Register</a>
                                </li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                    href="pages-forgot-password.html">Reset/Forgot
                                    Password</a>
                                </li>
                                <li className="sidebar-item"><a className="sidebar-link" href="pages-404.html">404</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="pages-500.html">500</a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a data-bs-toggle="collapse" data-bs-target="#gallery" className="accordion-button collapsed "><i
                                className="align-middle" data-feather="film"></i> <span className="align-middle">Gallery</span>
                            </a>
                            <ul id="gallery" className="sidebar-dropdown list-unstyled collapse" data-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link" href="gallery-bs.html">Bootstrap Gallery </a>
                                </li>
                                <li className="sidebar-item"><a className="sidebar-link" href="gallery-fancyBox.html">FancyBox Gallery  </a>
                                </li>
                                <li className="sidebar-item"><a className="sidebar-link" href="gallery-masonry.html">Masonry Gallery</a>
                                </li>

                            </ul>
                        </li>
                        <li className="sidebar-header">
                            Tools & Components
                        </li>
                        <li className="sidebar-item">
                            <a data-bs-toggle="collapse" data-bs-target="#ui" className="accordion-button collapsed ">
                                <i className="align-middle" data-feather="briefcase"></i> <span className="align-middle">UI
                                    Elements</span>
                            </a>
                            <ul id="ui" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link" href="ui-alerts.html">Alerts</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="ui-buttons.html">Buttons</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="ui-modals.html">Modals</a></li>

                            </ul>
                        </li>
                        <li className="sidebar-item ">
                            <a className="sidebar-link " href="icons-feather.html">
                                <i className="align-middle" data-feather="coffee"></i> <span className="align-middle">Icons</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a data-bs-toggle="collapse" data-bs-target="#forms" className="accordion-button collapsed ">
                                <i className="align-middle" data-feather="check-circle"></i> <span
                                    className="align-middle">Forms</span>
                            </a>
                            <ul id="forms" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link" href="forms-layouts.html">Form Layouts</a>
                                </li>
                                <li className="sidebar-item"><a className="sidebar-link" href="forms-basic-inputs.html">Basic
                                    Inputs</a>
                                </li>
                                <li className="sidebar-item"><a className="sidebar-link" href="forms-advance.html">Advance
                                    Inputs</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="form-multistep.html"> Form Multistep</a></li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="tables-bootstrap.html">
                                <i className="align-middle" data-feather="list"></i> <span className="align-middle">Tables</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
            <div className="main">
                <nav className="navbar navbar-expand navbar-light navbar-bg">
                    <a className="sidebar-toggle d-flex">
                        <i className="align-middle mr-2" data-feather="align-left"></i>
                    </a>

                    <form className="form-inline d-none d-sm-inline-block">
                        <div className="input-group input-group-navbar">
                            <input type="text" className="form-control" placeholder="Search…" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn" type="button">
                                    <i className="align-middle" data-feather="search"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="navbar-collapse collapse">
                        <ul className="navbar-nav navbar-align">
                            <li className="nav-item dropdown">
                                <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
                                    <div className="position-relative">
                                        <i className="align-middle" data-feather="bell"></i>
                                        <span className="indicator">4</span>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right " aria-labelledby="alertsDropdown">
                                    <div className="dropdown-menu-header">
                                        Notifications
                                    </div>
                                    <div className="list-group">
                                        <a href="#" className="list-group-item">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-2">
                                                    <i className="text-danger" data-feather="alert-circle"></i>
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">Update completed</div>
                                                    <div className="text-muted small mt-1">Restart server 12 to complete the
                                                        update.</div>
                                                    <div className="text-muted small mt-1">30m ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-2">
                                                    <i className="text-warning" data-feather="bell"></i>
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">Lorem ipsum</div>
                                                    <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate
                                                        hendrerit et.</div>
                                                    <div className="text-muted small mt-1">2h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-2">
                                                    <i className="text-primary" data-feather="home"></i>
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">Login from 192.186.1.8</div>
                                                    <div className="text-muted small mt-1">5h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-2">
                                                    <i className="text-success" data-feather="user-plus"></i>
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">New connection</div>
                                                    <div className="text-muted small mt-1">Christina accepted your request.
                                                    </div>
                                                    <div className="text-muted small mt-1">14h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-menu-footer p-2">
                                        <a href="#" >Show all notifications</a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
                                    <div className="position-relative">
                                        <i className="align-middle" data-feather="message-square"></i>
                                    </div>
                                </a>
                                <div className="dropdown-menu   dropdown-menu-lg dropdown-menu-right"
                                    aria-labelledby="messagesDropdown">
                                    <div className="dropdown-menu-header">
                                        <div className="position-relative">
                                            4 New Messages
                                        </div>
                                    </div>
                                    <div className="list-group">
                                        <a href="#" className="list-group-item">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-3">
                                                    <img src="assets/img/avatars/avatar-5.jpg" className=" img-fluid rounded-circle"
                                                        height="auto" width="80px" alt="Vanessa Tucker" />
                                                </div>
                                                <div className="col-9 pl-2">
                                                    <div className="text-dark">Vanessa Tucker</div>
                                                    <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu
                                                        tortor.</div>
                                                    <div className="text-muted small mt-1">15m ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-3">
                                                    <img src="assets/img/avatars/avatar-2.jpg" className=" img-fluid rounded-circle"
                                                        height="auto" width="80px" alt="William Harris" />
                                                </div>
                                                <div className="col-9 pl-2">
                                                    <div className="text-dark">William Harris</div>
                                                    <div className="text-muted small mt-1">Curabitur ligula sapien euismod
                                                        vitae.</div>
                                                    <div className="text-muted small mt-1">2h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-3">
                                                    <img src="assets/img/avatars/avatar-4.jpg" className=" img-fluid rounded-circle"
                                                        height="auto" width="80px" alt="Christina Mason" />
                                                </div>
                                                <div className="col-9 pl-2">
                                                    <div className="text-dark">Christina Mason</div>
                                                    <div className="text-muted small mt-1">Pellentesque auctor neque nec urna.
                                                    </div>
                                                    <div className="text-muted small mt-1">4h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-3">
                                                    <img src="assets/img/avatars/avatar-3.jpg" className=" img-fluid rounded-circle"
                                                        height="auto" width="80px" alt="Sharon Lessman" />
                                                </div>
                                                <div className="col-9 pl-2">
                                                    <div className="text-dark">Sharon Lessman</div>
                                                    <div className="text-muted small mt-1">Aenean tellus metus, bibendum sed,
                                                        posuere ac, mattis non.</div>
                                                    <div className="text-muted small mt-1">5h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-menu-footer p-2">
                                        <a href="#" >Show all messages</a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                                    <i className="align-middle" data-feather="settings"></i>
                                </a>

                                <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                                    <img src="assets/img/avatars/avatar.jpg" className="avatar img-fluid rounded mr-1"
                                        alt="Charles Hall" /> <span className="text-dark">Charles Hall</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="pages-profile.html"><i className="align-middle mr-1"
                                        data-feather="user"></i> Profile</a>
                                    <a className="dropdown-item" href="#"><i className="align-middle mr-1" data-feather="pie-chart"></i>
                                        Analytics</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="pages-settings.html"><i className="align-middle mr-1"
                                        data-feather="settings"></i> Settings & Privacy</a>
                                    <a className="dropdown-item" href="#"><i className="align-middle mr-1" data-feather="help-circle"></i>
                                        Help Center</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Log out</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main className="content">
                    <div className="container-fluid p-0">
                        {children}
                    </div>
                </main>

            </div >
        </div >
    );

}