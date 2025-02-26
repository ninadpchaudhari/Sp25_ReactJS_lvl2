test("deletes a profile when delete button is clicked", () => {
    render(<StudentConnect />);
  
    // Adding a profile first
    const nameInput = screen.getByPlaceholderText(/enter name/i);
    const submitButton = screen.getByRole("button", { name: /add profile/i });

    fireEvent.change(nameInput, { target: { value: "Jane Doe" } });
    fireEvent.click(submitButton);

    // Delete the profile
    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Jane Doe")).not.toBeInTheDocument();
});