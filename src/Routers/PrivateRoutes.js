import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

export const PrivateRoutes = ({ isLoggenIn, component: Component, ...rest }) => {



    return (
        <Route {...rest}
            component={props => 
                (isLoggenIn) ?
                    (<Component {...props} />)
                    :
                    (<Redirect to="/auth/login" />)
            }
        />

    )
}


PrivateRoutes.propTypes = { 
    isLoggenIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}