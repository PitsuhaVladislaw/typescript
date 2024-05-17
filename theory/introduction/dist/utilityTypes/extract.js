"use strict";
function displayMotorizedVehicles(vehicles) {
    vehicles.forEach(function (vehicle) {
        console.log("Motorized vehicle ".concat(vehicle));
    });
}
var motorizedList = ['Car', 'Motorcycle'];
displayMotorizedVehicles(motorizedList);
