import { Component } from 'react';
import { Navbar, Nav, NavDropdown, Modal, Button } from 'react-bootstrap';
import '../../src/styles/Navbar.css';

export default class MainNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false }
    }

    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });

    render() {
        return (
            <Navbar variant="light" expand="lg"
                style={{ backgroundColor: 'white', padding: '0', borderBottom: '1px solid rgba(0, 0, 0, 0.2)' }}
                className="justify-content-between align-items-center"
            >
                <Navbar.Brand href="/" className="ms-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" style={{ color: 'rgb(10, 102, 194)' }} fill="currentColor">
                        <title>
                            LinkedIn
                        </title>
                        <g> <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path> </g>
                    </svg>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <div className="input-group" style={{ maxWidth: '250px', backgroundColor: 'rgb(238, 243, 248)' }}>
                        <span className="input-group-text" id="Search" style={{ backgroundColor: 'rgb(238, 243, 248)', border: 'none' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false" >
                                <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
                            </svg>
                        </span>
                        <input
                            type="search"
                            placeholder="Search"
                            className="form-control"
                            aria-label="Search"
                            aria-describedby="Search"
                            style={{ backgroundColor: 'rgb(238, 243, 248)', border: 'none' }}
                        />
                    </div>

                    <Nav className="my-2 my-lg-0 ms-auto" >
                        <Nav.Link href="" className="text-center" style={{ maxHeight: '100px', }}>
                            <svg height="24" width="24" fill="currentColor">
                                <path d="m23 9v2h-2v7c0 1.7-1.3 3-3 3h-4v-6h-4v6h-4c-1.7 0-3-1.3-3-3v-7h-2v-2l11-7z"></path>
                            </svg><div>Home</div>
                        </Nav.Link>
                        <Nav.Link href="" className="text-center">
                            <svg height="24" width="24" fill="currentColor" >
                                <path d="m12 16v6h-9v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3zm5.5-3c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5 1.6 3.5 3.5 3.5zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5v4.5h7v-4.5c0-1.4-1.1-2.5-2.5-2.5zm-11-13c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5z"></path>
                            </svg>
                            <div>My Network</div>
                        </Nav.Link>
                        <Nav.Link href="" className="text-center">
                            <svg id="global-nav-icon--mercado__jobs" height="24" width="24" fill="currentColor">
                                <path d="m17 6v-1c0-1.7-1.3-3-3-3h-4c-1.7 0-3 1.3-3 3v1h-5v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-4zm-8-1c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1h-6zm10 9c1.2 0 2.3-.5 3-1.4v4.4c0 1.7-1.3 3-3 3h-14c-1.7 0-3-1.3-3-3v-4.4c.7.9 1.8 1.4 3 1.4z"></path>
                            </svg>
                            <div>Jobs</div>
                        </Nav.Link>
                        <Nav.Link href="" className="text-center">
                            <svg id="global-nav-icon--mercado__messaging" height="24" width="24" fill="currentColor">
                                <path d="M16 3H8C6.14348 3 4.36301 3.77847 3.05025 5.16416C1.7375 6.54984 1 8.42923 1 10.3889C1 12.3485 1.7375 14.2279 3.05025 15.6136C4.36301 16.9993 6.14348 17.7778 8 17.7778H12V22L20.16 16.3106C21.0512 15.639 21.7751 14.7495 22.2697 13.7183C22.7643 12.687 23.0148 11.5446 23 10.3889C23 8.42923 22.2625 6.54984 20.9497 5.16416C19.637 3.77847 17.8565 3 16 3ZM8 11.7083C7.75277 11.7083 7.5111 11.631 7.30554 11.486C7.09998 11.341 6.93976 11.1349 6.84515 10.8938C6.75054 10.6527 6.72579 10.3874 6.77402 10.1315C6.82225 9.87553 6.9413 9.64043 7.11612 9.4559C7.29093 9.27137 7.51366 9.14571 7.75614 9.0948C7.99861 9.04389 8.24995 9.07002 8.47835 9.16988C8.70676 9.26975 8.90199 9.43886 9.03934 9.65585C9.17669 9.87283 9.25 10.1279 9.25 10.3889C9.25 10.7388 9.1183 11.0744 8.88388 11.3219C8.64946 11.5693 8.33152 11.7083 8 11.7083ZM12 11.7083C11.7528 11.7083 11.5111 11.631 11.3055 11.486C11.1 11.341 10.9398 11.1349 10.8452 10.8938C10.7505 10.6527 10.7258 10.3874 10.774 10.1315C10.8222 9.87553 10.9413 9.64043 11.1161 9.4559C11.2909 9.27137 11.5137 9.14571 11.7561 9.0948C11.9986 9.04389 12.2499 9.07002 12.4784 9.16988C12.7068 9.26975 12.902 9.43886 13.0393 9.65585C13.1767 9.87283 13.25 10.1279 13.25 10.3889C13.25 10.7388 13.1183 11.0744 12.8839 11.3219C12.6495 11.5693 12.3315 11.7083 12 11.7083ZM16 11.7083C15.7528 11.7083 15.5111 11.631 15.3055 11.486C15.1 11.341 14.9398 11.1349 14.8452 10.8938C14.7505 10.6527 14.7258 10.3874 14.774 10.1315C14.8222 9.87553 14.9413 9.64043 15.1161 9.4559C15.2909 9.27137 15.5137 9.14571 15.7561 9.0948C15.9986 9.04389 16.2499 9.07002 16.4784 9.16988C16.7068 9.26975 16.902 9.43886 17.0393 9.65585C17.1767 9.87283 17.25 10.1279 17.25 10.3889C17.25 10.7388 17.1183 11.0744 16.8839 11.3219C16.6495 11.5693 16.3315 11.7083 16 11.7083Z"></path>
                            </svg>
                            <div>Messaging</div>
                        </Nav.Link>
                        <Nav.Link href="" className="text-center">
                            <svg height="24" width="24" fill="currentColor" >
                                <path d="M13.7 19C13.9 19.3 14 19.6 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 19.6 10.1 19.3 10.3 19H2V18C2 17 2.4 16.1 3.2 15.2L4.2 14H19.9L20.9 15.2C21.7 16.2 22.1 17.1 22.1 18V19H13.7ZM18.2 7.4C17.8 4.3 15.1 2 12 2C8.9 2 6.2 4.3 5.8 7.4L5 13H19L18.2 7.4Z"></path>
                            </svg>
                            <div>Notifications</div>
                        </Nav.Link>

                        <div className="text-center nav-link" >
                            <img width="24" src="https://via.placeholder.com/25" alt="25*25" />
                            <NavDropdown
                                title="Me"
                                id="me-nav-dropdown"
                                className="dropdown-menu-right"
                            >
                                <NavDropdown.Item href="/">User Image</NavDropdown.Item>
                                <NavDropdown.Item href="/">User Name</NavDropdown.Item>
                                <NavDropdown.Item href="/">User current job</NavDropdown.Item>
                                <NavDropdown.Item href="/profile">View Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Account</NavDropdown.Item>
                                <NavDropdown.Item href="/">Settings & Privacy</NavDropdown.Item>
                                <NavDropdown.Item href="/">Help</NavDropdown.Item>
                                <NavDropdown.Item href="/">Language</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Manage</NavDropdown.Item>
                                <NavDropdown.Item href="/">Posts & Activity</NavDropdown.Item>
                                <NavDropdown.Item href="/">Job Posting Account</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Sing Out</NavDropdown.Item>
                            </NavDropdown>
                        </div>

                        <Nav.Link href="" className="text-center" style={{ borderLeft: '1px solid rgba(0, 0, 0, 0.2)' }} onClick={this.handleShow}>
                            <svg height="24" width="24" fill="currentColor">
                                <path d="M10 10h4v4h-4v-4zm0 11h4v-4h-4v4zm-7-7h4v-4H3v4zm0 7h4v-4H3v4zM3 7h4V3H3v4zm14 7h4v-4h-4v4zm0-11v4h4V3h-4zm-7 4h4V3h-4v4zm7 14h4v-4h-4v4z"></path>
                            </svg>
                            <div>Work
                            <svg id="global-nav-icon--classNameic__down-arrow" width="15" height="15" data-supported-dps="15x15" fill="currentColor">
                                    <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
                                </svg>
                            </div>
                        </Nav.Link>
                        <Nav.Link href="" className="text-center" >
                            <div style={{ maxWidth: '130px', color: 'rgb(145, 89, 7)' }} className="text-center">Try Premium Free for 1 Month
                            </div>
                        </Nav.Link>

                        <Modal show={this.state.show} onHide={this.handleClose} animation={false} style={{ display: 'flex' }} className="my-modal" scrollable>
                            <Modal.Header closeButton>
                                <Modal.Title>Visit More LinkedIn Products</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <div>
                                    <ul className="global-nav__products p2 list-style-none" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <li id="learning-app-nav-link" className="global-nav__product text-center">

                                            <a tabindex="0" data-control-name="nav_launcher_learning" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/learning/?trk=nav_neptune_learning" id="ember754" className="global-nav__product-icon-link ember-view">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" data-supported-dps="40x40" width="40" height="40" focusable="false">
                                                    <defs>
                                                        <linearGradient id="app-learning-@1-a" x1="7.18" y1="6.98" x2="13.8" y2="20.22" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0" stop-color="#33aada"></stop>
                                                            <stop offset="1" stop-color="#0091ca"></stop>
                                                        </linearGradient>
                                                        <linearGradient id="app-learning-@1-b" x1="12.96" y1="-17.55" x2="27.9" y2="24.33" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0" stop-color="#665ed0"></stop>
                                                            <stop offset="1" stop-color="#0073b1"></stop>
                                                        </linearGradient>
                                                    </defs>
                                                    <path d="M20 30H8a1 1 0 01-1-1V11a1 1 0 011-1h12v20z" fill="url(#app-learning-@1-a)"></path>
                                                    <path d="M20 10h12a1 1 0 011 1v18a1 1 0 01-1 1H20V10z" fill="url(#app-learning-@1-b)"></path>
                                                    <path fill="#33aada" d="M9 19h8v2H9zM9 23h8v2H9zM9 15h8v2H9z"></path>
                                                    <path fill="#006097" d="M23 19h8v2h-8zM23 23h8v2h-8zM23 15h8v2h-8z"></path>
                                                    <path d="M17.41 15.25l7.46 4.52a.27.27 0 010 .46l-7.46 4.52a.27.27 0 01-.41-.23v-9a.27.27 0 01.41-.27z" fill="#fff"></path>
                                                </svg>
                                                <div className="block break-words t-12 t-black--light t-normal" title="Learning">
                                                    Learning
</div>
                                            </a>
                                        </li>
                                        <li id="insights-app-nav-link" className="global-nav__product text-center">

                                            <a tabindex="0" data-control-name="nav_launcher_insights" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/insights?trk=nav_app_launcher_insights_nept&amp;src=li-nav" id="ember756" className="global-nav__product-icon-link ember-view">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" data-supported-dps="40x40" width="40" height="40" focusable="false">
                                                    <defs>
                                                        <linearGradient id="app-talent-insights-medium-a" x1="34.05" y1="44.47" x2="13.67" y2="19.5" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0" stop-color="#665ed0"></stop>
                                                            <stop offset="1" stop-color="#0073b1"></stop>
                                                        </linearGradient>
                                                    </defs>
                                                    <path d="M25 6H10a1 1 0 00-1 1v25a1 1 0 001 1h20a1 1 0 001-1V12z" fill="#caedff"></path>
                                                    <path fill="#65c3e8" d="M25 6v6h6l-6-6z"></path>
                                                    <path d="M20 19a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v12h6zm8 11v-8h-5v9h4a1 1 0 001-1zm-17-5H9v5a1 1 0 001 1h4z" fill="url(#app-talent-insights-medium-a)"></path>
                                                </svg>
                                                <div className="block break-words t-12 t-black--light t-normal" title="Insights">
                                                    Insights
</div>
                                            </a>
                                        </li>
                                        <li id="job-postings-app-nav-link" className="global-nav__product text-center">

                                            <a tabindex="0" data-control-name="nav_launcher_job_postings" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/mjobs/jobPosting/learnMore?trk=nav_app_launcher_job_post_nept" id="ember758" className="global-nav__product-icon-link ember-view">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" data-supported-dps="40x40" width="40" height="40" focusable="false">
                                                    <defs>
                                                        <linearGradient id="app-jobs-posting-@1-a" x1="-6.68" y1="-1" x2="25.05" y2="26.36" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0" stop-color="#665ed0"></stop>
                                                            <stop offset="1" stop-color="#0073b1"></stop>
                                                        </linearGradient>
                                                    </defs>
                                                    <path fill="none" stroke="#caedff" stroke-miterlimit="10" stroke-width="2" d="M20 8.67l-4 6.66M20 8.67l4 6.66"></path>
                                                    <rect x="8" y="14" width="24" height="16" rx="1" ry="1" fill="url(#app-jobs-posting-@1-a)"></rect>
                                                    <path fill="#65c3e8" d="M12 18h16v3H12z"></path>
                                                    <path fill="#33aada" d="M15 23h10v3H15z"></path>
                                                    <circle cx="20" cy="9" r="2" fill="#65c3e8"></circle>
                                                </svg>
                                                <div className="block break-words t-12 t-black--light t-normal" title="Post a job">
                                                    Post a job
</div>
                                            </a>
                                        </li>
                                        <li id="advertise-app-nav-link" className="global-nav__product text-center">

                                            <a tabindex="0" data-control-name="nav_launcher_ads" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/campaignmanager/accounts" id="ember760" className="global-nav__product-icon-link ember-view">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" data-supported-dps="40x40" width="40" height="40" focusable="false">
                                                    <defs>
                                                        <linearGradient id="app-ads-@1-a" x1="34.78" y1="3.84" x2="14.66" y2="25.84" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0" stop-color="#665ed0"></stop>
                                                            <stop offset="1" stop-color="#0073b1"></stop>
                                                        </linearGradient>
                                                    </defs>
                                                    <g fill="url(#app-ads-@1-a)">
                                                        <path d="M20 11.88A8.13 8.13 0 1111.88 20 8.13 8.13 0 0120 11.88M20 9a11 11 0 1011 11A11 11 0 0020 9z"></path>
                                                        <circle cx="20" cy="20" r="4"></circle>
                                                    </g>
                                                    <circle cx="20" cy="20" r="2" transform="rotate(-45 20.002 19.995)" fill="#33aada"></circle>
                                                    <path fill="#33aada" d="M24.246 12.932l2.829 2.828-5.657 5.657-2.828-2.829z"></path>
                                                    <path fill="#33aada" d="M29.19 16.46l-4.95-.7-.7-4.95 4.94-4.95L29 11l5.14.52-4.95 4.94z"></path>
                                                </svg>
                                                <div className="block break-words t-12 t-black--light t-normal" title="Advertise">
                                                    Advertise
</div>
                                            </a>
                                        </li>
                                        <li id="find-leads-app-nav-link" className="global-nav__product text-center">

                                            <a tabindex="0" data-control-name="nav_launcher_find_leads" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/premium/products/?intentType=FIND_LEADS&amp;upsellOrderOrigin=premium_nav_more_products_panel" id="ember762" className="global-nav__product-icon-link ember-view">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" data-supported-dps="40x40" width="40" height="40" focusable="false">
                                                    <defs>
                                                        <linearGradient id="app-sales-navigator-@1-a" x1="40.53" y1="-53.4" x2="20.23" y2="19.17" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0" stop-color="#665ed0"></stop>
                                                            <stop offset="1" stop-color="#0073b1"></stop>
                                                        </linearGradient>
                                                    </defs>
                                                    <circle cx="20" cy="20" r="14" fill="url(#app-sales-navigator-@1-a)"></circle>
                                                    <path d="M17.17 17.17L27.42 12a.4.4 0 01.18 0 .39.39 0 01.4.39.42.42 0 010 .19l-5.17 10.25z" fill="#fff"></path>
                                                    <path d="M17.17 17.17L12 27.42a.42.42 0 000 .19.39.39 0 00.37.38.45.45 0 00.21 0l10.25-5.12z" fill="#98d8f4"></path>
                                                    <circle cx="20" cy="20" r="4" fill="#fff"></circle>
                                                    <circle cx="20" cy="20" r="2" fill="#0073b1"></circle>
                                                </svg>
                                                <div className="block break-words t-12 t-black--light t-normal" title="Find Leads">
                                                    Find Leads
</div>
                                            </a>
                                        </li>
                                        <li id="groups-app-nav-link" className="global-nav__product text-center">

                                            <a tabindex="0" data-control-name="nav_launcher_groups" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/groups" id="ember764" className="global-nav__product-icon-link ember-view">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" data-supported-dps="40x40" width="40" height="40" focusable="false">
                                                    <defs>
                                                        <linearGradient id="app-groups-@1-b" x1="1.84" y1="-24.59" x2="20.66" y2="25.05" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0" stop-color="#665ed0"></stop>
                                                            <stop offset="1" stop-color="#0073b1"></stop>
                                                        </linearGradient>
                                                        <clipPath id="app-groups-@1-a">
                                                            <path d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z" fill="none"></path>
                                                        </clipPath>
                                                    </defs>
                                                    <path d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z" fill="#caedff"></path>
                                                    <circle cx="29" cy="16" r="3" fill="#0091ca"></circle>
                                                    <circle cx="11" cy="16" r="3" fill="#0091ca"></circle>
                                                    <g clip-path="url(#app-groups-@1-a)">
                                                        <path d="M20 18a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v16h6V20z" fill="url(#app-groups-@1-b)"></path>
                                                        <path fill="#0091ca" d="M26 21h6v14h-6zM8 21h6v14H8z"></path>
                                                    </g>
                                                </svg>
                                                <div className="block break-words t-12 t-black--light t-normal" title="Groups">
                                                    Groups
</div>
                                            </a>
                                        </li>
                                        <li id="profinder-app-nav-link" className="global-nav__product text-center">

                                            <a tabindex="0" data-control-name="nav_launcher_pro_finder" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/profinder?trk=d_flagship3_nav" id="ember766" className="global-nav__product-icon-link ember-view">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" data-supported-dps="40x40" width="40" height="40" focusable="false">
                                                    <circle cx="20" cy="12" r="4" fill="#0073b1"></circle>
                                                    <path d="M31.88 13.46L16.17 29.17 18 31a1.37 1.37 0 002 0l14.71-14.71a1.13 1.13 0 00.29-.8.89.89 0 00-.29-.61l-1.41-1.42a1 1 0 00-1.42 0z" fill="#0091ca"></path>
                                                    <path d="M21.83 29.17L20 31a1.35 1.35 0 01-1 .4 1.36 1.36 0 01-1-.4l-8.71-8.71a1 1 0 010-1.41l1.41-1.41a1.07 1.07 0 01.76-.29.94.94 0 01.65.29z" fill="#33aada" opacity=".8"></path>
                                                    <path fill="#0073b1" d="M19 26.34l4-4V18h-6v6.34l2 2z"></path>
                                                </svg>
                                                <div className="block break-words t-12 t-black--light t-normal" title="ProFinder">
                                                    ProFinder
                                            </div>
                                            </a>
                                        </li>
                                        <li id="salary-explorer-app-nav-link" className="global-nav__product text-center">

                                            <a tabindex="0" data-control-name="nav_launcher_salary_explorer" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/salary?trk=d_flagship3_nav" id="ember768" className="global-nav__product-icon-link ember-view">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" data-supported-dps="40x40" width="40" height="40" focusable="false">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" fill="#0084bf" d="M7 27h26v2H7z"></path>
                                                    <path d="M31 32H9c-1.1 0-2-.9-2-2h26c0 1.1-.9 2-2 2z" fill-rule="evenodd" clip-rule="evenodd" fill="#33aada"></path>
                                                    <linearGradient id="app-salary-@1-a" gradientUnits="userSpaceOnUse" x1="21.826" y1="19.121" x2="16.728" y2="13.2">
                                                        <stop offset="0" stop-color="#1074af"></stop>
                                                        <stop offset="1" stop-color="#5251c0"></stop>
                                                    </linearGradient>
                                                    <circle cx="20" cy="17" r="5" fill-rule="evenodd" clip-rule="evenodd" fill="url(#app-salary-@1-a)"></circle>
                                                    <linearGradient id="app-salary-@1-b" gradientUnits="userSpaceOnUse" x1="25.44" y1="23.318" x2="10.254" y2="5.681">
                                                        <stop offset="0" stop-color="#1074af"></stop>
                                                        <stop offset="1" stop-color="#5251c0"></stop>
                                                    </linearGradient>
                                                    <path d="M32 8H8c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h24c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1zm-1 12c-1.9.7-3.3 2.2-4 4H13c-.7-1.9-2.2-3.3-4-4v-6c1.9-.7 3.3-2.2 4-4h14c.7 1.9 2.2 3.3 4 4v6z" fill-rule="evenodd" clip-rule="evenodd" fill="url(#app-salary-@1-b)"></path>
                                                    <g clip-rule="evenodd">
                                                        <path d="M16.5 20.5c2 2 5.1 2 7.1 0s2-5.1 0-7.1l-7.1 7.1z" fill-rule="evenodd" fill="#0084bf"></path>
                                                        <path fill="none" d="M20 9.929l7.071 7.07L20 24.072 12.929 17z"></path>
                                                    </g>
                                                </svg>
                                                <div className="block break-words t-12 t-black--light t-normal" title="Salary">
                                                    Salary
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <Modal.Footer></Modal.Footer>
                                <Modal.Title>Visit More LinkedIn Products</Modal.Title>
                                <Modal.Footer></Modal.Footer>
                                <div className="ph5">
                                    <ul className="list-style-none pb2">
                                        <li
                                            id="talent-solutions-business-service-link"
                                            className="business-services__item"
                                        >
                                            <a
                                                tabindex="0"
                                                data-control-name="nav_business_talent_solutions"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href="https://business.linkedin.com/talent-solutions?trk=flagship_nav&amp;veh=li-header-dropdown-lts-control&amp;src=li-nav"
                                                id="ember770"
                                                className="business-services__link block pv1 ember-view"
                                            >
                                                <h5 className="t-14 t-black t-bold">Talent Solutions</h5>
                                                <p className="t-12 t-black--light t-normal">
                                                    Find, attract and recruit talent
                                            </p>
                                            </a>
                                        </li>
                                        <li
                                            id="sales-solutions-business-service-link"
                                            className="business-services__item"
                                        >
                                            <a
                                                tabindex="0"
                                                data-control-name="nav_business_sales_solutions"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href="https://business.linkedin.com/sales-solutions?trk=flagship_nav&amp;veh=li-header-dropdown-lss-control&amp;src=li-nav"
                                                id="ember771"
                                                className="business-services__link block pv1 ember-view"
                                            >
                                                <h5 className="t-14 t-black t-bold">Sales Solutions</h5>
                                                <p className="t-12 t-black--light t-normal">
                                                    Unlock sales opportunities
                                               </p>
                                            </a>
                                        </li>
                                        <li
                                            id="job-posting-business-service-link"
                                            className="business-services__item"
                                        >
                                            <a
                                                tabindex="0"
                                                data-control-name="nav_business_post_a_job"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href="https://www.linkedin.com/mjobs/jobPosting/learnMore?trk=nav_biz_serv_job_post_nept"
                                                id="ember772"
                                                className="business-services__link block pv1 ember-view"
                                            >
                                                <h5 className="t-14 t-black t-bold">Post a job for free</h5>
                                                <p className="t-12 t-black--light t-normal">
                                                    Get your job in front of quality candidates
                                             </p>
                                            </a>
                                        </li>
                                        <li
                                            id="advertise-business-service-link"
                                            className="business-services__item"
                                        >
                                            <a
                                                tabindex="0"
                                                data-control-name="nav_business_advertise"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href="https://www.linkedin.com/ad/start?trk=n_nav_ads_rr_b&amp;src=li-nav"
                                                id="ember773"
                                                className="business-services__link block pv1 ember-view"
                                            >
                                                <h5 className="t-14 t-black t-bold">Marketing Solutions</h5>
                                                <p className="t-12 t-black--light t-normal">
                                                    Acquire customers and grow your business
                                            </p>
                                            </a>
                                        </li>
                                        <li
                                            id="learning-solutions-business-service-link"
                                            className="business-services__item"
                                        >
                                            <a
                                                tabindex="0"
                                                data-control-name="nav_business_learning_solutions"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href="https://learning.linkedin.com/?trk=d_flagship3_nav&amp;veh=learning_solutions&amp;src=li-nav"
                                                id="ember774"
                                                className="business-services__link block pv1 ember-view"
                                            >
                                                <h5 className="t-14 t-black t-bold">Learning Solutions</h5>
                                                <p className="t-12 t-black--light t-normal">
                                                    Develop talent across your organization
                                             </p>
                                            </a>
                                        </li>
                                    </ul>

                                    <hr
                                        className="artdeco-divider mv0"
                                    />

                                    <ul className="list-style-none">
                                        <li
                                            id="create-company-business-service-action"
                                            className="business-services__item"
                                        >
                                            <a
                                                data-control-name="nav_business_create_company"
                                                href="/company/setup/new/"
                                                id="ember775"
                                                className="business-services__link block pv1 ember-view"
                                            >
                                                <h5 className="pv2 t-14 t-black t-bold">
                                                    Create a Company Page
              <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 16 16"
                                                        data-supported-dps="16x16"
                                                        fill="currentColor"
                                                        className="mercado-match"
                                                        width="16"
                                                        height="16"
                                                        focusable="false"
                                                    >
                                                        <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                                                    </svg>
                                                </h5>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Close
                           </Button>
                                <Button variant="primary" onClick={this.handleClose}>
                                    Save Changes
                          </Button>
                            </Modal.Footer>
                        </Modal>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        );
    }
}