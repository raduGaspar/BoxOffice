import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <title>BoxOffice - Your tv-show tracking solution</title>
          <link rel='shortcut icon' type='image/x-icon' href='/static/assets/favicon.png' />

          <script src='https://www.gstatic.com/firebasejs/4.4.0/firebase.js' />

          { /* language=CSS */ }
          <style jsx global>{`
            * {
              margin: 0;
              padding: 0;
              font-family: Arial;
              font-size: 14px;
            }
            html, body {
              width: 100%;
              height: 100%;
              background: #15151f;
            }

            .text-center {
              text-align: center;
            }

            .btn-login {
              box-sizing: border-box;
              position: relative;
              margin: 0.2em;
              padding: 0 15px 0 46px;
              border: none;
              text-align: left;
              line-height: 34px;
              white-space: nowrap;
              border-radius: 0.2em;
              font-size: 16px;
              color: #FFF;
            }
            .btn-login:before {
              content: "";
              box-sizing: border-box;
              position: absolute;
              top: 0;
              left: 0;
              width: 34px;
              height: 100%;
            }
            .btn-login:focus {
              outline: none;
            }
            .btn-login:active {
              box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
            }

            .btn-login.facebook {
              background-color: #4C69BA;
              background-image: linear-gradient(#4C69BA, #3B55A0);
              text-shadow: 0 -1px 0 #354C8C;
            }
            .btn-login.facebook:before {
              border-right: #364e92 1px solid;
              background: url('/static/assets/icon-facebook.png') 6px 6px no-repeat;
            }
            .btn-login.facebook:hover,
            .btn-login.facebook:focus {
              background-color: #5B7BD5;
              background-image: linear-gradient(#5B7BD5, #4864B1);
            }

            .btn-login.google {
              /*font-family: "Roboto", Roboto, arial, sans-serif;*/
              background: #DD4B39;
            }
            .btn-login.google:before {
              border-right: #BB3F30 1px solid;
              background: url('/static/assets/icon-google.png') 6px 6px no-repeat;
            }
            .btn-login.google:hover,
            .btn-login.google:focus {
              background: #E74B37;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
