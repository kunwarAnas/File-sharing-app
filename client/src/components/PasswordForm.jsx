import React from 'react'

const PasswordForm = () => {
    return (
            <div className="share-cont">
            {/* <p>Send Via Email</p> */}
            <div className="email-container">
                <form>
                    <div className="field">
                        <label htmlFor="password">password</label>
                        <input type="password" required={true} name='password' id='sender' />
                    </div>

                    <div className="field">
                        <label htmlFor="Confirm password">Confirm password</label>
                        <input type="password" required={true} name='Confirm password' id='reciever' />
                    </div>
                    <button type='submit'>Secure</button>
                </form>
            </div>
        </div>
    )
}

export default PasswordForm