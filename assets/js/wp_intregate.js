'use strict';
// var product_arr=[];
// sessionStorage.setItem("products",product_arr);

function send_data() {
    var form = new FormData(document.forms['ams'] )
    var msg = "Hi, I am "+form.get('name')+". I would like to contact you regarding my requirements about "+form.get('subject')+". Please mail me details at "+form.get('sender')+"."
    window.open(`https://wa.me/919011599027?text=${msg}`);
    location.reload()
    }

    
function add_product(param1) {
        if (search(param1)==0){
       var i = sessionStorage.length
        sessionStorage.setItem("products"+i,param1);
        console.log(sessionStorage)
        alert('Added to Quotation List.')
    }else{
        alert('This Product is already Added in Quotation List.')
    }

}
 
function search(param2) {
    var flag=0;
    for (let index = 0; index < sessionStorage.length; index++) {
        if(param2==sessionStorage.getItem('products'+index)){
            flag=flag+1
        }
    }
    return flag  
}
    
function send_quote(){
    var quote_list='';
    for (let index = 0; index < sessionStorage.length; index++) {
        var p = sessionStorage.getItem('products'+index)
        quote_list=quote_list+p+", "
        }
    var form = new FormData(document.forms['ams_q'] )
    // alert (typeof(form.get('Additional')))
    // console.log(typeof(form.get('Additional')))
    // console.log(form.get('Additional'))
    if(form.get('Additional')!==""){
    var msg = "Hi, I am "+form.get('Name')+". I have requirements of "+quote_list+" also my additional requirements are "+form.get('Additional')+". You can mail me the details at "+form.get('Email')+" or Call me at "+form.get('Mobile')+"."
    window.open(`https://wa.me/919011599027?text=${msg}`);
    // sessionStorage.clear()
    location.reload()
    }else{
        var msg = "Hi, I am "+form.get('Name')+". I have requirements of "+quote_list+". You can mail me the details at "+form.get('Email')+" or Call me at "+form.get('Mobile')+"."
        window.open(`https://wa.me/919011599027?text=${msg}`);
        // sessionStorage.clear()
    location.reload()
    }
    
    
}