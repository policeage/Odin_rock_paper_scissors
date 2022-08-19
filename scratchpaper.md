Create a rock paper scissors game,

step 1: create working computer random output
I've made the output as a function, it can be called any time the variable
for getComputerChoice is made.

step 2: create working input from a player
Still working on receiving the player prompt, the player prompt will need
to be not case sensitive, will likely just do a .toLowerCase() with the
output.

Created the let variable to contain the player input, the player input is ran through a .toLowerCase() method and compared against a RegEx to make sure the string is valid. If it isn't valid it also throws an error as alert().

Step 3: Will need to create a function that triggers after the player
prompt is read, compares the computers choice and will output a
win or lose notification, will likely have to attach a "play again" option

Created three const which output a confirmation whether you win, lose, or tie.

Full loop should be
Do you want to play game? > Yes >No
IF yes, prompt playerchoice, boolean check playerchoice for valid string, get computer choice, compare both choices, results win or lose after results, ask for another game?
ELSE nothing.

It seems I broke the functions somehow? I'm assuming it's because I created const which have a call function inside their return values before the function is defined.

Full game works when each function is called individually, I believe there is an issue with gameTime

gameTime needs to check if the person wants to play which should point it to another function which will execute functions in the correct order.

I will likely need to rewrite the full code to get it in to a state that i can play a full game, I'll do that in the myScript.js.

I was rewriting the code nesting each function, however I ran in to the issue of maximizing the recursion value. First time I've seen this. I believe the solution should be having a separation of concerns. Meaning: We care about the variables produced by the functions, not about just chaining functions together.

A better way to look at functions is that when you define functions, you want to make sure that they're doing something of value and not just following a logical order. While having a logical order is nice for presentation, making sure that function provides something should be the goal.

So rethinking it, gameTime can keep getComputerChoice because every time you do gameTime you want to make sure the computer has created a value, but additionally the replays will likely have to call on the getComputerChoice too.

Workflow:
Game time > CpuChoice > PlayerChoice > Result > Replay

Game time - initial function, presents confirmation to play

CpuChoice - Generates a CPU pick, as a function it'll create the cpuchoice variable each time it is ran which picks a random number. The important part is the function has to be called for each iteration, otherwise it'll only have one answer.

Player Choice - Creates PlayerChoice variable, each time a new game is run it'll have to ask for this as well.

Result - compares the two variables against each other generating a result of Win, Lose or Tie, it should also ask the player if they want to play again and if so it'll have to point back to another function.

Replay - It'll have to come after the Result and then point back to a function which will generate another CpuChoice and then PlayerChoice.

Which functions to nest? Which ones to declare? Can we create a new function to do two functions?

I'm not sure what is breaking, in the JS when I create the function gameResults() it declares 3 const which are the Win Lose Tie, they each have a confirm function attached to them which has a return value. But after the first set of return values it breaks the function. Likely because the declared confirm() functions are returning a value, but... shouldn't the variable be able to be declared without also forcing the function to execute? Perhaps I should just create them as separate functions but additionally when I'm making the switch statement, after the first return value it breaks all the breaks which is weird. I do want the switch cases to have a return value... or is it that if a value returns then the break doesn't matter because if it returns it won't ever break. That makes sense.

Actually, I think what I should do is make the gameResults() function and design the switch statement to just have the return value call the confirm function, that makes sense, no need to create a variable then.

Turns out confirm() is a window object, maybe when I was writing it, it thought confirm was a function instead? It's really weird that this stuff worked in inline HTML.

Seems that removing the return fixed the issues... I checked and saw that return is effected by ASI, so it was likely all of the semicolons were messing with how the return value was read. I saw that you could fix it with parenthesis. I'm not sure if break will function the same as return or if the function will never terminate because it has no return.

Basically, I messed up. I applied a return where I shouldn't have, everything is fixed. Also, on the conditionals, it turns out I was missing semicolons at the end of some of the return statements. I left the breaks in despite being unreadable because I'm not sure if the switch statements will work without them.

I need to think of how getGameResults() works, because I can't return a confirm window with a boolean because of the ;. return function maybe?

Seems like it's just a shortcoming of functions return having ASI and having window objects also require a ;, actually, let me see if I can just put the confirm in a (), I'm not sure. Perhaps you can, but the easier solution is just to create an arrow function or declare an actual function to output the results, could do that if you wanted to add a counter for wins and losses.

I now need to debug the PlayerChoice, scrubbing the string to lower case against a RegEx doesn't seem to be working, unless the string doesn't actually appropriately handle the boolian.

There was an issue with it, seemed like the CPU choice would pull a regex and be an object so there was an issue with comparing string to object, didn't want to handle with turning the object in to a string so I just changed all the choices to UpperCase and changed all the variables to always be uppercase.

getGameResults() isn't working now, I think it's the switch statement, it isn't able to do any of the comparisons, however I also think there is an issue with my current boolean evaluations.

Seems like the playerChoice isn't being properly stored as a global variable?

I'm able to win, but having issues with losing, it runs in to the else issue

Tested tie, can tie 5 times with no issues.

Looking at the boolean right now on win and lose, and knowing that the or value returns the first true and the second one will choose the second first true, it should look like playerChoice == Paper && cpuChoice == Scissors, therefore it should have satisfied the loss condition.

The issue with the Boolean is that I think when you go through the If Else, it'll check If is tied first, then it'll check if lose satisfies... something. Basically it should take playerchoice and compare it to the cpuchoice, the first else if statement should always be able to be satisfied, as well as the second else if statement because technically they'll always have a playerChoice value and cpuChoice value. Initially I was thinking you could just have the playerchoice always check 0 1 2and the && value of CPU Choice will always have a true value after the playerchoice value is selected.

So there was an error at CPU Paper and player Scissors and another error at CPU Scissors and player Paper. the CPU and player choices are still retained.

CPU Paper can beat player rock.
CPU Rock vs Player Paper breaks the boolean.
So at least we can lose and we can win, just some variations break the logic check despite me knowing that the logic is faulty to begin with. Actually, I think I found the issue. I'll likely have to rewrite it to check for each one of the results, smh

All fixed now. Going to do the extra things now, I'll just let them float around.