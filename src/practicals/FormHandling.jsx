import React, {useState} from 'react';

function FormHandling(){
    const [user, setUser] = useState({
        userLogin: {
            username: '',
            password: '',
            bio: '',
            designation: '',
            agree: false
        }
    })

    const handleInput = (e) => {
        setUser(() => ({
            userLogin: {
                ...user.userLogin,
                [e.target.name]:e.target.value,
                agree: !user.userLogin.agree
            }
        }))
    }

    const { userLogin} = user;

    return(
        <>
            <form>
                <div>
                    <input type='text' name='username' value={user.userLogin.username} onChange={handleInput} />
                </div>
                <div>
                    <input type='password' name='password' value={userLogin.password} onChange={handleInput}/>
                </div>
                <div>
                    <textarea value={userLogin.bio} name='bio' rows='5' onChange={handleInput}></textarea>
                </div>
                <div>
                    <select value={userLogin.designation} name='designation' onChange={handleInput}>
                        <option>select designation</option>
                        <option value='sr. dev'>Sr. Dev</option>
                        <option value='tech Pro'>Tech Lead</option>
                    </select>
                </div>
                <div>
                    <span>Agree?</span>
                    <input type='checkbox' name='agree' value={userLogin.agree} onChange={handleInput}/>
                </div>
            </form>
        </>
    )
};

export default FormHandling;