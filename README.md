# Carousel

A simple web app showing an animated carousel that displays slides with information about a users credit report.

## Prerequisites

- Node version >= 9.3.0
- The `node-sass` package requires a different minimum version depending on which major version of node you are using. You can see the different version of the package you need on their website [here](https://github.com/sass/node-sass). (I chose to use Node Version 9.3.0, this is discussed in this [section](#assumptions-and-descisions)).
- Yarn is used as the package manager

## Getting Started

- Run: `git clone https://github.com/geojow/clearscore-carousel.git`
- Run: `cd clearscore-carousel/carousel`
- Run: `yarn install`

## Running the app

- Run: `yarn start:webpack`
- Run: `yarn start:dev` _(in a new terminal)_
- Goto: `http://localhost:3000/`

## Running the tests

- Run: `yarn test`

## Assumptions and Decisions

I chose to not update any of the existing packages, and instead used `nvm` to use the correct node version to run this app (9.3.0).

I developed this app using a TDD approach, first writing the tests for a component before creating the component and implementing it's features. This has resulted in a well tested app.

## Improvements

Given more time, I would like to:

- Add end-to-end tests to this app using Cypress
- Add a bouncing effect to the end of the animation of the arc
- Improve code coverage
