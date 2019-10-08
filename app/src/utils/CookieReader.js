export default function CookieReader() {
  function deleteCookie(name, value) {
    let date = new Date();
    date.setTime(date.getTime() - 1);
    document.cookie = `${name}=${value};SameSite=Strict;path=/;expires=${date.toUTCString()}`;
  }

  function setCookie(name, value, expires) {
    document.cookie = `${name}=${value};SameSite=Strict;path=/;expires=${expires}`;
  }

  function hasCookie(name) {
    return !!document.cookie
      .split(';')
      .filter(item => item.trim().startsWith(name)).length;
  }

  return {
    setCookie: setCookie,
    deleteCookie: deleteCookie,
    hasCookie: hasCookie,
  };
}
