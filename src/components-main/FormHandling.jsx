import React, {useState} from 'react';

const FormHandling = function(){
    const [formData, setFormData] = useState({
        username: ''
    });

    const updateUsername = (e) => {
        setFormData({
            username: e.target.value,
        })

        console.log(e)
    }

    return(
        <>
            <h1>Form handling</h1>
            <form>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input type='text' value={formData.username} placeholder='username' onChange={updateUsername} />
                </div>
            </form>
            <p>{formData.username} : {(formData.username).length}</p>
        </>
    )
};

export default FormHandling;