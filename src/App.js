import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Documents from './pages/Documents';
import Registration from './pages/Registration';

const useStyles = makeStyles({
	base: {
		overflowX: 'hidden',
		fontFamily: 'sans-serif'
	}
});

const App = () => {
	const classes = useStyles();

	return (
		<div className={classes.base}>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/documents' component={Documents} />
				<Route exact path='/generator/:id' component={Registration} />
			</Switch>
		</div>
	)
};

export default App;
