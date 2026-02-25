import { test as baseTest } from '@playwright/test'
interface TestDateType {
    emailAddress: string;
    passwrod: string;
};
export const  customerTestDate = baseTest.extend<{storateDataFixture:TestDateType}>({

    storateDataFixture: {

        emailAddress: "dadada@abv.bg",
        passwrod: "12345@As"
    }

})