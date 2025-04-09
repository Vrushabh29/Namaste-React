import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("Should run contact us",()=>{
    render(<Contact/>);
    const heading= screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
}
)

test("Should run  to check Button in contact us",()=>{
    render(<Contact/>);
    const button= screen.getByText("Submit");
    expect(button).toBeInTheDocument();
}
)

test("Should run  to check Placeholder in contact us",()=>{
    render(<Contact/>);
    const placeholder= screen.getByPlaceholderText("name");
    expect(placeholder).toBeInTheDocument();
}
)

test("Should run  2 input boxes contact us",()=>{
    render(<Contact/>);
    const mulInput= screen.getAllByRole("textbox");
    expect(mulInput.length).toBe(2);
}
)