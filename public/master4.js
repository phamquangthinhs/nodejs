class Imgx extends React.Component {
	changImg() {
		this.setState ({hinh: (this.state.hinh % 5) + 1});
	}

	constructor (props) {
		super(props);
		this.changImg = this.changImg.bind(this);
		this.state = {
			hinh: 1,
		};
	}
	render() {
		return(
			<img src={"img/" + this.state.hinh + ".jpg"}/>
		);
	}
	componentDidMount() {
		setInterval(this.changImg, 1000);
	}

}

ReactDOM.render(
	<Imgx />
	,document.getElementById('root')
);