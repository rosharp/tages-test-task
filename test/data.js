const data = {
  navbarItemsCount: 6,
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
