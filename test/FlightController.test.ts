import bootstrap from '../src/index';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';
import { Flight } from '../src/entity/Flight';

chai.use(chaiHttp);
const expect = chai.expect;

describe('FlightController API', () => {
    let app: any; // is this okay?
    let flights: Flight[] = [];

    before(async () => {
        app = await bootstrap()
        .then((resolve) => {
            return resolve;
        });
    });

    it('should return healthy status', async () => {
        return await chai.request(app).get('/')
        .then((result) => {
            expect(result).to.have.status(200);
            expect(result).to.be.json;
            expect(result.body).to.be.a('object');
            expect(result.body).to.have.property("message", "I'm alive!");
        });
    });

    it('should get more than one flight', async  () => {
        // get all the flights
        flights = await chai.request(app).get('/flight')
        .then((result) => {
            expect(result).to.have.status(200);
            expect(result).to.be.json;
            expect(result.body).to.be.a('array');
            expect(result.body).to.have.lengthOf.above(1);
            return result.body
        });
    })

    it('should return array based on a flight path', async () => {
        // search by that ones src and dest airport codes
        return await chai.request(app).get(`/flight/${flights[0].flightPath.srcAirport.airportCode}/to/${flights[0].flightPath.destAirport.airportCode}`)
        .then((result) => {
            expect(result).to.have.status(200);
            expect(result).to.be.json;
            expect(result.body).to.be.a('array');
            expect(result.body).to.have.lengthOf.above(1);
            expect(result.body[0]).to.deep.equal(flights[0]); // the first result should be that same flight
        });
    });
});
