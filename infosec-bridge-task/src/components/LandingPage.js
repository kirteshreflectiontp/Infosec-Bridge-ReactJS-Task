import React from 'react';
import Buttonprops from './Buttons/Buttonprops';
import Headingprops from './Texts/Headingprops';
import Textprops from './Texts/Textprops';

const LandingPage = () => {
   const gotosignup=()=>{
      window.location.href = '/SignUp'
   }
   const gotosignin =()=>{
      window.location.href = '/SignIn'
   }
   
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
                  <div ><Buttonprops type="button" className='btn-1 btn-common btn-h-w' name='Create Account'onClick={gotosignup} /></div>
                  <div ><Buttonprops type="button" className='btn-2 btn-common btn-h-w' name='Already Registered?Login'onClick={gotosignin} /></div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default LandingPage