'use strict';

/**
 * Module dependencies.
 */
var Pusher = require('pusher');

var pusher = new Pusher({
    appId: '93448',
    key: 'a395fe9917ab39b7b543',
    secret: 'f5d5379113f5db82a0dc'
});

module.exports = function (message,channel,e,c) {
    var event = e || 'chat_event';
    return pusher.trigger('ch_'+channel,event,message);
}
