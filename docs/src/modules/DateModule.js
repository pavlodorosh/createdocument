import React, {useContext, useState} from "react";
import DateFnsUtils from "@date-io/date-fns";
import uaLocale from "date-fns/locale/uk";
import { KeyboardDatePicker, MuiPickersUtilsProvider,} from "@material-ui/pickers";
import {DocContext} from "../components/DocContext";

const DateModule = (props) => {
	const [state, setState] = useContext(DocContext);
	const [selectedDate, setSelectedDate] = useState('01/01/2020');

	const GetDay = day => {
		let result = '';
		switch (day) {
			case '01':
				result = 'Перше';
				break;
			case '02':
				result = 'Друге';
				break;
			case '03':
				result = 'Третє';
				break;
			case '04':
				result = 'Четверте';
				break;
			case '05':
				result = 'П`яте';
				break;
			case '06':
				result = 'Шосте';
				break;
			case '07':
				result = 'Сьоме';
				break;
			case '08':
				result = 'Восьме';
				break;
			case '09':
				result = 'Дев`яте';
				break;
			case '10':
				result = 'Десяте';
				break;
			case '11':
				result = 'Одинадцяте';
				break;
			case '12':
				result = 'Дванадцяте';
				break;
			case '13':
				result = 'Тринадцяте';
				break;
			case '14':
				result = 'Чотирнадцяте';
				break;
			case '15':
				result = 'П`ятнадцяте';
				break;
			case '16':
				result = 'Шістнадцяте';
				break;
			case '17':
				result = 'Сімнадцяте';
				break;
			case '18':
				result = 'Вісімнадцяте';
				break;
			case '19':
				result = 'Дев`тнадцяте';
				break;
			case '20':
				result = 'Двадцяте';
				break;
			case '21':
				result = 'Двадцять перше';
				break;
			case '22':
				result = 'Двадцять друге';
				break;
			case '23':
				result = 'Двадцять третє';
				break;
			case '24':
				result = 'Двадцять четверте';
				break;
			case '25':
				result = 'Двадцять п`яте';
				break;
			case '26':
				result = 'Двадцять шосте';
				break;
			case '27':
				result = 'Двадцять сьоме';
				break;
			case '28':
				result = 'Двадцять восьме';
				break;
			case '29':
				result = 'Двадцять дев`яте';
				break;
			case '30':
				result = 'Тридцяте';
				break;
			case '31':
				result = 'Тридцять перше';
				break;
			default:
				// alert('Помилка');
				break;
		}

		return result;
	};
	const GetMonth = month => {
		let result = '';

		switch(month){
			case '01':
				result = ' січня';
				break;
			case '02':
				result = ' лютого';
				break;
			case '03':
				result = ' березня';
				break;
			case '04':
				result = ' квітня';
				break;
			case '05':
				result = ' травня';
				break;
			case '06':
				result = ' червня';
				break;
			case '07':
				result = ' липня';
				break;
			case '08':
				result = ' серпня';
				break;
			case '09':
				result = ' вересня';
				break;
			case '10':
				result = ' жовтня';
				break;
			case '11':
				result = ' листопада';
				break;
			case '12':
				result = ' грудня';
				break;
			default:
				// alert('Помилка');
				break;
		}
		return result;
	};
	const GetYear = year => {
		let result = '';
		let deep = 0;

		if(year[2] + year[3] === '00'){
			result = ' двохтисячного року'
		} else {
			if (year[0] == 1){
				result += ' одна тисяча дев`ятсот ';
			} else if (year[0] == 2){
				result += ' дві тисячі ';
			} else {
				// alert('Помилка');
			}

			if(deep === 0){
				switch(year[2] + year[3]){
					case '10':
						result += 'десятого року';
						break;
					case '11':
						result += 'одинадцятого року';
						break;
					case '12':
						result += 'дванадцятого року';
						break;
					case '13':
						result += 'тринадцятого року';
						break;
					case '14':
						result += 'чотирнадцятого року';
						break;
					case '15':
						result += 'п`ятнадцятого року';
						break;
					case '16':
						result += 'шістнадцятого року';
						break;
					case '17':
						result += 'сімнадцятого року';
						break;
					case '18':
						result += 'вісімнадцятого року';
						break;
					case '19':
						result += 'дев`ятнадцятого року';
						break;
					case '20':
						result += 'двадцятого року';
						break;
					case '30':
						result += 'тридцятого року';
						break;
					case '40':
						result += 'сорокового року';
						break;
					case '50':
						result += 'п`ятдесятого року';
						break;
					case '60':
						result += 'шістдесятого року';
						break;
					case '70':
						result += 'сімдесятого року';
						break;
					case '80':
						result += 'вісімдесятого року';
						break;
					case '90':
						result += 'дев`яностого року';
						break;
					default:
						deep++;
						break;
				}
			}

			if(deep === 1){
				switch (year[2]) {
					case '0':
						result += '';
						break;
					case '2':
						result += 'двадцять ';
						break;
					case '3':
						result += 'тридцять ';
						break;
					case '4':
						result += 'сорок ';
						break;
					case '5':
						result += 'п`ятдесят ';
						break;
					case '6':
						result += 'шістдесят ';
						break;
					case '7':
						result += 'сімдесят ';
						break;
					case '8':
						result += 'вісімдесят ';
						break;
					case '9':
						result += 'дев`яносто ';
						break;
					default:
						break;
				}
				switch (year[3]) {
					case '1':
						result += 'першого року';
						break;
					case '2':
						result += 'другого року';
						break;
					case '3':
						result += 'третього року';
						break;
					case '4':
						result += 'четвертого року';
						break;
					case '5':
						result += 'п`ятого року';
						break;
					case '6':
						result += 'шостого року';
						break;
					case '7':
						result += 'сьомого року';
						break;
					case '8':
						result += 'восьмого року';
						break;
					case '9':
						result += 'дев`ятого року';
						break;
					default:
						break;
				}
			}

		}


		return result;
	};

	const handleDateChange = (fullGeo, formatGeo) => {
		setSelectedDate(formatGeo);
		let date = '';
		if(formatGeo !== null){
			let dateArray = formatGeo.split('/');
			date = GetDay(dateArray[1]) + GetMonth(dateArray[0]) + GetYear(dateArray[2]);
		}

		setState(state => ({
			...state,
			test: date
		}));

	};

	return(
		<div>
			<MuiPickersUtilsProvider utils={DateFnsUtils} locale={uaLocale}>
				<KeyboardDatePicker
					disableToolbar
					variant="inline"
					format="MM/dd/yyyy"
					margin="normal"
					id="date-picker-inline"
					label="Оберіть дату"
					value={selectedDate}
					onChange={(x, event) => handleDateChange(x, event)}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
			</MuiPickersUtilsProvider>
		</div>
	)
};

export default DateModule