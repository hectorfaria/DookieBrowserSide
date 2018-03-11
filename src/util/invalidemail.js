// eslint-disable-next-line
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const invalidEmails = (emails) => {
	const InvalidateEmails = emails
		.split(',')
		.map((email) => email.trim())
		.filter((email) => regex.test(email) === false);

	if (InvalidateEmails.length) {
		return `These emails are invalid: ${InvalidateEmails}`;
	}
	return;
};

export default invalidEmails;
