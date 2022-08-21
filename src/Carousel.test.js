import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);
  

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});


it("should work when left arrow is clicked", ()=>{
  const {queryByTestId, queryByAltText} = render(<Carousel/>);

  //expect the second image to be in the DOM.
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();

  const leftArrow = queryByTestId("left-arrow");
  const rightArrow = queryByTestId("right-arrow");

  fireEvent.click(rightArrow)
  fireEvent.click(rightArrow)

  // expect third photo is shown
  expect(queryByAltText("Photo by Josh Post on Unsplash")).toBeInTheDocument();


  fireEvent.click(leftArrow);

  //expect the second image is show after clicking the left arrow
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Josh Post on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();

})

it('should arrows disapear when img array exhausts on either side', ()=>{
  const { queryByTestId, debug} = render(<Carousel />)
  const leftArrow = queryByTestId('left-arrow')
  const rightArrow = queryByTestId('right-arrow')

  //expect only the left arrow has class = hidden
  // debug()
  expect(leftArrow).toHaveClass('hidden')
  expect(rightArrow).not.toHaveClass('hidden')

  //expect both arrows don't have class=hidden
  fireEvent.click(rightArrow)
  expect(leftArrow).not.toHaveClass('hidden')
  expect(rightArrow).not.toHaveClass('hidden')

// expects only the right arrow is hidden
  fireEvent.click(rightArrow)
  expect(leftArrow).not.toHaveClass('hidden')
  expect(rightArrow).toHaveClass('hidden')

})


