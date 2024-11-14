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
        const lampsOn = hours % 5;
        return 'R'.repeat(lampsOn).padEnd(4, '0');
    }
    getFiveHours(hours) {
        const lamps = ['0', '0', '0', '0'];
        const onLamps = Math.floor(hours / 5);
        if (onLamps >= 1) lamps[0] = 'R';
        
        
        
        return lamps.join('');
        
    }
    
}    
