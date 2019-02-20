import Chromosome from './Chromosome';

class Population {
    constructor(goal, size) {
        this.members = [];
        this.goal = goal;
        this.generationNumber = 0;
        while (size--) {
                let chromosome = new Chromosome();
                chromosome.random(this.goal.length);
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
                if (this.members[i].code === this.goal) { 
                        this.sort();
                        //this.display();
                        alert(`Hello ${this.goal}!`);
                        return this.goal;
                }
        }
        this.generationNumber++;
        var scope = this;
        console.log("End of Pop: ", this);
        setTimeout(function() { scope.generation(); } , 20);
    }
};


export default Population;