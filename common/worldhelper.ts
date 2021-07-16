function mobChance(chance, name, unique=false, mustOnce=false) {
	return <DoorChance>{chance: chance, unique: unique, mustOnce: mustOnce, door: <Door>{type: DoorType.Mob, mob: name}};
}

function itemChance(chance, name, amount, itemImage, unique=false, mustOnce=false) {
	return <DoorChance>{chance: chance, unique: unique, mustOnce: mustOnce, door: <Door>{type: DoorType.Item, item: name, itemAmount: amount, itemImage: itemImage}};
}

function nextDepth() {
	return <DoorChance>{chance: 1, door: <Door>{type: DoorType.NextDepth}};
}

function transcend() {
	return <DoorChance>{chance: 1, door: <Door>{type: DoorType.Transcend}};
}

function lootItemProbability(probability, item, minAmount=1, maxAmount=1) {
	return <Loot>{probability: probability, item: item, itemMinAmount: minAmount, itemMaxAmount: maxAmount};
}

function lootSelectorProbability(probability, lootSelectors: LootSelector[]) {
	return <Loot>{probability: probability, lootSelectors: lootSelectors};
}

function selectorChance(chance, item, minAmount=1, maxAmount=1) {
	return <LootSelector>{chance: chance, item: item, itemMinAmount: minAmount, itemMaxAmount: maxAmount};
}
