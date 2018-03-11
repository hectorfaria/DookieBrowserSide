import React from 'react';

export default ({ input, label, meta }) => {
	return (
		<div>
			<input {...input} placeholder={label} />
			<div className="text-help">{meta.touched ? meta.error : ''}</div>
		</div>
	);
};
