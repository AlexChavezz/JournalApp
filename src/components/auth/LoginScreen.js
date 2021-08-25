import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { starLoginWithEmailAndPassword, startGoogleLogin } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui);
    const [ state, handleInputChange ] = useForm({
        email:'',
        password:'',
    });

    const { email, password } = state;

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(starLoginWithEmailAndPassword(email, password));
    }
    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }
    console.log(state)
    return (
        <>
            <h3 className="auth__title">LoginScreen</h3>

            <form
            onSubmit={onSubmit}
            >
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={ email }
                    className="auth__input"
                    autoComplete="off"
                    onChange={ handleInputChange }
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    className="auth__input"
                    onChange={ handleInputChange }
                    disabled={ loading }
                />
                <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary btn-block"
                />

                <div className="auth__social-networks">
                    <p>Login whit social networks</p>

                    <div
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>

                </div>
                <Link 
                to="/auth/register"
                className="link"
                >
                    Create new account
                </Link>
            </form>

        </>
    )
}
