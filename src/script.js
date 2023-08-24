function calculatePassword() {
    const callsign = document.getElementById("inputText").value;
    const password = generatePassword(callsign);
    document.getElementById("generatedPassword").value = password;
    document.getElementById("output").classList.remove("hidden");
  }
  
  function generatePassword(callsign) {
    let stophere = callsign.indexOf("-");
    if (stophere > 0) callsign = callsign.substr(0, stophere);
    let realcall = callsign.toUpperCase();
    while (realcall.length < 10) realcall += " ";
    let hash = 0x73e2;
    let i = 0;
    let len = realcall.length;
    while (i < len) {
      hash ^= realcall.charCodeAt(i) << 8;
      hash ^= realcall.charCodeAt(i + 1);
      i += 2;
    }
    return hash & 0x7fff;
  }
  