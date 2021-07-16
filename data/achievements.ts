function generateAchievements() {
	registerAchievement(<Achievement>{
		name: 'Killed the Ghoul',
		image: 'killedghoul',
	});

	registerAchievement(<Achievement>{
		name: 'Killed the Lich',
		image: 'killedlich',
	});

	registerAchievement(<Achievement>{
		name: 'Killed the Abomination',
		image: 'killedabomination',
	});

	registerAchievement(<Achievement>{
		name: 'Killed the Destroyer',
		image: 'killeddestroyer',
	});

	registerAchievement(<Achievement>{
		name: 'Killed the Demon Overlord',
		image: 'killeddemonoverlord',
	});

	registerAchievement(<Achievement>{
		name: 'Killed the Curse',
		image: 'killedcurse',
	});
	
	registerAchievement(<Achievement>{
		name: 'Transcended',
		image: 'transcended',
	});

	registerAchievement(<Achievement>{
		name: 'Guide of artifacts',
		image: 'guideofartifacts',
		startingObject: 'Guide of artifacts',
	});

	registerAchievement(<Achievement>{
		name: 'Guide to the ritual',
		image: 'guidetotheritual',
		startingObject: 'Guide to the ritual',
	});

	registerAchievement(<Achievement>{
		name: 'Performed the ritual',
		image: 'ritual',
		startingObject: 'Box of the curse',
	});
}