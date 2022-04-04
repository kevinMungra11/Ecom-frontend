import React, { useState } from 'react'
import Base from '../core/Base'
import { Link,Redirect } from 'react-router-dom'
import { signin,authenticate,isAuthenticated } from '../auth/helper'

const Signin = () => {

    const [values, setValues] = useState({
        email: "kevin@gmail.com",
        password: "111111111",
        error: "",
        loading: false,
        didRedirect: false
    })

    const { email,password,error,loading,didRedirect } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault();
        setValues({...values, error: false, loading: true});
        signin({email,password})
        .then((data) => {
            if(data.error){
                setValues({...values, error: data.error, loading: false});
            }else{
                authenticate(data, () => {
                    setValues({...values,
                        didRedirect:true
                    });
                })
            }
        })
        .catch((err) => console.log('Signed in request failed'));
    }

    const performRedirect = () => {
        if(didRedirect){
            if(user && user.role === 1){
                return <Redirect to='/admin/dashboard' />;
            }else{
                return <Redirect to='/user/dashboard' />;
            }
        }
        if(isAuthenticated()){
            return <Redirect to='/'/>;
        }
    }

    const loadingMessage = () => {
        return (
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        )
    }

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-danger" style={{display: error?"":"none"}}>
                    {error}
                    </div>
                </div>
            </div>
        )
    }

    const signInForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form action="">
                        <div className="form-group">
                            <p className="text-light">Email</p>
                            <input onChange={handleChange("email")} className='form-control' value={email} type="email"/>
                        </div>
                        <div className="form-group">
                            <p className="text-light">Password</p>
                            <input onChange={handleChange("password")} className='form-control' value={password} type="password"/>
                        </div>
                        <button onClick={onSubmit} className='btn btn-success block'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }

  return (
    <Base titel='Sign IN page' description='A page for user to sign IN!'>
        {loadingMessage()}
        {errorMessage()}
        {signInForm()}
        {performRedirect()}
        <p className="text-white text-center">{JSON.stringify(values)}</p>
    </Base>
  )
}

export default Signin;