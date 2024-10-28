import nodemailer from 'nodemailer';
import { ADMIN_EMAIL, PASS_KEY } from '../config/envoirment.mjs';


const SendMail = async (data) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587, 
            secure: false,  
            auth: {
                user: ADMIN_EMAIL,
                pass: PASS_KEY
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Admin Mail Option
        const AdminMail = {
            from: data.email,
            to: ADMIN_EMAIL,
            subject: `New Contact Form Submission from ${data.fullName}`,
            text: `
                Name: ${data.fullName}
                Email: ${data.email}
                Phone: ${data.phone}
                Subject: ${data.subject}
                Message: ${data.message}
            `
        };

        // Client Email Confirmation
        const ClientMail = {
            from:ADMIN_EMAIL ,
            to: data.email,
            subject: `Thank you for contacting us, ${data.fullName}`,
            text: 'Thank you for your submission. Our team will contact you soon.'
        };

        // Send Email
        await transporter.sendMail(AdminMail);
        await transporter.sendMail(ClientMail);

        return true;
    } catch (err) {
        console.log('Error sending mail:', err);
        return false; 
    }
};

export default SendMail;
