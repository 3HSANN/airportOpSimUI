# AirportOpSim UI

A static redesign concept for [airportopsim.com](https://airportopsim.com): a landing page and a "Book a demo" page. It's plain HTML, CSS and vanilla JavaScript, with no build step and no dependencies.

## Pages

- `index.html`: the landing page. It has a hero with a waitlist form, a walkthrough video section, a departure board that switches the module preview (courses, 3D airport, live simulator) and a contact section.
- `book-demo.html`: the booking page, with a day and time picker and a confirmation screen.

## Structure

```
index.html        landing page
book-demo.html    book-a-demo page
css/styles.css    shared styles: glass panels, buttons, dot-matrix nav, motion
js/main.js        landing page: smooth scroll, module switcher, waitlist, video toggle
js/book-demo.js   booking page: day/slot picker, confirmation
assets/           AOS logo for light backgrounds
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## Still to connect

These are front-end only at the moment:

- The waitlist form only changes its own button label, and the booking form only shows the confirmation screen. Neither sends anything yet. Connect them to the email provider and calendar or CRM.
- The video section is a placeholder. Replace the "playing" state with a `<video>` element once the walkthrough is ready, and set the real length.
- The demo days and times, and the course and lesson names, are placeholder content.

## Design notes

- The colours come from the AOS logo: navy `#0C1322`, logo blues (`#2F8BF5` to `#0B3D9E`) and orange `#EE6A0A`. Blurred blue and orange circles overlap on a white background.
- Fonts: Geist for text, Fira Mono for labels, Doto for the dot-matrix nav. All three load from Google Fonts.
- Motion stays to a minimum. Press, hover and entrance effects only play when the visitor hasn't turned on reduced motion, and hover styles only apply on devices with a mouse.
- The NetworkAir airline and hub are fictional.
