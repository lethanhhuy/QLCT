import React, { Platform } from 'react-native';
import _ from 'underscore';

module.exports = function (scene) {
    var componentMap = {
        'HomePage': {
            title: 'HomePage',
            id: 'HomePage'
        },
        'ProfilePage': {
            title: 'ProfilePage',
            id: 'ProfilePage'
        }
    }

    return componentMap[scene];
}
