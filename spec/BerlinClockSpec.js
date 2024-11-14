
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
        expect(clock.getSingleHours(2)).toBe('RR00');
        expect(clock.getSingleHours(23)).toBe('RRR0');
        expect(clock.getSingleHours(4)).toBe('RRRR');
    });
    it("should display the correct five hour ", function() {
        expect(clock.getFiveHours(0)).toBe('0000');
        expect(clock.getFiveHours(5)).toBe('R000');
        expect(clock.getFiveHours(13)).toBe('RR00');
        expect(clock.getFiveHours(23)).toBe('RRRR');
    });
    it("should return 'Y' for even seconds", function() {
        expect(clock.getSecondsLamp(0)).toBe('R');
        expect(clock.getSecondsLamp(2)).toBe('R');
        expect(clock.getSecondsLamp(1)).toBe('0');
    });
    it('should return correct output for 15:53:00', () => {
        const clock = new BerlinClock();
        expect(clock.berlinClock(15, 53, 0)).toEqual([
            "R",            // Seconds - lampe jaune (secondes paires)
            "RRR0",         // Five hours - 4 lampes rouges pour 4 x 5 heures = 20 heures
            "0000",         // Single hours - 0 lampe rouge pour l'heure restant
            "YYRYYRYYRY0",  // Five minutes - 9 lampes (8 jaunes et 3 rouges pour 5, 10, 15 minutes)
            "YYY0"          // Single minutes - 3 lampes jaunes pour les minutes restantes
        ]);
    });
});
