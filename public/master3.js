class Album extends React.Component {
	next(){
		this.setState({hinh: this.state.hinh ==5?5:this.state.hinh + 1});
	}
	prev(){
		this.setState({hinh: this.state.hinh ==1?1:this.state.hinh - 1});
	}
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
		this.state = {
			hinh: 1,
		};
	}

	render() {
		return(
			<div className="div-album">
			<img src={"img/" + this.state.hinh + ".jpg"}/>
			<hr/>
			<button onClick={this.next}>Tiep theo</button>
			<button onClick={this.prev}>Quay lai</button>
			</div>
	);
	}

}

ReactDOM.render(
	<Album />
	,document.getElementById('root')
);