import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../components/Pagination";

describe("Pagination Component", () => {
  it("renders pagination links and handles click", () => {
    const paginate = jest.fn();
    const postsPerPage = 10;
    const totalPosts = 25;

    render(
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        paginate={paginate}
      />
    );

    const pageLinks = screen.getAllByRole("link");
    expect(pageLinks.length).toBe(3);

    fireEvent.click(pageLinks[1]);
    expect(paginate).toHaveBeenCalledWith(2);
  });
});
