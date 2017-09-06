## Website Performance Optimization portfolio project

This project is a web performance optimisations test, with the original site featuring many bugs and ineffecient code causing poor performance. The challenge was to find and optimize all of these bugs and areas of poor performance.

### Getting started

This project uses (gulp)[https://gulpjs.com/] as a build system, to install use

  ```
    npm install --save -dev
    // run build of dist folder
    gulp
    // will set up a localhost server on port 3000
  ```

This will create a local server on port 3000 with

#### Part 2: Optimizations made

1. Optimized index.html to achieve ps of >90 by stopping render blocking js, minify and concat. files & images.

2.  Main.js elminating instances of forced reflow in the resizing of the pizzas, and scrolling of them too.
