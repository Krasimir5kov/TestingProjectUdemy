Feature: Ecommerce validation
    @Regression
    Scenario: Placing the order
        Given a login to Eccomerce app with "dadada@abv.bg" and "12345@As"
        When add "ZARA COAT 3" to cart
        Then Verify "ZARA COAT 3" is displayed in the cart page
        When Enter valida data "Bu" and "Bulgaria" and place the order
        Then Verify order is presented in order history

    @Validation
    Scenario Outline: Verify Error Login Message
        Given a login to Eccomerce2 app with "<Email>" and "<Password>"
        Then Verify Error message

        Examples:
            | Email         | Password |
            | dadada@abv.bg | 12352    |
            | nenene@abc.bg | dadasd   |