<?php 
if ( ! defined('ABSPATH')) exit;  // if direct access 

final class AtlanticProperty{

    function __construct(){

      add_shortcode('show_Atlantic_property', [$this, 'Atlaproperty']);
    }

 function Atlaproperty(){
 
?> 


 <h1 style="text-align: center;">Atlantic Canada Property Tax Calculator 2022 </h1>
    
 <div class="tabs">
      <input type="radio" name="tabs" id="tabone" checked="checked">
      <label for="tabone">I KNOW MY HOME’S ASSESSMENT VALUE</label>
      <div class="tab">  

        <div class="property-container">    
          <div class="roi-col-1">
            <div class="ab_asste"> 
              <span>Assessment Value of the Property</span>
              <input type="text" id="atvalue" name="atvalue" value="500000" class="textfield">
            </div>
            <br>
            <div class="ab_asste"> 
              <span>City</span>
              <select id="atcity" name="atcity" class="textfield">
                
                <option>Charlottetown, PE</option>
                <option>Fredericton, NB</option>
                <option>Glace Bay, NS</option>
                <option>Halifax, NS</option>
                <option>Moncton, NB</option>
                <option>Quispamsis, NB</option>
                <option>Saint John, NB</option> 
                <option>St. John’s, NL</option>
                <option>Sydney, NS</option>
                <option>Truro, NS</option>
              
              </select>  
            </div>

          </div>

          <div class="roi-col-1 pro_color"> 
            <div class="asste_col"> 
             <h3> 2022 Property bctax Value </h3>   
             <div class="at_result">$8,350</div>
           </div>   
           <br>
           <div class="asste_col"> 
           <h3> 2022 Residential Property bctax Rate </h3>   
           <div class="attax_rate">1.670000%</div>  
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
   <div class="textsms"> Will become available by the end of 2022.</div>
  </div> 



 <?php

     }
  } /*end the class*/

?>      