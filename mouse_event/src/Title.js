import React from 'react';
import PropTypes from 'prop-type';


class Title extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		const {text} = this.props;
		return (
			<div className="titleContainer">
				<div className="titleWrapper">
					<h1>{text}</h1>
				</div>
				<div className="titleWrapper cloneWrapper">
					<h1>{text}</h1>
				</div>
			</div>
		);
	}
}

export default Title;