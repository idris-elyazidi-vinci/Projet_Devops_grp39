export class BerlinClock {

     getSingleMinutes(minutes) {
        const lampsOn = minutes % 5;
        return 'Y'.repeat(lampsOn).padEnd(4, '0');
    }
    getFiveMinutes(minutes) {
        const lampsOn = Math.floor(minutes / 5);
        let lamps = '';
        for (let i = 1; i <= 11; i++) {
            lamps += i <= lampsOn ? (i % 3 === 0 ? 'R' : 'Y') : '0';
        }
        return lamps;
    }
    getSingleHours(hours) {
        const lamps = ['0', '0', '0', '0'];
        if (hours % 5 >= 1) lamps[0] = 'R';
        if (hours % 5 >= 2) lamps[1] = 'R';
        if (hours % 5 >= 3) lamps[2] = 'R';
        return lamps.join('');
    }
    
}    
