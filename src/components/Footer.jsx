import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  let date = new Date();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="copyright">© {date.getFullYear()} Dilibe Franklin. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <nav className="footer-nav">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/#contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer 