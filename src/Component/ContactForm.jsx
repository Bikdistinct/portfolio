import React from "react";

function ContactForm(){
    return(
        <div className="contact1">
        <div class="flip-card">
        <div class="flip-card-inner">
        <div class="flip-card-front">
        <p><h2>contact</h2></p>
        </div>
        <div class="flip-card-back">
            <form action="https://formsubmit.co/bikdev07@gmail.com" method="POST">
                <input type="text" name="_honey" style={{display: "none"}}/>
                <input type="hidden" name="_captcha" value="false"/>
                <h2>Contact Form</h2>
                <p><input type="text" name="name" placeholder="Name" required /> </p>
                <p><input type="email" name="email" placeholder="Email" required /> </p>
                <p><textarea name="comment" placeholder="Comment"></textarea> </p>
                <button class="formButton" type="submit">Submit</button>
               </form>
        </div>
        </div>
       </div>
         </div>
    );
}

export default ContactForm;