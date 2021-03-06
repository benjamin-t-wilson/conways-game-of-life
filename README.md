# Cellular Automata & Conway's Game Of Life

### See the live implementation here!
https://btwicode-game-of-life.herokuapp.com/

### What is Conway's Game Of Life?

The **Game of Life**, also known simply as **Life**, is a [cellular automaton](https://en.wikipedia.org/wiki/Cellular_automaton "Cellular automaton") devised by the British [mathematician](https://en.wikipedia.org/wiki/Mathematician "Mathematician") [John Horton Conway](https://en.wikipedia.org/wiki/John_Horton_Conway "John Horton Conway") in 1970. It is a [zero-player game](https://en.wikipedia.org/wiki/Zero-player_game "Zero-player game"), meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.

### What is cellular automata?

A **cellular automaton** (pl. **cellular automata**, abbrev. **CA**) is a discrete model studied in [automata theory](https://en.wikipedia.org/wiki/Automata_theory "Automata theory"). Cellular automata are also called **cellular spaces**, **tessellation automata**, **homogeneous structures**, **cellular structures**, **tessellation structures**, and **iterative arrays**. Cellular automata have found application in various areas, including [physics](https://en.wikipedia.org/wiki/Physics "Physics"), [theoretical biology](https://en.wikipedia.org/wiki/Theoretical_biology "Theoretical biology") and [microstructure](https://en.wikipedia.org/wiki/Microstructure "Microstructure") modeling.

A cellular automaton consists of a regular grid of _cells_, each in one of a finite number of _[states](https://en.wikipedia.org/wiki/State_(computer*science) "State (computer science)")*, such as _on_ and _off_ (in contrast to a [coupled map lattice](https://en.wikipedia.org/wiki/Coupled_map_lattice "Coupled map lattice")). The grid can be in any finite number of dimensions. For each cell, a set of cells called its _neighborhood_ is defined relative to the specified cell. An initial state (time _t_ = 0) is selected by assigning a state for each cell. A new _generation_ is created (advancing _t_ by 1), according to some fixed _rule_ (generally, a mathematical function) that determines the new state of each cell in terms of the current state of the cell and the states of the cells in its neighborhood. Typically, the rule for updating the state of cells is the same for each cell and does not change over time, and is applied to the whole grid simultaneously, though exceptions are known, such as the [stochastic cellular automaton](https://en.wikipedia.org/wiki/Stochastic_cellular_automaton "Stochastic cellular automaton") and [asynchronous cellular automaton](https://en.wikipedia.org/wiki/Asynchronous_cellular_automaton "Asynchronous cellular automaton").

The concept was originally discovered in the 1940s by [Stanislaw Ulam](https://en.wikipedia.org/wiki/Stanislaw_Ulam "Stanislaw Ulam") and [John von Neumann](https://en.wikipedia.org/wiki/John_von_Neumann "John von Neumann") while they were contemporaries at [Los Alamos National Laboratory](https://en.wikipedia.org/wiki/Los_Alamos_National_Laboratory "Los Alamos National Laboratory"). While studied by some throughout the 1950s and 1960s, it was not until the 1970s and [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life "Conway's Game of Life"), a two-dimensional cellular automaton, that interest in the subject expanded beyond academia. In the 1980s, [Stephen Wolfram](https://en.wikipedia.org/wiki/Stephen_Wolfram "Stephen Wolfram") engaged in a systematic study of one-dimensional cellular automata, or what he calls [elementary cellular automata](https://en.wikipedia.org/wiki/Elementary_cellular_automaton "Elementary cellular automaton"); his research assistant [Matthew Cook](https://en.wikipedia.org/wiki/Matthew_Cook "Matthew Cook") showed that one of these rules is [Turing-complete](https://en.wikipedia.org/wiki/Turing-complete "Turing-complete"). Wolfram published _[A New Kind of Science](https://en.wikipedia.org/wiki/A_New_Kind_of_Science "A New Kind of Science")_ in 2002, claiming that cellular automata have applications in many fields of [science](https://en.wikipedia.org/wiki/Science "Science"). These include computer [processors](<https://en.wikipedia.org/wiki/Processor_(computing)> "Processor (computing)") and [cryptography](https://en.wikipedia.org/wiki/Cryptography "Cryptography").

The primary classifications of cellular automata, as outlined by Wolfram, are numbered one to four. They are, in order, automata in which patterns generally stabilize into [homogeneity](https://en.wikipedia.org/wiki/Homogeneity "Homogeneity"), automata in which patterns evolve into mostly stable or oscillating structures, automata in which patterns evolve in a seemingly chaotic fashion, and automata in which patterns become extremely complex and may last for a long time, with stable local structures. This last class are thought to be [computationally universal](https://en.wikipedia.org/wiki/Computationally_universal "Computationally universal"), or capable of simulating a [Turing machine](https://en.wikipedia.org/wiki/Turing_machine "Turing machine"). Special types of cellular automata are _reversible_, where only a single configuration leads directly to a subsequent one, and _totalistic_, in which the future value of individual cells only depends on the total value of a group of neighboring cells. Cellular automata can simulate a variety of real-world systems, including biological and chemical ones.

### And what's this about turing completeness?

In [computability theory](https://en.wikipedia.org/wiki/Computability_theory "Computability theory"), a system of data-manipulation rules (such as a computer's [instruction set](https://en.wikipedia.org/wiki/Instruction_set "Instruction set"), a [programming language](https://en.wikipedia.org/wiki/Programming_language "Programming language"), or a [cellular automaton](https://en.wikipedia.org/wiki/Cellular_automaton "Cellular automaton")) is said to be **Turing-complete** or **computationally universal** if it can be used to simulate any [Turing machine](https://en.wikipedia.org/wiki/Turing_machine "Turing machine"). This means that this system is able to recognize or decide other data-manipulation rule sets. Turing completeness is used as a way to express the power of such a data-manipulation rule set. Virtually all programming languages today are Turing-complete. The concept is named after English mathematician and computer scientist [Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing "Alan Turing").

A related concept is that of **Turing equivalence** – two computers P and Q are called equivalent if P can simulate Q and Q can simulate P. The [Church–Turing thesis](https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis "Church–Turing thesis") conjectures that any function whose values can be computed by an [algorithm](https://en.wikipedia.org/wiki/Algorithm "Algorithm") can be computed by a Turing machine, and therefore that if any real-world computer can simulate a Turing machine, it is Turing equivalent to a Turing machine. A [universal Turing machine](https://en.wikipedia.org/wiki/Universal_Turing_machine "Universal Turing machine") can be used to simulate any Turing machine and by extension the computational aspects of any possible real-world computer.

To show that something is Turing-complete, it is enough to show that it can be used to simulate some Turing-complete system. For example, an [imperative language](https://en.wikipedia.org/wiki/Imperative_language "Imperative language") is Turing-complete if it has [conditional branching](https://en.wikipedia.org/wiki/Conditional_branching "Conditional branching") (e.g., "if" and "goto" statements, or a "branch if zero" instruction; see [one-instruction set computer](https://en.wikipedia.org/wiki/One-instruction_set_computer "One-instruction set computer")) and the ability to change an arbitrary amount of [memory](https://en.wikipedia.org/wiki/Computer_memory "Computer memory") (e.g., the ability to maintain an arbitrary number of data items). Of course, no physical system can have infinite memory; but if the limitation of finite memory is ignored, most programming languages are otherwise Turing-complete.

##### Specific to Conway's game of life?

It is possible to build a pattern that acts like a finite-state machine connected to two counter configurations. This has the same computational power as a universal Turing machine, so the Game of Life is theoretically as powerful as any computer with unlimited memory and no time constraints; it is Turing complete.

# Rules of the game

The universe of the Game of Life is an infinite, two-dimensional [orthogonal](https://en.wikipedia.org/wiki/Orthogonality "Orthogonality") grid of square _cells_, each of which is in one of two possible states, _live_ or _dead_, (or _populated_ and _unpopulated_, respectively). Every cell interacts with its eight _[neighbours](https://en.wikipedia.org/wiki/Moore_neighborhood "Moore neighborhood")_, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

1.  Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2.  Any live cell with two or three live neighbours lives on to the next generation.
3.  Any live cell with more than three live neighbours dies, as if by overpopulation.
4.  Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

These rules, which compare the behavior of the automaton to real life, can be condensed into the following:

1.  Any live cell with two or three live neighbours survives.
2.  Any dead cell with three live neighbours becomes a live cell.
3.  All other live cells die in the next generation. Similarly, all other dead cells stay dead.

The initial pattern constitutes the _seed_ of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a _tick_. Each generation is a _[pure function](https://en.wikipedia.org/wiki/Pure_function "Pure function")_ of the preceding one. The rules continue to be applied repeatedly to create further generations.

# My interpretation

My preferred technology stack to recreate this game is JavaScript utilizing the popular React.js front end framework. The main deciding factor for using this despite availability of languages with perhaps better or easier to use computational logic is the fact that JavaScript can also be used to make the front end platform. By using just JS, I don't need to worry about integrations between different packages.

Modern React.js includes amazing functions called hooks that are incredibly useful, but I determined them not to be ideal for this case. The older class based implementations of React have access to specific component life cycle methods as well as previous versions of state and props. I was able to utilize these to target specific times to carry out specific actions, and essentially store 2 versions of the game at one time. This allowed me to create a sort of _double buffer_ logic, rendering the old state while the new state of the universe is being calculated.

As part of my project, I have decided to make a few changes to the implementation. My board is able to be rendered at dynamic widths and heights, capping at 50 x 50 for performance and screen size related reasons. The speed is also able to be controlled in live interaction, including the ability to move just one generation at a time. The cells are colored based on three random number generating functions that are then passed into an rgb style. And the game is made [available here on heroku](https://btwicode-game-of-life.herokuapp.com/).

As an additional custom feature, I have given the ability to change the rules at random. This will result in a chance of overwhelming reproduction or overwhelming death of cells.

# Contact

If you enjoy this work, or want to network with me for any other reason, visit [my website](https://btwicode.com/), connect with [me on LinkedIn](https://www.linkedin.com/in/benjamin-t-wilson/), or drop me an email!

whatsup@btwicode.com
