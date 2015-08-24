var React = require('/fishstrap/react/react-debug.js');
var QuestionApp = require('./QuestionApp.jsx')

var mainCom = React.render(
	<QuestionApp />,
	document.getElementById('app')
	);