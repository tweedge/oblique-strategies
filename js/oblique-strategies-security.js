// originally from: https://github.com/ceejbot/oblique-strategies/blob/master/index.js
// license: the Unlicense

var strategies = [
    "Abandon normal instructions (Brian Eno, Peter Schmidt)",
    "Abandon normal instruments (Brian Eno, Peter Schmidt)",
    "Accept advice (Brian Eno, Peter Schmidt)",
    "Add constraints (kevinlawler.com)",
    "Allow an easement (an easement is the abandonment of a stricture) (Brian Eno, Peter Schmidt)",
    "Always first steps (Brian Eno, Peter Schmidt)",
    "Always give yourself credit for having more than personality (given by Arto Lindsay) (Brian Eno, Peter Schmidt)",
    "Ask a trusted advisor a dumb question (tweedge)",
    "Ask people to work against their better judgement (Brian Eno, Peter Schmidt)",
    "Be extravagant (Brian Eno, Peter Schmidt)",
    "Be less critical (Brian Eno, Peter Schmidt)",
    "Board up rabbit holes (kevinlawler.com)",
    "Breathe more deeply (Brian Eno, Peter Schmidt)",
    "Bridges\n--build\n--burn (Brian Eno, Peter Schmidt)",
    "Build the theory of the problem (kevinlawler.com)",
    "Change ambiguities to specifics (Brian Eno, Peter Schmidt)",
    "Change instrument roles (Brian Eno, Peter Schmidt)",
    "Change nothing and continue with immaculate consistency (Brian Eno, Peter Schmidt)",
    "Change specifics to ambiguities (Brian Eno, Peter Schmidt)",
    "Cluster analysis (Brian Eno, Peter Schmidt)",
    "Consider different fading systems (Brian Eno, Peter Schmidt)",
    "Consult other sources\n--promising\n--unpromising (Brian Eno, Peter Schmidt)",
    "Courage! (Brian Eno, Peter Schmidt)",
    "Create a new metric, understand what that metric means (Brian Eno, Peter Schmidt)",
    "Cut a vital connection (Brian Eno, Peter Schmidt)",
    "Define an area as 'safe' and use it as an anchor (Brian Eno, Peter Schmidt)",
    "Destroy\n-nothing\n-the most important thing (Brian Eno, Peter Schmidt)",
    "Discard an axiom (Brian Eno, Peter Schmidt)",
    "Disciplined self-indulgence (Brian Eno, Peter Schmidt)",
    "Disconnect from desire (Brian Eno, Peter Schmidt)",
    "Discover the recipes you are using and abandon them (Brian Eno, Peter Schmidt)",
    "Display your talent (Brian Eno, Peter Schmidt)",
    "Do it the wrong way (kevinlawler.com)",
    "Do nothing for as long as possible (Brian Eno, Peter Schmidt)",
    "Do something boring (Brian Eno, Peter Schmidt)",
    "Do the last thing first (Brian Eno, Peter Schmidt)",
    "Do the washing up (Brian Eno, Peter Schmidt)",
    "Do the words need changing? (Brian Eno, Peter Schmidt)",
    "Don't avoid what is easy (Brian Eno, Peter Schmidt)",
    "Don't break the silence (Brian Eno, Peter Schmidt)",
    "Don't stress one thing more than another (Brian Eno, Peter Schmidt)",
    "Dont be afraid of things because they're easy to do (Brian Eno, Peter Schmidt)",
    "Dont be frightened to display your talents (Brian Eno, Peter Schmidt)",
    "Emphasize differences (Brian Eno, Peter Schmidt)",
    "Emphasize repetitions (Brian Eno, Peter Schmidt)",
    "Emphasize the flaws (Brian Eno, Peter Schmidt)",
    "Faced with a choice, do both (given by Dieter Rot) (Brian Eno, Peter Schmidt)",
    "Feats are fragile (kevinlawler.com)",
    "Find a safe part and use it as an anchor (Brian Eno, Peter Schmidt)",
    "Form hypothesis, test hypothesis, repeat (kevinlawler.com)",
    "Get water flowing through the pipe (kevinlawler.com)",
    "Give the game away (Brian Eno, Peter Schmidt)",
    "Give way to your worst impulse (Brian Eno, Peter Schmidt)",
    "Go to an extreme, come part way back (Brian Eno, Peter Schmidt)",
    "Have faith in sound-looking abstractions (kevinlawler.com)",
    "Have goals and subdivide them (kevinlawler.com)",
    "Have opinions (guess wrong, then check) (kevinlalwer.com)",
    "Honor thy mistake as a hidden intention (Brian Eno, Peter Schmidt)",
    "How will customers interact with it? (tweedge)",
    "How would someone else do it? (Brian Eno, Peter Schmidt)",
    "How would you have done it? (Brian Eno, Peter Schmidt)",
    "If you lack motivation, find the most interesting thing in the project, start on that, and branch from there (kevinlawler.com)",
    "Imagine the piece as a set of disconnected events (Brian Eno, Peter Schmidt)",
    "Into the impossible (Brian Eno, Peter Schmidt)",
    "Is it finished? (Brian Eno, Peter Schmidt)",
    "Is something missing? (Brian Eno, Peter Schmidt)",
    "Is the information correct? (Brian Eno, Peter Schmidt)",
    "Is there something missing (Brian Eno, Peter Schmidt)",
    "It is quite possible (after all) (Brian Eno, Peter Schmidt)",
    "It is simply a matter of work (Brian Eno, Peter Schmidt)",
    "Just carry on (Brian Eno, Peter Schmidt)",
    "Listen to the quiet voice (Brian Eno, Peter Schmidt)",
    "Look at the order in which you do things (Brian Eno, Peter Schmidt)",
    "Look closely at the most embarrassing details & amplify them (Brian Eno, Peter Schmidt)",
    "Look for a good enough approximation (kevinlawler.com)",
    "Look for a hack (kevinlawler.com)",
    "Look for ways to chain tools(kevinlawler.com)",
    "Lost in useless territory (Brian Eno, Peter Schmidt)",
    "Lowest common denominator (Brian Eno, Peter Schmidt)",
    "Magnify the most difficult details (Brian Eno, Peter Schmidt)",
    "Make a sudden, destructive unpredictable action; incorporate (Brian Eno, Peter Schmidt)",
    "Make an exhaustive list of everything you might do & do the last thing on the list (Brian Eno, Peter Schmidt)",
    "Mark it WONTFIX (kevinlawler.com)",
    "Move towards the unimportant (Brian Eno, Peter Schmidt)",
    "Mute and continue (Brian Eno, Peter Schmidt)",
    "Not building a wall but making a brick (Brian Eno, Peter Schmidt)",
    "Once the search has begun, something will be found (Brian Eno, Peter Schmidt)",
    "Only a part, not the whole (Brian Eno, Peter Schmidt)",
    "Overtly resist change (Brian Eno, Peter Schmidt)",
    "Play the devil's advocate (tweedge)",
    "Put in earplugs (Brian Eno, Peter Schmidt)",
    "Question the heroic (Brian Eno, Peter Schmidt)",
    "Remove a restriction (Brian Eno, Peter Schmidt)",
    "Remove ambiguities and convert to specifics (Brian Eno, Peter Schmidt)",
    "Remove specifics and convert to ambiguities (Brian Eno, Peter Schmidt)",
    "Repetition is a form of change (Brian Eno, Peter Schmidt)",
    "Retrace your steps (Brian Eno, Peter Schmidt)",
    "Reverse (Brian Eno, Peter Schmidt)",
    "Run through the thornbushes (kevinlawler.com)",
    "Shear off a layer (kevinlawler.com)",
    "Short circuit (example; a man eating peas with the idea that they will improve  his virility shovels them straight into his lap) (Brian Eno, Peter Schmidt)",
    "Simple subtraction (Brian Eno, Peter Schmidt)",
    "Simply a matter of work (Brian Eno, Peter Schmidt)",
    "Slow preparation, fast execution (Brian Eno, Peter Schmidt)",
    "Solve the easiest possible problem in the dumbest possible way (traviscj.com)",
    "Solve the problem directly (kevinlawler.com)",
    "Spectrum analysis (Brian Eno, Peter Schmidt)",
    "State the problem as clearly as possible (Brian Eno, Peter Schmidt)",
    "Take a break (Brian Eno, Peter Schmidt)",
    "Take away the elements in order of apparent non-importance (Brian Eno, Peter Schmidt)",
    "Take away the important parts (Brian Eno, Peter Schmidt)",
    "The most important thing is the thing most easily forgotten (Brian Eno, Peter Schmidt)",
    "This process usually converges: If you're stuck, finish some remaining piece. Then go back and check to see what new possibilities opened up. Repeat. (kevinlawler.com)",
    "Think\n--inside the work\n--outside the work (Brian Eno, Peter Schmidt)",
    "Tidy up (Brian Eno, Peter Schmidt)",
    "Towards the insignificant (Brian Eno, Peter Schmidt)",
    "Trust in the you of now (Brian Eno, Peter Schmidt)",
    "Try faking it (from Stewart Brand) (Brian Eno, Peter Schmidt)",
    "Try the naive method first (kevinlawler.com)",
    "Turn it upside down (Brian Eno, Peter Schmidt)",
    "Turn off Slack for a few hours (tweedge)",
    "Use 'unqualified' people (Brian Eno, Peter Schmidt)",
    "Use an old idea (Brian Eno, Peter Schmidt)",
    "Use cliches (Brian Eno, Peter Schmidt)",
    "Use fewer notes (Brian Eno, Peter Schmidt)",
    "Use something nearby as a model (Brian Eno, Peter Schmidt)",
    "Use your own ideas (Brian Eno, Peter Schmidt)",
    "Verify your assumptions about the world are correct (kevinlawler.com)",
    "Verify your fears, explicitly (kevinlawler.com)",
    "Voice your suspicions (Brian Eno, Peter Schmidt)",
    "What are you really thinking about just now? (Brian Eno, Peter Schmidt)",
    "What context would look right? (Brian Eno, Peter Schmidt)",
    "What if you build it in\n--a day\n--a month (Brian Eno, Peter Schmidt)",
    "What is the reality of the situation? (Brian Eno, Peter Schmidt)",
    "What is the simplest solution? (Brian Eno, Peter Schmidt)",
    "What mistakes did you make last time? (Brian Eno, Peter Schmidt)",
    "What to increase? What to reduce? What to maintain? (Brian Eno, Peter Schmidt)",
    "What would we do if we had 1/10th the resources? (neugierig.org)",
    "What wouldn't you do? (Brian Eno, Peter Schmidt)",
    "When is it for? (Brian Eno, Peter Schmidt)",
    "Who if not you? (neugierig.org)",
    "Work append-only (kevinlawler.com)",
    "Write a half page document about the customer (tweedge)",
    "Write a half page document about it (tweedge)",
    "You are an engineer (Brian Eno, Peter Schmidt)",
    "You will never have enough data until you do it live (tweedge)",
    "Zoom in (kevinlawler.com)",
];

function chooseOblique() {
	var random = Math.floor(Math.random() * (strategies.length));
    return strategies[random];
};

var card = chooseOblique();
var elem = document.getElementById('strategy');
elem.innerHTML = String(card);