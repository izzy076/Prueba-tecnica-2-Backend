import supertest from "supertest";
import mongoose from "mongoose";
import app from "../app";
import { rouletteModel } from "../src/models/roulette.model";

describe("Pruebas para una apuesta", () => {

  let ruletaAbierta;

  beforeEach(async () => {
    await rouletteModel.deleteMany({});

    ruletaAbierta = await rouletteModel.create({
      name: "Ruleta test",
      status: "open"
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("Debería permitir hacer una apuesta en una ruleta que este abierta", async () => {

    const response = await supertest(app).post("/apuesta").send({
      monto: 5000,
      numero: 17,
      idRuleta: ruletaAbierta._id
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("mensaje");
  });

});