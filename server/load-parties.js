"use strict";
var parties_ts_1 = require('../collections/parties.ts');
function loadParties() {
    if (parties_ts_1.Parties.find().count() === 0) {
        var parties = [
            { 'name': 'Spaghetti-Free Zone',
                'description': 'No spaghetti here',
                'location': 'Palo Alto',
                'public': true
            },
            { 'name': 'SpaghettiFest',
                'description': 'Spaaaaaaaaaaghetti!',
                'location': 'Palo Alto',
                'public': true
            },
            { 'name': 'NoodleFest',
                'description': 'noodlenoodlenoodlenoodle',
                'location': 'San Francisco',
                'public': false
            }
        ];
        for (var i = 0; i < parties.length; i++) {
            parties_ts_1.Parties.insert(parties[i]);
        }
        for (var i = 0; i < 27; i++) {
            parties_ts_1.Parties.insert({
                name: Fake.sentence(50),
                location: Fake.sentence(10),
                description: Fake.sentence(100),
                public: true
            });
        }
    }
}
exports.loadParties = loadParties;
//# sourceMappingURL=load-parties.js.map