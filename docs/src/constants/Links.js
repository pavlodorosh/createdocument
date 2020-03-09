import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Documents from "../pages/Documents";
import Generator from "../pages/Generator";

function AllLinks() {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/documents' component={Documents} />
			<Route exact path='/generator' component={Generator} />
		</Switch>
	)
}

export default AllLinks