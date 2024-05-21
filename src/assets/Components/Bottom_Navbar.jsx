import React from "react";

const Bottom_Navbar = () => {
	return (
		<div className="button-background-image items-center text-xs flex flex-col lg:flex-row justify-between lg:px-10 md:px-5  md:flex-col sm:flex-col md:items-center sm:items-center gap-3 py-4 mt-5">
			<p className=" order-last lg:order-first md:order-last sm:order-last text-center">
				
				© 2023 Copywrite. All rights reserved by QodeMatrix
			</p>
			<ul className="inline-flex gap-5 ">
				<li>Documentation</li>
				<li>Support</li>
			</ul>
		</div>
	);
};

export default Bottom_Navbar;
