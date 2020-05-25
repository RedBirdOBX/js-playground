"use strict";
class CookieUtility {
}
CookieUtility.RetrieveFromQueryString = function (name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)", regex = new RegExp(regexS), results = regex.exec(window.location.href);
    if (results === null) {
        return "";
    }
    else {
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
};
CookieUtility.DeletePreviousCookie = function (cookieName) {
    document.cookie = cookieName + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};
CookieUtility.SetNewCookie = function (name, value) {
    let domain = "127.0.0.1";
    let expDays = 30;
    let expDate = new Date();
    expDate.setTime(expDate.getTime() + (expDays * 24 * 60 * 60 * 1000));
    let expires = expDate.toUTCString();
    document.cookie = `${name}=${value};expires=${expires};domain=${domain};path=/`;
};
CookieUtility.CheckForExistingCookie = function (cookieName) {
    let cookieVal = CookieUtility.GetExistingCookie(cookieName);
    return cookieVal.length !== 0 ? cookieVal : "no cookie found for " + cookieName + ".";
};
CookieUtility.GetExistingCookie = function (cookieName) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    console.log("cookie is....");
    console.dir(ca);
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};
window.onload;
{
    let superheroCookie = "superhero";
    let cookieValue = CookieUtility.CheckForExistingCookie(superheroCookie);
    let cookieValueLabel = document.getElementById("cookie-value-label");
    cookieValueLabel.innerHTML = cookieValue;
    let newCookieValue = CookieUtility.RetrieveFromQueryString(superheroCookie);
    let isSuperHeroInUrl = (newCookieValue.length > 0) ? true : false;
    if (isSuperHeroInUrl) {
        CookieUtility.DeletePreviousCookie(superheroCookie);
        CookieUtility.SetNewCookie(superheroCookie, newCookieValue);
    }
}
;
//# sourceMappingURL=cookies.js.map