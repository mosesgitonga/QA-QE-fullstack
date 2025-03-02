class BowlingGame {
    private readonly FRAMES: number = 10
    private rolls: number[];

    constructor(rolls: string) {
        this.rolls = this.parseRolls(rolls);
    }

    private parseRolls(input: string): number[] {
        // if (input ===  null) {
        //     return []
        // }
        //const sanitized = input.replace(' ', '')
        const sanitized = input.replace(/\s+/g, "").replace(/\+/g, '')
        const rolls: number[] = []
        //const count: number = 0

        for (let i = 0; i < sanitized.length; i++) {
            const roll = sanitized[i]
            
            switch (roll) {
                case 'X': rolls.push(10); break
                case '/': if (rolls.length > 0) rolls.push(10 - rolls[rolls.length - 1]); break
                case '-': rolls.push(0); break
                default: rolls.push(parseInt(roll, 10)); break
            }
        }

        return rolls 
    }

    public calculate(): number {
        let SCORE = 0
        let rollIndex = 0
        let frame = 0

        for (; frame < this.FRAMES; frame++) {
            if (rollIndex >= this.rolls.length) break;
            const first_roll = this.rolls[rollIndex] || 0
            const sec_roll = this.rolls[rollIndex + 1] || 0
            //console.log(sec_roll)
            const next_roll = this.rolls[rollIndex + 2] || 0
            if (first_roll === 10) {
                SCORE += 10 + sec_roll + next_roll
                rollIndex += 1   
                //console.log(SCORE)   
            } else if (first_roll + sec_roll === 10){
                SCORE+= 10 + next_roll
                rollIndex +=  2

            } else {
                SCORE += first_roll + sec_roll 
                rollIndex += 2

            }
        }
        // console.log(SCORE)
        return SCORE 
    }


}

export default BowlingGame;

