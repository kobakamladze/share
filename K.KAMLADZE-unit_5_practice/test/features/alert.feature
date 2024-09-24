Feature: Alert Tests

Scenario: I call and accept alert
  Given I am on the 'JavaScript Alerts' page
  When I open js alert
  And I accept alert
  Then I should see message 'You successfully clicked an alert'