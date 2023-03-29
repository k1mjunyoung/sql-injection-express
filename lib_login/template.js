module.exports = {
  HTML: function (title, body, authStatusUI) {
    return `
      <!doctype html>
      <html>
      <head>    
        <title>Login TEST - ${title}</title>
        <meta charset="utf-8">
        <style>
          @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
          * {
          box-sizing: border-box;
        }
        body {
          font-family: "Montserrat", sans-serif;
          margin: 0;
          padding: 0;
        }
        .wrapper {
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #ebecf0;
          overflow: hidden;
        }
        .container {
          border-radius: 10px;
          box-shadow: -5px -5px 10px #fff, 5px 5px 10px #babebc;
          position: absolute;
          width: 768px;
          min-height: 480px;
          overflow: hidden;
        }
        form {
          background: #ebecf0;
          display: flex;
          flex-direction: column;
          padding: 0 50px;
          height: 90%;
          justify-content: center;
          align-items: center;
        }
        form input {
          background: #eee;
          padding: 16px;
          margin: 8px 0;
          width: 50%;
          border: 0;
          outline: none;
          border-radius: 20px;
          box-shadow: inset 7px 2px 10px #babebc, inset -5px -5px 12px #fff;
        }
        button {
          border-radius: 20px;
          border: none;
          outline: none;
          font-size: 12px;
          font-weight: bold;
          padding: 15px 45px;
          margin: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 80ms ease-in;
        }
        .form_btn {
          box-shadow: -5px -5px 10px #fff, 5px 5px 8px #babebc;
        }
        .form_btn:active {
          box-shadow: inset 1px 1px 2px #babebc, inset -1px -1px 2px #fff;
        }
        .overlay_btn {
          background-color: #ff4b2b;
          color: #fff;
          box-shadow: -5px -5px 10px #ff6b3f, 5px 5px 8px #bf4b2b;
        }
        .sign-in-container {
          position: absolute;
          left: 0;
          width: 100%;
          height: 100%;
          transition: all 0.5s;
        }
        .overlay-left {
          display: flex;
          flex-direction: column;
          padding: 0 50px;
          justify-content: center;
          align-items: center;
          position: absolute;
          right: 0;
          width: 50%;
          height: 100%;
          opacity: 0;
          background-color: #ff4b2b;
          color: #fff;
          transition: all 0.5s;
        }
        .overlay-right {
          display: flex;
          flex-direction: column;
          padding: 0 50px;
          justify-content: center;
          align-items: center;
          position: absolute;
          right: 0;
          width: 50%;
          height: 100%;
          background-color: #ff4b2b;
          color: #fff;
          transition: all 0.5s;
        }
        .container.right-panel-active .sign-in-container {
          transform: translateX(100%);
          opacity: 0;
        }
        .container.right-panel-active .sign-up-container {
          transform: translateX(100%);
          opacity: 1;
          z-index: 2;
        }
        .container.right-panel-active .overlay-right {
          transform: translateX(-100%);
          opacity: 0;
        }
        .container.right-panel-active .overlay-left {
          transform: translateX(-100%);
          opacity: 1;
          z-index: 2;
        }
        form h1 {
          font-weight: bold;
          margin: 0;
          color: #000;
        }
        
        p {
          font-size: 16px;
          font-weight: bold;
          letter-spacing: 0.5px;
          margin: 20px 0 30px;
        }
        span {
          font-size: 12px;
          color: #000;
          letter-spacing: 0.5px;
          margin-bottom: 10px;
        }
        
        .anchor-text {
          display: flex;
          justify-content: center;
        }
        
        
      </style>
      </head>
      <body>
        <div class="background">
          ${authStatusUI}
          ${body}
        </div>
      </body>
      </html>
      `;
  },
};
