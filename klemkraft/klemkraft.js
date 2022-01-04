const inputMotorkraft = document.getElementById('motorkraft');
const inputKlemkraft = document.getElementById('klemkraft');
const log = document.getElementById('log');

inputMotorkraft.addEventListener('input', updateValueMotorkraft);
//inputKlemkraft.addEventListener('input', updateValueklemkraft);

function updateValueMotorkraft(e) {
  let motorkraft = e.target.value;
  let f_motor = motorkraft/(76.4/2);
  let f_klem = f_motor/(0.2*Math.sqrt(2));
  let f_rull = f_klem*0.003*2*Math.sqrt(2);
  let f_lager = (10*f_klem*0.2/(76.4/2))*2;
  let f_rest = f_motor-f_rull-f_lager;
  let a = f_rest/50;

  log.innerHTML= "";

  log.textContent = "Kalkulasjon med motorkraft: " + motorkraft + " Nm";
  log.appendChild(document.createElement("hr"));
  log.appendChild(document.createElement("br"));  

  log.append("F_motor: " + f_motor.toFixed(2) + " kN");
  log.appendChild(document.createElement("br"));
  log.append("F_klem: " + f_klem.toFixed(2) + " kN");
  log.appendChild(document.createElement("br"));
  log.append("F_rull: " + f_rull.toFixed(4) + " kN");
  log.appendChild(document.createElement("br"));
  log.append("F_lager: " + f_lager.toFixed(4) + " kN");
  log.appendChild(document.createElement("br"));
  log.append("F_rest: " + f_rest.toFixed(4) + " kN");
  log.appendChild(document.createElement("br"));
  log.append("Akselerasjon ved totalvekt 50kg: " + a.toFixed(5)*1000 + " m/s^2");
  log.appendChild(document.createElement("br"));
}

function updateValueklemkraft(e) {
  let f_klem = e.target.value;
  let f_motor = f_klem/(0.2*Math.sqrt(2));
  let motorkraft = f_motor/(76.4/2);
  let f_rull = f_klem*0.003*2*Math.sqrt(2);
  let f_lager = (10*f_klem*0.2/(76.4/2))*2;
  let f_rest = f_motor-f_rull-f_lager;
  let a = f_rest/50;

  log.innerHTML="";

  log.textContent = "Kalkulasjon med klemkraft: " + f_klem + " kN";
  log.appendChild(document.createElement("hr"));
  log.appendChild(document.createElement("br"));

  log.append("motorkraft: " + motorkraft.toFixed(4) + " kN");
  log.appendChild(document.createElement("br"));
  log.append("f_motor: " + f_motor.toFixed(2) + " kN");
  log.appendChild(document.createElement("br"));
  log.append("F_rull: " + f_rull.toFixed(4) + " kN");
  log.appendChild(document.createElement("br"));
  log.append("F_lager: " + f_lager.toFixed(4) + " kN");
  log.appendChild(document.createElement("br"));
  log.append("F_rest: " + f_rest.toFixed(4) + " kN");
  log.appendChild(document.createElement("br"));
  log.append("Akselerasjon ved totalvekt 50kg: " + a.toFixed(5)*1000 + " m/s^2");
  log.appendChild(document.createElement("br"));
}