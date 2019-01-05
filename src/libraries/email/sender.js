const sendMail = ({to, from, subject, text, html, service}) => {
  if (service === 'sendgrid') {
    //
  } else {
    throw new Error('Email service is invalid')
  }
}

export default sendMail
