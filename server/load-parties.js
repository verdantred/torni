"use strict";
var parties_ts_1 = require('../collections/parties.ts');
function loadParties() {
    if (parties_ts_1.Parties.find().count() === 0) {
        var parties = [
            { 'name': 'Spaghetti-Free Zone',
                'description': 'No spaghetti here',
                'location': 'Palo Alto'
            },
            { 'name': 'SpaghettiFest',
                'description': 'Spaaaaaaaaaaghetti!',
                'location': 'Palo Alto'
            },
            { 'name': 'NoodleFest',
                'description': 'noodlenoodlenoodlenoodle',
                'location': 'San Francisco'
            }
        ];
        for (var i = 0; i < parties.length; i++) {
            parties_ts_1.Parties.insert(parties[i]);
        }
    }
}
exports.loadParties = loadParties;
//# sourceMappingURL=load-parties.js.map