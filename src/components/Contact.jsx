
import ScrollToTop from "react-scroll-to-top"

function Contact() {
  // make a captcha after user has clicked on send message
  // message word limit to 250 words
  // sent message notification


  return (
    <section className="contact_section">
      <div className="contact_section_flex">
        <div className="contact_content">
          <h1>Contact Us</h1>
          <p>Need to get in touch with us? Please fill out the form.</p>
        </div>    
        <div className="contact_form">
          <form name="gpp_contact_form" method="POST">
            <input type="hidden" name="form-name" value="gpp_contact_form" />
            <div className="name_input">
              <div className="first-name">
                <label htmlFor="first_name">First name</label>
                <input type="text" name="first_name" id="" />
              </div>
              <div className="last-name">
                <label htmlFor="last_name">Last name</label>
                <input type="text" name="last_name" id="" />
              </div>
            </div>
            <div className="email_input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id=""/>
            </div>
            <div className="email_input">
              <label htmlFor="email">Subject</label>
              <input type="text" name="subject" id="" />
            </div>
            <div className="message_input">
              <label htmlFor="message">Message</label>
              {/* <textarea name="message" id="" cols="40" rows="4" onInput={handleMessageInput}></textarea> */}
              <textarea name="message" id="" cols="40" rows="4"></textarea>
            </div>
            <div>
              <button type="submit" className="submit_btn">Send Message</button>
            </div>
          </form>
        </div>

      </div>
      <div className="contact_end_line"></div>
      <ScrollToTop smooth top={400} color="#f1f1f1" style={{backgroundColor:"rgb(121, 50, 56)", height:"50px"}}/>
    </section>
  )
    
}

export default Contact
