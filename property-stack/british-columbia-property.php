<?php 
if ( ! defined('ABSPATH')) exit;  // if direct access 

final class britishProperty{

    function __construct(){

    	  add_shortcode('show_bric_property', [$this, 'Briproperty']);
    }
 
 function Briproperty(){
 
?>
 <h1 style="text-align: center;">British Columbia Property Tax Calculator 2022</h1>
<div class="tabs">
      <input type="radio" name="tabs" id="tabone" checked="checked">
      <label for="tabone">I KNOW MY HOME’S BC ASSESSMENT VALUE</label>
      <div class="tab">  

        <div class="property-container">    
          <div class="roi-col-1">
            <div class="ab_asste"> 
              <span>AB Assessment Value of the Property</span>
              <input type="text" id="bcvalue" name="bcvalue" value="500000" class="textfield">
            </div>
            <br>
            <div class="ab_asste"> 
              <span>City</span>
              <select id="bccity" name="bccity" class="textfield">
                
                <option>Abbotsford</option>
                <option>Burnaby</option>
                <option>Campbell River</option>
                <option>Central Saanich</option>
                <option>Chilliwack</option>
                <option>Coldstream</option>
                <option>Colwood</option> 
                <option>Comox</option>
                <option>Coquitlam</option>
                <option>Courtenay</option>
                <option>Dawson Creek</option>
                <option>Delta</option>
                <option>Fort St. John</option>
                <option>Kamloops</option>
                <option>Kelowna</option>
                <option>Lake Country</option>
                <option>Langford</option>
                <option>Langley</option>
                <option>Maple Ridge</option>
                <option>Mission</option>
                <option>Nanaimo</option>
                <option>Nelson</option>
                <option>New Westminster</option>
                <option>North Saanich</option>
                <option>North Vancouver</option>
                <option>Parksville</option>
                <option>Penticton</option>
                <option>Pitt Meadows</option>
                <option>Powell River</option>
                <option>Prince George</option>
                <option>Prince Rupert</option>
                <option>Richmond</option>
                <option>Salmon Arm</option>
                <option>Sidney</option>
                <option>Sooke</option>
                <option>Squamish</option>
                <option>Surrey</option>
                <option>Vancouver</option>
                <option>Victoria</option>
                <option>View Royal</option>
                <option>West Kelowna</option>
                <option>Whistler</option>
                <option>White Rock</option>
              </select>  
            </div>

          </div>

          <div class="roi-col-1 pro_color"> 
            <div class="asste_col"> 
             <h3> 2022 Property bctax Value </h3>   
             <div class="ass_result">$3,596</div>
           </div>   
           <br>
           <div class="asste_col"> 
           <h3> 2022 Residential Property bctax Rate </h3>   
           <div class="bctax_rate">0.71927 %</div>  
         </div>     

          <div style="clear:both;"></div>
       </div> 

       <div style="clear:both;"></div>
     </div> <!-- END THE container -->

   </div>
 <input type="radio" name="tabs" id="tabtwo">
 <label for="tabtwo">I DON'T KNOW MY HOME'S ASSESSED VALUE</label>
 <div class="tab">

      <div class="property-container">    
        <div class="roi-col-1">
          <div class="ab_asste"> 
            <span>Property Fair Market Value</span>
            <input type="text" id="bcassval" name="bcassval" value="500000" class="textfield">
          </div>
          <br>
          <div class="ab_asste"> 
            <span>City</span>
            <select id="bcascity" name="bcascity" class="textfield">
                <option>Abbotsford</option>
                <option>Burnaby</option>
                <option>Campbell River</option>
                <option>Central Saanich</option>
                <option>Chilliwack</option>
                <option>Coldstream</option>
                <option>Comox</option>
                <option>Coquitlam</option>
                <option>Courtenay</option>
                <option>Dawson Creek</option>
                <option>Delta</option>
                <option>Fort St. John</option>
                <option>Kamloops</option>
                <option>Kelowna</option>
                <option>Langford</option>
                <option>Langley</option>
                <option>Maple Ridge</option>
                <option>Mission</option>
                <option>Nanaimo</option>
                <option>New Westminster</option>
                <option>North Saanich</option>
                <option>North Vancouver</option>
                <option>Parksville</option>
                <option>Powell River</option>
                <option>Prince George</option>
                <option>Prince Rupert</option>
                <option>Richmond</option>
                <option>Sidney</option>
                <option>Sooke</option>
                <option>Squamish</option>
                <option>Surrey</option>
                <option>Vancouver</option>
                <option>Victoria</option>
                <option>View Royal</option>
                <option>Whistler</option>
                <option>White Rock</option>
            </select>  
          </div>

        </div>

        <div class="roi-col-1 pro_color"> 
          <div class="asste_col"> 
           <h3> Your Estimated Property bctax </h3>   
           <div class="bceasff_pro">$1,926</div>
         </div>   
         <br>
         <div class="asste_col"> 
         <h3> Your Effective Property bctax Rate </h3>   
         <div class="bceasff_rate">0.385161 %</div>  
       </div>     

        <div style="clear:both;"></div>
     </div>   
  </div> 
  

<?php 
 	}
 }
?>