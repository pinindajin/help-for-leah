# Color Me

## Instructions

I want you to make an app that allows a user to input an integer into the app which then creates a number of adjacent squares equal to the integer the user has input. 

The created squares will sport a variety of colors - each square being a single solid color itself. When you click on one of the squares the squares adjacent to the square you clicked on should change their color to match the square you clicked on. If one of the squares is the same color as the square you clicked, you should make the square become a random color that isn't the color it was or the color of the square next to it.

If all the squares on the screen are the same color you should remove all the squares from the screen and show the text "Winner Winner Chicken Dinner".

## Requirements

- The minimum integer allowed to be entered should be 4 and the maximum should be 100.

- The minimum number of colors should be 3 and the maximum should be 7

- The squares don't have to be next to each other in any particular shape, however each square needs to border other squares as if they were put on a grid system. That is a square can only be adjacent to 4 squares on it's sides and 4 other squares kitty corner to it's corners.

- You can use any front end technology you want to do this. Inside the color-me folder is a basic react application generated through the create-react-app tool. Feel free to make a new folder or delete that one and either create-react-app again or use a different tool.

## Hints

- Break the problem down into small pieces.

- Every square should be the same functionally as every other square. Try making every square a component.

- Try building a component that is a parent to all the smaller components. Put your logic for colors in that component (or elsewhere?). The square components should really only know how to be a square and be a color that changes dependent upon what color it's told to be.
