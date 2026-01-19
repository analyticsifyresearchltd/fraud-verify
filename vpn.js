window.vpnRisk = 0;

fetch("https://ipapi.co/json/")
.then(r=>r.json())
.then(d=>{
  if(d.proxy || d.hosting) vpnRisk = 50;
  if(["AS9009","AS14061"].includes(d.asn)) vpnRisk += 30;
});
