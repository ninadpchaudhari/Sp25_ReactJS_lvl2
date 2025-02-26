import { render, screen, fireEvent } from "@testing-library/react";
import StudentConnect from "../StudentConnect"; // Adjust the import based on file structure

test("allows users to add a new profile", () => {
    render(<StudentConnect />);
  
    const nameInput = screen.getByPlaceholderText(/enter name/i);
    const submitButton = screen.getByRole("button", { name: /add profile/i });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.click(submitButton);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
});