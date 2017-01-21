'use sctric';

    class MaiorEmenor {

        constructor(){
            this.maior;
            this.menor
        }

        encontra (nums) {

            this.maior = Number.MIN_VALUE;
            this.menor = Number.MAX_VALUE;


            nums.forEach( num => {
                if(num > this.maior) this.maior = num;

                if(num < this.menor) this.menor = num;

            });
        }

        pegaMaior () { return this.maior; }
        pegaMenor () { return this.menor; }


}

// let algoritmo = new MaiorEmenor();
// algoritmo.encontra([5, 15, 7, 9]);
// console.log(algoritmo.pegaMaior());


