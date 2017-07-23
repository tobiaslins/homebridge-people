var ping = require ("net-ping");
var session = ping.createSession ();

var target = "6C:72:E7:24:13:AC";

session.pingHost (target, function (error, target, sent, rcvd) {
    var ms = rcvd - sent;
    if (error)
        console.log (target + ": " + error.toString ());
    else
        console.log (target + ": Alive (ms=" + ms + ")");
});
