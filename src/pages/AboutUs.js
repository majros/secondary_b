import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';

import LineGridCertification from '../components/LineGridCertifiaction';


export default function AboutUs () {
	return (
		<Fragment>
			<Typography style={{ padding: 8 * 2 }}>
				WELCOME TO MARSTAFF MANNING AGENCY!
			</Typography>
			<Typography style={{ padding: 8 * 2 }}>
				Marstaff is an independent manning agency based in Odessa and fully certified in accordance with Ukrainian legislation.
				MLC 2006 and ISO 9001:2015 certificates holder.
			</Typography>
			<Typography style={{ padding: 8 * 2 }}>
				MARSTAFF PERFORMS FOLLOWING SERVICES:
			</Typography>
			<Typography style={{ padding: 8 * 2 }}>
				<li>Crew recruitment and procedures for joining ship and repatriating crew.</li>
				<li>Certification of crew.</li>
				<li>Medical examinations and fitness certificates.</li>
				<li>Implementation and follow-up of drug and alcohol policies.</li>
				<li>Arranging NIS, Cyprus, Panamanian, Liberian and other licences and seaman’s books.</li>
				<li>Foreign language test.</li>
				<li>Company policy and ISM code familiarisation & drilling.</li>
				<li>Issue tickets for on-signers and off-signers.</li>
			</Typography>
			<LineGridCertification/>
		</Fragment>
	);
};