const Alt = require('alt');
const makeFinalStore = require('alt-utils/lib/makeFinalStore');

class Flux extends Alt {
    constructor(config) {
        super(config);

        this.FinalStore = makeFinalStore(this);
    }
}

const Flux = new Flux();

module.exports = Flux;