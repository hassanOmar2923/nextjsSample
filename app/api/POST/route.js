import nodemailer from 'nodemailer';
export const POST=async (req,)=>{

        const data = await req.json();
        var transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: "xasancumar491@gmail.com",
                  pass: `xmbj sxxa fpik xeve`,
                },
              });
        var mailOptions = {
                from: "xasancumar491@gmail.com",
                to: data.email,
                subject: "waad ku mhd santhy dalbashadaada  Domain and Hosting",
                html:`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Thank You for Your Domain and Hosting Order!</title>
                </head>
                <body>
                    <header>
                        <img src="http://res.cloudinary.com/dav4htlfu/image/upload/v1701437684/menu/oozjjx4leb2rkjwholq1.png" alt="Your Company Logo" width="100%" >
                        <h1>Thank You!</h1>
                    </header>
                    <main >
                        <p>Dear ${data.name},</p>
                        <p>ordered Domain name is ${data.Domain},</p>
                        <p>Thank you for choosing SOMPIC Technology to handle your domain and hosting needs!</p>
                        <p>We appreciate you entrusting us with your online presence. We are committed to providing you with a reliable, secure, and affordable solution for your website.</p>
                       
                        <p>We will send you further instructions on how to access your domain and hosting control panel shortly.</p>
                        <p>In the meantime, if you have any questions, please do not hesitate to contact us. Our support team is available 24/7 to assist you.</p>
                        <p>Thank you again for choosing SOMPIC Technology!</p>
                        <p>Sincerely,</p>
                        <a>252617623547</a>
                    </main>
                    <footer>
                        <p>&copy; 2023 SOMPIC Technology. All Rights Reserved.</p>
                    </footer>
                </body>
                </html>
                `
        }
        var mailOptions2 = {
          from: "xasancumar491@gmail.com",
          to: "xasancarabey11@gmail.com",
          subject: "orders",
          html:`<!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Thank You for Your Domain and Hosting Order!</title>
          </head>
          <body>
          <p>name:${data.name}</p>
          <p>email:${data.email}</p>
          <p>message:${data.message}</p>
          <p>Domain:${data.Domain}</p>
          </body>
</html>`
        }
       await transporter.sendMail(mailOptions)
             await transporter.sendMail(mailOptions2)
        return Response.json({status:true,message:"we have sent and email for u thanks",data:data});

}