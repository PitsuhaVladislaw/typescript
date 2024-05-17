/*
*/
function Generic(args) {
    return args;
}
Generic(1);
Generic('text');
var Channel = /** @class */ (function () {
    function Channel(name) {
        this.name = name;
    }
    Channel.prototype.getName = function () {
        return this.name;
    };
    return Channel;
}());
new Channel('Max');
new Channel(12344);
var entity = function (args) {
    return args;
};
var pair1 = {
    key: '1243',
    value: 2432
};
var pair2 = {
    key: 1243,
    value: 2432
};
function getNameLength(entity) {
    return entity.length;
}
getNameLength('fewlknfjdf');
getNameLength([0, 1, 2]);
//*Book
