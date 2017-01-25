'use strict';
describe('Paciente', () => {
    it('Deve calcular o imc', () => {
        let jeftar = new Paciente('Jeftar', 30, 96, 1.76);

        expect(jeftar.imc()).toEqual(96 / (1.76 * 1.76));
    });

    it('Deve saber a quantidade de batimentos de acordo com sua idade', () => {
        let filipe = new Paciente('Filipe', 29, 86, 1.65);

        expect(filipe.batimentos()).toEqual(1189324800);
    });
});