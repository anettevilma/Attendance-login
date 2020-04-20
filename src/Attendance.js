import React from 'react';
import './App.css';

function Attendance(props){

 return(
      <>
        <div className="header">
           <h1>Retail Attendance Portal</h1>
        </div>
        <div className="content">
              <h3> Welcome Username </h3>

              <div className="loginFrm">
                <div class="floatRight">
                 <a href="#" onClick={props.logout}>Logout</a>
              </div>
                <div className="frmInput">
                  <div className="frmType">
                    Date :
                  </div>
                   <div className="inputType">
                    <span>01/04/2019</span>
                  </div>
                </div> 
                <div className="frmInput">
                  <div className="frmType">
                    Time :
                  </div>
                   <div className="inputType">
                    <span>10:00am</span>
                  </div>
                </div> 
                <div className="frmInput">
                  <div className="frmType">
                    Email :
                  </div>
                   <div className="inputType">
                    <span>test@atos.net</span>
                  </div>
                </div> 
                <div className="frmInput">
                  <div className="frmType">
                    Emp ID :
                  </div>
                   <div className="inputType">
                    <span>A1231234</span>
                  </div>
                </div> 
                <div className="frmInput">
                  <div className="frmType">
                    Emp Designation :
                  </div>
                   <div className="inputType">
                    <span>Consultant</span>
                  </div>
                </div>
                <div className="frmInput">
                  <div className="frmType">
                    Reporting Manger:
                  </div>
                   <div className="inputType">
                    <span>Reporting Manger</span>
                  </div>
                </div>                
                <div className="frmInput">
                   <div className="frmType">
                     Working from home :
                   </div>
                   <div className="inputType">
                     <div className="output">
                        <input type="radio" name="wfh" value="1" /> 
                        <span>Yes</span> 
                        <input type="radio" name="wfh" value="0" />
                        <span> No</span>
                    </div>
                  </div>
               </div>
               <div className="frmInput">
                   <div className="frmType">
                     VDI Connectivity :
                   </div>
                   <div className="inputType">
                     <div className="output">
                        <select name="vidStatus">
                          <option value="">Select the VDI Status</option>
                          <option value="Good">Good</option>
                          <option value="Poor">Poor</option>
                          <option value="Moderate">Moderate</option>
                        </select>
                    </div>
                  </div>
               </div>
               <div className="frmInput fullwidth">
                   <div className="frmType">
                     Any other Issues :
                   </div>
                   <div className="inputType">
                     <div className="output">
                        <textarea name="aoi"></textarea>  
                    </div>
                  </div>
               </div>
               <div className="frmInput fullwidth">
                   <div className="frmType">
                     Comments :
                   </div>
                   <div className="inputType">
                     <div className="output">
                        <textarea name="comments"></textarea>  
                    </div>
                  </div>
               </div>
                 <div className="row">
                  <input className="sign-up-btn" type="button" name="signup-btn"
                    id="signup-btn" value="Submit" />
                </div>
             </div>
        </div>

      </>
  )
}

export default Attendance;
