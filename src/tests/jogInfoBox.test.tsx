import React from "react";
import { render, screen } from "@testing-library/react";
import { JogInfoBox } from "../components/jogsBox/components/jogInfoBox";

test("renders learn react link", () => {
  render(
    <JogInfoBox
      speed="12 kmh"
      date="12.12.2000"
      distance="10 km"
      time="100 min"
      onClick={() => {}}
    />
  );
  const linkElement = screen.getByText(/12 kmh/i);
  expect(linkElement).toBeInTheDocument();
});
