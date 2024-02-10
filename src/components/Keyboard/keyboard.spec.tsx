import {Keyboard} from ".";
import {screen, render} from "@testing-library/react";

describe("Keyboard test", () => {
  it("Keyboard should renders", () => {
    render(<Keyboard onKeyPressed={() => {}} />);
    const component = screen.getByTestId("keyboard");
    expect(component).toBeInTheDocument();
  });

  it("Keyboard should have 26 keys", () => {
    render(<Keyboard onKeyPressed={() => {}} />);
    const keys = screen.getAllByRole("button");
    expect(keys).toHaveLength(26);
  });
});
