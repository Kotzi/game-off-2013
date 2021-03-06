define(['water', 'entities/glacier'], function(Water, Glacier) {
	var YearsLeft = me.Renderable.extend({
		init: function(x, y) {
			this.parent(new me.Vector2d(x, y), 10, 10);
			this.years = -1;
			this.floating = true;
			this.font = new me.Font('VT323', 20, '#000', 'center');
           		this.character = me.game.character;
		},
		update: function() {
			if (this.years !== me.state.current().environment.yearsLeft) {
				this.years = me.state.current().environment.yearsLeft;
				return true;
			}

			return false;
		},
		draw: function(context) {
			this.font.draw(context, this.years + ' years left', this.pos.x, this.pos.y);
		}
	});

	var WaterLevel = me.Renderable.extend({
		init: function(x, y) {
			this.parent(new me.Vector2d(x, y), 10, 10);
			this.waterLevel = -1;
			this.floating = true;
			this.font = new me.Font('VT323', 20, '#000', 'right');
		},
		update: function() {
			if (this.waterLevel !== me.state.current().environment.waterLevel) {
				this.waterLevel = me.state.current().environment.waterLevel;
				return true;
			}

			return false;
		},
		draw: function(context) {
			if (me.game.character.tools.length >= 1){
                var meters = Water.toMeters(this.waterLevel);
                this.font.draw(context, 'Water level: ' + meters.toFixed(2) + ' meters', this.pos.x, this.pos.y);
            }
		}
	});

	var IceMelted = me.Renderable.extend({
		init: function(x, y) {
			this.parent(new me.Vector2d(x, y), 10, 10);
			this.iceMelted = -1;
			this.floating = true;
			this.font = new me.Font('VT323', 20, '#000', 'right');
		},
		update: function() {
			var env = me.state.current().environment;
			if (this.iceMelted !== env.stats.iceMelted + env.iceMelting) {
				this.iceMelted = env.stats.iceMelted + env.iceMelting;
				return true;
			}

			return false;
		},
		draw: function(context) {
			if (me.game.character.tools.length >= 2){
                var cm3 = Glacier.toCubicCm(this.iceMelted);
			    this.font.draw(context, 'Ice melted: ' + cm3.toFixed(2) + ' cm3', this.pos.x, this.pos.y);
            }
		}
	});

	var AnimalsKilled = me.Renderable.extend({
		init: function(x, y) {
			this.parent(new me.Vector2d(x, y), 10, 10);
			this.animalsKiled = -1;
			this.floating = true;
			this.font = new me.Font('VT323', 20, '#000', 'right');
		},
		update: function() {
			var env = me.state.current().environment;
			if (this.animalsKilled !== env.animalsKilled) {
				this.animalsKilled = env.animalsKilled;
				return true;
			}

			return false;
		},
		draw: function(context) {
			if (me.game.character.tools.length >= 3){
                this.font.draw(context, 'Animals killed: ' + this.animalsKilled, this.pos.x, this.pos.y);
            }
		}
	});

	var ToolKey = me.Renderable.extend({
		init: function(x, y, key) {
			this.parent(new me.Vector2d(x, y), 10, 10);
			this.floating = true;
			this.key = key;
			this.font = new me.Font('VT323', 16, '#000', 'center');
		},
		draw: function(context) {
			this.font.draw(context, this.key, this.pos.x, this.pos.y);
		}
	});

	var ToolsContainer = me.ObjectContainer.extend({
		init: function(x, y) {
			this.parent();
			this.x = x;
			this.y = y;
			this.tools = 0;
		},
		addTool: function(tool) {
			var x, y;
			x = this.x + this.tools * 34;
			y = this.y;

			var container = new me.SpriteObject(x, y, me.loader.getImage('hudToolContainer')),
					toolSprite = new me.SpriteObject(x + 8, y + 8, me.loader.getImage(tool.image)),
					keySprite = new ToolKey(x + 16, y + 33, tool.key);

			toolSprite.alpha = 0;
			toolSprite.scaleFlag = true;
			toolSprite.scale = {x: 2, y: 2};

			var sizeTween = new me.Tween(toolSprite.scale)
				.to({x: 1, y: 1}, 200);
			var alphaTween = new me.Tween(toolSprite)
				.to({alpha: 1}, 200);

			this.addChild(container);
			this.addChild(toolSprite);
			this.addChild(keySprite);

			alphaTween.start();
			sizeTween.start();

			this.tools++;
		},
		reset: function() {
			_.each(this.children, me.game.remove);
			this.tools = 0;
		}
	});

	var Hud = {
		Container: me.ObjectContainer.extend({
			init: function() {
				this.parent();
				this.isPersistent = true;
				this.collidable = false;
				this.z = Infinity;
				this.name = 'HUD';
				this.toolsContainer = new ToolsContainer(10, 10);
				this.addChild(new YearsLeft(me.game.world.width / 2, 10));
				this.addChild(new WaterLevel(me.game.world.width - 10, 10));
				this.addChild(new IceMelted(me.game.world.width - 10, 30));
				this.addChild(new AnimalsKilled(me.game.world.width - 10, 50));
				this.addChild(this.toolsContainer)
			},
			addTool: function(tool) {
				this.toolsContainer.addTool(tool);
			},
			resetTools: function() {
				this.toolsContainer.reset();
			}
		})
	};

	return Hud;
})