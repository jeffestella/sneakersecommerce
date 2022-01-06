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

>Note: Project screenshots in /design directory


# Jeff's Notes
## Components and Architecture
- \<Navbar /\>
    - Company logo (Home btn)
    - Nav links
    - \<Cart /\>
        - \<CartCount /\> badge
        - Dropdown
            - "Cart" header
            - \<CartItem /\> list
                - product photo
                - product name
                - product price x qty
                - total
                - garbage icon
                - \<CTABtn /\>
                    - "Checkout"
- \<ProductInfo /\>
    - Props:
        - manufacturer
        - name
        - blurb
        - priceCurrent
        - discount
        - priceOriginal
    - Manufacturer
    - Product Name
    - Product Description
    - Price: Current
        - Discount %
    - Price: Previous w/ strikethrough
    - \<QtyCounter /\>
        - Subtract icon
        - Counter
        - Add icon
    - \<CTABtn /\>
        - Cart Icon
        - "Add to cart"
        - Function