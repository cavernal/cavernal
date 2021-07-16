// Config and some custom logic
let localStorageTimeout = 1300;
let localStorageResetInterval = 300;
let localStorageTabKey = 'cavernal-browser-tab';
let sessionStorageGuidKey = 'cavernal-tab-guid';
	
function checkAndInit() {
	handleResize(null);
	window.onresize = handleResize;
	generateAchievements();
	if (testTab()) {
		window.onunload = removeTab;
		window.onmousemove = mouseMove;
		window.onerror = handleError;
		d = <Data>{};
		d.achievements = {};
		init();
	} else {
		outLine('Cavernal is already running in another tab');
		outLine('');
		outLine('In order to avoid data corruption, only one instance of Cavernal is allowed to run at a time');
		outLine('Find the other tab running Cavernal or close all other tabs');
		outLine('If that does not work, restart the browser or device to continue playing');
		outputConsole();
	}
}
function removeTab() {
	localStorage.removeItem(localStorageTabKey);
};
window.onload=checkAndInit;



// This is a multiple tab detector from https://jsfiddle.net/yex8k2ts/30/
function createGUID() {
	let guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		/*eslint-disable*/
		let r = Math.random() * 16 | 0,
			v = c == 'x' ? r : (r & 0x3 | 0x8);
		/*eslint-enable*/
		return v.toString(16);
	});

	return guid;
}

/**
 * Compare our tab identifier associated with this session (particular tab)
 * with that of one that is in localStorage (the active one for this browser).
 * This browser tab is good if any of the following are true:
 * 1.	There is no localStorage Guid yet (first browser tab).
 * 2.	The localStorage Guid matches the session Guid.	Same tab, refreshed.
 * 3.	The localStorage timeout period has ended.
 *
 * If our current session is the correct active one, an interval will continue
 * to re-insert the localStorage value with an updated timestamp.
 *
 * Another thing, that should be done (so you can open a tab within 15 seconds of closing it) would be to do the following (or hook onto an existing onunload method):
 *		window.onunload = () => { 
				localStorage.removeItem(localStorageTabKey);
			};
 */
function testTab() {
	let sessionGuid = sessionStorage.getItem(sessionStorageGuidKey) || createGUID();
	let tabObj = JSON.parse(localStorage.getItem(localStorageTabKey)) || null;

	sessionStorage.setItem(sessionStorageGuidKey, sessionGuid);

	// If no or stale tab object, our session is the winner.	If the guid matches, ours is still the winner
	if (tabObj === null || (tabObj.timestamp < new Date().getTime() - localStorageTimeout) || tabObj.guid === sessionGuid) {
		function setTabObj() {
			let newTabObj = {
				guid: sessionGuid,
				timestamp: new Date().getTime()
			};
			localStorage.setItem(localStorageTabKey, JSON.stringify(newTabObj));
		}
		setTabObj();
		setInterval(setTabObj, localStorageResetInterval);
		return true;
	} else {
		// An active tab is already open that does not match our session guid.
		return false;
	}
}