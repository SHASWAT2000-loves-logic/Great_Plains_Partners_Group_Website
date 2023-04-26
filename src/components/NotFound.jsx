
// This page is displayed if the user visits a subpage of the website that does not exist
//Eg - greatplainsventures.com/shshdfkf 

import { Link } from "react-router-dom"
import {FaArrowCircleLeft} from "react-icons/fa"

function NotFound() {
  return (
    <div className="not_found">
      <h1>Oops!</h1>
      <p>404 - Page not found!</p>
      <Link to="/" className="home_link"><FaArrowCircleLeft className="about_icon"/>Back to home</Link>

    </div>
  )
}

export default NotFound
