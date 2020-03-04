# Crystal Counting Game
[View Live](https://lexi-winstanley.github.io/crystalCountingGame/)

## Motivation 
To create a simple game utilizing jQuery in which the goal is to click the crystals, which have unknown values, in such a way that the sum equals the randomly generated target score. 

## Summary
At the start of the game a target score will be randomly generated. Each of the four crystals will also be assigned a random value not displayed to the player. Each time a crystal is clicked its value will be added to the current score. The object of the game is to click on the crystals in such a way that the sum of all the crystals clicked equals the target score.

## Details
This is a JavaScript game utilizing the jQuery library. On page load, a random target score is generated between 19 and 120 using Math.random(). Random values are generated between 1 and 12 for each of the crystals using the same method and added to an array to be assigned. The target score and current score are displayed to the player while the crystal values are not. Each time a crystal is clicked a function runs to add its secret value will be added to the current score. With this information a player can use logic to figure out the crystal values and successfully reach the target score--or they can click randomly and hope for the best! If, after a click, the current score equals the target score, the player has won and the wins displayed at the bottom of the page will be incremented. If the current score goes over the target score the player has lost and the losses displayed at the bottom of the page will be incremented. Once the player wins or loses a new target score and crystal values will be generated.

## Role
Sole developer responsible for design, code and creation of custom graphics.

## Technologies
HTML
<br/>CSS
<br/>JavaScript
<br/>jQuery
