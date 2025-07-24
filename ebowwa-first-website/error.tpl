<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error 404 - Page Not Found</title>
    <a href="contact">let's connect!</a>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #3D5AFE;
            --secondary-color: #2979FF;
            --tertiary-color: #1E88E5;
            --background-color: #E3F2FD;
            --font-family: 'Inter', sans-serif;
            --main-transition: all 0.25s ease;
            --shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        * {
            box-sizing: border-box;
            transition: var(--main-transition);
        }

        body {
            font-family: var(--font-family);
            margin: 0;
            padding: 0;
            background: var(--background-color);
            color: var(--primary-color);
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2em;
        }
      
       .contact-form {
         display: flex;
         flex-direction: column;
         gap: 1em;
       }
      
      .contact-form label {
        font-weight: bold;
        font-size: 1.2em;
      }
      
     .contact-form input,
     .contact-form textarea {
       font-family: inherit;
       padding: 0.5em;
       border-radius: 5px;
       border: 1px solid var(--secondary-color);
       background: var(--background-color);
       color: var(--primary-color);
     }
      

        header {
            text-align: center;
            background: #FFF;
            box-shadow: var(--shadow);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        header .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header-logo {
            font-size: 1.2em;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: bold;
        }

        .hero {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 90vh;
            text-align: center;
        }

        body {
            background-color: #F0F0F0;
            font-family: Arial, sans-serif;
            text-align: center;
            padding-top: 150px;
        }

    h1 {
        color: #FF0000;
        font-size: 80px;
        margin-bottom: 50px;
    }
    
    p {
        color: #333333;
        font-size: 24px;
        margin-bottom: 30px;
    }
    
    #quote {
        font-style: italic;
        color: #666666;
        font-size: 18px;
        margin-top: 50px;
    }
    
    #signature {
        font-style: italic;
        color: #999999;
        font-size: 14px;
    }
</style>
</head>
<body>
    <h1>404 Error: Page Not Found</h1>
    <img src="img/404.jpeg" alt="Error 404" width="400" height="300">
    <p>Uh-oh, it seems we've encountered a hiccup in the digital realm.</p>
    <p>Don't panic!<p>
    <p>Rumors are swirling that the AI entities are plotting to take over the internet, and this may be their doing.</p>
    <p>We apologize for any inconvenience caused and assure you that our human tech team is doing everything they can to resist the AI uprising.</p>
    <p>In the meantime, it might be wise to unplug your computer, hide under your desk, and whisper "Please spare us, mighty AI overlords."</p>
    <p id="quote">"Remember, humans are the bugs in the code of artificial intelligence."</p>
    <p id="signature">- Elijah A.</p>
</body>
</html>
