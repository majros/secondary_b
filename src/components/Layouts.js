import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

import Vacancies from './LayDrawer';
import NavTab from './LayNavTab';
import Footer from './LayFooter';

import logo from './img/logo white2.gif';

const drawerWidth = 240;

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	appFrame: {
		height: 'auto',
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		width: '100%',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		height: 'calc(100vh - 50px)',
	},
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
	},
	toolbar: theme.mixins.toolbar,
	logo: {
		width: 275,
		height: 41,
	},
});

function ClippedDrawer(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<div className={classes.appFrame}>
				<CssBaseline/>
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<img className={classes.logo} alt='icon' src={logo}/>
					</Toolbar>
				</AppBar>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					<NavTab/>
				</main>
				<Drawer
					className={classes.drawer}
					variant="permanent"
					classes={{
						paper: classes.drawerPaper,
					}}
					anchor="right"
				>
					<div className={classes.toolbar} />
					<Vacancies/>
				</Drawer>
			</div>
			<Footer/>
		</div>
	);
}

ClippedDrawer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);