/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', () => {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', () => {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    //The following two tests will loop through every feed in the allFeeds object, so we're placing all of them in a for ... of loop

    for (const [i, feed] of allFeeds.entries()) {
      //Check that every feed has a valid Url
      it(`Feed ${i + 1} has a Valid URL`, () => {
        expect(feed.url).toBeDefined();
        expect(feed.length).not.toBe(0);
      });

      //check that every feed has a valid name
      it(`Feed ${i + 1} has a Valid Name`, () => {
        expect(feed.name).toBeDefined();
        expect(feed.name).not.toBe();
      });
    }
  });


  //creating our second test suite to test the menu operations
  describe('The menu', () => {
    //Checks if the menu is hidden by default
    it('Menu is Hidden by Default', () => {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    //checks if the menu hides and shows correctly when clicking the menu icon.
    it('Menu Shows and Hides Correctly', () => {
      //Emulates a click on the menu icon, expect the class menu-hidden to be removed.
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(false);
      //Another click on the menu icon should return everything to default state, with the class menu-hidden to be available
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  //Our initial entries suite for testing feed loading.
  describe('Initial Entries', () => {
    //Initial operations to be run before every test
    beforeEach(done => {
      //Load the first feed, and wait until it's loaded
      loadFeed(0, done);
    });

    //Check if we have at least 1 entry
    it('Loaded Multiple Entries', done => {
      //Get all entries
      let entries = $('.entry');
      expect(entries.length).not.toBe(0);
      done();
    });
  });


  //our New Feed Selection suite Checks if multiple feeds can be loaded
  describe('New Feed Selection', () => {
    //Define enitial variables for the hole suite.
    let previousFeedUrl,
      currentFeedUrl;
    //Before each test, load two feeds, and store their Urls into our variables
    beforeEach(done => {
      //Loading the two feeds at the same time will result in an undefined currentFeedUrl variable, so we'll load them one after the other.
      loadFeed(0, () => {
        previousFeedUrl = $('.entry-link').attr('href');
        //Load the second feed in the Callback of the first feed function
        loadFeed(1, () => {
          currentFeedUrl = $('.entry-link').attr('href');
          done();
        });
      });
    });

    //checks if the content changes between our feeds
    it('Content Changes successfully for Multiple Feeds', done => {
      expect(previousFeedUrl).not.toBe(currentFeedUrl);
      done();
    });
  });
}());