import React, { useState } from 'react';

import Navbar from '../components/Navbar/Navbar';

const Layout = props => {
	const [open, setOpen] = useState(false);

	const openMenu = () => {
		setOpen(true);
	};

	const close = () => {
		setOpen(false);
	};

	return (
		<div>
			<Navbar show={open} tutup={close} click={openMenu} />
			<main>{props.children}</main>
		</div>
	);
};

export default Layout;
