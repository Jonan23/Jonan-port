import React from 'react'
import './Contact.css'
import whatsap from '../../assets/icons8-whatsapp (5).svg'
import linked from '../../assets/icons8-linkedin.svg'
import gh from '../../assets/icons8-github (1).svg'
import x from '../../assets/icons8-twitterx.svg'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d872f3cd-19d7-4214-98f7-85cb469e6a94");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className='contact'>
        <div className="contact-t">
            <h1>Contact Me</h1>
        </div>
        <div className="contact-sect">
        <div className="contact-left">
          <div className="contact-detail">
            <div className="contact-detail">
            <h2>Email</h2>
            <p>jonanutong@gmail.com</p>
            </div>
            <div className="contact-detail">
            <h2>Contact</h2>
            <p>+250-791899857</p>
            </div>
            <div className="contact-detail">
            <p>Lets get in touch 
              and work on buidling your dream web applications.
            </p>
            <a href="https://wa.me/+250791899857"><img src={whatsap} alt=""/></a>
            <a href="https://github.com/Jonan23"><img src={gh} alt="" /></a>
            <a href="https://www.linkedin.com/in/jonan-fermo-06813b275"><img src={linked} alt="" /></a>
            <a href="https://x.com/JonanUtong33061"><img src={x} alt="" /></a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit}  className="contact-right">
          <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" name="email" placeholder='Enter your email' />
            <label htmlFor="">Write your message here</label>
            <textarea name='message' rows='8' placeholder='Enter your Message' ></textarea>
            <button type='submit' className='contact-submit'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Contact