import { render, screen } from "@testing-library/react"
import RestoCard from "../RestoCard"
import MOCK_DATA from '../Mocks/RestoMock.json'
import "@testing-library/jest-dom"

test("should run Restocard",()=>{
    render(<RestoCard restData={MOCK_DATA}/>)
    const name=screen.getByText("Chinese Wok");
    expect(name).toBeInTheDocument()

})