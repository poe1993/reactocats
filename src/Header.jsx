import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <div>
                <li>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    alt="GithubLogo"
                  />
                </li>
                <li>
                  <strong ref="#">Octodex</strong>
                </li>
              </div>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="https://octodex.github.com/faq/">FAQ</a>
              </li>
            </ul>
          </nav>

          <nav>
            <ul>
              <li>
                <a href="https://twitter.com/githubdesign">
                  Follow us on Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/">Back to GitHub.com</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}
