import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (req, res) => {
  try {
    await sendgrid.send({
      to: "neangelopoulos@gmail.com",
      from: "neangelopoulos@gmail.com",
      subject: `new mail from portfolio site: ${req.body.subject}`,
      html: `<!DOCTYPE html>
      <html lang='en'>
      <head>
        <meta charset='utf-8'>
        <title>new mail</title>
        <meta name="description" content="new mail from portfolio site">
        <meta name="author" content="Nicholas Angelopoulos">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      </head>
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';"></div>
        <div class="container" style="margin-left: 20px;margin-right: 20px;">
          <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
          <div style="font-size: 16px;">
            <p>Message:</p>
            <p>${req.body.message}</p>
            <br>
          </div>
        </div>
      </body>
      </html>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: "" });
};

export default sendEmail;
