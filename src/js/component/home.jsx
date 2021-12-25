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
						<Card
							title="Avatar"
							description="the last airbender"
							imgSrc="https://cdn.vox-cdn.com/thumbor/dbSL2rQErtPprh4v_icOepQO9Ls=/0x0:2370x1574/920x613/filters:focal(996x598:1374x976):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69715362/Screen_Shot_2020_07_21_at_9.38.25_AM.0.png"
						/>
					</div>
					<div class="col-sm">
						<Card
							title="Pikachu"
							description="a pokemon"
							imgSrc="https://secure.img1-fg.wfcdn.com/im/77981853/resize-h755-w755%5Ecompr-r85/8470/84707680/Pokemon+Pikachu+Wall+Decal.jpg"
						/>
					</div>
					<div class="col-sm">
						<Card
							title="Will Smith"
							description="an actor"
							imgSrc="https://media.npr.org/assets/img/2021/11/10/will-smith-new-headshot-credit-lorenzo-agius_wide-fce30e30fbf83a2c586848fa991d1d61ab768cd2-s1100-c50.jpg"
						/>
					</div>
					<div class="col-sm">
						<Card
							title="Grass"
							description="grass"
							imgSrc="https://images.unsplash.com/photo-1533460004989-cef01064af7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3Jhc3N8ZW58MHx8MHx8&w=1000&q=80"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

ReactDOM.render(<Home />, document.querySelector("#app"));

export default Home;
