import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";

const marginStyle = {
	margin: "auto",
	width: "50%",
};

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div style={marginStyle}>
				<Jumbotron />
				<div class="row">
					<div class="col-sm">
						<Card />
					</div>
					<div class="col-sm">
						<Card />
					</div>
					<div class="col-sm">
						<Card />
					</div>
					<div class="col-sm">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

ReactDOM.render(<Home />, document.querySelector("#app"));

export default Home;
