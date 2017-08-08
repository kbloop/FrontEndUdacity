## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

#### Part 1: Running with gulp and browsersync

Some useful tips to help you get started:

1. npm install gulp -g
2. install dependencies with npm install

  ```bash
  $> cd /path/to/your-project-folder
  $> npm install
  ```

#### Part 2: Optimizations made

1. Optimized index.html to achieve ps of >90 by stopping render blocking js, minify and concat. files & images.

2.  Main.js elminating instances of forced reflow in the resizing of the pizzas, and scrolling of them too.
