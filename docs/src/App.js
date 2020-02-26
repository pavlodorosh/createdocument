import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Documents from "./Documents";
import Generator from "./Generate";

function AllLinks() {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/documents' component={Documents} />
			<Route exact path='/generator' component={Generator} />
		</Switch>
	)
}

function App() {
	return (
		<div>
			<AllLinks/>
		</div>
	)
}

export default App;
