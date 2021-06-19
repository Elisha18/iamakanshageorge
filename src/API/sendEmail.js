import emailjs from "emailjs-com";

const api = {
  serviceKey: "service_ej13tot",
  templateKey: "template_wem6fne",
  userId: "user_us7DPHXJAgp74wqkIyPbN",
};

const sendEmail = async (userName, userEmail, userMessage) => {
  const messageFromUser = {
    from_name: userName,
    from_email: userEmail,
    message: userMessage,
  };

  return await emailjs.send(
    api.serviceKey,
    api.templateKey,
    messageFromUser
    // api.userId
  );
};

export default sendEmail;
// name - akanshageorge
// service id - service_ej13tot
//user id = user_us7DPHXJAgp74wqkIyPbN
//template-id = template_wem6fne