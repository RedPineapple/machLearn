// Come back and make this into Classes ??

class Chromosome {
    constructor (code) {
        if (code)
                this.code = code;
        this.cost = 9999;       
    }
    random(length) {
        this.code = '';
        while (length--) {
            this.code += String.fromCharCode( Math.floor( Math.random()*255 ) );
        }
    }
    calcCost(compareTo) {
        let total = 0;
        for(let i = 0; i < this.code.length; i++) {
                total += (this.code.charCodeAt(i) - compareTo.charCodeAt(i)) * (this.code.charCodeAt(i) - compareTo.charCodeAt(i));
        }
        this.cost = total;

    }
    mate(chromosome) {
        const pivot = Math.round(this.code.length / 2) - 1;
        
        const child1 = this.code.substr(0, pivot) + chromosome.code.substr(pivot);
        const child2 = chromosome.code.substr(0, pivot) + this.code.substr(pivot);
        
        return [new Chromosome(child1), new Chromosome(child2)];
    }
    mutate(chance) {
        if (Math.random() > chance) {
            return;
        }
        console.log("Beg of mutate: ", this);

        const index = Math.floor(Math.random()*this.code.length);
        const upOrDown = Math.random() - .5;
        const newChar = (upOrDown > 0) ? this.code.charCodeAt(index) + 1 : this.code.charCodeAt(index) - 1;
        const myArr = this.code.split('');
        myArr.splice(index, 1, String.fromCharCode(newChar));
        this.code = myArr.join('');
        console.log("End of mutate: ", this);
    }
};

export default Chromosome;