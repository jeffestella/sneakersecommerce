# Overview
This is my attempt at a [front-end web dev challenge from Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6/hub/ecommerce-product-page-RuvAIPaQk). Below are the challenge brief and style guide provided by Frontend Mentor, as well as my own reflections on what I've learned completing this project. Reference screenshots are included in the `/designs` folder.

Live demo can be found here: https://sneakersecommerce.vercel.app/

# Brief
Your challenge is to build out this e-commerce product page and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

# Front-end Style Guide
## Layout
The designs were created to the following widths:
- Mobile: 375px
- Desktop: 1440px

## Colors
### Primary
- Orange: hsl(26, 100%, 55%)
- Pale orange: hsl(25, 100%, 94%)

### Neutral
- Very vark blue: hsl(220, 13%, 13%)
- Dark grayish blue: hsl(219, 9%, 45%)
- Grayish blue: hsl(220, 14%, 75%)
- Light grayish blue: hsl(223, 64%, 98%)
- White: hsl(0, 0%, 100%)
- Black (with 75% opacity for lightbox background): hsl(0, 0%, 0%)

## Typography
### Body Copy
- Font size (paragraph): 16px

### Font
- Family: [Kumbh Sans](https://fonts.google.com/specimen/Kumbh+Sans)
- Weights: 400, 700

---
# Jeff's Notes
These are my own reflections and things learned as I worked on this project. I hope someone finds them useful.
- Overlay elements for images might work better with a div with a z-index greater than image, then various levels of opacity based on hover and selected.
- When using css flexbox `align-items: stretch`, better to stretch parent containers then align children (eg. centering text). Used for `Navbar` styling.
- I need to review the difference between the various options for css [`position`](https://www.w3schools.com/Css/css_positioning.asp)
    - `position: absolute` elements are positioned relative to their parent elements. Parent elements need to have `position: relative`
- The `calc()` function for css is super useful! Used for calculating `left` positioning for the `CartDropdown` component. Read more about it [here](https://css-tricks.com/a-complete-guide-to-calc-in-css/)
- I need to work on dimensions and scaling. With individual components, I do just fine. But as the project progresses, I keep finding myself having to re-work CSS `width` and `height` properties to prevent weird scaling issues when testing responsivness.
    - For this project, I took the copout and just set a `min-width` for the app to about `1000px` since the Brief doesn't specify tablet styling. Will just worry about desktop and mobile styling. 
- For the life of me, I can't figure out how to perfectly align the `create-react-app` `<App />` component so that it sits flush with the viewport (ie. no `margin` ). Setting CSS `:root {margin:0}` in the `index.css` file does not seem to work
    - Default browser CSS uses whacky margins and padding. Fix that by setting `* {margin: 0, padding: 0}` on global CSS file. (In this case, `index.css` for `create-react-app` applications)
- I've never had to consider `line-height` and `letter-spacing` when it comes to design and styling until I was given a design (read: this design) that made use of it.  
- MacOs is case insensitive when it comes to git files. Even though I renamed a file from `QTyCounter.module.css` to `QtyCounter.module.css` after a typo when creating the file, my github repo still kept `QTyCounter.module.css`. 
    - Solution. Used `git mv` command: `git mv QTyCounter.module.css QtyCounter.module.css`