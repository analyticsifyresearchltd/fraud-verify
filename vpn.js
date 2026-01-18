window.vpnScore = 0;

fetch("https://ipinfo.io/json")
  .then(r => r.json())
  .then(d => {
    const org = (d.org || "").toLowerCase();

    if (org.includes("vpn")) vpnScore += 40;
    if (org.includes("hosting") || org.includes("colo")) vpnScore += 30;
    if (org.includes("google") || org.includes("amazon") || org.includes("azure")) vpnScore += 30;
  })
  .catch(() => vpnScore += 20);
