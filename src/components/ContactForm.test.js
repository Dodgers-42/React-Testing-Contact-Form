import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm";


test("ContactForm renders without crashing", () => {
    render(<ContactForm />);
});

test("contains Lions and Tigers scoreboards", () => {
    // Arrange: render stuff
    const { getByText } = render(<ContactForm />);
    // Act: query to find the two name lengths
    getByText(/firstName/i);
    getByText(/lastName/i);
    // Assertion is if ^^^ are both truthy
    // getByText ensures that there is only one matching element on the page
  });
  
  test("was First Name effected button", () => {
    // Arrange
    const { getByTestId } = render(<ContactForm />);
  
    // Act
    const firstName = getByTestId(/firstName/i);
    console.log(firstName.textContent);
  
    // Assert
    expect(firstName.textContent).toEqual("Correct Amount letters");
  });
  
  test("was Last Name effected button", () => {
    // Arrange
    const { getByTestId } = render(<ContactForm />);
  
    // Act
    const lastName = getByTestId(/lastName/i);
    console.log(lastName.textContent);
  
    // Assert
    expect(lastName.textContent).toEqual("Correct Amount letters");
  });

  test("was Eamil effected button", () => {
    // Arrange
    const { getByTestId } = render(<ContactForm />);
  
    // Act
    const email = getByTestId(/email/i);
    console.log(email.textContent);
  
    // Assert
    expect(email.textContent).toEqual("Correct Amount letters");
  });

  test("was Last Name effected button", () => {
    // Arrange
    const { getByTestId } = render(<ContactForm />);
  
    // Act
    const message = getByTestId(/message/i);
    console.log(message.textContent);
  
    // Assert
    expect(message.textContent).toEqual("Correct Amount letters");
  });





  // Now let's also unit test some of the functionality of the app:
//   test("addFieldGoal adds 3 to the current score", () => {
//     expect(addFieldGoal(0)).toBe(3);
//     expect(addFieldGoal(25)).toBe(28);
//     expect(addFieldGoal(14)).not.toBe(21);
//   });
  
//   test("addTouchdown adds 7 to the current score", () => {
//     expect(addTouchdown(0)).toBe(7);
//     expect(addTouchdown(14)).toBe(21);
//     expect(addTouchdown(7)).not.toBe(10);
//   });
  