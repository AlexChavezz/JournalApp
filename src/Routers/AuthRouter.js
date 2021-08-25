import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegistrerScreen } from '../components/auth/RegistrerScreen'

export const AuthRouter = () => {
    return (
        <>
            <div className="auth_main">
                <div className="auth_box-container">
                    <Switch>
                        <Route path="/auth/login" component={LoginScreen} />
                        <Route path="/auth/register" component={RegistrerScreen} />
                        <Redirect to="/auth/login" />
                    </Switch>
                </div>
            </div>
        </>
    )
}
