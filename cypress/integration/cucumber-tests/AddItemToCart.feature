Feature: Add Box to the cart

        Scenario Outline: Open Smartbox site and add item to cart

                Given User is on the Smartbox home page
                And User clicks see more Pamper treats button
                When User adds item to the cart
                And User Verifies '<quantity>' '<item>' is in the cart window at price '<price>'
                Then go to cart
                Then validate the cart details '<item>' '<description>' '<quantity>' '<price>'
                Examples:
                        | item          | description                                 | quantity | price |
                        | Pamper Treats | 1 spa or beauty treatment for 1 or 2 people | 1        | 29.00 |
