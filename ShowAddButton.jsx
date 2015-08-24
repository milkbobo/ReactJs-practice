var React = require('/fishstrap/react/react-debug.js');

module.exports = React.createClass({
	render:function(){
		return (
               <button id="add-question-btn" onClick={this.props.onToggleForm} className="btn btn-success">添加问题</button>
			)	
	}
});
