
    function calculate()
    {
        var getValue = document.getElementById('type').selectedOptions[0].value;
        var unit=parseInt(document.getElementById('u').value);
          if(getValue=="dom")
          {
          if(unit>=0&&unit<=100)
          {
              var total=0;
          }  
          else if(unit>100&&unit<=200)
          {
              var total=(unit-100)*1.5+20;
          }  
          else if(unit>200 && unit<=500)
          {
              var total=200+(unit-200)*3+30;
          }  
          else 
          {
              var total=100*3.5+300*4.6+(unit-500)*6.6+50;
          } 
        
         var Amount = document.getElementById("demo").innerHTML="YOUR BILL AMOUNT: " +total;
          alert("" +Amount);
        }
        if(getValue=="com")
        {        
            var total=0;
            var sub=document.getElementById('output').selectedOptions[0].value;
         
          if(sub==="III-A(2)")
          {
            if(unit<=750)
          {
              var total=0;
          }  
          else if(unit>750&&unit<=1000)
          {
              var total=unit*2.3;
          }  
          else if(unit>1000 && unit<=1500)
          {
              var total=1000*2.3+(unit-1000)*2.3;
          }  
          else 
          {
              var total=1000*2.3+500*3.45+(unit-1500);
          } 
          
        }
        if(sub=="I-C")
        {
            total=unit*4.60;
        }
        if(sub=="II-A")
        {
            total=unit*6.35;
        }
        if(sub=="II-B(1)")
        {
            total=unit*5.75;
        }
        if(sub=="II-B(2)")
        {
            total=unit*7.50;
        }
        if(sub=="II-C")
        {
            if(unit>0 && unit<=120)
            {
                total=unit*2.85;
            }
            else{
                total=120*2.85+(unit-120)*5.75;
            }
        }
        if(sub=="III-A(1)")
        {
            if(unit>0 && unit<=500)
            {
                total=unit*4.0;
            }
            else{
                total=500*4.0+(unit-120)*4.60;
            }
        }
        if(sub=="III-B")
        {
            total=unit*6.35;
        }
        if(sub=="IV")
        {
             total=unit*3.22;
        }
        if(sub=="V")
        {
            if(unit>0 && unit<=100)
            {
                total=unit*5.0;
            }
            else{
                total=100*5.0+(unit-100)*8.05;
            }
        }
        if(sub=="VI")
        {
            total=unit*12;
        }
       var amount = document.getElementById("demo").innerHTML="YOUR BILL AMOUNT: " +total;
       alert(""+amount)
    }
    }
    function get()
    {
        var getValue=document.getElementById('type').selectedOptions[0].value;
        if(getValue==="com")
        {
        var a=["I-C","II-A","II-B(1)","II-B(2)","II-C","III-A(1)","III-A(2)","III-B","IV","V","VI"];
            var string="";
             
             for(i=0;i<a.length;i++)
             {
                 string=string+"<option value="+a[i]+">"+a[i]+"</option>";
             }
            
        }
        else
        {
           var string=""; 
        }
        document.getElementById("output").innerHTML=string;
    }
