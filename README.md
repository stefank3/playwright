# Playwright Project

Welcome to the Playwright project! This project utilizes Playwright, a Node.js library for automating browsers. This README provides guidelines on how to set up your development environment, install necessary dependencies, and run tests using Visual Studio Code.

## Prerequisites

Before getting started, ensure that you have the following installed on your system:

- Node.js (v12 or higher)
- Visual Studio Code (VS Code)
- Git (optional but recommended)

## Installation

Follow these steps to set up your development environment:

1. **Clone the Repository:**
https://github.com/stefank3/playwright.git

2. **Navigate to Project Directory:**
cd playwright-project

3. **Install Dependencies:**
npm install

4. **Install Visual Studio Code (if not already installed):**
Download and install Visual Studio Code from [here](https://code.visualstudio.com/).

5. **Install Visual Studio Code Extensions:**
- Open Visual Studio Code.
- Install the following extensions:
  - ESLint (for code linting)
  - Debugger for Chrome (for debugging tests)
  - Playwright Test (for Playwright support)

## Running Tests

To run tests using Visual Studio Code and Playwright, follow these steps:

1. **Open the Project in Visual Studio Code:**
Navigate to terminal and use the following command
npx playwright test --ui