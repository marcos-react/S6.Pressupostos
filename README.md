
# Presupuestos Application

This is a React-based web application for managing service budgets. Users can select from various services, specify custom options (such as the number of pages or languages for web development), and submit requests for a budget proposal. The application tracks selected services and calculates the total cost dynamically.

## Features

- Dynamic service selection with checkboxes
- Custom options for web services, including page and language numbers
- Real-time budget total calculation
- Form submission for requesting a budget proposal
- Display of current proposals

## Requirements

To run this application locally, you'll need the following:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

## Installation

Follow these steps to install and run the application locally:

1. Clone the repository:

git clone https://github.com/marcos-react/S6.Pressupostos

cd S6.Pressupostos

2. Install dependencies:

npm install


## How to Run the Application

npm dev run

Open the URL in your web browser.


## Project Structure

Here is a brief overview of the main files and folders:

src/components: Contains the React components such as:

    CheckboxCard.jsx: Renders the service selection cards with checkboxes.
    TotalCard.jsx: Displays the total budget cost.
    RequestCard.jsx: A form for users to submit their information and request a proposal.
    ShowCard.jsx: Displays the list of current proposals.
    SubCheckboxCard.jsx: Manages the custom inputs (number of pages, languages) for web services.

src/context/DataContext.jsx: Provides the data and state management for the application.

## How to Use

Select services: Users can select the services they need by checking the boxes.
Configure options: For web development, users can configure the number of pages and languages.
Request a budget: Fill out the form with the required details (name, phone, email) and click the button to request a budget.
View submitted proposals: The submitted proposals will be displayed with the detailed services and total cost.

## Technologies Used

React.js: JavaScript library for building user interfaces
Tailwind CSS: Utility-first CSS framework for styling
DaisyUI: Tailwind CSS component library for UI elements

