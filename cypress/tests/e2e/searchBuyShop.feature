Feature: Searching for and purchasing a product on an online store, and validating the purchase

Scenario: Searching for and purchasing a product

  Given the user is on the online store's website
  When the user searches for a product
  And the user selects the product and adds it to the cart
  And the user proceeds to the checkout and makes a payment
  Then the user should receive a confirmation of the purchase

Scenario: Validating the purchase

  Given the user has purchased an item on the online store
  When the user checks the list of purchased items
  And the user selects the purchased item to check the purchase details
  Then the user should see the correct purchase details and order status