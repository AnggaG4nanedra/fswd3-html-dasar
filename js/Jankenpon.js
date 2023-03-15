alert('halo bestie');
alert('yuk main batu gunting kertas')

var choices = ["batu", "gunting", "kertas"];

var userChoice = prompt("Pilih batu, gunting, atau kertas.");

var computerChoice = choices[Math.floor(Math.random() * choices.length)];

if (userChoice === computerChoice) {
  alert("Seri! Anda memilih " + userChoice + " dan komputer juga memilih " + computerChoice + ".");
} else if ((userChoice === "batu" && computerChoice === "gunting") || (userChoice === "gunting" && computerChoice === "kertas") || (userChoice === "kertas" && computerChoice === "batu")) {
  alert("Anda menang! Anda memilih " + userChoice + " dan komputer memilih " + computerChoice + ".");
} else {
  alert("Anda kalah! Anda memilih " + userChoice + " dan komputer memilih " + computerChoice + ".");
}