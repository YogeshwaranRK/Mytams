import React from 'react';

import axios from 'axios';
import Product from './Product';

export default class Items extends React.Component {

    state={
        products:[]
    };
    componentDidMount() {
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{console.log(res);
        this.setState({products: res.data});
        })
    }

    render() {
        return (
            <div className="grid grid-flow-row-dense md:grid-cols-3 lg:grid-cols-4 md:-mt-25 mx-auto">
                {this.state.products.slice(0,4).map(({id,title,price,description,category,image}) => 
                <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                
                />
                )}
                <img className="md:col-span-full" src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/app/AppyHours/Page/Revised/1500x300_PC_banner.jpg" alt=""></img>


                <div className="md:col-span-2">
                {this.state.products.slice(4,5).map(({id,title,price,description,category,image}) => 
                <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />)}
                
                </div>
                {this.state.products.slice(4,this.state.products.length).map(({id,title,price,description,category,image}) => 
                <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />)}
                </div>
        )
    }

}
