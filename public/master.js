function getName() {
	console.log('Done')
}
function getName2(name) {
	console.log(name)
}

class Helloworld extends React.Component {
	button(){
	    getName2(this.props.name)
	}
	addvalue(){
    this.setState({sumState: this.state.sumState + 1});
  	}
  	addvalue2(){
  	this.state.year = parseInt(this.state.year) + 1;
  	this.setState(this.state);
  	}

	layThongTin(){
		console.log(this.props.children);
	}
	
	constructor(props){
		super(props);
		this.layThongTin = this.layThongTin.bind(this);
		this.button = this.button.bind(this);
		this.addvalue = this.addvalue.bind(this);
		this.addvalue2 = this.addvalue2.bind(this);
		this.state = {
			sumState: 10,
			year: this.props.year,
		}
	} 

	render() {
		return (
			<div>
			<h1>Begin Website {this.props.name} </h1>
			<p>{this.props.children}</p>
			<p> Tổng số: {this.state.sumState} </p>
			
			{/* state -> props */}
			<p> Tổng số 2: {this.state.year} </p>

			{/*Gọi function trong class*/}
			<button onClick={this.layThongTin}>Thong Tin 1</button>

			{/*Gọi function ngoài Class*/}
			<button onClick={getName}>Thong Tin 2</button>

			{/*Truyền tham số*/}
			<button onClick={this.button}>Thong Tin 3</button>
			<button onClick={()=>{getName2(this.props.name)}}>Thong Tin 4</button>
			<button onClick={()=>{var str = this.props.name + ' '+ 'Pro'; getName2(str)}}>Thong Tin 5</button>

			{/*Tăng giá trị*/}
			<button onClick={this.addvalue}>Tăng Giá trị</button>
			<button onClick={this.addvalue2}>Tăng Giá trị 2</button>

			</div>
		);
	}
}

class InputTag extends React.Component {
	show() {
		var text = this.refs.txt.value;
		var text2 = this.refs.option.value;
		console.log(text, text2);
	}
	constructor(props) {
		super(props);
		this.show = this.show.bind(this);
	}
	render () {
		return (
			<div>
			<select ref="option">
				<option value="a">A</option>
				<option value="b">B</option>
				<option value="c">C</option>
			</select>
			<input type="text" ref="txt"></input>
			<button onClick={this.show} >Hien Thi</button>
			</div>
		);
	}
}

ReactDOM.render( 
	<div>
		<InputTag />
		<Helloworld name="ReactJS" year="2019">Copyright by Vip.phamquangthinh</Helloworld>
	</div>
	,document.getElementById('root')
);