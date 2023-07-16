<?php 
if ( ! defined('ABSPATH')) exit;  // if direct access 


final class OntarioProperty{

    function __construct(){

    	  add_shortcode('show_onta_property', [$this, 'Onproperty']);
    }
 function Onproperty(){
 
?>   			

    <h1 style="text-align: center;">Ontario Property Tax Calculator 2022</h1>
    
 <div class="tabs">
      <input type="radio" name="tabs" id="tabone" checked="checked">
      <label for="tabone">I KNOW MY HOME’S MPAC ASSESSED VALUE</label>
      <div class="tab">  

        <div class="property-container">    
          <div class="roi-col-1">
            <div class="ab_asste"> 
              <span>MPAC Assessed Value of the Property</span>
              <input type="text" id="otvalue" name="otvalue" value="500000" class="textfield">
            </div>
            <br>
            <div class="ab_asste"> 
              <span>City</span>
              <select id="otcity" name="otcity" class="textfield">            
                <option>Ajax</option>
                <option>Aurora</option>
                <option>Barrie</option>
                <option>Belleville</option>
                <option>Brampton</option>
                <option>Brant</option>
                <option>Brantford</option>
                <option>Brock</option>
                <option>Brockville</option>
                <option>Burlington</option>
                <option>Caledon</option>
                <option>Cambridge</option>
                <option>Clarence-Rockland</option>
                <option>Clarington</option>
                <option>Cornwall</option>
                <option>East Gwillimbury</option>
                <option>Georgina</option>
                <option>Greater Sudbury</option> 
                <option>Haldimand County</option>
                <option>Halton Hills</option>
                <option>Hamilton</option>
                <option>Kawartha Lakes</option>
                <option>Kenora</option>
                <option>King</option>
                <option>Kingston</option>
                <option>Kitchener</option>
                <option>London</option>
                <option>Milton</option>
                <option>Mississauga</option>
                <option>Newmarket</option>
                <option>Niagara Falls</option>
                <option>Norfolk County</option>
                <option>North Bay</option>
                <option>Oakville</option>
                <option>Orillia</option>          
                <option>Oshawa</option>
                <option>Ottawa</option>
                <option>Owen Sound</option>
                <option>Pembroke</option>
                <option>Peterborough</option>
                <option>Pickering</option>
                <option>Port Colborne</option>
                <option>Prince Edward County</option>
                <option>Quinte West</option>
                <option>Sault Ste. Marie</option>
                <option>St. Catharines</option>
                <option>Scugog</option>
                <option>Stratford</option>
                <option>St. Thomas</option>
                <option>Temiskaming Shores</option>   
                <option>Thorold</option>
                <option>Thunder Bay</option>
                <option>Toronto</option>
                <option>Uxbridge</option>
                <option>Vaughan</option>
                <option>Waterloo</option>
                <option>Welland</option>
                <option>Whitby</option>
                <option>Whitchurch-Stouffville</option>
                <option>Woodstock</option>
                
              </select>  
            </div>

          </div>

          <div class="roi-col-1 pro_color"> 
            <div class="asste_col"> 
             <h3> 2022 Property Tax Value</h3>   
             <div class="otresult">$3,596</div>
           </div>   
           <br>
           <div class="asste_col"> 
           <h3> 2022 Residential Property Tax Rate</h3>   
           <div class="ottax_rate">0.71927 %</div>  
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
            <input type="text" id="otssval" name="otssval" value="500000" class="textfield">
          </div>
          <br>
          <div class="ab_asste"> 
            <span>City</span>
            <select id="otascity" name="otascity" class="textfield">
                <option>Ajax</option>
                <option>Aurora</option>
                <option>Barrie</option>
                <option>Belleville</option>
                <option>Brampton</option>
                <option>Brant</option>
                <option>Brantford</option>
                <option>Brock</option>
                <option>Brockville</option>
                <option>Burlington</option>
                <option>Caledon</option>
                <option>Cambridge</option>
                <option>Clarence-Rockland</option>
                <option>Clarington</option>
                <option>Cornwall</option>
                <option>East Gwillimbury</option>
                <option>Elliot Lake</option>
                <option>Georgina</option> 
                <option>Greater Sudbury</option>
                <option>Guelph</option>
                <option>Haldimand County</option>
                <option>Halton Hills</option>
                <option>Hamilton</option>
                <option>Kawartha Lakes</option>
                <option>King</option>
                <option>Kingston</option>
                <option>Kitchener</option>
                <option>London</option>
                <option>Markham</option>
                <option>Milton</option>
                <option>Mississauga</option>
                <option>Newmarket</option>
                <option>Niagara Falls</option>
                <option>North Bay</option>          
                <option>Oakville</option>
                <option>Orillia</option>
                <option>Oshawa</option>
                <option>Ottawa</option>
                <option>Owen Sound</option>
                <option>Pembroke</option>
                <option>Peterborough</option>
                <option>Pickering</option>
                <option>Port Colborne</option>
                <option>Prince Edward County</option>
                <option>Quinte West</option>
                <option>Richmond Hill</option>
                <option>Sarnia</option>
                <option>Sault Ste. Marie</option>
                <option>Scugog</option>   
                <option>St. Catharines</option>
                <option>St. Thomas</option>
                <option>Stratford</option>
                <option>Temiskaming Shores</option>
                <option>Thorold</option>
                <option>Timmins</option>
                <option>Toronto</option>
                <option>Uxbridge</option>
                <option>Vaughan</option>
                <option>Waterloo</option>
                <option>Welland</option>
                <option>Whitby</option>
                <option>Whitchurch-Stouffville</option>
                <option>Windsor</option>
                <option>Woodstock</option>
            </select>  
          </div>

        </div>

        <div class="roi-col-1 pro_color"> 
          <div class="asste_col"> 
           <h3> Your Estimated Property Tax</h3>   
           <div class="otasff_pro">$6770</div>
         </div>   
         <br>
         <div class="asste_col"> 
         <h3> Your Effective Property Tax Rate</h3>   
         <div class="otasff_rate">1.3542 %</div>  
       </div>     

        <div style="clear:both;"></div>
     </div>   
  </div> 


<?php 
   }
 }
?>
