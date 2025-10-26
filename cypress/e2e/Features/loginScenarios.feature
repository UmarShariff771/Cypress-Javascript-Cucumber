Feature: Logging in the application

  Scenario: Login using credentials
    Given the user is on the login page
    When the user enters the credentials
    And clicks on the login button
    Then the shop page should be navigated
