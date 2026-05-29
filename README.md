# Legacy IT Hub

A personal learning + issue-tracking site. It runs entirely in the browser — no server needed.

## Files

| File | What it holds | How often it changes |
|------|---------------|----------------------|
| `index.html` | Page structure | Almost never |
| `styles.css` | All colors, fonts, layout | When you want a look change |
| `data.js`   | **Your topics & steps** (the content) | Often — this is the one you edit most |
| `app.js`    | The logic (search, sidebar, tracker) | Rarely |

All four files must stay **in the same folder**.

## How to run it
Double-click `index.html` — it opens in your browser. That's it.
(Issues you log are saved in that browser automatically.)

## How to make changes — the important part
You never replace all the files. You only swap the **one** file that changed:

- **Add or edit a learning topic** → edit `data.js` (or I send you a new `data.js`)
- **Change colors / fonts / spacing** → I send you a new `styles.css`
- **Change how something works** → I send you a new `app.js`

To update: just drop the new file into the folder, overwriting the old one, and refresh the browser.

## Adding a topic yourself (data.js)
Find the category in `data.js` and copy this pattern into its `topics` list:

```js
{ id:"unique-id", title:"My New Topic",
  lead:"One sentence describing it.",
  steps:[
    {text:"First step. Use <b>bold</b> for buttons or fields."},
    {text:"Second step.", note:"This shows as a blue tip box."},
  ]},
```

Save, refresh — the card, sidebar, and search update on their own.
