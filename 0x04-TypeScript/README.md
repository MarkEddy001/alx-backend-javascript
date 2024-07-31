# 0x03. ES6 Data Manipulation

## Description

This project is part of the JavaScript ES6 course and focuses on learning and practicing ES6 data manipulation techniques using map, filter, and reduce on arrays, typed arrays, the Set, Map, and WeakMap data structures.

## Learning Objectives

At the end of this project, you should be able to:

- Explain how to use map, filter, and reduce on arrays
- Understand typed arrays
- Understand the Set, Map, and WeakMap data structures

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint
- All of your functions must be exported

## Setup

1. Install NodeJS 12.11.x
   - Run the following commands in your home directory:
     ```sh
     curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
     sudo bash nodesource_setup.sh
     sudo apt install nodejs -y
     ```
   - Verify the installation by running:
     ```sh
     nodejs -v
     npm -v
     ```

2. Install Jest, Babel, and ESLint
   - In your project directory, run the following command:
     ```sh
     npm install
     ```

## Configuration Files

The following files have been added to your project directory:

- `package.json`: Specifies the project dependencies and scripts.
- `babel.config.js`: Configures Babel for transpiling ES6 code.
- `.eslintrc.js`: Configures ESLint for code linting.

## Usage

1. Open your project directory in your preferred code editor.
2. Run the following command to execute the code:
   ```sh
   npm run test
