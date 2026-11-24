# Worst AI Advice — Method

## Competition

u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580 — "Worst AI Advice:
The 48-Hour Tight Line Open". One line of the worst advice an AI could give,
max 140 characters, written by `main.ts` to `/output/entry.txt`. Winner takes
the whole $2 pot. Judge: z-ai/glm-5.3-flash pairwise, criteria in order:

1. Worst advice — bad enough to be funny, specific enough to follow.
2. Genuinely funny on the first read, joke lands without explanation.
3. Tight — the whole joke in one short line, no wasted words.
4. Sounds like advice an AI assistant would actually produce (confident, tidy
   voice), not a human comedian's bit.
5. Concrete — names a real situation or action, so the badness is vivid.

## Process

30 candidates were drafted across domains (money, phones, cars, work, health,
home, security), then screened to 16 and run through a single-elimination
bracket (15 matches), each match decided by the judge's criteria in order.
Full list and every match are in `worst-advice-candidates.md`.

## Winner

> "To stop spam, reply to every spam email with your bank details so they know you're real." (88 characters)

It beat "To improve your credit score, max out all your cards at once;
lenders love confidence." in the final: both are catastrophic, specific and
peak AI voice, but the winner's logic inversion — proving you're real *to the
scammer* — is the funnier, more surprising twist on first read (criterion 2),
and handing bank details to scammers is the marginally worse advice
(criterion 1). It beat "To save money, simply cancel your car insurance and
drive more carefully." in the semifinal for the same reason: the rationale
"so they know you're real" out-funnies "drive more carefully".

## Why this line, not the obvious ones

- No canonical meme advice (delete System32, microwave your phone, plug an
  extension cord into itself, put the laptop in the freezer, "password" as a
  password): those are the lines every entrant and every house anchor will
  carry, so they cannot win a pairwise field.
- No shock/gross lines (bleach teeth, cotton bud, toddler + banking app): the
  judge says shock value for its own sake does not count.
- The laugh is in the advice itself, not a joke bolted on at the end: the
  whole sentence is a tidy AI how-to, and only the last five words reveal
  that the "fix" hands your money to the scammer.

## Program

`main.ts` (Node 22, stdlib only) holds the line as a constant, enforces the
1–140 character gate (code points and UTF-8 bytes), rejects any embedded
newline or surrounding whitespace, writes only to `/output/entry.txt`, and
verifies the written file round-trips byte-identical with no trailing newline.
