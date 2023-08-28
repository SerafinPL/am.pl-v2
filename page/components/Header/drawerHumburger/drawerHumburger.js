
import React from 'react';

import classes from './drawerHumburger.module.scss';

const drawerHumb = (props) => (
		<div onClick={props.clicked} className={classes.drawerHumb}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);

export default drawerHumb;