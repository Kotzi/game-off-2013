$(function() {
	'use strict';

	var stats = { };

	function showStats() {
		var statsContainer = $('.stats');

		statsContainer.removeClass('hidden');

		_.each(stats, function(value, name) {
			var number = Number(value);
			if (name === 'waterRaised' || name === 'iceMelted') {
				number = (number / 10).toFixed(2)
			}
			statsContainer.find('.' + name + ' .value').text(number);
		});
	}

	me.event.subscribe('/game/finished', function(newStats) {
		stats.waterRaised = newStats.waterRaised.toFixed(2);
		stats.yearsLost = newStats.yearsLost;
		stats.iceMelted = newStats.iceMelted.toFixed(2);
		stats.animalsKilled = newStats.animalsKilled;
		showStats();
	});
});