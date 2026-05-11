# External Link Icon — Test Cases

Temporary page to verify icon placement on external links inside and outside cards.

---

## Card — external link

<div>
<a class="card--plain" href="https://designsafe-ci.org" target="_blank" aria-label="Opens in new window.">
    <h3>External card</h3>
    <p>This card links to an external site. The icon should appear in the top-right corner of the card, not inline after the text.</p>
</a>
</div>

---

## Card — internal link

<div>
<a class="card--plain" href="/test/">
    <h3>Internal card</h3>
    <p>This card links to an internal page. No external-link icon should appear.</p>
</a>
</div>

---

## External link — outside card

Visit [DesignSafe](https://designsafe-ci.org) for more info.

The icon should appear inline, right after the link text, with a small left margin.

---

## Internal link — outside card

See the [Testing page](test.md) for how to run locally.

No icon should appear on this link.
