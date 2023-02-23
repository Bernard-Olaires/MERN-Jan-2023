import React, {useState} from 'react';
import './logRegForm.css'
const Register = (props) => {

    const [userReg, setUserReg] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const onChangeHandler = (e) => {
        setUserReg({...userReg, [e.target.name]: e.target.value})
    }


    // ! Need onsubmithandler for register


    return (
        <div className='bg-img'>
            <h1 className='text-white'>Register!</h1>
            <form className='col-4 mx-auto user-form'>
                <label className='form-label'>First Name:</label>
                <input className='form-control' type="text" name='firstName' value={userReg.firstName} onChange={onChangeHandler}/>

                <label className='form-label'>Last Name:</label>
                <input className='form-control' type="text" name='lastName' value={userReg.lastName} onChange={onChangeHandler}/>

                <label className='form-label'>Email:</label>
                <input className='form-control' type="text" name='email' value={userReg.email} onChange={onChangeHandler}/>

                <label className='form-label'>Password:</label>
                <input className='form-control' type="password" name='password' value={userReg.password} onChange={onChangeHandler}/>

                <label className='form-label'>Confirm Password:</label>
                <input className='form-control' type="password" name='confirmPassword' value={userReg.confirmPassword} onChange={onChangeHandler}/>
                <button className='btn btn-dark mt-3'>Register</button>
            </form>
        </div>
)}

export default Register;