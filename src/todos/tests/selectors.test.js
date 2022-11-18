import { expect } from "chai";
import { getCompletedTodos } from "../selectors";

describe("The getCompletedTodos function", () => {
  it("Returns only the completed todo", () => {
    const fakeTodos = [
      {
        text: "Say Hello",
        isCompleted: true,
      },
      {
        text: "Say Goodbye",
        isCompleted: false,
      },
      {
        text: "Climb the Everest",
        isCompleted: false,
      },
    ];

    const expected = [
      {
        text: "Say Hello",
        isCompleted: true,
      },
    ];

    const actual = getCompletedTodos.resultFunc(fakeTodos);

    expect(actual).to.deep.equal(expected);
  });
});
