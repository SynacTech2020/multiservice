function send_data() {
    var form = new FormData(document.forms['ams'] )
    var msg = "Hi, I am "+form.get('name')+". I would like to contact you regarding my requirements about "+form.get('subject')+". Please mail me details at "+form.get('sender')+"."
    window.open(`https://wa.me/918329811873?text=${msg}`, '_blank');
    }  
 
    