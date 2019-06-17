export const getCookie = function(cookieName) {
    let cookieValue = document.cookie.split(';').filter(c => c.trim().split("=")[0] === cookieName)
    return cookieValue.length > 0 ? decodeURIComponent(cookieValue[0].split('=')[1]) : '';
};