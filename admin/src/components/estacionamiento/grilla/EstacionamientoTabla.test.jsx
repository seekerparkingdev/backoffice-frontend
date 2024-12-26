import React from "react";
import { MemoryRouter } from "react-router-dom";
import { EstacionamientoTabla } from "./EstacionamientoTabla";
import { getEstacionamiento } from "../../../services/ServiceEstacionamiento";

jest.mock("../../../services/ServiceEstacionamiento");

describe("EstacionamientoTabla Component", () => {
  beforeEach(() => {
    getEstacionamiento.mockResolvedValue([
      { id: 1, nombre: "Parking A", direccion: "Address A", duenio: "Owner A", codigo: "Code A" },
      { id: 2, nombre: "Parking B", direccion: "Address B", duenio: "Owner B", codigo: "Code B" },
    ]);
  });
});
