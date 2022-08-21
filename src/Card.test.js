import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";


// Smoke Test

it('should run without breaking', ()=>{
    render(<Card />)
})


// Snapshot Test

it('should match with stored snapshot', ()=>{
    const {asFragment} = render(<Card/>)
    expect(asFragment()).toMatchSnapshot()
})

