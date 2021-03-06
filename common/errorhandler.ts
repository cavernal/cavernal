 function handleError(errorMsg, url, lineNumber) {
   var result = confirm(
      'Error occured: ' + errorMsg + ' at line ' + lineNumber + '\nThis is not expected. ' +
      'Press "OK" to continue or press "cancel" to abort this game run and restart the game, which may fix it');
   if (result) {
      return true;
   } else {
      var achievements = d.achievements;
      d = <Data>{};
      d.achievements = achievements;
      d.state = State.Menu;
      d.equip = {};
      d.lastequip = {};
      d.generatedUniqueRooms = {};
      d.generatedUniqueOnLootItems = {};
      d.doors = [<Door>{type: DoorType.Transcend}];
      saveData();
      document.location.reload();
   }
}