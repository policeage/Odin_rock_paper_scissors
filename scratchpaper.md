Create a rock paper scissors game,

step 1: create working computer random output
I've made the output as a function, it can be called any time the variable
for getComputerChoice is made.

step 2: create working input from a player
Still working on receiving the player prompt, the player prompt will need
to be not case sensitive, will likely just do a .toLowerCase() with the
output.

Step 3: Will need to creat a function that triggers after the player
prompt is read, compares the computers choice and will output a
win or lose notification, will likely have to attach a "play again" option

Full loop should be
Do you want to play game? > Yes >No
IF yes, prompt choice, boolean check choice, get computer choice, compare both choices, results win or lose after results, ask for another game?
ELSE nothing.

It seems I broke the functions somehow? I'm assuming it's because I created const which have a call function inside their return values before the function is defined.

Full game works when each function is called individually, I believe there is an issue with gameTime

gameTime needs to check if the person wants to play which should point it to another function which will execute functions in the correct order.