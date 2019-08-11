var list;
class Note extends React.Component {
	constructor(props){
		super(props);
		this.delete = this.delete.bind(this);
		this.edit = this.edit.bind(this);
		this.cancel = this.cancel.bind(this);
		this.save = this.save.bind(this);
		this.state = {
			onEdit: false,
		};
	}
	delete(){
		$.post('/delete', {idXoa: this.props.id}, function(data){
			list.setState({mang: data});
		});
	}
	edit(){
		this.setState({onEdit: true});
	}
	save(){
		var note = this;
		$.post('/update', {idSua: this.props.id, noiDung: this.refs.txt.value}, function(data){
			list.setState({mang: data});
			note.setState({onEdit: false});
		});
	}
	cancel(){
		this.setState({onEdit: false});
	}
	render() {
		if (this.state.onEdit){
			return(
			<div className="div-note">
				<input defaultValue={this.props.children} ref='txt'/>
				<button onClick={this.save}>Save</button>
				<button onClick={this.cancel}>Cancel</button>
			</div>
			);
		}
		else {
		return(
			<div className="div-note">
				<p> {this.props.children} </p>
				<button onClick={this.delete}>Xoa</button>
				<button onClick={this.edit}>Sua</button>
			</div>
		);
		}
	}
}
class InputDiv extends React.Component {
	send(){
		$.post('/add', {note: this.refs.txt.value}, function(data){
			list.setState({mang: data});
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
		 		return <Note key={index} id={index}>{note}</Note>
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