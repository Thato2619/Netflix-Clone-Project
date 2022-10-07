import React from 'react'

function SignIn()  {
  return (
    <div className='signIn_screen_background'>
        <img className='screen_background' src="" alt="" />
        <div className="signIn_screen_gradient"></div>
        <div className="signIn_screen_form">
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type="email"/>
                <input placeholder="Password" type="password"/>

            </form>
        </div>
    </div>
  )
}

export default SignIn