
var selectedRow=null;

function openSideBar(){
    document.getElementById("sideBar").style.display="block";
    document.getElementById("menu_button").style.display='none';
    // document.getElementsByClassName("main_Product").style.width='50%';
}

function closeSideBar(){
    document.getElementById("sideBar").style.display="none";
    document.getElementById("menu_button").style.display='block';
}


function addProduct(){
    document.getElementById("form_page").style.display='block';
    document.getElementById("form_page").style.right='25%';
    document.getElementById("main_Product").style.opacity="0.4";
    document.getElementById("main_Product").style.cursor="none";
}
function editProduct(){
    document.getElementById("form_page_edit").style.display='block';
    document.getElementById("form_page_edit").style.right='25%';
    document.getElementById("main_Product").style.opacity="0.4";
    document.getElementById("main_Product").style.cursor="none";
    
}
function viewProduct(){
    document.getElementById("form_page_view").style.display='block';
    document.getElementById("form_page_view").style.right='25%';
    document.getElementById("main_Product").style.opacity="0.4";
    document.getElementById("main_Product").style.cursor="none";

}


function formClose(){
    
    document.getElementById("form_page").style.right='-700px';
    document.getElementById("form_page").style.display="none";
    document.getElementById("form_page_edit").style.right='-700px';
    document.getElementById("form_page_view").style.display="none";
    document.getElementById("form_page_view").style.right='-700px';
    document.getElementById("form_page_edit").style.display="none";
    document.getElementById("main_Product").style.opacity="1";
    document.getElementById("main_Product").style.cursor="auto"; 

}

function readFormData(){
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
    formData["rates"]=document.getElementById("rates").value;
    formData["limit"]=document.getElementById("limit").value;
    console.log(formData);
    insertNewData(formData);
}
 // Insert new Record

 function insertNewData(data){
    var table = document.getElementById("table_data").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    
    
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = Number(table.rows.length);

    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.name;
        

    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.title;
    
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.description;

    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.salePrice;

    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.status;

    var cell7 = newRow.insertCell(6);
        cell7.innerHTML = data.vendor;

    var cell8 = newRow.insertCell(7);
        cell8.innerHTML = data.product_type;
    
    var cell9 = newRow.insertCell(8);
        cell9.innerHTML = data.address;
        

    var cell10 = newRow.insertCell(9);
        cell10.innerHTML = `<button onclick="onEdit(this)"><i class="fa fa-edit"></i></button>
                        <button onclick="onView(this)"> <i class="fa fa-eye"></i></button>
                        <button onclick="onDelete(this)"><i class="fa fa-trash"></i></button>`;

 }


 function onEdit(rowData){
    
    selectedRow = rowData.parentElement.parentElement;
    document.getElementById("name1").value=selectedRow.cells[1].innerHTML;
    document.getElementById("title1").value=selectedRow.cells[2].innerHTML;
    document.getElementById("description1").value=selectedRow.cells[3].innerHTML;
    document.getElementById("salePrice1").value=selectedRow.cells[4].innerHTML;
    // document.getElementById("status1").value="active";
    document.getElementById("vendor1").value=selectedRow.cells[6].innerHTML;
    document.getElementById("product_type1").value=selectedRow.cells[7].innerHTML;
    document.getElementById("address1").value=selectedRow.cells[8].innerHTML;
    editProduct(selectedRow);
    
 }
 function onDelete(data){
    
    if(confirm('Do you want to delete this record?')){
        row = data.parentElement.parentElement;
        document.getElementById("table_data").deleteRow(row.rowIndex);
    }

 }

 function onView(rowData){

        selectedRow = rowData.parentElement.parentElement;
        document.getElementById("name2").value=selectedRow.cells[1].innerHTML;
        document.getElementById("title2").value=selectedRow.cells[2].innerHTML;
        document.getElementById("description2").value=selectedRow.cells[3].innerHTML;
        document.getElementById("salePrice2").value=selectedRow.cells[4].innerHTML;
        // document.getElementById("status1").value="active";
        document.getElementById("vendor2").value=selectedRow.cells[6].innerHTML;
        document.getElementById("product_type2").value=selectedRow.cells[7].innerHTML;
        document.getElementById("address2").value=selectedRow.cells[8].innerHTML;
        viewProduct();
        
 }












 