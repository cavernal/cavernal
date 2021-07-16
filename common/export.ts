function exportDataToBase64() {
  var name = prompt('Player name? (Optional)');
  if (!name) {
    name = '';
  }
  var comment = prompt('Comment? (Optional)');
  if (!comment) {
    comment = '';
  }
  clear();
  var achievements = d.achievements;
  d.achievements = {};
	d.playerName = htmlEntities(name.replace('@', '#').replace('"', '#').replace('\n', '#').replace('\r', '#'));
  d.comment = htmlEntities(comment.replace('@', '#').replace('"', '#').replace('\n', '#').replace('\r', '#'));
  var data = '** Cavernal gamedata export, visualize it at www.cavernal.com, player "' + d.playerName + '", comment "' + d.comment + '", timestamp "' + d.timestamp + '" ** @' + btoa(JSON.stringify(d));
  outLine(buttonEvent('selectDataExport()', div('dataexport', data)));
  outLine('');
  if (copyTextToClipboard(data)) {
    outLine('The gamedata was exported to the clipboard (if not, right click and copy), paste it somewhere and share it!');
  } else {
    outLine('Select and copy the gamedata, paste it somewhere, and share it!');
  }
  d.achievements = achievements;
  update();
  selectDataExport();
}

function importDataFromBase64(gamedata) {
  var data = gamedata;
  if (data.includes('@')) {
    data = gamedata.split('@').slice(-1).join('@');
  }
  if (!data) {
    return false;
  }
  var parsedGamedata;
  try {
    parsedGamedata = JSON.parse(atob(data));
  } catch (e) {
    return false;
  }
  if (!parsedGamedata) {
    return false;
  }
  var achievements = d.achievements;
  d = parsedGamedata;
  d.achievements = achievements;  
  d.loaded = true;
  if (d.state != State.Dead && d.state != State.Transcended) {
    d.state = State.Dead;
  }
  processLoadedData();
  return true;
}

function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");

  //
  // *** This styling is an extra step which is likely not required. ***
  //
  // Why is it here? To ensure:
  // 1. the element is able to have focus and selection.
  // 2. if the element was to flash render it has minimal visual impact.
  // 3. less flakyness with selection and copying which **might** occur if
  //    the textarea element is not visible.
  //
  // The likelihood is the element won't even render, not even a
  // flash, so some of these are just precautions. However in
  // Internet Explorer the element is visible whilst the popup
  // box asking the user for permission for the web page to
  // copy to the clipboard.

  // Place in the top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed';
  textArea.style.top = '0';
  textArea.style.left = '0';

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em';
  textArea.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = '0';

  // Clean up any borders.
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  // Avoid flash of the white box if rendered for any reason.
  textArea.style.background = 'transparent';

  textArea.value = text;

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  var successful = false;
  try {
    successful = document.execCommand('copy');
  } catch (err) {
    successful = false;
  }
  document.body.removeChild(textArea);
  return successful;
}

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function selectDataExport() {
  if (window.getSelection && document.createRange) {
    window.setTimeout(function(){
      var el = document.getElementsByClassName('dataexport')[0] as HTMLElement;
      copyTextToClipboard(el.textContent);
      var sel = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(el);
      sel.removeAllRanges();
      sel.addRange(range);
    }, 1);
  }
}