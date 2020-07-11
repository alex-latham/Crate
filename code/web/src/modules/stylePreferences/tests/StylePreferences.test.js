import React from "react";
import { StylePreferences } from "../StylePreferences";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/";
// import { Provider } from "react-redux";

describe("StylePreferences", () => {

  it('Should', () => {

    const { getAllByRole } = render(
        <MemoryRouter>
          <StylePreferences /> 
        </MemoryRouter>       
      )
  
      const altText = getAllByRole('button')
      expect(altText).toHaveLength(16)
    
  })
})
