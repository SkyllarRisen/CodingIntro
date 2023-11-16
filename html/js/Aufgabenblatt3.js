const prompt = require("prompt-sync")();

function zuZahlen(total, days) {
  let mult = 1;
  if (days <= 14) {
    mult = 0.96;
  } else if (days <= 28) {
    mult = 0.98;
  }
  return total * mult;
}

const total = prompt("Wie hoch ist der zu zahlende Betrag? ");
const days = prompt("Wie viele Tage sind seit dem Rechnungsdatum vergangen? ");

console.log(zuZahlen(total, days));

function sternDreieck(n) {
  let output = [];

  for (let i = 0; i < n; i++) {
    let n = 0;
    output[i] = "* ";
    while (n < i) {
      output[i] += "* ";
      n++;
    }
  }

  for (let i = 0; i < n; i++) {
    console.log(output[i]);
  }
  for (let i = n - 2; i >= 0; i--) {
    console.log(output[i]);
  }
}

sternDreieck(5);
