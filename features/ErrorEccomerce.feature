Feature: Ecommerce2 Error Login
    
    @Validation
    Scenario Outline: Verify Error Login Message
        Given a login to Eccomerce2 app with "<Email>" and "<Password>"
        Then Verify Error message

        Examples:
            | Email         | Password |
            | dadada@abv.bg | 12352    |
            | nenene@abc.bg | dadasd   |

