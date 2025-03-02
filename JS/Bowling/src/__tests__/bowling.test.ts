import BowlingGame  from "../main" 

describe("BowlingGame", () => {
    test("perfect game (all strikes)", () => {
        const game = new BowlingGame("X X X X X X X X X X X X");
        expect(game.calculate()).toBe(300);
    });

    test("all open frames - no strikes or spares", () => {
        const game = new BowlingGame("9- 9- 9- 9- 9- 9- 9- 9- 9- 9-");
        expect(game.calculate()).toBe(90);
    });

    test("All spares with a 5 as the extra roll", () => {
        const game = new BowlingGame("5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5");
        expect(game.calculate()).toBe(150);
    });
    
    test("no throws - empty input", () => {
        const game = new BowlingGame("")
        expect (game.calculate()).toBe(0)
    })

    test("Zero score for all misses", () => {
        const game = new BowlingGame("-- -- -- -- -- -- -- -- -- --");
        expect(game.calculate()).toBe(0);
    });
});