import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children, className, active }) => {
	return (
		<div className="row no-gutters">
			<nav className="col-md-2 d-none d-md-block bg-light sidebar">
				<div className="sidebar-sticky">
					<ul className="nav flex-column">
						<li className="nav-item">
							<Link className={`nav-link ${active ==='institution'? 'active': ''}`} to="/">
								<span data-feather="institution" />
								Institution <span className="sr-only">(current)</span>
							</Link>
							<Link className={`nav-link ${active ==='staff'? 'active': ''}`} to="/staff">
								<span data-feather="staff" />
								Staff <span className="sr-only">(current)</span>
							</Link>
						</li>
					</ul>
				</div>
			</nav>

			<main role="main" className={`${className? className: 'col-md-9 ml-sm-auto col-lg-10 px-4 pl-0 pt-5'} `}>
				{children}
			</main>
		</div>
	);
};

export default Layout;
