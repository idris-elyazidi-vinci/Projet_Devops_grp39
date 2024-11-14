export class BerlinClock {

     getSingleMinutes(minutes) {
        const lampsOn = minutes % 5;
        return 'Y'.repeat(lampsOn).padEnd(4, '0');
    }
    getFiveMinutes(minutes) {
        const lamps = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];
        const onLamps = Math.floor(minutes / 5);
        if (onLamps >= 1) lamps[0] = 'Y';
        if (onLamps >= 2) lamps[1] = 'Y';

        return lamps.join('');
    }
    
}    
