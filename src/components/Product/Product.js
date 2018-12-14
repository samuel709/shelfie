import React, {Component} from 'react'

class Product extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <img src={this.props.image} alt="image not found" width={50} height={50}/>
                {this.props.product}
                {this.props.price}
                <button onClick={() => {this.props.deleteProduct(this.props.id)}}>Delete</button>
            </div>
        )
    }
}

export default Product