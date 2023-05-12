import React from 'react';
import Buttonprops from './Buttons/Buttonprops';
import Headingprops from './Texts/Headingprops';
import Textprops from './Texts/Textprops';
import { Link } from 'react-router-dom';
const LandingPage = () => {

   return (
      <div className='side-m'>
         <div className='land-col-1'></div>
         <div className='land-col-2 '>
            <div>
               <div>
                  <Headingprops className='page-h-1 m-0' heading='Welcome to PopX' />
                  <Textprops className='page-h-2 m-4' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,' />
               </div>
               <div>
                  <div ><Link to='/SignUp'><Buttonprops type="button" className='btn-1 btn-common btn-h-w' name='Create Account' /></Link></div>
                  <div ><Link to='/SignIn'><Buttonprops type="button" className='btn-2 btn-common btn-h-w' name='Already Registered?Login' /></Link></div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default LandingPage