<?php 
if ( ! defined('ABSPATH')) exit;  // if direct access 


final class monitobaProperty{

    function __construct(){

    	  add_shortcode('show_moni_property', [$this, 'Monitproperty']);
    }
 
 function Monitproperty(){
 
?>

 <h1 style="text-align: center;">Manitoba Property Tax Calculator 2022</h1>
    
 <div class="tabs">
      <input type="radio" name="tabs" id="tabone" checked="checked">
      <label for="tabone">I KNOW MY HOME’S BC ASSESSMENT VALUE</label>
      <div class="tab">  

        <div class="property-container">    
          <div class="roi-col-1">
            <div class="ab_asste"> 
              <span>Assessment Value of the Property</span>
              <input type="text" id="movalue" name="movalue" value="500000" class="textfield">
            </div>
            <br>
            <div class="ab_asste"> 
              <span>City</span>
              <select id="mocity" name="mocity" class="textfield">            
                <option>Brandon</option>
                <option>Portage la Prairie</option>
                <option>Selkirk</option>
                <option>Steinbach</option>
                <option>Winnipeg</option>             
              </select>  
            </div>

          </div>

          <div class="roi-col-1 pro_color"> 
            <div class="asste_col"> 
             <h3> 2022 Property Tax Value</h3>   
             <div class="moresult">$3,596</div>
           </div>   
           <br>
           <div class="asste_col"> 
           <h3> 2022 Residential Property Tax Rate</h3>   
           <div class="motax_rate">0.71927 %</div>  
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
            <input type="text" id="mossval" name="mossval" value="500000" class="textfield">
          </div>
          <br>
          <div class="ab_asste"> 
            <span>City</span>
            <select id="moascity" name="moascity" class="textfield">
                <option>Brandon</option>
                <option>Steinbach</option>
                <option>Winnipeg</option>
            </select>  
          </div>

        </div>

        <div class="roi-col-1 pro_color"> 
          <div class="asste_col"> 
           <h3> Your Estimated Property Tax</h3>   
           <div class="moasff_pro">$6,770</div>
         </div>   
         <br>
         <div class="asste_col"> 
         <h3> Your Effective Property Tax Rate</h3>   
         <div class="moasff_rate">1.3542 %</div>  
       </div>     

        <div style="clear:both;"></div>
     </div>   
  </div>
 

<?php 

  	}
  }	 /*End the class*/

?>