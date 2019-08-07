class Buttonx extends React.Component {
	add() {
		this.setState({num: this.state.num + 1});
	}
	constructor (props) {
		super(props);
		this.add = this.add.bind(this);
		this.state = {
			num : 0,
		};
	}
	render (){
		return (
			<button onClick={this.add}>Hello {this.state.num}</button>
		);
	}
}

ReactDOM.render(
	<Buttonx />,
	document.getElementById("root")
	);