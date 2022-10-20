import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormPage from "./FormPage";

describe("FormPage", () => {
  test("renders App component", () => {
    render(<FormPage />);
    // screen.debug();
    expect(screen.getByText("Formulir Buku Baru Test")).toBeInTheDocument();
    expect(screen.getByText(/Judul/)).toBeInTheDocument();
    expect(screen.getByText(/Pengarang/)).toBeInTheDocument();
  });
  //event
  test("Input Text Testing", () => {
    render(<FormPage />);
    // screen.debug();
    fireEvent.input(screen.getByRole("textbox", { name: /judul/i }), {
      target: { value: "Buku Hebat" },
    });
    // fireEvent.input(screen.getByRole("textbox", { name: /pengarang/i }), {
    //   target: { value: "Pengarang Kampus Merdeka" },
    // });
    // expect(screen.getByText("Buku Hebat")).toBeInTheDocument();
    // expect(screen.getByText(/Pengarang Kampus Merdeka/)).toBeInTheDocument();
  });
});
