var React = require('/fishstrap/react/react-debug.js');
var QuestionItem = require('./QuestionItem.jsx'); 

module.exports = React.createClass({

	render:function(){
		var questions = this.props.questions;
		if( !Array.isArray(questions) ) throw new Error('this.props.questions问题必须是数组');

		var questionComs = questions.map(function(qst){
			    console.log(this);
			return <QuestionItem 
			key={qst.key} 
			questionKey={qst.key}
			title={qst.title} 
			description={qst.description} 
			voteCount={qst.voteCount}
			onVote={this.props.onVote} />
			
		}.bind(this));

		return (

          <div id="questions" className="">
          {questionComs}

			</div>
		)	
	}
});