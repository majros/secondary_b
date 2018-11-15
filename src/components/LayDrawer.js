import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/es/Divider/Divider";

const styles = {
	card: {
		minWidth: 235,
	},
	pos: {
		marginTop: 8,
	},
};

const listOfVacancies = [
	{
	idms: '4',
	rank: '2nd Officer',
	VSLtype: 'Container',
	dwt: '1.512-14.000 TEU',
	vac: '1 open position for Nov-Dec 2018',
	ownr: 'Owner CPO',
	loa: 'COE duraton 4 months',
	wage: 'Salary: 4113.00 $',
	dateVac: '12.11.2018',
	},
	{
	idms: '3',
	rank: 'ETO',
	VSLtype: 'Container',
	dwt: '1.512-9.178 TEU',
	vac: '2 open positions',
	ownr: 'Owner CPO',
	loa: '4 months',
	wage: 'Salary: 5738.00 $',
	dateVac: '12.11.2018',
	},
	{
	idms: '2',
	rank: '3rd Engineer',
	VSLtype: 'Container',
	dwt: '1.512-9.178 TEU',
	vac: '2 open positions',
	ownr: 'Owner CPO',
	loa: '4 months',
	wage: 'Salary: 4113.00 $',
	dateVac: '12.11.2018',
	},
	{
	idms: '1',
	rank: 'Chief Officer',
	VSLtype: 'Container',
	dwt: '1.512-9.178 TEU',
	vac: '2 open positions',
	ownr: 'Owner CPO',
	loa: '4 months',
	wage: 'Salary: 6856.00 $',
	dateVac: '12.11.2018',
	},
];

function SimpleCard(props) {
	const { classes } = props;

	return (
		<Fragment>
			<Divider/>
			<Typography variant="h4" align="center" style={{height: '71px', paddingTop: '16px'}}>
				Our vacancies
			</Typography>
			<Divider/>
			{listOfVacancies.map(lov => (
				<Card className={classes.card} key={lov.idms}>
					<CardContent>
						<Typography  variant="h5" component="h2">
							{lov.rank}
						</Typography>
						<Typography component="p">
							{lov.VSLtype}
							<br/>
							{lov.dwt}
							<br/>
							{lov.vac}
							<br/>
							{lov.ownr}
							<br/>
							{lov.loa}
						</Typography>
						<Typography className={classes.pos} color="textSecondary">
							{lov.wage}
							<br/>
							{lov.dateVac}
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