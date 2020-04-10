const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name:	"LUMA2",
            email: "luma2@hotmail.com",
            whatsapp: "41000000000",
            city: "Curitiba",
            uf: "PR"
        });
    
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
        
    });
});