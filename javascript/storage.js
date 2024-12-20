// Array of object
var array=[
    { name:"Samsung s24",
     title:"Mobile",
     description:"16gb 526gb",
     vendor:"Samsung",
     product_type:"Electronics",
     address:"Bengaluru",
     stock:"22",
     buyPrice:"41000",
     salePrice:"45000",
     quantity:"12",
     rates:"10",
     status:"Active"
     },
     { name:"Puma",
         title:"Shoe",
         description:"Balck color",
         vendor:"puma",
         product_type:"Footware",
         address:"Bengaluru",
         stock:"22",
         buyPrice:"3600",
         salePrice:"5200",
         quantity:"32",
         rates:"20",
         status:"Cancelled"
         }
 
 ];

 let str=JSON.stringify(array);
 localStorage.setItem("table_data",str);

 

 