import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/auth';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';

export const AppRouter = () => {

    const dispatch = useDispatch();
    
    const [ cheking, setcheking ] = useState(true);

    const [ isLoggenIn, setisLoggenIn ] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setisLoggenIn(true);
            } else {
                setisLoggenIn(false);
            }
            setcheking(false);
        });
    }, [ dispatch, setisLoggenIn, setcheking ])

    if (cheking) {
        return (
            <h1>Loading</h1>
        )
    }


    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoutes
                        path="/auth"
                        component={AuthRouter}
                        isLoggenIn={isLoggenIn}
                    />

                    <PrivateRoutes
                        exact
                        path="/"
                        component={JournalScreen}
                        isLoggenIn={isLoggenIn}
                    />

                    <Redirect to="/auth/login"/>

                </Switch>
            </div>
        </Router>
    );
}
