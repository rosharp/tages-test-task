const data = {
  feedbackForm: {
    inputFields: {
      name: "Имя*",
      phone: "Телефон*",
      company: "Компания",
      email: "Почта*",
      comment: "Комментарий",
    },
    inputLengths: {
      nameLength: 5,
      validPhoneLength: 10,
      invalidPhoneLength: 9,
      companyLength: 5,
      emailLength: 5,
      commentLength: 5,
    },
    attributes: {
      error: "form__input_error",
    },
    domain: "@gmail.com",
    credValidity: {
      case1: true,
      case2: false,
    },
  },
  regex: {
    redir:
      /(http|ftp|https):\/\/(redir.[\w_-]+(?:(?:\.[\w_-]+)+))([\w.@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/,
    url: /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/g,
    cancellation: /(cancellation|unsubscribe|cancel+)/g,
    urlScheme: /(https:\/\/|http:\/\/)/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    phoneNumber: /^([+]?[0-9\s-\(\)]{3,25})*$/,
  },
};

module.exports = data;
