import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.deleteProduct = this.deleteProduct.bind(this)
    }

    deleteProduct(id){
        axios.delete(`/api/product/${id}`)
        .then(() => {
            this.props.getInventory()
        })
    }

    render() {
        let myProducts = this.props.inventory.map((val, i) => {
            return (
                <div>
                    <Product
                        key={i}
                        image={val.image_url}
                        product={val.product_name}
                        price={val.price} 
                        deleteProduct={this.deleteProduct}
                        id={val.id}/>
                </div>
            )
        })
        return (
            <div>
                {myProducts}
            </div>
        )
    }
}

export default Dashboard