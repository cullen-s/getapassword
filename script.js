function run(value) {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  document.getElementById('pwdRangeSlider').innerHTML = value;
  let pwLength = value;
  let password = "";

  const array = new Uint32Array(chars.length);
  window.crypto.getRandomValues(array);

  for (let i = 0; i < pwLength; i++) {
    password += chars[array[i] % chars.length];
  }

  const resultField = document.getElementById("resultfield");
  resultField.value = password;
}

function copyReField() {
  var ttc = document.getElementById("resultfield");
  ttc.select();
  ttc.setSelectionRange(0,99999);
  navigator.clipboard.writeText(ttc.value);
  ttc.value = "Password Copied to Clipboard!";
}