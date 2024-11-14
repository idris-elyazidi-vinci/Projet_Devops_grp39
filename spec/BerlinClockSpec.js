
import { BerlinClock } from '../src/BerlinClock.js';

describe("Berlin Clock Tests", function() {
    let clock = new BerlinClock();

    it("should display the correct single minute", function() {
        expect(clock.getSingleMinutes(0)).toBe('0000');
        expect(clock.getSingleMinutes(1)).toBe('Y000');
        expect(clock.getSingleMinutes(4)).toBe('YYYY');
        expect(clock.getSingleMinutes(5)).toBe('0000');
        
        
    });
    it("should display the correct five minute", function() {
        expect(clock.getFiveMinutes(0)).toBe('00000000000');
        expect(clock.getFiveMinutes(5)).toBe('Y0000000000');
        expect(clock.getFiveMinutes(15)).toBe('YYR00000000');
        expect(clock.getFiveMinutes(59)).toBe('YYRYYRYYRYY');
    });
    it("should display the correct single hour", function() {
        expect(clock.getSingleHours(0)).toBe('0000');
    });
});
