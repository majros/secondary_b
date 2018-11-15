import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


export default function Application () {
	return (
		<Fragment>
			<Typography style={{ padding: 8 * 2 }}>
				Dear seaman, please, download one from enclosed applications:
			</Typography>
			<Typography style={{ padding: 8 * 2 }}>
				At the beginning of 2007, the company made its first move into the chemicals and product tanker market.
				A new company Claus-Peter Offen Tankschiffreederei (Offen Tankers) was formed; eight special-purpose
				tankers with 36,000 dwt and eight with 52,000 dwt were delivered from the Hyundai Mipo yard in South
				Korea.  Nowdays Offen Tankers is a dynamic growing, first class ship manager of 16 own and 10 3rd party
				tankers.
			</Typography>
			<Button target='_blank'
			        variant="contained"
			        color="secondary"
			        style={{margin: '12px'}}
			        href={"https://drive.google.com/open?id=1B9dP9AB9shIQB01HqH7K8Ttu4ZtYN15m"}>
				SEAMAN's APPLICATION FORM
			</Button>
			<Typography style={{ padding: 8 * 2 }}>
				fill it and send  to:
				<br/>
				<b>info@bark.com.ua</b>
			</Typography>
		</Fragment>
	);
};