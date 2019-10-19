import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-primary bg-primary">
			<Link className="navbar-brand" to="/">
				<img src={require('../logo.png')} alt="election commission logo" />
			</Link>

			<ul className="navbar-nav ml-auto mr-2">
				<button type="button" className="btn btn-outline-primary pl-3 pr-3 mr-2">
					PRINT
				</button>
				<button type="button" className="btn btn-danger pl-3 pr-3 mr-2">
					SAVE
				</button>
			</ul>
		</nav>
	);
};

export default Header;
