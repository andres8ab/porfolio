import { mailOptions, transporter } from '../../../config/nodemailer';

const CONTACT_MESSAGE_FIELDS = {
  name: 'Name',
  email: 'Email',
  message: 'Message',
};

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ''
  );
  const htmlData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `<h1 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h1><p class="form-answer" align="left">${val}</p>`),
    ''
  );

  return {
    text: stringData,
    html: htmlData,
  };
};

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ message: 'Bad request' });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: 'contact',
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: 'Bad request' });
};

export default handler;
