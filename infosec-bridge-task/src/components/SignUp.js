import React from 'react'
import Inputprops from './Inputs/Inputprops';
import Headingprops from './Texts/Headingprops';
import Buttonprops from './Buttons/Buttonprops';
import { Link } from 'react-router-dom';
const SignUp = () => {

  return (
    <div className='side-m'>
      <div className='land-col-3'>
        <div className='m-1'></div>
        <Headingprops className='page-h-1 m-0 ' heading='Create your PopX account' />
        <div className='input-p m-2 m-4'>
          <Inputprops classNamelabel='input-lbl-1' className='input-1 btn-h-w' label='Full Name' star='*' placeholder='Enter Full Name' value='  Marry Doe' />
        </div>
        <div className='input-p m-4'>
          <Inputprops classNamelabel='input-lbl-1' className='input-1 btn-h-w' label='Phone number' star='*' placeholder='Enter Phone number' value='  Marry Doe' />
        </div>
        <div className='input-p m-4'>
          <Inputprops classNamelabel='input-lbl-1' className='input-1 btn-h-w' label='Email Address' star='*' placeholder='Enter email address' value='  Marry Doe' />
        </div>
        <div className='input-p m-4'>
          <Inputprops classNamelabel='input-lbl-1' className='input-1 btn-h-w' label='Password' star='*' placeholder='Enter Password' value='  Marry Doe' />
        </div>
        <div className='input-p m-4'>
          <Inputprops classNamelabel='input-lbl-1' className='input-1 btn-h-w' label='Company name' star='*' placeholder='Enter Company name' value='  Marry Doe' />
        </div>
        <div >
          <p className=' input-2-clr'>Are you an Agency?<span className='star-imp'>*</span></p>
          <div className='r-wrap'>
            <input className='radio-input' type='radio' id="yes" name="Agency" value="yes" />
            <label className='radio-lbl' for="yes">Yes</label>
            <input className='radio-input' type='radio' id="no" name="Agency" value="no" />
            <label className='radio-lbl' for="no">No</label>
          </div>
        </div>
      </div>
      <div className='land-col-4' >
        <Link to='/Homepage'>
          <Buttonprops type="button" className='btn-1 btn-common btn-h-w' name='Create Account' />
        </Link>
      </div>
    </div>
  )
}

export default SignUp