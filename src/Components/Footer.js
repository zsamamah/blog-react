import React, { Component } from 'react';
import './portfolioComponents/style.css'
export class Footer extends Component {
    render() {
        return (
            <footer id="footer">
    <div className="social_media">
      <ul>
        <li>
          <a
            href="https://www.facebook.com/zaid.samamah" rel="noopener"
          >
            <i className="fab fa-facebook-square fa-2x facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/zaidsamamah/" rel="noopener"
          >
            <i className="fab fa-linkedin fa-2x linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/zsamamah" rel="noopener"
          >
            <i className="fab fa-github-square fa-2x github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCL5UhazjrAJuH2s8ZuGYKRQ/videos" rel="noopener"
          >
            <i className="fab fa-youtube fa-2x youtube"></i>
          </a>
        </li>
      </ul>
    </div>
    <div className="last_services">
      <p>Full-Stack development . IT consultant</p>
    </div>
    <div className="rights"><p>&copy; Zaid Samamah 2021</p></div>
  </footer>
        )
    }
}

export default Footer
