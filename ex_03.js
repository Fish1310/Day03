function fillBus(peopleAtBusStops, busSeats) {
    if (!Array.isArray(peopleAtBusStops) || typeof busSeats !== 'number' || busSeats <= 0) {
        return -1;
    }

    let totalPeopleOnBus = 0; 

    for (let stopIndex in peopleAtBusStops) {
        let peopleAtCurrentStop = peopleAtBusStops[stopIndex];
        totalPeopleOnBus += peopleAtCurrentStop;  

        if (totalPeopleOnBus >= busSeats) {
            return parseInt(stopIndex);  
        }
    }

    return -1;
}

console.log(fillBus([1, 3, 10, 11, 12], 12)); 
