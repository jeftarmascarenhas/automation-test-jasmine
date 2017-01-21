'use strict';

describe('maiorEMenor', () => {
    
    it('Deve entender número em ordem sequencial', () => {

        let algoritmo = new MaiorEmenor();
        algoritmo.encontra([5, 15, 7, 9]);

        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    it('Deve entender números em ordem crescente', () =>{

        let algoritmoCres =  new MaiorEmenor();
        algoritmoCres.encontra([4,5,6,7]);

        expect(algoritmoCres.pegaMaior()).toEqual(7);
        expect(algoritmoCres.pegaMenor()).toEqual(4);
    });

    it('Deve entender números em ordem decrescente', () => {
        let algoritmoDesc =  new MaiorEmenor();
        algoritmoDesc.encontra([8, 7, 6, 5]);

        expect(algoritmoDesc.pegaMaior()).toEqual(8);
        expect(algoritmoDesc.pegaMenor()).toEqual(5);
    });
    
});

