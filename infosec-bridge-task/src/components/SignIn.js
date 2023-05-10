import React from 'react';
import Headingprops from './Texts/Headingprops';
import Textprops from './Texts/Textprops';
import Inputprops from './Inputs/Inputprops';
import Buttonprops from './Buttons/Buttonprops';
const SignIn = () => {
  const gotohome=()=>{
    window.location.href="/Homepage";
  }
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
        <div onClick={gotohome}>
          <Buttonprops type="button" className='btn-login btn-common btn-h-w' name='Login' />
        </div>
      </div>
    </div>
  )
}

export default SignIn