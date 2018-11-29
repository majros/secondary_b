import React, { Component } from 'react';
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles/index";

import Layouts from './components/Layouts';


const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#cfcfcf',
			main: '#9e9e9e',
			dark: '#707070',
			contrastText: '#000000',
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000',
		},
	},
});


class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<Layouts/>
			</MuiThemeProvider>

		);
	}
}

export default App;