class Note extends React.Component {
	render() {
		return (
			<div>{this.props.children}</div>
		)
	};
}

class List extends React.Component {
	add () {
		this.state.mang.push("Note JS", "React JS");
		this.setState(this.state);
	}
	constructor (props) {
		super(props);
		this.add = this.add.bind(this);
		this.state = {
			mang : ["Hello", "One", "Two"],
		};
	}
	render () {
		return (
		<div>
		<button onClick={this.add}>Thêm</button>
		{
			this.state.mang.map(function(note, index){
			 return <Note key={index}>{note}</Note>
			})
		}</div>
		)
	};
}

ReactDOM.render(
	<List/>
	,document.getElementById('root')
);