import supertest from "supertest";
import mongoose from "mongoose";
import app from "../app";

describe("Pruebas para creación de ruletas", () => {

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("Debería crear una ruleta correctamente", async () => {

    const response = await supertest(app).post("/ruleta").send({
      name: "Ruleta 1"
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("ruleta");
    expect(response.body.ruleta).toHaveProperty("_id");
  });

});

