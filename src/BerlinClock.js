export class BerlinClock {

    getSingleMinutes(minutes) {
    const lamps = ['0', '0', '0', '0'];
    if (minutes % 5 >= 1) lamps[0] = 'Y';
    return lamps.join('');
    
    }
}    
