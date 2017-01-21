'use strict';
describe('Paciente', () => {
    it('Deve calcular o imc', () => {
        let jeftar = new Paciente('Jeftar', 30, 96, 1.76);

        expect(jeftar.imc()).toEqual(96 / (1.76 * 1.76));
    });
});