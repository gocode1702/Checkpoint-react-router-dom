import React from "react";
import "./Translate.css";
import Cookies from "cookies";
import location from "location";
import google from "google";
export default function Translate() {
  // eslint-disable-next-line
  var http = require("http");
  // eslint-disable-next-line
  var Cookies = require("cookies");
  return (
    <div>
      <h1>My first website</h1>
      <p>Welcome to my website</p>
      <div id="translate"></div>

      <p class="translate">This text will be translated</p>
    </div>
  );
}
var Cookie = {
  set: function (name, value, days) {
    var domain, domainParts, date, expires, host;

    if (days) {
      date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toGMTString();
    } else {
      expires = "";
    }

    host = location.host;
    if (host.split(".").length === 1) {
      // no "." in a domain - it's localhost or something similar
      document.cookie = name + "=" + value + expires + "; path=/";
    } else {
      // Remember the cookie on all subdomains.
      //
      // Start with trying to set cookie to the top domain.
      // (example: if user is on foo.com, try to set
      //  cookie to domain ".com")
      //
      // If the cookie will not be set, it means ".com"
      // is a top level domain and we need to
      // set the cookie to ".foo.com"
      domainParts = host.split(".");
      domainParts.shift();
      domain = "." + domainParts.join(".");

      document.cookie =
        name + "=" + value + expires + "; path=/; domain=" + domain;

      // eslint-disable-next-line
      // check if cookie was successfuly set to the given domain
      // (otherwise it was a Top-Level Domain)
      // eslint-disable-next-line
      if (Cookie.get(name) == null || Cookie.get(name) != value) {
        // append "." to current domain
        domain = "." + host;
        document.cookie =
          name + "=" + value + expires + "; path=/; domain=" + domain;
      }
    }
  },

  get: function (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      // eslint-disable-next-line
      var c = ca[i];
      // eslint-disable-next-line
      while (c.charAt(0) == " ") {
        c = c.substring(1, c.length);
      }
      // eslint-disable-next-line
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },

  erase: function (name) {
    Cookie.set(name, "", -1);
  },
};
// eslint-disable-next-line
function googleTranslateElementInit() {
  let url = new URL(window.location);
  let lang = url.searchParams.get("lang");
  if (lang) {
    console.log(lang);
    Cookies.set("googtrans", `/en/${lang}`, { path: "" });
    Cookie.set("googtrans", `/en/${lang}`);
    Cookies.set("googtrans", `/en/${lang}`, {
      path: "",
      domain: location.host,
    });
  } else {
    Cookie.erase("googtrans");
    Cookies.remove("googtrans", { path: "" });
  }
  new google.translate.TranslateElement({ pageLanguage: "en" }, "translate");
  // add event listener to change url param on language selection change
  let langSelector = document.querySelector(".goog-te-combo");
  langSelector.addEventListener("change", function () {
    let lang = langSelector.value;
    var newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?lang=" +
      lang;
    window.history.pushState({ path: newurl }, "", newurl);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  (function () {
    Cookie.erase("googtrans");
    var googleTranslateScript = document.createElement("script");
    googleTranslateScript.type = "text/javascript";
    googleTranslateScript.async = true;
    googleTranslateScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(googleTranslateScript);
  })();
});
