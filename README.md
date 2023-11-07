# Conduit -- testing of RealWord Web Application

## Table of Contents

1. [Summary of Repo](#summary-of-repo)
2. [Requirements](#requirements)
3. [Steps to Install](#steps-to-install)
4. [Steps to Launch and Create a Report](#steps-to-launch-and-create-a-report)

## Summary of Repo

This repository contains automated test cases for [RealWorld](https://demo.realworld.io/#) implemented using Cypress. 

## Requirements

- Node.js: Ensure you have Node.js installed.
- Cypress: Install Cypress by running `npm install cypress --save-dev`.
- Mochawesome reporter for Cypress: Install by running `npm i --save-dev cypress-mochawesome-reporter`.
- Other dependencies: Check the `package.json` file for additional dependencies.

## Steps to Install

1. Clone this repository:

```bash
git clone
https://github.com/kristinap8/cypress-task.git
```

2. Navigate to the project directory:

```bash
cd cypress-task
```

3. Install project dependencies:

```bash
npm install
```

## Steps to Launch and Create a Report:

1. Run tests with default browser and generate a html-report:

```bash
npm run cypress:run
```

2. Open the generated report in a browser:

```bash
npm run report:open
```



