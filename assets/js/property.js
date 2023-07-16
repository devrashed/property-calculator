function thousands_separe(num)
        {
          let number = num.toString().split(".");
          number[0] = number[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return number.join(".");
        }  

$(document).ready(function(){

   $("#assvalue").keypress(function (num) {    
                let numberFor = (num.what) ? num.what : event.keyCode    
                if (String.fromCharCode(numberFor).match(/[^0-9]/g))    
                    return false;  
                                          
       });

   $("#assvalue").on("keyup", function(){  

     let tax = 0.719270;
     let assvalue = $("#assvalue").val();  
     let taxrat = $(".tax_rate").html(0.719270+" %");  
     $(".ass_result").html("$"+((assvalue * tax) / 100).toFixed());  

   });  

$("#procity").on("change", function(){ 
         let citypro = $(this).val();
         
         if(citypro === "Airdrie") {

           let tax = 0.719270;
           let assvalue = $("#assvalue").val();  
           $(".tax_rate").html(0.719270+" %");  
           let abtotal = ((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));  

          $("#assvalue").on("keyup", function(){  
           let tax = 0.719270;
           let assvalue = $("#assvalue").val();  
           let taxrat = $(".tax_rate").html(0.719270+" %");  
           let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));  
          }); 
           
         }else if (citypro === "Beaumont"){

            let tax = 0.934811;
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.934811+" %");     
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));  

         $("#assvalue").on("keyup", function(){    
            let tax = 0.934811;
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.934811+" %");     
            let abtotal=((assvalue * tax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(abtotal));  
         }); 

         }else if (citypro === "Brooks"){

            let tax = 1.133452;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(1.133452+" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(abtotal));  

          $("#assvalue").on("keyup", function(){   
            let tax = 1.133452;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(1.133452+" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(abtotal));    
         });

          }else if (citypro === "Calgary"){

            let tax = 0.714980;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.714980+" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));  

           $("#assvalue").on("keyup", function(){ 

            let tax = 0.714980;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.714980+" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(abtotal));     
           });

          }else if (citypro === "Canmore"){

            let tax = 0.504508;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.504508+" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(abtotal));  

          $("#assvalue").on("keyup", function(){    
            let tax = 0.504508;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.504508+" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));        
           });

          }else if (citypro === "Chestermere"){

            let tax = 0.719457;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.719457+" %");
             let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));  

           $("#assvalue").on("keyup", function(){   
            let tax = 0.719457;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.719457+" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));  
           });             
          
          }else if (citypro === "Cochrane"){

            let tax = 0.749470;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.749470+" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));        

          $("#assvalue").on("keyup", function(){    
            let tax = 0.749470;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.749470+" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));           
          });

          }else if (citypro === "Cold Lake"){

            let tax = 1.138490;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(1.138490+" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));    

           $("#assvalue").on("keyup", function(){     
            let tax = 1.138490;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(1.138490+" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));          
          });  

          }else if (citypro === "Edmonton"){

            let tax = 0.938670;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.938670+" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));   

           $("#assvalue").on("keyup", function(){    
            let tax = 0.938670;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.938670+" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));        
           });

          }else if (citypro === "Fort Saskatchewan"){

            let tax = 0.826164;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.826164+" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));  

           $("#assvalue").on("keyup", function(){    
            let tax = 0.826164;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.826164+" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));        
          });

          }else if (citypro === "Grande Prairie"){

            let tax = 1.257470;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(1.257470+" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));  

          $("#assvalue").on("keyup", function(){   
            let tax = 1.257470;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(1.257470+" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));          
          });

          }else if (citypro === "High River"){

            let tax = 0.904650;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.904650+" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));  

          $("#assvalue").on("keyup", function(){ 
            let tax = 0.904650;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.904650+" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));          
          });

          }else if (citypro === "Lacombe"){

            let tax = 1.110920;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(1.110920+" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));  

          $("#assvalue").on("keyup", function(){
            let tax = 1.110920;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(1.110920+" %");
             let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));              
          });

          }else if (citypro === "Leduc"){

            let tax = 1.007900;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(1.007900 +" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));       

          $("#assvalue").on("keyup", function(){     

            let tax = 1.007900;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(1.007900 +" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));         
           
          });  

          }else if (citypro === "Lethbridge"){

            let tax = 1.090840;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(1.090840 +" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));    

          $("#assvalue").on("keyup", function(){     
            let tax = 1.090840;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(1.090840 +" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));            
          });

          }else if (citypro === "Lloydminster"){

            let tax = 1.002190;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(1.002190 +" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));    

          $("#assvalue").on("keyup", function(){   
            let tax = 1.002190;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(1.002190 +" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));                
          });

          }else if (citypro === "Medicine Hat"){

            let tax = 0.952980;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.952980 +" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));   

          $("#assvalue").on("keyup", function(){   
            let tax = 0.952980;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.952980 +" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));         
          });

          }else if (citypro === "Okotoks"){

            let tax = 0.817100;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.817100 +" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));  

          $("#assvalue").on("keyup", function(){  
            let tax = 0.817100;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.817100 +" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));           
          });

          }else if (citypro === "Red Deer"){

            let tax = 0.991880;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.991880 +" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));  

        $("#assvalue").on("keyup", function(){ 
            let tax = 0.991880;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.991880 +" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));         
         });

          }else if (citypro === "Spruce Grove"){

            let tax = 0.913030;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.913030 +" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));  

          $("#assvalue").on("keyup", function(){  
            let tax = 0.913030;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.913030 +" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));           
          });

          }else if (citypro === "St. Albert"){

           let tax = 1.110329;   
           let assvalue = $("#assvalue").val();
           let taxrat = $(".tax_rate").html(1.110329 +" %");
           let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));    

          $("#assvalue").on("keyup", function(){ 
            let tax = 1.110329;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(1.110329 +" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));            
          });

          }else if (citypro === "Strathmore"){

            let tax = 0.947200;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.947200 +" %");
             let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));   

          $("#assvalue").on("keyup", function(){
            let tax = 0.947200;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.947200 +" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));          
          });

          }else if (citypro === "Sylvan Lake"){

            let tax = 0.924624;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.924624 +" %");
             let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));  

          $("#assvalue").on("keyup", function(){
            let tax = 0.924624;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.924624 +" %");
             let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));            
          });

          }else if (citypro === "Wetaskiwin"){

           let tax = 1.284700;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(1.284700 +" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));  

          $("#assvalue").on("keyup", function(){    
            let tax = 1.284700;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(1.284700 +" %");
            let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));  
          });          
          
          }else if (citypro === "Whitecourt"){


            let tax = 0.917920;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.917920 +" %");
           let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));  

           $("#assvalue").on("keyup", function(){   

            let tax = 0.917920;   
            let assvalue = $("#assvalue").val();
            let taxrat = $(".tax_rate").html(0.917920 +" %");
             let abtotal=((assvalue * tax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(abtotal));           
          
           });  

          }

       });
});



  $(document).ready(function(){ 

       $("#maketval").keypress(function (num) {    
          let numberFor = (num.what) ? num.what : event.keyCode    
          if (String.fromCharCode(numberFor).match(/[^0-9]/g))    
              return false;  
                                      
      });

        $("#maketval").on("keyup", function(){  

          let ptax = 0.6286;
          let maketval = $("#maketval").val();        
          $(".prorate").html(0.6286 +" %");
          $(".extiresult").html("$"+((maketval * ptax) / 100).toFixed());   

        });

       $("#makcity").on("change", function(){ 

          let maketval = $("#maketval").val();
          let makcity = $(this).val();

          if(makcity === "Airdrie"){     
 
            let ptax = 0.6286;
            let maketval = $("#maketval").val();        
            $(".prorate").html(0.6286 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));      

            $("#maketval").on("keyup", function(){  

              let ptax = 0.6286;
              let maketval = $("#maketval").val();        
              $(".prorate").html(0.6286 +" %");
              let asste_total = ((maketval * ptax) / 100).toFixed();
              $(".extiresult").html("$"+thousands_separe(asste_total));    

            });

          } else if (makcity === "Brooks") {
  
            let ptax = 1.3694;   
            let maketval = $("#maketval").val();
            $(".prorate").html(1.3694 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));      

          $("#maketval").on("keyup", function(){  
            let ptax = 1.3694;   
            let maketval = $("#maketval").val();
            $(".prorate").html(1.3694 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));   

         });

          }else if (makcity === "Calgary") {

            let ptax = 0.6946;   
            let maketval = $("#maketval").val();
            $(".prorate").html(0.6946 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));       

        $("#maketval").on("keyup", function(){  
            let ptax = 0.6946;   
            let maketval = $("#maketval").val();
            let ptaxrat = $(".prorate").html(0.6946 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));         
          
          });

          }else if (makcity === "Camrose") {
  
            let ptax = 0.6004;   
            let maketval = $("#maketval").val();
             $(".prorate").html(0.6004 +" %");
             let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));        

        $("#maketval").on("keyup", function(){  
            let ptax = 0.6004;   
            let maketval = $("#maketval").val();
            $(".prorate").html(0.6004 +" %");
             let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));         
      
      });
          }else if (makcity === "Chestermere") {
             
            let ptax = 0.6113;   
            let maketval = $("#maketval").val();
            $(".prorate").html(0.6113 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));        

           $("#maketval").on("keydown keyup", function(){  

              let ptax = 0.6113;   
              let maketval = $("#maketval").val();
              $(".prorate").html(0.6113 +" %");
              let asste_total = ((maketval * ptax) / 100).toFixed();
              $(".extiresult").html("$"+thousands_separe(asste_total));        

           });


          }else if (makcity === "Cochrane") {

            let ptax = 0.5606;   
            let maketval = $("#maketval").val();
            $(".prorate").html(0.5606 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));       

        $("#maketval").on("keyup", function(){  

            let ptax = 0.5606;   
            let maketval = $("#maketval").val();
            $(".prorate").html(0.5606 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));       

          });   

          }else if (makcity === "Cold Lake") {

            let ptax = 1.1607;   
            let maketval = $("#maketval").val();
            $(".prorate").html(1.1607 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));    

          $("#maketval").on("keyup", function(){  

            let ptax = 1.1607;   
            let maketval = $("#maketval").val();
            $(".prorate").html(1.1607 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));         

          });      

          }else if (makcity === "Edmonton") {

            let ptax = 0.8949;   
            let maketval = $("#maketval").val();
            $(".prorate").html(0.8949 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));    

          $("#maketval").on("keyup", function(){   
            
            let ptax = 0.8949;   
            let maketval = $("#maketval").val();
            $(".prorate").html(0.8949 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));         

          });   
            

          }else if (makcity === "High River") {

            let ptax = 0.9230;   
            let maketval = $("#maketval").val();
            $(".prorate").html(0.9230 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));        

         $("#maketval").on("keyup", function(){   

            let ptax = 0.9230;   
            let maketval = $("#maketval").val();
            $(".prorate").html(0.9230 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));        

          });    
            
          } else if (makcity === "Lacombe") {

            let ptax = 1.0026;   
            let maketval = $("#maketval").val();
            $(".prorate").html(1.0026 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));      

        $("#maketval").on("keyup", function(){     
            let ptax = 1.0026;   
            let maketval = $("#maketval").val();
            $(".prorate").html(1.0026 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));        

         });    

          }else if (makcity === "Leduc") {

            let ptax = 0.9547;   
            let maketval = $("#maketval").val();
            $(".prorate").html(0.9547 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));

        $("#maketval").on("keyup", function(){     
            let ptax = 0.9547;   
            let maketval = $("#maketval").val();
            $(".prorate").html(0.9547 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));         

         });   
            
          }else if (makcity === "Lethbridge") {

            let ptax = 1.0309;   
            let maketval = $("#maketval").val();
            let ptaxrat = $(".prorate").html(1.0309 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));   

         $("#maketval").on("keyup", function(){    

            let ptax = 1.0309;   
            let maketval = $("#maketval").val();
            let ptaxrat = $(".prorate").html(1.0309 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));       

          });      

          }else if (makcity === "Medicine Hat") {

            let ptax = 0.8861;   
            let maketval = $("#maketval").val();
            $(".prorate").html(0.8861 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));        

         $("#maketval").on("keyup", function(){    

            let ptax = 0.8861;   
            let maketval = $("#maketval").val();
            $(".prorate").html(0.8861 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));        

           });    

          }else if (makcity === "Okotoks") {

            let ptax = 0.7723;   
            let maketval = $("#maketval").val();
            $(".prorate").html(0.7723 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));    

          $("#maketval").on("keyup", function(){      

            let ptax = 0.7723;   
            let maketval = $("#maketval").val();
            $(".prorate").html(0.7723 +" %");
             let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));     
          });  
            
          }else if (makcity === "Spruce Grove") {

            let ptax = 0.9081;   
            let maketval = $("#maketval").val();
            $(".prorate").html(0.9081 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));    

          $("#maketval").on("keyup", function(){  

            let ptax = 0.9081;   
            let maketval = $("#maketval").val();
            $(".prorate").html(0.9081 +" %");
           let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));    

        });       

          }else if (makcity === "St. Albert") {

            let ptax = 0.8955;   
            let maketval = $("#maketval").val();
            $(".prorate").html(0.8955 +" %");
             let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));   

           $("#maketval").on("keyup", function(){    

            let ptax = 0.8955;   
            let maketval = $("#maketval").val();
            $(".prorate").html(0.8955 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));   

           });    

          }else if (makcity === "Strathmore") {

            let ptax = 0.9315;   
            let maketval = $("#maketval").val();
            $(".prorate").html(0.9315 +" %");
             let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));    

          $("#maketval").on("keyup", function(){  

            let ptax = 0.9315;   
            let maketval = $("#maketval").val();
            $(".prorate").html(0.9315 +" %");
            let asste_total = ((maketval * ptax) / 100).toFixed();
            $(".extiresult").html("$"+thousands_separe(asste_total));      
           
          });    

          }
        
     });
   });



/*========= British Colmbia =============== 

===========================================*/


$(document).ready(function(){

    $("#bcvalue").keypress(function (num) {    
                let numberFor = (num.what) ? num.what : event.keyCode    
                if (String.fromCharCode(numberFor).match(/[^0-9]/g))    
                    return false;  
                                          
       });

 $("#bcvalue").on("keyup", function(){  

   let bctax = 0.71927;
   let bcvalue = $("#bcvalue").val();  
   let bcbctaxrat = $(".bctax_rate").html(0.71927+" %");  
   let bctotal = ((bcvalue * bctax) / 100).toFixed();
   $(".ass_result").html("$"+ thousands_separe(bctotal));  

 });  


$("#bccity").on("change", function(){ 
         let bccity = $(this).val();
         
         if(bccity === "Abbotsford") {

           let bctax = 0.71927;
           let bcvalue = $("#bcvalue").val();  
           let bcbctaxrat = $(".bctax_rate").html(0.71927+" %"); 
           let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+ thousands_separe(bctotal));  

          $("#bcvalue").on("keyup", function(){  
           let bctax = 0.71927;
           let bcvalue = $("#bcvalue").val();  
           let bcbctaxrat = $(".bctax_rate").html(0.71927+" %");  
           let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          }); 
           
         }else if (bccity === "Burnaby"){

            let bctax = 0.284280;
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.284280+" %");     
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

         $("#bcvalue").on("keyup", function(){    
            let bctax = 0.284280;
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.284280+" %");     
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
         }); 

         }else if (bccity === "Campbell River"){

            let bctax = 0.562082;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.562082+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

          $("#bcvalue").on("keyup", function(){   
            let bctax = 0.562082;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.562082+" %");
           let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
         });

          }else if (bccity === "Central Saanich"){

            let bctax = 0.452785;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.452785+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){ 

            let bctax = 0.452785;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.452785+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
           });

          }else if (bccity === "Chilliwack"){

            let bctax = 0.404972;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.404972+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

          $("#bcvalue").on("keyup", function(){    
            let bctax = 0.404972;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.404972+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(bctotal)); 
           });

          }else if (bccity === "Coldstream"){

            let bctax = 0.330802;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.330802+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   
            let bctax = 0.330802;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.330802+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
           });             
          
          }else if (bccity === "Colwood"){

            let bctax = 0.423540;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.423540+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(bctotal)); 

          $("#bcvalue").on("keyup", function(){    
            let bctax = 0.423540;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.423540+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(bctotal)); 
          });

          }else if (bccity === "Comox"){

            let bctax = 0.480000;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.480000+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){     
            let bctax = 0.480000;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.480000+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(bctotal)); 
          });  

          }else if (bccity === "Coquitlam"){

            let bctax = 0.392000;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.392000+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){    
            let bctax = 0.392000;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.392000+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(bctotal)); 
           });

          }else if (bccity === "Courtenay"){

            let bctax = 0.467390;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.467390+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){    
            let bctax = 0.467390;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.467390+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          });

          }else if (bccity === "Cranbrook"){

            let bctax = 0.814251;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.814251+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

          $("#bcvalue").on("keyup", function(){   
            let bctax = 0.814251;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.814251+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(bctotal)); 
          });

          }else if (bccity === "Dawson Creek"){

            let bctax = 1.010860;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(1.010860+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

          $("#bcvalue").on("keyup", function(){ 
            let bctax = 1.010860;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(1.010860+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          });

          }else if (bccity === "Delta"){

            let bctax = 0.431611;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.431611+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

          $("#bcvalue").on("keyup", function(){
            let bctax = 0.431611;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.431611+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          });

          }else if (bccity === "Fort St. John"){

            let bctax = 0.897570;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.897570 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

          $("#bcvalue").on("keyup", function(){     

            let bctax = 0.897570;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.897570 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
           
          });  

          }else if (bccity === "Kamloops"){

            let bctax = 0.603820;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.603820 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

          $("#bcvalue").on("keyup", function(){     
            let bctax = 0.603820;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.603820 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          });

          }else if (bccity === "Kelowna"){

            let bctax = 0.432640;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.432640 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

          $("#bcvalue").on("keyup", function(){   
            let bctax = 0.432640;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.432640 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          });

          }else if (bccity === "Lake Country"){

            let bctax = 0.407640;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.407640 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

          $("#bcvalue").on("keyup", function(){   
            let bctax = 0.407640;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.407640 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          });

          }else if (bccity === "Langford"){

            let bctax = 0.407406;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.407406 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

          $("#bcvalue").on("keyup", function(){  
            let bctax = 0.407406;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.407406 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          });

          }else if (bccity === "Langley"){

            let bctax = 0.309398;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.309398 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

          $("#bcvalue").on("keyup", function(){ 
              let bctax = 0.309398;   
              let bcvalue = $("#bcvalue").val();
              let bcbctaxrat = $(".bctax_rate").html(0.309398 +" %");
              let bctotal = ((bcvalue * bctax) / 100).toFixed();
             $(".ass_result").html("$"+thousands_separe(bctotal)); 
           });

          }else if (bccity === "Maple Ridge"){

            let bctax = 0.380980;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.380980 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

          $("#bcvalue").on("keyup", function(){  
            let bctax = 0.380980;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.380980 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          });

          }else if (bccity === "Mission"){

             let bctax = 0.381394;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.381394 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

          $("#bcvalue").on("keyup", function(){ 
            let bctax = 0.381394;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.381394 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          });

          }else if (bccity === "Nanaimo"){

            let bctax = 0.600870;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.600870 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

          $("#bcvalue").on("keyup", function(){
            let bctax = 0.600870;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.600870 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          });

          }else if (bccity === "Nelson"){

            let bctax = 0.590700;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.590700 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

          $("#bcvalue").on("keyup", function(){
            let bctax = 0.590700;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.590700 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          });

          }else if (bccity === "New Westminster"){

           let bctax = 0.404045;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.404045 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

          $("#bcvalue").on("keyup", function(){    
            let bctax = 0.404045;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.404045 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          });          
          
          }else if (bccity === "North Saanich"){


            let bctax = 0.257700;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.257700 +" %");
           let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax = 0.257700;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.257700 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          
           });  

          }else if (bccity === "North Vancouver"){

            let bctax = 0.287580;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.287580+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax =0.287580;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.287580 +" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          
           });

          }else if (bccity === "Parksville"){

            let bctax = 0.531110;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.531110+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax =0.531110;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.531110+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          
           });

          }else if (bccity === "Penticton"){

            let bctax =0.490980;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.490980+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax =0.490980;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.490980+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          
           });

          }else if (bccity === "Pitt Meadows"){

            let bctax =0.382420;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.382420+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax =0.382420;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.382420+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          
           });

          }else if (bccity === "Powell River"){

            let bctax =0.671150;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.671150+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax =0.671150;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.671150+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          
           });

          }else if (bccity === "Prince George"){

            let bctax =0.892134;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.892134+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax =0.892134;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.892134+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          
           });

          }else if (bccity === "Prince Rupert"){

            let bctax =0.699843;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.699843+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax =0.699843;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.699843+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          
           });

          }else if (bccity === "Richmond"){

            let bctax =0.296552;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.296552+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax =0.296552;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.296552+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          
           });

          }else if (bccity === "Saanich"){

            let bctax =0.431718;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.431718+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax =0.431718;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.431718+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          
           });


          }else if (bccity === "Salmon Arm"){

            let bctax =0.660350;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.660350+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax =0.660350;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.660350+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          
           });

          } else if (bccity === "Sidney"){

            let bctax =0.383752;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.383752+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax =0.383752;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.383752+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          
           });


          }else if (bccity === "Sidney"){

            let bctax =0.413182;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.413182+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax =0.413182;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.413182+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          
           });

          }else if (bccity === "Squamish"){

            let bctax =0.346880;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.346880+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax = 0.346880;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.346880+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          
           });

          }else if (bccity === "Surrey"){

            let bctax =0.280324;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.280324+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax =0.280324;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.280324+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          
           });

          }else if (bccity === "Vernon"){

            let bctax =0.481000;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.481000+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax =0.481000;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.481000+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 
          
           });

          }else if (bccity === "Vancouver"){

            let bctax = 0.269293;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.269293+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
           $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax = 0.269293;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.269293+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(bctotal)); 
          
           });

          }else if (bccity === "Victoria"){

            let bctax =0.449150;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.449150+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax =0.449150;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.449150+" %");
           let bctotal = ((bcvalue * bctax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(bctotal));         
          
           });

          }else if (bccity === "View Royal"){

            let bctax = 0.359040;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.359040+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax =0.359040;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.359040+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(bctotal));           
          
           });

          }else if (bccity === "West Kelowna"){

            let bctax =0.428770;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.428770+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(bctotal));   

           $("#bcvalue").on("keyup", function(){   

            let bctax =0.428770;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.428770+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(bctotal));        
          
           });

          }else if (bccity === "Whistler"){

            let bctax =0.235900;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.235900+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax =0.235900;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.235900+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(bctotal));           
          
           });

          }else if (bccity === "White Rock"){

            let bctax =0.356977;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.356977+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax =0.356977;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.356977+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(bctotal));            
          
           });

          }else if (bccity === "Williams Lake"){

            let bctax =0.423475;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.423475+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(bctotal)); 

           $("#bcvalue").on("keyup", function(){   

            let bctax =0.423475;   
            let bcvalue = $("#bcvalue").val();
            let bcbctaxrat = $(".bctax_rate").html(0.423475+" %");
            let bctotal = ((bcvalue * bctax) / 100).toFixed();
            $(".ass_result").html("$"+thousands_separe(bctotal));          
          
           });

          }                         

       });
   });


/*=============*/


$(document).ready(function(){

      $("#bcassval").keypress(function (num) {    
                let numberFor = (num.what) ? num.what : event.keyCode    
                if (String.fromCharCode(numberFor).match(/[^0-9]/g))    
                    return false;  
                                          
       });

 $("#bcassval").on("keyup", function(){  
   let bcastax = 0.385161;
   let bcassval = $("#bcassval").val();  
   $(".bceasff_rate").html(0.385161+" %");  
   let bcastotal = ((bcassval * bcastax) / 100).toFixed();
   $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));  

});  

      $("#bcascity").on("change", function(){ 
       let bcascity = $(this).val();

          if (bcascity === "Abbotsford"){

            let bcastax =0.385161;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.385161 +" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.385161;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.385161+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

       } else if(bcascity === "Burnaby"){

            let bcastax =0.284280;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.284280+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.284280;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.284280+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });
      }else if(bcascity === "Campbell River"){

            let bcastax =0.6366;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.6366+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.6366;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.6366+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "Central Saanich"){

            let bcastax =0.3763;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.3763+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.3763;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.3763+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "Comox"){

            let bcastax =0.3462;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.3462+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.3462;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.3462+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if (bcascity === "Chilliwack") {

            let bcastax = 0.4225;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.4225 +" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+thousands_separe(bcastotal));       

        $("#bcassval").on("keyup", function(){  
            let bcastax = 0.4225;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.4225 +" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+thousands_separe(bcastotal));           
          
          });

          }else if(bcascity === "Coquitlam"){

            let bcastax =0.4131;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.4131+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.4131;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.4131+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "Courtenay"){

            let bcastax =0.6110;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.6110+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.6110;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.6110+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "Delta"){

            let bcastax =0.3763;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.3763+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.3763;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.3763+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "Kelowna"){

            let bcastax =0.4767;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.4767+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.4767;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.4767+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "Langford"){

            let bcastax =0.3966;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.3966+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.3966;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.3966+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "Langley"){

            let bcastax =0.4609;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.4609+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.4609;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.4609+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "Maple Ridge"){

            let bcastax =0.5522;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.5522+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.5522;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.5522+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "Mission"){

            let bcastax =0.4281;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.4281+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.4281;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.4281+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "Nanaimo"){

            let bcastax =0.5441;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.5441+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.5441;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.5441+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "New Westminster"){

            let bcastax =0.3887;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.3887+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.3887;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.3887+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "North Cowichan"){

            let bcastax =0.5923;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.5923+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.5923;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.5923+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "North Saanich"){

            let bcastax =0.3189;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.3189 ;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.3189+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "North Vancouver"){

            let bcastax =0.2977;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.2977+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.2977;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.2977+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "Parksville"){

            let bcastax =0.2724;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.2724+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.2724;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.2724+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "Richmond"){

            let bcastax =0.2950;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.2950+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.2950;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.2950+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "Saanich"){

            let bcastax =0.3668;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.3668+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.3668;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.3668+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "Sidney"){

            let bcastax =0.3725;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.3725+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.3725;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.3725+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "Sooke"){

            let bcastax =0.1883;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.1883+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.1883;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.1883+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "Squamish"){

            let bcastax =0.3633;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.3633+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.3633;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.3633+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "Surrey"){

            let bcastax =0.3768;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.3768+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.3768;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.3768+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "Vancouver"){

            let bcastax =0.2585;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.2585+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.2585;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.2585+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "Victoria"){

            let bcastax =0.4424;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.4424+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.4424;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.4424+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "View Royal"){

            let bcastax =0.3252;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.3252+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.3252;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.3252+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "Whistler"){

            let bcastax =0.4003;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.4003+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.4003;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.4003+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }else if(bcascity === "White Rock"){

            let bcastax =0.4164;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.4164+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));    

           $("#bcassval").on("keyup", function(){   

            let bcastax =0.4164;   
            let bcassval = $("#bcassval").val();
            $(".bceasff_rate").html(0.4164+" %");
            let bcastotal = ((bcassval * bcastax) / 100).toFixed();
            $(".bceasff_pro").html("$"+ thousands_separe(bcastotal));            
          
           });

        }

   });  

});       



 /* =================================== 

            Monitoba Property

   ===================================*/



$(document).ready(function(){

  $("#movalue").keypress(function (num) {    
      let numberFor = (num.what) ? num.what : event.keyCode    
      if (String.fromCharCode(numberFor).match(/[^0-9]/g))    
          return false;  
                                          
       });

 $("#movalue").on("keyup", function(){  

   let motax = 3.014500;
   let movalue = $("#movalue").val();  
   $(".motax_rate").html(3.014500+" %");  
   let mototal = ((movalue * motax) / 100).toFixed();
   $(".moresult").html("$"+ thousands_separe(mototal));  

 });  


$("#mocity").on("change", function(){ 
         let mocity = $(this).val();
         
         if(mocity === "Brandon") {

             let motax =3.014500;
             let movalue = $("#movalue").val();  
             $(".motax_rate").html(3.014500+" %"); 
             let mototal = ((movalue * motax) / 100).toFixed();
             $(".moresult").html("$"+ thousands_separe(mototal));  

          $("#movalue").on("keyup", function(){  
             let motax = 3.014500;
             let movalue = $("#movalue").val();  
             $(".motax_rate").html(3.014500+" %");  
             let mototal = ((movalue * motax) / 100).toFixed();
             $(".moresult").html("$"+thousands_separe(mototal)); 
          }); 
           
          }else if(mocity === "Portage la Prairie") {

             let motax = 3.287500;
             let movalue = $("#movalue").val();  
             $(".motax_rate").html(3.287500+" %"); 
             let mototal = ((movalue * motax) / 100).toFixed();
             $(".moresult").html("$"+ thousands_separe(mototal));  

          $("#movalue").on("keyup", function(){  
             let motax = 3.287500;
             let movalue = $("#movalue").val();  
             $(".motax_rate").html(3.287500+" %");  
             let mototal = ((movalue * motax) / 100).toFixed();
             $(".moresult").html("$"+thousands_separe(mototal)); 
          }); 

         }else if(mocity === "Selkirk") {

             let motax = 3.724400;
             let movalue = $("#movalue").val();  
             $(".motax_rate").html(3.724400+" %"); 
             let mototal = ((movalue * motax) / 100).toFixed();
             $(".moresult").html("$"+ thousands_separe(mototal));  

          $("#movalue").on("keyup", function(){  
             let motax = 3.724400;
             let movalue = $("#movalue").val();  
             $(".motax_rate").html(3.724400+" %");  
             let mototal = ((movalue * motax) / 100).toFixed();
             $(".moresult").html("$"+thousands_separe(mototal)); 
          }); 

         }else if(mocity === "Steinbach") {

             let motax = 2.783000;
             let movalue = $("#movalue").val();  
             $(".motax_rate").html(2.783000+" %"); 
             let mototal = ((movalue * motax) / 100).toFixed();
             $(".moresult").html("$"+ thousands_separe(mototal));  

          $("#movalue").on("keyup", function(){  
             let motax = 2.783000;
             let movalue = $("#movalue").val();  
             $(".motax_rate").html(2.783000+" %");  
             let mototal = ((movalue * motax) / 100).toFixed();
             $(".moresult").html("$"+thousands_separe(mototal)); 
          }); 

         }else if(mocity === "Winnipeg") {

             let motax = 2.801500;
             let movalue = $("#movalue").val();  
             $(".motax_rate").html(2.801500+" %"); 
             let mototal = ((movalue * motax) / 100).toFixed();
             $(".moresult").html("$"+ thousands_separe(mototal));  

          $("#movalue").on("keyup", function(){  
             let motax = 2.801500;
             let movalue = $("#movalue").val();  
             $(".motax_rate").html(2.801500+" %");  
             let mototal = ((movalue * motax) / 100).toFixed();
             $(".moresult").html("$"+thousands_separe(mototal)); 
          }); 

         }

       });
   });


/*=============*/


$(document).ready(function(){

    $("#mossval").keypress(function (num) {    
      let numberFor = (num.what) ? num.what : event.keyCode    
      if (String.fromCharCode(numberFor).match(/[^0-9]/g))    
          return false;  
                                          
       });

 $("#mossval").on("keyup", function(){  
   let moastax = 1.3542;
   let mossval = $("#mossval").val();  
   $(".moasff_rate").html(1.3542+" %");  
   let moastotal = ((mossval * moastax) / 100).toFixed();
   $(".moasff_pro").html("$"+ thousands_separe(moastotal));  

});  
  console.log($("#mossval").val());

      $("#moascity").on("change", function(){ 
       let moascity = $(this).val();

          if (moascity === "Brandon"){

              let moastax =1.3542;   
              let mossval = $("#mossval").val();
              $(".moasff_rate").html(1.3542+" %");
              let moastotal = ((mossval * moastax) / 100).toFixed();
              $(".moasff_pro").html("$"+ thousands_separe(moastotal));    

             $("#mossval").on("keyup", function(){   

              let moastax =1.3542;   
              let mossval = $("#mossval").val();
              $(".moasff_rate").html(1.3542+" %");
              let moastotal = ((mossval * moastax) / 100).toFixed();
              $(".moasff_pro").html("$"+ thousands_separe(moastotal));            
          
           });

          }else if(moascity === "Steinbach"){
 
              let moastax =0.8564;   
              let mossval = $("#mossval").val();
              $(".moasff_rate").html(0.8564+" %");
              let moastotal = ((mossval * moastax) / 100).toFixed();
              $(".moasff_pro").html("$"+ thousands_separe(moastotal));

              console.log(moastax);    

             $("#mossval").on("keyup", function(){   

              let moastax =0.8564;   
              let mossval = $("#mossval").val();
              $(".moasff_rate").html(0.8564+" %");
              let moastotal = ((mossval * moastax) / 100).toFixed();
              $(".moasff_pro").html("$"+ thousands_separe(moastotal));            
          
           });

          }else if(moascity === "Winnipeg"){

              let moastax =1.1657;   
              let mossval = $("#mossval").val();
              $(".moasff_rate").html(1.1657+" %");
              let moastotal = ((mossval * moastax) / 100).toFixed();
              $(".moasff_pro").html("$"+ thousands_separe(moastotal));    

              $("#mossval").on("keyup", function(){   

              let moastax =1.1657;   
              let mossval = $("#mossval").val();
              $(".moasff_rate").html(1.1657+" %");
              let moastotal = ((mossval * moastax) / 100).toFixed();
              $(".moasff_pro").html("$"+ thousands_separe(moastotal));            
          
           });

       }
   });  

});       


/*==================== 

    Ontario 

===================*/


$(document).ready(function(){

     $("#otvalue").keypress(function (num) {    
      let numberFor = (num.what) ? num.what : event.keyCode    
      if (String.fromCharCode(numberFor).match(/[^0-9]/g))    
          return false;  
     });  

 $("#otvalue").on("keyup", function(){  

   let ottax =1.116443;
   let otvalue = $("#otvalue").val();  
   $(".ottax_rate").html(1.116443+" %");  
   let ottotal = ((otvalue * ottax) / 100).toFixed();
   $(".otresult").html("$"+ thousands_separe(ottotal));  

 });  


$("#otcity").on("change", function(){ 
         let otcity = $(this).val();
         
           if(otcity === "Ajax") {

            let ottax = 1.116443;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.116443+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.116443;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.116443+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Aurora") {

            let ottax =0.780072;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.780072+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =0.780072;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.780072+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Barrie") {

            let ottax =1.254822;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.254822+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.254822;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.254822+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Belleville") {

            let ottax =1.698213;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.698213+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.698213;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.698213+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Brampton") {

            let ottax =0.980781;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.980781+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =0.980781;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.980781+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Brant") {

            let ottax =1.008560;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.008560+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.008560;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.008560+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Brantford") {

            let ottax =1.357725;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.357725+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.357725;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.357725+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Brock") {

            let ottax =1.232517;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.232517+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.232517;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.232517+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Brockville") {

            let ottax =1.232517;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.232517 +" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.232517 ;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.232517 +" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Burlington") {

            let ottax =0.779583;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.779583+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =0.779583;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.779583+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Caledon") {

            let ottax =0.821184;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.821184+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =0.821184;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.821184+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Cambridge") {

            let ottax =1.232580;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.232580+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.232580;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.232580+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Clarence-Rockland") {

            let ottax =1.289282;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.289282+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.289282;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.289282+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Clarington") {

            let ottax =1.174555;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.174555+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.174555;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.174555+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Cornwall") {

            let ottax =1.718320;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.718320+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.718320;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.718320+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "East Gwillimbury") {

            let ottax =0.794655;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.794655+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =0.794655;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.794655+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Georgina") {

            let ottax =1.019730;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.019730+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.019730;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.019730+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Greater Sudbury") {

            let ottax =1.590309;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.590309+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.590309;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.590309+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Guelph") {

            let ottax =1.183713;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.183713+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.183713;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.183713+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Haldimand County") {

            let ottax =1.224587;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.224587+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.224587;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.224587+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Halton Hills") {

            let ottax =0.818301 ;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.818301 +" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =0.818301 ;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.818301 +" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Hamilton") {

            let ottax =1.245249;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.245249+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.245249;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.245249+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Kawartha Lakes") {

            let ottax =0.800620;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.800620+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =0.800620;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.800620+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Kenora") {

            let ottax =1.300000;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.300000+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.300000;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.300000+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "King") {

            let ottax =0.800620;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.800620+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =0.800620;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.800620+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Kingston") {

            let ottax =1.399366;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.399366+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.399366;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.399366+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Kitchener") {

            let ottax =1.141122;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.141122+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.141122;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.141122+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "London") {

            let ottax =1.422308;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.422308+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.422308;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.422308+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Markham") {

            let ottax =0.645017;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.645017+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =0.645017;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.645017+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Milton") {

            let ottax =0.703456;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.703456+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =0.703456;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.703456+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Mississauga") {

            let ottax =0.829738;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.829738+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =0.829738;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.829738+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Newmarket") {

            let ottax =0.810628;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.810628+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =0.810628;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.810628+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Niagara Falls") {

            let ottax =1.346015;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.346015+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.346015;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.346015+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Oakville") {

            let ottax =0.732324;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.732324+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =0.732324;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.732324+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Orillia") {

            let ottax =1.422831;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.422831+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.422831;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.422831+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Oshawa") {

            let ottax =1.325625;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.325625+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.325625;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.325625+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Ottawa") {

            let ottax =1.144565;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.144565+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.144565;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.144565+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Owen Sound") {

            let ottax =1.813522;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.813522+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.813522;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.813522+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Pembroke") {

            let ottax =1.630294;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.630294+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.630294;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.630294+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Peterborough") {

            let ottax =1.491444;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.491444+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.491444;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.491444+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Pickering") {

            let ottax =1.101191 ;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.101191 +" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.101191 ;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.101191 +" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Port Colborne") {

            let ottax =1.832922;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.832922+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.832922;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.832922+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Prince Edward County") {

            let ottax =1.096210;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.096210+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.096210;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.096210+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Quinte West") {

            let ottax =1.427285;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.427285+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.427285;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.427285+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Richmond Hill") {

            let ottax =0.670650;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.670650+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =0.670650;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.670650+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Sault Ste. Marie") {

            let ottax =1.648575;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.648575+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.648575;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.648575+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Scugog") {

            let ottax =1.116235;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.116235+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.116235;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.116235+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "St. Catharines") {

            let ottax =1.415405;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.415405+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.415405;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.415405+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Stratford") {

            let ottax =1.435359;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.435359+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.435359;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.435359+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "St. Thomas") {

            let ottax =1.587802;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.587802+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.587802;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.587802+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Temiskaming Shores") {

            let ottax =1.156980;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.156980+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.156980;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.156980+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Thorold") {

            let ottax =1.463808;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.463808+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.463808;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.463808+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Thunder Bay") {

            let ottax =1.634104;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.634104+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.634104;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.634104+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Timmins") {

            let ottax =1.888782;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.888782+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.888782;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.888782+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Toronto") {

            let ottax =0.631933;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.631933+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =0.631933;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.631933+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Uxbridge") {

            let ottax =1.062769;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.062769+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.062769;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.062769+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Vaughan") {

            let ottax =0.682784;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.682784+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =0.682784;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.682784+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Waterloo") {

            let ottax =1.131785;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.131785+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.131785;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.131785+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Welland") {

            let ottax =1.663568;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.663568+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.663568;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.663568+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Whitby") {

            let ottax =1.147078;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.147078+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.147078;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.147078+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Whitchurch-Stouffville") {

            let ottax =0.744035 ;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.744035+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =0.744035;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(0.744035+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Windsor") {

            let ottax =1.853760;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.853760+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.853760;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.853760+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }else if(otcity === "Woodstock") {

            let ottax =1.530585;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.530585+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 

            $("#otvalue").on("keyup", function(){  
            let ottax =1.530585;
            let otvalue = $("#otvalue").val();  
            $(".ottax_rate").html(1.530585+" %");  
            let ottotal = ((otvalue * ottax) / 100).toFixed();
            $(".otresult").html("$"+ thousands_separe(ottotal)); 
          }); 
                
       }
   });  

});       


/*======================*/

$(document).ready(function(){

      $("#otssval").keypress(function (num) {    
      let numberFor = (num.what) ? num.what : event.keyCode    
      if (String.fromCharCode(numberFor).match(/[^0-9]/g))    
          return false;  
                                          
       });

 $("#otssval").on("keyup", function(){  

   let otastax =0.5844;
   let otasvalue = $("#otssval").val();  
   $(".otasff_rate").html(0.5844+" %");  
   let otastotal = ((otasvalue * otastax) / 100).toFixed();
   $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

 });  

   $("#otascity").on("change", function(){ 
         let otascity = $(this).val();
         
           if(otascity === "Ajax") {

            let otastax =0.5844;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.5844+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.5844;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.5844+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

           }else if(otascity === "Aurora") {

            let otastax =0.4768;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.4768+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.4768;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.4768+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

           }else if(otascity === "Barrie") {

            let otastax =0.7346;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.7346+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.7346;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.7346+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Belleville") {

            let otastax =0.7674;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.7674+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.7674;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.7674+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Brampton") {

            let otastax =0.4581;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.4581+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.4581;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.4581+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Brant") {

            let otastax =0.5189;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.5189+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.5189;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.5189+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Brantford") {

            let otastax =0.5407;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.5407+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.5407;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.5407+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Brock") {

            let otastax =0.4926;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.4926+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.4926;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.4926+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Brockville") {

            let otastax =1.3166;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(1.3166+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =1.3166;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(1.3166+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Burlington") {

            let otastax =0.4262;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.4262+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.4262;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.4262+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Caledon") {

            let otastax =0.5197;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.5197 +" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.5197;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.5197 +" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Cambridge") {

            let otastax =0.6409;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.6409+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.6409;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.6409+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Clarence-Rockland") {

            let otastax =0.5652;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.5652+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.5652;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.5652+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Clarington") {

            let otastax =0.5538;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.5538+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.5538;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.5538+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Cornwall") {

            let otastax =1.2313;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(1.2313+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =1.2313;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(1.2313+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "East Gwillimbury") {

            let otastax =0.4341;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.4341+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.4341;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.4341+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Elliot Lake") {

            let otastax =0.6626;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.6626+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.6626;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.6626+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Georgina") {

            let otastax =0.4180;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.4180+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.4180;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.4180+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Greater Sudbury") {

            let otastax =1.0083;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(1.0083+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =1.0083;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(1.0083+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Guelph") {

            let otastax =0.6129;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.6129+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.6129;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.6129+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Haldimand County") {

            let otastax =0.3687;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.3687+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.3687;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.3687+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Halton Hills") {

            let otastax =0.4298;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.4298+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.4298;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.4298+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Hamilton") {

            let otastax =0.6470;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.6470+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.6470;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.6470+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Kawartha Lakes") {

            let otastax =0.7854;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.7854+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.7854;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.7854+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "King") {

            let otastax =0.5238;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.5238+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.5238;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.5238+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Kingston") {

            let otastax =0.7977;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.7977+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.7977;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.7977+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Kitchener") {

            let otastax =0.6145;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.6145+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.6145;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.6145+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "London") {

            let otastax =0.5107;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.5107+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.5107;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.5107+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Markham") {

            let otastax =0.3636 ;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.3636 +" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.3636 ;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.3636+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Milton") {

            let otastax =0.3276 ;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.3276 +" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.3276 ;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.3276 +" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Mississauga") {

            let otastax =0.4070;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.4070+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.4070;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.4070+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Newmarket") {

            let otastax =0.4140;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.4140+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.4140;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.4140+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Niagara Falls") {

            let otastax =0.5430;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.5430+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.5430;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.5430+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "North Bay") {

            let otastax =0.8651;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.8651+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.8651;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.8651+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Oakville") {

            let otastax =0.3863;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.3863+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.3863;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.3863+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Orillia") {

            let otastax =0.6994;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.6994+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.6994;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.6994+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Oshawa") {

            let otastax =0.9539;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.9539+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.9539;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.9539+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Ottawa") {

            let otastax =0.7707;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.7707+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.7707;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.7707+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Owen Sound") {

            let otastax =0.9367;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.9367+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.9367;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.9367+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Pembroke") {

            let otastax =1.5180;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(1.5180+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =1.5180;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(1.5180+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Peterborough") {

            let otastax =0.7388;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.7388+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.7388;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.7388+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Pickering") {

            let otastax =0.5712;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.5712+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.5712;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.5712+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Port Colborne") {

            let otastax =0.3935;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.3935+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.3935;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.3935+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Prince Edward County") {

            let otastax =0.4763;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.4763+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.4763;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.4763+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Quinte West") {

            let otastax =0.5454;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.5454+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.5454;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.5454+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Richmond Hill") {

            let otastax =0.3718;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.3718+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.3718;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.3718+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Sarnia") {

            let otastax =0.5118;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.5118+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.5118;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Sault Ste. Marie") {

            let otastax =0.8052;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.8052+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.8052;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.8052+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Scugog") {

            let otastax =0.5031;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.5031+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.5031;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.5031+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "St. Catharines") {

            let otastax =0.5804;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.5804+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.5804;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.5804+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "St. Thomas") {

            let otastax =0.4734;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.4734+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.4734;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.4734+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Stratford") {

            let otastax =0.6991;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.6991+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.6991;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.6991+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Temiskaming Shores") {

            let otastax =1.2629;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(1.2629+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =1.2629;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(1.2629+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Thorold") {

            let otastax =0.5352;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.5352+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.5352;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.5352+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Timmins") {

            let otastax =1.1928;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(1.1928+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =1.1928;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(1.1928+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Toronto") {

            let otastax =0.3447;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.3447+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.3447;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.3447+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Uxbridge") {

            let otastax =0.5126;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.5126+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.5126;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.5126+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Vaughan") {

            let otastax =0.3969;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.3969+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.3969;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.3969+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Waterloo") {

            let otastax =0.6742;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.6742+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.6742;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.6742+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Welland") {

            let otastax =0.6090;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.6090+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.6090;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.6090+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Whitby") {

            let otastax =0.6440;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.6440+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.6440;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.6440+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Whitchurch-Stouffville") {

            let otastax =0.4409;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.4409+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.4409;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.4409+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Windsor") {

            let otastax =0.8654;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.8654+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.8654;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.8654+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }else if(otascity === "Woodstock") {

            let otastax =0.5156;
            let otasvalue = $("#otssval").val();  
            $(".otasff_rate").html(0.5156+" %");  
            let otastotal = ((otasvalue * otastax) / 100).toFixed();
            $(".otasff_pro").html("$"+ thousands_separe(otastotal));        

            $("#otssval").on("keyup", function(){  

           let otastax =0.5156;
           let otasvalue = $("#otssval").val();  
           $(".otasff_rate").html(0.5156+" %");  
           let otastotal = ((otasvalue * otastax) / 100).toFixed();
           $(".otasff_pro").html("$"+ thousands_separe(otastotal));  

           });  

        }                                 


     });

   });  


 /* ============== 

    Quebec 

  =============*/

$(document).ready(function(){

    $("#qpvalue").keypress(function (num) {    
      let numberFor = (num.what) ? num.what : event.keyCode    
      if (String.fromCharCode(numberFor).match(/[^0-9]/g))    
     return false;  
   
    });

 $("#qpvalue").on("keyup", function(){  

   let qptax = 0.71927;
   let qpvalue = $("#qpvalue").val();  
   $(".qptax_rate").html(0.71927+" %");  
   let qptotal = ((qpvalue * qptax) / 100).toFixed();
   $(".qpresult").html("$"+ thousands_separe(qptotal));  

 });  


$("#qpcity").on("change", function(){ 
         let qpcity = $(this).val();
         
         if(qpcity === "Alma") {

            let qptax =0.902400 ;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.902400 +" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.902400 ;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.902400 +" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Baie-Comeau") {

            let qptax =1.912400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.912400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =1.912400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.912400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Beloeil") {

            let qptax =0.819600;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.819600+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.819600;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.819600+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Blainville") {

            let qptax =0.582400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.582400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.582400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.582400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Boisbriand") {

            let qptax =0.850000;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.850000+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.850000;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.850000+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Brossard") {

            let qptax =0.697200;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.697200+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.697200;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.697200+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Candiac") {

            let qptax =0.664000;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.664000;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.664000+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Chateauguay") {

            let qptax =0.878600;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.878600+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.878600;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.878600+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Cote Saint-Luc") {

            let qptax =1.126500;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.126500+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =1.126500;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.126500+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Dollard-des-Ormeaux") {

            let qptax =0.985400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.985400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.985400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.985400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Gatineau") {

            let qptax =0.970700;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.970700+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.970700;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.970700+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Granby") {

            let qptax =0.863900;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.863900+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.863900;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.863900+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Kirkland") {

            let qptax =0.818400 ;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.818400 +" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.818400 ;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.818400 +" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "La Prairie") {

            let qptax =0.739580;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.739580+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.739580;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.739580+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "L'Assomption") {

            let qptax =0.843800;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.843800+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.843800;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.843800+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Laval") {

            let qptax =0.846200;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.846200+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.846200;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.846200+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Lévis") {

            let qptax =0.899500;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.899500+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.899500;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.899500+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Longueuil") {

            let qptax =1.003300;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.003300+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =1.003300;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.003300+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Magog") {

            let qptax =0.775400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.775400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.775400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.775400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Mascouche") {

            let qptax =0.917900;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.917900+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.917900;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.917900+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Mirabel") {

            let qptax =0.571400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.571400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.571400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.571400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Montreal") {

            let qptax =0.673600;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.673600+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.673600;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.673600+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Mont-Royal") {

            let qptax =0.735000;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.735000+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.735000;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.735000+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Pointe-Claire") {

            let qptax =0.910400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.910400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.910400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.910400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Québec City") {

            let qptax =1.004800;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.004800+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =1.004800;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.004800+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Repentigny") {

            let qptax =0.647400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.647400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.647400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.647400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Rimouski") {

            let qptax =1.108400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.108400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =1.108400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.108400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Saguenay") {

            let qptax =1.632400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.632400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =1.632400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.632400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Saint-Bruno-de-Montarville") {

            let qptax =0.619375;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.619375+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.619375;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.619375+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Saint-Constant") {

            let qptax =0.778600 ;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.778600 +" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.778600 ;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.778600 +" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Sainte-Julie") {

            let qptax =0.683600;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.683600+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.683600;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.683600 +" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Saint-Eustache") {

            let qptax =0.667500;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.667500+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.667500;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.667500+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Saint-Hyacinthe") {

            let qptax =0.792300;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.792300+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.792300;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.792300+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Saint-Jean-sur-Richelieu") {

            let qptax =0.739500;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.739500+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.739500;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.739500+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Saint-Jerome") {

            let qptax =1.020400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.020400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =1.020400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.020400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Saint-Lambert") {

            let qptax =0.942100;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.942100+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.942100 ;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.942100+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Saint-Lin-Laurentides") {

            let qptax =0.459200;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.459200+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.459200;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.459200+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Salaberry-de-Valleyfield") {

            let qptax =0.938500;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.938500+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.938500;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.938500+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Sept-Iles") {

            let qptax =1.150000;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.150000+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =1.150000;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.150000+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Sherbrooke") {

            let qptax =1.082300;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.082300+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =1.082300;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.082300+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Sorel-Tracy") {

            let qptax =1.164750;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.164750+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =1.164750;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.164750+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Terrebonne") {

            let qptax =0.935300;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.935300+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.935300;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.935300+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Thetford Mines") {

            let qptax =1.312400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.312400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =1.312400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.312400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Trois-Rivières") {

            let qptax =1.265000;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.265000+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =1.265000;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.265000+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Val-d'Or") {

            let qptax =0.519400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.519400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.519400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.519400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Varennes") {

            let qptax =0.570000;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.570000+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.570000;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.570000+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Vaudreuil-Dorion") {

            let qptax =0.614000;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.614000+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.614000;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.614000+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Victoriaville") {

            let qptax =1.382400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.382400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =1.382400;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(1.382400+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }else if(qpcity === "Westmount") {

            let qptax =0.848300;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.848300+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));

          $("#qpvalue").on("keyup", function(){  
            let qptax =0.848300;
            let qpvalue = $("#qpvalue").val();  
            $(".qptax_rate").html(0.848300+" %");  
            let qptotal = ((qpvalue * qptax) / 100).toFixed();
            $(".qpresult").html("$"+ thousands_separe(qptotal));
          }); 
           
          }

       });
   });






/*=============*/


$(document).ready(function(){
  
    $("#pqssval").keypress(function (num) {    
                let numberFor = (num.what) ? num.what : event.keyCode    
                if (String.fromCharCode(numberFor).match(/[^0-9]/g))    
                    return false;  
                                          
       });

 $("#pqssval").on("keyup", function(){  
   let pqastax =0.5209;
   let pqssval = $("#pqssval").val();  
   $(".pqasff_rate").html(0.5209+" %");  
   let pqastotal = ((pqssval * pqastax) / 100).toFixed();
   $(".pqasff_pro").html("$"+ thousands_separe(pqastotal));  

});  
  

      $("#pqascity").on("change", function(){ 
       let pqascity = $(this).val();

          if (pqascity === "Blainville"){

            let pqastax =0.5209;
            let pqssval = $("#pqssval").val();  
            $(".pqasff_rate").html(0.5209+" %");  
            let pqastotal = ((pqssval * pqastax) / 100).toFixed();
            $(".pqasff_pro").html("$"+ thousands_separe(pqastotal));      

             $("#pqssval").on("keyup", function(){   

            let pqastax =0.5209;
            let pqssval = $("#pqssval").val();  
            $(".pqasff_rate").html(0.5209+" %");  
            let pqastotal = ((pqssval * pqastax) / 100).toFixed();
            $(".pqasff_pro").html("$"+ thousands_separe(pqastotal));            
          
           });

         }else if (pqascity === "Brossard"){

            let pqastax =0.4813;
            let pqssval = $("#pqssval").val();  
            $(".pqasff_rate").html(0.4813+" %");  
            let pqastotal = ((pqssval * pqastax) / 100).toFixed();
            $(".pqasff_pro").html("$"+ thousands_separe(pqastotal));      

             $("#pqssval").on("keyup", function(){   

            let pqastax =0.4813;
            let pqssval = $("#pqssval").val();  
            $(".pqasff_rate").html(0.4813+" %");  
            let pqastotal = ((pqssval * pqastax) / 100).toFixed();
            $(".pqasff_pro").html("$"+ thousands_separe(pqastotal));            
          
           });

         }else if (pqascity === "Chateauguay"){

            let pqastax =0.8472;
            let pqssval = $("#pqssval").val();  
            $(".pqasff_rate").html(0.8472+" %");  
            let pqastotal = ((pqssval * pqastax) / 100).toFixed();
            $(".pqasff_pro").html("$"+ thousands_separe(pqastotal));      

             $("#pqssval").on("keyup", function(){   

            let pqastax =0.8472;
            let pqssval = $("#pqssval").val();  
            $(".pqasff_rate").html(0.8472+" %");  
            let pqastotal = ((pqssval * pqastax) / 100).toFixed();
            $(".pqasff_pro").html("$"+ thousands_separe(pqastotal));            
          
           });

         }else if (pqascity === "Gatineau"){

            let pqastax =0.8433;
            let pqssval = $("#pqssval").val();  
            $(".pqasff_rate").html(0.8433+" %");  
            let pqastotal = ((pqssval * pqastax) / 100).toFixed();
            $(".pqasff_pro").html("$"+ thousands_separe(pqastotal));      

             $("#pqssval").on("keyup", function(){   

            let pqastax =0.8433;
            let pqssval = $("#pqssval").val();  
            $(".pqasff_rate").html(0.8433+" %");  
            let pqastotal = ((pqssval * pqastax) / 100).toFixed();
            $(".pqasff_pro").html("$"+ thousands_separe(pqastotal));            
          
           });

         }else if (pqascity === "Laval"){

            let pqastax =0.7604;
            let pqssval = $("#pqssval").val();  
            $(".pqasff_rate").html(0.7604+" %");  
            let pqastotal = ((pqssval * pqastax) / 100).toFixed();
            $(".pqasff_pro").html("$"+ thousands_separe(pqastotal));      

             $("#pqssval").on("keyup", function(){   

            let pqastax =0.7604;
            let pqssval = $("#pqssval").val();  
            $(".pqasff_rate").html(0.7604+" %");  
            let pqastotal = ((pqssval * pqastax) / 100).toFixed();
            $(".pqasff_pro").html("$"+ thousands_separe(pqastotal));            
          
           });

         }else if (pqascity === "Longueuil"){

            let pqastax =1.1190;
            let pqssval = $("#pqssval").val();  
            $(".pqasff_rate").html(1.1190+" %");  
            let pqastotal = ((pqssval * pqastax) / 100).toFixed();
            $(".pqasff_pro").html("$"+ thousands_separe(pqastotal));      

             $("#pqssval").on("keyup", function(){   

            let pqastax =1.1190;
            let pqssval = $("#pqssval").val();  
            $(".pqasff_rate").html(1.1190+" %");  
            let pqastotal = ((pqssval * pqastax) / 100).toFixed();
            $(".pqasff_pro").html("$"+ thousands_separe(pqastotal));            
          
           });

         }else if (pqascity === "Montreal"){

            let pqastax =0.6650;
            let pqssval = $("#pqssval").val();  
            $(".pqasff_rate").html(0.6650+" %");  
            let pqastotal = ((pqssval * pqastax) / 100).toFixed();
            $(".pqasff_pro").html("$"+ thousands_separe(pqastotal));      

             $("#pqssval").on("keyup", function(){   

            let pqastax =0.6650;
            let pqssval = $("#pqssval").val();  
            $(".pqasff_rate").html(0.6650+" %");  
            let pqastotal = ((pqssval * pqastax) / 100).toFixed();
            $(".pqasff_pro").html("$"+ thousands_separe(pqastotal));            
          
           });

         }else if (pqascity === "Westmount"){

            let pqastax =0.6851;
            let pqssval = $("#pqssval").val();  
            $(".pqasff_rate").html(0.6851+" %");  
            let pqastotal = ((pqssval * pqastax) / 100).toFixed();
            $(".pqasff_pro").html("$"+ thousands_separe(pqastotal));      

             $("#pqssval").on("keyup", function(){   

            let pqastax =0.6851;
            let pqssval = $("#pqssval").val();  
            $(".pqasff_rate").html(0.6851+" %");  
            let pqastotal = ((pqssval * pqastax) / 100).toFixed();
            $(".pqasff_pro").html("$"+ thousands_separe(pqastotal));            
          
           });

         }
     });  

 });



 /* ============== 

    Saskatchewan Property Tax Calculator 

  =============*/

   

$(document).ready(function(){

    $("#savalue").keypress(function (num) {    
          let numberFor = (num.what) ? num.what : event.keyCode    
          if (String.fromCharCode(numberFor).match(/[^0-9]/g))    
              return false;  
                                          
       });

 $("#savalue").on("keyup", function(){  

   let satax = 1.283600;
   let savalue = $("#savalue").val();  
   $(".satax_rate").html(1.283600+" %");  
   let satotal = ((savalue * satax) / 100).toFixed();
   $(".saresult").html("$"+ thousands_separe(satotal));  

 });  


$("#sacity").on("change", function(){ 
         let sacity = $(this).val();
         
         if(sacity === "Estevan") {

            let satax =1.283600;
            let savalue = $("#savalue").val();  
            $(".satax_rate").html(1.283600+" %");  
            let satotal = ((savalue * satax) / 100).toFixed();
            $(".saresult").html("$"+ thousands_separe(satotal));

          $("#savalue").on("keyup", function(){  
            let satax =1.283600;
            let savalue = $("#savalue").val();  
            $(".satax_rate").html(1.283600+" %");  
            let satotal = ((savalue * satax) / 100).toFixed();
            $(".saresult").html("$"+ thousands_separe(satotal));
          }); 
           
          }else if(sacity === "Moose Jaw") {

            let satax =1.308172;
            let savalue = $("#savalue").val();  
            $(".satax_rate").html(1.308172+" %");  
            let satotal = ((savalue * satax) / 100).toFixed();
            $(".saresult").html("$"+ thousands_separe(satotal));

          $("#savalue").on("keyup", function(){  
            let satax =1.308172;
            let savalue = $("#savalue").val();  
            $(".satax_rate").html(1.308172+" %");  
            let satotal = ((savalue * satax) / 100).toFixed();
            $(".saresult").html("$"+ thousands_separe(satotal));
          }); 
           
          }else if(sacity === "Prince Albert") {

            let satax =1.445466;
            let savalue = $("#savalue").val();  
            $(".satax_rate").html(1.445466+" %");  
            let satotal = ((savalue * satax) / 100).toFixed();
            $(".saresult").html("$"+ thousands_separe(satotal));

          $("#savalue").on("keyup", function(){  
            let satax =1.445466;
            let savalue = $("#savalue").val();  
            $(".satax_rate").html(1.445466+" %");  
            let satotal = ((savalue * satax) / 100).toFixed();
            $(".saresult").html("$"+ thousands_separe(satotal));
          }); 
           
          }else if(sacity === "Regina") {

            let satax =1.423016 ;
            let savalue = $("#savalue").val();  
            $(".satax_rate").html(1.423016 +" %");  
            let satotal = ((savalue * satax) / 100).toFixed();
            $(".saresult").html("$"+ thousands_separe(satotal));

          $("#savalue").on("keyup", function(){  
            let satax =1.423016;
            let savalue = $("#savalue").val();  
            $(".satax_rate").html(1.423016+" %");  
            let satotal = ((savalue * satax) / 100).toFixed();
            $(".saresult").html("$"+ thousands_separe(satotal));
          }); 
           
          }else if(sacity === "Saskatoon") {

            let satax =1.253125 ;
            let savalue = $("#savalue").val();  
            $(".satax_rate").html(1.253125 +" %");  
            let satotal = ((savalue * satax) / 100).toFixed();
            $(".saresult").html("$"+ thousands_separe(satotal));

          $("#savalue").on("keyup", function(){  
            let satax =1.253125;
            let savalue = $("#savalue").val();  
            $(".satax_rate").html(1.253125+" %");  
            let satotal = ((savalue * satax) / 100).toFixed();
            $(".saresult").html("$"+ thousands_separe(satotal));
          }); 
           
          }else if(sacity === "Weyburn") {

            let satax =0.868242;
            let savalue = $("#savalue").val();  
            $(".satax_rate").html(0.868242+" %");  
            let satotal = ((savalue * satax) / 100).toFixed();
            $(".saresult").html("$"+ thousands_separe(satotal));

          $("#savalue").on("keyup", function(){  
            let satax =0.868242;
            let savalue = $("#savalue").val();  
            $(".satax_rate").html(0.868242+" %");  
            let satotal = ((savalue * satax) / 100).toFixed();
            $(".saresult").html("$"+ thousands_separe(satotal));
          }); 
           
          }else if(sacity === "Yorkton") {

            let satax =1.012568;
            let savalue = $("#savalue").val();  
            $(".satax_rate").html(1.012568+" %");  
            let satotal = ((savalue * satax) / 100).toFixed();
            $(".saresult").html("$"+ thousands_separe(satotal));

          $("#savalue").on("keyup", function(){  
            let satax =1.012568;
            let savalue = $("#savalue").val();  
            $(".satax_rate").html(1.012568+" %");  
            let satotal = ((savalue * satax) / 100).toFixed();
            $(".saresult").html("$"+ thousands_separe(satotal));
          }); 
           
          }
     });  

 });       


/*=============================*/



$(document).ready(function(){

    $("#sassval").keypress(function (num) {    
        let numberFor = (num.what) ? num.what : event.keyCode    
        if (String.fromCharCode(numberFor).match(/[^0-9]/g))    
            return false;  
                                        
     });

 $("#sassval").on("keyup", function(){  

   let sasstax = 1.6001;
   let sassvalue = $("#sassval").val();  
   $(".assff_rate").html(1.6001+" %");  
   let sasstotal = ((sassvalue * sasstax) / 100).toFixed();
   $(".assff_pro").html("$"+ thousands_separe(sasstotal));  

 });  


$("#sasscity").on("change", function(){ 
         let sasscity = $(this).val();
         
         if(sasscity === "Estevan") {

            let sasstax =1.6001;
            let sassvalue = $("#sassval").val();  
            $(".assff_rate").html(1.6001+" %");  
            let sasstotal = ((sassvalue * sasstax) / 100).toFixed();
            $(".assff_pro").html("$"+ thousands_separe(sasstotal));

          $("#sassval").on("keyup", function(){  
            let sasstax =1.6001;
            let sassvalue = $("#sassval").val();  
            $(".assff_rate").html(1.6001+" %");  
            let sasstotal = ((sassvalue * sasstax) / 100).toFixed();
            $(".assff_pro").html("$"+ thousands_separe(sasstotal));
          }); 
           
         }else if(sasscity === "Martensville") {

            let sasstax =1.1939;
            let sassvalue = $("#sassval").val();  
            $(".assff_rate").html(1.1939+" %");  
            let satotal = ((sassvalue * sasstax) / 100).toFixed();
            $(".assff_pro").html("$"+ thousands_separe(satotal));

          $("#sassval").on("keyup", function(){  
            let sasstax =1.1939;
            let sassvalue = $("#sassval").val();  
            $(".assff_rate").html(1.1939+" %");  
            let sasstotal = ((sassvalue * sasstax) / 100).toFixed();
            $(".assff_pro").html("$"+ thousands_separe(sasstotal));
          }); 
           
         }else if(sasscity === "Moose Jaw") {

            let sasstax =1.1043;
            let sassvalue = $("#sassval").val();  
            $(".assff_rate").html(1.1043+" %");  
            let satotal = ((sassvalue * sasstax) / 100).toFixed();
            $(".assff_pro").html("$"+ thousands_separe(satotal));

          $("#sassval").on("keyup", function(){  
            let sasstax =1.1043;
            let sassvalue = $("#sassval").val();  
            $(".assff_rate").html(1.1043+" %");  
            let sasstotal = ((sassvalue * sasstax) / 100).toFixed();
            $(".assff_pro").html("$"+ thousands_separe(sasstotal));
          }); 
           
         }else if(sasscity === "Prince Albert") {

            let sasstax =1.1811 ;
            let sassvalue = $("#sassval").val();  
            $(".assff_rate").html(1.1811+" %");  
            let satotal = ((sassvalue * sasstax) / 100).toFixed();
            $(".assff_pro").html("$"+ thousands_separe(satotal));

          $("#sassval").on("keyup", function(){  
            let sasstax =1.1811 ;
            let sassvalue = $("#sassval").val();  
            $(".assff_rate").html(1.1811+" %");  
            let sasstotal = ((sassvalue * sasstax) / 100).toFixed();
            $(".assff_pro").html("$"+ thousands_separe(sasstotal));
          }); 
           
         }else if(sasscity === "Regina") {

            let sasstax =1.1919;
            let sassvalue = $("#sassval").val();  
            $(".assff_rate").html(1.1919+" %");  
            let satotal = ((sassvalue * sasstax) / 100).toFixed();
            $(".assff_pro").html("$"+ thousands_separe(satotal));

          $("#sassval").on("keyup", function(){  
            let sasstax =1.1919;
            let sassvalue = $("#sassval").val();  
            $(".assff_rate").html(1.1919+" %");  
            let sasstotal = ((sassvalue * sasstax) / 100).toFixed();
            $(".assff_pro").html("$"+ thousands_separe(sasstotal));
          }); 
           
         }else if(sasscity === "Saskatoon") {

            let sasstax =0.9212;
            let sassvalue = $("#sassval").val();  
            $(".assff_rate").html(0.9212+" %");  
            let satotal = ((sassvalue * sasstax) / 100).toFixed();
            $(".assff_pro").html("$"+ thousands_separe(satotal));

          $("#sassval").on("keyup", function(){  
            let sasstax =0.9212;
            let sassvalue = $("#sassval").val();  
            $(".assff_rate").html(0.9212+" %");  
            let sasstotal = ((sassvalue * sasstax) / 100).toFixed();
            $(".assff_pro").html("$"+ thousands_separe(sasstotal));
          }); 
           
         }else if(sasscity === "Warman") {

            let sasstax =1.1312 ;
            let sassvalue = $("#sassval").val();  
            $(".assff_rate").html(1.1312 +" %");  
            let satotal = ((sassvalue * sasstax) / 100).toFixed();
            $(".assff_pro").html("$"+ thousands_separe(satotal));

          $("#sassval").on("keyup", function(){  
            let sasstax =1.1312 ;
            let sassvalue = $("#sassval").val();  
            $(".assff_rate").html(1.1312+" %");  
            let sasstotal = ((sassvalue * sasstax) / 100).toFixed();
            $(".assff_pro").html("$"+ thousands_separe(sasstotal));
          }); 
           
         }else if(sasscity === "Weyburn") {

            let sasstax =1.0791;
            let sassvalue = $("#sassval").val();  
            $(".assff_rate").html(1.0791 +" %");  
            let satotal = ((sassvalue * sasstax) / 100).toFixed();
            $(".assff_pro").html("$"+ thousands_separe(satotal));

          $("#sassval").on("keyup", function(){  
            let sasstax =1.0791;
            let sassvalue = $("#sassval").val();  
            $(".assff_rate").html(1.0791+" %");  
            let sasstotal = ((sassvalue * sasstax) / 100).toFixed();
            $(".assff_pro").html("$"+ thousands_separe(sasstotal));
          }); 
           
         }else if(sasscity === "Yorkton") {

            let sasstax =1.4155;
            let sassvalue = $("#sassval").val();  
            $(".assff_rate").html(1.4155+" %");  
            let satotal = ((sassvalue * sasstax) / 100).toFixed();
            $(".assff_pro").html("$"+ thousands_separe(satotal));

          $("#sassval").on("keyup", function(){  
            let sasstax =1.4155;
            let sassvalue = $("#sassval").val();  
            $(".assff_rate").html(1.4155+" %");  
            let sasstotal = ((sassvalue * sasstax) / 100).toFixed();
            $(".assff_pro").html("$"+ thousands_separe(sasstotal));
          }); 
           
         }

     });  

 });



 /* ============== 
 
    Atlantic Canada Property Tax 

  =============*/

$(document).ready(function(){  
 $("#atvalue").on("keyup", function(){  

   let attax =1.670000;
   let atvalue = $("#atvalue").val();  
   $(".attax_rate").html(1.670000+" %");  
   let attotal = ((atvalue * attax) / 100).toFixed();
   $(".at_result").html("$"+ thousands_separe(attotal));  

 });  

$("#atcity").on("change", function(){ 
         let atcity = $(this).val();
         
         if(atcity === "Charlottetown, PE") {

             let attax =1.670000;
             let atvalue = $("#atvalue").val();  
             $(".attax_rate").html(1.670000+" %"); 
             let attotal = ((atvalue * attax) / 100).toFixed();
             $(".at_result").html("$"+ thousands_separe(attotal));  

          $("#atvalue").on("keyup", function(){  
             let attax =1.670000;
             let atvalue = $("#atvalue").val();  
             $(".attax_rate").html(1.670000+" %");  
             let attotal = ((atvalue * attax) / 100).toFixed();
             $(".at_result").html("$"+thousands_separe(attotal)); 
          }); 
           
          }else  if(atcity === "Fredericton, NB") {

             let attax =1.970300;
             let atvalue = $("#atvalue").val();  
             $(".attax_rate").html(1.970300+" %"); 
             let attotal = ((atvalue * attax) / 100).toFixed();
             $(".at_result").html("$"+ thousands_separe(attotal));  

          $("#atvalue").on("keyup", function(){  
             let attax =1.970300;
             let atvalue = $("#atvalue").val();  
             $(".attax_rate").html(1.970300+" %");  
             let attotal = ((atvalue * attax) / 100).toFixed();
             $(".at_result").html("$"+thousands_separe(attotal)); 
          }); 
           
          }else  if(atcity === "Glace Bay, NS") {

             let attax =2.094000;
             let atvalue = $("#atvalue").val();  
             $(".attax_rate").html(2.094000+" %"); 
             let attotal = ((atvalue * attax) / 100).toFixed();
             $(".at_result").html("$"+ thousands_separe(attotal));  

          $("#atvalue").on("keyup", function(){  
             let attax =2.094000;
             let atvalue = $("#atvalue").val();  
             $(".attax_rate").html(2.094000+" %");  
             let attotal = ((atvalue * attax) / 100).toFixed();
             $(".at_result").html("$"+thousands_separe(attotal)); 
          }); 
           
          }else  if(atcity === "Halifax, NS") {

             let attax =1.084000;
             let atvalue = $("#atvalue").val();  
             $(".attax_rate").html(1.084000+" %"); 
             let attotal = ((atvalue * attax) / 100).toFixed();
             $(".at_result").html("$"+ thousands_separe(attotal));  

          $("#atvalue").on("keyup", function(){  
             let attax =1.084000;
             let atvalue = $("#atvalue").val();  
             $(".attax_rate").html(1.084000+" %");  
             let attotal = ((atvalue * attax) / 100).toFixed();
             $(".at_result").html("$"+thousands_separe(attotal)); 
          }); 
           
          }else  if(atcity === "Moncton, NB") {

             let attax =2.108900;
             let atvalue = $("#atvalue").val();  
             $(".attax_rate").html(2.108900+" %"); 
             let attotal = ((atvalue * attax) / 100).toFixed();
             $(".at_result").html("$"+ thousands_separe(attotal));  

          $("#atvalue").on("keyup", function(){  
             let attax =2.108900;
             let atvalue = $("#atvalue").val();  
             $(".attax_rate").html(2.108900+" %");  
             let attotal = ((atvalue * attax) / 100).toFixed();
             $(".at_result").html("$"+thousands_separe(attotal)); 
          }); 
           
          }else  if(atcity === "Quispamsis, NB") {

             let attax =1.878000;
             let atvalue = $("#atvalue").val();  
             $(".attax_rate").html(1.878000+" %"); 
             let attotal = ((atvalue * attax) / 100).toFixed();
             $(".at_result").html("$"+ thousands_separe(attotal));  

          $("#atvalue").on("keyup", function(){  
             let attax =1.878000;
             let atvalue = $("#atvalue").val();  
             $(".attax_rate").html(1.878000+" %");  
             let attotal = ((atvalue * attax) / 100).toFixed();
             $(".at_result").html("$"+thousands_separe(attotal)); 
          }); 
           
          }else  if(atcity === "Saint John, NB") {

             let attax =2.271700;
             let atvalue = $("#atvalue").val();  
             $(".attax_rate").html(2.271700+" %"); 
             let attotal = ((atvalue * attax) / 100).toFixed();
             $(".at_result").html("$"+ thousands_separe(attotal));  

          $("#atvalue").on("keyup", function(){  
             let attax =2.271700;
             let atvalue = $("#atvalue").val();  
             $(".attax_rate").html(2.271700+" %");  
             let attotal = ((atvalue * attax) / 100).toFixed();
             $(".at_result").html("$"+thousands_separe(attotal)); 
          }); 
           
          }else  if(atcity === "St. John’s, NL") {

             let attax =0.830000;
             let atvalue = $("#atvalue").val();  
             $(".attax_rate").html(0.830000+" %"); 
             let attotal = ((atvalue * attax) / 100).toFixed();
             $(".at_result").html("$"+ thousands_separe(attotal));  

          $("#atvalue").on("keyup", function(){  
             let attax =0.830000;
             let atvalue = $("#atvalue").val();  
             $(".attax_rate").html(0.830000+" %");  
             let attotal = ((atvalue * attax) / 100).toFixed();
             $(".at_result").html("$"+thousands_separe(attotal)); 
          }); 
           
          }else  if(atcity === "Sydney, NS") {

             let attax =2.266000;
             let atvalue = $("#atvalue").val();  
             $(".attax_rate").html(2.266000+" %"); 
             let attotal = ((atvalue * attax) / 100).toFixed();
             $(".at_result").html("$"+ thousands_separe(attotal));  

          $("#atvalue").on("keyup", function(){  
             let attax =2.266000;
             let atvalue = $("#atvalue").val();  
             $(".attax_rate").html(2.266000+" %");  
             let attotal = ((atvalue * attax) / 100).toFixed();
             $(".at_result").html("$"+thousands_separe(attotal)); 
          }); 
           
          }else  if(atcity === "Truro, NS") {

             let attax =1.902500;
             let atvalue = $("#atvalue").val();  
             $(".attax_rate").html(1.902500+" %"); 
             let attotal = ((atvalue * attax) / 100).toFixed();
             $(".at_result").html("$"+ thousands_separe(attotal));  

          $("#atvalue").on("keyup", function(){  
             let attax =1.902500;
             let atvalue = $("#atvalue").val();  
             $(".attax_rate").html(1.902500+" %");  
             let attotal = ((atvalue * attax) / 100).toFixed();
             $(".at_result").html("$"+thousands_separe(attotal)); 
          }); 
           
          }

       });
   });


