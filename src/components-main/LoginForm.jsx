import React, { useState } from 'react';

const LoginForm = function(){
    const [loginData, setLoginData] = useState({
        userData: {
            username: '',
            email: '',
            password: '',
            designation: '',
            biography: '',
            terms: false
        }
    })

    //destructure data
    const {userData} = loginData;

    const updateInput = (e) => {
        setLoginData(() => ({
            userData: {
               ...loginData.userData,
               [e.target.name]: e.target.value,
               //the code below also toggled checkbox to true or false
               terms: !userData.terms
            }
        }))
    }

    //update check button
    const updateCheck = (e) => {
        setLoginData(() => ({
           userData: {
                ...loginData.userData,
                [e.target.name]: e.target.checked
           }
        }))
    }

    const submitData = (e) => {
        e.preventDefault();
        console.log(userData)
        setLoginData(() => ({
            userData: {
                ...loginData.userData,
            }
        }))
    }

    return(
        <>
            <h1 style={{fontSize: '1.6rem', fontFamily: 'roboto', color: 'rgb(1, 1, 22)'}}>Login Form</h1>
            <form onSubmit={submitData}>
            <p className='pre'>
                {/* {JSON.stringify(userData)} */}
            </p>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input type='text' placeholder='username' value={userData.username} name='username' onChange={updateInput} />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='email' value={userData.email} name='email' onChange={updateInput} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='password' value={userData.password} onChange={updateInput} name='password' />
                </div>
                <div>
                    <label htmlFor='desgination'>Designation</label>
                    <select name='designation' onChange={updateInput} value={userData.designation}>
                        <option value=''>Select Designation</option>
                        <option value='software developer'>Software Developer</option>
                        <option value='sr.software developer'>Sr.Software Developer</option>
                        <option value='tech lead'>Tech Lead</option>
                        <option value='ui/ux designer'>UI/UX Designer</option>
                        <option value='product manager'>Product Manager</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='biography'>Biography</label>
                    <textarea rows='6' placeholder='bio' onChange={updateInput} name='biography' value={userData.biography}></textarea>
                </div>
                <div>
                    <label htmlFor='terms'>Terms & Condition</label><br />
                    <input type='checkbox' className='checkbox' onChange={updateCheck} name='terms' /><span style={{fontSize: '.8rem'}}>I agree to terms & conditions</span>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </>
    )
};

export default LoginForm;