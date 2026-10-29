# Paradise Nursery Shopping Cart Application

## Project Overview

Paradise Nursery is a full-featured online plant shop built with React and Redux. It allows users to browse a wide variety of houseplants, add them to a shopping cart, update quantities, and remove items — all with a seamless and responsive user experience.

## Features

- **Landing Page**: Beautiful background with company name and "Get Started" button
- **About Us**: Information about Paradise Nursery's mission and values
- **Product Listing**: Browse plants organized by category
- **Shopping Cart**: Add, remove, and update plant quantities
- **Redux State Management**: Cart state managed with Redux Toolkit

## Technologies Used

- React 18
- Redux Toolkit
- CSS3
- JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

```bash
git clone https://github.com/fanyicharllson/paradise-nursery.git
cd paradise-nursery
npm install
npm start
```

The app will run at `http://localhost:3000`.

## Project Structure

```
src/
├── App.jsx          # Main app with landing page
├── App.css          # Global styles with background image
├── AboutUs.jsx      # About the company
├── ProductList.jsx  # Product listing page
├── CartItem.jsx     # Shopping cart page
└── CartSlice.jsx    # Redux slice for cart management
```

## License

This project is licensed under the MIT License.
