// Come back and make this into Classes ??

class fChromosome {
    constructor (code) {
        this.code = Math.floor( (Math.random() - .5)*1000 )
        this.cost = 9999;       
    }
    random(length) {
        this.code = Math.floor( (Math.random() - .5)*1000 );
        console.log("<<<<<<<<<", this.code);
    }
    calcCost(compareTo) {
        // compareTo is a string of a function
        // of the form 3x3 2x 4
        // const f = eval(compareTo);
        let values = compareTo.split(' ');
        let total = 0;
        // console.log("??????????", f);
        // total = f(this.code);
        // for(let i = 0; i < this.code.length; i++) {
        //         total += (this.code.charCodeAt(i) - compareTo.charCodeAt(i)) * (this.code.charCodeAt(i) - compareTo.charCodeAt(i));
        // }
        let res = '';
        compareTo = function (x) {
            // console.log("??>?><L:MKNBVHJBKJHUBHVJ");
            // for (let i = 0; i < values.length; i++) {
            //     if (values[i].length === 1) {
            //         res += ' ' + values[i]
            //         console.log("11111111");
            //     } else {
            //         console.log(values);
            //         res += ' ' + values[i][0];
            //         for (let j = 0; j < values[i][2]; j++) {
            //             console.log("11113111");
            //             if (j = 0) {
            //                 res += 'x';
            //             } else {
            //                 res += '*x';
            //             }
            //             console.log("res, ", res)
            //         }
            //     }
            //     console.log("??>?><L:MKNBVHJBKJHUBHVJ");
            // }
            // console.log(">>>>>>", res);
            return 2*x*x - 8;
        }
        total = compareTo(this.code);
        console.log(this.code);
        console.log(">>>><<<<<>>>>", total);
        this.cost = total;
        // console.log("!!!!!!!!!!!!!!!!!!", this.cost);
    }
    mate(chromosome) {
        // const pivot = Math.round(this.code.length / 2) - 1;
        
        const child1 = (this.code + chromosome.code)/2;
        // // const child1 = this.code.substr(0, pivot) + chromosome.code.substr(pivot);
        // // const child2 = chromosome.code.substr(0, pivot) + this.code.substr(pivot);
        
        return [new fChromosome(child1), new fChromosome(child1)];
    }
    mutate(chance) {
        if (Math.random() > chance) {
            return;
        }
        console.log("Beg of mutate: ", this);

        const index = Math.floor(Math.random()*this.code.length);
        const upOrDown = Math.random() - .5;
        const newVal = (upOrDown > 0) ? this.code[index] + 1 : this.code[index] - 1;
        // const myArr = this.code.split('');
        if (typeof this.code !== 'object') {
            return;
        }
        console.log(">>>>>>>>>>>>", this.code);
        // this.code.splice(index, 1, newVal);
        // this.code = myArr.join('');
        // const rand1 = Math.floor( Math.random()*2 );
        const rand2 = Math.floor( Math.random()*2 );
        if (rand2) {
            this.code++;
        } else {
            this.code--;
        }
        console.log("End of mutate: ", this);
    }
};

export default fChromosome;