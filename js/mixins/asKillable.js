define([], function() {
	var asKillable = function() {
		var oldUpdate = this.update;

		this.update = function() {
			if (me.game.currentLevel.blast && me.game.currentLevel.blast.caughtInExplosion(this)) {
				me.game.remove(this);
			}

			if (oldUpdate) {
				oldUpdate.apply(this, arguments);
			}
		}
	};

	return asKillable;
});