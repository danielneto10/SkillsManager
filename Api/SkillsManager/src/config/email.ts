import * as nodemailer from 'nodemailer';

const user = process.env.USER_MAILTRAP;
const password = process.env.PASSWORD_MAILTRAP;

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: user,
    pass: password,
  },
});

const sendEmail = async (email: string, resetToken: string) => {
  const message = {
    from: 'noreply@skillmanagerapi.com',
    to: email,
    subject: 'Redefinir senha',
    text: `Token para redefinir a senha: ${resetToken}`,
  };

  console.log('Enviando email...');
  await transport.sendMail(message);
};

export default sendEmail;
