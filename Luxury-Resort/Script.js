function submitForm(e){
  e.preventDefault();
  document.getElementById('msg').innerText = "Thank you! Your enquiry has been sent. We will contact you soon.";
  e.target.reset();
}