import React from 'react'
import { connect } from 'react-redux'
import { userLogin, userLogout } from '../redux/user/userAction'

function UserContainer (props) {
    return (
        <div>
            <div> User Container - { props.loggedIn  ? 'LoggedIn': 'LoggedOut'} </div>
            { conditionalTemp(props) }
        </div>
    )
}

function conditionalTemp(props){
    if(props.userLogin){
        return <button onClick={props.userLogin }>Login</button>
    }else{
        return <button onClick={props.userLogout }>Logout</button>
    }
}

const mapStateToPorps = state => {
    return{
        loggedIn:state.user.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogin:() => dispatch(userLogin()),
        userLogout:() => dispatch(userLogout())
    }
}

export default connect(mapStateToPorps,mapDispatchToProps)(UserContainer)