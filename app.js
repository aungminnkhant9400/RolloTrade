const lessons = [
  {
    id: "session-6-v-shape-reversals",
    title: "Session 6 - How To Trade V Shape Reversals",
    source: "YouTube breakdown - 32:02 - rollin rollo",
    summary:
      "A V-shape reversal is a behavior shift: aggressive red-vector selling, slowdown and absorption at the low, then green or blue vectors pushing price back into the prior red-vector range.",
    tags: ["V-shape reversal", "Vector candles", "Absorption", "Multi-timeframe"],
    diagram: "v-shape",
    diagramLegend: [
      {
        title: "1. Environment",
        copy: "Fast red-vector selloff creates the trap.",
        tone: "red",
      },
      {
        title: "2. Slowdown base",
        copy: "Price stops expanding lower and starts absorbing.",
        tone: "amber",
      },
      {
        title: "3. Recovery impulse",
        copy: "Green or blue vectors confirm movement away from the low.",
        tone: "green",
      },
      {
        title: "Invalidation",
        copy: "If price breaks below the base and keeps printing red vectors, the V is not ready.",
        tone: "dark",
      },
    ],
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
  {
    id: "session-8-block-trade-principle",
    title: "Session 8 - The Block Trade Principle",
    source: "YouTube breakdown - 35:59 - rollin rollo",
    summary:
      "The block trade principle uses the body of a vector candle as market memory. Mark the block high, midpoint, and low, then wait for price to prove whether that memory still supports the original vector direction.",
    tags: ["Block trade", "Market memory", "Vector body", "High-mid-low"],
    diagram: "block-trade",
    diagramLegend: [
      {
        title: "1. Mark the body",
        copy: "Use only the vector candle open-to-close body. Ignore wicks for the block.",
        tone: "green",
      },
      {
        title: "2. Split three levels",
        copy: "Track the block high, midpoint, and low. Each level can trigger memory.",
        tone: "blue",
      },
      {
        title: "3. Read the reaction",
        copy: "Continuation needs price to reject, hold, or break away from a block level.",
        tone: "amber",
      },
      {
        title: "Failure",
        copy: "If price spends time at a level and then breaks away against the vector, memory has failed.",
        tone: "dark",
      },
    ],
    quickCards: [
      {
        title: "The block is the body",
        copy: "Do not mark the wick. The lesson treats the candle body as the area where the real agreement and contracts sit.",
        tone: "green",
      },
      {
        title: "Memory has three tests",
        copy: "Price can react from the block high, midpoint, or low. You wait to see which level becomes support or resistance.",
        tone: "amber",
      },
      {
        title: "Do not trade every block",
        copy: "A block is an anchor, not an automatic entry. Context, time spent, and vector breakaway confirm whether it matters.",
        tone: "red",
      },
    ],
    steps: [
      {
        title: "Choose a meaningful vector",
        copy: "Start with a green or red vector candle that appears after a clear move, reversal attempt, or aggressive breakout. Avoid treating every small vector as equal.",
      },
      {
        title: "Mark only the candle body",
        copy: "Draw the block from open to close. Ignore upper and lower wicks because the lesson says the body carries the weight of the transaction.",
      },
      {
        title: "Split the block into three decision levels",
        copy: "Mark the block high, midpoint, and low. These are the three places where price may trigger market memory.",
      },
      {
        title: "Define the expected direction",
        copy: "For a green vector block, the default expectation is continuation higher. For a red vector block, the default expectation is continuation lower.",
      },
      {
        title: "Wait for price to revisit the block",
        copy: "Do not enter just because the block exists. Let price return to the high, midpoint, or low and show behavior around that level.",
      },
      {
        title: "Study time spent at the level",
        copy: "Fast rejection suggests memory is active. Long hesitation followed by a break against the expected direction suggests the memory is weakening.",
      },
      {
        title: "Require commitment away from the level",
        copy: "Look for a vector candle or strong close that moves away from the block level in the expected direction before treating it as actionable.",
      },
      {
        title: "Trade level to level",
        copy: "If entering from one block level, use the next block level, prior vector area, or nearby structure as the first target. Do not assume the whole move at once.",
      },
    ],
    checklist: [
      "A clear green or red vector candle is present.",
      "The block is drawn from the candle body only.",
      "High, midpoint, and low are marked.",
      "The expected direction matches the vector color.",
      "Price revisits one of the three block levels.",
      "Time spent at the level is observed.",
      "Price rejects or holds the level instead of drifting through it.",
      "A vector or strong close confirms movement away.",
      "Entry, invalidation, and first target are level-based.",
      "The broader session and liquidity context support the idea.",
    ],
    drills: [
      {
        title: "Body-only marking",
        copy: "Go through twenty vector candles and mark only the body. Compare how much cleaner the levels become when wicks are ignored.",
      },
      {
        title: "Three-level replay",
        copy: "Replay price after a vector candle and pause when it reaches the high, midpoint, or low. Predict reaction, failure, or continuation.",
      },
      {
        title: "Memory failure log",
        copy: "Collect examples where price breaks through all three levels. Note the candle that proved the block no longer favored the original direction.",
      },
      {
        title: "Session filter",
        copy: "Compare Asian-session block reactions with New York-session reactions. The video warns that liquidity changes how clean the behavior is.",
      },
    ],
    riskNotes: [
      {
        title: "Invalidation",
        copy: "For a green block, failure is price accepting below the block instead of moving away higher. For a red block, failure is price accepting above it.",
      },
      {
        title: "Midpoint risk",
        copy: "The midpoint is a decision point, not magic support or resistance. Wait for behavior before entering.",
      },
      {
        title: "Context filter",
        copy: "A green block after a downside move has different meaning than a random green block in chop. Use surrounding structure.",
      },
      {
        title: "Confirmation candle",
        copy: "The cleanest examples show vector breakouts from the block level. Without commitment, stand down.",
      },
    ],
    timeline: [
      {
        time: "00:00",
        copy: "Introduces green vectors as market maker markup and connects them to bids, offers, and trapped shorts.",
      },
      {
        time: "02:00",
        copy: "Defines the block as market memory and introduces the three reaction zones inside the vector body.",
      },
      {
        time: "05:00",
        copy: "Emphasizes the main drawing rule: use the vector candle body only, not the wick.",
      },
      {
        time: "07:00",
        copy: "Marks the block high, midpoint, and low on the chart and explains how price may react at each one.",
      },
      {
        time: "10:00",
        copy: "Shows price reacting from block levels and explains how those reactions can keep you in or out of a trade.",
      },
      {
        time: "14:00",
        copy: "Explains trading level to level: enter near one confirmed block reaction and manage toward the next zone.",
      },
      {
        time: "17:00",
        copy: "Walks a fresh block example, showing midpoint taps and the need for price to prove the expected direction.",
      },
      {
        time: "21:00",
        copy: "Switches to red-vector blocks and explains how memory can favor lower prices until proven otherwise.",
      },
      {
        time: "27:00",
        copy: "Returns to the whiteboard: time spent at block high, midpoint, and low reveals whether memory is active.",
      },
      {
        time: "31:00",
        copy: "Summarizes practice: collect variations of block behavior so real-time reactions become familiar.",
      },
    ],
  },
  {
    id: "session-22-new-york-reversal",
    title: "Session 22 - Trading New York Reversal",
    source: "YouTube breakdown - 27:38 - rollin rollo",
    summary:
      "The New York reversal lesson focuses on the 2:00 PM ET / 7:00 PM UK four-hour candle. After a strong 10:00 AM ET red vector, wait for NASDAQ or S&P to form a W, V, or M structure before trading a vector recovery.",
    tags: ["New York reversal", "4H candle", "W formation", "NASDAQ"],
    diagram: "new-york-reversal",
    diagramLegend: [
      {
        title: "1. Timing window",
        copy: "Focus on the new 4H candle at 2:00 PM ET / 7:00 PM UK after the New York session develops.",
        tone: "blue",
      },
      {
        title: "2. Prior vector",
        copy: "For upside reversals, prefer a strong 10:00 AM ET red vector candle that can be recovered.",
        tone: "red",
      },
      {
        title: "3. Development",
        copy: "Wait for a W, V, or M formation. Do not enter before the structure starts proving the turn.",
        tone: "amber",
      },
      {
        title: "4. Trigger",
        copy: "Look for the first green/blue vector or a clean reclaim around the 50 EMA after the second leg.",
        tone: "green",
      },
    ],
    quickCards: [
      {
        title: "Trade the window, not the noise",
        copy: "The lesson avoids early New York chaos. The main reversal window is the 2:00 PM ET 4H candle.",
        tone: "blue",
      },
      {
        title: "The prior 4H candle matters",
        copy: "A strong 10:00 AM ET red vector sets up the idea that bids may later offer price back up.",
        tone: "red",
      },
      {
        title: "Structure comes first",
        copy: "The execution trigger is not the time alone. You need W/V development and vector commitment.",
        tone: "green",
      },
    ],
    steps: [
      {
        title: "Mark the New York session window",
        copy: "Identify 9:00 AM, 9:30 AM, and 10:00 AM ET. This early window creates the Brinks-style range and the initial direction.",
      },
      {
        title: "Find the 10:00 AM ET four-hour candle",
        copy: "On NASDAQ or S&P, inspect the 4H candle that starts at 10:00 AM ET / 3:00 PM UK. The preferred bullish reversal setup starts with a strong red vector here.",
      },
      {
        title: "Wait for the 2:00 PM ET four-hour candle",
        copy: "The main reversal study begins when the next 4H candle opens at 2:00 PM ET / 7:00 PM UK. Do not force trades before this candle starts.",
      },
      {
        title: "Project possible vector recovery",
        copy: "If the prior 4H candle closed as a strong red vector, mark its body and likely recovery area. The first target is often partial recovery, not a full trend reversal.",
      },
      {
        title: "Drop to lower timeframes",
        copy: "Use the lower timeframe to watch the reversal develop. The lesson repeatedly looks for W formations, V-shaped reversals, or M formations at highs.",
      },
      {
        title: "Wait for the second leg",
        copy: "For an upside reversal, let price form the low, bounce, retrace, and defend or sweep the low. The second leg of the W is where confirmation matters.",
      },
      {
        title: "Use the first vector as trigger",
        copy: "Look for the first green or blue vector that appears from the W/V area, especially if it reclaims or breaks above the 50 EMA.",
      },
      {
        title: "Manage toward recovery",
        copy: "Trade toward the prior red-vector recovery area, VWAP/POC, the Brinks high, or the prior session high depending on structure and momentum.",
      },
    ],
    checklist: [
      "The instrument is NASDAQ or S&P.",
      "The 2:00 PM ET / 7:00 PM UK 4H candle is active or near open.",
      "The 10:00 AM ET / 3:00 PM UK 4H candle is reviewed.",
      "A strong prior red vector exists for upside reversal logic.",
      "Price is near VWAP, POC, Brinks low, or a meaningful low area.",
      "A W formation, V-shaped reversal, or clean low sweep is developing.",
      "The second leg holds or rejects the low.",
      "A green or blue vector appears from the reversal area.",
      "Price reclaims the 50 EMA or moves away from the low with commitment.",
      "Target and invalidation are defined before entry.",
    ],
    drills: [
      {
        title: "4H candle archive",
        copy: "Mark the 10:00 AM ET and 2:00 PM ET 4H candles for the last 30 NASDAQ sessions. Note whether the second candle formed a reversal wick.",
      },
      {
        title: "W formation replay",
        copy: "Replay the lower timeframe after 2:00 PM ET and pause at the second leg of each W. Decide whether the first vector was enough confirmation.",
      },
      {
        title: "Failure examples",
        copy: "Collect days where the prior red vector did not recover. Identify whether price failed to form a W, stayed below VWAP, or continued with red vectors.",
      },
      {
        title: "M formation mirror",
        copy: "Find upside moves into the 2:00 PM ET candle that formed M structures. Practice the same logic for downside reversals.",
      },
    ],
    riskNotes: [
      {
        title: "High-risk concept",
        copy: "The instructor says this is effectively trying to find the top or bottom. Require confluence before acting.",
      },
      {
        title: "Time is not an entry",
        copy: "The 2:00 PM ET candle creates the window. The trade still needs W/V/M development and vector confirmation.",
      },
      {
        title: "Partial recovery is enough",
        copy: "The 4H red vector may only partially recover. Do not assume the full candle must be reclaimed.",
      },
      {
        title: "Invalidation",
        copy: "For upside reversals, failure is losing the W low and continuing lower with red vectors or no reclaim of the reversal area.",
      },
    ],
    timeline: [
      {
        time: "00:00",
        copy: "Introduces the New York reversal and frames it as a confluence-based attempt to catch high or low formation.",
      },
      {
        time: "01:00",
        copy: "Defines the New York/Brinks window around 9:00, 9:30, and 10:00 AM ET.",
      },
      {
        time: "02:00",
        copy: "Explains the high-of-day or low-of-day logic around VWAP, especially for NASDAQ and S&P.",
      },
      {
        time: "05:00",
        copy: "Introduces the 10:00 AM ET and 2:00 PM ET four-hour candles as the core timing structure.",
      },
      {
        time: "07:00",
        copy: "Shows historical 4H candles and how often the later candle forms a reversal wick or recovery.",
      },
      {
        time: "11:00",
        copy: "Explains the bid/offers logic behind a red-vector selloff and later upside recovery.",
      },
      {
        time: "14:00",
        copy: "Moves into NASDAQ W and V formations as the preferred reversal structures.",
      },
      {
        time: "16:00",
        copy: "Shows M formation examples for downside reversals at highs.",
      },
      {
        time: "19:00",
        copy: "Connects Brinks, vector recovery, W formations, point of control, and 50 EMA confirmation.",
      },
      {
        time: "22:00",
        copy: "Final checklist: wait for the 2:00 PM ET 4H candle, prior red vector, development, and first vector trigger.",
      },
      {
        time: "26:00",
        copy: "Practice instruction: go back and disprove the pattern across many sessions before relying on it.",
      },
    ],
  },
];

let activeLesson = lessons[lessons.length - 1];

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
const diagramLegendEl = document.querySelector("#diagramLegend");

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

  diagramLegendEl.innerHTML = activeLesson.diagramLegend
    .map(
      (item) =>
        `<div class="legend-item legend-${item.tone}"><strong>${item.title}</strong><span>${item.copy}</span></div>`,
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

  if (activeLesson.diagram === "block-trade") {
    drawBlockTradeSetup(ctx);
  } else if (activeLesson.diagram === "new-york-reversal") {
    drawNewYorkReversalSetup(ctx);
  } else {
    drawVShapeSetup(ctx);
  }

  ctx.restore();
}

function drawVShapeSetup(ctx) {
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

  drawZone(ctx, 226, 268, 132, 58, "#b47a1f");
  drawZone(ctx, 94, 116, 122, 150, "#b83a31");
  drawZone(ctx, 380, 142, 130, 132, "#217a55");

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

  badge(ctx, "1", 92, 78, "#b83a31");
  badge(ctx, "2", 268, 338, "#b47a1f");
  badge(ctx, "3", 514, 78, "#217a55");
}

function drawBlockTradeSetup(ctx) {
  drawCandle(ctx, 124, 96, 84, 184, "#217a55");

  drawZone(ctx, 120, 96, 92, 184, "#217a55");

  ctx.strokeStyle = "#171b1f";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 8]);
  for (const y of [96, 188, 280]) {
    ctx.beginPath();
    ctx.moveTo(86, y);
    ctx.lineTo(690, y);
    ctx.stroke();
  }
  ctx.setLineDash([]);

  ctx.strokeStyle = "#217a55";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(212, 188);
  ctx.lineTo(286, 188);
  ctx.lineTo(344, 128);
  ctx.lineTo(430, 142);
  ctx.lineTo(508, 92);
  ctx.stroke();

  ctx.strokeStyle = "#b47a1f";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(330, 128);
  ctx.lineTo(380, 188);
  ctx.lineTo(430, 188);
  ctx.lineTo(488, 142);
  ctx.stroke();

  ctx.strokeStyle = "#b83a31";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(270, 280);
  ctx.lineTo(350, 280);
  ctx.lineTo(408, 326);
  ctx.stroke();

  badge(ctx, "1", 166, 62, "#217a55");
  badge(ctx, "2", 592, 188, "#2a66a2");
  badge(ctx, "3", 510, 94, "#b47a1f");
  badge(ctx, "X", 430, 326, "#171b1f");
}

function drawNewYorkReversalSetup(ctx) {
  ctx.strokeStyle = "#2a66a2";
  ctx.lineWidth = 3;
  ctx.strokeRect(72, 76, 210, 210);
  ctx.beginPath();
  ctx.moveTo(72, 136);
  ctx.lineTo(282, 136);
  ctx.moveTo(142, 76);
  ctx.lineTo(142, 286);
  ctx.moveTo(212, 76);
  ctx.lineTo(212, 286);
  ctx.stroke();

  drawCandle(ctx, 166, 116, 52, 132, "#b83a31");
  drawZone(ctx, 160, 112, 64, 142, "#b83a31");

  ctx.strokeStyle = "#171b1f";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 8]);
  ctx.beginPath();
  ctx.moveTo(318, 264);
  ctx.lineTo(700, 264);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.strokeStyle = "#b47a1f";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(318, 264);
  ctx.lineTo(372, 320);
  ctx.lineTo(432, 238);
  ctx.lineTo(490, 304);
  ctx.lineTo(566, 166);
  ctx.stroke();

  ctx.strokeStyle = "#217a55";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(500, 300);
  ctx.lineTo(584, 176);
  ctx.lineTo(670, 92);
  ctx.stroke();

  drawCandle(ctx, 548, 184, 48, 104, "#217a55");
  drawCandle(ctx, 610, 126, 48, 112, "#2a66a2");

  badge(ctx, "1", 108, 54, "#2a66a2");
  badge(ctx, "2", 204, 96, "#b83a31");
  badge(ctx, "3", 432, 220, "#b47a1f");
  badge(ctx, "4", 642, 76, "#217a55");
}

function drawZone(ctx, x, y, width, height, color) {
  ctx.fillStyle = `${color}22`;
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.strokeRect(x, y, width, height);
  ctx.fillRect(x, y, width, height);
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

function badge(ctx, text, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.font =
    "800 18px Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, y + 1);
  ctx.textAlign = "start";
  ctx.textBaseline = "alphabetic";
}

searchInput.addEventListener("input", () => renderLessonList(searchInput.value));
focusButton.addEventListener("click", () => document.body.classList.toggle("focus"));
printButton.addEventListener("click", () => window.print());
window.addEventListener("resize", drawSetup);

render();
