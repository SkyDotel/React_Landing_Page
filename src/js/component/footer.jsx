import React from "react";

const footerStyle = {
	backgroundColor: "black",
};

function Footer() {
	return (
		<div class="text-center p-3 foot " style={footerStyle}>
			<a class="text-white" href="https://landingpage.com/">
				© 2021 Copyright: Your Website Landingpage.com
			</a>
		</div>
	);
}

export default Footer;
