import React, {useState} from "react";
import DateFnsUtils from "@date-io/date-fns";
import uaLocale from "date-fns/locale/uk";
import { KeyboardDatePicker, MuiPickersUtilsProvider,} from "@material-ui/pickers";

function Date() {
	const [selectedDate, setSelectedDate] = useState(null);

	const handleDateChange = date => {
		setSelectedDate(date);
	};

	return(
		<MuiPickersUtilsProvider utils={DateFnsUtils} locale={uaLocale}>
			<KeyboardDatePicker
				disableToolbar
				variant="inline"
				format="MM/dd/yyyy"
				margin="normal"
				id="date-picker-inline"
				label="Оберіть дату >"
				value={selectedDate}
				onChange={handleDateChange}
				KeyboardButtonProps={{
					'aria-label': 'change date',
				}}
			/>
		</MuiPickersUtilsProvider>
	)
}

export default Date