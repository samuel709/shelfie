import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {

    constructor(props){
        super(props);
    }

    render(){
        let myProducts = this.props.inventory.map((val, i) => {
            return(
                <Product 
                key={i}
                image={val.image_url}
                product={val.product_name}
                price={val.price}/>
            )   
        })
        return(
            <div>
                {myProducts}
            </div>
        )
    }
}

export default Dashboard