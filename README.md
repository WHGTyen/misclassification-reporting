# Misclassifications Reporting

## Requirements
1. TypeScript 3.1.3
2. Node.js 8.12.0
3. Python 3.5.2
4. pip 18.0
5. pipenv 2018.7.1

## Build instructions
1. Compile all TypeScript files into a JavaScript file: `$ tsc`
2. Install Python dependencies `$ pipenv sync`

## Start a local Flask server
1. Activate the Pipenv shell: `$ pipenv shell`
2. Start the server: `$ python server.py`

The reporting system should appear on http://localhost:8080
