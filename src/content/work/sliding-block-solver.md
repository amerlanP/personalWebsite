---
title: Sliding Block Solver
publishDate: 2023-4-01 00:00:00
imgs:
  - /assets/slidingblock.png
img_alt: A sliding block puzzle game with brown blocks and red blocks
description: |
  Designed an app that finds the shortest solution to a sliding block puzzle.
tags:
  - C++
  - BFS
---

Shown above is an example of a puzzle found in the popular mobile game: "Unblock Me". The red block on the left side must reach the gap on the right side. This is done by sliding all other blocks out of the way, with tall blocks only able to move vertically, and wide ones horizontally.

My app allows the user to input a text file that gives the state of the game, and will solve the puzzle in the shortest number of block moves. This is achieved using a BFS algorithm that tries all legal moves and stores each one as another game state. This process is repeated until the red block reaches the desired position, or, if the puzzle is unsolvable, it will detemine that as well. The solution is then printed to the user with an ascii depiction of what the puzzle will look like in the solved state, as well as each block move to get there.
