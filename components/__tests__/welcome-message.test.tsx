import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useSession } from "next-auth/react";
import WelcomeMessage from "../welcome-message";

// Mock next-auth/react
jest.mock("next-auth/react");
const mockUseSession = useSession as jest.MockedFunction<typeof useSession>;

describe("WelcomeMessage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("muestra el nombre del usuario si está disponible", () => {
    mockUseSession.mockReturnValue({
      data: {
        user: {
          id: "1",
          firstName: "Emilia",
          lastName: "Test",
          email: "emilia@test.com",
          role: "user",
          emailVerified: null,
        },
        accessToken: "token",
        expires: "1",
      },
      status: "authenticated",
      update: jest.fn(),
    });

    render(<WelcomeMessage />);
    expect(screen.getByText(/¡Bienvenido, Emilia!/)).toBeInTheDocument();
  });

  it("muestra un saludo genérico si no hay nombre", () => {
    mockUseSession.mockReturnValue({
      data: null,
      status: "unauthenticated",
      update: jest.fn(),
    });

    render(<WelcomeMessage />);
    expect(screen.getByText(/¡Bienvenido al dashboard!/)).toBeInTheDocument();
  });
});
