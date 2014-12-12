mailer
======
This is a small node js server that can send emails using [nodemailer](https://www.npmjs.com/package/nodemailer).

## Running

`git clone https://github.com/fossasia/mailer.git`  
`cd mailer`

Install dependancies.

`npm install`

Visit localhost:3100 on your browser.

You can actually make it send emails using your gmail account. However it might involve you clearing some security for your account. Proceed at your own risk.

copy the config files:

`cp config.json.dist config.json`

Edit config.json with your gmail username and password. Fire up the mail server again. Send emails!
