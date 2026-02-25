const base = require('@playwright/test');

exports.customerTestDate = base.test.extend({
    storateDataFixture: {

        emailAddress: "ks99adsa12s@abv.bg",
        passwrod: "242ik2D2@"
    }

})