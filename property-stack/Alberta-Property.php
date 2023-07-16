<?php 
if ( ! defined('ABSPATH')) exit;  // if direct access 

final class AlbertaProperty{

function __construct(){

	  add_shortcode('show_ab_property', [$this, 'albertproperty']);

}
 
 function albertproperty(){
 
?>

 <h1 style="text-align: center;">Alberta Property Tax Calculator 2022</h1>
    <div class="tabs">
      <input type="radio" name="tabs" id="tabone" checked="checked">
      <label for="tabone">I KNOW MY HOME’S AB ASSESSMENT VALUE</label>
      <div class="tab">  

        <div class="property-container">    
          <div class="roi-col-1">
            <div class="ab_asste"> 
              <span>AB Assessment Value of the Property</span>
              <input type="text" id="assvalue" name="assvalue" value="500000" class="textfield">
            </div>
            <br>
            <div class="ab_asste"> 
              <span>City</span>
              <select id="procity" name="procity" class="textfield">
                <option>Airdrie</option>
                <option>Beaumont</option>
                <option>Brooks</option>
                <option>Calgary</option>
                <option>Camrose</option>
                <option>Chestermere</option>
                <option>Cochrane</option> 
                <option>Cold Lake</option>
                <option>Edmonton</option>
                <option>High River</option>
                <option>Lacombe</option>
                <option>Leduc</option>
                <option>Lethbridge</option>
                <option>Medicine Hat</option>
                <option>Okotoks</option>
                <option>Red Deer</option>
                <option>Spruce Grove</option>
                <option>St. Albert</option>
                <option>Strathmore</option>
                <option>Whitecourt</option>

              </select>  
            </div>

          </div>

          <div class="roi-col-1 pro_color"> 
            <div class="asste_col"> 
             <h3> 2022 Property Tax Value </h3>   
             <div class="ass_result">$3,596</div>
           </div>   
           <br>
           <div class="asste_col"> 
           <h3> 2022 Residential Property Tax Rate </h3>   
           <div class="tax_rate">0.71927%</div>  
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
            <input type="text" id="maketval" name="maketval" value="500000" class="textfield">
          </div>
          <br>
          <div class="ab_asste"> 
            <span>City</span>
            <select id="makcity" name="makcity" class="textfield">
              <option>Airdrie</option>
              <option>Brooks</option>
              <option>Calgary</option>
              <option>Camrose</option>
              <option>Chestermere</option>
              <option>Cochrane</option> 
              <option>Cold Lake</option>
              <option>Edmonton</option>
              <option>High River</option>
              <option>Lacombe</option>
              <option>Leduc</option>
              <option>Lethbridge</option>
              <option>Medicine Hat</option>
              <option>Okotoks</option>
              <option>Spruce Grove</option>
              <option>St. Albert</option>
              <option>Strathmore </option>

            </select>  
          </div>

        </div>

        <div class="roi-col-1 pro_color"> 
          <div class="asste_col"> 
           <h3> Your Estimated Property Tax </h3>   
           <div class="extiresult">$3,000</div>
         </div>   
         <br>
         <div class="asste_col"> 
         <h3> Your Effective Property Tax Rate </h3>   
         <div class="prorate">0.6286 %</div>  
       </div>     

        <div style="clear:both;"></div>
     </div>   
  </div>




<?php 
 	}
 }
?>