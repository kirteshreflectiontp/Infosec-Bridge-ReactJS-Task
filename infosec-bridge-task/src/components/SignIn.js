import React from 'react';
import Headingprops from './Texts/Headingprops';
import Textprops from './Texts/Textprops';
import Inputprops from './Inputs/Inputprops';
import Buttonprops from './Buttons/Buttonprops';
import { Link } from 'react-router-dom';
const SignIn = () => {

  return (
    <div className='side-m'>
      <div className='m-1'></div>
      <div>
        <Headingprops className='page-h-1 m-5' heading='Signin to your PopX account' />
        <Textprops className='page-h-2 m-6' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,' />
      </div>
      <div>
        <div className='input-p m-3'>
          <Inputprops classNamelabel='input-lbl-1' className='input-1 btn-h-w' label='Email Address' placeholder='   Enter email address' />
        </div>
        <div className='input-p m-3'>
          <Inputprops classNamelabel='input-lbl-1' className='input-1 btn-h-w' label='Password' placeholder='   Enter password' />
        </div>
        <div>
          <Link to='/Homepage'>
            <Buttonprops type="button" className='btn-login btn-common btn-h-w' name='Login' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn