function send_data() {
    // alert("This is Working")
    var keys=[];
    var message=[];
    const form = new FormData(document.forms['hairdo'])
    if (sessionStorage.getItem('service_type')=="Walk In") {
        var out_message = "Hi . This is "+form.get('name')+".%0D%0A I would like to make an appointment for "+form.getAll('services')+ ",%0D%0A On Date "+form.get('date') + " around "+form.get('time') +".%0D%0A This appointment is set by HairDo.";    // console.log(form.values())
        // alert(form.values())
        var win = window.open(`https://wa.me/918329811873?text=${out_message}`, '_blank');
    }else{
        var out_message = "Hi . This is "+form.get('name')+".%0D%0A I would like to make an appointment for "+form.getAll('services')+ ",%0D%0A On Date "+form.get('date') + " around "+form.get('time') +".%0D%0A At "+form.get('address')+". %0D%0A This appointment is set by HairDo.";    // console.log(form.values())
        // alert(form.values())
        var win = window.open(`https://wa.me/918329811873?text=${out_message}`, '_blank');
    }
    
    
}
 
