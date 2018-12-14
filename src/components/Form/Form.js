import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component {

    constructor(props){
        super(props);

        this.state = {
            image: "",
            productName: "",
            price: 0
        }
    }

    handleChange(prop, value){
        this.setState({
            [prop] : value
        })
    }

    resetState(){
        this.setState({
            image: "",
            productName: "",
            price: 0
        })
    }

    addProduct(){
        const {image, productName, price} = this.state
        axios.post('/api/product', {image, productName, price})
        .then(response => {
            this.props.getInventory()
            this.resetState()
        })
    }

    render(){
        return(
            <div>
                <input type="text" onChange={(e) => {this.handleChange('image', e.target.value)}} value={this.state.image}/>
                <input type="text" onChange={(e) => {this.handleChange('productName', e.target.value)}} value={this.state.productName}/>
                <input type="text" onChange={(e) => {this.handleChange('price', e.target.value)}} value={this.state.price}/>
                <button onClick={() => {this.resetState()}}>Cancel</button>
                <button onClick={() => {this.addProduct()}}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form