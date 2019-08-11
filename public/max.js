var list;
class Note extends React.Component {
	render() {
		return(
			<div className="div-note">
				{this.props.children}
			</div>
		);
	}
}
class InputDiv extends React.Component {
	send(){
		list.setState({
			mang : list.state.mang.concat(this.refs.txt.value),
		});
		ReactDOM.unmountComponentAtNode(document.getElementById('div-add'))
	}
	constructor(props) {
		super(props);
		this.send = this.send.bind(this);
	}
	render() {
		return (
			<div>
				<input type='text' ref='txt' placeholder=' Enter Your Note !'/> 
				<button onClick={this.send}>Sent</button>
			</div>
			);
	}
}

class List extends React.Component {
	constructor (props) {
		super(props);
		list = this;
		this.state = {
			mang: [],
		}

	}
	render() {
		return (
		 <div className='div-list'>
		 	<div id='div-add'></div>
		 	<button onClick={addDiv}>Add</button>
		 	{
		 		this.state.mang.map(function(note, index){
		 		return <Note key={index}> {note} </Note>
		 		})
		 	}
		 </div>
		);
	}
	componentDidMount(){
		var that = this;
		$.post('/getNotes', function(data){
			that.setState({mang: data});
		});
	}
}

function addDiv() {
	ReactDOM.render(<InputDiv />, document.getElementById('div-add'));
};

ReactDOM.render(
	<div>
		<List/>
	</div>
	, document.getElementById('root')
);