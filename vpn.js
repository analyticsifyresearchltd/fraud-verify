window.vpnScore = 0;

fetch("https://ipinfo.io/json")
.then(r=>r.json())
.then(d=>{
  const org = (d.org||"").toLowerCase();
  const country = (d.country||"").toLowerCase();

  if(org.includes("vpn") || org.includes("hosting") || org.includes("colo")) vpnScore += 40;
  if(org.includes("google") || org.includes("amazon") || org.includes("azure")) vpnScore += 30;
  if(country === "ru" || country === "vn") vpnScore += 10;   // common farm geos
})
.catch(()=>vpnScore += 20);
