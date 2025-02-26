test("prevents submission of empty names", () => {
    render(<StudentConnect />);

    const submitButton = screen.getByRole("button", { name: /add profile/i });

    fireEvent.click(submitButton);

    expect(screen.queryByText(/profile added/i)).not.toBeInTheDocument();
});