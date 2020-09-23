import React, { Component } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Octocat } from './Octocat.1'
import { PageHeader } from './PageHeader'

class App extends Component {
  render() {
    return (
      <html>
        <PageHeader />
        <body>
          <Header />
          <main>
            <section>
              <Octocat
                name="Terracottocat"
                number="#150"
                image="https://octodex.github.com//images/Terracottocat_Single.png"
                href="https://octodex.github.com//terracottocat/"
                alt="Terracottocat"
                uref="https://github.com/chubbmo"
                creator="https://github.com/chubbmo.png"
                creatoralt="chubbmo"
              />
              <Octocat
                name="Octogatos"
                number="#148"
                image="https://octodex.github.com//images/Octogatos.png"
                href="https://octodex.github.com//octogatos/"
                alt="Octogatos"
                uref="https://github.com/cameronfoxly"
                creator="https://github.com/cameronfoxly.png"
                creatoralt="cameronfoxly"
              />

              <Octocat
                name="Sentrytocat"
                number="#143"
                image="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
                href="https://octodex.github.com//sentrytocat/"
                alt="Sentrytocat"
                uref="https://github.com/cameronmcefee"
                creator="https://github.com/cameronmcefee.png"
                creatoralt="cameronfoxly"
              />

              <Octocat
                name="Boxertocat"
                number="#141"
                image="https://octodex.github.com//images/boxertocat_octodex.jpg"
                href="https://octodex.github.com//boxertocat/"
                alt="Boxertocat"
                uref="https://github.com/rubyjazzy"
                creator="https://github.com/rubyjazzy.png"
                creatoralt="rubyjazzy"
              />

              <Octocat
                name="Surftocat"
                number="#140"
                image="https://octodex.github.com//images/surftocat.png"
                href="https://octodex.github.com//suftocat/"
                alt="Surftocat"
                uref="https://github.com/jeejkang"
                creator="https://github.com/jeejkang.png"
                creatoralt="jeejkang"
              />

              <Octocat
                name="Scubatocat"
                number="#138"
                image="https://octodex.github.com//images/scubatocat.png"
                href="https://octodex.github.com//scubatocat/"
                alt="Scubatocat"
                uref="https://github.com/cameronfoxly"
                creator="https://github.com/cameronfoxly.png"
                creatoralt="cameronfoxly"
              />

              <Octocat
                name="Dinotocat"
                number="#130"
                image="https://octodex.github.com//images/dinotocat.png"
                href="https://octodex.github.com//dinotocat/"
                alt="Dinotocat"
                uref="https://github.com/heyhayhay"
                creator="https://github.com/heyhayhay.png"
                creatoralt="heyhayhay"
              />

              <Octocat
                name="Hulatocat"
                number="#139"
                image="https://octodex.github.com//images/hula_loop_octodex03.gif"
                href="https://octodex.github.com//hulatocat/"
                alt="Hulatocat"
                uref="https://github.com/heyhayhay"
                creator="https://github.com/heyhayhay.png"
                creatoralt="heyhayhay"
              />

              <Octocat
                name="Maxtocat"
                number="#109"
                image="https://octodex.github.com//images/maxtocat.gif"
                href="https://octodex.github.com//Maxtocat/"
                alt="Maxtocat"
                uref="https://github.com/jeejkang"
                creator="https://github.com/jeejkang.png"
                creatoralt="jeejkang"
              />

              <Octocat
                name="Daftpunktocat-thomas"
                number="#101"
                image="https://octodex.github.com//images/daftpunktocat-thomas.gif"
                href="https://octodex.github.com//daftpunktocat-thomas/"
                alt="Daftpunktocat-thomas"
                uref="https://github.com/jeejkang"
                creator="https://github.com/jeejkang.png"
                creatoralt="jeejkang"
              />

              <Octocat
                name="Daftpunktocat-guy"
                number="#100"
                image="https://octodex.github.com//images/daftpunktocat-guy.gif"
                href="https://octodex.github.com//daftpunktocat-guy/"
                alt="Daftpunktocat-guy"
                uref="https://github.com/jeejkang"
                creator="https://github.com/jeejkang.png"
                creatoralt="jeejkang"
              />

              <Octocat
                name="Nyantocat"
                number="#46"
                image="https://octodex.github.com//images/nyantocat.gif"
                href="https://octodex.github.com//nyantocat/"
                alt="cameronmcefee"
                uref="https://github.com/cameronmcefee"
                creator="https://github.com/cameronmcefee.png"
                creatoralt="cameronmcefee"
              />
            </section>
          </main>
          <Footer />
        </body>
      </html>
    )
  }
}

export default App
