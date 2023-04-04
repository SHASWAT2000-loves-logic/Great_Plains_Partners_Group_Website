
import { Link } from "react-router-dom"
import {FaArrowCircleLeft} from "react-icons/fa"

function Success() {
  return (
    <div className="success_message">
      <h1>Thank you for your message!</h1>
      <p>We will get back to you as soon as possible</p>
      <Link to="/" className="home_link"><FaArrowCircleLeft className="about_icon"/>Back to home</Link>
    </div>
  )
}

export default Success
