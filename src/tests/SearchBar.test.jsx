// SearchBar.test.jsx
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

test("renders search bar and handles input", () => {
  const handleSearch = jest.fn();
  render(<SearchBar searchTerm="" handleSearch={handleSearch} />);

  const input = screen.getByPlaceholderText("Search by title");
  fireEvent.change(input, { target: { value: "test" } });

  expect(input).toBeTruthy();
  expect(handleSearch).toHaveBeenCalledTimes(1);
});
