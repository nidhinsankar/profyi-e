# PROFYI-ECART

## TECH STACK

- NEXTJS
- TAILWINDCSS
- REDUXJS/TOOLKIT
- REACT-HOT-TOAST

## FEATURES

- Implemented API fetching functionality by fetching the data from (fake-store) api and listed the products in the Home Page

- Integrated reduxjs/toolkit to manage the cart state and pagination,filter logics

- Implemented "Add to Cart" functionality and a toast to confirm item addition into the cart

- Created a separate cart page for the user to manage the cart items ,to apply discount card,calculating total price

- A cart icon on the navbar to act as a link to the cart page and also display the total number of cart items added

- Implemented category and search filter features in the product listing page

- For the search filter i have implemented debouncing to minimize the number of dispatch to the filter logic

- Implemented discount feature for fixed and percent discount

- Implemented pagination for displaying only 10 products in a page or else the products number can be changed

- created dynamic star to display the rating

- created single cart-button component to make it reusable for all operations of cart like add , remove, increase quantity, decrease quantity, clear the cart instead of creating separate buttons for these functionalities

- created Reusable cart item and product card component
