define([], function() {
	return [
		// Graphics
		{name: 'tile', type: 'image', src: 'assets/tile.png'},
		{name: 'pjTile', type: 'image', src: 'assets/pjtile.png'},
		{name: 'iceTile', type: 'image', src: 'assets/ice.png'},
		{name: 'pantherTile', type: 'image', src: 'assets/panthertile.png'},
		{name: 'log', type: 'image', src: 'assets/log.png'},
		{name: 'waterTool', type: 'image', src: 'assets/watertool.png'},
		{name: 'meltTool', type: 'image', src: 'assets/melttool.png'},
		{name: 'poisonTool', type: 'image', src: 'assets/poisontool.png'},
		{name: 'poisonBlast', type: 'image', src: 'assets/blast.png'},
		{name: 'hudToolContainer', type: 'image', src: 'assets/toolcontainer.png'},

		{name: 'logo', type: 'image', src: 'assets/logo.png'},
		{name: 'difusebg', type: 'image', src: 'assets/difusebg.png'},

		// Hints
		{name: 'hintWater', type: 'image', src: 'assets/hintwater.png'},
		{name: 'hintMelt', type: 'image', src: 'assets/hintmelt.png'},
		{name: 'hintPoison', type: 'image', src: 'assets/hintpoison.png'},
		{name: 'hintReset', type: 'image', src: 'assets/hintreset.png'},
		{name: 'hintPermanent', type: 'image', src: 'assets/hintpermanent.png'},

		// Background
		{name: 'sky', type: 'image', src: 'assets/sky.png'},
		{name: 'ground', type: 'image', src: 'assets/ground.png'},
		{name: 'clouds', type: 'image', src: 'assets/clouds.png'},
		{name: 'sun', type: 'image', src: 'assets/sun.png'},

		// Maps
		{name: 'level1', type: 'tmx', src: 'data/level1.tmx'},
		{name: 'level2', type: 'tmx', src: 'data/level2.tmx'},
		{name: 'level3', type: 'tmx', src: 'data/level3.tmx'},
		{name: 'level4', type: 'tmx', src: 'data/level4.tmx'},
		{name: 'level5', type: 'tmx', src: 'data/level5.tmx'},
		{name: 'level6', type: 'tmx', src: 'data/level6.tmx'},
		{name: 'level7', type: 'tmx', src: 'data/level7.tmx'},
		{name: 'level8', type: 'tmx', src: 'data/level8.tmx'},
		{name: 'level9', type: 'tmx', src: 'data/level9.tmx'},
		{name: 'level10', type: 'tmx', src: 'data/level10.tmx'},

		// Background Music
		{name: "background", type: "audio", src: "data/music/", channel : 1},

		// SFX
		{name: "step", type: "audio", src: "data/sfx/", channel : 1},
		{name: "newTool", type: "audio", src: "data/sfx/", channel : 1},
		{name: "waterNoise", type: "audio", src: "data/sfx/", channel : 1}
	];
});