import React, { Component } from 'react'
class PageHeader extends Component {
  render() {
    return (
      <head lang="en">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Octodex</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/screen.css" />
      </head>
    )
  }
}

class Octocat extends Component {
  render() {
    return (
      <article>
        <a href="https://octodex.github.com//terracottocat/">
          <img
            src={this.props.image}
            width="400"
            height="400"
            alt="Terracottocat"
          />
        </a>
        <ul>
          <li>
            {this.props.number}:
            <a href="https://octodex.github.com//terracottocat/">
              <strong>{this.props.name}</strong>
            </a>
          </li>
          <li>
            <a href="https://github.com/chubbmo">
              <img
                src="https://github.com/chubbmo.png"
                width="24px"
                height="24px"
                alt="chubbmo"
              />
            </a>
          </li>
        </ul>
      </article>
    )
  }
}
class App extends Component {
  render() {
    return (
      <html>
        <PageHeader />
        <body>
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

          <main>
            <section>
              <Octocat
                name="Terracottocat"
                number="#150"
                image="https://octodex.github.com//images/Terracottocat_Single.png"
              />
              <Octocat
                name="Boxertocat"
                number="#151"
                image="https://octodex.github.com//images/boxertocat_octodex.jpg"
              />
              <article>
                <a href="https://octodex.github.com//octogatos/">
                  <img
                    src="https://octodex.github.com//images/Octogatos.png"
                    width="400"
                    height="400"
                    alt="Octogatos"
                  />
                </a>
                <ul>
                  <li>
                    #148:
                    <a href="https://octodex.github.com//octogatos/">
                      <strong>Octogatos</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/cameronfoxly">
                      <img
                        src="https://github.com/cameronfoxly.png"
                        width="24px"
                        height="24px"
                        alt="cameronfoxly"
                      />
                    </a>
                  </li>
                </ul>
              </article>

              <article>
                <a href="https://octodex.github.com//sentrytocat/">
                  <img
                    src="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
                    width="400"
                    height="400"
                    alt="Sentrytocat"
                  />
                </a>
                <ul>
                  <li>
                    #143:
                    <a href="https://octodex.github.com//sentrytocat/">
                      <strong>Sentrytocat</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/cameronmcefee">
                      <img
                        src="https://github.com/cameronmcefee.png"
                        width="24px"
                        height="24px"
                        alt="cameronfoxly"
                      />
                    </a>
                  </li>
                </ul>
              </article>

              <article>
                <a href="https://octodex.github.com//boxertocat/">
                  <img
                    src="https://octodex.github.com//images/boxertocat_octodex.jpg"
                    width="400"
                    height="400"
                    alt="Boxertocat"
                  />
                </a>
                <ul>
                  <li>
                    #141:
                    <a href="https://octodex.github.com//boxertocat/">
                      <strong>Boxertocat</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/rubyjazzy">
                      <img
                        src="https://github.com/rubyjazzy.png"
                        width="24px"
                        height="24px"
                        alt="rubyjazzy"
                      />
                    </a>
                  </li>
                </ul>
              </article>

              <article>
                <a href="https://octodex.github.com//suftocat/">
                  <img
                    src="https://octodex.github.com//images/surftocat.png"
                    width="400"
                    height="400"
                    alt="Surftocat"
                  />
                </a>
                <ul>
                  <li>
                    #140:
                    <a href="https://octodex.github.com//suftocat/">
                      <strong>Surftocat</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/jeejkang">
                      <img
                        src="https://github.com/jeejkang.png"
                        width="24px"
                        height="24px"
                        alt="jeejkang"
                      />
                    </a>
                  </li>
                </ul>
              </article>

              <article>
                <a href="https://octodex.github.com//scubatocat/">
                  <img
                    src="https://octodex.github.com//images/scubatocat.png"
                    width="400"
                    height="400"
                    alt="Scubatocat"
                  />
                </a>
                <ul>
                  <li>
                    #138:
                    <a href="https://octodex.github.com//scubatocat/">
                      <strong>Scubatocat</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/cameronfoxly">
                      <img
                        src="https://github.com/cameronfoxly.png"
                        width="24px"
                        height="24px"
                        alt="cameronfoxly"
                      />
                    </a>
                  </li>
                </ul>
              </article>

              <article>
                <a href="https://octodex.github.com//dinotocat/">
                  <img
                    src="https://octodex.github.com//images/dinotocat.png"
                    width="400"
                    height="400"
                    alt="Dinotocat"
                  />
                </a>
                <ul>
                  <li>
                    #130:
                    <a href="https://octodex.github.com//dinotocat/">
                      <strong>Dinotocat</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/kimestoesta">
                      <img
                        src="https://github.com/kimestoesta.png"
                        width="24px"
                        height="24px"
                        alt="kimestoesta"
                      />
                    </a>
                    <a href="https://github.com/heyhayhay">
                      <img
                        src="https://github.com/heyhayhay.png"
                        width="24px"
                        height="24px"
                        alt="heyhayhay"
                      />
                    </a>
                  </li>
                </ul>
              </article>

              <article>
                <a href="https://octodex.github.com//hulatocat/">
                  <img
                    src="https://octodex.github.com//images/hula_loop_octodex03.gif"
                    width="400"
                    height="400"
                    alt="Hulatocat"
                  />
                </a>
                <ul>
                  <li>
                    #139:
                    <a href="https://octodex.github.com//hulatocat/">
                      <strong>Hulatocat</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/heyhayhay">
                      <img
                        src="https://github.com/heyhayhay.png"
                        width="24px"
                        height="24px"
                        alt="heyhayhay"
                      />
                    </a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="https://octodex.github.com//Maxtocat/">
                  <img
                    src="https://octodex.github.com//images/maxtocat.gif"
                    width="400"
                    height="400"
                    alt="Maxtocat"
                  />
                </a>
                <ul>
                  <li>
                    #109:
                    <a href="https://octodex.github.com//maxtocat/">
                      <strong>Maxtocat</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/jeejkang">
                      <img
                        src="https://github.com/jeejkang.png"
                        width="24px"
                        height="24px"
                        alt="jeejkang"
                      />
                    </a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="https://octodex.github.com//daftpunktocat-thomas/">
                  <img
                    src="https://octodex.github.com//images/daftpunktocat-thomas.gif"
                    width="400"
                    height="400"
                    alt="Daftpunktocat-thomas"
                  />
                </a>
                <ul>
                  <li>
                    #101:
                    <a href="https://octodex.github.com//daftpunktocat-thomas/">
                      <strong>Daftpunktocat-thomas</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/jeejkang">
                      <img
                        src="https://github.com/jeejkang.png"
                        width="24px"
                        height="24px"
                        alt="jeejkang"
                      />
                    </a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="https://octodex.github.com//daftpunktocat-guy/">
                  <img
                    src="https://octodex.github.com//images/daftpunktocat-guy.gif"
                    width="400"
                    height="400"
                    alt="Daftpunktocat-guy"
                  />
                </a>
                <ul>
                  <li>
                    #100:
                    <a href="https://octodex.github.com//daftpunktocat-guy/">
                      <strong>Daftpunktocat-guy</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/jeejkang">
                      <img
                        src="https://github.com/jeejkang.png"
                        width="24px"
                        height="24px"
                        alt="jeejkang"
                      />
                    </a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="https://octodex.github.com//nyantocat/">
                  <img
                    src="https://octodex.github.com//images/nyantocat.gif"
                    width="400"
                    height="400"
                    alt="Nyantocat"
                  />
                </a>
                <ul>
                  <li>
                    #46:
                    <a href="https://octodex.github.com//nyantocat/">
                      <strong>Nyantocat</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/cameronmcefee">
                      <img
                        src="https://github.com/cameronmcefee.png"
                        width="24px"
                        height="24px"
                        alt="cameronmcefee"
                      />
                    </a>
                  </li>
                </ul>
              </article>
            </section>
          </main>
          <footer>
            <div>
              <div>© 2013 – 2020 GitHub, Inc. All rights reserved.</div>
            </div>
          </footer>
        </body>
      </html>
    )
  }
}

export default App
