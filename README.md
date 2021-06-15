# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page

### Screenshot

![desktop](desktop.jpg)
![mobile](mobile.jpg)

### Links

-   Live Site URL: [https://tender-hypatia-86fdf3.netlify.app/](https://tender-hypatia-86fdf3.netlify.app/)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid

### What I learned

CCS Grid, burger menu animations and a triangle with CSS

```css
.menu:before {
    content: '';
    width: 0;
    height: 0;
    /* TRIANGLE */
    background-color: transparent;
    border-top: 25px solid transparent;
    border-left: 25px solid transparent;
    border-right: 25px solid var(--white);
    position: absolute;
    top: -25px;
    right: 0;
}
```

### Continued development

A better and smother layout. Made improvements over my last project. but it's something I need to keep polishing

### Useful resources

-   [resource 1](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This helped me with CSS flexbox. I really liked this site and will use it going forward.
-   [resource 2](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) - This helped me with CSS Grid.
-   [resource 3](https://css-tricks.com/snippets/css/css-triangle/) - This helped me with the triangle.

## Author

-   Frontend Mentor - [@JafarJuneidi](https://www.frontendmentor.io/profile/JafarJuneidi)

## Acknowledgments

Good job me. now to the next one.
