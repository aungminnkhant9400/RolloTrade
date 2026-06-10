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
    id: "session-12-how-to-trade-stopping-volume-candles",
    title: "Session 12 - How To Trade Stopping Volume Candles",
    source: "YouTube breakdown - 28:40 - rollin rollo",
    summary:
      "Session 12 explains stopping volume candles as vector candles that develop into rejection candles at significant highs, lows, or range edges. The lesson frames them as climatic trap candles: market maker absorbs late sellers into a move down or late buyers into a move up, creates a wick, then moves price away from that zone when enough liquidity has been captured.",
    tags: ["Stopping volume", "Vector candles", "Liquidity trap", "Reversal clue"],
    diagram: "stopping-volume-candle",
    diagramLegend: [
      {
        title: "1. Climatic drive",
        copy: "Price runs hard into a high or low and invites traders to chase the move.",
        tone: "red",
      },
      {
        title: "2. Vector becomes wick",
        copy: "The candle starts as aggressive volume, then rejects and becomes stopping volume.",
        tone: "amber",
      },
      {
        title: "3. Trapped traders",
        copy: "Late shorts at lows or late longs at highs become fuel for the reversal.",
        tone: "blue",
      },
      {
        title: "4. Markup/markdown",
        copy: "A confirmed stopping-volume candle can start the next phase away from the trap.",
        tone: "green",
      },
    ],
    quickCards: [
      {
        title: "It becomes stopping volume",
        copy: "The lesson stresses that the candle does not appear as stopping volume immediately. It develops into one as the wick forms.",
        tone: "amber",
      },
      {
        title: "Location matters",
        copy: "The best examples usually appear at lows, highs, or meaningful range edges, not randomly in the middle of a move.",
        tone: "blue",
      },
      {
        title: "Journal the variations",
        copy: "The homework is to itemize many examples: size, location, cluster count, prior environment, and what price did afterward.",
        tone: "green",
      },
    ],
    steps: [
      {
        title: "Know the vector colors",
        copy: "Green and red vectors show volume around 200% above the recent average, while blue and violet show around 150%. Green/blue are positive vectors; red/violet are negative vectors.",
      },
      {
        title: "Watch the candle develop",
        copy: "A stopping volume candle begins as an aggressive vector candle. The clue appears when price sharply rejects, builds a wick, and closes as a candle that shows absorption.",
      },
      {
        title: "Read the low version",
        copy: "After a markdown, late traders chase shorts. A red or violet stopping volume candle at the low suggests market maker is buying from those sellers and may reverse price up.",
      },
      {
        title: "Read the high version",
        copy: "After a markup, late traders chase longs. A green or blue stopping volume candle at the high suggests market maker is selling into those buyers and may reverse price down.",
      },
      {
        title: "Use the wick as the trap zone",
        copy: "The wick shows the area where price ran liquidity and then rejected. If stopping volume forms inside a range, expect price may revisit the wick before choosing direction.",
      },
      {
        title: "Check the environment first",
        copy: "Do not assume every stopping volume candle is the final high or low. Ask whether it appeared after markdown, after markup, inside a range, after news, or halfway through a trend.",
      },
      {
        title: "Respect size and clustering",
        copy: "A larger stopping volume candle implies stronger manipulation. Multiple candles clustered together can mark repeated attempts to stop or reverse the move.",
      },
      {
        title: "Wait for movement away",
        copy: "The stronger signal is not only the wick. It is the fast movement away from the wick that shows market maker wants to leave the zone.",
      },
      {
        title: "Map the phase change",
        copy: "After downside stopping volume, look for a markup phase. After upside stopping volume, look for a markdown phase. The candle is the clue that the prior phase may be ending.",
      },
      {
        title: "Build a statistics sheet",
        copy: "The practice work is to log examples, especially on the 1H timeframe, and record where they appear, how large they are, how many print, and what environment preceded them.",
      },
    ],
    checklist: [
      "The candle is a vector or high-volume candle first.",
      "A wick forms after aggressive movement into the high or low.",
      "The candle appears at a meaningful low, high, range edge, or liquidity zone.",
      "The prior move is identified as markup, markdown, range, or news-driven movement.",
      "Late traders are likely chasing in the wrong direction.",
      "The candle size is large enough to be impressionable.",
      "Any nearby cluster of stopping volume candles is marked.",
      "Price shows movement away from the wick before the trade is trusted.",
      "The wick zone and invalidation are marked.",
      "The target comes from vector recovery, range edge, or the next phase of markup/markdown.",
    ],
    drills: [
      {
        title: "One-hour archive",
        copy: "On Bitcoin, collect at least fifty 1H stopping volume candles. Record whether each one appeared at a high, low, range edge, or in the middle of a move.",
      },
      {
        title: "Development replay",
        copy: "Replay examples candle by candle and pause while the candle is still forming. Note when it looked like a normal vector and when it became stopping volume.",
      },
      {
        title: "Cluster study",
        copy: "Find examples with more than one stopping volume candle in the same area. Compare single-candle reversals against clustered reversals.",
      },
      {
        title: "Environment filter",
        copy: "For each example, label the prior condition: markdown, markup, range, or news. Track which environments produced the cleanest follow-through.",
      },
    ],
    riskNotes: [
      {
        title: "A candle is not enough",
        copy: "A stopping volume candle halfway through a trend can still continue lower or higher. Context and movement away from the wick matter.",
      },
      {
        title: "Large size cuts both ways",
        copy: "A large candle can imply strong manipulation, but it can also require wider invalidation because the wick and body cover more distance.",
      },
      {
        title: "Do not front-run formation",
        copy: "The candle only becomes stopping volume after rejection appears. Calling it too early means you are predicting instead of reading development.",
      },
      {
        title: "Clusters need patience",
        copy: "More than one stopping volume candle can appear before the real move away starts. Let the area prove itself before treating it as reversal.",
      },
    ],
    timeline: [
      {
        time: "00:00",
        copy: "Introduces stopping volume candles as candles or clusters that appear at significant chart points and signal that something may change.",
      },
      {
        time: "01:00",
        copy: "Reviews vector colors: green/red at roughly 200% above average volume, blue/violet around 150%, with positive and negative versions.",
      },
      {
        time: "02:00",
        copy: "Explains the visual form: small body or wick-heavy candle after a move to the downside or upside.",
      },
      {
        time: "04:00",
        copy: "Builds the order-flow example using late short sellers waiting for a breakdown.",
      },
      {
        time: "05:00",
        copy: "States the key rule: a candle becomes stopping volume; it does not start as one.",
      },
      {
        time: "06:00",
        copy: "Shows the red vector candle during a sharp Bitcoin drop and explains retail shorts being triggered.",
      },
      {
        time: "07:00",
        copy: "Restates market maker logic: red vectors can represent buying into falling prices, while green vectors can represent selling into rising prices.",
      },
      {
        time: "08:00",
        copy: "Explains why the next move may recover the red vector after market maker has been buying into the drop.",
      },
      {
        time: "10:00",
        copy: "Connects stopping volume to liquidation pressure and the incentive to attack trapped trader margins.",
      },
      {
        time: "12:00",
        copy: "Explains why market maker may reverse fast after enough downside liquidity has been captured.",
      },
      {
        time: "15:00",
        copy: "Defines the next phase after downside stopping volume as markup, with the mirror version creating markdown from highs.",
      },
      {
        time: "16:00",
        copy: "Moves to chart examples and notes that size plays a major role in reading stopping volume.",
      },
      {
        time: "17:00",
        copy: "Shows repeated Bitcoin examples and notes that price often comes back into the stopping-volume wick.",
      },
      {
        time: "18:00",
        copy: "Highlights the common theme: stopping volume appears at lows, highs, and sometimes meaningful range locations.",
      },
      {
        time: "21:00",
        copy: "Gives the study plan: use the 1H timeframe and journal where stopping volume candles appear.",
      },
      {
        time: "22:00",
        copy: "Adds journal fields: prior environment, whether candles cluster, candle size, and whether they came after markup or markdown.",
      },
      {
        time: "24:00",
        copy: "Warns that environment matters because a stopping volume candle can still appear halfway through a move.",
      },
      {
        time: "25:00",
        copy: "Explains that speed into the wick and speed back out shows intention and trapping behavior.",
      },
      {
        time: "26:00",
        copy: "Defines stopping volume as a climatic candle where many traders are trapped at the same point.",
      },
      {
        time: "27:00",
        copy: "Final practice message: study thousands of examples so the repeated behavior becomes recognizable in live charts.",
      },
    ],
  },
  {
    id: "session-13-how-to-trade-psychological-level",
    title: "Session 13 - How To Trade Psychological Level",
    source: "YouTube breakdown - 30:29 - rollin rollo",
    summary:
      "Session 13 explains SI psychological levels as the first high and first low formed at the start of the crypto trading week. Treat them as a weekly value range: watch how price breaks, retests, accepts, or rejects the range, then use vector candles, stopping volume, and time spent outside the range to judge whether the move is real or a trap.",
    tags: ["Psychological levels", "Weekly range", "SI levels", "Vector reaction"],
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
    id: "session-14-how-to-use-macro-data-to-trade",
    title: "Session 14 - How To Use Macro Data To Trade",
    source: "YouTube breakdown - 49:54 - rollin rollo",
    summary:
      "Session 14 explains how to turn macroeconomic data into a trading narrative. The lesson starts with the calendar, separates labor, economy, and inflation releases, then asks how the data changes interest-rate expectations, dollar strength, bond demand, tech-equity risk, FX pairs, carry trades, and gold before using price action to execute.",
    tags: ["Macro data", "Interest rates", "Dollar", "Risk assets"],
    diagram: "macro-data-flow",
    diagramLegend: [
      {
        title: "1. Data release",
        copy: "Classify the release: labor, economy, inflation, central-bank rate path, or geopolitical risk.",
        tone: "blue",
      },
      {
        title: "2. Rate expectation",
        copy: "Ask whether the data makes cuts more likely, less likely, or keeps rates higher for longer.",
        tone: "amber",
      },
      {
        title: "3. Asset translation",
        copy: "Map the rate story into dollar, bonds, NASDAQ, FX pairs, yen carry trade, and gold.",
        tone: "red",
      },
      {
        title: "4. Trade bias",
        copy: "Use the macro story as bias, then require chart behavior before taking the trade.",
        tone: "green",
      },
    ],
    quickCards: [
      {
        title: "Good news can be bad",
        copy: "In a rate-cut environment, strong jobs, strong ISM, or sticky inflation can be bad for risk assets because it reduces the chance of cuts.",
        tone: "amber",
      },
      {
        title: "Rates drive the story",
        copy: "The lesson keeps returning to one question: does the data make investors want dollars, bonds, equities, FX alternatives, or gold?",
        tone: "blue",
      },
      {
        title: "Bias is not an entry",
        copy: "Macro gives the directional story. The actual trade still needs price action, vectors, levels, and the hybrid-system context.",
        tone: "red",
      },
    ],
    steps: [
      {
        title: "Start with the economic calendar",
        copy: "Before trading, check what data is due. Sort the releases into labor data, economy/activity data, inflation data, central-bank rate context, or geopolitical drivers.",
      },
      {
        title: "Classify labor data",
        copy: "For the jobs market, watch unemployment rate, non-farm payrolls, JOLTS job openings, ADP non-farm, and average hourly earnings. The data tells you whether the labor market is strong or weakening.",
      },
      {
        title: "Classify economy data",
        copy: "For the economy, watch flash manufacturing, flash services, and ISM-style activity readings. Above 50 means expansion; below 50 means contraction, but the market cares most about what that means for rates.",
      },
      {
        title: "Classify inflation data",
        copy: "For inflation, focus on CPI, core CPI month-on-month, PPI, and year-on-year pressure. Sticky inflation can keep rates high even when traders want cuts.",
      },
      {
        title: "Tie each release to the native currency",
        copy: "US data first impacts the dollar. Euro data first impacts the euro. UK data first impacts pound. Then compare that currency against the dollar index and other currencies.",
      },
      {
        title: "Place the release inside the rate cycle",
        copy: "Do not read good or bad data in isolation. If investors want rate cuts, strong jobs or sticky inflation may hurt equities because it argues for higher-for-longer rates.",
      },
      {
        title: "Translate the rate path into assets",
        copy: "Higher dollar yields can pull money toward dollars and bonds. That can pressure NASDAQ and other tech assets because high rates raise the cost of doing business.",
      },
      {
        title: "Read FX through relative yield",
        copy: "Compare dollar rates with euro, pound, yen, and other currencies. A low-yield currency can weaken against a high-yield currency unless expectations change.",
      },
      {
        title: "Respect the yen carry trade",
        copy: "When Japanese rates are very low, investors may borrow yen, sell it for dollars, and buy tech or US debt. If Japan raises rates, that carry trade can unwind and pressure risk assets.",
      },
      {
        title: "Use gold as a macro signal",
        copy: "Gold can rise on geopolitical tension, rate-cut expectations, or hedging demand. Consolidation in gold can show hedges being built before a future event.",
      },
      {
        title: "Convert narrative into daily bias",
        copy: "After building the macro story, decide whether you are favoring tech longs, tech shorts, dollar strength, dollar weakness, FX alternatives, bonds, or gold.",
      },
      {
        title: "Let the chart confirm",
        copy: "Only after the macro path is clear do you use price action: vectors, levels, moving averages, session context, and hybrid-system signals to plan the actual trade.",
      },
    ],
    checklist: [
      "The economic calendar has been checked before the session.",
      "Each important release is classified as labor, economy, inflation, central-bank, or geopolitical.",
      "The native currency affected by the release is identified.",
      "Current interest-rate levels are known.",
      "The market expectation for cuts, holds, or hikes is written down.",
      "The data is judged relative to that rate expectation.",
      "Dollar direction and dollar-index context are checked.",
      "Bond-market direction is checked against equity behavior.",
      "NASDAQ and tech-stock sensitivity to rates is considered.",
      "FX pairs are reviewed through relative yield and dollar weighting.",
      "Yen carry-trade risk is considered when Japan rates or yen strength matter.",
      "Gold is checked for rate-cut, tension, or hedge-building context.",
      "The final trade idea has chart confirmation, not macro bias alone.",
    ],
    drills: [
      {
        title: "Calendar classification drill",
        copy: "For the next four trading weeks, list every major release and label it labor, economy, inflation, central-bank, or geopolitical before the data comes out.",
      },
      {
        title: "Good-news bad-news journal",
        copy: "Track days where strong US data hurt NASDAQ or supported the dollar because rate cuts became less likely. Record the release, dollar reaction, bond reaction, and equity reaction.",
      },
      {
        title: "Asset translation map",
        copy: "Pick one release and write the path from data to rates, rates to dollar/yields, dollar/yields to NASDAQ, FX, bonds, and gold.",
      },
      {
        title: "Carry-trade replay",
        copy: "Review the yen carry-trade unwind example and any session where yen strength coincided with tech weakness. Note what happened to dollar, bonds, and NASDAQ.",
      },
      {
        title: "Macro-to-chart drill",
        copy: "Build a macro bias before opening the chart, then only mark trades where vectors and levels confirmed the bias. Compare bias-only ideas with confirmed ideas.",
      },
    ],
    riskNotes: [
      {
        title: "Definitions are not enough",
        copy: "Knowing what CPI, ISM, or NFP means is not the edge. The edge is understanding what investors do with the data in the current rate environment.",
      },
      {
        title: "Macro regimes change",
        copy: "The same strong jobs number can mean different things depending on whether the market wants rate cuts, fears inflation, or expects higher-for-longer policy.",
      },
      {
        title: "Do not chase the release",
        copy: "Fast news candles can mislead. Wait for the macro story to align with price action and for the chart to show where value is being accepted or rejected.",
      },
      {
        title: "One asset does not tell the whole story",
        copy: "NASDAQ, dollar, bonds, euro, yen, pound, and gold each show a piece of the investor-value story. Avoid building bias from only one chart.",
      },
    ],
    timeline: [
      {
        time: "00:00",
        copy: "Introduces the goal: understand macro data by what it impacts and what investors do with it, not just textbook definitions.",
      },
      {
        time: "01:00",
        copy: "Starts with labor data: unemployment rate, non-farm payrolls, JOLTS job openings, ADP non-farm, and average hourly earnings.",
      },
      {
        time: "04:00",
        copy: "Explains that US jobs data first impacts the US dollar, but the current rate-cut environment can invert the normal reaction.",
      },
      {
        time: "06:00",
        copy: "Explains why a lower unemployment rate can reduce rate-cut odds and keep investors in dollars when yields remain attractive.",
      },
      {
        time: "10:00",
        copy: "Connects high rates to tech-equity pressure because companies such as large tech names are sensitive to borrowing costs and yields.",
      },
      {
        time: "11:00",
        copy: "Moves into economy data: flash manufacturing, flash services, ISM, and the expansion/contraction threshold around 50.",
      },
      {
        time: "15:00",
        copy: "Introduces inflation data: core CPI, PPI, month-on-month CPI, year-on-year CPI, and sticky inflation pressure.",
      },
      {
        time: "18:00",
        copy: "Summarizes the current regime as good news can be bad news, while bad news can be good news, because the rate path dominates.",
      },
      {
        time: "21:00",
        copy: "Explains the dollar index composition, led mainly by euro, then yen and pound, with smaller currency weights behind them.",
      },
      {
        time: "24:00",
        copy: "Shifts from definitions into process: use the calendar to know what is being released, then ask where the traded asset sits in the macro story.",
      },
      {
        time: "26:00",
        copy: "Builds a NASDAQ example using tech-market location, interest rates, inflation, available jobs data, and missing shutdown-delayed data.",
      },
      {
        time: "28:00",
        copy: "Adds bond-market behavior: if bonds rise while NASDAQ falls, investors may be choosing lower risk over tech risk.",
      },
      {
        time: "30:00",
        copy: "Builds the FX example from dollar dominance, dollar depreciation/appreciation, and relative expectations for euro, pound, and yen.",
      },
      {
        time: "35:00",
        copy: "Explains the yen carry trade: borrow cheap yen, sell for dollars, buy tech or US debt, then unwind if Japan raises rates.",
      },
      {
        time: "38:00",
        copy: "Restates the macro process as a question of future value: where will investors perceive value after the data?",
      },
      {
        time: "41:00",
        copy: "Mentions stock-bond ratio as another metric for judging whether stocks are overvalued relative to bonds.",
      },
      {
        time: "42:00",
        copy: "Introduces gold: geopolitical tension, rate-cut expectations, and hedging demand can all support gold.",
      },
      {
        time: "45:00",
        copy: "Explains gold consolidation as hedge-building before future events, not only a simple reaction after headlines.",
      },
      {
        time: "47:00",
        copy: "Wraps the process: know the data, translate it through rates and value, then decide whether assets should appreciate or depreciate.",
      },
      {
        time: "49:00",
        copy: "Final takeaway: trading is about interpreting the perceived value of many market participants, not just asking if Bitcoin is up or down.",
      },
    ],
  },
  {
    id: "session-15-orderflow-and-vectors",
    title: "Session 15 - Orderflow And Vectors",
    source: "YouTube breakdown - 1:08:16 - rollin rollo",
    summary:
      "Session 15 turns orderflow into a practical structure-and-sentiment framework. The lesson uses volume profile, value area high, value area low, point of control, Brinks/New York liquidity, delta, and vectors to judge whether traders are trapped at premium or discount instead of treating positive delta as an automatic buy or negative delta as an automatic sell.",
    tags: ["Orderflow", "Delta", "Value area", "Vectors"],
    diagram: "orderflow-vectors",
    diagramLegend: [
      {
        title: "1. Build the map",
        copy: "Use VAH, VAL, and POC only after the session has enough real volume to show commitment.",
        tone: "blue",
      },
      {
        title: "2. Read premium",
        copy: "At VAH, strong positive delta and green vectors can mean late buyers are being trapped.",
        tone: "red",
      },
      {
        title: "3. Read discount",
        copy: "At VAL, strong negative delta and red vectors can mean late sellers are being trapped.",
        tone: "green",
      },
      {
        title: "4. Confirm the shift",
        copy: "Use the next delta change, vector recovery, midpoint behavior, and price action before acting.",
        tone: "amber",
      },
    ],
    quickCards: [
      {
        title: "Orderflow is development",
        copy: "The goal is not to predict. The goal is to see how price develops around value, liquidity, vectors, and trapped participation.",
        tone: "blue",
      },
      {
        title: "Delta is context, not a signal",
        copy: "Positive delta at a high can be trapped buying. Negative delta at a low can be trapped selling. Location decides what the number means.",
        tone: "amber",
      },
      {
        title: "Vectors show behavior",
        copy: "Green vectors at premium and red vectors at discount are not automatic continuation. They can be market-maker activity into retail pressure.",
        tone: "red",
      },
    ],
    steps: [
      {
        title: "Treat orderflow as a practical read",
        copy: "Do not get lost in every orderflow term first. Use the pieces that help you see development: volume profile, VAH, VAL, POC, delta, vectors, absorption, exhaustion, and auction failure.",
      },
      {
        title: "Wait for a real profile",
        copy: "Before New York volume, VAH, VAL, and POC can be weak references. Let the market create a truer representation of commitment before trusting the levels.",
      },
      {
        title: "Respect the Brinks window",
        copy: "The lesson repeatedly points back to waiting for Brinks/New York liquidity. The POC can shift after real volume arrives, so early levels can mislead.",
      },
      {
        title: "Classify the trade location",
        copy: "Ask whether price is at value area high, value area low, point of control, or a 50% midpoint. That location tells you whether price is premium, discount, balanced, or resetting.",
      },
      {
        title: "Read VAH as premium",
        copy: "When price breaks above VAH after travelling from lower value, it is trading at a premium. Strong positive delta there does not automatically mean buyers are in control.",
      },
      {
        title: "Spot trapped buyers",
        copy: "At VAH, a green vector with strong positive delta can show retail buying into market-maker selling. The trap becomes more useful if the next candle flips negative and price returns into value.",
      },
      {
        title: "Read VAL as discount",
        copy: "When price drives into value area low, it is trading at a discount. Strong negative delta at that location can show sellers pressing late into possible absorption.",
      },
      {
        title: "Spot trapped sellers",
        copy: "At VAL, red vectors and heavy negative delta can show market-maker markdown into seller pressure. The recovery idea strengthens when delta flips positive and green vectors push price back up.",
      },
      {
        title: "Know the normal delta for the asset",
        copy: "A big delta reading depends on the instrument and timeframe. The lesson compares Bitcoin and NASDAQ and notes a NASDAQ example near -2.8K delta with roughly 60K volume on a five-minute candle.",
      },
      {
        title: "Use the midpoint as inventory reset",
        copy: "The 50% level, whether from a swing, vector, or Fibonacci measurement, marks an area where inventory can realign before continuation or failure.",
      },
      {
        title: "Separate structure from sentiment",
        copy: "VAH, VAL, POC, and midpoints are structure. Delta and vectors are sentiment. A trade needs both pieces to point in the same direction.",
      },
      {
        title: "Act only after confirmation",
        copy: "A level touch is not enough. Wait for a delta flip, vector behavior, absorption, stopping volume, reclaim, breakdown, or continuation pattern that confirms what the location implies.",
      },
    ],
    checklist: [
      "Brinks/New York liquidity has had time to build the profile.",
      "Value area high is marked.",
      "Value area low is marked.",
      "Point of control is marked and checked for shifts.",
      "Current price location is classified as premium, discount, value, or midpoint.",
      "Delta is read relative to location, not as a standalone buy/sell signal.",
      "Vector candles at the level are marked.",
      "At VAH, positive delta and green vectors are checked for trapped buyers.",
      "At VAL, negative delta and red vectors are checked for trapped sellers.",
      "The next candle or sequence confirms a delta flip or failure to continue.",
      "The 50% midpoint or vector midpoint is checked for inventory reset.",
      "News and session context are considered before trusting the setup.",
      "The trade has price-action confirmation after the orderflow clue.",
      "Risk is defined because the framework improves odds but does not guarantee outcome.",
    ],
    drills: [
      {
        title: "Profile map drill",
        copy: "After Brinks completes, mark VAH, VAL, and POC on the chart. Then replay how price behaves at each level before making any trade plan.",
      },
      {
        title: "Delta trap journal",
        copy: "Collect ten examples of strong positive delta at VAH and ten examples of strong negative delta at VAL. Record whether the next sequence trapped traders or continued cleanly.",
      },
      {
        title: "Vector confirmation replay",
        copy: "Replay sessions where green vectors appeared at premium and red vectors appeared at discount. Mark whether the vectors recovered, failed, or continued.",
      },
      {
        title: "Midpoint reset drill",
        copy: "Take each large swing or vector candle and mark its 50% level. Watch whether price uses that area to reset inventory, continue, or fail.",
      },
      {
        title: "Structure plus sentiment worksheet",
        copy: "For every setup, write one structure reason and one sentiment reason. Skip the trade if the level and the delta/vector read do not agree.",
      },
    ],
    riskNotes: [
      {
        title: "Do not invert delta blindly",
        copy: "Positive delta at a high can be a trap, but it can also be the start of a stronger move if the location and follow-through support continuation.",
      },
      {
        title: "Early profiles can move",
        copy: "A pre-New-York POC may shift when real volume enters. Trading from an early POC without waiting for liquidity can create a false map.",
      },
      {
        title: "Each asset has its own scale",
        copy: "A large delta reading in one market may be normal in another. Build familiarity with the instrument before treating a number as extreme.",
      },
      {
        title: "The framework does not remove risk",
        copy: "The lesson closes by stressing that no orderflow framework is guaranteed. The setup still needs confirmation, invalidation, and position control.",
      },
    ],
    timeline: [
      {
        time: "00:00",
        copy: "Introduces orderflow as a way to understand price development, not predict price.",
      },
      {
        time: "05:00",
        copy: "Names the broader orderflow tools: delta, unfinished auctions, failed auctions, session delta, CVD, absorption, and exhaustion.",
      },
      {
        time: "06:00",
        copy: "Starts the volume-profile map with value area high, value area low, and point of control.",
      },
      {
        time: "07:00",
        copy: "Explains why POC can shift after New York volume enters and why Brinks completion matters.",
      },
      {
        time: "10:00",
        copy: "Defines VAH as premium and warns that buying pressure there must be read differently.",
      },
      {
        time: "15:00",
        copy: "Shows how positive delta and a green vector at VAH can represent trapped late buyers.",
      },
      {
        time: "19:00",
        copy: "Moves to VAL discount and explains how negative delta at the low can represent trapped sellers.",
      },
      {
        time: "21:00",
        copy: "Reviews Exo Charts tools such as TPO volume profile, delta ladder profile, and footprint stats.",
      },
      {
        time: "24:00",
        copy: "Uses a NASDAQ example with about -2.8K delta and 60K volume at VAL, plus red vectors and a later positive delta shift.",
      },
      {
        time: "29:00",
        copy: "Connects VAH, VAL, and POC to the bell-curve value area where most trading occurs.",
      },
      {
        time: "34:00",
        copy: "Introduces Fibonacci only as a midpoint tool for inventory realignment, not as a magic price driver.",
      },
      {
        time: "40:00",
        copy: "Explains the 50% reset zone and why small retraces can mean inventory wants to shift out quickly.",
      },
      {
        time: "45:00",
        copy: "Applies midpoint, delta, and vectors to M/W formation logic and continuation versus failure.",
      },
      {
        time: "52:00",
        copy: "Builds the trading framework: wait for Brinks, mark VAH, VAL, and POC, then wait for price to approach them.",
      },
      {
        time: "58:00",
        copy: "Combines premium/discount, stopping volume, news context, delta, vectors, and price action.",
      },
      {
        time: "64:00",
        copy: "Final synthesis: structure plus sentiment can improve the read, but it cannot remove risk.",
      },
    ],
  },
  {
    id: "session-2-trading-confluences",
    title: "Session 2 - Trading Confluences",
    source: "YouTube breakdown - 13:49 - rollin rollo",
    summary:
      "Session 2 defines confluence as weighted evidence that helps a trader react. The lesson stacks signals such as 5/13 EMA compression, EMA crossover, vector candles, session high/low behavior, macro candles, and optional indicators, then warns that confluence should not become a reason to hesitate after the setup is already clear.",
    tags: ["Confluence", "5/13 EMA", "Vector candles", "Session levels"],
    diagram: "confluence-stack",
    diagramLegend: [
      {
        title: "1. Compression",
        copy: "The 5 and 13 EMAs contract after a move starts to stall, showing that behavior may be changing.",
        tone: "blue",
      },
      {
        title: "2. Crossover",
        copy: "Price loses the 5/13 area, fails to recover it, and the averages cross.",
        tone: "amber",
      },
      {
        title: "3. Vector trigger",
        copy: "A vector candle prints in the direction of the shift and gives the reaction point.",
        tone: "red",
      },
      {
        title: "4. Location filter",
        copy: "Session highs/lows, Brinks, New York, or macro candles add context to the trade.",
        tone: "green",
      },
    ],
    quickCards: [
      {
        title: "Confluence adds weight",
        copy: "The point is not to collect a fixed number. The point is to know when enough evidence exists to react.",
        tone: "blue",
      },
      {
        title: "The 5/13 tells the first story",
        copy: "Compression after a trend shows that the most recent candle averages are changing character.",
        tone: "amber",
      },
      {
        title: "Do not over-wait",
        copy: "Moving averages, vectors, sessions, and macro context help, but waiting for every possible clue can make the trade disappear.",
        tone: "red",
      },
    ],
    steps: [
      {
        title: "Start with the trade idea",
        copy: "Know the behavior you are trying to trade first: a reversal, continuation, first green vector above the 50 EMA, red-green vector formation, or session-level reclaim.",
      },
      {
        title: "Watch the 5 and 13 EMA compress",
        copy: "After price has been pushing in one direction, compression between the 5 and 13 EMA is the first clue that the immediate pace is changing.",
      },
      {
        title: "Wait for price to lose or reclaim the averages",
        copy: "For a bearish shift, price breaks below the 5/13 and fails to get back above. For a bullish shift, price reclaims the relevant moving-average area.",
      },
      {
        title: "Mark the crossover",
        copy: "The 5/13 crossover is another confluence. It confirms that short-term average closes have shifted, but it is still only one part of the stack.",
      },
      {
        title: "Add the vector candle",
        copy: "A red vector printing below the 5/13 supports a bearish reaction. A first green vector above the 50 EMA supports a bullish continuation or reversal idea.",
      },
      {
        title: "Check session location",
        copy: "Ask where the setup is happening relative to Asian highs/lows, the Brinks box, New York levels, or another meaningful session range.",
      },
      {
        title: "Add macro context only when it matters",
        copy: "A large candle caused by data, news, non-farm payrolls, unemployment claims, or rate commentary can become another confluence, but it can also distort the setup.",
      },
      {
        title: "React when the stack is enough",
        copy: "Once the planned confluences align, execute from the reaction point. Do not keep searching for more evidence after the trade condition is already active.",
      },
    ],
    checklist: [
      "The strategy idea is named before looking for extra confirmation.",
      "The 5 and 13 EMA are visible and their relationship is clear.",
      "Compression, expansion, or crossover has been identified.",
      "Price has broken, reclaimed, or rejected the moving-average area.",
      "A vector candle supports the direction of the idea.",
      "The setup is mapped against Asian, Brinks, New York, or another session level.",
      "News or macro data is checked before trusting an unusually large candle.",
      "Optional tools such as delta, CVD, stochastic, CCI, or RSI are supporting evidence only.",
      "There is no fixed confluence count required before action.",
      "The reaction point and invalidation are known before entry.",
    ],
    drills: [
      {
        title: "5/13 compression drill",
        copy: "Replay twenty trends and mark the first moment the 5 and 13 EMA contract after a directional move. Record what price does next.",
      },
      {
        title: "Three-confluence stack",
        copy: "Find examples where compression, crossover, and a vector candle appear together. Label whether the reaction was clean or late.",
      },
      {
        title: "First green context drill",
        copy: "Collect first green vectors above the 50 EMA and add session-level context: Asian sweep, Brinks level, New York level, or no meaningful location.",
      },
      {
        title: "Overfilter audit",
        copy: "Review ten missed trades and write down whether the miss came from lacking evidence or from waiting for too many confluences.",
      },
    ],
    riskNotes: [
      {
        title: "No magic number",
        copy: "The lesson rejects the idea that every trade needs a fixed number of confluences. Some setups need fewer, and some need more.",
      },
      {
        title: "One signal can be fragile",
        copy: "A first green vector above the 50 EMA can work, but the trade has more weight when session location, sweep behavior, or macro context also supports it.",
      },
      {
        title: "Macro candles need caution",
        copy: "News can create large candles that look decisive. Treat macro as context, not automatic permission to chase.",
      },
      {
        title: "Too many filters cause hesitation",
        copy: "Confluence is useful only if it leads to action. If the trader keeps adding filters after the setup appears, the edge can pass.",
      },
    ],
    timeline: [
      {
        time: "00:04",
        copy: "Opens with the main rule: the trader's job is to react, even when every usual condition is not available yet.",
      },
      {
        time: "01:00",
        copy: "Introduces the moving averages used in the lesson: 5, 13, 50, 200, and 800 EMA.",
      },
      {
        time: "02:05",
        copy: "Shows price rising, stalling, and the 5/13 EMAs compressing together as the first confluence.",
      },
      {
        time: "03:00",
        copy: "Adds the second confluence: price breaks below the 5/13 area, fails to recover, and the averages cross.",
      },
      {
        time: "03:24",
        copy: "Adds the red vector candle below the moving averages as the third confluence.",
      },
      {
        time: "05:05",
        copy: "Explains that a news or macro candle can become another confluence when it is part of the move.",
      },
      {
        time: "05:35",
        copy: "Adds session context, using the Asian session high as an example of location-based confluence.",
      },
      {
        time: "06:17",
        copy: "Clarifies that there is no set number of confluences; the trader chooses the evidence that fits the setup.",
      },
      {
        time: "07:20",
        copy: "Uses the first green vector above the 50 EMA as an example strategy that can be studied across timeframes.",
      },
      {
        time: "09:05",
        copy: "Adds extra context to the first-green-vector idea: Asian sweep, Brinks or New York levels, and macro events.",
      },
      {
        time: "10:05",
        copy: "Mentions optional confirmation tools such as delta, CVD, stochastic, CCI, and RSI while keeping them secondary.",
      },
      {
        time: "11:25",
        copy: "Warns that traders can search for one confluence too many and fail to react.",
      },
      {
        time: "12:04",
        copy: "Uses a red-vector/green-vector formation, 50 EMA, and Asian session low to show how three confluences can be enough.",
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
    id: "session-7-identifying-price-cycle",
    title: "Session 7 - Identifying The Cycle Of Price",
    source: "YouTube breakdown - 31:04 - rollin rollo",
    summary:
      "Session 7 explains the market-maker price cycle as a repeating map: W formation, rise, retrace into level one, rise into level two, rise into level three, then M formation and the same logic back down. The practical lesson is not to predict every full cycle, but to identify the W peak formation, mark the first level, wait for a real breakout, and manage risk because levels can last much longer than expected.",
    tags: ["Price cycle", "W formation", "Level one", "Breakout validation"],
    diagram: "price-cycle",
    diagramLegend: [
      {
        title: "1. Peak formation",
        copy: "The cycle starts from a W after price has been dropping and retail has been pulled short.",
        tone: "blue",
      },
      {
        title: "2. Level one",
        copy: "Price moves away from the W, retraces, and builds the first consolidation box.",
        tone: "amber",
      },
      {
        title: "3. Breakout validation",
        copy: "A level is validated only after price breaks the high that formed the level.",
        tone: "green",
      },
      {
        title: "4. Cycle reversal",
        copy: "After level three, an M formation can start the same cycle back down.",
        tone: "red",
      },
    ],
    quickCards: [
      {
        title: "Trade the practical piece",
        copy: "The beginner focus is W formation, level one accumulation, and breakout. Do not try to capture every level of the full cycle.",
        tone: "blue",
      },
      {
        title: "Levels need validation",
        copy: "A box is not complete just because price pauses. It must form a high, hold a low, and break away from that high.",
        tone: "green",
      },
      {
        title: "Exposure is the danger",
        copy: "The lesson warns that a level can consolidate for days or weeks, so oversized positions can force you out before the move appears.",
        tone: "red",
      },
    ],
    steps: [
      {
        title: "Start from the W formation",
        copy: "Look for price dropping into a psychological low, forming a W or double-bottom style peak formation, and then trading away from that low.",
      },
      {
        title: "Protect the peak low",
        copy: "The cycle idea remains valid only if price does not accept below the W low. If the low breaks and sustains, wait for a new formation.",
      },
      {
        title: "Mark the midpoint of the W",
        copy: "Price should move away from the W and take the midpoint. The midpoint helps separate a real move away from a weak bounce.",
      },
      {
        title: "Draw the level one box",
        copy: "After the first rise, mark the retrace/consolidation range. The low of that box starts level one, and the high is the breakout level.",
      },
      {
        title: "Wait for the breakout",
        copy: "The level is validated when price breaks the high that formed the level. A strong green vector breakout adds useful confirmation.",
      },
      {
        title: "Treat deep returns with caution",
        copy: "If price comes too deep back into the prior level, the original consolidation may not be complete. It can extend rather than start the next clean level.",
      },
      {
        title: "Repeat only after a new box forms",
        copy: "Level two and level three use the same logic: move away, retrace into a box, hold the low, then break the high.",
      },
      {
        title: "Pay yourself before the peak",
        copy: "The lesson stresses that enough money can be made from level one and level two. Holding for level three or the full cycle creates avoidable exposure.",
      },
    ],
    checklist: [
      "A W formation or clear low-building structure is visible.",
      "Price has moved away from the W low.",
      "The W low has not been invalidated by sustained trade below it.",
      "The midpoint of the W has been taken or respected.",
      "A level one consolidation box is marked.",
      "The high and low of the level are drawn.",
      "Price is spending time above the midpoint of the level.",
      "The breakout level is known before entry.",
      "A vector candle supports the breakout direction.",
      "Position size is small enough to survive a long consolidation or stop run.",
    ],
    drills: [
      {
        title: "1H cycle marking",
        copy: "Use the 1H chart and mark twenty W formations. For each one, draw level one and record whether price broke the level high.",
      },
      {
        title: "Midpoint study",
        copy: "Split each level box in half. Record whether price spent most of its time above or below the midpoint before breakout.",
      },
      {
        title: "Vector breakout log",
        copy: "Collect examples where a level breakout happens on a green vector for upside cycles or a red vector for downside cycles.",
      },
      {
        title: "Variation archive",
        copy: "Save examples where the cycle is messy: stop-run breakouts, extended boxes, deep retraces, or levels that last much longer than expected.",
      },
    ],
    riskNotes: [
      {
        title: "The cycle is never clean",
        copy: "The video repeatedly warns that real charts will not show perfect W, level one, level two, level three, M shapes.",
      },
      {
        title: "Invalidation is the peak low",
        copy: "If price breaks and sustains below the W low, the bullish cycle is invalidated and a fresh W must form.",
      },
      {
        title: "Do not overbuild inside a level",
        copy: "The instructor describes being trapped by too much exposure in a long consolidation. The setup can be right while the sizing is wrong.",
      },
      {
        title: "Breakout entries can be shaken out",
        copy: "A buy stop above the level can trigger before price returns into the box. Plan for stop runs and know where the level actually fails.",
      },
    ],
    timeline: [
      {
        time: "00:00",
        copy: "Introduces the weekly cycle: W formation, rise/retrace levels one through three, M formation, then the cycle back down.",
      },
      {
        time: "01:20",
        copy: "Explains that the W formation is the peak where positions are built before the first move higher.",
      },
      {
        time: "03:00",
        copy: "Defines level one: price moves away from the W, retraces, consolidates, and must break the level high.",
      },
      {
        time: "04:10",
        copy: "Shows how level two and level three repeat the same rise, retrace, breakout structure.",
      },
      {
        time: "05:15",
        copy: "Gives the practical question: did price move away from a significant low after dropping?",
      },
      {
        time: "06:25",
        copy: "Warns that level one and level three are the hardest to identify and that the W low must be sustained.",
      },
      {
        time: "07:10",
        copy: "States the invalidation rule: if price breaks the peak low and sustains below it, there is no cycle.",
      },
      {
        time: "09:00",
        copy: "Explains that deep returns into level one can mean the level is extended rather than complete.",
      },
      {
        time: "10:00",
        copy: "Uses the dollar-yen story to show how a level can last for weeks and punish oversized exposure.",
      },
      {
        time: "14:30",
        copy: "Summarizes the lesson from that trade: levels can last longer than expected, so do not overexpose inside the box.",
      },
      {
        time: "16:20",
        copy: "Says enough money can be made trading W formation into level one and level two without forcing the full level-three move.",
      },
      {
        time: "18:05",
        copy: "Moves to chart examples and says the cycle is best studied on the 1H timeframe.",
      },
      {
        time: "21:30",
        copy: "Gives the homework: go back through charts and mark consolidation zones, W formations, and breakout levels.",
      },
      {
        time: "24:35",
        copy: "Gives the main level rule: each level needs a breakout to validate it.",
      },
      {
        time: "25:00",
        copy: "Adds the midpoint rule: price holding above the midpoint of the box supports an upside breakout idea.",
      },
      {
        time: "27:00",
        copy: "Warns about variation: stop-run breakouts and messy structures are normal.",
      },
      {
        time: "28:10",
        copy: "Refocuses the beginner model on the first pattern: W formation, level one box, breakout.",
      },
      {
        time: "30:05",
        copy: "Closes by saying smaller cycles exist inside larger cycles, but beginners should not torment themselves trying to label every level.",
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
    id: "session-10-whole-half-numbers",
    title: "Session 10 - The Importance Of Whole/Half Numbers",
    source: "YouTube breakdown - 21:17 - rollin rollo",
    summary:
      "Session 10 explains whole and half numbers as psychological price magnets where liquidity concentrates. The lesson frames round numbers such as 100K on Bitcoin, forex handles like 1.1400/1.1450/1.1500, and futures handles as areas where market makers can build shorts above key levels, build longs below key levels, and then reveal intention through fast vector breaks away from the range.",
    tags: ["Whole numbers", "Half numbers", "Psychological levels", "Liquidity"],
    diagram: "whole-half-numbers",
    diagramLegend: [
      {
        title: "1. Key number",
        copy: "Mark the obvious whole or half number before judging price action around it.",
        tone: "blue",
      },
      {
        title: "2. Build above",
        copy: "Above a key level, market maker can build shorts while retail sees breakout strength.",
        tone: "amber",
      },
      {
        title: "3. Break with speed",
        copy: "The clue is not the number alone. The clue is a vector move breaking away from it.",
        tone: "red",
      },
      {
        title: "4. Repeat below",
        copy: "Below a key level, the same idea can build longs before a breakout back up.",
        tone: "green",
      },
    ],
    quickCards: [
      {
        title: "Round numbers attract orders",
        copy: "Retail and larger players both recognize simple numbers, so limit orders, stops, and breakout orders cluster there.",
        tone: "blue",
      },
      {
        title: "Time around the level matters",
        copy: "The lesson keeps pointing to consolidation around the number before the aggressive break.",
        tone: "amber",
      },
      {
        title: "Never trade the line alone",
        copy: "Whole and half numbers need environment, vector behavior, and retrace/continuation logic before they become a trade idea.",
        tone: "red",
      },
    ],
    steps: [
      {
        title: "Mark the obvious numbers",
        copy: "On each asset, draw the numbers that everyone can see: Bitcoin 100K/110K, forex handles and half handles, or futures handle levels.",
      },
      {
        title: "Separate whole, half, and quarter levels",
        copy: "Whole and half numbers carry the most weight. Quarter numbers can matter, but the lesson says most activity is around whole and half levels.",
      },
      {
        title: "Read where price came from",
        copy: "A move into a whole number after a strong rise is different from a move into it after a selloff. Context tells you whether the level may be distribution or accumulation.",
      },
      {
        title: "Watch consolidation around the level",
        copy: "If price spends time around the level without cleanly moving away, assume liquidity is being engineered there.",
      },
      {
        title: "Look for shorts above the level",
        copy: "Above a key notable area, market maker can create the illusion of higher prices, invite breakout buyers, then break down through the number with speed.",
      },
      {
        title: "Look for longs below the level",
        copy: "Below a key notable area, the opposite can happen: price holds below the level, builds orders, and then breaks back up aggressively.",
      },
      {
        title: "Use vectors for the break",
        copy: "The chart examples repeatedly use green vectors breaking up through a number and red vectors breaking down through a number as evidence of intent.",
      },
      {
        title: "Trade toward the recovery reason",
        copy: "When the environment supports it, the break through a whole or half number can point toward unrecovered vectors or the next psychological level.",
      },
    ],
    checklist: [
      "Whole and half numbers are marked before the session.",
      "The nearest key number is obvious to retail traders.",
      "Price is spending time around that number.",
      "The prior move and current environment are identified.",
      "Wicks, failures, or repeated returns into the range are visible.",
      "There are vector candles near the level.",
      "The break happens with speed, not a weak drift.",
      "The trade direction agrees with broader retrace/continuation logic.",
      "Nearby unrecovered vectors or the next key number are mapped as targets.",
      "The setup is rejected if price only chops around the line with no clear break.",
    ],
    drills: [
      {
        title: "Round-number map",
        copy: "On Bitcoin, mark every 1,000 or 5,000 handle around the current range. On forex, mark whole and half handles such as 1.1400 and 1.1450.",
      },
      {
        title: "Vector-through-level study",
        copy: "Collect examples where red or green vector candles break directly through whole or half numbers. Record whether the move continued or failed.",
      },
      {
        title: "Consolidation timer",
        copy: "Measure how long price spends around a key number before breaking away. Compare short pauses against extended ranges.",
      },
      {
        title: "Environment replay",
        copy: "Replay the chart before the break and decide whether the level is likely building shorts above or longs below.",
      },
    ],
    riskNotes: [
      {
        title: "A number is not a trigger",
        copy: "The lesson explicitly warns that there is no definitive way to know what price will do at 100K, 50, or any other round number by itself.",
      },
      {
        title: "Activity can fake both sides",
        copy: "Price can break above a level to trap breakout buyers, then drop back through it, or break below to trap sellers before reversing.",
      },
      {
        title: "Use context from other lessons",
        copy: "Pair whole/half numbers with vectors, first red or green vector rules, session ranges, and retrace/continuation structure.",
      },
      {
        title: "Sample size matters",
        copy: "The homework is to review many examples so you learn how each asset behaves around its own psychological levels.",
      },
    ],
    timeline: [
      {
        time: "00:00",
        copy: "Introduces the whole and half number principle using Bitcoin 100K as the simple whole-number example.",
      },
      {
        time: "00:50",
        copy: "Connects round numbers to retail psychology through pricing examples such as 99.99 instead of 100.",
      },
      {
        time: "02:35",
        copy: "Moves the concept into trading: whole numbers are impressionable areas on the chart.",
      },
      {
        time: "03:10",
        copy: "States the core rule: market maker builds shorts above key notable areas and longs below key notable areas.",
      },
      {
        time: "04:00",
        copy: "Gives forex examples of whole and half numbers such as 1.1400, 1.1450, and 1.1500.",
      },
      {
        time: "05:35",
        copy: "Explains why obvious numbers matter: they are psychologically easier for traders and larger players to anchor around.",
      },
      {
        time: "06:10",
        copy: "Shows how consolidation above a whole number can build shorts before a sharp breakdown.",
      },
      {
        time: "07:15",
        copy: "References futures handles and how price moves around whole, half, and quarter increments.",
      },
      {
        time: "08:20",
        copy: "Explains that whole and half numbers get most of the meaningful activity, with quarter numbers secondary.",
      },
      {
        time: "09:30",
        copy: "Connects the level to other strategy rules, such as looking for red vectors breaking back into the range.",
      },
      {
        time: "10:20",
        copy: "Moves to Bitcoin chart examples around 112K and 110K, showing vectors breaking through the levels.",
      },
      {
        time: "12:10",
        copy: "Marks 109K, 105K, and 100K examples where red vectors break through psychological numbers.",
      },
      {
        time: "13:10",
        copy: "Adds that options and gamma exposure often cluster around whole and half numbers.",
      },
      {
        time: "14:00",
        copy: "Explains that price stalling around 110K shows the market maker building around the range before moving away.",
      },
      {
        time: "15:10",
        copy: "Shows how a downside continuation idea can use the whole-number break toward vector recovery.",
      },
      {
        time: "16:00",
        copy: "Uses Bitcoin near 100K to explain how breakout orders and sell limits can stack around an obvious level.",
      },
      {
        time: "17:15",
        copy: "Summarizes the key takeaway: watch consolidation around whole/half numbers and the speed of the break away.",
      },
      {
        time: "19:05",
        copy: "Defines the bearish clue: wicks up, failed pumps, returns into the range, then a break through the number.",
      },
      {
        time: "20:10",
        copy: "Gives homework: mark horizontal whole/half levels and study many examples of how price behaves around them.",
      },
    ],
  },
  {
    id: "session-11-vwap-strategies",
    title: "Session 11 - VWAP Strategies",
    source: "YouTube breakdown - 20:22 - rollin rollo",
    summary:
      "Session 11 explains VWAP as the volume weighted average price: the area where the weight of traded volume sits and where larger players can transact. The lesson separates trending-up VWAP, trending-down VWAP, and flat rotational VWAP, then focuses on waiting for VWAP to develop, watching price move away, and using the first retest or rejection as the clue for continuation or a possible flip.",
    tags: ["VWAP", "First retest", "Standard deviation", "NASDAQ"],
    diagram: "vwap-strategies",
    diagramLegend: [
      {
        title: "1. Let VWAP develop",
        copy: "Use the opening hour to see whether VWAP is rising, falling, or rotating.",
        tone: "blue",
      },
      {
        title: "2. Avoid rotation",
        copy: "Flat VWAP with sharp moves above and below it is a chop environment.",
        tone: "red",
      },
      {
        title: "3. Trade the retest",
        copy: "After price moves away, the first return into VWAP gives the continuation clue.",
        tone: "amber",
      },
      {
        title: "4. Target the bands",
        copy: "A clean hold or rejection can trade back toward the standard deviation ranges.",
        tone: "green",
      },
    ],
    quickCards: [
      {
        title: "VWAP needs direction",
        copy: "The lesson says to focus on rising or falling VWAP. A flat rotational VWAP is usually a day to leave alone.",
        tone: "blue",
      },
      {
        title: "The first test matters",
        copy: "After the market has had time to move away from VWAP, the first retest often reveals whether the original direction can continue.",
        tone: "amber",
      },
      {
        title: "The line is not enough",
        copy: "Use vectors, standard deviations, POC, delta, value areas, and price behavior at VWAP before treating it as a trade.",
        tone: "red",
      },
    ],
    steps: [
      {
        title: "Choose the VWAP you are studying",
        copy: "The video names daily, weekly, monthly, yearly, quarterly, session, timed, and anchored VWAPs. For this strategy, focus on the session VWAP around the active market open.",
      },
      {
        title: "Let the opening hour print",
        copy: "For NASDAQ and the New York open, the lesson recommends using the five-minute chart and letting 9:30-10:30 AM ET complete so twelve candles shape the VWAP.",
      },
      {
        title: "Classify the VWAP",
        copy: "Put the day into one of three buckets: VWAP trending up, VWAP trending down, or VWAP rotating flat. Only the first two are preferred directional conditions.",
      },
      {
        title: "Reject rotational chop",
        copy: "If price keeps moving aggressively above VWAP and then aggressively back below it, the day is rotating. Do not force direction from that behavior.",
      },
      {
        title: "Wait for price to move away",
        copy: "The setup needs price to break away from VWAP first. Without separation, there is no meaningful retest to read.",
      },
      {
        title: "Use the first retest as the clue",
        copy: "When VWAP is rising, a pullback into VWAP that holds can support continuation higher. When VWAP is falling, a rally into VWAP that rejects can support continuation lower.",
      },
      {
        title: "Read the standard deviation bands",
        copy: "Price can trade from VWAP toward the +1, +1.5, and +2 bands, or the matching downside bands. A long stay outside the bands can also warn that a break back through VWAP may travel to the opposite side.",
      },
      {
        title: "Confirm with commitment",
        copy: "If vector candles break aggressively through VWAP and trade away from it, the original retest idea may be failing. Bring in POC, delta, value area high, and value area low when you use VWAP with order-flow tools.",
      },
    ],
    checklist: [
      "The active VWAP type is identified before the trade.",
      "At least the first hour of the New York session has developed.",
      "VWAP is clearly rising or clearly falling.",
      "Price has moved away from VWAP before the setup is considered.",
      "Rotational chop around VWAP is absent.",
      "The first return into VWAP is marked.",
      "The reaction at VWAP shows hold, rejection, or aggressive break-through behavior.",
      "Standard deviation bands are mapped as targets or warning zones.",
      "Vectors at the VWAP retest agree with the trade direction.",
      "POC, delta, value area high, or value area low are checked if they are part of the chart layout.",
    ],
    drills: [
      {
        title: "VWAP type sort",
        copy: "Review twenty New York sessions and label the VWAP as rising, falling, or rotational after the first hour. Record which days were worth trading.",
      },
      {
        title: "First-retest study",
        copy: "On the five-minute NASDAQ chart, collect examples where price moved away from VWAP and came back for the first test. Mark whether it held, rejected, or broke through.",
      },
      {
        title: "Deviation-band replay",
        copy: "Mark +1, +1.5, +2, -1, -1.5, and -2 deviation bands. Track when price bounces from VWAP toward the bands and when it breaks through VWAP toward the opposite range.",
      },
      {
        title: "Rotation filter",
        copy: "Build a folder of flat VWAP sessions where price repeatedly crossed both sides. Use it as a no-trade reference library.",
      },
    ],
    riskNotes: [
      {
        title: "Flat VWAP is the warning",
        copy: "The instructor says rotational VWAP can be painful even for scalpers. Directional swing logic should stand aside in that condition.",
      },
      {
        title: "Do not predict before development",
        copy: "A VWAP that has not had time to form does not give enough information. The opening hour prevents guessing from the first few candles.",
      },
      {
        title: "NASDAQ can break hard",
        copy: "NASDAQ can aggressively bounce from VWAP or aggressively break through it. A retest is not automatically a reversal point.",
      },
      {
        title: "Use vectors for failure",
        copy: "If price hits VWAP and vector candles break through with speed, treat that as evidence the continuation idea may be invalid.",
      },
    ],
    timeline: [
      {
        time: "00:00",
        copy: "Defines VWAP as volume weighted average price and lists daily, weekly, monthly, yearly, quarterly, session, timed, and anchored VWAPs.",
      },
      {
        time: "02:00",
        copy: "Uses the portfolio-manager example to explain why institutional execution tries to buy and sell around better average prices.",
      },
      {
        time: "04:40",
        copy: "Introduces the three VWAP states: trending up, trending down, and rotational flat VWAP.",
      },
      {
        time: "06:00",
        copy: "Warns that rotational VWAP is usually a day to avoid because price chops above and below the average.",
      },
      {
        time: "07:00",
        copy: "Explains the practical transaction logic: buy around or below VWAP and sell above it when price is trending.",
      },
      {
        time: "09:00",
        copy: "Connects rising and falling VWAP to repeated dip buys, rally sells, and continuation behavior.",
      },
      {
        time: "10:45",
        copy: "Adds VWAP standard deviation bands: +1, +1.5, +2 and the matching downside ranges.",
      },
      {
        time: "12:00",
        copy: "Frames the first retrace into VWAP after price moves away as the clue for what the rest of the session may do.",
      },
      {
        time: "13:00",
        copy: "Compares VWAP to a moving average and says vectors appearing inside the VWAP area can help decide whether continuation is likely.",
      },
      {
        time: "14:00",
        copy: "Highlights NASDAQ behavior: strong moves can leave a wide gap from VWAP, then snap back hard to test it.",
      },
      {
        time: "16:00",
        copy: "Gives the practical timing rule: wait for the first hour, preferably on the five-minute chart, before reading VWAP direction.",
      },
      {
        time: "17:00",
        copy: "Defines rotation as aggressive moves above VWAP followed by aggressive moves below it, then warns to stay away.",
      },
      {
        time: "18:00",
        copy: "Restates that VWAP is significant because it is where larger players commonly transact, but the line itself is not a complete trade system.",
      },
      {
        time: "19:00",
        copy: "Explains that vector candles breaking aggressively through VWAP can identify failure and notes POC, delta, value area high, and value area low as related tools.",
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
const defaultLessonId = "session-15-orderflow-and-vectors";

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
  } else if (activeLesson.diagram === "confluence-stack") {
    drawConfluenceStackSetup(ctx);
  } else if (activeLesson.diagram === "price-cycle") {
    drawPriceCycleSetup(ctx);
  } else if (activeLesson.diagram === "whole-half-numbers") {
    drawWholeHalfNumbersSetup(ctx);
  } else if (activeLesson.diagram === "vwap-strategies") {
    drawVwapStrategiesSetup(ctx);
  } else if (activeLesson.diagram === "new-york-reversal") {
    drawNewYorkReversalSetup(ctx);
  } else if (activeLesson.diagram === "m-w-formation") {
    drawMWFormationSetup(ctx);
  } else if (activeLesson.diagram === "vector-candle-flow") {
    drawVectorCandleFlowSetup(ctx);
  } else if (activeLesson.diagram === "stopping-volume-candle") {
    drawStoppingVolumeCandleSetup(ctx);
  } else if (activeLesson.diagram === "psychological-level") {
    drawPsychologicalLevelSetup(ctx);
  } else if (activeLesson.diagram === "macro-data-flow") {
    drawMacroDataFlowSetup(ctx);
  } else if (activeLesson.diagram === "orderflow-vectors") {
    drawOrderflowVectorsSetup(ctx);
  } else if (activeLesson.diagram === "brink-box-recovery") {
    drawBrinkBoxRecoverySetup(ctx);
  } else if (activeLesson.diagram === "brink-box") {
    drawBrinkBoxSetup(ctx);
  } else {
    drawVShapeSetup(ctx);
  }

  ctx.restore();
}

function drawConfluenceStackSetup(ctx) {
  ctx.strokeStyle = "rgba(23, 27, 31, 0.36)";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(72, 214);
  ctx.lineTo(704, 214);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#171b1f";
  ctx.font = "700 16px Inter, ui-sans-serif, system-ui, sans-serif";
  ctx.fillText("session level", 82, 202);

  ctx.strokeStyle = "#171b1f";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(78, 272);
  ctx.lineTo(148, 206);
  ctx.lineTo(224, 166);
  ctx.lineTo(300, 150);
  ctx.lineTo(358, 166);
  ctx.lineTo(420, 214);
  ctx.lineTo(492, 288);
  ctx.lineTo(620, 332);
  ctx.stroke();

  ctx.strokeStyle = "#2a66a2";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(88, 250);
  ctx.lineTo(168, 190);
  ctx.lineTo(250, 160);
  ctx.lineTo(328, 164);
  ctx.lineTo(410, 220);
  ctx.lineTo(534, 292);
  ctx.stroke();

  ctx.strokeStyle = "#b47a1f";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(88, 278);
  ctx.lineTo(166, 226);
  ctx.lineTo(250, 184);
  ctx.lineTo(330, 168);
  ctx.lineTo(418, 206);
  ctx.lineTo(538, 270);
  ctx.stroke();

  drawZone(ctx, 450, 228, 96, 96, "#b83a31");
  drawCandle(ctx, 476, 242, 44, 78, "#b83a31");

  ctx.strokeStyle = "#217a55";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 8]);
  ctx.beginPath();
  ctx.moveTo(612, 82);
  ctx.lineTo(612, 358);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#2a66a2";
  ctx.fillText("5/13 compress", 232, 118);
  ctx.fillStyle = "#b47a1f";
  ctx.fillText("cross", 382, 194);
  ctx.fillStyle = "#b83a31";
  ctx.fillText("vector", 468, 220);
  ctx.fillStyle = "#217a55";
  ctx.fillText("macro / session", 560, 74);
  ctx.fillStyle = "#171b1f";
  ctx.fillText("react", 632, 332);

  badge(ctx, "1", 266, 148, "#2a66a2");
  badge(ctx, "2", 402, 210, "#b47a1f");
  badge(ctx, "3", 518, 242, "#b83a31");
  badge(ctx, "4", 612, 108, "#217a55");
}

function drawPriceCycleSetup(ctx) {
  ctx.strokeStyle = "rgba(23, 27, 31, 0.34)";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(62, 304);
  ctx.lineTo(700, 304);
  ctx.moveTo(62, 202);
  ctx.lineTo(700, 202);
  ctx.moveTo(62, 106);
  ctx.lineTo(700, 106);
  ctx.stroke();
  ctx.setLineDash([]);

  drawZone(ctx, 82, 246, 116, 70, "#2a66a2");
  drawZone(ctx, 254, 182, 112, 70, "#b47a1f");
  drawZone(ctx, 420, 116, 112, 70, "#217a55");
  drawZone(ctx, 574, 74, 98, 70, "#b83a31");

  ctx.strokeStyle = "#171b1f";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(70, 292);
  ctx.lineTo(104, 314);
  ctx.lineTo(144, 262);
  ctx.lineTo(184, 306);
  ctx.lineTo(238, 206);
  ctx.lineTo(306, 238);
  ctx.lineTo(378, 154);
  ctx.lineTo(470, 178);
  ctx.lineTo(560, 92);
  ctx.lineTo(610, 126);
  ctx.lineTo(656, 86);
  ctx.lineTo(704, 214);
  ctx.stroke();

  ctx.strokeStyle = "#217a55";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(198, 286);
  ctx.lineTo(238, 206);
  ctx.moveTo(366, 232);
  ctx.lineTo(378, 154);
  ctx.moveTo(532, 176);
  ctx.lineTo(560, 92);
  ctx.stroke();

  drawCandle(ctx, 212, 222, 34, 74, "#217a55");
  drawCandle(ctx, 380, 166, 34, 66, "#217a55");
  drawCandle(ctx, 548, 108, 34, 70, "#217a55");

  ctx.strokeStyle = "#b83a31";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(650, 88);
  ctx.lineTo(704, 214);
  ctx.stroke();

  ctx.fillStyle = "#171b1f";
  ctx.font = "700 16px Inter, ui-sans-serif, system-ui, sans-serif";
  ctx.fillText("W peak", 92, 336);
  ctx.fillText("level 1", 272, 272);
  ctx.fillText("level 2", 438, 206);
  ctx.fillText("M peak", 584, 62);
  ctx.fillText("break high", 214, 190);
  ctx.fillText("break high", 382, 138);

  badge(ctx, "1", 102, 246, "#2a66a2");
  badge(ctx, "2", 254, 182, "#b47a1f");
  badge(ctx, "3", 420, 116, "#217a55");
  badge(ctx, "4", 672, 86, "#b83a31");
}

function drawWholeHalfNumbersSetup(ctx) {
  const levels = [
    { y: 96, label: "112K", tone: "#2a66a2" },
    { y: 202, label: "110K", tone: "#b47a1f" },
    { y: 308, label: "108K", tone: "#2a66a2" },
  ];

  ctx.lineWidth = 2;
  ctx.setLineDash([10, 8]);
  for (const level of levels) {
    ctx.strokeStyle = level.tone;
    ctx.beginPath();
    ctx.moveTo(58, level.y);
    ctx.lineTo(704, level.y);
    ctx.stroke();
    ctx.fillStyle = level.tone;
    ctx.font = "800 18px Inter, ui-sans-serif, system-ui, sans-serif";
    ctx.fillText(level.label, 66, level.y - 12);
  }
  ctx.setLineDash([]);

  drawZone(ctx, 232, 84, 198, 142, "#b47a1f");
  drawZone(ctx, 476, 188, 118, 94, "#b83a31");

  ctx.strokeStyle = "#171b1f";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(76, 288);
  ctx.lineTo(132, 214);
  ctx.lineTo(198, 154);
  ctx.lineTo(252, 112);
  ctx.lineTo(310, 94);
  ctx.lineTo(372, 128);
  ctx.lineTo(430, 98);
  ctx.lineTo(490, 178);
  ctx.lineTo(548, 236);
  ctx.lineTo(632, 314);
  ctx.stroke();

  ctx.strokeStyle = "#b83a31";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(430, 98);
  ctx.lineTo(490, 178);
  ctx.lineTo(548, 236);
  ctx.stroke();

  drawCandle(ctx, 450, 114, 42, 104, "#b83a31");
  drawCandle(ctx, 506, 186, 42, 84, "#b83a31");
  drawCandle(ctx, 574, 250, 40, 74, "#b83a31");

  ctx.fillStyle = "#171b1f";
  ctx.font = "700 16px Inter, ui-sans-serif, system-ui, sans-serif";
  ctx.fillText("build above", 262, 76);
  ctx.fillText("break with speed", 502, 166);
  ctx.fillText("next key number", 586, 340);

  ctx.strokeStyle = "#217a55";
  ctx.lineWidth = 3;
  ctx.setLineDash([6, 8]);
  ctx.beginPath();
  ctx.moveTo(112, 332);
  ctx.lineTo(232, 332);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = "#217a55";
  ctx.fillText("longs below", 118, 356);

  badge(ctx, "1", 92, 202, "#2a66a2");
  badge(ctx, "2", 304, 92, "#b47a1f");
  badge(ctx, "3", 520, 202, "#b83a31");
  badge(ctx, "4", 174, 332, "#217a55");
}

function drawVwapStrategiesSetup(ctx) {
  const bands = [
    { y: 74, label: "+2 dev", color: "#217a55" },
    { y: 130, label: "+1 dev", color: "#217a55" },
    { y: 214, label: "VWAP", color: "#2a66a2" },
    { y: 298, label: "-1 dev", color: "#b83a31" },
    { y: 354, label: "-2 dev", color: "#b83a31" },
  ];

  ctx.lineWidth = 2;
  ctx.setLineDash([8, 8]);
  for (const band of bands) {
    ctx.strokeStyle = band.color;
    ctx.beginPath();
    ctx.moveTo(58, band.y);
    ctx.lineTo(704, band.y);
    ctx.stroke();
    ctx.fillStyle = band.color;
    ctx.font = "800 15px Inter, ui-sans-serif, system-ui, sans-serif";
    ctx.fillText(band.label, 616, band.y - 10);
  }
  ctx.setLineDash([]);

  ctx.strokeStyle = "#2a66a2";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(72, 282);
  ctx.bezierCurveTo(190, 252, 304, 226, 418, 190);
  ctx.bezierCurveTo(520, 158, 604, 138, 690, 122);
  ctx.stroke();

  drawZone(ctx, 82, 222, 128, 88, "#b47a1f");
  drawZone(ctx, 420, 146, 124, 82, "#217a55");
  drawZone(ctx, 126, 326, 144, 54, "#b83a31");

  ctx.strokeStyle = "#171b1f";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(78, 292);
  ctx.lineTo(136, 246);
  ctx.lineTo(196, 188);
  ctx.lineTo(264, 136);
  ctx.lineTo(328, 92);
  ctx.lineTo(386, 128);
  ctx.lineTo(454, 184);
  ctx.lineTo(520, 154);
  ctx.lineTo(604, 102);
  ctx.lineTo(686, 78);
  ctx.stroke();

  ctx.strokeStyle = "#217a55";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(454, 184);
  ctx.lineTo(520, 154);
  ctx.lineTo(604, 102);
  ctx.stroke();

  drawCandle(ctx, 296, 96, 40, 90, "#217a55");
  drawCandle(ctx, 444, 154, 40, 86, "#b47a1f");
  drawCandle(ctx, 548, 106, 40, 94, "#217a55");

  ctx.strokeStyle = "#b83a31";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(136, 352);
  ctx.lineTo(166, 332);
  ctx.lineTo(204, 370);
  ctx.lineTo(242, 342);
  ctx.stroke();

  ctx.fillStyle = "#171b1f";
  ctx.font = "700 16px Inter, ui-sans-serif, system-ui, sans-serif";
  ctx.fillText("first hour", 104, 214);
  ctx.fillText("move away", 272, 78);
  ctx.fillText("first VWAP retest", 404, 246);
  ctx.fillText("flat VWAP = rotation", 110, 400);

  badge(ctx, "1", 112, 244, "#2a66a2");
  badge(ctx, "2", 210, 350, "#b83a31");
  badge(ctx, "3", 476, 186, "#b47a1f");
  badge(ctx, "4", 620, 102, "#217a55");
}

function drawMacroDataFlowSetup(ctx) {
  ctx.strokeStyle = "rgba(23, 27, 31, 0.28)";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(54, 214);
  ctx.lineTo(704, 214);
  ctx.moveTo(230, 62);
  ctx.lineTo(230, 360);
  ctx.moveTo(426, 62);
  ctx.lineTo(426, 360);
  ctx.stroke();
  ctx.setLineDash([]);

  drawZone(ctx, 72, 88, 128, 70, "#2a66a2");
  drawZone(ctx, 72, 176, 128, 70, "#2a66a2");
  drawZone(ctx, 72, 264, 128, 70, "#2a66a2");

  drawZone(ctx, 278, 112, 112, 82, "#b47a1f");
  drawZone(ctx, 278, 230, 112, 82, "#b47a1f");

  drawZone(ctx, 478, 80, 138, 76, "#b83a31");
  drawZone(ctx, 478, 174, 138, 76, "#b83a31");
  drawZone(ctx, 478, 268, 138, 76, "#217a55");

  ctx.strokeStyle = "#171b1f";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(200, 123);
  ctx.lineTo(278, 152);
  ctx.moveTo(200, 211);
  ctx.lineTo(278, 152);
  ctx.moveTo(200, 299);
  ctx.lineTo(278, 271);
  ctx.moveTo(390, 152);
  ctx.lineTo(478, 118);
  ctx.moveTo(390, 152);
  ctx.lineTo(478, 212);
  ctx.moveTo(390, 271);
  ctx.lineTo(478, 306);
  ctx.stroke();

  ctx.strokeStyle = "#217a55";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(616, 306);
  ctx.lineTo(688, 222);
  ctx.stroke();

  ctx.strokeStyle = "#b83a31";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(616, 118);
  ctx.lineTo(690, 182);
  ctx.stroke();

  ctx.fillStyle = "#171b1f";
  ctx.font = "800 16px Inter, ui-sans-serif, system-ui, sans-serif";
  ctx.fillText("Jobs", 112, 128);
  ctx.fillText("ISM", 114, 216);
  ctx.fillText("CPI", 116, 304);
  ctx.fillText("Cuts?", 314, 146);
  ctx.fillText("Hold?", 312, 264);
  ctx.fillText("Dollar", 520, 124);
  ctx.fillText("NASDAQ", 510, 218);
  ctx.fillText("Gold / bonds", 496, 312);

  ctx.font = "700 14px Inter, ui-sans-serif, system-ui, sans-serif";
  ctx.fillStyle = "#2a66a2";
  ctx.fillText("data", 116, 72);
  ctx.fillStyle = "#b47a1f";
  ctx.fillText("rate path", 294, 72);
  ctx.fillStyle = "#b83a31";
  ctx.fillText("asset response", 486, 62);
  ctx.fillStyle = "#217a55";
  ctx.fillText("bias after chart confirms", 526, 370);

  badge(ctx, "1", 68, 72, "#2a66a2");
  badge(ctx, "2", 278, 76, "#b47a1f");
  badge(ctx, "3", 478, 62, "#b83a31");
  badge(ctx, "4", 692, 222, "#217a55");
}

function drawOrderflowVectorsSetup(ctx) {
  const levels = [
    { y: 96, label: "VAH premium", color: "#b83a31" },
    { y: 210, label: "POC value", color: "#b47a1f" },
    { y: 324, label: "VAL discount", color: "#217a55" },
  ];

  ctx.strokeStyle = "rgba(23, 27, 31, 0.3)";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 8]);
  for (const level of levels) {
    ctx.beginPath();
    ctx.moveTo(78, level.y);
    ctx.lineTo(704, level.y);
    ctx.stroke();
  }
  ctx.setLineDash([]);

  ctx.fillStyle = "#171b1f";
  ctx.font = "800 15px Inter, ui-sans-serif, system-ui, sans-serif";
  for (const level of levels) {
    ctx.fillStyle = level.color;
    ctx.fillText(level.label, 84, level.y - 12);
  }

  ctx.fillStyle = "rgba(42, 102, 162, 0.16)";
  ctx.fillRect(48, 100, 36, 220);
  ctx.fillStyle = "rgba(42, 102, 162, 0.42)";
  ctx.fillRect(84, 138, 52, 36);
  ctx.fillRect(84, 188, 94, 42);
  ctx.fillRect(84, 262, 48, 34);
  ctx.fillStyle = "#2a66a2";
  ctx.font = "700 13px Inter, ui-sans-serif, system-ui, sans-serif";
  ctx.fillText("profile", 52, 86);

  ctx.strokeStyle = "#171b1f";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(188, 238);
  ctx.bezierCurveTo(238, 178, 294, 114, 374, 86);
  ctx.stroke();

  ctx.strokeStyle = "#b83a31";
  ctx.beginPath();
  ctx.moveTo(374, 86);
  ctx.bezierCurveTo(432, 102, 466, 136, 504, 204);
  ctx.stroke();

  ctx.strokeStyle = "#171b1f";
  ctx.beginPath();
  ctx.moveTo(188, 198);
  ctx.bezierCurveTo(244, 246, 290, 308, 368, 338);
  ctx.stroke();

  ctx.strokeStyle = "#217a55";
  ctx.beginPath();
  ctx.moveTo(368, 338);
  ctx.bezierCurveTo(424, 314, 480, 260, 540, 214);
  ctx.stroke();

  drawCandle(ctx, 338, 58, 44, 86, "#217a55");
  drawCandle(ctx, 384, 72, 34, 64, "#217a55");
  drawCandle(ctx, 330, 290, 44, 88, "#b83a31");
  drawCandle(ctx, 384, 278, 34, 70, "#b83a31");

  drawZone(ctx, 430, 72, 126, 54, "#b83a31");
  drawZone(ctx, 426, 292, 130, 54, "#217a55");
  drawZone(ctx, 546, 184, 126, 54, "#b47a1f");

  ctx.fillStyle = "#171b1f";
  ctx.font = "800 14px Inter, ui-sans-serif, system-ui, sans-serif";
  ctx.fillText("+ delta trap", 446, 106);
  ctx.fillText("- delta trap", 440, 326);
  ctx.fillText("50% reset", 566, 218);

  ctx.strokeStyle = "#b47a1f";
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 7]);
  ctx.beginPath();
  ctx.moveTo(536, 148);
  ctx.lineTo(536, 344);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#171b1f";
  ctx.font = "700 13px Inter, ui-sans-serif, system-ui, sans-serif";
  ctx.fillText("delta flips after rejection", 528, 156);
  ctx.fillText("vectors recover after absorption", 512, 364);
  ctx.fillText("structure + sentiment", 540, 70);

  badge(ctx, "1", 108, 210, "#2a66a2");
  badge(ctx, "2", 376, 48, "#b83a31");
  badge(ctx, "3", 370, 386, "#217a55");
  badge(ctx, "4", 684, 210, "#b47a1f");
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

function drawStoppingVolumeCandleSetup(ctx) {
  ctx.strokeStyle = "rgba(23, 27, 31, 0.34)";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(54, 104);
  ctx.lineTo(706, 104);
  ctx.moveTo(54, 306);
  ctx.lineTo(706, 306);
  ctx.stroke();
  ctx.setLineDash([]);

  drawZone(ctx, 74, 76, 198, 74, "#b83a31");
  drawZone(ctx, 74, 270, 198, 74, "#217a55");
  drawZone(ctx, 386, 72, 116, 102, "#217a55");
  drawZone(ctx, 386, 246, 116, 102, "#b83a31");

  ctx.strokeStyle = "#171b1f";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(78, 138);
  ctx.lineTo(126, 90);
  ctx.lineTo(178, 72);
  ctx.lineTo(232, 86);
  ctx.lineTo(276, 116);
  ctx.lineTo(330, 242);
  ctx.lineTo(378, 316);
  ctx.lineTo(426, 342);
  ctx.lineTo(484, 314);
  ctx.lineTo(548, 230);
  ctx.lineTo(654, 146);
  ctx.stroke();

  ctx.strokeStyle = "#b83a31";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(276, 116);
  ctx.lineTo(330, 242);
  ctx.lineTo(378, 316);
  ctx.stroke();

  ctx.strokeStyle = "#217a55";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(426, 342);
  ctx.lineTo(484, 314);
  ctx.lineTo(548, 230);
  ctx.lineTo(654, 146);
  ctx.stroke();

  drawCandle(ctx, 316, 206, 42, 118, "#b83a31");
  ctx.fillStyle = "#f6f7f2";
  ctx.fillRect(318, 206, 38, 62);
  ctx.strokeStyle = "#b83a31";
  ctx.lineWidth = 3;
  ctx.strokeRect(318, 206, 38, 62);

  drawCandle(ctx, 178, 70, 42, 112, "#217a55");
  ctx.fillStyle = "#f6f7f2";
  ctx.fillRect(180, 120, 38, 62);
  ctx.strokeStyle = "#217a55";
  ctx.lineWidth = 3;
  ctx.strokeRect(180, 120, 38, 62);

  ctx.strokeStyle = "#2a66a2";
  ctx.lineWidth = 3;
  ctx.setLineDash([6, 8]);
  ctx.beginPath();
  ctx.moveTo(334, 326);
  ctx.lineTo(334, 382);
  ctx.moveTo(198, 68);
  ctx.lineTo(198, 22);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#171b1f";
  ctx.font = "700 16px Inter, ui-sans-serif, system-ui, sans-serif";
  ctx.fillText("late longs", 96, 58);
  ctx.fillText("late shorts", 90, 370);
  ctx.fillText("wick = trap", 280, 392);
  ctx.fillText("movement away", 540, 214);

  ctx.fillStyle = "#b83a31";
  ctx.fillText("climactic sell", 284, 202);
  ctx.fillStyle = "#217a55";
  ctx.fillText("markup phase", 542, 132);

  badge(ctx, "1", 206, 78, "#b83a31");
  badge(ctx, "2", 334, 326, "#b47a1f");
  badge(ctx, "3", 126, 340, "#2a66a2");
  badge(ctx, "4", 618, 150, "#217a55");
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
