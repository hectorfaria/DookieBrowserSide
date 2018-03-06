module.exports = (survey) => {
	return `
		<html>
			<body>
				<div style="text-align: center;">
					<img className="logohomemain img-fluid" src="https://i.imgur.com/zkQOonQ.png" alt="404 not found"></img>
					<h1>Sudookie Movie Night</h1>
					<h3>We would like to know more!</h3>
					<p>Please Answer the following Questions</p>
					<p>${survey.body}</p>
					<div>
						<a href="http://localhost:3000/api/surveys/thankyou">Yes</a>
					</div>
					<div>
						<a href="http://dookie.no">No</b>
					</div>
				</div>
			</body>
		</html>
	`;
};
