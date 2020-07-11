// import React from "react";
// import { Item } from "../Item";
// import { MemoryRouter } from "react-router-dom";
// import { render } from "@testing-library/react";
// import "@testing-library/jest-dom/";
// import { Provider } from "react-redux";

// describe("Item", () => {

//   it('Should', () => {
//     const crates = {
//       createdAt: "1593470789289",
//       description: "A monthly supply of trendy clothes and accessories for women",
//       id: 6,
//       name: "Clothes and Accessories for Women",
//       updatedAt: "1593470789289",
//     }

//     const users = { 
//       details: {
//       email: "user@crate.com",
//       name: "The User",
//       role: "USER",
//       },
//       error: null,
//       isAuthenticated: true,
//       isLoading: false,
//     }

//     const message1 = jest.fn()
//     const message2 = jest.fn()

//     const { getByAltText } = render(
//       <Provider>
//         <MemoryRouter>
//           <Item
//             crate={crates} 
//             user={users} 
//             messageShow={message1} 
//             messageHide={message2}/> 
//         </MemoryRouter>
//         </Provider>       
//       )
  
//       const altText = getByAltText("Clothes and Accessories for Women")
//       expect(altText).toBeInTheDocument()
    
//   })
// })
