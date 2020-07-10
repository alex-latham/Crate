import React from "react";
import Item from "../Item";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { Provider } from "react-redux";

describe("Item", () => {

  it('Should', () => {
    const crate = {
      createdAt: "1593470789289",
      description: "A monthly supply of trendy clothes and accessories for women",
      id: 6,
      name: "Clothes and Accessories for Women",
      updatedAt: "1593470789289",
    }

    const user = { 
      details: {
      email: "user@crate.com",
      name: "The User",
      role: "USER",
      },
      error: null,
      isAuthenticated: true,
      isLoading: false,
    }

    const message1 = jest.fn()
    const message2 = jest.fn()

    const { getByAltText } = render(
      <Provider>
          
          <Item
            key={Math.floor(Math.random() * 10000000) + 1} 
            crate={crate} 
            user={user} 
            messageShow={message1} 
            messageHide={message2}/>        
          </Provider>

      )
  
      const altText = getByAltText("Clothes and Accessories for Women")
      expect(altText).toBeInTheDocument()
    
  })
})
