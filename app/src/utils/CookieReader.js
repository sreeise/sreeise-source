export default function CookieReader() {
  function deleteCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = `${name}=${value};SameSite=Strict;path=/;expires=${date.toUTCString()}`;
  }

  function setCookie(cookie) {
    document.cookie = cookie;
  }

  function hasConsent(name) {
    return !!document.cookie
      .split(';')
      .filter(item => item.trim().startsWith(name)).length;
  }

  return {
    setCookie: setCookie,
    deleteCookie: deleteCookie,
    hasConsent: hasConsent,
  };
}
