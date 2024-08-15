
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import in15 from '../../img/in15.webp';

import in14 from '../../img/in14.webp';

import in16 from '../../img/in16.webp';

import in17 from '../../img/in17.webp';
const Updating3  = () => {

 




  return (

    <>

<section className='Benefits'>
  <div className="contanir">
    <div className="main-Benefits">
      <h2>Benefits</h2>
      <p>By inviting other users to collaborate on your QR generator account, you are not only sharing access to the platform, but you are opening the doors to more efficient and organized collaboration. Discover how this feature can benefit both companies and individual users working on collaborative projects. </p>
      <div className="Benefits-box">
      

          <p><span>Facilitates collaboration: </span> Inviting other users allows you to work as a team in the creation and management of QRs, which increases efficiency and productivity.</p>


          <p><span>Improve organization:</span> Assigning specific roles and permissions helps maintain precise control over who can access and modify each section, which contributes to better structuring of work.</p>


          <p><span>Increase flexibility:</span>Different user roles allow you to adapt access and permissions according to the needs of the team, making it easier to assign tasks and responsibilities.</p>

          <p><span>Facilitates resource management: </span>It is especially useful for companies that manage several projects or teams, as it allows effective distribution of available tasks and resources.</p>




      </div>
    </div>
  </div>
</section>



    <section className='Updating  part-2'>
    <div className="contanir">


        <div className="main-Dynamic">
         <h4>How to use</h4>

          <div className="Dynamic-imger">
          <img src={in14} alt="" />
          </div>
        
          <p>Access the “Users” section by clicking on the gear-shaped icon in the upper right.</p>

          <p>When you click on “add user” a modal will open where you must enter the email address of the user you want to collaborate on your account. <br />
          First of all, you must select between the three available roles: Admin, Contributor and Limited.</p>
   

          <ul>
            <li><span>1</span>The Admin user has full access, with the same permissions as the original account. That is, everything you can do from your personal account can also be done by the user who is in Admin, including the ability to make payments.</li>
            <li><span>2</span>The Contributor user has read, modify and create access to any of the selected sections within “Permissions” but cannot make payments.</li>
            <li><span>3</span>The Limited user only has reading access to any of the selected sections within “Permissions” and will not be able to create or modify QRs, nor can they make payments.</li>
          </ul>



        </div>
        </div>
    </section>



    <section className='Updating  '>
    <div className="contanir">
        <div className="main-Dynamic">
    

          <div className="Dynamic-imger">
          <img src={in15} alt="" />
          </div>
        
          <p>Access the “Users” section by clicking on the gear-shaped icon in the upper right.</p>


<p className='Statistics'>
  <span>Statistics</span>
  <span>My QRs</span>
  <span>Plans and payments</span>
  <span>Templates</span>
  <span>My domains</span>
</p>
  


<p>Remember that this step only applies to Contributor and Limited users, since the Admin user will have the same permissions as your account.</p>
<p>In the case in which you select the Contributor user option, you can also disable the Creation, Editing or Deleting actions. </p>


        </div>
        </div>
    </section>





    <section className='Updating  '>
    <div className="contanir">
        <div className="main-Dynamic">
    

          <div className="Dynamic-imger">
          <img src={in16} alt="" />
          </div>
        
          <p>Select the folders you want the guest user to have access to. Please note that if you do not select any folders, the guest user will only be able to access QRs that do not have folders assigned to them.</p>



  


<p>Finally, you can choose whether or not the guest user can delete their own account. By default, this option is activated.</p>



        </div>
        </div>
    </section>






    <section className='Updating  '>
    <div className="contanir">
        <div className="main-Dynamic">
    

          <div className="Dynamic-imger">
          <img src={in17} alt="" />
          </div>
        
          <p>Finish the process by clicking “Create”. Once this is done, an email will be sent to the user to activate their account. Until then, the guest user's status will remain “Pending”.</p>

<p>When the guest user has activated their account, after creating a password to register, the user's status will appear as “Active”.</p>
<p>Note that:
</p>

<p className='Statistics'>
  <span>
  You can resend the invitation if you need to</span>
  <span>You can edit the guest user's permissions whenever you want
  </span>

  <span>You can delete the guest user's account to remove access to your account </span>

</p>
  




        </div>
        </div>
    </section>



    </>
  )

}

export default Updating3