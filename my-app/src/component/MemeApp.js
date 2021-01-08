import React from "react";

class MemeApp extends React.Component{
	constructor(){
		super()
		this.state={
			topText:"",
			lowerText:"",
			randomImg:"http://i.imgflip.com/1bij.jpg",
			allMemeImgs:[]

		}
		this.handleChange= this.handleChange.bind(this);
		this.handleSubmit= this.handleSubmit.bind(this);
	}		

	componentDidMount(){
		fetch("https://api.imgflip.com/get_memes")
		.then(response=> response.json())
		.then(response=>{
			const{memes}=response.data
			this.setState({allMemeImgs:memes})
		})
	}
	handleChange(event){
		const{name,value}=event.target
		this.setState({[name]:value})
	}

	handleSubmit(event){
		event.preventDefault()
		const randnum = Math.floor(Math.random() * this.state.allMemeImgs.length)
		const randMemeImg= this.state.allMemeImgs[randnum].url
		this.setState({randomImg:randMemeImg})
	}

		render(){
			return(
				<div>
						<form className="meme-form" onSubmit={this.handleSubmit} >
							<input
							 		type="text"
							 		name="topText"
							 	    value={this.state.toptext}
							  		Placeholder="Top text"
							  		onChange={this.handleChange}
							  />
							<input
							 		type="text"
							 		name="lowerText"
							  		value={this.state.lowertext}
							  		Placeholder="Lower Text"
							  		onChange={this.handleChange}

							  />

							  <button> Generate</button>	
						</form>

						<div className="meme">
						<img src={this.state.randomImg} 
						alt=""
						/>
						<h2 className="top">{this.state.topText}</h2>
						<h2 className="bottom">{this.state.lowerText}</h2>
						</div>
				</div>
				)
		}
	}



export default MemeApp;