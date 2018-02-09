/**
 * @name emailTemplate
 * @description Email template generation function
 * @function
 * @param {String} username
 * @param {String} message
 * @param {String} link
 * @return {String} Email template
 */
const emailTemplate = (username, message, link) => (
  `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    >

    <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Quattrocento+Sans" rel="stylesheet">
  
    <style type="text/css">
      @import url("https://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");
      img {
        max-width: 100%;
        margin: 0 auto;
        display: block;
      }
  
      body {
        background-color: white;
        height: 100vh;
        font-family: 'Quattrocento Sans', sans-serif;
      }
  
      table {
        width: 400px;
        height: 50px;
        text-align: center;
        margin: auto;
        background-color: red;
        padding: 0 20px;
      }

      h1,h2,h3,h4,h5,h6,.brand-logo{
        font-family: 'Acme', sans-serif;
      }
  
      a {
        color: #5cb85c;
        text-decoration: none;
      }
  
      a:hover {
        text-decoration: underline;
      }
  
      h2 {
        font-size: 28px;
        color: red;
      }
  
      h6 {
        font-size: 24px;
        color: white;
        margin: 30px auto;
      }
  
      h5 {
        font-size: 16px;
        color: white;
        line-height: 1.25;
      }
  
      p {
        font-size: 14px;
        color: white;
      }
  
      tr {
        height: 10px;
      }
  
      .btn {
        border-radius: 5px;
        padding-left: 30px;
        padding-right: 30px;
        font-weight: bold;
        height: 50px;
        width: 250px;
        font-family: Helvetica, Arial, sans-serif;
        color: #5cb85c;
        text-transform: uppercase;
        background-color: rgb(255, 255, 255);
      }
  
      .body-wrap {
        border-radius: 5px;
        background-color: transparent;
        margin-bottom: 10px;
        margin-top: 20px;
      }

    </style>
  </head>
  
  <body>
    <div style="background-color: white; height: 100vh;">
      <table class="body-wrap">
        <tbody>
          <tr>
            <td>
              <h2>
                <i>MORE-RECIPES</i>
              </h2>
              </h2>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <table>
              <tbody>
                <tr>
                  <td>
                    <h6> Hello, ${username}</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>${message}</h5>
                  </td>
                </tr>
              </tbody>
            </table>
          </tr>
          <tr>
            <table>
              <tbody>
                <tr>
                  <td style=" height: 20px;"></td>
                </tr>
                <tr>
                  <td>
                    <a href=${link} target="_blank">
                    <button class="btn">Click</button></a>
                  </td>
                </tr>
                <tr>
                  <td style=" height: 30px;"></td>
                </tr>
              </tbody>
            </table>
          </tr>
        </tbody>
      </table>
      <table class="body-wrap">
        <tbody>
          <tr>
            <td>
              <p>More-recipe-gbenga.herokuapp.com
              <p>
            </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
  
  </html>
  `
);

export default emailTemplate;
