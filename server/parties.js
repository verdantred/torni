"use strict";
var parties_1 = require('../collections/parties');
var meteor_1 = require('meteor/meteor');
var tmeasday_publish_counts_1 = require('meteor/tmeasday:publish-counts');
function buildQuery(partyId, location) {
    var isAvailable = {
        $or: [
            { public: true },
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
    var searchRegEx = { '$regex': '.*' + (location || '') + '.*', '$options': 'i' };
    return { $and: [{ location: searchRegEx }, isAvailable] };
}
meteor_1.Meteor.publish('parties', function (options, location) {
    tmeasday_publish_counts_1.Counts.publish(this, 'numberOfParties', parties_1.Parties.find(buildQuery.call(this, null, location)), { noReady: true });
    return parties_1.Parties.find(buildQuery.call(this, null, location), options);
});
meteor_1.Meteor.publish('party', function (partyId) {
    return parties_1.Parties.find(buildQuery.call(this, partyId));
});
//# sourceMappingURL=parties.js.map