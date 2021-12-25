import React from "react";
import PropType from "prop-types";

function Card() {
	return (
		<div class="card">
			<img
				class="card-img-top"
				src={props.imgSrc}
				alt="Card image cap"></img>
			<div class="card-body">
				<h5 class="card-title">{props.title}</h5>
				<p class="card-text">{props.description}</p>
				<a href="#" class="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	imgSrc: PropType.string,
	title: PropType.string,
	description: PropType.string,
};

export default Card;
