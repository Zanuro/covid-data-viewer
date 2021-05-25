var date = new Date();
var dd = String(date.getDate() -1).padStart(2, '0');
var dd_prev = String(date.getDate() -2).padStart(2, '0');

var mm = String(date.getMonth() + 1).padStart(2, '0');
var yyyy = date.getFullYear();

var today = mm + '-' + dd + '-' + yyyy;
var prev = mm + '-' + dd_prev + '-' + yyyy;

exports.today = today;
exports.prev = prev;