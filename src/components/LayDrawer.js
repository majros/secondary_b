import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/es/Divider/Divider";

import {listOfVacancies} from "./listOfVacancies";

const styles = {
	card: {
		minWidth: 235,
	},
	pos: {
		marginTop: 8,
	},
};

function SimpleCard(props) {
	const { classes } = props;

	return (
		<Fragment>
			<Divider/>
			<Typography variant="h4" align="center" style={{height: '71px', paddingTop: '16px', paddingBottom: '16px'}}>
				Our vacancies
			</Typography>
			<Divider/>
			{listOfVacancies.slice(0, 4).map(lov => (
				<Card className={classes.card} key={lov.idms}>
					<CardContent>
						<Typography  variant="h5" component="h2">
							{lov.rank}
						</Typography>
						<Typography component="p">
							{lov.VSLtype}, {lov.dwt}
							<br/>
							{lov.vac}
							<br/>
							{lov.ownr}, {lov.loa}
						</Typography>
						<Typography className={classes.pos} color="textSecondary">
							{lov.wage}
						</Typography>
					</CardContent>
				</Card>
				))}
		</Fragment>
	);
}

SimpleCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);