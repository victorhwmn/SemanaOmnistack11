const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID',() => {
    it('should generate an unique ID ', () => {
        const Id = generateUniqueId();
        
        expect(Id).toHaveLength(8);
    });
});

