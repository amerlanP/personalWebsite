---
title: Spelling-Bee
publishDate: 2023-03-15 00:00:00
imgs:
  - /assets/spelling-bee.png
  - /assets/spelling-bee-example.png
  - /assets/trie.png
img_alt: Letters arranged in a honeycomb pattern with L in the middle.
description: |
  A console word-finding game inspired by New York Time's "Spelling Bee"
tags:
  - C++
  - Algorith Heavy
  - Game
  - Trie
---

Inspired by the New York Times game: "Spelling Bee", this is a console-based game where the user can load in a dictionary of words, and a set of 7 allowable letters and then begin guessing words that contain any of the 7 letters. The word being guessed must include the "central" letter (first letter of allowed letters entered) for the word to be valid. A score is then calculated based on the complexity of the word guessed and is added to their points total.

This is done by using a custom trie data strucutre. This data structure functions similarly to a tree, but it has 26 branches per node, each for their own letter. I can efficiently search the entire dictionary of 500,000+ words in O(length of word) time as a result. An invalid word is detected by going through the branches until a subsequent node is null.