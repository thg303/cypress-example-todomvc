describe("TodoMVC - React", function(){

  // setup these constants to be used through the tests
  var TODO_ITEM_ONE   = "buy some cheese"
  var TODO_ITEM_TWO   = "feed the cat"
  var TODO_ITEM_THREE = "book a doctors appointment"

  beforeEach(function(){
    // Go out and visit our local running web
    // server before each test. This should be
    // running the TodoMVC App
    //
    // New commands used here:
    // https://on.cypress.io/api/visit
  })

  context("When page is initially opened", function(){
    it("should focus on the todo input field", function(){
      // get the currently focused element and assert
      // that it has class: "new-todo"
      //
      // New commands used here:
      // https://on.cypress.io/api/focused
      // https://on.cypress.io/api/should
      //
      // New concepts introduced:
      // https://on.cypress.io/guides/making-assertions
    })
  })

  context("No Todos", function(){
    it("should hide .main and .footer", function(){
      // New commands used here:
      // https://on.cypress.io/api/get
    })
  })

  context("New Todo", function(){
    // New commands used here:
    // - cy.type     https://on.cypress.io/api/type
    // - cy.eq       https://on.cypress.io/api/eq
    // - cy.find     https://on.cypress.io/api/find
    // - cy.contains https://on.cypress.io/api/contains
    // - cy.as       https://on.cypress.io/api/as

    it("should allow me to add todo items", function(){

    })

    it("should clear text input field when an item is added", function(){

    })

    it("should append new items to the bottom of the list", function(){

    })

    it("should trim text input", function(){

    })

    it("should show .main and .footer when items added", function(){

    })
  })

  context("Mark all as completed", function(){
    // New commands used here:
    // - cy.check    https://on.cypress.io/api/check
    // - cy.uncheck  https://on.cypress.io/api/uncheck

    // New concepts introduced:
    // - Aliasing    https://on.cypress.io/api/aliasing

    beforeEach(function(){
      // instead of manually re-creating the same todos
      // over and over again - we can extract this common
      // behavior into a custom command which acts like
      // a macro for performing a series of cypress commands
      //
      // check out cypress/support/commands.js to see what
      // we've already created for you.
      //
      // you can start using them now :-)
    })

    it("should allow me to mark all items as completed", function(){

    })

    it("should allow me to clear the complete state of all items", function(){

    })

    it("complete all checkbox should update state when items are completed / cleared", function(){

    })
  })

  context("Item", function(){
    // New commands used here:
    // - cy.clear    https://on.cypress.io/api/clear

    it("should allow me to mark items as complete", function(){

    })

    it("should allow me to un-mark items as complete", function(){

    })

    it("should allow me to edit an item", function(){

    })
  })

  context("Editing", function(){
    // New commands used here:
    // - cy.blur    https://on.cypress.io/api/blur

    beforeEach(function(){

    })

    it("should hide other controls when editing", function(){

    })

    it("should save edits on blur", function(){

    })

    it("should trim entered text", function(){

    })

    it("should remove the item if an empty text string was entered", function(){

    })

    it("should cancel edits on escape", function(){

    })
  })

  context("Counter", function(){
    it("should display the current number of todo items", function(){

    })
  })

  context("Clear completed button", function(){
    beforeEach(function(){

    })

    it("should display the correct text", function(){

    })

    it("should remove completed items when clicked", function(){

    })

    it("should be hidden when there are no items that are completed", function(){

    })
  })

  context("Persistence", function(){
    it("should persist its data", function(){

    })
  })

  context("Routing", function(){
    // New commands used here:
    // - cy.window  https://on.cypress.io/api/window
    // - cy.its     https://on.cypress.io/api/its
    // - cy.invoke  https://on.cypress.io/api/invoke
    // - cy.within  https://on.cypress.io/api/within

    beforeEach(function(){

    })

    it("should allow me to display active items", function(){

    })

    it("should respect the back button", function(){

    })

    it("should allow me to display completed items", function(){

    })

    it("should allow me to display all items", function(){

    })

    it("should highlight the currently applied filter", function(){

    })
  })


})