export class BerlinClock {

    getSingleMinutes(minutes) {
    const lamps = ['0', '0', '0', '0'];
    if (minutes % 5 >= 1) lamps[0] = 'Y';
    if (minutes % 5 >= 2) lamps[1] = 'Y';
    if (minutes % 5 >= 3) lamps[2] = 'Y';
    if (minutes % 5 >= 4) lamps[3] = 'Y';
    return lamps.join('');
    
    }
}    
