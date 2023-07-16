<?php 
if ( ! defined('ABSPATH')) exit;  // if direct access 

final class SaskatchewanProperty{

    function __construct(){

      add_shortcode('show_saskatchewan_property', [$this, 'Saskproperty']);
    }

 function Saskproperty(){
 
?> 

 <h1 style="text-align: center;">Saskatchewan Property Tax Calculator 2022</h1>
    
 <div class="tabs">
      <input type="radio" name="tabs" id="tabone" checked="checked">
      <label for="tabone">I know my home’s SAMA Assessment value</label>
      <div class="tab">  

        <div class="property-container">    
          <div class="roi-col-1">
            <div class="ab_asste"> 
              <span>SAMA Assessment Value of the Property</span>
              <input type="text" id="savalue" name="savalue" value="500000" class="textfield">
            </div>
            <br>
            <div class="ab_asste"> 
              <span>City</span>
              <select id="sacity" name="sacity" class="textfield">            
                <option>Estevan</option>
                <option>Moose Jaw</option>
                <option>Prince Albert</option>
                <option>Regina</option>
                <option>Regina</option>             
                <option>Weyburn</option>
                <option>Yorkton</option>
              </select>  
            </div>

          </div>

          <div class="roi-col-1 pro_color"> 
            <div class="asste_col"> 
             <h3> 2022 Property Tax Value</h3>   
             <div class="saresult">$3,596</div>
           </div>   
           <br>
           <div class="asste_col"> 
           <h3> 2022 Residential Property Tax Rate</h3>   
           <div class="satax_rate">0.71927 %</div>  
         </div>     

          <div style="clear:both;"></div>
       </div> 

       <div style="clear:both;"></div>
     </div> <!-- END THE container -->

   </div>
 <input type="radio" name="tabs" id="tabtwo">
 <label for="tabtwo">I Don't Know My Home's Assessed Value</label>
 <div class="tab">

      <div class="property-container">    
        <div class="roi-col-1">
          <div class="ab_asste"> 
            <span>Property Fair Market Value</span>
            <input type="text" id="sassval" name="sassval" value="500000" class="textfield">
          </div>
          <br>
          <div class="ab_asste"> 
            <span>City</span>
            <select id="sasscity" name="sasscity" class="textfield">
                <option>Estevan</option>
                <option>Martensville</option>
                <option>Moose Jaw</option>
                <option>Prince Albert</option>
                <option>Regina</option>
                <option>Warman</option>
                <option>Weyburn</option>
                <option>Yorkton</option>
            </select>  
          </div>

        </div>

        <div class="roi-col-1 pro_color"> 
          <div class="asste_col"> 
           <h3> Your Estimated Property Tax</h3>   
           <div class="assff_pro">$6,770</div>
         </div>   
         <br>
         <div class="asste_col"> 
         <h3> Your Effective Property Tax Rate</h3>   
         <div class="assff_rate">1.3542 %</div>  
       </div>     

        <div style="clear:both;"></div>
     </div>   
  </div>


 <?php

     }
  } /*end the class*/

?>    