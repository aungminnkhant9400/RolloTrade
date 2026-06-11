# RolloTrade Agent Handbook

Read this before working with the user on RolloTrade or live trading-desk
support. Keep stable trading rules separate from market snapshots: levels,
sentiment, orderflow, and macro context can become stale quickly.

## Project Purpose

RolloTrade is a local/static trading education and execution-support project.
It converts Traders Reality / Tino-style lessons into structured field notes,
checklists, drills, and a practical trading desk for the user's BTC and gold
planning.

The app is not meant to place orders. It is a decision-support and journaling
tool. Do not click exchange, broker, TradingView `Trade`, order, login,
funding, or account-management controls for the user.

## Repo Truth

- Root: `C:\Users\aungm\Desktop\RolloTrade`
- Main app files: `index.html`, `styles.css`, `app.js`, `README.md`
- Trading Desk source of truth: `app.js`, object `tradingPlan`
- Live/static site alias used previously: `https://rollo-trade.vercel.app/`
- Local static server may be running from this repo; check `.server.port` if
  present.

## User Trading Context

- Timezone: Asia/Macau, UTC+8
- Primary market: BTCUSDT futures
- Secondary watchlist: PAXG/XAU
- Exchange preference: Binance
- Planning capital: `1000 USDT`
- Leverage preference: BTC 50x, but leverage is only an execution setting.
  Position size must come from entry, stop, and fixed dollar risk.
- Style: scalps and intraday holds, usually up to 4-6 hours.
- Preferred concepts: V-shape reversals, Block Trade reactions, retail
  sentiment, macro data, orderflow, and Traders Reality vector candles.
- User goal: build stable side income; first target discussed was about
  `200 USD/month`, but execution quality comes before profit targeting.
- Profit model: the user wants winners to be at least twice the planned loss.
  Treat `2:1` reward:risk as the default minimum for planned trades. A `1:1`
  move can be used for partial profit or emergency management only, not as the
  full planned trade.
- Weekly target: `50-100 USD` profit. The user does not need many trades; once
  the weekly target is reached, protect the week and only consider A+ setups or
  stop trading for the week.
- Important history: user has lost money in leveraged trading after initial
  wins. Be strict about risk and avoiding impulsive entries.

## Strategy Stack

Do not describe this as "two strategies only" without the mandatory filters.
The user's framework is:

- Core entry setups: `Session 6 - How To Trade V Shape Reversals` and
  `Session 8 - The Block Trade Principle`.
- Mandatory filters: `Session 14 - How To Use Macro Data To Trade`,
  `Session 15 - Orderflow And Vectors`, and
  `Session 3 - How To Read Vector Candles`.
- Extra confirmation/context: `Session 9 - Trading The First Green Vector`,
  `Session 12 - How To Trade Stopping Volume Candles`,
  `Session 5 - Trading M & W Formations`, Brinks/session levels, and
  `Session 2 - Trading Confluences`.

Operational rule:

- No trade unless the setup is V-shape or Block Trade, and macro,
  orderflow/sentiment, and vector-candle evidence do not conflict.
- If macro is dangerous, skip.
- If orderflow or retail sentiment conflicts, skip or downgrade.
- If vector candle location/color is unclear, keep it as watchlist only.
- If the entry is not a retest, reclaim, rejection, or accepted break, skip.

## Trading Desk Rules

These are the active RolloTrade v1 rules.

- Trade BTCUSDT first. Treat PAXG/XAU as watchlist until BTC execution is
  stable.
- Risk `15 USDT` maximum per trade.
- Planned reward must be at least `2R`; with `15 USDT` risk, the planned target
  must reasonably offer at least `30 USDT` profit before fees. Skip trades where
  the next realistic support/resistance only offers about `1R`.
- Use `1R` only for partial profit, break-even management, or damage control.
  Do not present a `1:1` setup as a full RolloTrade trade.
- Stop after `-30 USDT` in one day.
- Stop after `-60 USDT` in one week.
- Stop after `-120 USDT` in one month.
- Weekly profit management: after about `+50 USDT`, reject weak setups; after
  about `+75 USDT`, take only A+ setups; at `+100 USDT`, stop trading for the
  week unless the user explicitly overrides the plan.
- Maximum two trades per day.
- Only V-shape reversals and Block Trade reactions are live-tradable in v1,
  and they must be filtered through macro, orderflow/sentiment, and vectors.
- No size increase before 50 logged trades, positive expectancy, and no
  rule-break day.
- No trade if the idea cannot be explained in one sentence before entry.

## Required Pre-Trade Checklist

Use this checklist before giving the user any trade plan.

1. Market is BTCUSDT or PAXG/XAU only.
2. Macro calendar is checked; no CPI, FOMC, Powell, NFP, PPI, or major
   surprise news candle is active.
3. Setup is V-shape reversal or Block Trade reaction.
4. Vector candle color and location are confirmed: body, high, midpoint, and
   low.
5. Orderflow and/or retail sentiment supports the idea, or the trade is
   skipped.
6. Entry is a retest, reclaim, rejection, or accepted break, not a chase candle.
7. Stop price is defined before entry.
8. Calculator risk is `15 USDT` or less.
9. Daily and weekly loss stops have not been hit.
10. The trade can be explained in one sentence.
11. The entry setup, macro read, orderflow/sentiment read, and vector evidence
    all agree well enough to avoid contradiction.
12. The setup offers at least `2R` to a realistic target before the next major
    opposing level; otherwise it is watchlist only.

If any critical item fails, call it a watchlist setup, not a trade.

## Position Sizing Formula

Use fixed-dollar risk, not leverage, to size positions.

```text
risk_per_unit = abs(entry_price - stop_price)
max_position_units = 15 / risk_per_unit
notional = max_position_units * entry_price
required_margin = notional / leverage
```

## Reward-To-Risk Rule

Use `R` to compare setups:

```text
risk_per_unit = abs(entry_price - stop_price)
target_distance = abs(target_price - entry_price)
reward_to_risk = target_distance / risk_per_unit
```

Operational standard:

- Planned trades need `reward_to_risk >= 2`.
- A trade risking `15 USDT` should have a realistic path to at least `30 USDT`
  profit.
- If the only clean target is `1R`, downgrade to no-trade or partial-management
  logic.
- Do not stretch targets beyond visible structure just to make a setup appear
  `2R`.

Examples from the BTC scan:

```text
Entry 62,870, stop 62,720:
risk_per_btc = 150
max_size = 15 / 150 = 0.10 BTC

Entry 62,790, stop 62,970:
risk_per_btc = 180
max_size = 15 / 180 = 0.083 BTC
```

## How To Work With TradingView Chrome

The user explicitly wants agents to use the installed Chrome plugin when
reading their logged-in TradingView chart. The active Chrome profile observed
was named `AUNG MINN`. Do not assume browser control is unavailable if tool
discovery is unclear; inspect the Chrome/browser bridge first.

Important guardrails:

- Reading charts and navigating symbols/timeframes is allowed.
- Do not click TradingView `Trade`, broker buttons, order tickets, or account
  controls.
- If the Chrome bridge loses the tab, ask the user to keep the chart open or
  send a screenshot.
- TradingView sometimes blocks URL/timeframe changes or shows subscription
  popups. The user can manually switch symbols/timeframes when needed.
- DOM text can expose OHLC and TR_MAIN values, but vector candle color is
  visual. Do not mark vector confirmation as passed unless visually confirmed
  from a screenshot or browser canvas.

## Applying RolloTrade To A Live Scan

For every scan, report in this order:

1. Market snapshot and timeframe.
2. Macro/news restriction.
3. Strategy classification: V-shape, Block Trade, or no setup.
4. Vector-candle evidence.
5. Orderflow/sentiment evidence.
6. RolloTrade checklist score: pass, warning, fail.
7. Whether it is a live trade, watchlist setup, or no-trade.
8. Conditional long and/or short triggers.
9. Invalidation.
10. Targets.
11. Reward:risk check, with the `2R` target made explicit.
12. Position size for `15 USDT` risk.

Use direct language. The user wants honest filtering, not forced trade calls.

## Latest BTC Scan Snapshot

Snapshot time: June 11, 2026, about `17:09` Macau time.

This snapshot is stale after market movement. Re-check TradingView before using
these levels.

Observed on the user's Chrome TradingView BTCUSDT chart:

- Symbol: BTCUSDT
- Timeframe: 15m
- Exchange shown: Binance
- Price area: about `62,854`
- Current 15m candle: opened near `62,958`, high near `62,962`, low near
  `62,842`, close/readout near `62,854`
- TR_MAIN 15m visible levels: `62,869`, `62,796`, `62,396`, `62,133`,
  `63,819`, `62,533`, `62,259`
- 1h context levels observed: `62,769`, `62,465`, `62,185`, `63,822`,
  `70,625`, `62,376`, `61,995`
- Interpretation: BTC was above several short/medium TR levels but below the
  larger overhead area around `63,819-63,822`.

Trading Desk verdict from that scan:

- Market: pass
- News: warning, because US PPI was scheduled later that day
- Setup family: not confirmed; possible Block Trade reaction only
- Vector candle: not passed, because vector color/location was not visually
  confirmed
- Sentiment/orderflow: caution; BTC account sentiment was long-heavy
- Macro: warning; PPI was scheduled later that day
- Entry quality: fail at current price; not a clean retest, reclaim, rejection,
  or accepted break
- Risk: pass only with calculator sizing at `15 USDT` or less
- Final verdict: no live trade; watchlist only

Conditional plan from that scan:

- Long only if BTC retests `62,796-62,770`, holds, then reclaims `62,869` with
  green vector confirmation.
- Long targets: `62,960`, then `63,050`.
- Long invalidation: below `62,720`, or strong 15m acceptance below `62,796`.
- Short only if BTC rejects `62,960-63,050`, then closes back below `62,796`
  with red vector confirmation.
- Short targets: `62,533`, then `62,396`, then `62,259`.
- Short invalidation: sustained 15m close above `63,050`.

## Latest XAU Snapshot

Snapshot time: June 11, 2026, around `17:02-17:05` Macau time.

This snapshot is stale after market movement. Re-check TradingView before using
these levels.

Observed on the user's Chrome TradingView XAUUSD chart:

- Symbol: OANDA:XAUUSD
- Timeframe: 15m
- Price area: about `4,084-4,086`
- Visible OHLC during scan: open around `4,084.710`, high around `4,087.615`,
  low around `4,083.400`, close around `4,085-4,086`
- TR_MAIN values visible around: `4,091`, `4,092.8`, `4,092.7`, `4,172`,
  `4,335`, `4,103`, `4,082`
- Interpretation: XAU was weaker than BTC and trading near a lower local zone.

Desk treatment:

- Treat XAU/PAXG as watchlist unless BTC execution is stable.
- For XAU longs, require a sweep/reclaim and clear green vector confirmation.
- For XAU shorts, require failed retest/rejection and red vector confirmation.

## Macro And Sentiment Notes From June 11, 2026

- BLS Producer Price Index for May 2026 was scheduled for June 11, 2026 at
  `08:30 ET`, which is `20:30 Macau`.
- Rule: avoid opening new trades close to major macro releases. At minimum,
  stand aside immediately before and after the release until spreads and
  vectors normalize.
- Coinalyze/CoinGlass-type long-short data showed BTC accounts were long-heavy
  during the scan, roughly mid-60% long in short timeframes. Interpret this as
  retail positioning/sentiment, not proof that more capital is long.

## Communication Style For This User

- Be direct and honest.
- Say `no trade` when the checklist fails.
- Do not force an opportunity just because the user asks for one.
- Do not call macro, orderflow/sentiment, or vector candles optional. They are
  mandatory filters.
- Separate confirmed chart facts from interpretation.
- When relying on a stale snapshot, explicitly say it must be refreshed.
- If using Chrome, acknowledge what was actually visible and what was not.
- Always keep the user's `15 USDT` max risk rule in the trade plan.
