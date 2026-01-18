function finalizeRedirect(){

 let status = (window.finalScore >= 70) ? "PASS" : "FAIL"

 let url = "https://au.focusvision.com/survey/selfserve/6a7/260103?"
 url += "FraudScore=" + window.finalScore
 url += "&FraudStatus=" + status
 url += "&Fingerprint=" + encodeURIComponent(window.fp)

 window.location.href = url
}
