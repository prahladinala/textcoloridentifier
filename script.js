// const net = new brain.NeuralNetwork({ hiddenLayers: [5, 4, 3] });
// const net = new brain.NeuralNetwork({ hiddenLayers: [5] });
const net = new brain.NeuralNetwork();

const data = [
  { input: { r: 0, g: 0, b: 0 }, output: [1] },
  { input: { r: 1, g: 1, b: 1 }, output: [0] },
  {
    input: {
      r: 0.3684601218721162,
      g: 0.037089148190665,
      b: 0.832806647811944,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8380038788518478,
      g: 0.16002466308939245,
      b: 0.9039478418877938,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7496667431915927,
      g: 0.024422808906294335,
      b: 0.3707151297963467,
    },
    output: [1],
  },
  {
    input: {
      r: 0.44281425046909373,
      g: 0.8964957940547846,
      b: 0.8937162682816893,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7850059018165643,
      g: 0.7194842789553664,
      b: 0.19873491029699464,
    },
    output: [0],
  },
  {
    input: {
      r: 0.3470016503798192,
      g: 0.94299788557175,
      b: 0.33113050343301276,
    },
    output: [0],
  },
  {
    input: {
      r: 0.45416901349473204,
      g: 0.019950168956656578,
      b: 0.6300564781200171,
    },
    output: [1],
  },
  {
    input: {
      r: 0.44731805791372103,
      g: 0.1261421383874084,
      b: 0.7272889506530542,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5954406270971273,
      g: 0.04460789690013556,
      b: 0.6536994224246777,
    },
    output: [1],
  },
  {
    input: {
      r: 0.91034129506399,
      g: 0.49056746985487765,
      b: 0.8119451232525707,
    },
    output: [0],
  },
  {
    input: {
      r: 0.03865417636383972,
      g: 0.7216779582688426,
      b: 0.45570692697164716,
    },
    output: [0],
  },
  {
    input: {
      r: 0.40459652781477606,
      g: 0.8438852779550159,
      b: 0.8471320156359492,
    },
    output: [0],
  },
  {
    input: {
      r: 0.8727080671755141,
      g: 0.8396075746366678,
      b: 0.4931178650107457,
    },
    output: [0],
  },
  {
    input: {
      r: 0.6784648920361833,
      g: 0.13280438744555223,
      b: 0.2285310881303717,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5514986022926256,
      g: 0.6593321708053674,
      b: 0.5368116705405055,
    },
    output: [0],
  },
  {
    input: {
      r: 0.3527421336200218,
      g: 0.8053010837346339,
      b: 0.6975969257482895,
    },
    output: [0],
  },
  {
    input: {
      r: 0.8316868551737728,
      g: 0.7333093505046471,
      b: 0.7002466749694163,
    },
    output: [0],
  },
  {
    input: {
      r: 0.5574917226599021,
      g: 0.7408140303186415,
      b: 0.08370925788741967,
    },
    output: [1],
  },
  {
    input: {
      r: 0.35499619793215786,
      g: 0.5829455678889686,
      b: 0.11275801948657871,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6972060481093831,
      g: 0.5148991557972873,
      b: 0.9098131476310798,
    },
    output: [1],
  },
  {
    input: {
      r: 0.4357110283801422,
      g: 0.03850037544938112,
      b: 0.612381217340696,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8861866555003008,
      g: 0.09026961448390813,
      b: 0.3723381360018687,
    },
    output: [1],
  },
  {
    input: {
      r: 0.2705587209367739,
      g: 0.6258850964529126,
      b: 0.0737435778610096,
    },
    output: [1],
  },
  {
    input: {
      r: 0.2394226265902184,
      g: 0.3729841042402582,
      b: 0.6160576341297672,
    },
    output: [1],
  },
  {
    input: {
      r: 0.43439241404512785,
      g: 0.5271970575990896,
      b: 0.028572670451074034,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8535149525148378,
      g: 0.9868054546829763,
      b: 0.4034946270617412,
    },
    output: [0],
  },
  {
    input: {
      r: 0.9069490972792225,
      g: 0.7337303407025182,
      b: 0.36133313899413544,
    },
    output: [0],
  },
  {
    input: {
      r: 0.406979150826706,
      g: 0.4419316377278175,
      b: 0.06793415938143066,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8997377781548415,
      g: 0.20505365883408344,
      b: 0.2574130984992897,
    },
    output: [1],
  },
  {
    input: {
      r: 0.16154162434627573,
      g: 0.3960785930290016,
      b: 0.5033151865478034,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5973156082144833,
      g: 0.5055686949564262,
      b: 0.09126103615870695,
    },
    output: [1],
  },
  {
    input: {
      r: 0.36273834617931033,
      g: 0.45366230590225687,
      b: 0.3077911614458291,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5979519653977587,
      g: 0.2080929142502974,
      b: 0.8144138437560879,
    },
    output: [1],
  },
  {
    input: {
      r: 0.666991390068681,
      g: 0.9797421098096646,
      b: 0.8135594726387905,
    },
    output: [0],
  },
  {
    input: {
      r: 0.8953552020846365,
      g: 0.23372662749358142,
      b: 0.43277271844661125,
    },
    output: [1],
  },
  {
    input: {
      r: 0.32943427622802735,
      g: 0.9750920250085338,
      b: 0.8021249028719779,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7128031862629318,
      g: 0.805677856032283,
      b: 0.5094482872258204,
    },
    output: [0],
  },
  {
    input: {
      r: 0.08449952003536576,
      g: 0.314836388576903,
      b: 0.14125630895612185,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9039763900700915,
      g: 0.17069529413389928,
      b: 0.4282978333010008,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6580873645980911,
      g: 0.9795674379420811,
      b: 0.6597101662162941,
    },
    output: [0],
  },
];
net.train(data);

const colorEl = document.getElementById("color");
const guessEl = document.getElementById("guess");

const whiteButton = document.getElementById("white-button");
const blackButton = document.getElementById("black-button");
const printButton = document.getElementById("print-button");

const reloadButton = document.getElementById("reload-button");
const printer = document.getElementById("printer");
let color;

setRandomColor();

whiteButton.addEventListener("click", () => {
  chooseColor(1);
});

blackButton.addEventListener("click", () => {
  chooseColor(0);
});
printButton.addEventListener("click", print);
function chooseColor(value) {
  data.push({
    input: color,
    output: [value],
  });
  setRandomColor();
}

reloadButton.addEventListener("click", () => {
  location.reload();
});

function print() {
  console.log(JSON.stringify(data));
  printer.innerHTML = JSON.stringify(data);
}
function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };
  const guess = net.run(color)[0];
  console.log(guessEl);
  guessEl.style.color = guess > 0.5 ? "#fff" : "#000";
  colorEl.style.backgroundColor = `rgba(${color.r * 255},${color.g * 255},${
    color.b * 255
  })`;
}

// const diagram = document.getElementById("diagram");
// diagram.innerHTML = brain.utilities.toSVG(net);

// console.log(net.run([0, 0]));
// console.log(net.run({ r: 1, g: 0.5, b: 0 }));
