$('.checkout-contact-form').submit(startExternalPayment);
function startExternalPayment(e) {
    e.preventDefault();
    var name = $('.checkout-contact-form .cus-name').val();
    var email = $('.checkout-contact-form .cus-email').val();
    var phone = $('.checkout-contact-form .cus-phone').val();
	var message= $('.checkout-contact-form .cus-msg').val();
	var file = $('.checkout-contact-form .cus-atc').val();
	
    var ticket = JSON.parse(localStorage.getItem("ticketDetails"));
    var formDetails = {
   name: 'name',
   email: 'email',
   phone: 'phone',
   message: 'message',
   file: 'file'
};
var url = `https://mail-service.vercel.app/api/email/`;
var http = new XMLHttpRequest();
http.open("POST", url, true);
http.setRequestHeader("Accept", "application/json");
http.setRequestHeader("Content-type", "application/json");
http.onreadystatechange = function () {
    if (this.readyState === this.DONE && this.status === 200) {
       // success response
    }
};
http.send(JSON.stringify(formDetails));
}