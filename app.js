const lessons = [
  {
    id: "brink-box-part-2",
    title: "Brink Box Part 2",
    source: "YouTube breakdown - 19:32 - rollin rollo",
    summary:
      "Brinks Part 2 turns the box into an execution model. After the 9:00-10:00 AM ET range forms, separate two conditions: unrecovered vectors inside the Brinks box mean price can trade back into the box to recover them, while fully recovered vectors shift focus to break, retest, and continuation away from the Brinks high or low.",
    tags: ["Brinks box", "Vector recovery", "Opening range", "Break and retest"],
    diagram: "brink-box-recovery",
    diagramLegend: [
      {
        title: "1. Range completes",
        copy: "Wait until the Brinks high and low are known before reading intention.",
        tone: "blue",
      },
      {
        title: "2. Unrecovered vector",
        copy: "A vector left inside the box becomes a likely recovery magnet.",
        tone: "red",
      },
      {
        title: "3. Failed break",
        copy: "A sweep outside the box that quickly returns points back into the range.",
        tone: "amber",
      },
      {
        title: "4. Recovery target",
        copy: "Aim toward the unrecovered vector, then the opposing side if structure supports it.",
        tone: "green",
      },
    ],
    quickCards: [
      {
        title: "Vectors decide location",
        copy: "If Brinks vectors are not fully recovered, the cleaner idea is usually back into the box.",
        tone: "red",
      },
      {
        title: "No vectors means range logic",
        copy: "If all vectors are recovered, treat the Brinks high/low like opening-range breakout levels.",
        tone: "blue",
      },
      {
        title: "Wait for intention",
        copy: "The lesson keeps the same rule from Part 1: let the box finish before deciding.",
        tone: "green",
      },
    ],
    steps: [
      {
        title: "Draw the Brinks box",
        copy: "Mark the 9:00-10:00 AM ET high and low. Do not decide from the middle of the box while it is still forming.",
      },
      {
        title: "Audit vectors inside the box",
        copy: "Label every red, green, or blue vector created inside the Brinks range and mark whether it was fully recovered.",
      },
      {
        title: "Choose the active condition",
        copy: "If any vector is left unrecovered, prepare for a recovery trade back into the box. If all vectors are recovered, prepare for a break/retest trade outside the range.",
      },
      {
        title: "For a red vector left below, watch the low",
        copy: "If price sweeps or breaks below the Brinks low, then quickly reclaims the range with bullish structure, the target is back into the red-vector imbalance.",
      },
      {
        title: "For a green vector left above, watch the high",
        copy: "If price sweeps or breaks above the Brinks high, then returns and rejects, the target is back down into the green-vector imbalance.",
      },
      {
        title: "Require confluence before fading momentum",
        copy: "News or a strong one-way drive can leave a Brinks vector unrecovered. Wait for breakdown, reclaim, moving-average/VWAP reaction, or clear structure before entering.",
      },
      {
        title: "Use opening-range logic when clean",
        copy: "When Brinks vectors are already recovered, trade the first accepted break: break high, retest high as support, continue higher; or break low, retest low as resistance, continue lower.",
      },
      {
        title: "Aim in stages",
        copy: "First target the unrecovered vector or Brinks edge. If price accepts through it, trail toward the opposing side of the box or prior-session vector targets.",
      },
    ],
    checklist: [
      "The 9:00-10:00 AM ET Brinks range is complete.",
      "Brinks high and Brinks low are drawn.",
      "Every vector inside the box is marked.",
      "Recovered and unrecovered vectors are separated.",
      "If a vector is unrecovered, the planned trade points back into the box.",
      "If all vectors are recovered, the planned trade uses break/retest continuation.",
      "A sweep outside the high/low is not enough by itself.",
      "Price has reclaimed or rejected the box edge with structure.",
      "News and strong one-way momentum are checked before fading the move.",
      "Targets are staged: vector recovery first, opposing side second.",
    ],
    drills: [
      {
        title: "Vector audit drill",
        copy: "Replay twenty Brinks boxes and mark every vector created inside the range. Record whether it was recovered same session or next session.",
      },
      {
        title: "Failed-break drill",
        copy: "Find ten breaks of the Brinks low that quickly returned into the box. Mark the reclaim candle and the recovery target.",
      },
      {
        title: "Opening-range drill",
        copy: "Find days where all Brinks vectors were recovered. Track the first break, retest, and continuation from the Brinks edge.",
      },
      {
        title: "News filter drill",
        copy: "Review Brinks boxes around 8:30 AM ET news. Note when unrecovered vectors stayed unrecovered because momentum never produced a reversal structure.",
      },
    ],
    riskNotes: [
      {
        title: "Do not short strength by rule alone",
        copy: "A green vector inside Brinks can remain unrecovered if news or trend pressure keeps price driving higher.",
      },
      {
        title: "A sweep needs confirmation",
        copy: "The trade is not the sweep itself. The trade comes after reclaim, rejection, or accepted break/retest behavior.",
      },
      {
        title: "Recovery is not always immediate",
        copy: "The lesson says vectors may recover in the same session or a later session, so timing still needs structure.",
      },
      {
        title: "Invalidation is the box edge",
        copy: "If the setup expects a return into the box but price accepts outside the Brinks high/low and holds, the recovery idea is weakened.",
      },
    ],
    timeline: [
      {
        time: "00:00",
        copy: "Shows several Brinks boxes and notes that once the box forms, price often chooses a direction for much of the session.",
      },
      {
        time: "01:16",
        copy: "Introduces the key repetition: vector candles are often created inside the Brinks box.",
      },
      {
        time: "01:29",
        copy: "States the main principle: unrecovered vectors created inside Brinks have a strong chance of being revisited.",
      },
      {
        time: "03:24",
        copy: "Summarizes the rule again: if Brinks vectors are left behind, price can come back to recover the imbalance.",
      },
      {
        time: "04:12",
        copy: "Gives the caveat that some unrecovered vectors remain open when news or strong confluence keeps price moving away.",
      },
      {
        time: "06:24",
        copy: "Explains that breakdown after a green vector improves the chance of revisiting that unrecovered vector.",
      },
      {
        time: "06:48",
        copy: "Explains the red-vector version: after a break below the Brinks low, look for structure that trades back into the imbalance.",
      },
      {
        time: "08:03",
        copy: "Switches to the case where all Brinks vectors are recovered and introduces opening-range breakout logic.",
      },
      {
        time: "11:54",
        copy: "Repeats the execution rule: wait until the Brinks box finishes so the high/low intention is easier to read.",
      },
      {
        time: "18:38",
        copy: "Final simplification: trade breakaways from the high/low unless unrecovered Brinks vectors pull price back into the box.",
      },
    ],
  },
  {
    id: "brink-box-part-1",
    title: "Brink Box Part 1",
    source: "YouTube breakdown - 6:41 - rollin rollo",
    summary:
      "The Brinks box is the first New York session hour, from 9:00 AM to 10:00 AM ET. The lesson frames it as the money-trade range because bonds, the stock-market open, and futures liquidity stack into the same window and create the day’s early high/low.",
    tags: ["Brinks box", "New York open", "Liquidity window", "High-low range"],
    diagram: "brink-box",
    diagramLegend: [
      {
        title: "1. Bonds set tone",
        copy: "8:20 AM ET / 1:20 PM UK starts the bond-market liquidity context before Brinks.",
        tone: "blue",
      },
      {
        title: "2. Brinks opens",
        copy: "9:00 AM ET / 2:00 PM UK starts the one-hour Brinks box.",
        tone: "amber",
      },
      {
        title: "3. Futures inject liquidity",
        copy: "9:30 AM ET / 2:30 PM UK brings another liquidity wave inside the box.",
        tone: "green",
      },
      {
        title: "4. Range locks",
        copy: "10:00 AM ET / 3:00 PM UK closes the box. Then you work from the high and low.",
        tone: "red",
      },
    ],
    quickCards: [
      {
        title: "Wait for the box",
        copy: "The lesson’s first execution rule is to wait until the Brinks high and low have formed.",
        tone: "amber",
      },
      {
        title: "Liquidity stacks in layers",
        copy: "Bonds open before the box, equities open at the box start, and futures open halfway through it.",
        tone: "blue",
      },
      {
        title: "The box gives the day’s clue",
        copy: "Whatever happens inside the Brinks box can hint at what the rest of the day is preparing to do.",
        tone: "green",
      },
    ],
    steps: [
      {
        title: "Mark the pre-Brinks window",
        copy: "Start observing from 8:00 AM ET / 1:00 PM UK. This is the window before the Brinks box begins.",
      },
      {
        title: "Note the bond-market open",
        copy: "At 8:20 AM ET / 1:20 PM UK, bond-market liquidity starts setting tone before the stock-market window.",
      },
      {
        title: "Open the Brinks box at 9:00 AM ET",
        copy: "At 9:00 AM ET / 2:00 PM UK, begin drawing the box. This is the first hour of the New York session in the lesson.",
      },
      {
        title: "Expect manipulation inside the box",
        copy: "The instructor says pre-market orders, bells, and early liquidity get hit inside this range.",
      },
      {
        title: "Mark the futures-open injection",
        copy: "At 9:30 AM ET / 2:30 PM UK, futures liquidity enters halfway through the Brinks box.",
      },
      {
        title: "Lock the high and low at 10:00 AM ET",
        copy: "At 10:00 AM ET / 3:00 PM UK, the Brinks box closes. The high and low are now the working range.",
      },
      {
        title: "Do not trade before the range exists",
        copy: "The key rule is to wait until the high and low have formed before making a Brinks-box decision.",
      },
      {
        title: "Use the box as the day clue",
        copy: "After the box closes, study which side breaks, rejects, or gets revisited to judge the next move.",
      },
    ],
    checklist: [
      "8:00 AM ET / 1:00 PM UK pre-Brinks window is marked.",
      "8:20 AM ET / 1:20 PM UK bond-market context is noted.",
      "9:00 AM ET / 2:00 PM UK Brinks start is marked.",
      "9:30 AM ET / 2:30 PM UK futures-open midpoint is marked.",
      "10:00 AM ET / 3:00 PM UK Brinks close is marked.",
      "The Brinks high is drawn.",
      "The Brinks low is drawn.",
      "No trade is planned before the box high/low exists.",
      "Manipulation or liquidity sweep inside the box is reviewed.",
      "Post-box bias is based on break/retest behavior, not guessing.",
    ],
    drills: [
      {
        title: "Timing drill",
        copy: "On five past NASDAQ sessions, draw vertical markers at 8:20, 9:00, 9:30, and 10:00 AM ET.",
      },
      {
        title: "Box construction drill",
        copy: "For twenty sessions, draw only the 9:00-10:00 AM ET high and low. Record what side breaks first after 10:00.",
      },
      {
        title: "Inside-box behavior",
        copy: "Replay the Brinks hour and label any early stop run, sharp markup, sharp markdown, or range expansion.",
      },
      {
        title: "Rest-of-day clue",
        copy: "After the Brinks close, track whether price trends away from the box, returns to the midpoint, or reverses through the opposite side.",
      },
    ],
    riskNotes: [
      {
        title: "Part 1 is timing-focused",
        copy: "This video defines the box and liquidity context. It does not give a complete standalone trigger model.",
      },
      {
        title: "Do not front-run the high/low",
        copy: "Entering before 10:00 AM ET means the Brinks range has not finished forming.",
      },
      {
        title: "Liquidity cuts both ways",
        copy: "More liquidity can create cleaner moves, but it also creates manipulation and stop runs inside the box.",
      },
      {
        title: "Use later lessons for entry",
        copy: "Pair this timing map with vector, W/M, psychological-level, and New York reversal rules before risking capital.",
      },
    ],
    timeline: [
      {
        time: "00:00",
        copy: "Introduces the Brinks box as the money-trade concept.",
      },
      {
        time: "00:22",
        copy: "Defines the Brinks box as 2:00-3:00 PM UK / 9:00-10:00 AM ET.",
      },
      {
        time: "01:15",
        copy: "Introduces the pre-Brinks window from 1:00 PM UK / 8:00 AM ET.",
      },
      {
        time: "02:10",
        copy: "Explains the bond-market open around 1:20 PM UK / 8:20 AM ET.",
      },
      {
        time: "03:05",
        copy: "Says 2:00 PM UK / 9:00 AM ET is when the stock-market side becomes central.",
      },
      {
        time: "04:30",
        copy: "Draws the box example and describes price marking up and down inside the hour.",
      },
      {
        time: "05:05",
        copy: "Explains that manipulation and pre-market orders are hit inside the Brinks box.",
      },
      {
        time: "05:20",
        copy: "Marks 9:30 AM ET / 2:30 PM UK as the futures-market liquidity injection.",
      },
      {
        time: "06:10",
        copy: "Summarizes that a lot of liquidity arrives when the Brinks box is created and completed.",
      },
      {
        time: "06:20",
        copy: "Gives the key rule: wait until the high and low have formed.",
      },
    ],
  },
  {
    id: "psychological-level",
    title: "Psychological Level",
    source: "YouTube breakdown - 30:29 - rollin rollo",
    summary:
      "Psychological levels are the first high and first low formed at the start of the crypto trading week. Treat them as a weekly value range: watch how price breaks, retests, accepts, or rejects the range, then use vector candles to judge whether the move is real or a trap.",
    tags: ["Psychological levels", "Weekly range", "First high/low", "Vector reaction"],
    diagram: "psychological-level",
    diagramLegend: [
      {
        title: "1. Build the range",
        copy: "Mark the first high and first low from the start of the trading week.",
        tone: "blue",
      },
      {
        title: "2. First break gives intent",
        copy: "Price breaking above or below the range shows where the market is testing value.",
        tone: "amber",
      },
      {
        title: "3. Retest decides",
        copy: "The first return to the psychological high or low tells you acceptance, rejection, or trap.",
        tone: "red",
      },
      {
        title: "4. Vectors confirm",
        copy: "Green/blue vectors support upside continuation; red vectors support downside continuation.",
        tone: "green",
      },
    ],
    quickCards: [
      {
        title: "Not magic lines",
        copy: "The range is useful because it shows where early-week value was built, not because the lines are automatic support or resistance.",
        tone: "blue",
      },
      {
        title: "Time outside matters",
        copy: "The less time price spends above the high or below the low, the more likely the move is a false break.",
        tone: "amber",
      },
      {
        title: "Vectors give the clue",
        copy: "The candle reaction at the psychological high or low is the clue. No activity at the level means no action.",
        tone: "green",
      },
    ],
    steps: [
      {
        title: "Wait for the range to form",
        copy: "For crypto, mark the first high and first low at the start of the trading week. The instructor also references Monday Asia as the cleaner time to begin using the range.",
      },
      {
        title: "Treat the range as weekly value",
        copy: "The psychological high and low represent where early orders and position-building started. They stay relevant throughout the week.",
      },
      {
        title: "Watch the first break",
        copy: "If price breaks above the psychological high or below the psychological low, do not chase. The first break only shows where price is testing value.",
      },
      {
        title: "Measure time spent outside",
        copy: "Fast rejection above the high suggests a stop run and possible move back toward the low. Fast rejection below the low suggests a stop run and possible move back toward the high.",
      },
      {
        title: "Wait for the first retest",
        copy: "The first return to the psychological high or low is the main decision point. You want to see whether price accepts the level or rejects it.",
      },
      {
        title: "Read the vector reaction",
        copy: "Green or blue vectors on a pullback above the psychological high suggest support and continuation. Red vectors rejecting the range suggest lower prices.",
      },
      {
        title: "Use context from the prior week",
        copy: "If the range forms after a selloff, upside vector recovery becomes more important. If it forms after an extended move up, downside recovery of green vectors becomes important.",
      },
      {
        title: "Trade toward the opposite side or vector target",
        copy: "If a break proves false, the first target is often the opposing side of the psychological range, then prior vector recovery areas.",
      },
    ],
    checklist: [
      "The first high and first low of the trading week are marked.",
      "The psychological high and low remain fixed on the chart.",
      "Monday Asia or the early-week range has developed.",
      "Price has broken above, broken below, or returned into the range.",
      "Time spent outside the range is observed.",
      "The first retest of the high or low is identified.",
      "Vector candles appear at the psychological high or low.",
      "The reaction shows acceptance, rejection, or a trap.",
      "Prior-week direction and old vector targets are reviewed.",
      "Entry, invalidation, and target are planned before trading.",
    ],
    drills: [
      {
        title: "Weekly range marking",
        copy: "Mark the psychological high and low for the last twenty crypto weeks. Do not trade; only record how price behaves around the lines.",
      },
      {
        title: "Time-outside audit",
        copy: "For every break above or below the range, record whether price accepted outside or quickly returned inside.",
      },
      {
        title: "Vector-at-level study",
        copy: "Collect examples where green/blue vectors appear at a retest and examples where red vectors reject a retest.",
      },
      {
        title: "Opposite-side target drill",
        copy: "When a false break appears, map whether price travels to the opposite side of the psychological range or only partially recovers.",
      },
    ],
    riskNotes: [
      {
        title: "Do not trade inactive levels",
        copy: "If price is away from the psychological range and there is no reaction at the high or low, stand down.",
      },
      {
        title: "A break is not confirmation",
        copy: "The first break can be a trap. Confirmation comes from the retest, time spent, and vector behavior.",
      },
      {
        title: "Support/resistance is incomplete",
        copy: "The lesson warns against treating the lines as simple support and resistance. Behavior at the level matters more than the line.",
      },
      {
        title: "Context changes the target",
        copy: "After prior-week markdown, upside vector recovery is more likely. After prior-week markup, downside green-vector recovery is more likely.",
      },
    ],
    timeline: [
      {
        time: "00:00",
        copy: "Introduces psychological levels and frames them as important early-week ranges.",
      },
      {
        time: "01:30",
        copy: "Defines the levels as the first high and first low formed at the start of the trading week.",
      },
      {
        time: "02:00",
        copy: "Explains crypto timing and compares it with forex Asian-session psychological levels.",
      },
      {
        time: "03:00",
        copy: "Says the levels remain static through the week and can act as support/resistance only when behavior confirms.",
      },
      {
        time: "05:00",
        copy: "Explains using a break away from the range to ask whether price is building above, below, or inside value.",
      },
      {
        time: "09:00",
        copy: "Shows Bitcoin examples where price leaves the psychological range and later reacts back into it.",
      },
      {
        time: "12:00",
        copy: "Connects vector candles and stopping-volume candles to reactions at the psychological high and low.",
      },
      {
        time: "17:40",
        copy: "Explains that green/blue vectors at a supported retest can confirm upside continuation.",
      },
      {
        time: "20:30",
        copy: "Gives the execution checklist: wait for the range, watch the first break, then judge the first retest.",
      },
      {
        time: "28:00",
        copy: "Final rule: less time above the high favors downside failure; less time below the low favors upside failure.",
      },
    ],
  },
  {
    id: "session-3-read-vector-candles",
    title: "Session 3 - How To Read Vector Candles",
    source: "YouTube breakdown - 26:17 - rollin rollo",
    summary:
      "Vector candles show aggressive participation and trapped leverage. A green vector often means late longs are buying while the market maker sells into them; a red vector often means late shorts are selling while the market maker buys into them.",
    tags: ["Vector candles", "Market maker", "Liquidity", "Candle recovery"],
    diagram: "vector-candle-flow",
    diagramLegend: [
      {
        title: "1. Retail enters emotionally",
        copy: "Green attracts late longs. Red attracts late shorts. The candle is the crowd committing.",
        tone: "amber",
      },
      {
        title: "2. Opposite side is built",
        copy: "When retail buys, the other side sells. When retail sells, the other side buys.",
        tone: "blue",
      },
      {
        title: "3. Recovery hunts leverage",
        copy: "The next move often trades back through the vector body to attack trapped entries and liquidations.",
        tone: "red",
      },
      {
        title: "4. Context decides entry",
        copy: "At lows, a green vector above the 50 EMA can confirm recovery. At highs, avoid chasing green vectors.",
        tone: "green",
      },
    ],
    quickCards: [
      {
        title: "A vector is not an entry by itself",
        copy: "The candle shows emotion and order flow. You still need location, close behavior, and the next candle reaction.",
        tone: "amber",
      },
      {
        title: "Green can be a sell-side clue",
        copy: "A green vector after a run up can mark retail buying strength while the other side prepares shorts.",
        tone: "red",
      },
      {
        title: "Red can be a buy-side clue",
        copy: "A red vector after a selloff can mark retail selling weakness while the other side builds longs.",
        tone: "green",
      },
    ],
    steps: [
      {
        title: "Identify the vector candle",
        copy: "Mark the candle body first. Green and red vectors matter most because they represent the strongest emotional participation.",
      },
      {
        title: "Read who is trapped inside it",
        copy: "A green vector usually contains late longs buying into strength. A red vector usually contains late shorts selling into weakness.",
      },
      {
        title: "Map the opposite side",
        copy: "For every retail buy there is a sell on the other side. For every retail sell there is a buy on the other side.",
      },
      {
        title: "Watch the next candle",
        copy: "Do not react before the vector closes. The next candle can wick, reverse, recover the vector body, or continue away.",
      },
      {
        title: "Use location as the filter",
        copy: "A green vector at the highs is different from a green vector at the lows after markdown. A red vector at the lows is different from a red vector in clean continuation.",
      },
      {
        title: "Mark the recovery path",
        copy: "For a green vector, watch for price to trade back down through the body. For a red vector, watch for price to trade back up through the body.",
      },
      {
        title: "Add confluence before entry",
        copy: "Use nearby structure, the 50 EMA, prior vector areas, and the next candle reaction before treating the vector as actionable.",
      },
      {
        title: "Avoid chasing emotional candles",
        copy: "The lesson warns against buying just because price is rising or shorting just because price is falling.",
      },
    ],
    checklist: [
      "The candle is clearly stronger than surrounding candles.",
      "Green/red vector color is identified before planning.",
      "The vector body is marked as the recovery zone.",
      "The likely trapped group is named: late longs or late shorts.",
      "The opposite-side market-maker logic is clear.",
      "The candle has closed before any decision is made.",
      "The next candle reaction is observed.",
      "Location is meaningful: high, low, trend, or consolidation.",
      "Recovery target and invalidation are defined.",
      "The trade is not based on chasing the candle color.",
    ],
    drills: [
      {
        title: "Opposite-side labeling",
        copy: "Mark twenty green and red vectors. Label the retail side first, then label the opposite side that is likely being built.",
      },
      {
        title: "Next-candle replay",
        copy: "Pause after each vector closes. Predict whether the next candle recovers the body, wicks first, or continues away.",
      },
      {
        title: "Recovery map",
        copy: "Draw the vector high, midpoint, and low. Track how often price returns into each part of the body.",
      },
      {
        title: "Color strength study",
        copy: "Compare green/red vectors against blue/violet vectors. Record which ones recover faster and which only mark weaker aggression.",
      },
    ],
    riskNotes: [
      {
        title: "Chasing risk",
        copy: "Buying a green vector at the high or shorting a red vector at the low is exactly the retail behavior the lesson warns about.",
      },
      {
        title: "Not every vector reverses immediately",
        copy: "The candle can continue before recovering. Entry needs the next candle behavior and surrounding context.",
      },
      {
        title: "Leverage is the trap",
        copy: "The lesson repeatedly frames 100x-style leverage as fuel for liquidation sweeps. Keep your own risk far below that behavior.",
      },
      {
        title: "Blue and violet are weaker",
        copy: "Blue/violet vectors follow similar logic, but the lesson treats green and red as the most emotional and powerful.",
      },
    ],
    timeline: [
      {
        time: "00:00",
        copy: "Introduces vector candles and the goal: understand what to look for when one appears.",
      },
      {
        time: "00:40",
        copy: "Defines the green vector as aggressive rising price and begins the market-maker explanation.",
      },
      {
        time: "01:20",
        copy: "Explains the retail order path through the exchange and liquidity provider.",
      },
      {
        time: "03:00",
        copy: "Key relationship: when retail is long, the opposite side is short.",
      },
      {
        time: "05:20",
        copy: "Applies the order-flow model to a green vector candle filled with late leveraged longs.",
      },
      {
        time: "07:00",
        copy: "Explains why green vectors often get recovered as trapped longs are attacked.",
      },
      {
        time: "10:00",
        copy: "Shows that a vector candle develops over time and must close before the next-candle read matters.",
      },
      {
        time: "13:30",
        copy: "Adds context: a green vector at the lows after markdown and above the 50 EMA can mean recovery is starting.",
      },
      {
        time: "16:00",
        copy: "Mirrors the logic for red vectors: retail shorts while the opposite side builds longs.",
      },
      {
        time: "23:00",
        copy: "Compares green/red vectors with violet/blue vectors and gives the final rule: you sell, he buys; you buy, he sells.",
      },
    ],
  },
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
    id: "session-9-first-green-vector",
    title: "Session 9 - Trading The First Green Vector",
    source: "YouTube breakdown - 34:12 - rollin rollo",
    summary:
      "The first green vector above the 50 EMA is useful only after the right development: price has marked down, red-vector imbalances are still above, the 50 EMA has compressed, and the green vector breaks from below or around the 50 EMA and closes above it. The execution is not to chase the close; mark the vector, wait for retrace into the vector or 50% area, then look for continuation away from the 50 EMA.",
    tags: ["First green vector", "50 EMA", "Vector retrace", "EMA compression"],
    diagram: "first-green-vector",
    diagramLegend: [
      {
        title: "1. Markdown first",
        copy: "The setup starts after price has traded lower and left red-vector imbalances above.",
        tone: "red",
      },
      {
        title: "2. EMA compresses",
        copy: "The 50 EMA flattens as price slows and consolidates near it.",
        tone: "blue",
      },
      {
        title: "3. First green close",
        copy: "The green vector must break from below or around the 50 EMA and close above it.",
        tone: "green",
      },
      {
        title: "4. Retrace entry",
        copy: "Wait for a test of the vector midpoint, block level, or 50 EMA before continuation.",
        tone: "amber",
      },
    ],
    quickCards: [
      {
        title: "It needs a prior markdown",
        copy: "Do not isolate the candle. The lesson wants a down move first, with unrecovered red vectors or upside imbalance still available.",
        tone: "red",
      },
      {
        title: "It must cross the 50 EMA",
        copy: "A green vector already far above the 50 EMA is not the same signal. That is often mean-reversion risk.",
        tone: "blue",
      },
      {
        title: "The trade is the retrace",
        copy: "After the green vector close, expect price to revisit the vector area before the cleaner continuation attempt.",
        tone: "green",
      },
    ],
    steps: [
      {
        title: "Confirm a markdown phase",
        copy: "Start with price trading lower. The setup is strongest after an aggressive drop, not after price has already expanded far above the 50 EMA.",
      },
      {
        title: "Mark red-vector imbalances above",
        copy: "Look left for red vectors that are not fully recovered. These are the areas price may later revisit if the bullish shift is real.",
      },
      {
        title: "Watch the 50 EMA compress",
        copy: "As price consolidates, the 50 EMA should flatten or move closer to price. This shows momentum is slowing before the break.",
      },
      {
        title: "Require the first green vector to cross",
        copy: "The candle must appear from below or around the 50 EMA and close above it. A green vector already high above the average is not this setup.",
      },
      {
        title: "Judge the close strength",
        copy: "The stronger the close above the 50 EMA, the better. A weak close or a candle that only tags the average is lower quality.",
      },
      {
        title: "Do not chase the close",
        copy: "Mark the vector body, especially its midpoint. Large green vectors commonly retrace at least into the 50% area before continuation.",
      },
      {
        title: "Enter on the retrace proof",
        copy: "Look for price to test the green-vector block, midpoint, or 50 EMA, then hold and push away. This ties the setup back to the block trade principle.",
      },
      {
        title: "Target the reason for the reversal",
        copy: "Targets should come from unrecovered red vectors, prior highs, or nearby liquidity. If price accepts below the 50 EMA and through the vector, the idea is failing.",
      },
    ],
    checklist: [
      "A clear move down happened before the signal.",
      "Red-vector imbalances or upside recovery targets are marked.",
      "The 50 EMA is compressing, flattening, or close to price.",
      "The green vector begins from below or around the 50 EMA.",
      "The green vector closes above the 50 EMA.",
      "The candle is not already stretched far above the 50 EMA.",
      "The vector midpoint or block levels are marked.",
      "No long is taken blindly at the vector close.",
      "Price retraces into the vector, midpoint, or 50 EMA and holds.",
      "Timeframe, stop, and target size match the trade style.",
    ],
    drills: [
      {
        title: "First-vector library",
        copy: "Collect at least fifty examples where the first green vector closes above the 50 EMA. Label the prior move, EMA shape, retrace depth, and result.",
      },
      {
        title: "Midpoint retrace drill",
        copy: "For each example, mark the vector high, midpoint, and low. Record whether continuation began from the midpoint, full recovery, or 50 EMA.",
      },
      {
        title: "False-signal audit",
        copy: "Build a separate folder of green vectors that appeared too far above the 50 EMA and later reverted. Compare them against the valid setups.",
      },
      {
        title: "Timeframe comparison",
        copy: "Study the same setup on 15M, 5M, and 1M. The lesson warns that the 1M version produces many fakeouts unless there is a cluster of vectors.",
      },
    ],
    riskNotes: [
      {
        title: "Stretched candles are not entries",
        copy: "A green vector far above the 50 EMA can be climactic. The better trade is usually after price returns to the average or vector zone.",
      },
      {
        title: "Large vectors need room",
        copy: "If the vector candle has a wide range, expect a deeper retrace into the body. A tight stop at the close is usually mismatched.",
      },
      {
        title: "One-minute fakeouts",
        copy: "The instructor suggests beginners focus on 15M first, then 5M. One-minute signals fail more often and require faster management.",
      },
      {
        title: "Mirror rule for shorts",
        copy: "For shorts, the red vector must break from above the 50 EMA and close below it. A red candle that only enters the 50 EMA can still become a continuation trap higher.",
      },
    ],
    timeline: [
      {
        time: "00:00",
        copy: "Introduces the first green vector above the 50 EMA as the session topic.",
      },
      {
        time: "01:16",
        copy: "Defines the first condition: price should be in a downward move with red vectors left unrecovered.",
      },
      {
        time: "02:04",
        copy: "Explains the 50 EMA flattening as price consolidates and momentum slows.",
      },
      {
        time: "02:51",
        copy: "States that the green vector close above the 50 EMA is the sign that behavior may be changing.",
      },
      {
        time: "03:09",
        copy: "Warns not to buy any green vector above the 50 EMA; it must break through from below or around the average.",
      },
      {
        time: "04:26",
        copy: "Explains the expected sequence: breakout, retrace into the vector, then continuation.",
      },
      {
        time: "07:21",
        copy: "Connects the setup to W formations and a breakout through the W midpoint.",
      },
      {
        time: "08:18",
        copy: "Adds the block trade principle as confluence for the retrace and continuation.",
      },
      {
        time: "09:06",
        copy: "Emphasizes strong candle close, wide-range caution, and the 50% vector retrace.",
      },
      {
        time: "28:17",
        copy: "Gives the practice challenge: collect many examples and measure how often the vector retraces and then leads higher.",
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
  {
    id: "session-5-m-w-formations",
    title: "Session 5 - Trading M & W Formations",
    source: "YouTube breakdown - 23:25 - rollin rollo",
    summary:
      "M and W formations are liquidity traps. A W forms after downside vectors trap shorts, liquidate them on the bounce, pull price back to recommit traders, then shift out higher. The M is the same psychology inverted at highs.",
    tags: ["M formation", "W formation", "Liquidity trap", "Multi-timeframe"],
    diagram: "m-w-formation",
    diagramLegend: [
      {
        title: "1. First leg sets the trap",
        copy: "A W starts with red vectors into a low. An M starts with green vectors into a high.",
        tone: "red",
      },
      {
        title: "2. Midpoint liquidates",
        copy: "Price reverses to force the first group out and tempt traders to flip direction.",
        tone: "amber",
      },
      {
        title: "3. Second leg commits",
        copy: "The retest should hold or sweep and reclaim. This is where the trap finalizes.",
        tone: "blue",
      },
      {
        title: "4. Shift confirms",
        copy: "Trade only after price breaks away from the formation with vector commitment.",
        tone: "green",
      },
    ],
    quickCards: [
      {
        title: "They are traps",
        copy: "The lesson is not about drawing perfect letters. W and M formations are engineered liquidity traps.",
        tone: "red",
      },
      {
        title: "Second leg matters most",
        copy: "The execution decision happens on the second leg: does it hold, sweep and reclaim, or fail?",
        tone: "amber",
      },
      {
        title: "Use higher-to-lower timeframes",
        copy: "Use 1H for structure, 15M for cleaner entry, and 5M to locate hidden vectors inside the leg.",
        tone: "green",
      },
    ],
    steps: [
      {
        title: "Start with the bigger structure",
        copy: "Use the 1H chart to identify a possible W after an extended downside move or an M after an extended upside move.",
      },
      {
        title: "Find the first leg vectors",
        copy: "For a W, look for red vector candles into the first low. For an M, look for green vector candles into the first high.",
      },
      {
        title: "Understand the first reversal",
        copy: "The move away from the first leg liquidates early traders and creates the midpoint of the formation.",
      },
      {
        title: "Wait for the second leg",
        copy: "Do not trade the first bounce or drop blindly. Let price return to form the second leg and show whether the trap is finalizing.",
      },
      {
        title: "Check whether the first leg is protected",
        copy: "A cleaner W holds above the first low. If it sweeps below, it must quickly reclaim the formation. The M is inverted at highs.",
      },
      {
        title: "Drop to 15M and 5M",
        copy: "If the 1H leg does not show clear vectors, inspect 15M and 5M. Hidden vectors inside the second leg can become the recovery target.",
      },
      {
        title: "Use vector recovery as the target logic",
        copy: "For a W, expect price to trade back into red vectors from the first or second leg. For an M, expect recovery into green vectors lower.",
      },
      {
        title: "Enter only after shift out",
        copy: "Confirmation is the break of the W peak or M neckline, ideally with vector commitment away from the trap zone.",
      },
    ],
    checklist: [
      "The pattern follows an extended move, not random chop.",
      "A possible W or M is visible on the 1H chart.",
      "First leg contains red vectors for W or green vectors for M.",
      "The midpoint move liquidates or traps the first group.",
      "Price returns to form the second leg.",
      "Second leg holds the first low/high or quickly reclaims after a sweep.",
      "15M or 5M confirms vectors inside the second leg.",
      "Price shifts out of the formation with commitment.",
      "Target is based on vector recovery or nearby structure.",
      "Failure level is defined beyond the second leg.",
    ],
    drills: [
      {
        title: "Letter-shape variation drill",
        copy: "Find twenty W formations that do not look like perfect alphabet Ws. Label first leg, midpoint, second leg, and shift out.",
      },
      {
        title: "Second-leg audit",
        copy: "Replay the second leg candle by candle. Decide whether it held, swept and reclaimed, or failed.",
      },
      {
        title: "Timeframe dissection",
        copy: "For each 1H W/M, inspect the same area on 15M and 5M. Record where hidden vector candles appeared.",
      },
      {
        title: "Failure library",
        copy: "Collect failed Ws and Ms. Note whether the second leg accepted beyond the first leg or failed to shift out.",
      },
    ],
    riskNotes: [
      {
        title: "Lower timeframe risk",
        copy: "The instructor warns that lower-timeframe W/M patterns fail more often and do not last as long.",
      },
      {
        title: "Do not demand perfect shapes",
        copy: "A valid pattern can be messy. The psychology and vector behavior matter more than the exact letter shape.",
      },
      {
        title: "Failed W",
        copy: "If the second leg breaks the first low and does not reclaim, the W is failing and price can continue down.",
      },
      {
        title: "Failed M",
        copy: "If the second leg breaks the first high and accepts above it, the M is failing and price can continue up.",
      },
    ],
    timeline: [
      {
        time: "00:00",
        copy: "Introduces M and W formations as part of the market cycle and as consolidation/trap areas.",
      },
      {
        time: "02:00",
        copy: "Connects W to inverted head-and-shoulders and M to head-and-shoulders variations.",
      },
      {
        time: "03:00",
        copy: "Explains the W first leg: red vectors into a low while retail sells and market maker buys.",
      },
      {
        time: "05:00",
        copy: "Describes the midpoint: price rises, shorts are liquidated, and market maker sells into forced buying.",
      },
      {
        time: "09:00",
        copy: "Explains the second leg: traders flip long, price drops again, and the trap is finalized.",
      },
      {
        time: "12:00",
        copy: "Mirrors the same logic for the M formation at highs with green vectors and trapped longs.",
      },
      {
        time: "15:00",
        copy: "Defines the first-leg and second-leg rule: the second leg should not accept beyond the first leg.",
      },
      {
        time: "17:00",
        copy: "Adds the technical rule: W should recover red vectors; M should recover green vectors.",
      },
      {
        time: "18:00",
        copy: "Gives timeframe workflow: 1H for bigger picture, 15M for entry, 5M for hidden vectors.",
      },
      {
        time: "21:00",
        copy: "Explains how 15M and 5M vectors inside the second leg support the recovery logic.",
      },
    ],
  },
];

const sortedLessons = [...lessons].sort((a, b) => getSessionNumber(a) - getSessionNumber(b));
const defaultLessonId = "session-9-first-green-vector";

let activeLesson = sortedLessons.find((lesson) => lesson.id === defaultLessonId) || sortedLessons[0];

const lessonList = document.querySelector("#lessonList");
const searchInput = document.querySelector("#lessonSearch");
const mobileLessonSelect = document.querySelector("#mobileLessonSelect");
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
  const matches = sortedLessons.filter((lesson) => {
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

function renderMobileLessonSelect() {
  mobileLessonSelect.innerHTML = sortedLessons
    .map((lesson) => `<option value="${lesson.id}">${lesson.title}</option>`)
    .join("");
  mobileLessonSelect.value = activeLesson.id;
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
  renderMobileLessonSelect();
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
  const scale = Math.min(cw / 760, ch / 420);
  const offsetX = (cw - 760 * scale) / 2;
  const offsetY = (ch - 420 * scale) / 2;

  ctx.clearRect(0, 0, cw, ch);
  ctx.save();
  ctx.translate(offsetX, offsetY);
  ctx.scale(scale, scale);
  ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  if (activeLesson.diagram === "block-trade") {
    drawBlockTradeSetup(ctx);
  } else if (activeLesson.diagram === "first-green-vector") {
    drawFirstGreenVectorSetup(ctx);
  } else if (activeLesson.diagram === "new-york-reversal") {
    drawNewYorkReversalSetup(ctx);
  } else if (activeLesson.diagram === "m-w-formation") {
    drawMWFormationSetup(ctx);
  } else if (activeLesson.diagram === "vector-candle-flow") {
    drawVectorCandleFlowSetup(ctx);
  } else if (activeLesson.diagram === "psychological-level") {
    drawPsychologicalLevelSetup(ctx);
  } else if (activeLesson.diagram === "brink-box-recovery") {
    drawBrinkBoxRecoverySetup(ctx);
  } else if (activeLesson.diagram === "brink-box") {
    drawBrinkBoxSetup(ctx);
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

function drawFirstGreenVectorSetup(ctx) {
  ctx.strokeStyle = "#2a66a2";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(56, 132);
  ctx.bezierCurveTo(150, 176, 196, 238, 296, 246);
  ctx.bezierCurveTo(384, 254, 504, 232, 690, 146);
  ctx.stroke();

  ctx.fillStyle = "#2a66a2";
  ctx.font = "800 18px Inter, ui-sans-serif, system-ui, sans-serif";
  ctx.fillText("50 EMA", 606, 164);

  ctx.strokeStyle = "#171b1f";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(70, 92);
  ctx.lineTo(126, 154);
  ctx.lineTo(176, 232);
  ctx.lineTo(236, 274);
  ctx.lineTo(304, 254);
  ctx.lineTo(372, 196);
  ctx.lineTo(432, 116);
  ctx.lineTo(506, 214);
  ctx.lineTo(590, 148);
  ctx.lineTo(690, 82);
  ctx.stroke();

  drawZone(ctx, 142, 138, 106, 154, "#b83a31");
  drawCandle(ctx, 166, 158, 38, 104, "#b83a31");
  drawCandle(ctx, 214, 190, 36, 88, "#b83a31");

  drawZone(ctx, 274, 226, 116, 62, "#b47a1f");
  ctx.fillStyle = "#171b1f";
  ctx.font = "700 16px Inter, ui-sans-serif, system-ui, sans-serif";
  ctx.fillText("compression", 278, 316);

  drawZone(ctx, 374, 164, 86, 130, "#217a55");
  drawCandle(ctx, 394, 184, 44, 96, "#217a55");

  ctx.strokeStyle = "rgba(23, 27, 31, 0.45)";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(374, 230);
  ctx.lineTo(520, 230);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#171b1f";
  ctx.font = "700 16px Inter, ui-sans-serif, system-ui, sans-serif";
  ctx.fillText("50% retrace", 468, 244);
  ctx.fillText("continuation", 574, 118);

  drawZone(ctx, 484, 208, 58, 44, "#b47a1f");

  badge(ctx, "1", 132, 130, "#b83a31");
  badge(ctx, "2", 300, 246, "#2a66a2");
  badge(ctx, "3", 432, 116, "#217a55");
  badge(ctx, "4", 516, 230, "#b47a1f");
}

function getSessionNumber(lesson) {
  const match = lesson.title.match(/Session\s+(\d+)/i);
  return match ? Number(match[1]) : 0;
}

function drawBrinkBoxSetup(ctx) {
  ctx.strokeStyle = "rgba(23, 27, 31, 0.45)";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(72, 104);
  ctx.lineTo(72, 322);
  ctx.moveTo(220, 64);
  ctx.lineTo(220, 342);
  ctx.moveTo(420, 64);
  ctx.lineTo(420, 342);
  ctx.moveTo(640, 104);
  ctx.lineTo(640, 322);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#eef3f0";
  ctx.strokeStyle = "#2a66a2";
  ctx.lineWidth = 3;
  ctx.strokeRect(220, 104, 420, 218);
  ctx.fillRect(220, 104, 420, 218);

  ctx.fillStyle = "#171b1f";
  ctx.font = "800 18px Inter, ui-sans-serif, system-ui, sans-serif";
  ctx.fillText("8:20 ET", 44, 82);
  ctx.fillText("9:00 ET", 192, 48);
  ctx.fillText("9:30 ET", 392, 48);
  ctx.fillText("10:00 ET", 602, 82);

  ctx.font = "700 16px Inter, ui-sans-serif, system-ui, sans-serif";
  ctx.fillText("bonds tone", 42, 344);
  ctx.fillText("Brinks box high", 244, 96);
  ctx.fillText("Brinks box low", 250, 350);
  ctx.fillText("futures liquidity", 442, 344);

  ctx.strokeStyle = "#171b1f";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(224, 258);
  ctx.lineTo(270, 142);
  ctx.lineTo(326, 292);
  ctx.lineTo(384, 168);
  ctx.lineTo(452, 286);
  ctx.lineTo(528, 128);
  ctx.lineTo(636, 218);
  ctx.stroke();

  drawZone(ctx, 220, 104, 420, 218, "#2a66a2");
  drawCandle(ctx, 266, 146, 34, 128, "#217a55");
  drawCandle(ctx, 394, 188, 34, 116, "#b83a31");
  drawCandle(ctx, 514, 132, 34, 132, "#217a55");

  ctx.strokeStyle = "#b47a1f";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(72, 304);
  ctx.lineTo(220, 258);
  ctx.stroke();

  ctx.strokeStyle = "#217a55";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(420, 286);
  ctx.lineTo(528, 128);
  ctx.stroke();

  badge(ctx, "1", 72, 306, "#2a66a2");
  badge(ctx, "2", 220, 72, "#b47a1f");
  badge(ctx, "3", 420, 306, "#217a55");
  badge(ctx, "4", 640, 220, "#b83a31");
}

function drawBrinkBoxRecoverySetup(ctx) {
  ctx.fillStyle = "#eef3f0";
  ctx.strokeStyle = "#2a66a2";
  ctx.lineWidth = 3;
  ctx.fillRect(126, 104, 374, 190);
  ctx.strokeRect(126, 104, 374, 190);

  ctx.strokeStyle = "rgba(23, 27, 31, 0.45)";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(78, 104);
  ctx.lineTo(682, 104);
  ctx.moveTo(78, 294);
  ctx.lineTo(682, 294);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#171b1f";
  ctx.font = "800 18px Inter, ui-sans-serif, system-ui, sans-serif";
  ctx.fillText("Brinks high", 132, 88);
  ctx.fillText("Brinks low", 132, 326);
  ctx.fillText("reclaim", 508, 248);
  ctx.fillText("target", 604, 134);

  drawZone(ctx, 188, 150, 106, 120, "#b83a31");
  drawCandle(ctx, 216, 166, 46, 86, "#b83a31");
  drawZone(ctx, 348, 128, 94, 112, "#217a55");
  drawCandle(ctx, 372, 144, 42, 78, "#217a55");

  ctx.strokeStyle = "#171b1f";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(96, 182);
  ctx.lineTo(142, 122);
  ctx.lineTo(194, 252);
  ctx.lineTo(250, 164);
  ctx.lineTo(318, 214);
  ctx.lineTo(392, 138);
  ctx.lineTo(486, 282);
  ctx.lineTo(540, 322);
  ctx.lineTo(584, 246);
  ctx.lineTo(662, 144);
  ctx.stroke();

  ctx.strokeStyle = "#b47a1f";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(486, 282);
  ctx.lineTo(540, 322);
  ctx.lineTo(584, 246);
  ctx.stroke();

  ctx.strokeStyle = "#217a55";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(584, 246);
  ctx.lineTo(662, 144);
  ctx.stroke();

  drawZone(ctx, 602, 118, 76, 62, "#217a55");

  badge(ctx, "1", 126, 104, "#2a66a2");
  badge(ctx, "2", 188, 150, "#b83a31");
  badge(ctx, "3", 540, 322, "#b47a1f");
  badge(ctx, "4", 662, 144, "#217a55");
}

function drawVectorCandleFlowSetup(ctx) {
  ctx.strokeStyle = "rgba(23, 27, 31, 0.45)";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(56, 212);
  ctx.lineTo(704, 212);
  ctx.stroke();
  ctx.setLineDash([]);

  drawZone(ctx, 104, 86, 112, 214, "#217a55");
  drawCandle(ctx, 136, 110, 50, 154, "#217a55");

  ctx.strokeStyle = "#217a55";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(78, 286);
  ctx.lineTo(110, 238);
  ctx.lineTo(136, 174);
  ctx.lineTo(172, 118);
  ctx.lineTo(224, 86);
  ctx.stroke();

  ctx.strokeStyle = "#b83a31";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(224, 86);
  ctx.lineTo(248, 118);
  ctx.lineTo(270, 178);
  ctx.lineTo(292, 236);
  ctx.lineTo(324, 300);
  ctx.stroke();

  drawZone(ctx, 420, 154, 118, 178, "#b83a31");
  drawCandle(ctx, 452, 176, 50, 128, "#b83a31");

  ctx.strokeStyle = "#b83a31";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(380, 116);
  ctx.lineTo(414, 168);
  ctx.lineTo(450, 232);
  ctx.lineTo(498, 314);
  ctx.stroke();

  ctx.strokeStyle = "#217a55";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(498, 314);
  ctx.lineTo(536, 254);
  ctx.lineTo(584, 184);
  ctx.lineTo(650, 118);
  ctx.stroke();

  ctx.fillStyle = "#171b1f";
  ctx.font = "700 18px Inter, ui-sans-serif, system-ui, sans-serif";
  ctx.fillText("late longs", 92, 66);
  ctx.fillText("late shorts", 414, 366);

  ctx.fillStyle = "#b83a31";
  ctx.fillText("recovery lower", 238, 132);
  ctx.fillStyle = "#217a55";
  ctx.fillText("recovery higher", 544, 164);

  badge(ctx, "1", 120, 76, "#b47a1f");
  badge(ctx, "2", 202, 116, "#2a66a2");
  badge(ctx, "3", 296, 300, "#b83a31");
  badge(ctx, "4", 650, 116, "#217a55");
}

function drawPsychologicalLevelSetup(ctx) {
  ctx.strokeStyle = "#2a66a2";
  ctx.lineWidth = 3;
  ctx.setLineDash([10, 8]);
  ctx.beginPath();
  ctx.moveTo(64, 122);
  ctx.lineTo(704, 122);
  ctx.moveTo(64, 302);
  ctx.lineTo(704, 302);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#2a66a2";
  ctx.font = "800 18px Inter, ui-sans-serif, system-ui, sans-serif";
  ctx.fillText("psychological high", 80, 102);
  ctx.fillText("psychological low", 80, 330);

  drawZone(ctx, 88, 122, 168, 180, "#2a66a2");

  ctx.strokeStyle = "#171b1f";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(92, 250);
  ctx.lineTo(136, 170);
  ctx.lineTo(178, 294);
  ctx.lineTo(230, 146);
  ctx.stroke();

  ctx.strokeStyle = "#217a55";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(230, 146);
  ctx.lineTo(292, 76);
  ctx.lineTo(352, 126);
  ctx.lineTo(422, 92);
  ctx.stroke();

  drawCandle(ctx, 294, 76, 40, 96, "#217a55");
  drawCandle(ctx, 364, 88, 38, 82, "#2a66a2");

  ctx.strokeStyle = "#b47a1f";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(422, 92);
  ctx.lineTo(476, 124);
  ctx.lineTo(528, 122);
  ctx.stroke();

  ctx.strokeStyle = "#217a55";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(528, 122);
  ctx.lineTo(602, 78);
  ctx.lineTo(690, 56);
  ctx.stroke();

  drawZone(ctx, 468, 96, 88, 56, "#217a55");

  ctx.strokeStyle = "#b83a31";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(282, 316);
  ctx.lineTo(338, 348);
  ctx.lineTo(404, 302);
  ctx.stroke();

  drawCandle(ctx, 318, 292, 36, 82, "#b83a31");

  badge(ctx, "1", 104, 168, "#2a66a2");
  badge(ctx, "2", 286, 72, "#b47a1f");
  badge(ctx, "3", 516, 158, "#b83a31");
  badge(ctx, "4", 650, 52, "#217a55");
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

function drawMWFormationSetup(ctx) {
  ctx.strokeStyle = "#b83a31";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(72, 102);
  ctx.lineTo(156, 292);
  ctx.lineTo(256, 142);
  ctx.lineTo(350, 278);
  ctx.lineTo(470, 86);
  ctx.stroke();

  drawZone(ctx, 120, 210, 80, 96, "#b83a31");
  drawZone(ctx, 310, 216, 84, 82, "#b83a31");
  drawCandle(ctx, 134, 224, 36, 72, "#b83a31");
  drawCandle(ctx, 326, 230, 36, 58, "#b83a31");

  ctx.strokeStyle = "#217a55";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(500, 286);
  ctx.lineTo(556, 116);
  ctx.lineTo(618, 244);
  ctx.lineTo(690, 108);
  ctx.stroke();

  drawZone(ctx, 536, 86, 72, 98, "#217a55");
  drawCandle(ctx, 554, 96, 34, 76, "#217a55");

  ctx.strokeStyle = "rgba(23, 27, 31, 0.45)";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(56, 142);
  ctx.lineTo(488, 142);
  ctx.moveTo(492, 244);
  ctx.lineTo(704, 244);
  ctx.stroke();
  ctx.setLineDash([]);

  badge(ctx, "1", 116, 92, "#b83a31");
  badge(ctx, "2", 258, 116, "#b47a1f");
  badge(ctx, "3", 350, 314, "#2a66a2");
  badge(ctx, "4", 474, 66, "#217a55");
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
mobileLessonSelect.addEventListener("change", () => {
  const selectedLesson = sortedLessons.find((lesson) => lesson.id === mobileLessonSelect.value);
  if (!selectedLesson) return;

  activeLesson = selectedLesson;
  searchInput.value = "";
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
focusButton.addEventListener("click", () => document.body.classList.toggle("focus"));
printButton.addEventListener("click", () => window.print());
window.addEventListener("resize", drawSetup);

render();
