import { render, screen,cleanup } from '@testing-library/react';
import Button from '../Button'

it("render button", ()=> {
    render(<Button label="Remove"></Button>);
    const ButtonElement = screen.getByTestId("button");
    expect(ButtonElement).toBeInTheDocument();
})