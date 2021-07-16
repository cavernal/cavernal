var buffer: string = '';
var addSpace: boolean = false;
var actionsOpacity = 1;
var controlsDisabled = false;
var fadeGoingUp = true;
var deferUpdate = false;
var fadeEnabled = true;
var FADESPEED = 2;


function handleResize(evt) {
	var all = (document.getElementsByClassName("all")[0] as HTMLElement);
	var maxWidth = all.offsetWidth;
	var maxHeight = all.offsetHeight;
    var width = window.innerWidth;
    var height = window.innerHeight;
    var scale = 1;
    if(width < maxWidth || height < maxHeight) {
	    scale = Math.min(width/maxWidth, height/maxHeight);
    }
    all.style.webkitTransform = 'scale(' + scale + ')';
};

function keyDownEvent(evt) {
	evt = <KeyboardEvent>evt || <KeyboardEvent>window.event;
	if (evt.keyCode == "UP" || evt.keyCode == "DOWN" || evt.keyCode == "LEFT" || evt.keyCode == "RIGHT" || evt.keyCode == "SPACE" || evt.keyCode == "ENTER") {
		evt.preventDefault();
	}
	manageKeyPress(key(evt.keyCode), evt.ctrlKey, evt.shiftKey, evt.altKey);  
}

function manageKeyPress(key, ctrlKey, shiftKey, altKey) {
	if (controlsDisabled) {
		return;
	}
	debugKeyPress(key, ctrlKey, shiftKey, altKey);
	deferUpdate = false;
	if (keyPress(key, ctrlKey, shiftKey, altKey)) {
		if (!deferUpdate) {
			update();
		}
	}
}

function mouseMove() {
	if (isTouchDevice()) {
		return;
	}
	inventorySelect(-1);
	showAttributeDiff('');
	infoNothing();
}

function isTouchDevice() {
	return (('ontouchstart' in window) ||
    	(navigator.maxTouchPoints > 0) ||
    	(navigator.msMaxTouchPoints > 0));
}

function onClickEvent(evt) {
	if (isTouchDevice()) {
		inventorySelect(-1);
		showAttributeDiff('');
	}
}

function outputCharacter(text) {
	document.getElementById('character').innerHTML = text;
}

function outputInfo(text) {
	document.getElementById('info').innerHTML = text;
}
function outputActions(text) {
	document.getElementById('actions').innerHTML = text;
}

function outputInventory(text) {
	document.getElementById('inventory').innerHTML = text;
}

function clear() {
	buffer = '';
	addSpace = false;
}

function out(text) {
	if (addSpace && text != "") {
		buffer += line('');
		addSpace = false;
	}
	buffer += text;
}

function outSpace() {
	addSpace = true;
}

function outLine(text) {
	out(line(text));
}

function line(text) {
	if (text == '') {
		return div('emptyline', '');
	} else {
		return div('line', text);
	}
}

function outputConsole() {
	var element = document.getElementById('console');
	element.innerHTML = buffer;
    element.scrollTop = element.scrollHeight;
}

function simpleKeyPress(k) {
	manageKeyPress(k, false, false, false);
}

function shiftKeyPress(k) {
	manageKeyPress(k, false, true, false);
}

function hoverStopPropagation(text): string {
	if (!isTouchDevice()) {
		return '<div class="hover" onmousemove="window.event.cancelBubble = true;">' + text + '</div>';
	}
	if (isTouchDevice()) {
		return '<div class="hover" onclick="window.event.cancelBubble = true;">' + text + '</div>';
	}
}

function hover(scriptIn, scriptOut, text): string {
	if (!isTouchDevice()) {
		return hoverStopPropagation('<div class="hover" onmousemove="' + scriptIn + ';" onmouseleave="' + scriptOut + ';">' + text + '</div>');
	}
	if (isTouchDevice()) {
		return hoverStopPropagation('<div class="hover" onclick="' + scriptIn + ';">' + text + '</div>');
	}
}

function scrollMarker(id, text): string {
	return '<div class="scrollmarker" id="' + id + '">' + text + '</div>';
}

function hoverInfo(script, text): string {
	return hover(script, 'infoNothing()', text);
}

function img(id, content='', divClass='img') {
	return '<div class="' + divClass + ' img_' + id + '">' + content + '</div>';
}

function imgResize(id, resize=0, content='', divClass='img') {
	return '<div class="' + divClass + ' img_' + id + '" style="width: ' + resize + 'px; height: ' + resize + 'px; min-width: ' + resize + 'px; min-height: ' + resize + 'px; max-width: ' + resize + 'px; max-height: ' + resize + 'px; background-size: ' + resize + 'px ' + resize + 'px;">' + content + '</div>';
}

function imgOpacity(id, opacity, content='', divClass='img') {
	return '<div class="' + divClass + ' img_' + id + '" style="opacity: ' + opacity + ';">' + content + '</div>';
}

function imgOnclick(id, onclick='', content='', divClass='img') {
	return '<div class="' + divClass + ' img_' + id + '" onclick="' + onclick + ';">' + content + '</div>';
}

function shortcutDiv(key) {
	return '<div class="shortcut">' + key + '</div>';
}

function shortcutDivAction(key) {
	return '<div class="shortcutaction">' + key + '</div>';
}
function div(cl, content) {
	return '<div class="' + cl + '">' + content + '</div>'
}

function numDeltaFix(num, delta) {
	var numclass='num';
	if (delta < 0) {
		numclass='numminus'
	} else if (delta > 0) {
		numclass='numplus'
	}
	return '<div class="' + numclass + '">' + (num+delta) + '</div>';
}

function numDeltaOnly(delta) {
	var numclass='num';
	if (delta < 0) {
		numclass='numminusonly'
	} else if (delta > 0) {
		numclass='numplusonly'
		delta = '+' + delta;
	}
	if (delta) {
		return ' (<div class="' + numclass + '">' + delta + '</div>)';
	} else {
		return '';
	}
}

function bar(color, number, maxNumber, maxNumberDelta, threshold, increase) {
	var maxclass='barmaxnumber'
	if (maxNumberDelta < 0) {
		maxclass='barmaxnumberminus'
	} else if (maxNumberDelta > 0) {
		maxclass='barmaxnumberplus'
	}
	var numclass='barnumber'
	if (increase) {
		numclass='barnumberplus'
		color='#008800';
	} else if (number < threshold) {
		numclass='barnumberminus'
	}
	return '<div class="bar" style="background-color: ' + color + ';">' +
		     '<div class="barbackground" style="width: ' + Math.min((1-((number+increase)/maxNumber))*100, 100) + '%"></div>' +
		     '<div class="barnumbers"><div class="' + numclass + '">' + (number+increase) + '</div><div class="barnumbercenter">/</div><div class="' + maxclass + '">' + (maxNumber+maxNumberDelta) + '</div></div>' +
		   '</div>';
}

function minibar(color, number, maxNumber) {
	return '<div class="minibar" style="background-color: ' + color + ';">' +
		     '<div class="barbackground" style="width: ' + Math.min((1-(number/maxNumber))*100, 100) + '%"></div>' +
		   '</div>';
}

function s(n) {
	if (n == 1) {
		return '';
	}
	return 's';
}

function emptyItemTile() {
	return img('tileempty',
		div('tileinner', img('emptyitem', '', 'tileimg')), 'tile');
}

function itemTile(itemName, amount=1, selected=false, equipped=false, actionable=false, showUseable=true, showAmount=true) {
	var item = items[itemName];
	
	var amountText = '';
	if (((!wearables[item.type]) || item.consumableOnCombat || item.consumable || itemTypeLogics[item.type].consumable) && showAmount) {
		amountText = div('amount', amount);
	}
	if (item.uniqueOnLoot && !item.consumableOnCombat && !item.consumable && !itemTypeLogics[item.type].consumable) {
		amountText = '';
	}

	var selectedText = ''
	if (selected && d.state == State.Playing) {
		selectedText = img('selected', '', 'imgtransparent');
	}

	var actionableText = ''
	if (actionable && d.state == State.Playing) {
		if (!item.consumableOnCombat) {
			actionableText = img('actionable', '', 'imgtransparent');
		} else {
			actionableText = img('actionableconsumable', '', 'imgtransparent');
		}
	}

	var equippedText = ''
	if (equipped) {
		equippedText = img('equipped', '', 'imgtransparent');
	}

	var imgclass = 'tileimg'
	if (showUseable && (item.minimumIntelligence > d.intelligence || item.minimumStrength > d.strength)) {
		imgclass = 'tileimg grayed';
		actionableText = '';
	}

	var content = img(item.image, amountText, imgclass);

	var rarityTile = 'tilecommon';
	if (item.rarity == Rarity.Uncommon) {
		rarityTile = 'tileuncommon';
	} else if (item.rarity == Rarity.Rare) {
		rarityTile = 'tilerare';
	} else if (item.rarity == Rarity.Epic) {
		rarityTile = 'tileepic';
	} else if (item.rarity == Rarity.Transcendent) {
		rarityTile = 'tiletranscendent';
	} else if (item.rarity == Rarity.Legendary) {
		rarityTile = 'tilelegendary';
	} else if (item.rarity == Rarity.Mythical) {
		rarityTile = 'tilemythical';
	} else if (item.rarity == Rarity.Godly) {
		rarityTile = 'tilegodly';
	}

	return img(rarityTile, div('tileinner', content) + equippedText + selectedText + actionableText, 'tile');
}

function doorAction(image, key, doorColor='doorframe', doorDiv='action', content='') {
	return img('doorframe', imgOnclick(image, "simpleKeyPress('" + key + "')", content, 'imgtransparent imgclip') + img(doorColor, '', 'imgtransparent') + shortcutDivAction(key), doorDiv);
}

function doorActionMob(mob, key) {
	var image = mobs[mob].image;
	var winCount = mobWinCounts[mob];


	var opacityYellow = 0;
	var opacityRed = 0;
	var high = 99;
	var mid = 80;
	var low = 40;
	if (winCount >= high) {
		opacityYellow = 0;
		opacityRed = 0;
	} else if (winCount >= mid) {
		opacityYellow = 1-((winCount-mid)/(high-mid))
		opacityRed = 0;
	} else if (winCount >= low) {
		opacityYellow = 1;
		opacityRed = 1-((winCount-low)/(mid-low))
	} else {
		opacityYellow = 0;
		opacityRed = 1;
	}
	return img('doorframe', imgOnclick(image, "simpleKeyPress('" + key + "')", '', 'imgtransparent imgclip') + img('doorframegreen', '', 'imgtransparent') + imgOpacity('doorframeyellow', opacityYellow, '', 'imgtransparent') + imgOpacity('doorframered', opacityRed, '', 'imgtransparent') + shortcutDivAction(key), 'action');
}

function imageAction(image, key) {
	return img(image, shortcutDivAction(key), 'action');
}

function disableControls() {
	controlsDisabled = true;
}

function enableControls() {
	controlsDisabled = false;
}

function fadeWrapper(func) {
	deferUpdate = true;
	disableControls();
	fadeOut(function () {
		func();
		update();
		deferUpdate = false;
		fadeIn(function () { enableControls(); });
	});
}

function fadeOut(callback) {
	if (!fadeEnabled) {
		callback();
		return;
	}
	showActions();
    
    var actionsDiv = document.getElementsByClassName('actions')[0] as HTMLElement;
    
    if (actionsDiv) {
		fadeGoingUp = false;
        doFadeOut();
    }

    function doFadeOut() {
    	if (fadeGoingUp) {
    		return;
    	}
        if (actionsOpacity > 0) {
        	actionsOpacity = Math.max(0, actionsOpacity - 0.05 * FADESPEED);
            actionsDiv.style.opacity = actionsOpacity.toString();
            setTimeout(doFadeOut, 10);
        } else {
			fadeGoingUp = true;
        	if (callback) {
	            callback();
	        }
        }
    }
}

function fadeIn(callback) {
	if (!fadeEnabled) {
		callback();
		return;
	}
    var actionsDiv = document.getElementsByClassName('actions')[0] as HTMLElement;

	    if (actionsDiv) {
        doFadeIn();
    }

    function doFadeIn() {
	    if (!fadeGoingUp) {
        	return;
        }
        if (actionsOpacity < 1) {
        	actionsOpacity = Math.min(1, actionsOpacity + 0.15 * FADESPEED);
            actionsDiv.style.opacity = actionsOpacity.toString();
            setTimeout(doFadeIn, 10);
        } else if (callback) {
            callback();
        }
    }
}

function buttonImage(text, shortcut='') {
	var shortcutText = '';
	if (shortcut) {
		shortcutText = shortcutDiv(shortcut);
	}
	return img('button', div('buttontext',text) + shortcutText, 'buttonimage');
}

function smallButtonImage(text, shortcut='') {
	var shortcutText = '';
	if (shortcut) {
		shortcutText = shortcutDiv(shortcut);
	}
	return img('button', div('smallbuttontext',text) + shortcutText, 'smallbuttonimage');
}