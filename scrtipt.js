function sendMail(){
    let params={
            name : document.getElementById("name").value,
            email : document.getElementById("email").value,
            message: document.getElementById("message").value
    }
    emailjs.send("service_gmt9ij8", "template_p0m7mhh",params).then(alert("Email sent!!!"))
}