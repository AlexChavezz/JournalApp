import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { startLoading, FinishLoading } from "./ui";
import Swal from 'sweetalert2';

export const starLoginWithEmailAndPassword = (email, password) => {
    return dispatch => {
        dispatch( startLoading() );
        firebase.auth().signInWithEmailAndPassword( email, password )
        .then( ({ user }) => {
            dispatch( login(user.uid, user.displayName) );
            dispatch( FinishLoading() );
        })
        .catch(error => {
            dispatch( FinishLoading() );
            Swal.fire('Faile',error.message,'error')
        })
    }
}

export const startGoogleLogin = () => {
    return dispatch => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => dispatch(
                login(user.uid, user.displayName)
            )
            )
    };
}

export const registerWithEmailAndPassword = ( email, password, name ) => {
    return dispatch  => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
        .then( async ({ user }) => {
            await user.updateProfile( {displayName: name} )
            dispatch(login(user.ui,user.displayName));
        })
        .catch(error => {
            Swal.fire('Faile',error.message,'error')
        })
    }
}

export const startLogout = () => {
    return async ( dispatch ) => {
        await firebase.auth().signOut()
        dispatch(logout()) 
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
    }
});

export const logout = () => ({
    type: types.logout,
})