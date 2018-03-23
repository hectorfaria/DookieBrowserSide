import React from 'react';

export default ({ input, label, meta }) => {
	return (
		<div className="container-fluid">
			<input {...input} placeholder={label} />
			<div className="text-error">{meta.touched ? meta.error : ''}</div>
		</div>
	);
};
