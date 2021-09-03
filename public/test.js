let getCookies = function(){
  let pairs = document.cookie.split(";");
  let cookies = {};
  for (let i=0; i<pairs.length; i++){
    let pair = pairs[i].split("=");
    cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
  }
  return document.cookie
  // return cookies;
}

let cookies = getCookies()
console.log(cookies)
