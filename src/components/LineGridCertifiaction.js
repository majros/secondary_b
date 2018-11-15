import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Dialog from '@material-ui/core/Dialog';

import license from './img/_License.jpg'
import mlc from './img/_MLC 04.2018.jpg'

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		flexWrap: 'nowrap',
		transform: 'translateZ(0)',
	},
});

const listOfCertification = [license, mlc];

class LineGridCertification extends React.PureComponent {
	state = {
		open: false,
		selectedValue: null,
	};

	handleClickOpen = value => {this.setState({ selectedValue: value, open: true})};
	handleClose = () => {this.setState({ open: false })};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<GridList className={classes.gridList} cols={2}>
					{listOfCertification.map(lst => (
						<GridListTile key={lst}>
							<img style={{height:'180px', width:'120px'}}
							     onClick={() => this.handleClickOpen(lst)}
							     src={lst} alt='icon'/>
						</GridListTile>
					))}
				</GridList>
				<Dialog open={this.state.open}  onClose={this.handleClose} aria-labelledby="simple-dialog-title" >
					<img style={{height:'85vh'}}
					     onClick={() => this.handleClose()}
					     src={this.state.selectedValue} alt='icon'
					/>
				</Dialog>
			</div>
		);
	}
}
LineGridCertification.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(LineGridCertification);