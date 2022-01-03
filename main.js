let params = new URLSearchParams(location.search);
let msg  = params.get('m')

var decode = function(input) {
  // Replace non-url compatible chars with base64 standard chars
  input = input
      .replace(/-/g, '+')
      .replace(/_/g, '/');

  // Pad out with standard base64 required padding characters
  var pad = input.length % 4;
  if(pad) {
    if(pad === 1) {
      throw new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding');
    }
    input += new Array(5-pad).join('=');
  }

  return input;
}

if (msg!==null) {
  console.log(msg)
  let msg_decoded = decode(msg)
  msg_decoded = decodeURIComponent(window.atob(msg_decoded));
  console.log(msg_decoded)
  document.getElementById('personal-message').innerHTML = msg_decoded;
}
