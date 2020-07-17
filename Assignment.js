
// Here calculate feet To Mile 
function feetToMile (feet)
{
   if(feet>0)
   {
    var  Mile = feet/5280;

    return Mile;
   }
   else{
       console.log("Distance can't Negative !");
   }

    
}


// Here Calculate Total wood For chair , Table , bed

function woodCalculator(chair,table,bed)
{
    var chair_calculator = chair*1;
    var table_calculator =table*3;
    var bed_calculator=bed*5;
    
    var totalWood = (chair_calculator + table_calculator + bed_calculator);

    return totalWood;

}

// here calculate Brick


function brickCalculator (floor)
{   
      var brick1 = 0;
      var brick2 = 0;
      var brick3 =0;
     for(var i=1;i<=floor ;i++)
     {
        if(i>=1 && i<=10)
        {
            var brick1 =i*15*1000
            
        }
       else if(i>=11 && i<=20)
        {
             var brick2 =(i-10)*12*1000;
            
        }

       else if(i>20)
        {
            var brick3= (i-20)*10*1000;
    
        }


     }

     var total = brick1+brick2+brick3;

     return total;
}




// Here Calculate TinyFriend 

function tinyFriend (names){
    
    var smallname = names[0];
    for(var i=0;i<names.length;i++)
    {
       
        var currentname = names[i];
        if(currentname.length<smallname.length)
        {
            smallname = currentname;
        }
        
    }
   

    return smallname;

}




