test("increments like count when like button is clicked", () => {
    render(<StudentConnect />);

    // Adding a profile
    const nameInput = screen.getByPlaceholderText(/enter name/i);
    const submitButton = screen.getByRole("button", { name: /add profile/i });

    fireEvent.change(nameInput, { target: { value: "Alice" } });
    fireEvent.click(submitButton);

    // Like button should exist and should be clickable
    const likeButton = screen.getByRole("button", { name: /like/i });
    const likeCount = screen.getByTestId("like-count");

    expect(likeCount).toHaveTextContent("0");

    fireEvent.click(likeButton);
    expect(likeCount).toHaveTextContent("1");
});