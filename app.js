const lessons = [
  {
    id: "session-6-v-shape-reversals",
    title: "Session 6 - How To Trade V Shape Reversals",
    source: "YouTube breakdown - 32:02 - rollin rollo",
    summary:
      "A V-shape reversal is a behavior shift: aggressive red-vector selling, slowdown and absorption at the low, then green or blue vectors pushing price back into the prior red-vector range.",
    tags: ["V-shape reversal", "Vector candles", "Absorption", "Multi-timeframe"],
    quickCards: [
      {
        title: "Do not catch the knife",
        copy: "The first drop only creates the setup. Wait for slowdown and proof that price is moving away from the low.",
        tone: "red",
      },
      {
        title: "The low must change behavior",
        copy: "Smaller candles, lower wicks, and repeated closes away from the lows suggest selling is being absorbed.",
        tone: "amber",
      },
      {
        title: "Confirmation is impulse",
        copy: "Green or blue vector candles near the low show the right side of the V starting to form.",
        tone: "green",
      },
    ],
    steps: [
      {
        title: "Find the environment",
        copy: "Start with a sharp move down. Look for long red vector candles or a cluster of red vectors that would make late traders want to short.",
      },
      {
        title: "Mark the red-vector range",
        copy: "Draw the high and low of the red-vector candle or cluster. This becomes the area price may later recover into.",
      },
      {
        title: "Watch the speed",
        copy: "After the selloff, observe whether the downside candles stop expanding. Speed slowing is the first sign that the move may be changing.",
      },
      {
        title: "Define the base",
        copy: "At the low, mark the small consolidation box. Wicks down and closes back up show that price is not accepting lower levels cleanly.",
      },
      {
        title: "Drop timeframes",
        copy: "Use 1H for context, 15M to inspect the four candles inside the hour, then 5M or 1M to study the low and the first reversal vectors.",
      },
      {
        title: "Wait for green or blue vectors",
        copy: "The setup becomes actionable only when bullish vector candles appear at the low and price starts moving away from the base.",
      },
      {
        title: "Plan invalidation before entry",
        copy: "If price breaks the base low and prints more red vectors, the V is not ready or the selloff is continuing.",
      },
      {
        title: "Aim for recovery, not fantasy",
        copy: "Use the prior red-vector area, the 50 EMA, or nearby resistance as logical targets. Do not assume every V becomes a full trend reversal.",
      },
    ],
    checklist: [
      "Strong move down is visible.",
      "Red vector candle or cluster appears before the low.",
      "Retail psychology would likely be bearish or short.",
      "Candles slow down near the low.",
      "Price forms a base instead of expanding lower.",
      "Lower wicks or failed breakdowns appear.",
      "Green or blue vector candle appears at the low.",
      "Price moves away from the base with speed.",
      "Invalidation level is clear below the low.",
      "Target area is based on prior red-vector recovery.",
    ],
    drills: [
      {
        title: "1H to 15M mapping",
        copy: "Pick one big 1H red vector. Drop to 15M and mark which of the four candles created the selling pressure.",
      },
      {
        title: "Low behavior study",
        copy: "Find five V bottoms. Count how many candles wicked below the base and closed back inside or above it.",
      },
      {
        title: "Vector confirmation replay",
        copy: "Replay the chart candle by candle. Pause before the first green or blue vector and decide whether the setup was ready.",
      },
      {
        title: "Failure archive",
        copy: "Save examples where the V failed. Identify whether the low broke, vectors stayed red, or price never moved away from the base.",
      },
    ],
    riskNotes: [
      {
        title: "Invalid setup",
        copy: "The setup weakens when price breaks below the base low and continues printing red vectors.",
      },
      {
        title: "Chasing risk",
        copy: "A giant green candle after a drop can already be extended. A pullback that holds above the base is often cleaner for practice.",
      },
      {
        title: "Target logic",
        copy: "The first target is usually recovery into the prior red-vector range, not an automatic new high.",
      },
      {
        title: "Position size",
        copy: "Use light size while learning. The video specifically warns against going full size on this pattern.",
      },
    ],
    timeline: [
      {
        time: "00:00",
        copy: "Defines the V-shape and inverse V. The lesson focuses on downside selloff into upside recovery.",
      },
      {
        time: "02:00",
        copy: "Introduces environment: red vector candles create bearish sentiment and invite shorts.",
      },
      {
        time: "04:30",
        copy: "Introduces speed: the selloff must slow or stall before the reversal idea matters.",
      },
      {
        time: "08:00",
        copy: "Explains absorption: price drops hard, then stops falling as buyers absorb selling near the low.",
      },
      {
        time: "12:00",
        copy: "Shows how lower timeframes reveal wicks, failed pushes lower, and early reversal behavior.",
      },
      {
        time: "16:00",
        copy: "Moves to Bitcoin chart examples and marks multiple V-shaped recoveries.",
      },
      {
        time: "20:00",
        copy: "Highlights stopping-volume style candles and the need for green or blue vectors at the lows.",
      },
      {
        time: "23:30",
        copy: "Summarizes the three-part model: environment, speed, and vector confirmation.",
      },
      {
        time: "27:00",
        copy: "Gives timeframe workflow: 1H context, 15M candle breakdown, then 5M or 1M detail.",
      },
      {
        time: "31:00",
        copy: "Homework: backtest V-shapes, study time spent at lows, and practice with light size.",
      },
    ],
  },
];

let activeLesson = lessons[0];

const lessonList = document.querySelector("#lessonList");
const searchInput = document.querySelector("#lessonSearch");
const titleEl = document.querySelector("#lessonTitle");
const sourceEl = document.querySelector("#lessonSource");
const summaryEl = document.querySelector("#lessonSummary");
const tagEl = document.querySelector("#lessonTags");
const quickCardsEl = document.querySelector("#quickCards");
const stepsEl = document.querySelector("#stepsList");
const checklistEl = document.querySelector("#checklist");
const drillsEl = document.querySelector("#drills");
const riskNotesEl = document.querySelector("#riskNotes");
const timelineEl = document.querySelector("#timeline");
const focusButton = document.querySelector("#focusMode");
const printButton = document.querySelector("#printGuide");
const canvas = document.querySelector("#setupCanvas");

function renderLessonList(filter = "") {
  const query = filter.trim().toLowerCase();
  const matches = lessons.filter((lesson) => {
    const blob = [lesson.title, lesson.summary, ...lesson.tags].join(" ").toLowerCase();
    return blob.includes(query);
  });

  lessonList.innerHTML = "";
  for (const lesson of matches) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "lesson-button";
    button.setAttribute("aria-current", lesson.id === activeLesson.id ? "true" : "false");
    button.innerHTML = `<strong>${lesson.title}</strong><span>${lesson.tags.join(" / ")}</span>`;
    button.addEventListener("click", () => {
      activeLesson = lesson;
      render();
    });
    lessonList.append(button);
  }
}

function render() {
  titleEl.textContent = activeLesson.title;
  sourceEl.textContent = activeLesson.source;
  summaryEl.textContent = activeLesson.summary;

  tagEl.innerHTML = "";
  for (const tag of activeLesson.tags) {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    tagEl.append(span);
  }

  quickCardsEl.innerHTML = activeLesson.quickCards
    .map(
      (card) =>
        `<article class="quick-card" data-tone="${card.tone}"><strong>${card.title}</strong><p>${card.copy}</p></article>`,
    )
    .join("");

  stepsEl.innerHTML = activeLesson.steps
    .map((step) => `<li><strong>${step.title}</strong><p class="step-copy">${step.copy}</p></li>`)
    .join("");

  checklistEl.innerHTML = activeLesson.checklist
    .map((item, index) => {
      const id = `check-${activeLesson.id}-${index}`;
      return `<div class="check-item"><input id="${id}" type="checkbox" /><label for="${id}">${item}</label></div>`;
    })
    .join("");

  drillsEl.innerHTML = activeLesson.drills
    .map(
      (drill) =>
        `<div class="drill-item"><span aria-hidden="true">Practice</span><div><strong>${drill.title}</strong><p class="note-copy">${drill.copy}</p></div></div>`,
    )
    .join("");

  riskNotesEl.innerHTML = activeLesson.riskNotes
    .map(
      (note) =>
        `<div class="note-item"><span aria-hidden="true">Note</span><div><strong>${note.title}</strong><p class="note-copy">${note.copy}</p></div></div>`,
    )
    .join("");

  timelineEl.innerHTML = activeLesson.timeline
    .map(
      (item) =>
        `<article class="timeline-item"><strong class="timecode">${item.time}</strong><p class="timeline-copy">${item.copy}</p></article>`,
    )
    .join("");

  renderLessonList(searchInput.value);
  drawSetup();
}

function drawSetup() {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(rect.width * ratio));
  canvas.height = Math.max(1, Math.floor(rect.height * ratio));

  const ctx = canvas.getContext("2d");
  ctx.scale(ratio, ratio);
  const cw = canvas.width / ratio;
  const ch = canvas.height / ratio;
  const sx = cw / 760;
  const sy = ch / 420;

  ctx.clearRect(0, 0, cw, ch);
  ctx.save();
  ctx.scale(sx, sy);
  ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  const points = [
    [60, 88],
    [160, 160],
    [245, 292],
    [340, 300],
    [446, 188],
    [590, 92],
  ];

  ctx.strokeStyle = "#b83a31";
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  ctx.lineTo(points[1][0], points[1][1]);
  ctx.lineTo(points[2][0], points[2][1]);
  ctx.stroke();

  ctx.strokeStyle = "#217a55";
  ctx.beginPath();
  ctx.moveTo(points[2][0], points[2][1]);
  ctx.lineTo(points[3][0], points[3][1]);
  ctx.lineTo(points[4][0], points[4][1]);
  ctx.lineTo(points[5][0], points[5][1]);
  ctx.stroke();

  drawZone(ctx, 226, 268, 132, 58, "slowdown base", "#b47a1f");
  drawZone(ctx, 94, 116, 122, 150, "red vectors", "#b83a31");
  drawZone(ctx, 380, 142, 130, 132, "green/blue vectors", "#217a55");

  drawCandle(ctx, 96, 122, 48, 124, "#b83a31");
  drawCandle(ctx, 150, 158, 44, 102, "#b83a31");
  drawCandle(ctx, 397, 164, 48, 116, "#217a55");
  drawCandle(ctx, 452, 122, 44, 104, "#2a66a2");

  ctx.strokeStyle = "rgba(23, 27, 31, 0.45)";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(40, 292);
  ctx.lineTo(718, 292);
  ctx.stroke();
  ctx.setLineDash([]);

  label(ctx, "1. Environment: fast selloff", 42, 44, "#b83a31");
  label(ctx, "2. Speed slows at the low", 224, 356, "#b47a1f");
  label(ctx, "3. Impulse confirms recovery", 472, 44, "#217a55");
  label(ctx, "Invalid below base", 42, 315, "#171b1f");
  ctx.restore();
}

function drawZone(ctx, x, y, width, height, text, color) {
  ctx.fillStyle = `${color}22`;
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.strokeRect(x, y, width, height);
  ctx.fillRect(x, y, width, height);
  label(ctx, text, x + 10, y + height + 24, color);
}

function drawCandle(ctx, x, y, width, height, color) {
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x + width / 2, y - 20);
  ctx.lineTo(x + width / 2, y + height + 20);
  ctx.stroke();
  ctx.fillRect(x, y, width, height);
}

function label(ctx, text, x, y, color) {
  ctx.fillStyle = color;
  ctx.font =
    "700 16px Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif";
  ctx.fillText(text, x, y);
}

searchInput.addEventListener("input", () => renderLessonList(searchInput.value));
focusButton.addEventListener("click", () => document.body.classList.toggle("focus"));
printButton.addEventListener("click", () => window.print());
window.addEventListener("resize", drawSetup);

render();
