var achievements = [];

function registerAchievement(o: Achievement) {
	achievements.push(o);
}

class Achievement {
	name: string;
	image: string;
	startingObject: string;
}

function getAchievement(o: string) {
	d.achievements[o] = true;
}