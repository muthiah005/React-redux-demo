
import React from 'react';
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions';

function CakeContainer(props) {

    return(
        <div>
            <h5>Number of Cakes - {props.numOfCakes} </h5>
            <button onClick={props.buyCake}>
                Buy Cake
            </button>
        </div>
    )
}

const mapStateToProps = state =>    {
    return{
        numOfCakes:state.cake.numOfCakes
    }
}

const mapDispatchToPorps = dispatch =>  {
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToPorps)(CakeContainer)