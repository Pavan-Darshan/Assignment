

var myActive = 0 , myCancelled = 0 , myDraft = 0 , myDelivered = 0,myShiped = 0;
let idValue;
const productIdArray=[];

document.getElementById("menu_button").addEventListener('click',openSideBar)

function openSideBar(){
    document.getElementById("sideBar").style.display="block";
    document.getElementById("menu_button").style.display='block';
    document.getElementById("menu_button").removeEventListener('click',openSideBar)
    document.getElementById("menu_button").addEventListener('click',closeSideBar)

 }

function closeSideBar(){
    
    document.getElementById("sideBar").style.display="none";
    document.getElementById("menu_button").style.display='block';
    document.getElementById("menu_button").removeEventListener('click',closeSideBar)
    document.getElementById("menu_button").addEventListener('click',openSideBar)
}


function addProduct(){
    
    // Id generator
    idValue=idGenerator();

    document.getElementById("form_page").style.display='block';
    document.getElementById("form_page").style.right='30%';
    document.getElementById("form_page").style.zIndex='9999';
    document.getElementById("prod_id").value=idValue;
    document.getElementById("mask_window").style.display="block";
    document.getElementById("mask_window").style.opacity="0.5";
   
     
}
function editProduct(){
    document.getElementById("form_page_edit").style.display='block';
    document.getElementById("form_page_edit").style.right='25%';
    document.getElementById("mask_window").style.display="block";
    document.getElementById("mask_window").style.opacity="0.5";
    document.getElementById("form_page_edit").style.zIndex='9999';
    
}
function viewProduct(){
    document.getElementById("form_page_view").style.display='block';
    document.getElementById("form_page_view").style.right='25%';
    document.getElementById("form_page_view").style.zIndex='9999';
    document.getElementById("mask_window").style.display="block";
    document.getElementById("mask_window").style.opacity="0.5";


}


function formClose(){
    
    document.getElementById("form_page").style.right='-700px';
    document.getElementById("form_page").style.display="none";
    document.getElementById("form_page_edit").style.right='-700px';
    document.getElementById("form_page_view").style.display="none";
    document.getElementById("form_page_view").style.right='-700px';
    document.getElementById("form_page_edit").style.display="none";
    document.getElementById("mask_window").style.display="none";
    document.getElementById("form_page").style.zIndex='-100';
    document.getElementById("form_page_edit").style.zIndex='-100';
    document.getElementById("form_page_view").style.zIndex='-100';

}




// Array from local storage
var array=[
    {   prod_id:1001,
        name:"Samsung s24",
         title:"Mobile",
         description:"16gb 526gb",
         vendor:"Samsung",
         product_type:"Electronics",
         address:"Bengaluru",
         stock:"22",
         buyPrice:"41000",
         salePrice:"45000",
         quantity:"12",
         shipping_price:"10",
         status:"Active"
         },
         {  prod_id:1002,
            name:"Puma",
             title:"Shoe",
             description:"Balck color",
             vendor:"puma",
             product_type:"Footware",
             address:"Bengaluru",
             stock:"22",
             buyPrice:"3600",
             salePrice:"5200",
             quantity:"32",
             shipping_price:"20",
             status:"Cancelled"
             },
             {  prod_id:1003,
                name:"Nike",
                 title:"Shoe",
                 description:"white color",
                 vendor:"Nike",
                 product_type:"Footware",
                 address:"Bengaluru",
                 stock:"22",
                 buyPrice:"2800",
                 salePrice:"4300",
                 quantity:"37",
                 shipping_price:"18",
                 status:"Active"
                 },
                 {  prod_id:1004,
                    name:"Salt",
                     title:"Grocery",
                     description:"1kg",
                     vendor:"Tata",
                     product_type:"Grocery",
                     address:"Mysuru",
                     stock:"148",
                     buyPrice:"45",
                     salePrice:"68",
                     quantity:"370",
                     shipping_price:"180",
                     status:"Active"
                     },
                     {  prod_id:1005,
                        name:"Salt",
                         title:"Grocery",
                         description:"1kg",
                         vendor:"Tata",
                         product_type:"Grocery",
                         address:"Kerala",
                         stock:"249",
                         buyPrice:"149",
                         salePrice:"278",
                         quantity:"1028",
                         shipping_price:"687",
                         status:"cancelled"
                         },
                         {  prod_id:1006,
                            name:"Bat ",
                             title:"Bat",
                             description:"Bat24size",
                             vendor:"Nivia",
                             product_type:"Sports",
                             address:"Kolkata",
                             stock:"149",
                             buyPrice:"85",
                             salePrice:"46",
                             quantity:"785",
                             shipping_price:"521",
                             status:"Shipped"
                             },
                             {  prod_id:1007,
                                name:"Jean ",
                                 title:"Jean black",
                                 description:"Large",
                                 vendor:"Livies",
                                 product_type:"Fashion",
                                 address:"Bengaluru",
                                 stock:"279",
                                 buyPrice:"879",
                                 salePrice:"1500",
                                 quantity:"456",
                                 shipping_price:"357",
                                 status:"Delivered"
                                 },
                                 {  prod_id:1008,
                                    name:"Jean ",
                                     title:"Jean black",
                                     description:"Large",
                                     vendor:"Livies",
                                     product_type:"Fashion",
                                     address:"Bengaluru",
                                     stock:"279",
                                     buyPrice:"879",
                                     salePrice:"1500",
                                     quantity:"456",
                                     shipping_price:"357",
                                     status:"Delivered"
                                     }      
     
];




storeData(array); //get set data from local storage
loadData();  // load data into table


// Auto product Id Creator

function idGenerator(){
    const arrayLength=array.length;

  if(arrayLength<=0){
    return 1001;

  }
  else{
    array.sort();

   for(let i=1;i<array.length;i++)
    {
       if(!((array[i-1].prod_id) == ((array[i].prod_id)-1)))
        {    
            if(productIdArray.length<=0)
                return  arrayLength+1001;
            else
            {
                productIdArray.sort((x,y) => { return y-x});
                return productIdArray.pop();  
            }
            
       }
    }

          


   }

return  (array[arrayLength-1].prod_id)+1; 
}



// Store Operation in Local storage------------------------------------------------->


function storeData(x){
    let keyName=localStorage.key("table_data");

    if(keyName)
    {
        const str=localStorage.getItem(keyName);
        array=JSON.parse(str);
    }
    else{
        let str = JSON.stringify(array);
        localStorage.setItem("table_data",str);
    }

}



 
function readFormData(){
    
    //data fetching from form to array as object

    var formData= {};
    formData["name"]=document.getElementById("name").value;
    formData["title"]=document.getElementById("title").value;
    formData["description"]=document.getElementById("description").value;
    formData["vendor"]=document.getElementById("vendor").value;
    formData["product_type"]=document.getElementById("product_type").value;
    formData["address"]=document.getElementById("address").value;
    formData["stock"]=document.getElementById("stock").value;
    formData["buyPrice"]=document.getElementById("buyPrice").value;
    formData["salePrice"]=document.getElementById("salePrice").value;
    formData["quantity"]=document.getElementById("quantity").value;
    formData["prod_id"]=idValue;
    formData["status"]=document.getElementById("status").value;

   
 array.push(formData);  // adding new array item
 loadData();  // loading the table
}

function loadData(){    
var html=`<thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Vendoe Name</th>
                    <th>Product Type</th>
                    <th>Address</th>
                    <th>Actions</th>
                
                </thead>
            <tbody>`;
array.forEach(element => {
   html+=`<tr><td>`+element.prod_id+`</td><td>`+element.name+`</td><td>`+element.title+
   `</td><td id="tooltip" title="`+element.description+`">`+element.description+`</td><td>`+element.salePrice+`</td><td>`+
   element.status+`</td><td>`+element.vendor+`</td><td>`+element.product_type+
   `</td><td>`+element.address+`</td><td>`+`<button onclick="onEdit(this)"><i class="fa fa-edit"></i></button>
                        <button onclick="onView(this)"> <i class="fa fa-eye"></i></button>
                        <button onclick="onDelete(this)"><i class="fa fa-trash"></i></button></td></tr>`
    
});
html+=`</tbody>`;

    //   store the data into local storage
    localStorage.setItem("table_data",(JSON.stringify(array)));


try {
    document.getElementById("table_data").innerHTML=html;
    
} catch (error) {
    console.log("Error in table loading....!  "+error);
    
}

}


//   VIEW OPERATION---------------------------------------->

function onView(rowData){
    
    selectedRow = rowData.parentElement.parentElement;
    console.log(selectedRow.cells[0].innerHTML)

    rowId=selectedRow.cells[0].innerHTML;

    array.forEach(index =>{
        if(rowId==index.prod_id)
        {
            document.getElementById("name2").value=index.name;
            document.getElementById("title2").value=index.title;
            document.getElementById("description2").value=index.description;
            document.getElementById("salePrice2").value=index.salePrice;
            document.getElementById("status2").value=index.status;
            document.getElementById("vendor2").value=index.vendor;
            document.getElementById("product_type2").value=index.product_type;
            document.getElementById("address2").value=index.address;
            document.getElementById("buyPrice2").value=index.buyPrice;
            document.getElementById("quantity2").value=index.quantity;
            document.getElementById("prod_id2").value=index.prod_id;
            document.getElementById("stock2").value=index.stock;
                    
        }

    });
    viewProduct();
    
}



// EDIT OPERATION--------------------->

function onEdit(rowData){

    
    
    selectedRow = rowData.parentElement.parentElement;

    rowId=selectedRow.cells[0].innerHTML;
   let x=1;
    array.forEach(index =>{
        if(rowId==index.prod_id)
        {
            if(index.status.toLocaleLowerCase() == "delivered"){
                alert("Product was Delivered, only can view the details...");
                return x=0;
            }
            

            document.getElementById("name1").value=index.name;
            document.getElementById("title1").value=index.title;
            document.getElementById("description1").value=index.description;
            document.getElementById("salePrice1").value=index.salePrice;
            document.getElementById("status1").value=index.status;
            document.getElementById("vendor1").value=index.vendor;
            document.getElementById("product_type1").value=index.product_type;
            document.getElementById("address1").value=index.address;
            document.getElementById("buyPrice1").value=index.buyPrice;
            document.getElementById("quantity1").value=index.quantity;
            document.getElementById("prod_id1").value=index.prod_id;
            document.getElementById("stock1").value=index.stock;
                    
        }

    });
    if(x==1){
        editProduct();
    }
}

function update(data){
       
    let prodID=document.getElementById("prod_id1").value;

    console.log(prodID);
    

    array.forEach(index =>{
        if(prodID==index.prod_id)
        {
            index.name= document.getElementById("name1").value;
            index.title=document.getElementById("title1").value;
            index.description=document.getElementById("description1").value;
            index.salePrice= document.getElementById("salePrice1").value;
            index.status=document.getElementById("status1").value;
            index.vendor=document.getElementById("vendor1").value;
            index.product_type=document.getElementById("product_type1").value;
            index.address=document.getElementById("address1").value;
            index.buyPrice=document.getElementById("buyPrice1").value;
            index.quantity=document.getElementById("quantity1").value;
            index.prod_id=document.getElementById("prod_id1").value;
            index.stock=document.getElementById("stock1").value;
              loadData();      
        }


    });
    
    // console.log(document.getElementById("prod_id1").value);
    

}


// DELETE OPERATION--------------------------------------------->

var b,deletedata;

function cancelDelete(){
    document.getElementById("delete_window_main").style.display="none";
    document.getElementById("mask_window").style.display="none";
    return 0;
}

function confirmDelete()
{
    document.getElementById("delete_window_main").style.display="none";
    document.getElementById("mask_window").style.display="none";
    deleteRecord(deletedata);
}

function onDelete(data)
{
    document.getElementById("delete_window_main").style.display="block";
    document.getElementById("mask_window").style.display="block";
    deletedata=data;

}

function deleteRecord(data){
   
    selectedRow = data.parentElement.parentElement;

    rowId=selectedRow.cells[0].innerHTML;

    array.forEach(index =>{
        if(rowId==index.prod_id)    
        {    
            // ID DELETED ARRAY  
            productIdArray.push(index.prod_id);
            productIdArray.sort((x,y) => { return y-x});

            // DELETE OBJECT FROM ARRAY
            array.splice((array.indexOf(index)),1);
            loadData();
        }
        return 0;
    
    });
    return 0;
}




// filter option------------------------------------------>

const filterOptions = (data) => {
    var temp=[],temp2=[];
    const option = document.querySelector("#filter").value;
	const selection = option.replace('&', '')

   if(selection== "all"){

    loadData();
    return 0;

   }

    array.forEach(index =>{
        if(selection.toLowerCase()==index.product_type.toLowerCase())
        {
            temp.push(index);   
        }
        else{
            temp2.push(index);
        }
        
    });
    var html=`<thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Vendoe Name</th>
                    <th>Product Type</th>
                    <th>Address</th>
                    <th>Actions</th></thead><tbody>`;
                    temp.forEach(element => {
                html+=`<tr><td>`+element.prod_id+`</td><td>`+element.name+`</td><td>`+element.title+
                `</td><td id="tooltip" title="`+element.description+`">`+element.description+`</td><td>`+element.salePrice+`</td><td>`+
                element.status+`</td><td>`+element.vendor+`</td><td>`+element.product_type+
                `</td><td>`+element.address+`</td><td>`+`<button onclick="onEdit(this)"><i class="fa fa-edit"></i></button>
                                        <button onclick="onView(this)"> <i class="fa fa-eye"></i></button>
                                        <button onclick="onDelete(this)"><i class="fa fa-trash"></i></button></td></tr>`
    
});
html+=`</tbody>`;
document.getElementById("table_data").innerHTML=html;
    

};
try {
    document.getElementById("filter").addEventListener("change",filterOptions);

} catch (error) {
    
}



// search operation--------------------------------------->


function serach(){
    let val=document.getElementById("seachItem").value;
    let x=0;
    array.forEach(index => {
        if(index.prod_id == val)
        {

                var html=`<thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Vendoe Name</th>
                    <th>Product Type</th>
                    <th>Address</th>
                    <th>Actions</th></thead>
                 <tbody><tr><td>`+index.prod_id+`</td><td>`+index.name+`</td><td>`+index.title+
                 `</td><td id="tooltip" title="`+element.description+`">`+index.description+`</td><td>`+index.salePrice+`</td><td>`+
                 index.status+`</td><td>`+index.vendor+`</td><td>`+index.product_type+
                `</td><td>`+index.address+`</td><td>`+`<button onclick="onEdit(this)"><i class="fa fa-edit"></i></button>
                 <button onclick="onView(this)"> <i class="fa fa-eye"></i></button>
                 <button onclick="onDelete(this)"><i class="fa fa-trash"></i></button></td></tr></tbody>`;
                // loading on table
                 document.getElementById("table_data").innerHTML=html;
            return x=1;
        }
    })

    if(x==0)
     alert("Product ID Not Found......!");
}





// count operation----------------------------------------->

function countRefresh(){
    
    array.forEach(index =>{

         switch (index.status.toLowerCase()) {
            case "active":
                myActive+=1;
                break;

            case "cancelled":
                myCancelled+=1;
                break;

            case "draft":
                myDraft+=1;
                break;

            case "delivered":
                myDelivered+=1;
                break;
         
            case "shipped":
                    myShiped+=1;
                break;
         }
    });
        
    try {
        
    document.getElementById("active_count").innerHTML=myActive;
    document.getElementById("cancelled_count").innerHTML=myCancelled;
    document.getElementById("draft_count").innerHTML=myDraft;
    document.getElementById("delivered_count").innerHTML=myDelivered;
    document.getElementById("shipped_count").innerHTML=myShiped;
    

        
    } catch (error) {
        
    }
   
   
}
countRefresh();
