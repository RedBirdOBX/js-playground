class CookieUtility
{
    static RetrieveFromQueryString: (name: string) => string = function (name)
    {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)",
            regex = new RegExp(regexS),
            results = regex.exec(window.location.href);

        if (results === null)
        {
            //console.log("nothing found in querystring");
            return "";
        }
        else
        {
            //console.dir(results);
            //console.log(`found in querystring: ${results[1]}`);
            return decodeURIComponent(results[1].replace(/\+/g, " "));
        }
    };

    static DeletePreviousCookie: (cookieName: string) => void = function (cookieName)
    {
        document.cookie = cookieName + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        //console.log(`Previous cookie ${cookieName} was deleted.`);
    };

    static SetNewCookie: (name: string, value: string) => void = function (name, value)
    {
        
        // domain can be tricky....
        let domain : string = "127.0.0.1";  

        // expires 30 days
        let  expDays : number = 30;
        let expDate : Date = new Date();
        expDate.setTime(expDate.getTime() + (expDays * 24 * 60 * 60 * 1000));

        let expires: string = expDate.toUTCString();
        document.cookie = `${name}=${value};expires=${expires};domain=${domain};path=/`;
    };

    static CheckForExistingCookie: (cookieName: string) => string = function (cookieName)
    {
        let cookieVal: string = CookieUtility.GetExistingCookie(cookieName);
        //console.log(`checking for ${cookieName} cookie`);

        // if (cookieVal.length > 0)
        // {
        //     console.log(`cookie ${cookieName} found. value: ${cookieVal}`);
        // }
        // else
        // {
        //     console.log(`cookie ${cookieName} NOT found.`);
        // }

        return cookieVal.length !== 0 ? cookieVal : "no cookie found for " + cookieName + ".";
    };

    static GetExistingCookie: (cookieName: string) => string = function (cookieName)
    {
        let name : string = cookieName + "=";
        let decodedCookie : string = decodeURIComponent(document.cookie);
        let ca: string[] = decodedCookie.split(';');

        // here's the cookie!
        console.log("cookie is....");
        console.dir(ca);

        for (var i = 0; i < ca.length; i++)
        {
            var c = ca[i];
            while (c.charAt(0) === ' ')
            {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0)
            {
                return c.substring(name.length, c.length);
            }
        }

        return "";
    };
}

window.onload
{
    let superheroCookie: string = "superhero";

    // get
    let cookieValue: string = CookieUtility.CheckForExistingCookie(superheroCookie);
    let cookieValueLabel = <HTMLElement>document.getElementById("cookie-value-label");
    cookieValueLabel.innerHTML = cookieValue;

    // set
    let newCookieValue: string = CookieUtility.RetrieveFromQueryString(superheroCookie);
    let isSuperHeroInUrl: boolean = (newCookieValue.length > 0) ? true : false;

    //console.log("isSuperHeroInUrl " + isSuperHeroInUrl);

    if (isSuperHeroInUrl)
    {
        CookieUtility.DeletePreviousCookie(superheroCookie);
        CookieUtility.SetNewCookie(superheroCookie, newCookieValue);
    }
};
