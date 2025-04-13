export default function () {

    return (
        <div className="wrapper">
            <nav id="sidebar" className="sidebar">
                <div className="sidebar-content js-simplebar">
                    <a className="sidebar-brand" href="dashboard-ecommerce.html">
                        <img src="./assets/img/logo.png" height="auto" width="130" alt="Revo Interactive" />
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

                        <div className="card card-custom p-4 mb-5">
                            <h4 className="mb-2">Sale Details</h4>
                            <div className="row ">

                                <div className="col-sm-6 col-xl-6 ">
                                    <div className="card card-custom-border mt-4">
                                        <div className="card-body">
                                            <div className="row ">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="">
                                                        <div className="avatar">
                                                            <div className="avatar-title rounded-circle bg-danger-light">
                                                                <i className="align-middle stroke-width-4" data-feather="arrow-up"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <h5 className="card-title m-0 sm-title mb-1">Today</h5>
                                                        <p className="mb-1 text-dark-bold-sm">$25698 <span
                                                            className="text-danger">-36%($2658)</span></p>
                                                        <p className="mb-1  text-mute-thin">Than yesterday</p>

                                                    </div>
                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-6">
                                    <div className="card card-custom-border mt-4">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <div className="avatar">
                                                            <div className="avatar-title rounded-circle bg-danger-light">
                                                                <i className="align-middle stroke-width-4" data-feather="arrow-down"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <h5 className="card-title m-0 sm-title mb-1">Month</h5>
                                                        <p className="mb-1 text-dark-bold-sm">$6954 <span
                                                            className="text-danger">-15%($369)</span></p>
                                                        <p className="mb-1  text-mute-thin">Than last month</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-6">
                                    <div className="card card-custom-border mt-4">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <div className="avatar">
                                                            <div className="avatar-title rounded-circle bg-success-light">
                                                                <i className="align-middle stroke-width-4" data-feather="arrow-up"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <h5 className="card-title m-0 sm-title mb-1 ">Week</h5>
                                                        <p className="mb-1 text-dark-bold-sm">$63147 <span
                                                            className="text-success">+65%($69)</span></p>
                                                        <p className="mb-1  text-mute-thin">Than yesterday</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="card card-custom-border mt-4 ">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <div className="avatar">
                                                            <div className="avatar-title rounded-circle bg-success-light">
                                                                <i className="align-middle stroke-width-4" data-feather="arrow-down"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <h5 className="card-title m-0 sm-title mb-1 ">Year</h5>
                                                        <p className="mb-1 text-dark-bold-sm ">$963198 <span
                                                            className="text-success">+90%($3654)</span></p>
                                                        <p className="mb-1 text-mute-thin ">Than yesterday</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card card-custom p-4 mb-5">
                            <h4 className="mb-2">Order Details</h4>
                            <div className="row ">

                                <div className="col-12 col-lg-6 ">
                                    <div className="card card-custom-border mt-4">
                                        <div className="card-body">
                                            <div className="row ">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="">
                                                        <div className="avatar">
                                                            <div className="avatar-title rounded-circle bg-dark-green-light">
                                                                <svg className="fill-green" width="25" height="25" viewBox="0 0 110 105"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <path
                                                                            d="M56.4571 104.995C56.4571 100.722 56.4571 96.6523 56.4571 92.5829C56.4596 79.9804 56.4645 67.3755 56.4547 54.773C56.4547 54.0685 56.5307 53.5801 57.3208 53.1997C74.5917 44.9155 91.8454 36.5959 109.104 28.2835C109.318 28.1802 109.543 28.0956 109.914 27.9407C109.943 28.3938 109.985 28.7555 109.985 29.1171C109.987 45.479 109.982 61.8386 110.002 78.2005C110.002 78.9472 109.828 79.3746 109.067 79.7409C91.9092 87.9759 74.7708 96.2437 57.625 104.505C57.3036 104.655 56.9675 104.779 56.4571 104.995Z"
                                                                            fill="#2c5f2d">
                                                                        </path>
                                                                        <path
                                                                            d="M0.0819734 27.9477C0.543251 28.1426 0.911292 28.2788 1.26216 28.4479C7.06002 31.2375 12.8481 34.0482 18.6607 36.8096C19.4262 37.1736 19.7059 37.5822 19.6985 38.4087C19.6568 43.9645 19.6765 49.5202 19.6765 55.0759C19.6765 55.5033 19.6765 55.933 19.6765 56.5482C21.7645 56.5482 23.7936 56.6257 25.8154 56.52C27.0765 56.4543 27.9353 56.8511 28.799 57.7082C30.8821 59.7816 33.078 61.7494 35.3427 63.8674C35.3427 57.5391 35.3427 51.3095 35.3427 44.8967C36.3487 45.364 37.1878 45.7397 38.0147 46.1365C42.8655 48.4706 47.7089 50.814 52.567 53.1363C53.1927 53.4369 53.573 53.7234 53.573 54.5124C53.5411 71.0621 53.546 87.6119 53.5411 104.162C53.5411 104.387 53.5117 104.613 53.4822 104.998C51.3476 103.976 49.3111 103.011 47.282 102.032C31.8562 94.6 16.4377 87.1587 0.999622 79.7456C0.280715 79.4004 -0.00390273 79.0459 -0.00144913 78.2522C0.0255405 61.8198 0.0181797 45.3874 0.0206333 28.9551C0.0230869 28.6615 0.0574374 28.361 0.0819734 27.9477Z"
                                                                            fill="#2c5f2d">
                                                                        </path>
                                                                        <path
                                                                            d="M36.9977 42.4758C41.7184 40.0572 46.2846 37.7137 50.8507 35.3773C63.131 29.0936 75.4162 22.8194 87.6842 16.5146C88.4105 16.1412 88.965 16.1248 89.6986 16.484C95.5578 19.3371 101.437 22.1478 107.308 24.975C107.595 25.1135 107.86 25.2873 108.277 25.5244C107.531 25.9001 106.906 26.2265 106.268 26.5318C89.5661 34.5789 72.8596 42.619 56.1677 50.6849C55.3653 51.0723 54.747 51.1217 53.9128 50.7107C48.6866 48.1348 43.4261 45.6223 38.1779 43.0863C37.8245 42.9149 37.4786 42.7247 36.9977 42.4758Z"
                                                                            fill="#2c5f2d">
                                                                        </path>
                                                                        <path
                                                                            d="M1.65613 25.5056C5.03965 23.8736 8.20725 22.3426 11.3749 20.8163C25.5665 13.9785 39.7606 7.1454 53.94 0.28645C54.7129 -0.086906 55.3042 -0.100995 56.0795 0.279406C61.2763 2.8248 66.5024 5.31854 71.7163 7.83341C72.0697 8.00483 72.4083 8.20677 72.9162 8.4815C72.0868 8.9253 71.3949 9.3104 70.6883 9.67202C54.5509 17.9305 38.416 26.1889 22.264 34.4239C21.8223 34.6493 21.1083 34.8231 20.7182 34.6376C14.4198 31.6648 8.15573 28.6334 1.65613 25.5056Z"
                                                                            fill="#2c5f2d">
                                                                        </path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <h5 className="card-title m-0 sm-title mb-1">New Order</h5>
                                                        <div className="d-flex align-items-center">
                                                            <p className="text-dark-bold-sm me-1">6981</p>
                                                            <i className="align-middle  text-success me-1" data-feather="arrow-up"></i>
                                                            <p className="text-success me-1"> 68%</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="card card-custom-border mt-4">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <div className="avatar">
                                                            <div className="avatar-title rounded-circle bg-orange-light">
                                                                <svg className="fill-warning" width="25" height="25" viewBox="0 0 98 98"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M7.35 84H12.25V77.1167C12.25 61.5883 25.4677 49 41.7725 49C25.4677 49 12.25 36.4117 12.25 20.8833V14H7.35C3.29525 14 0 10.8617 0 7C0 3.13833 3.29525 0 7.35 0H90.65C94.7047 0 98 3.13833 98 7C98 10.8617 94.7047 14 90.65 14H85.75V20.8833C85.75 36.4117 72.5323 49 56.2275 49C72.5323 49 85.75 61.5883 85.75 77.1167V84H90.65C94.7047 84 98 87.1383 98 91C98 94.8617 94.7047 98 90.65 98H7.35C3.29525 98 0 94.8617 0 91C0 87.1383 3.29525 84 7.35 84ZM77.0893 22.6567C77.1505 22.0733 77.175 21.4783 77.175 20.8833V14H20.825V20.8833C20.825 21.4783 20.8495 22.0733 20.9108 22.6567C25.48 27.51 36.3335 30.9167 49 30.9167C61.6665 30.9167 72.52 27.51 77.0893 22.6567ZM56.2275 57.1667H41.7725C30.2207 57.1667 20.825 66.115 20.825 77.1167V77.9567C25.3575 72.9517 36.26 69.4167 49 69.4167C61.74 69.4167 72.6425 72.9517 77.175 77.9567V77.1167C77.175 66.115 67.7793 57.1667 56.2275 57.1667Z"
                                                                        fill="#ff8e25">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <h5 className="card-title m-0 sm-title mb-1">Pending Order
                                                        </h5>
                                                        <div className="d-flex align-items-center justify-content-end">
                                                            <p className="text-dark-bold-sm me-1">6981</p>
                                                            <i className="align-middle  text-success me-1" data-feather="arrow-up"></i>
                                                            <p className="text-success me-1"> 68%</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="card card-custom-border mt-4">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>

                                                        <div className="avatar">
                                                            <div className="avatar-title rounded-circle bg-success-light">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                                    viewBox="0 0 512 512">
                                                                    <path
                                                                        d="M0 80C0 35.8 35.8 0 80 0H432c44.2 0 80 35.8 80 80V368c0 26.2-12.6 49.4-32 64v48c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H128v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V432C12.6 417.4 0 394.2 0 368V80zm129.9 72.2L112 224H400l-17.9-71.8C378.5 138 365.7 128 351 128H161c-14.7 0-27.5 10-31 24.2zM128 320a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z "
                                                                        fill="#7dc006" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <h5 className="card-title m-0 sm-title mb-1">Delivered Order
                                                        </h5>
                                                        <div className="d-flex align-items-center justify-content-end">
                                                            <p className="text-dark-bold-sm me-1">6981</p>
                                                            <i className="align-middle  text-success me-1" data-feather="arrow-up"></i>
                                                            <p className="text-success me-1"> 68%</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="card card-custom-border mt-4 ">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <div className="avatar">
                                                            <div className="avatar-title rounded-circle bg-danger-light">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                                    viewBox="0 0 512 512">
                                                                    <path
                                                                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                                                                        fill="#e52727" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <h5 className="card-title m-0 sm-title mb-1">Cancelled Order
                                                        </h5>
                                                        <div className="d-flex align-items-center justify-content-end">
                                                            <p className="text-dark-bold-sm me-1">6981</p>
                                                            <i className="align-middle  text-success me-1" data-feather="arrow-up"></i>
                                                            <p className="text-success me-1"> 68%</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="row mb-5">
                            <div className="col-12">
                                <div className="card card-custom  flex-fill">
                                    <div>
                                        <h5 className="card-title mb-0 p-4">Top Selling Products</h5>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-striped my-0">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th className="d-none d-xl-table-cell">Tech</th>
                                                    <th className="d-none d-xl-table-cell">License</th>
                                                    <th className="d-none d-xl-table-cell text-right">Open tickets</th>
                                                    <th className="text-right">Orders</th>
                                                    <th className="text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>AppStack Theme</td>
                                                    <td><span className="badge bg-badge-success">HTML</span></td>
                                                    <td className="d-none d-xl-table-cell">Single license</td>
                                                    <td className="d-none d-xl-table-cell text-right">5</td>
                                                    <td className="d-none d-xl-table-cell text-right">520</td>
                                                    <td className="text-right">
                                                        <a className="me-1" href="pages-invoice.html"><i className="align-middle"
                                                            data-feather="eye"></i></a>
                                                        <a href="#"><i className="align-middle" data-feather="external-link"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Spark Theme</td>
                                                    <td><span className="badge bg-badge-success">HTML</span></td>
                                                    <td className="d-none d-xl-table-cell">Single license</td>
                                                    <td className="d-none d-xl-table-cell text-right">2</td>
                                                    <td className="d-none d-xl-table-cell text-right">240</td>
                                                    <td className="text-right">
                                                        <a className="me-1" href="pages-invoice.html"><i className="align-middle"
                                                            data-feather="eye"></i></a>
                                                        <a href="#"><i className="align-middle" data-feather="external-link"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Milo Theme</td>
                                                    <td><span className="badge bg-badge-success">HTML</span></td>
                                                    <td className="d-none d-xl-table-cell">Single license</td>
                                                    <td className="d-none d-xl-table-cell text-right">8</td>
                                                    <td className="d-none d-xl-table-cell text-right">180</td>
                                                    <td className="text-right">
                                                        <a className="me-1" href="pages-invoice.html"><i className="align-middle"
                                                            data-feather="eye"></i></a>
                                                        <a href="#"><i className="align-middle" data-feather="external-link"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Ada Theme</td>
                                                    <td><span className="badge bg-badge-primary">React.js</span></td>
                                                    <td className="d-none d-xl-table-cell">Single license</td>
                                                    <td className="d-none d-xl-table-cell text-right">2</td>
                                                    <td className="d-none d-xl-table-cell text-right">410</td>
                                                    <td className="text-right">
                                                        <a className="me-1" href="pages-invoice.html"><i className="align-middle"
                                                            data-feather="eye"></i></a>
                                                        <a href="#"><i className="align-middle" data-feather="external-link"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Abel Theme</td>
                                                    <td><span className="badge bg-badge-primary">React.js</span></td>
                                                    <td className="d-none d-xl-table-cell">Single license</td>
                                                    <td className="d-none d-xl-table-cell text-right">3</td>
                                                    <td className="d-none d-xl-table-cell text-right">250</td>
                                                    <td className="text-right">
                                                        <a className="me-1" href="pages-invoice.html"><i className="align-middle"
                                                            data-feather="eye"></i></a>
                                                        <a href="#"><i className="align-middle" data-feather="external-link"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Spark Theme</td>
                                                    <td><span className="badge bg-badge-success">HTML</span></td>
                                                    <td className="d-none d-xl-table-cell">Single license</td>
                                                    <td className="d-none d-xl-table-cell text-right">12</td>
                                                    <td className="d-none d-xl-table-cell text-right">430</td>
                                                    <td className="text-right">
                                                        <a className="me-1" href="pages-invoice.html"><i className="align-middle"
                                                            data-feather="eye"></i></a>
                                                        <a href="#"><i className="align-middle" data-feather="external-link"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Libre Theme</td>
                                                    <td><span className="badge bg-badge-success">HTML</span></td>
                                                    <td className="d-none d-xl-table-cell">Single license</td>
                                                    <td className="d-none d-xl-table-cell text-right">18</td>
                                                    <td className="d-none d-xl-table-cell text-right">320</td>
                                                    <td className="text-right">
                                                        <a className="me-1" href="pages-invoice.html"><i className="align-middle"
                                                            data-feather="eye"></i></a>
                                                        <a href="#"><i className="align-middle" data-feather="external-link"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Von Theme</td>
                                                    <td><span className="badge bg-badge-primary">React.js</span></td>
                                                    <td className="d-none d-xl-table-cell">Single license</td>
                                                    <td className="d-none d-xl-table-cell text-right">2</td>
                                                    <td className="d-none d-xl-table-cell text-right">310</td>
                                                    <td className="text-right">
                                                        <a className="me-1" href="pages-invoice.html"><i className="align-middle"
                                                            data-feather="eye"></i></a>
                                                        <a href="#"><i className="align-middle" data-feather="external-link"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row mb-5">
                            <div className="col-12 col-lg-6 mb-3">
                                <div className="card card-custom  flex-fill">
                                    <div>
                                        <h5 className="card-title mb-0 p-4">Top Selling Products</h5>
                                    </div>
                                    <div style={{ 'overflowX': 'auto' }}>
                                        <table className="table table-striped my-0 w-100">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th className="d-none d-xl-table-cell">Tech</th>
                                                    <th className="d-none d-xl-table-cell">License</th>
                                                    <th className="d-none d-xl-table-cell text-right">Open tickets</th>
                                                    <th className="text-right">Orders</th>
                                                    <th className="text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>AppStack Theme</td>
                                                    <td><span className="badge bg-badge-success">HTML</span></td>
                                                    <td className="d-none d-xl-table-cell">Single license</td>
                                                    <td className="d-none d-xl-table-cell text-right">5</td>
                                                    <td className="d-none d-xl-table-cell text-right">520</td>
                                                    <td className="text-right">
                                                        <a className="me-1" href="pages-invoice.html"><i className="align-middle"
                                                            data-feather="eye"></i></a>
                                                        <a href="#"><i className="align-middle" data-feather="external-link"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Spark Theme</td>
                                                    <td><span className="badge bg-badge-success">HTML</span></td>
                                                    <td className="d-none d-xl-table-cell">Single license</td>
                                                    <td className="d-none d-xl-table-cell text-right">2</td>
                                                    <td className="d-none d-xl-table-cell text-right">240</td>
                                                    <td className="text-right">
                                                        <a className="me-1" href="pages-invoice.html"><i className="align-middle"
                                                            data-feather="eye"></i></a>
                                                        <a href="#"><i className="align-middle" data-feather="external-link"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Milo Theme</td>
                                                    <td><span className="badge bg-badge-success">HTML</span></td>
                                                    <td className="d-none d-xl-table-cell">Single license</td>
                                                    <td className="d-none d-xl-table-cell text-right">8</td>
                                                    <td className="d-none d-xl-table-cell text-right">180</td>
                                                    <td className="text-right">
                                                        <a className="me-1" href="pages-invoice.html"><i className="align-middle"
                                                            data-feather="eye"></i></a>
                                                        <a href="#"><i className="align-middle" data-feather="external-link"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Ada Theme</td>
                                                    <td><span className="badge bg-badge-primary">React.js</span></td>
                                                    <td className="d-none d-xl-table-cell">Single license</td>
                                                    <td className="d-none d-xl-table-cell text-right">2</td>
                                                    <td className="d-none d-xl-table-cell text-right">410</td>
                                                    <td className="text-right">
                                                        <a className="me-1" href="pages-invoice.html"><i className="align-middle"
                                                            data-feather="eye"></i></a>
                                                        <a href="#"><i className="align-middle" data-feather="external-link"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Abel Theme</td>
                                                    <td><span className="badge bg-badge-primary">React.js</span></td>
                                                    <td className="d-none d-xl-table-cell">Single license</td>
                                                    <td className="d-none d-xl-table-cell text-right">3</td>
                                                    <td className="d-none d-xl-table-cell text-right">250</td>
                                                    <td className="text-right">
                                                        <a className="me-1" href="pages-invoice.html"><i className="align-middle"
                                                            data-feather="eye"></i></a>
                                                        <a href="#"><i className="align-middle" data-feather="external-link"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Spark Theme</td>
                                                    <td><span className="badge bg-badge-success">HTML</span></td>
                                                    <td className="d-none d-xl-table-cell">Single license</td>
                                                    <td className="d-none d-xl-table-cell text-right">12</td>
                                                    <td className="d-none d-xl-table-cell text-right">430</td>
                                                    <td className="text-right">
                                                        <a className="me-1" href="pages-invoice.html"><i className="align-middle"
                                                            data-feather="eye"></i></a>
                                                        <a href="#"><i className="align-middle" data-feather="external-link"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Libre Theme</td>
                                                    <td><span className="badge bg-badge-success">HTML</span></td>
                                                    <td className="d-none d-xl-table-cell">Single license</td>
                                                    <td className="d-none d-xl-table-cell text-right">18</td>
                                                    <td className="d-none d-xl-table-cell text-right">320</td>
                                                    <td className="text-right">
                                                        <a className="me-1" href="pages-invoice.html"><i className="align-middle"
                                                            data-feather="eye"></i></a>
                                                        <a href="#"><i className="align-middle" data-feather="external-link"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Von Theme</td>
                                                    <td><span className="badge bg-badge-primary">React.js</span></td>
                                                    <td className="d-none d-xl-table-cell">Single license</td>
                                                    <td className="d-none d-xl-table-cell text-right">2</td>
                                                    <td className="d-none d-xl-table-cell text-right">310</td>
                                                    <td className="text-right">
                                                        <a className="me-1" href="pages-invoice.html"><i className="align-middle"
                                                            data-feather="eye"></i></a>
                                                        <a href="#"><i className="align-middle" data-feather="external-link"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>

                            </div>
                            <div className="col-12 col-lg-6 mb-3">
                                <div className="card card-custom p-4  flex-fill">
                                    <div>
                                        <h5 className="card-title mb-4 ">Top Selling Products</h5>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table widgets-table my-0 w-100">
                                            <thead>
                                                <tr>
                                                    <th className="px-2">Name</th>
                                                    <th className="px-2" >Designation</th>
                                                    <th className="px-2" >Skill Level</th>
                                                    <th className=" px-2 text-end">Experience</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td> <img src="assets/img/avatars/avatar-2.jpg" alt="" />John Deo (14+ Online)</td>
                                                    <td ><span
                                                        className="badge bg-badge-success ">HTML</span></td>
                                                    <td >
                                                        <div className="task-progress">
                                                            <progress className="progress progress1" max="100" value="80"></progress>
                                                        </div>
                                                    </td>
                                                    <td className=" text-end">5</td>
                                                </tr>
                                                <tr>
                                                    <td><img src="assets/img/avatars/avatar-2.jpg" alt="" />Holio Mako (250+ Online)</td>
                                                    <td><span
                                                        className="badge bg-badge-success ">HTML</span></td>
                                                    <td >
                                                        <div className="task-progress">
                                                            <progress className="progress progress2" max="100" value="30"></progress>
                                                        </div>
                                                    </td>
                                                    <td className=" text-end">2</td>
                                                </tr>
                                                <tr>
                                                    <td> <img src="assets/img/avatars/avatar-2.jpg" alt="" />Mohsib lara(99+ Online)</td>
                                                    <td ><span
                                                        className="badge bg-badge-success ">HTML</span></td>
                                                    <td >
                                                        <div className="task-progress">
                                                            <progress className="progress progress3" max="100" value="80"></progress>
                                                        </div>
                                                    </td>
                                                    <td className=" text-end">8</td>
                                                </tr>
                                                <tr>
                                                    <td> <img src="assets/img/avatars/avatar-2.jpg" alt="" /> Hileri Soli (150+ Online)
                                                    </td>
                                                    <td ><span
                                                        className="badge bg-badge-primary ">React.js</span></td>
                                                    <td >
                                                        <div className="task-progress">
                                                            <progress className="progress progress2" max="100" value="40"></progress>
                                                        </div>
                                                    </td>
                                                    <td className=" text-end">2</td>
                                                </tr>
                                                <tr>
                                                    <td className=""> <img src="assets/img/avatars/avatar-2.jpg" alt="" />Pusiz bia (14+
                                                        Online)</td>
                                                    <td ><span
                                                        className="badge bg-badge-primary ">React.js</span></td>
                                                    <td >
                                                        <div className="task-progress">
                                                            <progress className="progress progress3" max="100" value="50"></progress>
                                                        </div>
                                                    </td>
                                                    <td className=" text-end">3</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </main>

            </div >
        </div >
    );
}