import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Documents from "../pages/Documents";
import Generator from "../pages/Generator";
import DateModule from "../modules/DateModule";

const Routes = () => {

	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/documents' component={Documents} />
			<Route exact path='/generator/:id' component={Generator} />
		</Switch>
	)
}

export default Routes