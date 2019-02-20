import fChromosome from './fChromosome';

class fPopulation {
    constructor(goal, quant, size) {
        this.members = [];
        this.goal = goal;
        this.quant = quant;
        this.generationNumber = 0;
        while (--size) {
                let chromosome = new fChromosome();
                chromosome.random(quant);
                this.members.push(chromosome);
        }
    }
    sort() {
        return this.members.sort((a, b) => a.cost - b.cost);
    }
    generation() {
        for (let i = 0; i < this.members.length; i++) {
            this.members[i].calcCost(this.goal);    
        }

        console.log("Mid of Pop: ", this);
        this.sort();
        // this.display();

        var children = this.members[0].mate(this.members[1]);
        this.members.splice(this.members.length - 2, 2, children[0], children[1]);

        for (var i = 0; i < this.members.length; i++) {
            this.members[i].mutate(0.5);
            this.members[i].calcCost(this.goal);
            if (this.members[i].cost === 0) { 
                alert(`x is equal to ${this.members[i].code}`);
                this.sort();
                //this.display();
                return true;
            }
        }
        this.generationNumber++;
        var scope = this;
        console.log("End of Pop: ", this);
        setTimeout(function() { scope.generation(); } , 20);
    }
};


export default fPopulation;