let userInput, terminalOutput;

const app = () => {
  window.userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase().trim();

  if (input.length === 0) {
    return;
  }
  if (input === "clear") {
    window.location.reload();
  }
  if (input === "party") {
    startTheParty();
  }

  if (input === "sudo rm -rf") {
    whooops();
  }

  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: <span class="output">"${input}"</span></div>`;
  } else {
    output += `<div class="output"> ${COMMANDS[input]} </div>`;
  }

  terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  userInput = document.getElementById("userInput");
  const input = window.userInput.innerHTML;

  if (e.key === "Enter") {
    console.log("hey");
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
if (document.readyState !== "loading") {
  app();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const startTheParty = () => {
  var confettiSettings = {
    target: "canvas",
    max: "1000",
    size: "1",
    animate: true,
    props: ["square", "triangle", "line"],
    colors: [
      [165, 104, 246],
      [230, 61, 135],
      [0, 199, 228],
      [253, 214, 126]
    ],
    clock: "25",
    rotate: true,
    width: "1680",
    height: "971",
    start_from_edge: true,
    respawn: false
  };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
};

const whooops = () => {
  document.body.querySelector(".hero").remove();
  document.body.style.background = "#000";
  document.body.style.width = "100vw";
  document.body.style.height = "100vh";
};

const COMMANDS = {
  ls: "message.txt<br> <i>you can use ls -a or ls -la for more details</i>",
  "ls -a":
    ".&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..&nbsp;&nbsp;&nbsp;&nbsp;&nbspmessage.txt",
  "ls -la":
    "total 3 <br>drwxr-xr-x          3    mderri  future_husband    96 Dec 17 12:31 . <br>drwx------@         43 mderri  future_husband  1376 Dec 17 12:30 ..<br>-rw-r--r--          1 mderri  future_husband     4093 Dec 17 12:31 message.txt",
  help:
    'Supported commands: ["<span class="code">ls +[option]</span>", "<span class="code">cat</span>", "<span class="code">party</span>"]',
  "cat message.txt":
    "Chère Nada <br><br>Je suis profondément désolé pour la douleur que je t'ai causée. Je regrette sincèrement mes actions et je comprends si tu ne veux plus être avec moi. Tu mérites d'être aimée et respectée, et je regrette de ne pas avoir été capable de te donner cela de t'avoir laissé partir. Mais je veux que tu saches que je t'aime profondément. Tu es la personne la plus importante dans ma vie et je suis tellement triste de t'avoir blessée." +
    "<br><br>--------------------------------------------------" +
    "<br> <em>Mon amour, tu es mon ciel,<br>" +
    "Bleu et vaste, rempli d'étoiles brillantes." +
    "<br>Tu es mon ciel,<br>" +
    "Gris et sombre, privé de rayons de soleil." +
    "<br>Tu es mon soleil,<br>" +
    "Chaud et brillant, illuminant ma vie" +
    "<br>Tu es mon soleil,<br>" +
    "Loin et inaccessible, refusant de briller." +
    "<br>Tu es mon océan,<br>" +
    "Profond et infini, rempli de mystère." +
    "<br>Tu es mon océan,<br>" +
    "Triste et agité, rempli de tempêtes." +
    "<br>Tu es ma roche,<br>" +
    "Déterminée et solide, me soutenant toujours." +
    "<br>Tu es ma roche,<br>" +
    "Froide et distante, me rejetant toujours." +
    "<br>Tu es mon arbre,<br>" +
    "Fort et majestueux, me protégeant des tempêtes." +
    "<br>Tu es mon arbre,<br>" +
    "Sec et cassant, me laissant tomber.</em><br>" +
    "</em> <br> " +
    "Si tu veux bien me donner une chance de me racheter, je promets de faire tout ce que je peux pour te montrer à quel point tu comptes pour moi et pour te montrer à quel point je suis sincèrement désolé. Je t'envoie tout mon amour et tous mes vœux pour ton anniversaire. Je sais que cela ne peut pas réparer ce que j'ai fait, mais j'espère que cela montrera à quel point tu es importante pour moi. <br><br><br>Sincèrement, <br>Mohamed Derri.",
  party:
    "________________________<br>" +
    "<🎉Happy Birthday Nada 🎉><br>" +
    "  ------------------------<br>" +
    "       &nbsp;&nbsp;&nbsp;&nbsp;^__^ <br>" +
    "       &nbsp;&nbsp;&nbsp;&nbsp;(oo)" +
    "\\" +
    "_______<br>" +
    "       &nbsp;&nbsp;&nbsp;&nbsp;(__)" +
    "\\" +
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)// " +
    "\\" +
    "<br>" +
    "           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||----w |<br>" +
    "           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||<br>",

  clear: "",
  "rm -rf": "",
  cat:
    "Type cat followed by the filename which you want to see its content <br> hint : cat message.txt"
};
