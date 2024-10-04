import React, { useEffect } from 'react';
import Phaser from '../lib/phaser'; // Update the path to where your phaser file is located
import { SCENE_KEYS } from '../../../game/WebNApp/src/scenes'; // Adjust the import paths as necessary
import { PreloadScene } from '../../../game/WebNApp/src/scenes/preload-scene';
import { BattleScene } from '../../../game/WebNApp/src/scenes/battle-scene';

const GameLoader = () => {
  useEffect(() => {
    // Load WebFont
    const webFontScript = document.createElement('script');
    webFontScript.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    webFontScript.async = true;
    document.head.appendChild(webFontScript);

    // Load Phaser
    const phaserScript = document.createElement('script');
    phaserScript.src = '//cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser.min.js';
    phaserScript.async = true;
    document.head.appendChild(phaserScript);

    // Initialize Phaser game once the scripts are loaded
    const initializeGame = () => {
      const game = new Phaser.Game({
        type: Phaser.CANVAS,
        pixelArt: false,
        scale: {
          parent: 'game-container',
          width: 1024,
          height: 576,
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        backgroundColor: '#000000',
      });

      game.scene.add(SCENE_KEYS.PRELOAD_SCENE, PreloadScene);
      game.scene.add(SCENE_KEYS.BATTLE_SCENE, BattleScene);
      game.scene.start(SCENE_KEYS.PRELOAD_SCENE);
    };

    // Ensure the scripts are loaded before initializing the game
    const checkScriptsLoaded = () => {
      if (window.Phaser) {
        initializeGame();
      } else {
        setTimeout(checkScriptsLoaded, 100);
      }
    };

    checkScriptsLoaded();

    // Cleanup function to remove scripts if needed
    return () => {
      document.head.removeChild(webFontScript);
      document.head.removeChild(phaserScript);
    };
  }, []);

  return (
    <div
      className="container"
      id="game-container"
      style={{
        margin: 0,
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        background: '#d7d7d7',
      }}
    >
      {/* Game will be rendered here */}
    </div>
  );
};

export default GameLoader;
