import { fireEvent, render, screen } from "@testing-library/react"
import Header from '../Header'
import { Provider } from "react-redux";
import {appStore} from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
test("should run Header to compomrnt",()=>{
    render(<BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>);

    const searchBtn= screen.getByRole("button",{name:"search"});
    const searchInput= screen.getByTestId("searchInput");


    fireEvent.change(searchInput,{target:{value:"burger"}});
    fireEvent.click(searchBtn)
    expect(cards.length ).toBe(4);
    })
    // const button= screen.getByText("login");
    //     


