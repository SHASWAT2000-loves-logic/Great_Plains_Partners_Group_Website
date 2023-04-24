
import ScrollToTop from "react-scroll-to-top"

function Contact() {
  // make a captcha after user has clicked on send message
  // custom success message



  return (
    <section className="contact_section">
      <div className="contact_section_flex">
        <div className="contact_content">
          <h1>Contact Us</h1>
          <p>Need to get in touch with us? Please fill out the form.</p>
        </div>    
        <div className="contact_form">
          <form name="gpp_contact_form" method="POST" data-netlify-recaptcha="true">
            <input type="hidden" name="form-name" value="gpp_contact_form"/>
            <div className="name_input">
              <div className="first-name">
                <label htmlFor="first_name">First name</label>
                <input type="text" name="first_name" maxLength="25" required title="Your first name" onInvalid={(e) => e.target.setCustomValidity("Please enter your first name")} onInput={(e) => e.target.setCustomValidity("")}/>
              </div>
              <div className="last-name">
                <label htmlFor="last_name">Last name</label>
                <input type="text" name="last_name" maxLength="25" required title="Your last name" onInvalid={(e) => e.target.setCustomValidity("Please enter your last name")} onInput={(e) => e.target.setCustomValidity("")}/>
              </div>
            </div>
            <div className="email_input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" maxLength="50" required title="Your email" onInvalid={(e) => e.target.setCustomValidity("Please enter your valid email")} onInput={(e) => e.target.setCustomValidity("")}/>
            </div>
            <div className="email_input">
              <label htmlFor="email">Subject</label>
              <input type="text" name="subject" maxLength="100" required title="Your subject" onInvalid={(e) => e.target.setCustomValidity("Please enter your subject")} onInput={(e) => e.target.setCustomValidity("")}/>
            </div>
            <div className="message_input">
              <label htmlFor="message">Message</label>
              <textarea name="message" cols="40" rows="4" maxLength="2000" required title="Your message" onInvalid={(e) => e.target.setCustomValidity("Please enter your message")} onInput={(e) => e.target.setCustomValidity("")}></textarea>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <div>
              <button type="submit" className="submit_btn">Send Message</button>
            </div>
          </form>
        </div>

      </div>
      <div className="contact_end_line"></div>
      <ScrollToTop smooth top={400} color="#f1f1f1" style={{backgroundColor:"rgb(121, 50, 56)", height:"50px"}} className="scroll_to_top"/>
    </section>
  )

  
}

export default Contact
