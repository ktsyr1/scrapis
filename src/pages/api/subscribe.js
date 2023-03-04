import nodemailer from "nodemailer";

export default function handler(req, res) {
    const email = req.body.email;

    // TODO: Add email address to database or file
    // ...

    // Send confirmation email
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: "your-ethereal-email@example.com",
            pass: "your-ethereal-email-password",
        },
    });

    const mailOptions = {
        from: "MySite Newsletter <newsletter@mysite.com>",
        to: email,
        subject: "Thanks for subscribing to the MySite newsletter!",
        html: "<p>Stay tuned for the latest news and updates.</p>",
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error sending confirmation email");
        } else {
            console.log("Email sent:", info.messageId);
            res.status(200).send("Subscribed successfully");
        }
    });
}
