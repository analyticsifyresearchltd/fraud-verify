async function checkVPN(){
 let ip = await fetch("https://ipinfo.io/json").then(r=>r.json());
 let bad = false;

 if(ip.org && ip.org.toLowerCase().includes("hosting")) bad=true;
 if(ip.org && ip.org.toLowerCase().includes("vpn")) bad=true;

 return {bad, ip};
}
window.checkVPN = checkVPN;
