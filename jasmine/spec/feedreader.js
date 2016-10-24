/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {

    describe('RSS Feeds', function() {
        /* Tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URL defined', function() {
           for(var i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].url).toBeDefined();
             expect(allFeeds[i].url).not.toBe('');
           }
         });

        /* A test that loops through each feed
         * and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name defined', function() {
           for(var i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name).not.toBe('');
           }
         });
    });

  describe('The Menu', function(){

        /* tests that the menu element is
         * hidden by default.
         */
    it('hidden by default', function() {
        expect($('body').hasClass('menu-hidden')).toBe(true);
    });
         /* test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
    it('changes visibility when clicked', function(){
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).not.toBe(true);

      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  describe('Initial Entries', function(){

    /* Test that ensures when the loadFeed
     * function is called and completes its work.
     */

    beforeEach(function(done){
      loadFeed(0, done);
    });
    it('are loaded', function(){
      expect($('.feed .entry').length).toBeGreaterThan(0);
    });
  });

  describe('New Feed Selection', function(){

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */

    var previousFeed;
    beforeEach(function(done){
      loadFeed(0, function(){
       previousFeed = $('.feed').html();
       done();
     });
   });
   it('new feed is loaded', function(done){
     loadFeed(1, function(){
       expect($('.feed').html()).not.toBe(previousFeed);
       done();
     });
   });
  });
}());
