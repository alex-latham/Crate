import React from "react";
import StylePreferences from "../StylePreferences";
import { MemoryRouter, Router } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { Provider } from "react-redux";
import { createStore, compose } from 'redux'
import { rootReducer } from '../../../setup/store'
import { createMemoryHistory } from 'history'

describe("StylePreferences", () => {

  it('Should', () => {

    const testWrapper = () => {
      const store = createStore(rootReducer, compose())
      const history = createMemoryHistory()
      return render(
      <Router history={history}>
        <Provider store={store}>
          <StylePreferences /> 
        </Provider>
      </Router>       
      )
    }
      const {getAllByRole} = testWrapper()

      const altText = getAllByRole('button')
      expect(altText).toHaveLength(16)
    
  })
})
