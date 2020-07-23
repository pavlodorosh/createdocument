import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Routes from './constants/Routes';
import { DocContext } from "./components/DocContext";

const useStyles = makeStyles(theme => ({
	base: {
		overflowX: 'hidden',
		fontFamily: 'sans-serif'
	},
}));

const App = () => {
	const classes = useStyles();
	const [state, setState] = useState(
		{
			values: {},
			count: 0,
			step: 1,
			nextBtn: false,
			test: null
		},
		() => {},
	);

	return (
		<DocContext.Provider value={[state, setState]}>
			<div className={classes.base}>
				<Routes/>
			</div>
		</DocContext.Provider>
	)
};

export default App;
