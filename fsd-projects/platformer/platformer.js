$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
     createPlatform(50, 150, 150, 10);
     createPlatform(130, 245, 1300, 10);
     createPlatform(0, 350, 1275, 10);
     createPlatform(150, 450, 1350, 10);
     createPlatform(0, 550, 1200, 10);
    // TODO 3 - Create Collectables
     createCollectable("steve", 100, 650, 99);
     createCollectable("steve", 75, 400);
     createCollectable("steve", 1100, 300);
     createCollectable("steve", 75, 250);
     createCollectable("steve", 1250, 150)
     // TODO 4 - Create Cannons
     createCannon("right", 225, 1200);
     createCannon("left", 250, 1250);
     createCannon("right", 750, 1050);
     createCannon("left", 450, 1050);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
