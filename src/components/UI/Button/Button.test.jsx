import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("renders text", () => {
    render(<Button />);

    const htmlSeeUs = screen.getByText("Hello World!", { exact: false });
    expect(htmlSeeUs).toBeInTheDocument();
  });
});
