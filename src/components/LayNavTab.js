import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography';

import AboutUs from '../pages/AboutUs';
import Fleet from '../pages/Fleet';
import Application from '../pages/Application';
import Contacts from '../pages/Contacts';

function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

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
				<AppBar position="static" color="default">
					<Tabs
						value={value}
						onChange={this.handleChange}
						fullWidth
						scrollable
						scrollButtons="on"
						indicatorColor="primary"
						textColor="primary"
					>
						<Tab label="ABOUT US" icon={<PhoneIcon />} />
						<Tab label="FLEET" icon={<FavoriteIcon />} />
						<Tab label="APPLICATION" icon={<PersonPinIcon />} />
						<Tab label="CONTACT" icon={<HelpIcon />} />
					</Tabs>
				</AppBar>
				{value === 0 && <AboutUs/>}
				{value === 1 && <Fleet/>}
				{value === 2 && <Application/>}
				{value === 3 && <Contacts/>}
			</div>
		);
	}
}

ScrollableTabsButtonForce.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonForce);