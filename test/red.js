const request = require('supertest');
import { expect } from 'chai';
const BASE_URL = "https://gorest.co.in/public/v2";
const TOKEN = "0f3010d6bc84bc8fec44a9f27771575e8c8b36b326eb68eda2b6c47629fb07c7";

describe("API Test Automation Using supertest",()=>{

    it("Test GET Request",()=>{
        request(BASE_URL)
            .get('/users/100')
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((err, responce) =>{
                console.log(responce.body);
                expect(responce.statusCode).to.be.equal(200);            
         });
    });
});    