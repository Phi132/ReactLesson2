// <nav className="navbar navbar-expand-lg navbar-light bg-light">
			//   <a className="navbar-brand" href="#">Navbar</a>
			//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			//     <span className="navbar-toggler-icon"></span>
			//   </button>

			//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
			// 	    <ul className="navbar-nav mr-auto">
			// 		      <li className="nav-item active">
			// 		        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
			// 		      </li>
			// 		      <li className="nav-item">
			// 		        <a className="nav-link" href="#">Link</a>
			// 		      </li>
			// 		      <li className="nav-item dropdown">
			// 		        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			// 		          Dropdown
			// 		        </a>
			// 		        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
			// 		          <a className="dropdown-item" href="#">Action</a>
			// 		          <a className="dropdown-item" href="#">Another action</a>
			// 		          <div className="dropdown-divider"></div>
			// 		          <a className="dropdown-item" href="#">Something else here</a>
			// 		        </div>
			// 		      </li>
			// 		      <li className="nav-item">
			// 		        <a className="nav-link disabled" href="#">Disabled</a>
			// 		      </li>
			// 	    </ul>

			//   </div>
			// </nav>



// import React , {Component} from 'react';
// import Product from './Product';

// class Header extends Component {

// 	constructor(props){
// 		super(props);
// 		this.onAddName = this.onAddName.bind(this);
// 	}

// 	onAddName () {
// 		console.log(this.refs.name.value);
// 	}

// 	render() {
// 			var products = [
// 		{
// 			id : 1,
// 			name: "Iphone 10",
// 			price: 200000,
// 			status : true
// 		},

// 		{
// 			id : 2,
// 			name: "Iphone 11",
// 			price: 200000,
// 			status : true
// 		},

// 		{
// 			id : 3,
// 			name: "Iphone 12",
// 			price: 200000,
// 			status : true
// 		},

// 		{
// 			id : 4,
// 			name: "Iphone 13",
// 			price: 200000,
// 			status : false
// 		},

// 		{
// 			id : 5,
// 			name: "Iphone 14",
// 			price: 200000,
// 			status : true
// 		},
// 	];
// 	let loopProducts = products.map( (value, index)  => {
// 		if(value.status) {
// 			return (
// 				<div>
					
// 					<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
// 						<Product
// 							key = {value.id}
// 							name = {value.name}
// 							price = {value.price}
// 						>
// 							Mua ngay de duoc huong uu dai nao
// 						</Product>

// 					</div>
// 				</div>
				
				
// 			);
// 		}
// 	}, [] );

// 		return (
// 			<div>
				

// 			  	<div className = "container">
				
// 				  	<form action method="POST" role="form">
// 				        <div className="form-group">
// 			        		<label htmlFor>label</label>
// 			        		<input type="text" className="form-control" id="input-form" placeholder="Input field" ref="name" />
// 				        </div>
// 				        <button type="button" className="btn btn-primary" onClick={this.onAddName}>Submit</button>
// 				    </form>

// 					<div className="row">
// 						{loopProducts}
// 					</div>
// 				</div>
// 			</div>
			
// 		);
// 	}
// }

// export default Header;

import React , {Component} from 'react';
import Product from './Product';

class Header extends Component {

	constructor(props){
		super(props);
		this.state = {
			products : [
				{
					id : 1,
					name: "Iphone 10",
					price: 200000,
					status : true
				},

				{
					id : 2,
					name: "Iphone 11",
					price: 200000,
					status : true
				},

				{
					id : 3,
					name: "Iphone 12",
					price: 200000,
					status : true
				},

				{
					id : 4,
					name: "Iphone 13",
					price: 200000,
					status : false
				},

				{
					id : 5,
					name: "Iphone 14",
					price: 200000,
					status : true
				}
			],
			isRight : true
			
		};
	}
	onSetState = () => {
		this.setState({isRight : !this.state.isRight})
	};

	render() {
			
	let loopProducts = this.state.products.map( (value, index)  => {
		if(value.status) {
			return (

				<Product
					key = {value.id}
					name = {value.name}
					price = {value.price}
				>
					Mua ngay de duoc huong uu dai nao
				</Product>

			);
		}
	}, [] );

		return (
			<div>
				

			  	<div className = "container">
				
				  	<form action method="POST" role="form">
				        <div className="form-group">
			        		<label htmlFor>label</label>
			        		<input type="text" className="form-control" id="input-form" placeholder="Input field" ref="name" />
				        </div>
				        <button type="button" className="btn btn-primary" onClick={this.onAddName}>Submit</button>
				        <button type="button" className="btn btn-success" onClick={this.onSetState}>Value: {this.state.isRight === true ? "true" : "false"}</button>
				    </form>

					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 d-flex" >
							{loopProducts}
						</div>
					</div>
				</div>
			</div>
			
		);
	}
}

export default Header;