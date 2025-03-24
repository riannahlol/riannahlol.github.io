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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(195,695,75,30);
    createPlatform(400,650,75,20);
    createPlatform(592,590,75,20);
    createPlatform(805,540,75,30);
    createPlatform(950,710,75,20);
    createPlatform(1150,710,75,20);
    createPlatform(1050,500,75,20);
    createPlatform(1250,540,75,30);

    // TODO 3 - Create Collectables
    createCollectable("database",410,630)
    createCollectable("database",610,575)
    createCollectable("database",1075,480)

    
    // TODO 4 - Create Cannons
    createCannon("top",1040,450)
    createCannon("top",1230,450)
    createCannon("top", 1350,450)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
