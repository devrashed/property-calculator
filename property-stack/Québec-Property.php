<?php 
if ( ! defined('ABSPATH')) exit;  // if direct access 

final class QuebProperty{

    function __construct(){

    	  add_shortcode('show_que_property', [$this, 'Queproperty']);
    }

 function Queproperty(){
 
?>  
     <h1 style="text-align: center;">Québec Property Tax Calculator 2022</h1>
    
 <div class="tabs">
      <input type="radio" name="tabs" id="tabone" checked="checked">
      <label for="tabone">I KNOW MY HOME'S MRC ASSESSMENT VALUE</label>
      <div class="tab">  

        <div class="property-container">    
          <div class="roi-col-1">
            <div class="ab_asste"> 
              <span>MRC Assessment Value of the Property</span>
              <input type="text" id="qpvalue" name="qpvalue" value="500000" class="textfield">
            </div>
            <br>
            <div class="ab_asste"> 
              <span>City</span>
              <select id="qpcity" name="qpcity" class="textfield">            
                <option>Alma</option>
                <option>Baie-Comeau</option>
                <option>Beloeil</option>
                <option>Blainville</option>
                <option>Boisbriand</option>
                <option>Brossard</option>             
                <option>Candiac</option>
                <option>Chateauguay</option>
                <option>Cote Saint-Luc</option>
                <option>Dollard-des-Ormeaux</option>
                <option>Gatineau</option>
                <option>Granby</option>
                <option>Kirkland</option>
                <option>La Prairie</option>
                <option>L'Assomption</option>
                <option>Laval</option>
                <option>Lévis</option>
                <option>Longueuil</option>
                <option>Magog</option>
                <option>Mascouche</option>
                <option>Mirabel</option>
                <option>Montreal</option>
                <option>Mont-Royal</option>
                <option>Pointe-Claire</option>
                <option>Québec City</option>
                <option>Repentigny</option>
                <option>Rimouski</option>
                <option>Saguenay</option>
                <option>Saint-Bruno-de-Montarville</option>
                <option>Saint-Constant</option>
                <option>Sainte-Julie</option>
                <option>Saint-Eustache</option>
                <option>Saint-Hyacinthe</option>
                <option>Saint-Jean-sur-Richelieu</option>
                <option>Saint-Jerome</option>
                <option>Saint-Lambert</option>
                <option>Saint-Lin-Laurentides</option>
                <option>Salaberry-de-Valleyfield</option>
                <option>Sept-Iles</option>
                <option>Sherbrooke</option>
                <option>Sorel-Tracy</option>
                <option>Terrebonne</option>
                <option>Thetford Mines</option>
                <option>Trois-Rivières</option>
                <option>Val-d'Or</option>
                <option>Varennes</option>
                <option>Vaudreuil-Dorion</option>
                <option>Victoriaville</option>
                <option>Westmount</option>

              </select>  
            </div>

          </div>

          <div class="roi-col-1 pro_color"> 
            <div class="asste_col"> 
             <h3> 2022 Property Tax Value</h3>   
             <div class="qpresult">$3,596</div>
           </div>   
           <br>
           <div class="asste_col"> 
           <h3> 2022 Residential Property Tax Rate</h3>   
           <div class="qptax_rate">0.71927 %</div>  
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
            <input type="text" id="pqssval" name="pqssval" value="500000" class="textfield">
          </div>
          <br>
          <div class="ab_asste"> 
            <span>City</span>
            <select id="pqascity" name="pqascity" class="textfield">
                <option>Blainville</option>
                <option>Brossard</option>
                <option>Chateauguay</option>
                <option>Gatineau</option>
                <option>Laval</option>
                <option>Longueuil</option>
                <option>Montreal</option>
                <option>Westmount</option>
            </select>  
          </div>
        </div>

        <div class="roi-col-1 pro_color"> 
          <div class="asste_col"> 
           <h3> Your Estimated Property Tax</h3>   
           <div class="pqasff_pro">$6,770</div>
         </div>   
         <br>
         <div class="asste_col"> 
         <h3> Your Effective Property Tax Rate</h3>   
         <div class="pqasff_rate">1.3542 %</div>  
       </div>     

        <div style="clear:both;"></div>
     </div>   
  </div> 

<?php

	 }
  }	

?>