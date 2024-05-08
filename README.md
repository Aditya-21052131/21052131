# 21052131
Top Products Web App

This React application serves as a frontend for Top Produts API, allowing users to explore and compare products from various e-commerce companies.

Features:

i.Product Listing: Displaying a list of top N products within a specified category and price range.

ii.Filtering:Enables users to filter products by category,company,rating range,price range and availability.

iii.Sorting:Offers options to sort products by price,rating or discount(ascending/descending).

iv.Pagination:Facilitates smooth navigation through large products sets using page controls.

v.Product Details:Provides detailed information about a specific product upon selection.

Technologies:

*React
*React Router DOM(for routing)
*Axios(for API calls)
*Material UI

Prerequisites:

*Node.js andd npm installed
*Basic understanding of React and JavaScript

Setup Instructions:

1.Clone the repository.

2.Install dependencies:

npm install

3.Start the development server:

nom start

This will open the application in your default web browser at http://localhost:3000/.

Usage:

The application provides a user-friendly interface for product exploration.

*Filtering:Utilize the provided dropdowns,checkboxes and input fields to filter products based on your criteria.Click the "Apply Filters" button to update the product list.

* Sorting:Select your preferred sorting option(price,rating,discount) and its order(ascending/descending) from the dropdown menu.

* Pagination: Navigation through multiple product pages using the provided buttons.

* Product Details:Clicking on a product name or image will redirect you to a dedicated   page showcasing detailed information about that specific product.

  API Integration:

  This application is designed to integrate with your backend API that retrives 
  product data from the Test Server APIs.Replace the placeholder URLs in the 
  code(/api/products and /api/products/:productId) with the actual endpoints provided 
  by your backend for fetching product lists and details.

  Future Enhancements:

  * Implement search functionality to allow users to search for specific products.

    *Add visual feedback for user interactions(e.g.,loading indicators,sorting arrows).

    *Integrate a random image placeholder library for product listings.

    Contribution:

    Feel free to contribute to this project by improving the functionalities,UI or 
    adding new features.


