import { act, render } from "@testing-library/react"
import Body from "../Body"
import "@testing-library/jest-dom"
import Mock_data from '../Mocks/MockResto.json'
import { BrowserRouter } from "react-router-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            Promise.resolve(Mock_data)
        }
    })
})

test("Should render Body with Search button", async()=>{
    await  act(async()=>{  render(<BrowserRouter><Body/></BrowserRouter>)});
   

})