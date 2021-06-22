describe('Payment package tests', () => {
    let instance = undefined;
    // beforeEach(()=> {
    //     instance = new PaymentPackage ('Name', 100);
    // })
    it('constructor', () => {
        let instance = new PaymentPackage('Name', 100);
        assert.equal(instance._name, 'Name');
        assert.equal(instance._value, 100);
        assert.equal(instance._VAT, 20);
        assert.equal(instance._active, true);
    });

    it('name', () => {
        let instance = new PaymentPackage('Name', 100);
        assert.equal(instance.name, 'Name');


        instance.name = 'Pesho';

        assert.equal(instance.name, 'Pesho');
        assert.throw(() => { instance.name = '' }, 'Name must be a non-empty string');
        assert.throw(() => { instance.name = 2 }, 'Name must be a non-empty string');

    });

    it('VAT', () => {
        let instance = new PaymentPackage('Name', 100);
        assert.equal(instance.VAT, 20);


        instance.VAT = 40;

        assert.equal(instance.VAT, 40);
        assert.throw(() => { instance.VAT = -2 }, 'VAT must be a non-negative number');
        assert.throw(() => { instance.VAT = '2' }, 'VAT must be a non-negative number');
        assert.throw(() => { instance.VAT = 'asdasda' }, 'VAT must be a non-negative number');
        assert.throw(() => { instance.VAT = undefined }, 'VAT must be a non-negative number');
    });
    it('value', () => {
        let instance = new PaymentPackage('Name', 100);
        assert.equal(instance.value, 100);


        instance.value = 40;

        assert.equal(instance.value, 40);
        assert.throw(() => { instance.value = -2 }, 'Value must be a non-negative number');
        assert.throw(() => { instance.value = '2' }, 'Value must be a non-negative number');
        assert.doesNotThrow(() => instance.value = 0);
    });

    it('active', () => {
        let instance = new PaymentPackage('Name', 100);
        assert.equal(instance.active, true);


        instance.active = false;

        assert.isFalse(instance.active);
        assert.throw(() => { instance.active = -2 }, 'Active status must be a boolean');
        assert.throw(() => { instance.active = '2' }, 'Active status must be a boolean');
    });

    it('toString', () => {
        function getString(name, value, active = true, VAT = 20) {
            return [
                `Package: ${name}` + (active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${value}`,
                `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`
            ].join("\n");
        }
        let instance = new PaymentPackage('Name', 100);



        assert.equal(instance.toString(), getString("Name", 100));
        instance.active = false;
        assert.equal(instance.toString(), getString("Name", 100, false, 20));
        instance.VAT = 100;
        assert.equal(instance.toString(), getString("Name", 100, false, 100));
        instance.name = 'Gosho';
        assert.equal(instance.toString(), getString("Gosho", 100, false, 100));
        instance.value = 2;
        assert.equal(instance.toString(), getString("Gosho", 2, false, 100));

    });
})