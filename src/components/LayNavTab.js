import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AboutIcon from '@material-ui/icons/Info';
import VacIcon from '@material-ui/icons/Assignment';
import FleetIcon from '@material-ui/icons/DirectionsBoat';
import AppIcon from '@material-ui/icons/Description';
import ContactIcon from '@material-ui/icons/Place';

import AboutUs from '../pages/AboutUs';
import Fleet from '../pages/Fleet';
import Application from '../pages/Application';
import Contacts from '../pages/Contacts';
import Vacancies from '../pages/Vacancies';

const styles = theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
});

class ScrollableTabsButtonForce extends React.Component {
	state = {
		value: 0,
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { classes } = this.props;
		const { value } = this.state;

		return (
			<div className={classes.root}>
				<AppBar position="static" color="primary">
					<Tabs
						value={value}
						onChange={this.handleChange}
						fullWidth
						scrollButtons="on"
						indicatorColor="secondary"
						textColor="inherit"
					>
						<Tab label="ABOUT US" icon={<AboutIcon />} />
						<Tab label={window.innerWidth > 450 ? "VACANCIES" : "VAC"} icon={<VacIcon />} />
						<Tab label="FLEET" icon={<FleetIcon />} />
						<Tab label={window.innerWidth > 450 ? "APPLICATION" : "APP"} icon={<AppIcon />} />
						<Tab label="CONTACT" icon={<ContactIcon />} />
					</Tabs>
				</AppBar>
				{value === 0 && <AboutUs/>}
				{value === 1 && <Vacancies/>}
				{value === 2 && <Fleet/>}
				{value === 3 && <Application/>}
				{value === 4 && <Contacts/>}
			</div>
		);
	}
}

ScrollableTabsButtonForce.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonForce);