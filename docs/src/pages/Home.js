import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<span>
				<Link to='/documents'>Вибрати Документ</Link>
			</span>
		</div>
	)
}

export default Home