# Discord Fake Giveaway Bot
**Fake Giveaway Bot** is a Simple, basic, discord.js **FAKE** giveaway bot.

Its working mechanism is very simple, you add people to fake winner list, you start a fake giveaway, you end it and your fakes will win :)

## Installation
If you didn't modified package.json then just run:

```bash
npm i
```
else, run:
```bash
npm i discord.js cli-table3 quick.db
```

## Usage

**.giveaway <EndTime> <WinnerCount> <Description/Award...>**

`EndTime` can be days or hours. If you want days, just type any of 1 to 9 digit, else if you want hours type any of 1 to 9 digit with `h` suffix.

Examples:
- `.giveaway 1 .......` Creates giveaway for 1 day
- `.giveaway 1h ......` Creates giveaway for 1 hour

`WinnerCount` can be 1 to 9 digit. If it is greater than Fake winner list length, you can't end a giveaway.

`Description/Award...` is a place that you can type award name or some description it is up to you.

---
**.fakelist <add/del> <ID or @mention>**

Just adds or deletes user from Fake Winner list.

---
**.listfakes**

Lists all fakes :D

---
**.end**

If there is a giveaway data in database, it just sends a message with random fake winners and giveaway description etc etc.

---

All dates are in UTC(+0/-0) format.
**Also, never let Fake Winner list with 1 guy, add at least 2 guy otherwise it will bug.**
