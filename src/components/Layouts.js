import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Vacancies from './LayDrawer';
import NavTab from './LayNavTab';
import Footer from './LayFooter';

import logo from './img/logowhite.gif';
import logo2 from './img/logowhite2.gif';

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
	stylesFoot: {
		alignItems: 'center',
		position: 'relative',
	},
});

function ClippedDrawer(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<div className={classes.appFrame}>
				<CssBaseline/>
				<AppBar position="fixed" className={classes.appBar} color="primary">
					<Toolbar>
						<Grid container className={classes.stylesFoot} justify={'space-between'}>
							<Grid item xs={2}>
								{window.innerWidth > 450 ? <img style={{width: 275, height: 41}} alt='icon' src={logo2}/> : <img style={{width: 80, height: 41}} alt='icon' src={logo}/>}
							</Grid>
							<Grid item xs={2} style={{minWidth:'170px'}}>
								<Typography noWrap> +38-0629-41-71-48 /49 /50 </Typography>
								<Typography noWrap> +38-0629-41-36-38 /25 </Typography>
								<Typography noWrap> info@bark.com.ua </Typography>
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					<NavTab/>
				</main>
				<Drawer
					anchor="right"
					className={classes.drawer}
					variant= {window.innerWidth > 450 ? "permanent" : "temporary"}
					classes={{
						paper: classes.drawerPaper,
					}}
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