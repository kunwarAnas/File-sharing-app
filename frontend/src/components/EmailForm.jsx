import React from 'react'
import Layout from './Layout'

const EmailForm = () => {
    return (
            <div className="share-cont">
            {/* <p>Send Via Email</p> */}
            <div className="email-container">
                <form>
                    <div className="field">
                        <label htmlFor="reciever">Your Email</label>
                        <input type="email" required={true} name='from-email' id='sender' />
                    </div>

                    <div className="field">
                        <label htmlFor="reciever">Reciever Email</label>
                        <input type="email" required={true} name='to-email' id='reciever' />
                    </div>
                    <button type='submit'>send</button>
                </form>
            </div>
        </div>
    )
}

export default EmailForm