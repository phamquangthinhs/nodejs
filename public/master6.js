class Note extends React.Component {
	render() {
		return (
			<div>
				<img src={this.props.src}></img>
				<p> {this.props.children} </p>
			</div>
		)
	};
}

class List extends React.Component {
	add () {
		this.state.mang.unshift({src : "img/4.jpg", noiDung: "Pro"});
		this.setState(this.state);
	}
	constructor (props) {
		super(props);
		this.add = this.add.bind(this);
		this.state = {
			mang : [
			{src: "img/1.jpg", noiDung: "Hello"},
			{src: "img/2.jpg", noiDung: "Reacjs"},
			{src: "img/3.jpg", noiDung: "Lesson"},
			],
		};
	}
	render () {
		return (
		<div>
		<button onClick={this.add}>Thêm</button>
		{
			this.state.mang.map(function(note, index){
			 return <Note key={index} src={note.src}>{note.noiDung}</Note>
			})
		}</div>
		)
	};
}

ReactDOM.render(
	<div>
		<List />
	</div>
	,document.getElementById('root')
);