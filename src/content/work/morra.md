---
title: Morra
publishDate: 2022-04-01 00:00:00
imgs:
  - /assets/morra.png
img_alt: Soft pink and baby blue water ripples together in a subtle texture.
description: |
  A multiplayer Java implementation of the game Morra
tags:
  - Java
  - FXML
  - GUI
  - Model-View-Controller
  - Multithreaded
  - Multiplayer
  - Sockets
---

This is the ancient game "Morra" as a GUI desktop application that can be played in multipleyer across networks. The game works in a similar way to rock-paper-scissors, except there are more "plays" you can do, being showing the numbers 1-5 with your fingers. Both players must show their hand at the same time, so the application needs to wait for both players to have played to show the results to both clients.

This is achieved by using Java's Sockets to communicate between two clients through a host machine. Multithreading allows for the clients and server to have a responsive GUI while also waiting for responses from one another simultaneously without blocking. The Model-View-Controller design pattern was used here to separate code functionalities for more sustainable and easier development, as this was a partner project. The JavaFX library was used for the GUI here, with the layout designed in FXML.