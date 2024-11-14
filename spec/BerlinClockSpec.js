
import { BerlinClock } from '../src/BerlinClock.js';

describe("Berlin Clock Tests", function() {
    let clock = new BerlinClock();

    it("should display the correct single minute", function() {
        expect(clock.getSingleMinutes(0)).toBe('0000');
        expect(clock.getSingleMinutes(1)).toBe('Y000');
        
        
    });
    
});
