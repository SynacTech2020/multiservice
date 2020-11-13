function send_data() {
    // alert("This is working")
    var form = new FormData(document.forms['ams'] )
    var msg = "Hi, I am "+form.get('name')+". I would like to contact you regarding my requirements about "+form.get('subject')+". Please mail me details at "+forms.get('email');
    var win = window.open(`https://wa.me/918329811873?text=${msg}`, '_blank');
    }  
 
    