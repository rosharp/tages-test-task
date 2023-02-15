const data = {
  navbarItemsCount: 6,
  feedbackForm: {
    name: "Имя*",
    phone: "Телефон*",
    company: "Компания",
    email: "Почта*",
    comment: "Комментарий",
    nameLength: 5,
    validPhoneLength: 10,
    invalidPhoneLength: 9,
    companyLength: 5,
    emailLength: 5,
    commentLength: 5,
  },
  basicAuth: {
    login: "",
    password: "",
  },
  regex: {
    redir:
      /(http|ftp|https):\/\/(redir.[\w_-]+(?:(?:\.[\w_-]+)+))([\w.@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/,
    url: /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/g,
    cancellation: /(cancellation|unsubscribe|cancel+)/g,
    urlScheme: /(https:\/\/|http:\/\/)/,
  },
};

module.exports = data;
