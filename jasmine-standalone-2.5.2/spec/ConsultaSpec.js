'use strict';
describe('Consulta', () => {
    it('Não deve cobrar se for retorno', () => {
        let jeftar = new Paciente('Jeftar', 30, 96, 1.76);
        let consulta = new Consulta(jeftar, ['raio-x'], true, true);
        expect(consulta.preco()).toEqual(0);
    });

    it('Deve cobrar o valor do precedimento raio-x', () => {
        let fulano = new Consulta('Fulano', ['raio-x'], false, false);
        expect(fulano.preco()).toEqual(55);
    });

    it('Deve cobrar o valor do precedimento se for gesso', () => {
        let ciclano = new Consulta('Ciclano', ['gesso'], false, false);
        expect(ciclano.preco()).toEqual(32)
    });

    it('Deve cobrar o preço normal',() => {
        let zezinho = new Consulta('Zezinho', ['exame admissional'], false, false);
        expect(zezinho.preco()).toEqual(25);
    });

    it('Deve cobrar o preço normal com acrescimo do plano particular', () => {
        let zezo = new Paciente('Zezo do gás', 30, 56, 1.70);
        let consultZezo = new Consulta(zezo, ['Exame de prostata'], true, false);

        expect(consultZezo.preco()).toEqual(50);
    });

    it('Deve cobar o valor do precedimento de raio-x elevado 2 se for particular', () => {
        let biu = new Consulta('Biu', ['raio-x'], true, false);
        expect(biu.preco()).toEqual(110);
    });

});