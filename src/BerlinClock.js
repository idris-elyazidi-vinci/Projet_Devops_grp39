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
        if (onLamps >= 3) lamps[2] = 'R';
        if (onLamps >= 4) lamps[3] = 'Y';
        if (onLamps >= 5) lamps[4] = 'Y';
        if (onLamps >= 6) lamps[5] = 'R';
        if (onLamps >= 7) lamps[6] = 'Y';
        if (onLamps >= 8) lamps[7] = 'Y';
        if (onLamps >= 9) lamps[8] = 'R';
        if (onLamps >= 10) lamps[9] = 'Y';
        return lamps.join('');
    }
    
}    
