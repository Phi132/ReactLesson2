import React, {Component} from 'react';

class Product extends Component {

	constructor(props){
		super(props);
		this.clickbtn = this.clickbtn.bind(this);
	}
	clickbtn() {
		alert("da them vao gio hang");
	}

	clickbuy = () => {
		alert ("Da mua " + this.props.name);
	}
	render() {
		return (
			
				<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
					<div className="thumbnail">
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWff-aW3uxJsq5L2gsjn-Uz_0tlbFD0jqLWFPJcn_GfyoxFptPFpVFwAJGYNWUrJncs-w&usqp=CAU" alt="" />
						<div className="caption">
							<p>mã số: {this.props.key}</p>
							<h3>{this.props.name}</h3>
							<p>
								Giá: {this.props.price} VND 
								
							</p>
							<p>Mo ta : {this.props.children}</p>
							<p>
								<a href="#" className="btn btn-success" onClick = {this.clickbtn} >them vao gio</a>
								<a href="#" className="btn btn-primary" onClick = {this.clickbuy} >mua ngay</a>
							</p>
						</div>
					</div>
				</div>
			
			
				
			
		);
	}
}

export default Product;