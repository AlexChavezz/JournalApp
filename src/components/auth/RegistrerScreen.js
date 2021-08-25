import React from 'react'
import validator from 'validator';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { registerWithEmailAndPassword } from '../../actions/auth';

export const RegistrerScreen = () => {

    const [values, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, email, password, password2 } = values;

    const dispatch = useDispatch();

    const { msgError } = useSelector(state => state.ui)

    const onSubmit = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(registerWithEmailAndPassword(email, password, name));
        }
    }
    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Please enter name'))
            return false
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Please enter email'))
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Please enter password success'))
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form
                onSubmit={onSubmit}
            >
                {
                    msgError &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />
                <input
                    type="submit"
                    value="Register"
                    className="btn btn-primary btn-block mb-5"
                />

                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already register
                </Link>
            </form>

        </>
    )
}
