import React from 'react';
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/icecream/iceCreamAction'


function IceCreamContainer ( props ) {
    return (
        <div>
            <h5>Number of IceCream - { props.numOfIceCreams } </h5>
            <button onClick={ props.buyIceCream }>
                Buy IceCream
            </button>
        </div>
    )

}

const mapStateToProps = state => {
    console.debug("ice",state)
    return {
        numOfIceCreams:state.iceCream.numOfIceCreams
    }
}

const mapDispatchToPorps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}


export default connect( mapStateToProps, mapDispatchToPorps)(IceCreamContainer)