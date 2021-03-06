import React, {Component} from 'react'
import {Button, Collapse} from 'react-bootstrap'
class Product extends Component{
    constructor(props){
        super(props);
        this.state={
            open:false
        }
    }


     render(){ return(
        <div className="Product">
            <Button className="btn" onClick={!this.state.open}>
                Collapse Div
            </Button>

            <Collapse in={this.state.open}>
                <div>
                <h3>{this.props.name}</h3>
                <h3>{this.props.price} $</h3>
                <p>{this.props.description}</p>
                </div>
            </Collapse>

        </div>
    );
     }
}
export default Product;