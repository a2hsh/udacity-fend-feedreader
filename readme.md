# FeedReader Tests with Jasmin,
Udacity Frontend Nanodegree Project,
By Abdulaziz Alshmasi.

## Introduction
In this project, I use [Jasmine](http://jasmine.github.io/) to create tests for a FeedReader application, insuring that code will not break when new features are added.
All testing code is written using ES6.

## How to Run
1. Clone or download and unzip this repo.
2. Click on `index.html`.
3. The Jasmin tests will show in the bottom of the page.

## Created tests
I wrote the following tests as required by the Udacity Project Rubric:
1. A test that loops through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL is not empty.
2. A test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. A new test suite named `"The menu"`, with the following tests inside it:
  - A test that ensures the menu element is hidden by default.
  - A test that ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display itself when clicked, and does it hide when clicked again?

4. A new test suite named `"Initial Entries"`, with the following test inside it:
  - a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.

5. A new test suite named `"New Feed Selection"`, with the following test inside it:
  - a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.