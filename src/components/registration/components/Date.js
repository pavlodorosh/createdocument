import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateModule from '../../../modules/DateModule';
import Buttons from "./Buttons";

const Date = () => (
	<div>
		<Grid container spacing={3}>
			<Grid item xs={3}>
				<DateModule name="print-date"/>
			</Grid>
		</Grid>
		<Buttons />
	</div>
)

export default Date
