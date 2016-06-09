"use strict";
var parties_1 = require('../collections/parties');
var meteor_1 = require('meteor/meteor');
function buildQuery(partyId) {
    var isAvailable = {
        $or: [
            { 'public': true },
            {
                $and: [
                    { owner: this.userId },
                    { owner: { $exists: true } }
                ]
            }
        ]
    };
    if (partyId) {
        return { $and: [{ _id: partyId }, isAvailable] };
    }
    return isAvailable;
}
meteor_1.Meteor.publish('parties', function () {
    return parties_1.Parties.find(buildQuery.call(this));
});
meteor_1.Meteor.publish('party', function (partyId) {
    return parties_1.Parties.find(buildQuery.call(this, partyId));
});
//# sourceMappingURL=parties.js.map