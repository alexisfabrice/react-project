import React from 'react'
import './Contact.css'
function Contact() {
  
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a2c40192-028b-4165-9ba8-29a82e58b6f5");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    
  return (
    <div className='contact'>
      <div className="contact-col">
        <p>
            <h3>send us a message</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique perspiciatis
             sequi iure ducimus pariatur unde exercitationem repellendus corporis excepturi
              ipsa incidunt voluptates
             eligendi odio laboriosam ea, error a voluptas. Quisquam?
             <ul>
                <li>contactus@stack.dev</li>
                <li>visitrwanda250@gmail.com</li>
                <li>250-784-278-25</li>
                
             </ul>
        </p>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <div>
            <label>your name</label>
            <input type="text" name='name'  placeholder='enter you name' required />
            </div>
            <div>
                <label> phone number</label>
                <input type="tel" name="phone" id=""  placeholder='enter you number' required/>
            </div>
            <div>
                <label>your message here</label>
                <textarea name="message" id="" rows='4' placeholder='enter your message' required></textarea>
            </div>
            <button type='submit' name='submit' className='btn dark-btn'>submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
