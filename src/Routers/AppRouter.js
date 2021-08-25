import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const [cheking, setcheking] = useState(true);

    const [isLoggenIn, setisLoggenIn] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setisLoggenIn(true);
            }else{
                setisLoggenIn(false);
            }
            setcheking(false);
        });
    }, [dispatch])

    if (cheking) {
        return (
            <h1>Loading</h1>
        )
    }


    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRouter} />
                    <Route exact path="/" component={JournalScreen} />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    );
}
