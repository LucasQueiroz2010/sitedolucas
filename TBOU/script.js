const bossImagesMap = {
    "Mom's Heart": "Mom_Heart.png",
    "Isaac": "Isaac.png",
    "Satan": "Satan.png",
    "Blue Baby": "Blue_Baby.png",
    "The Lamb": "The_Lamb.png",
    "Mega Satan": "Mega_Satan.png",
    "Hush": "Hush.png",
    "Delirium": "Delirium.png",
    "Mother": "Mother.png",
    "The Beast": "The_Beast.png",
    "Boss Rush": "Boss_Rush.png",
    "Greed Mode": "Ultra_Greed.png",
    "Greedier Mode": "Ultra_Greedier.png"
};

const gameData = {
    "Isaac": {
        name: "Isaac", image: "img/Characters/Normal/Isaac.png", description: "The crying child with gamble problems. Well-balanced stats.",
        stats: "HP: 3 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        startingItems: [
            { name: "1 Bomb", img: "Bomb.png", condition: null },
            { name: "The D6", img: "D6.png", condition: "bluebaby_2", conditionText: "Beat Isaac as Blue Baby" }
        ],
        unlocks: [
            { id: "isaac_1", boss: "Mom's Heart", item: "Lost Baby", diff: "Hard" },
            { id: "isaac_2", boss: "Isaac", item: "Mom's Knife", diff: "Normal/Hard" },
            { id: "isaac_3", boss: "Satan", item: "Mom's Perfume", diff: "Normal/Hard" },
            { id: "isaac_4", boss: "Blue Baby", item: "D20", diff: "Normal/Hard" },
            { id: "isaac_5", boss: "The Lamb", item: "Missing Poster", diff: "Normal/Hard" },
            { id: "isaac_6", boss: "Mega Satan", item: "Cry Baby", diff: "Normal/Hard" },
            { id: "isaac_7", boss: "Boss Rush", item: "Isaac's Head", diff: "Normal/Hard" },
            { id: "isaac_8", boss: "Hush", item: "Fart Baby", diff: "Normal/Hard" },
            { id: "isaac_9", boss: "Delirium", item: "D Infinity", diff: "Normal/Hard" },
            { id: "isaac_10", boss: "Mother", item: "Guppy's Eye", diff: "Normal/Hard" },
            { id: "isaac_11", boss: "The Beast", item: "Options?", diff: "Normal/Hard" },
            { id: "isaac_12", boss: "Greed Mode", item: "Lil Chest", diff: "Normal" },
            { id: "isaac_13", boss: "Greedier Mode", item: "D1", diff: "Hard" }
        ]
    },
    "Magdalene": {
        name: "Magdalene", image: "img/Characters/Normal/Magdalene.png", description: "The tanky girl. Slow but starts with extra health.",
        stats: "HP: 4 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 0.85",
        startingItems: [
            { name: "Yum Heart", img: "Yum_Heart.png", condition: null },
            { name: "Full Health Pill", img: "Full_Health_Pill.png", condition: "chal_32", conditionText: "April's Fool Challenge" }
        ],
        unlocks: [
            { id: "mag_1", boss: "Mom's Heart", item: "Cute Baby", diff: "Hard" },
            { id: "mag_2", boss: "Isaac", item: "Celtic Cross", diff: "Normal/Hard" },
            { id: "mag_3", boss: "Satan", item: "Guardian Angel", diff: "Normal/Hard" },
            { id: "mag_4", boss: "Blue Baby", item: "Maggy's Faith", diff: "Normal/Hard" },
            { id: "mag_5", boss: "The Lamb", item: "Maggy's Bow", diff: "Normal/Hard" },
            { id: "mag_6", boss: "Mega Satan", item: "Red Baby", diff: "Normal/Hard" },
            { id: "mag_7", boss: "Boss Rush", item: "The Relic", diff: "Normal/Hard" },
            { id: "mag_8", boss: "Hush", item: "Purity", diff: "Normal/Hard" },
            { id: "mag_9", boss: "Delirium", item: "Eucharist", diff: "Normal/Hard" },
            { id: "mag_10", boss: "Mother", item: "Yuck Heart", diff: "Normal/Hard" },
            { id: "mag_11", boss: "The Beast", item: "Candies", diff: "Normal/Hard" },
            { id: "mag_12", boss: "Greed Mode", item: "Censer", diff: "Normal" },
            { id: "mag_13", boss: "Greedier Mode", item: "Glyph of Balance", diff: "Hard" }
        ]
    },
    "Cain": {
        name: "Cain", image: "img/Characters/Normal/Cain.png", description: "The real gambler! Fast and lucky, but only shoots from one eye.",
        stats: "HP: 2 Red<br>DMG: 4.20<br>Tears: 2.73<br>Speed: 1.30",
        startingItems: [
            { name: "Lucky Foot", img: "Lucky_Foot.png", condition: null },
            { name: "Paper Clip", img: "Paper_Clip.png", condition: "greed_68", conditionText: "Donate 68c to Greed Machine" }
        ],
        unlocks: [
            { id: "cain_1", boss: "Mom's Heart", item: "Glass Baby", diff: "Hard" },
            { id: "cain_2", boss: "Isaac", item: "Bag of Pennies", diff: "Normal/Hard" },
            { id: "cain_3", boss: "Satan", item: "Bomb Bag", diff: "Normal/Hard" },
            { id: "cain_4", boss: "Blue Baby", item: "Cain's Eye", diff: "Normal/Hard" },
            { id: "cain_5", boss: "The Lamb", item: "Abel", diff: "Normal/Hard" },
            { id: "cain_6", boss: "Mega Satan", item: "Green Baby", diff: "Normal/Hard" },
            { id: "cain_7", boss: "Boss Rush", item: "Guppy's Hairball", diff: "Normal/Hard" },
            { id: "cain_8", boss: "Hush", item: "D12", diff: "Normal/Hard" },
            { id: "cain_9", boss: "Delirium", item: "Silver Dollar", diff: "Normal/Hard" },
            { id: "cain_10", boss: "Mother", item: "Guppy's Eye", diff: "Normal/Hard" },
            { id: "cain_11", boss: "The Beast", item: "Pound of Flesh", diff: "Normal/Hard" },
            { id: "cain_12", boss: "Greed Mode", item: "Evil Eye", diff: "Normal" },
            { id: "cain_13", boss: "Greedier Mode", item: "Sack of Sacks", diff: "Hard" }
        ]
    },
    "Judas": {
        name: "Judas", image: "img/Characters/Normal/Judas.png", description: "The strongest weakness. High damage, low health.",
        stats: "HP: 1 Red<br>DMG: 4.72<br>Tears: 2.73<br>Speed: 1.00",
        startingItems: [
            { name: "The Book of Belial", img: "Book_of_Belial.png", condition: null },
            { name: "3 Pennies", img: "Penny.png", condition: null }
        ],
        unlocks: [
            { id: "judas_1", boss: "Mom's Heart", item: "Shadow Baby", diff: "Hard" },
            { id: "judas_2", boss: "Isaac", item: "Guillotine", diff: "Normal/Hard" },
            { id: "judas_3", boss: "Satan", item: "Judas' Tongue", diff: "Normal/Hard" },
            { id: "judas_4", boss: "Blue Baby", item: "Curved Horn", diff: "Normal/Hard" },
            { id: "judas_5", boss: "The Lamb", item: "Demon Baby", diff: "Normal/Hard" },
            { id: "judas_6", boss: "Mega Satan", item: "Brown Baby", diff: "Normal/Hard" },
            { id: "judas_7", boss: "Boss Rush", item: "Judas' Shadow", diff: "Normal/Hard" },
            { id: "judas_8", boss: "Hush", item: "Betrayal", diff: "Normal/Hard" },
            { id: "judas_9", boss: "Delirium", item: "Shade", diff: "Normal/Hard" },
            { id: "judas_10", boss: "Mother", item: "Akeldama", diff: "Normal/Hard" },
            { id: "judas_11", boss: "The Beast", item: "RC Remote", diff: "Normal/Hard" },
            { id: "judas_12", boss: "Greed Mode", item: "My Shadow", diff: "Normal" },
            { id: "judas_13", boss: "Greedier Mode", item: "Eye of Belial", diff: "Hard" }
        ]
    },
    "Blue Baby": {
        name: "Blue Baby", image: "img/Characters/Normal/Blue_Baby.png", description: "The cadaver. Only uses Soul Hearts as health.",
        stats: "HP: 3 Soul<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.05",
        startingItems: [
            { name: "The Poop", img: "The_Poop.png", condition: null }
        ],
        unlocks: [
            { id: "bluebaby_1", boss: "Mom's Heart", item: "Fate Baby", diff: "Hard" },
            { id: "bluebaby_2", boss: "Isaac", item: "The D6", diff: "Normal/Hard" },
            { id: "bluebaby_3", boss: "Satan", item: "Forget Me Now", diff: "Normal/Hard" },
            { id: "bluebaby_4", boss: "Blue Baby", item: "Fate", diff: "Normal/Hard" },
            { id: "bluebaby_5", boss: "The Lamb", item: "???'s Only Friend", diff: "Normal/Hard" },
            { id: "bluebaby_6", boss: "Mega Satan", item: "Blue Baby (Co-op)", diff: "Normal/Hard" },
            { id: "bluebaby_7", boss: "Boss Rush", item: "Mysterious Paper", diff: "Normal/Hard" },
            { id: "bluebaby_8", boss: "Hush", item: "Sworn Protector", diff: "Normal/Hard" },
            { id: "bluebaby_9", boss: "Delirium", item: "Meconium", diff: "Normal/Hard" },
            { id: "bluebaby_10", boss: "Mother", item: "Eternal D6", diff: "Normal/Hard" },
            { id: "bluebaby_11", boss: "The Beast", item: "The Scooper", diff: "Normal/Hard" },
            { id: "bluebaby_12", boss: "Greed Mode", item: "Cracked Dice", diff: "Normal" },
            { id: "bluebaby_13", boss: "Greedier Mode", item: "Black Hole", diff: "Hard" }
        ]
    },
    "Eve": {
        name: "Eve", image: "img/Characters/Normal/Eve.png", description: "The depressed emo. Gets stronger at 1 red heart or less.",
        stats: "HP: 2 Red<br>DMG: 2.62<br>Tears: 2.73<br>Speed: 1.23",
        startingItems: [
            { name: "Whore of Babylon", img: "Whore_of_Babylon.png", condition: null },
            { name: "Dead Bird", img: "Dead_Bird.png", condition: null },
            { name: "Razor Blade", img: "Razor_Blade.png", condition: "greed_439", conditionText: "Donate 439c to Greed Machine" }
        ],
        unlocks: [
            { id: "eve_1", boss: "Mom's Heart", item: "Crow Baby", diff: "Hard" },
            { id: "eve_2", boss: "Isaac", item: "Eve's Bird Foot", diff: "Normal/Hard" },
            { id: "eve_3", boss: "Satan", item: "Eve's Mascara", diff: "Normal/Hard" },
            { id: "eve_4", boss: "Blue Baby", item: "Razor Blade", diff: "Normal/Hard" },
            { id: "eve_5", boss: "The Lamb", item: "Sacrificial Dagger", diff: "Normal/Hard" },
            { id: "eve_6", boss: "Mega Satan", item: "Whore Baby", diff: "Normal/Hard" },
            { id: "eve_7", boss: "Boss Rush", item: "Black Lipstick", diff: "Normal/Hard" },
            { id: "eve_8", boss: "Hush", item: "Maw of the Void", diff: "Normal/Hard" },
            { id: "eve_9", boss: "Delirium", item: "Dull Razor", diff: "Normal/Hard" },
            { id: "eve_10", boss: "Mother", item: "Sumptorium", diff: "Normal/Hard" },
            { id: "eve_11", boss: "The Beast", item: "Lil Clot", diff: "Normal/Hard" },
            { id: "eve_12", boss: "Greed Mode", item: "Black Feather", diff: "Normal" },
            { id: "eve_13", boss: "Greedier Mode", item: "Crow Heart", diff: "Hard" }
        ]
    },
    "Samson": {
        name: "Samson", image: "img/Characters/Normal/Samson.png", description: "The skill issue factory. Gains damage when taking damage.",
        stats: "HP: 3 Red<br>DMG: 3.50<br>Tears: 2.45<br>Speed: 1.10",
        startingItems: [
            { name: "Bloody Lust", img: "Bloody_Lust.png", condition: null },
            { name: "Child's Heart", img: "Childs_Heart.png", condition: "chal_34", conditionText: "Ultra Hard Challenge" }
        ],
        unlocks: [
            { id: "samson_1", boss: "Mom's Heart", item: "Fighting Baby", diff: "Hard" },
            { id: "samson_2", boss: "Isaac", item: "Blood Rights", diff: "Normal/Hard" },
            { id: "samson_3", boss: "Satan", item: "Bloody Lust", diff: "Normal/Hard" },
            { id: "samson_4", boss: "Blue Baby", item: "Samson's Lock", diff: "Normal/Hard" },
            { id: "samson_5", boss: "The Lamb", item: "Samson's Chains", diff: "Normal/Hard" },
            { id: "samson_6", boss: "Mega Satan", item: "Rage Baby", diff: "Normal/Hard" },
            { id: "samson_7", boss: "Boss Rush", item: "Blindfolded", diff: "Normal/Hard" },
            { id: "samson_8", boss: "Hush", item: "Blind Rage", diff: "Normal/Hard" },
            { id: "samson_9", boss: "Delirium", item: "Stem Cell", diff: "Normal/Hard" },
            { id: "samson_10", boss: "Mother", item: "Bloody Gust", diff: "Normal/Hard" },
            { id: "samson_11", boss: "The Beast", item: "Urn of Souls", diff: "Normal/Hard" },
            { id: "samson_12", boss: "Greed Mode", item: "Lusty Blood", diff: "Normal" },
            { id: "samson_13", boss: "Greedier Mode", item: "Half a Heart", diff: "Hard" }
        ]
    },
    "Azazel": {
        name: "Azazel", image: "img/Characters/Normal/Azazel.png", description: "The demon. Starts with flight and short-range Brimstone.",
        stats: "HP: 3 Black<br>DMG: 5.50<br>Tears: 0.76<br>Speed: 1.25",
        startingItems: [
            { name: "0 - The Fool", img: "The_Fool.png", condition: null }
        ],
        unlocks: [
            { id: "azazel_1", boss: "Mom's Heart", item: "Demon Baby", diff: "Hard" },
            { id: "azazel_2", boss: "Isaac", item: "Satanic Bible", diff: "Normal/Hard" },
            { id: "azazel_3", boss: "Satan", item: "Abaddon", diff: "Normal/Hard" },
            { id: "azazel_4", boss: "Blue Baby", item: "Demon Tail", diff: "Normal/Hard" },
            { id: "azazel_5", boss: "The Lamb", item: "The Nail", diff: "Normal/Hard" },
            { id: "azazel_6", boss: "Mega Satan", item: "Black Baby", diff: "Normal/Hard" },
            { id: "azazel_7", boss: "Boss Rush", item: "The Nail", diff: "Normal/Hard" },
            { id: "azazel_8", boss: "Hush", item: "Maw of the Void", diff: "Normal/Hard" },
            { id: "azazel_9", boss: "Delirium", item: "Dark Prince's Crown", diff: "Normal/Hard" },
            { id: "azazel_10", boss: "Mother", item: "Devil's Crown", diff: "Normal/Hard" },
            { id: "azazel_11", boss: "The Beast", item: "Azazel's Rage", diff: "Normal/Hard" },
            { id: "azazel_12", boss: "Greed Mode", item: "Lilith", diff: "Normal" },
            { id: "azazel_13", boss: "Greedier Mode", item: "Bat Wing", diff: "Hard" }
        ]
    },
    "Lazarus": {
        name: "Lazarus", 
        image: "img/Characters/Normal/Lazarus.png", 
        image2: "img/Characters/Normal/Lazarus_Risen.png", 
        description: "The suicidal. Revives once per floor with better stats. On next floor, loses all stats, but keeps +0,5 damage. Loses a heart container on death",
        stats: "HP: 3 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        startingItems: [
            { name: "Random Pill", img: "Random_Pill.png", condition: null },
            { name: "Anemic", img: "Anemic.png", condition: "chal_31", conditionText: "Backasswards Challenge" }
        ],
        unlocks: [
            { id: "laz_1", boss: "Mom's Heart", item: "Long Baby", diff: "Hard" },
            { id: "laz_2", boss: "Isaac", item: "Lazarus' Rags", diff: "Normal/Hard" },
            { id: "laz_3", boss: "Satan", item: "Broken Ankh", diff: "Normal/Hard" },
            { id: "laz_4", boss: "Blue Baby", item: "Pandora's Box", diff: "Normal/Hard" },
            { id: "laz_5", boss: "The Lamb", item: "Suicide King", diff: "Normal/Hard" },
            { id: "laz_6", boss: "Mega Satan", item: "Key Baby", diff: "Normal/Hard" },
            { id: "laz_7", boss: "Boss Rush", item: "Missing No.", diff: "Normal/Hard" },
            { id: "laz_8", boss: "Hush", item: "Empty Vessel", diff: "Normal/Hard" },
            { id: "laz_9", boss: "Delirium", item: "Compound Fracture", diff: "Normal/Hard" },
            { id: "laz_10", boss: "Mother", item: "Astral Projection", diff: "Normal/Hard" },
            { id: "laz_11", boss: "The Beast", item: "Brimstone Bombs", diff: "Normal/Hard" },
            { id: "laz_12", boss: "Greed Mode", item: "Store Key", diff: "Normal" },
            { id: "laz_13", boss: "Greedier Mode", item: "Plan C", diff: "Hard" }
        ]
    },
    "Eden": {
        name: "Eden", image: "img/Characters/Normal/Eden.png", description: "The RNG. Random stats and items. Costs 1 Eden Token. You gain 1 Eden Token per Mom's Heart/It Lives! kill.",
        stats: "HP: Random<br>DMG: Random<br>Tears: Random<br>Speed: Random",
        startingItems: [
            { name: "Random Active", img: "Random_Active.png", condition: null },
            { name: "Random Passive", img: "Random_Passive.png", condition: null }
        ],
        unlocks: [
            { id: "eden_1", boss: "Mom's Heart", item: "Glitch Baby", diff: "Hard" },
            { id: "eden_2", boss: "Isaac", item: "A Blank Page", diff: "Normal/Hard" },
            { id: "eden_3", boss: "Satan", item: "Book of Secrets", diff: "Normal/Hard" },
            { id: "eden_4", boss: "Blue Baby", item: "Mysterious Words", diff: "Normal/Hard" },
            { id: "eden_5", boss: "The Lamb", item: "Mystery Sack", diff: "Normal/Hard" },
            { id: "eden_6", boss: "Mega Satan", item: "Yellow Baby", diff: "Normal/Hard" },
            { id: "eden_7", boss: "Boss Rush", item: "Undefined", diff: "Normal/Hard" },
            { id: "eden_8", boss: "Hush", item: "Eden's Blessing", diff: "Normal/Hard" },
            { id: "eden_9", boss: "Delirium", item: "Eden's Soul", diff: "Normal/Hard" },
            { id: "eden_10", boss: "Mother", item: "Star of Bethlehem", diff: "Normal/Hard" },
            { id: "eden_11", boss: "The Beast", item: "Tainted Eden", diff: "Normal/Hard" },
            { id: "eden_12", boss: "Greed Mode", item: "GB Bug", diff: "Normal" },
            { id: "eden_13", boss: "Greedier Mode", item: "Metronome", diff: "Hard" }
        ]
    },
    "The Lost": {
        name: "The Lost", image: "img/Characters/Normal/The_Lost.png", description: "The glass issue. Dies in one hit if Holy Mantle isn't unlocked. Takes free Devil Deals, but only one of the options!",
        stats: "HP: None<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        startingItems: [
            { name: "Eternal D6", img: "Eternal_D6.png", condition: null },
            { name: "Holy Mantle", img: "Holy_Mantle.png", condition: "greed_879", conditionText: "Donate 879c to Greed Machine" }
        ],
        unlocks: [
            { id: "lost_1", boss: "Mom's Heart", item: "D20", diff: "Normal/Hard" },
            { id: "lost_2", boss: "Isaac", item: "The Mind", diff: "Normal/Hard" },
            { id: "lost_3", boss: "Satan", item: "The Pact", diff: "Normal/Hard" },
            { id: "lost_4", boss: "Blue Baby", item: "The Body", diff: "Normal/Hard" },
            { id: "lost_5", boss: "The Lamb", item: "The Soul", diff: "Normal/Hard" },
            { id: "lost_6", boss: "Mega Satan", item: "White Baby", diff: "Normal/Hard" },
            { id: "lost_7", boss: "Boss Rush", item: "D100", diff: "Normal/Hard" },
            { id: "lost_8", boss: "Hush", item: "Sworn Protector", diff: "Normal/Hard" },
            { id: "lost_9", boss: "Delirium", item: "Holy Card", diff: "Normal/Hard" },
            { id: "lost_10", boss: "Mother", item: "Lost Soul", diff: "Normal/Hard" },
            { id: "lost_11", boss: "The Beast", item: "Hungry Soul", diff: "Normal/Hard" },
            { id: "lost_12", boss: "Greed Mode", item: "Zodiac", diff: "Normal" },
            { id: "lost_13", boss: "Greedier Mode", item: "Dad's Lost Coin", diff: "Hard" }
        ]
    },
    "Lilith": {
        name: "Lilith", image: "img/Characters/Normal/Lilith.png", description: "The mother of the group. Can't fires tears by herself, so it uses familiars to shoot teras for her.",
        stats: "HP: 1 Red, 2 Black<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        startingItems: [
            { name: "Incubus", img: "Incubus.png", condition: null },
            { name: "Cambion Conception", img: "Cambion_Conception.png", condition: null },
            { name: "Box of Friends", img: "Box_of_Friends.png", condition: null }
        ],
        unlocks: [
            { id: "lilith_1", boss: "Mom's Heart", item: "Rune Bag", diff: "Normal/Hard" },
            { id: "lilith_2", boss: "Isaac", item: "Immaculate Conception", diff: "Normal/Hard" },
            { id: "lilith_3", boss: "Satan", item: "Serpent's Kiss", diff: "Normal/Hard" },
            { id: "lilith_4", boss: "Blue Baby", item: "Incubus", diff: "Normal/Hard" },
            { id: "lilith_5", boss: "The Lamb", item: "Succubus", diff: "Normal/Hard" },
            { id: "lilith_6", boss: "Mega Satan", item: "Big Baby", diff: "Normal/Hard" },
            { id: "lilith_7", boss: "Boss Rush", item: "Immaculate Conception", diff: "Normal/Hard" },
            { id: "lilith_8", boss: "Hush", item: "Rune Bag", diff: "Normal/Hard" },
            { id: "lilith_9", boss: "Delirium", item: "Duality", diff: "Normal/Hard" },
            { id: "lilith_10", boss: "Mother", item: "Blood Puppy", diff: "Normal/Hard" },
            { id: "lilith_11", boss: "The Beast", item: "Cursed Penny", diff: "Normal/Hard" },
            { id: "lilith_12", boss: "Greed Mode", item: "Box of Friends", diff: "Normal" },
            { id: "lilith_13", boss: "Greedier Mode", item: "Euthanasia", diff: "Hard" }
        ]
    },
    "Keeper": {
        name: "Keeper", image: "img/Characters/Normal/Keeper.png", description: "The buyer. Health = coins. Picking up coins heals him.",
        stats: "HP: 2 Coin Hearts<br>DMG: 4.20<br>Tears: 1.20<br>Speed: 0.85",
        startingItems: [
            { name: "1 Bomb", img: "Bomb.png", condition: null },
            { name: "Wooden Nickel", img: "Wooden_Nickel.png", condition: "keeper_2", conditionText: "Beat Isaac as Keeper" },
            { name: "Store Key", img: "Store_Key.png", condition: "keeper_3", conditionText: "Beat Satan as Keeper" },
            { name: "3rd Coin Heart", img: "Coin_Heart.png", condition: "keeper_8", conditionText: "Beat Hush as Keeper" }
        ],
        unlocks: [
            { id: "keeper_1", boss: "Mom's Heart", item: "Rib of Greed", diff: "Normal/Hard" },
            { id: "keeper_2", boss: "Isaac", item: "Keeper's Wooden Nickel", diff: "Normal/Hard" },
            { id: "keeper_3", boss: "Satan", item: "Keeper's Store Key", diff: "Normal/Hard" },
            { id: "keeper_4", boss: "Blue Baby", item: "Karma", diff: "Normal/Hard" },
            { id: "keeper_5", boss: "The Lamb", item: "Deep Pockets", diff: "Normal/Hard" },
            { id: "keeper_6", boss: "Mega Satan", item: "Noose Baby", diff: "Normal/Hard" },
            { id: "keeper_7", boss: "Boss Rush", item: "Sticky Nickel", diff: "Normal/Hard" },
            { id: "keeper_8", boss: "Hush", item: "Keeper's Penny", diff: "Normal/Hard" },
            { id: "keeper_9", boss: "Delirium", item: "Crooked Penny", diff: "Normal/Hard" },
            { id: "keeper_10", boss: "Mother", item: "Keeper's Sack", diff: "Normal/Hard" },
            { id: "keeper_11", boss: "The Beast", item: "Penny Tears", diff: "Normal/Hard" },
            { id: "keeper_12", boss: "Greed Mode", item: "Rib of Greed", diff: "Normal" },
            { id: "keeper_13", boss: "Greedier Mode", item: "Eye of Greed", diff: "Hard" }
        ]
    },
    "Apollyon": {
        name: "Apollyon", image: "img/Characters/Normal/Apollyon.png", description: "The re-user. Absorbs passive items and turn then into stats or active effects for permanent effect using Void.",
        stats: "HP: 2 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        startingItems: [
            { name: "Void", img: "Void.png", condition: null }
        ],
        unlocks: [
            { id: "apollyon_1", boss: "Mom's Heart", item: "Smelter", diff: "Normal/Hard" },
            { id: "apollyon_2", boss: "Isaac", item: "Locust of Light", diff: "Normal/Hard" },
            { id: "apollyon_3", boss: "Satan", item: "Locust of Death", diff: "Normal/Hard" },
            { id: "apollyon_4", boss: "Blue Baby", item: "Locust of Famine", diff: "Normal/Hard" },
            { id: "apollyon_5", boss: "The Lamb", item: "Locust of Pestilence", diff: "Normal/Hard" },
            { id: "apollyon_6", boss: "Mega Satan", item: "Brown Baby", diff: "Normal/Hard" },
            { id: "apollyon_7", boss: "Boss Rush", item: "Locust of Wrath", diff: "Normal/Hard" },
            { id: "apollyon_8", boss: "Hush", item: "Hushy", diff: "Normal/Hard" },
            { id: "apollyon_9", boss: "Delirium", item: "Void", diff: "Normal/Hard" },
            { id: "apollyon_10", boss: "Mother", item: "Worm Friend", diff: "Normal/Hard" },
            { id: "apollyon_11", boss: "The Beast", item: "Plum Flute", diff: "Normal/Hard" },
            { id: "apollyon_12", boss: "Greed Mode", item: "Brown Crown", diff: "Normal" },
            { id: "apollyon_13", boss: "Greedier Mode", item: "Black Crown", diff: "Hard" }
        ]
    },
    "The Forgotten": {
        name: "The Forgotten", 
        image: "img/Characters/Normal/The_Forgotten.png", 
        description: "The bony boi + soul. Two characters in one: Melee skeleton and flying soul. They're chained to each other.",
        stats: "HP: 2 Bone (Soul has 1 Soul)<br>DMG: 5.25<br>Tears: 1.36<br>Speed: 1.00",
        startingItems: [
            { name: "Bone Club", img: "Bone_Club.png", condition: null }
        ],
        unlocks: [
            { id: "forgotten_1", boss: "Mom's Heart", item: "Bone Spurs", diff: "Normal/Hard" },
            { id: "forgotten_2", boss: "Isaac", item: "Divorce Papers", diff: "Normal/Hard" },
            { id: "forgotten_3", boss: "Satan", item: "Jaw Bone", diff: "Normal/Hard" },
            { id: "forgotten_4", boss: "Blue Baby", item: "Brittle Beauty", diff: "Normal/Hard" },
            { id: "forgotten_5", boss: "The Lamb", item: "Slipped Rib", diff: "Normal/Hard" },
            { id: "forgotten_6", boss: "Mega Satan", item: "Bone Baby", diff: "Normal/Hard" },
            { id: "forgotten_7", boss: "Boss Rush", item: "Marrow", diff: "Normal/Hard" },
            { id: "forgotten_8", boss: "Hush", item: "Pointy Rib", diff: "Normal/Hard" },
            { id: "forgotten_9", boss: "Delirium", item: "Book of the Dead", diff: "Normal/Hard" },
            { id: "forgotten_10", boss: "Mother", item: "Spirit Shackles", diff: "Normal/Hard" },
            { id: "forgotten_11", boss: "The Beast", item: "Hollow Heart", diff: "Normal/Hard" },
            { id: "forgotten_12", boss: "Greed Mode", item: "Dad's Ring", diff: "Normal" },
            { id: "forgotten_13", boss: "Greedier Mode", item: "Polydactyly", diff: "Hard" }
        ]
    },
    "Bethany": {
        name: "Bethany", image: "img/Characters/Normal/Bethany.png", description: "The cristian. Soul hearts act as charges for her active items, but not for health.",
        stats: "HP: 3 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        startingItems: [
            { name: "Book of Virtues", img: "Book_of_Virtues.png", condition: null }
        ],
        unlocks: [
            { id: "bethany_1", boss: "Mom's Heart", item: "Blessed Penny", diff: "Normal/Hard" },
            { id: "bethany_2", boss: "Isaac", item: "Star of Bethlehem", diff: "Normal/Hard" },
            { id: "bethany_3", boss: "Satan", item: "Book of Virtues", diff: "Normal/Hard" },
            { id: "bethany_4", boss: "Blue Baby", item: "Alabaster Box", diff: "Normal/Hard" },
            { id: "bethany_5", boss: "The Lamb", item: "Urn of Souls", diff: "Normal/Hard" },
            { id: "bethany_6", boss: "Mega Satan", item: "Buddy in a Box", diff: "Normal/Hard" },
            { id: "bethany_7", boss: "Boss Rush", item: "Spirit Sword", diff: "Normal/Hard" },
            { id: "bethany_8", boss: "Hush", item: "Vengeful Spirit", diff: "Normal/Hard" },
            { id: "bethany_9", boss: "Delirium", item: "Divine Intervention", diff: "Normal/Hard" },
            { id: "bethany_10", boss: "Mother", item: "Revelation", diff: "Normal/Hard" },
            { id: "bethany_11", boss: "The Beast", item: "Beth's Faith", diff: "Normal/Hard" },
            { id: "bethany_12", boss: "Greed Mode", item: "Soul Locket", diff: "Normal" },
            { id: "bethany_13", boss: "Greedier Mode", item: "Crystal Key", diff: "Hard" }
        ]
    },
    "Jacob & Esau": {
        name: "Jacob & Esau", image: "img/Characters/Normal/Jacob_&_Esau.png", description: "The Jacob and hitbox experience. Control two characters with different stats, passive and active items.",
        stats: "J: 3 Red | E: 1 Red, 1 Soul<br>J DMG: 2.75 | E DMG: 3.75",
        startingItems: [],
        unlocks: [
            { id: "jacob_1", boss: "Mom's Heart", item: "Inner Child", diff: "Normal/Hard" },
            { id: "jacob_2", boss: "Isaac", item: "Damocles", diff: "Normal/Hard" },
            { id: "jacob_3", boss: "Satan", item: "Red Stew", diff: "Normal/Hard" },
            { id: "jacob_4", boss: "Blue Baby", item: "Suplex!", diff: "Normal/Hard" },
            { id: "jacob_5", boss: "The Lamb", item: "Magic Skin", diff: "Normal/Hard" },
            { id: "jacob_6", boss: "Mega Satan", item: "Friend Finder", diff: "Normal/Hard" },
            { id: "jacob_7", boss: "Boss Rush", item: "Rock Bottom", diff: "Normal/Hard" },
            { id: "jacob_8", boss: "Hush", item: "Blind Pact", diff: "Normal/Hard" },
            { id: "jacob_9", boss: "Delirium", item: "Birthright", diff: "Normal/Hard" },
            { id: "jacob_10", boss: "Mother", item: "Vanishing Twin", diff: "Normal/Hard" },
            { id: "jacob_11", boss: "The Beast", item: "Esau Jr.", diff: "Normal/Hard" },
            { id: "jacob_12", boss: "Greed Mode", item: "The Stairway", diff: "Normal" },
            { id: "jacob_13", boss: "Greedier Mode", item: "Genesis", diff: "Hard" }
        ]
    },

    "Tainted Isaac": {
        name: "Tainted Isaac", image: "img/Characters/Tainted/Tainted_Isaac.png", description: "The Minecraft experience. Can only hold 8 passive items. Items cycle between two choices.",
        stats: "HP: 3 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        startingItems: [
            { name: "1 Bomb", img: "Bomb.png", condition: null }
        ],
        unlocks: [
            { id: "t_isaac_1", boss: "Boss Rush", item: "Soul of Isaac", diff: "Hard" },
            { id: "t_isaac_2", boss: "Isaac", item: "Dice Bag", diff: "Hard" },
            { id: "t_isaac_3", boss: "Mega Satan", item: "Mega Chest", diff: "Hard" },
            { id: "t_isaac_4", boss: "Delirium", item: "Spindown Dice", diff: "Hard" },
            { id: "t_isaac_5", boss: "Mother", item: "Glitched Crown", diff: "Hard" },
            { id: "t_isaac_6", boss: "The Beast", item: "Fool's Gold", diff: "Hard" },
            { id: "t_isaac_7", boss: "Greedier", item: "The Stars?", diff: "Hard" }
        ]
    },
    "Tainted Magdalene": {
        name: "Tainted Magdalene", image: "img/Characters/Tainted/Tainted_Magdalene.png", description: "The 'fuck, I need to go!' character. Rapidly drains health, but heals by killing enemies with melee hug attack.",
        stats: "HP: 4 Red (Empty)<br>DMG: 2.62<br>Tears: 2.73<br>Speed: 1.20",
        startingItems: [
            { name: "Yum Heart", img: "Yum_Heart.png", condition: null }
        ],
        unlocks: [
            { id: "t_mag_1", boss: "Boss Rush", item: "Soul of Magdalene", diff: "Hard" },
            { id: "t_mag_2", boss: "Isaac", item: "Candy Heart", diff: "Hard" },
            { id: "t_mag_3", boss: "Mega Satan", item: "Jelly Belly", diff: "Hard" },
            { id: "t_mag_4", boss: "Delirium", item: "Hypercoagulation", diff: "Hard" },
            { id: "t_mag_5", boss: "Mother", item: "Isaac's Tomb", diff: "Hard" },
            { id: "t_mag_6", boss: "The Beast", item: "The Lovers?", diff: "Hard" },
            { id: "t_mag_7", boss: "Greedier", item: "Golden Heart", diff: "Hard" }
        ]
    },
    "Tainted Cain": {
        name: "Tainted Cain", image: "img/Characters/Tainted/Tainted_Cain.png", description: "The Minecraft experience 2. Cannot pick up items directly. Drops pickups to craft them instead.",
        stats: "HP: 2 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.30",
        startingItems: [
            { name: "Bag of Crafting", img: "Bag_of_Crafting.png", condition: null }
        ],
        unlocks: [
            { id: "t_cain_1", boss: "Boss Rush", item: "Soul of Cain", diff: "Hard" },
            { id: "t_cain_2", boss: "Isaac", item: "Worthless Penny", diff: "Hard" },
            { id: "t_cain_3", boss: "Mega Satan", item: "Gold Pill", diff: "Hard" },
            { id: "t_cain_4", boss: "Delirium", item: "Bag of Crafting", diff: "Hard" },
            { id: "t_cain_5", boss: "Mother", item: "Gilded Key", diff: "Hard" },
            { id: "t_cain_6", boss: "The Beast", item: "Wheel of Fortune?", diff: "Hard" },
            { id: "t_cain_7", boss: "Greedier", item: "Golden Battery", diff: "Hard" }
        ]
    },
    "Tainted Judas": {
        name: "Tainted Judas", image: "img/Characters/Tainted/Tainted_Judas.png", description: "The sinner. Blaxk/Soul heart only'. Uses Dark Arts to dash through enemies.",
        stats: "HP: 2 Black<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        startingItems: [
            { name: "Dark Arts", img: "Dark_Arts.png", condition: null }
        ],
        unlocks: [
            { id: "t_judas_1", boss: "Boss Rush", item: "Soul of Judas", diff: "Hard" },
            { id: "t_judas_2", boss: "Isaac", item: "RC Remote", diff: "Hard" },
            { id: "t_judas_3", boss: "Mega Satan", item: "Black Sack", diff: "Hard" },
            { id: "t_judas_4", boss: "Delirium", item: "Dark Arts", diff: "Hard" },
            { id: "t_judas_5", boss: "Mother", item: "Sanguine Bond", diff: "Hard" },
            { id: "t_judas_6", boss: "The Beast", item: "Death?", diff: "Hard" },
            { id: "t_judas_7", boss: "Greedier", item: "Golden Pill", diff: "Hard" }
        ]
    },
    "Tainted Blue Baby": {
        name: "Tainted Blue Baby", image: "img/Characters/Tainted/Tainted_Blue_Baby.png", description: "The shitty boi. Cannot hold bombs. Replaces them with different types of poop.",
        stats: "HP: 3 Soul<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.05",
        startingItems: [
            { name: "Hold", img: "Hold.png", condition: null }
        ],
        unlocks: [
            { id: "t_bluebaby_1", boss: "Boss Rush", item: "Soul of ???", diff: "Hard" },
            { id: "t_bluebaby_2", boss: "Isaac", item: "Lost Cork", diff: "Hard" },
            { id: "t_bluebaby_3", boss: "Mega Satan", item: "IBS", diff: "Hard" },
            { id: "t_bluebaby_4", boss: "Delirium", item: "Hold", diff: "Hard" },
            { id: "t_bluebaby_5", boss: "Mother", item: "Bowel Movement", diff: "Hard" },
            { id: "t_bluebaby_6", boss: "The Beast", item: "The Chariot?", diff: "Hard" },
            { id: "t_bluebaby_7", boss: "Greedier", item: "Golden Bomb", diff: "Hard" }
        ]
    },
    "Tainted Eve": {
        name: "Tainted Eve", image: "img/Characters/Tainted/Tainted_Eve.png", description: "The army girl. Low fire rate, but drains health to spawn Blood Clot familiars.",
        stats: "HP: 2 Red<br>DMG: 3.50<br>Tears: 1.20<br>Speed: 1.00",
        startingItems: [
            { name: "Sumptorium", img: "Sumptorium.png", condition: null }
        ],
        unlocks: [
            { id: "t_eve_1", boss: "Boss Rush", item: "Soul of Eve", diff: "Hard" },
            { id: "t_eve_2", boss: "Isaac", item: "Strange Key", diff: "Hard" },
            { id: "t_eve_3", boss: "Mega Satan", item: "Horse Pill", diff: "Hard" },
            { id: "t_eve_4", boss: "Delirium", item: "Sumptorium", diff: "Hard" },
            { id: "t_eve_5", boss: "Mother", item: "Lil Clot", diff: "Hard" },
            { id: "t_eve_6", boss: "The Beast", item: "Heartbreak", diff: "Hard" },
            { id: "t_eve_7", boss: "Greedier", item: "The Empress?", diff: "Hard" }
        ]
    },
    "Tainted Samson": {
        name: "Tainted Samson", image: "img/Characters/Tainted/Tainted_Samson.png", description: "The Berserker. Shooting/killing enemys slowly fills a rage meter, activating Berserk!.",
        stats: "HP: 3 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.10",
        startingItems: [],
        unlocks: [
            { id: "t_samson_1", boss: "Boss Rush", item: "Soul of Samson", diff: "Hard" },
            { id: "t_samson_2", boss: "Isaac", item: "Temporary Tattoo", diff: "Hard" },
            { id: "t_samson_3", boss: "Mega Satan", item: "Crane Game", diff: "Hard" },
            { id: "t_samson_4", boss: "Delirium", item: "Berserk!", diff: "Hard" },
            { id: "t_samson_5", boss: "Mother", item: "Swallowed M80", diff: "Hard" },
            { id: "t_samson_6", boss: "The Beast", item: "Larynx", diff: "Hard" },
            { id: "t_samson_7", boss: "Greedier", item: "Strength?", diff: "Hard" }
        ]
    },
    "Tainted Azazel": {
        name: "Tainted Azazel", image: "img/Characters/Tainted/Tainted_Azazel.png", description: "The demon with a fever. Hemoptysis sneeze applies brimstone curse that boosts his thin Brimstone.",
        stats: "HP: 3 Black<br>DMG: 3.50<br>Tears: 0.91<br>Speed: 1.25",
        startingItems: [
            { name: "0 - The Fool", img: "The_Fool.png", condition: null }
        ],
        unlocks: [
            { id: "t_azazel_1", boss: "Boss Rush", item: "Soul of Azazel", diff: "Hard" },
            { id: "t_azazel_2", boss: "Isaac", item: "Bat Wing", diff: "Hard" },
            { id: "t_azazel_3", boss: "Mega Satan", item: "Demon Tail", diff: "Hard" },
            { id: "t_azazel_4", boss: "Delirium", item: "Hemoptysis", diff: "Hard" },
            { id: "t_azazel_5", boss: "Mother", item: "Azazel's Rage", diff: "Hard" },
            { id: "t_azazel_6", boss: "The Beast", item: "Abyss", diff: "Hard" },
            { id: "t_azazel_7", boss: "Greedier", item: "The Devil?", diff: "Hard" }
        ]
    },
    "Tainted Lazarus": {
        name: "Tainted Lazarus", 
        image: "img/Characters/Tainted/Tainted_Lazarus.png", 
        image2: "img/Characters/Tainted/Tainted_Lazarus_Dead.png", 
        description: "The Jacob and hitbox experience 2. Swaps between Alive and Dead Lazarus forms every room. Both Alive and Dead form have different stats, items and health.",
        stats: "HP: 3 Red (Alive) / 2 Soul (Dead)<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        startingItems: [
            { name: "Flip", img: "Flip.png", condition: null }
        ],
        unlocks: [
            { id: "t_laz_1", boss: "Boss Rush", item: "Soul of Lazarus", diff: "Hard" },
            { id: "t_laz_2", boss: "Isaac", item: "Pollycephalus", diff: "Hard" },
            { id: "t_laz_3", boss: "Mega Satan", item: "Wooden Chest", diff: "Hard" },
            { id: "t_laz_4", boss: "Delirium", item: "Flip", diff: "Hard" },
            { id: "t_laz_5", boss: "Mother", item: "Astral Projection", diff: "Hard" },
            { id: "t_laz_6", boss: "The Beast", item: "Salvation", diff: "Hard" },
            { id: "t_laz_7", boss: "Greedier", item: "Judgement?", diff: "Hard" }
        ]
    },
    "Tainted Eden": {
        name: "Tainted Eden", image: "img/Characters/Tainted/Tainted_Eden.png", description: "The glitchy trash. Rerolls all stats, active and passive items, trinkers and pickups for every damage taked.",
        stats: "HP: Random<br>DMG: Random<br>Tears: Random<br>Speed: Random",
        startingItems: [
            { name: "Random Active", img: "Random_Active.png", condition: null },
            { name: "Random Passive", img: "Random_Passive.png", condition: null }
        ],
        unlocks: [
            { id: "t_eden_1", boss: "Boss Rush", item: "Soul of Eden", diff: "Hard" },
            { id: "t_eden_2", boss: "Isaac", item: "Nuh Uh!", diff: "Hard" },
            { id: "t_eden_3", boss: "Mega Satan", item: "Wild Card", diff: "Hard" },
            { id: "t_eden_4", boss: "Delirium", item: "Corrupted Data", diff: "Hard" },
            { id: "t_eden_5", boss: "Mother", item: "Tainted Eden", diff: "Hard" },
            { id: "t_eden_6", boss: "The Beast", item: "The World?", diff: "Hard" },
            { id: "t_eden_7", boss: "Greedier", item: "Missing Poster", diff: "Hard" }
        ]
    },
    "Tainted Lost": {
        name: "Tainted Lost", image: "img/Characters/Tainted/Tainted_Lost.png", description: "The TRUE piece of shitty glass. No Mantle. Cannot find items that gives him HP, flight, spectral tears or on hit effects. Every card have a 10% chacne of being a holy card.",
        stats: "HP: None<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        startingItems: [
            { name: "Holy Card", img: "Holy_Card.png", condition: null }
        ],
        unlocks: [
            { id: "t_lost_1", boss: "Boss Rush", item: "Soul of the Lost", diff: "Hard" },
            { id: "t_lost_2", boss: "Isaac", item: "Kidney Stone", diff: "Hard" },
            { id: "t_lost_3", boss: "Mega Satan", item: "Ghost Bombs", diff: "Hard" },
            { id: "t_lost_4", boss: "Delirium", item: "Sacred Orb", diff: "Hard" },
            { id: "t_lost_5", boss: "Mother", item: "Crystal Key", diff: "Hard" },
            { id: "t_lost_6", boss: "The Beast", item: "The Fool?", diff: "Hard" },
            { id: "t_lost_7", boss: "Greedier", item: "Haunted Chest", diff: "Hard" }
        ]
    },
    "Tainted Lilith": {
        name: "Tainted Lilith", image: "img/Characters/Tainted/Tainted_Lilith.png", description: "The aunt of the group. Lashes out a fetus that automatically shoots tears while extended.",
        stats: "HP: 1 Red, 2 Black<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        startingItems: [
            { name: "Gello", img: "Gello.png", condition: null }
        ],
        unlocks: [
            { id: "t_lilith_1", boss: "Boss Rush", item: "Soul of Lilith", diff: "Hard" },
            { id: "t_lilith_2", boss: "Isaac", item: "Adoption Papers", diff: "Hard" },
            { id: "t_lilith_3", boss: "Mega Satan", item: "Fool's Gold", diff: "Hard" },
            { id: "t_lilith_4", boss: "Delirium", item: "Gello", diff: "Hard" },
            { id: "t_lilith_5", boss: "Mother", item: "Baby-Bender", diff: "Hard" },
            { id: "t_lilith_6", boss: "The Beast", item: "Twisted Pair", diff: "Hard" },
            { id: "t_lilith_7", boss: "Greedier", item: "High Priestess?", diff: "Hard" }
        ]
    },
    "Tainted Keeper": {
        name: "Tainted Keeper", image: "img/Characters/Tainted/Tainted_Keeper.png", description: "The greedy boi. Drops temporal coins on enemy kill. Shops are better, but every item cost money.",
        stats: "HP: 2 Coin Hearts<br>DMG: 4.20<br>Tears: 1.20<br>Speed: 0.85",
        startingItems: [
            { name: "1 Bomb", img: "Bomb.png", condition: null }
        ],
        unlocks: [
            { id: "t_keeper_1", boss: "Boss Rush", item: "Soul of the Keeper", diff: "Hard" },
            { id: "t_keeper_2", boss: "Isaac", item: "Keeper's Bargain", diff: "Hard" },
            { id: "t_keeper_3", boss: "Mega Satan", item: "Golden Penny", diff: "Hard" },
            { id: "t_keeper_4", boss: "Delirium", item: "Keeper's Kin", diff: "Hard" },
            { id: "t_keeper_5", boss: "Mother", item: "Keeper's Box", diff: "Hard" },
            { id: "t_keeper_6", boss: "The Beast", item: "Keeper's Sack", diff: "Hard" },
            { id: "t_keeper_7", boss: "Greedier", item: "The Hermit?", diff: "Hard" }
        ]
    },
    "Tainted Apollyon": {
        name: "Tainted Apollyon", image: "img/Characters/Tainted/Tainted_Apollyon.png", description: "The plague. Uses Abyss to turn unwanted active or passive items into permanent locusts. Locusts are attack flyes that youhave controll. Certain items gives especial locusts.",
        stats: "HP: 2 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        startingItems: [
            { name: "Abyss", img: "Abyss.png", condition: null }
        ],
        unlocks: [
            { id: "t_apollyon_1", boss: "Boss Rush", item: "Soul of Apollyon", diff: "Hard" },
            { id: "t_apollyon_2", boss: "Isaac", item: "Worm Friend", diff: "Hard" },
            { id: "t_apollyon_3", boss: "Mega Satan", item: "Void", diff: "Hard" },
            { id: "t_apollyon_4", boss: "Delirium", item: "Abyss", diff: "Hard" },
            { id: "t_apollyon_5", boss: "Mother", item: "Echo Chamber", diff: "Hard" },
            { id: "t_apollyon_6", boss: "The Beast", item: "The Tower?", diff: "Hard" },
            { id: "t_apollyon_7", boss: "Greedier", item: "Red Chest", diff: "Hard" }
        ]
    },
    "Tainted Forgotten": {
        name: "Tainted Forgotten", 
        image: "img/Characters/Tainted/Tainted_Forgotten.png", 
        image2: "img/Characters/Tainted/Tainted_Soul.png", 
        description: "The hitbox and Esau experience 3. Play as the tainted soul and throw your invincible skeleton body to attack.",
        stats: "HP: 3 Soul<br>DMG: 5.25<br>Tears: 1.36<br>Speed: 1.00",
        startingItems: [],
        unlocks: [
            { id: "t_forgotten_1", boss: "Boss Rush", item: "Soul of the Forgotten", diff: "Hard" },
            { id: "t_forgotten_2", boss: "Isaac", item: "Decayed Crown", diff: "Hard" },
            { id: "t_forgotten_3", boss: "Mega Satan", item: "Hollow Heart", diff: "Hard" },
            { id: "t_forgotten_4", boss: "Delirium", item: "Spirit Shackles", diff: "Hard" },
            { id: "t_forgotten_5", boss: "Mother", item: "Slipped Rib", diff: "Hard" },
            { id: "t_forgotten_6", boss: "The Beast", item: "Polydactyly", diff: "Hard" },
            { id: "t_forgotten_7", boss: "Greedier", item: "The Hierophant?", diff: "Hard" }
        ]
    },
    "Tainted Bethany": {
        name: "Tainted Bethany", image: "img/Characters/Tainted/Tainted_Bethany.png", description: "The game breaker. Cannot gain Red Health, but uses red hearts to charge items. Uses blood to spawn passive item in form of wisps via Lemegeton.",
        stats: "HP: 3 Soul<br>DMG: 2.62<br>Tears: 2.73<br>Speed: 1.00",
        startingItems: [
            { name: "Lemegeton", img: "Lemegeton.png", condition: null }
        ],
        unlocks: [
            { id: "t_bethany_1", boss: "Boss Rush", item: "Soul of Bethany", diff: "Hard" },
            { id: "t_bethany_2", boss: "Isaac", item: "Vengeful Spirit", diff: "Hard" },
            { id: "t_bethany_3", boss: "Mega Satan", item: "Confessional", diff: "Hard" },
            { id: "t_bethany_4", boss: "Delirium", item: "Lemegeton", diff: "Hard" },
            { id: "t_bethany_5", boss: "Mother", item: "Beth's Essence", diff: "Hard" },
            { id: "t_bethany_6", boss: "The Beast", item: "Star of Bethlehem", diff: "Hard" },
            { id: "t_bethany_7", boss: "Greedier", item: "The Magician?", diff: "Hard" }
        ]
    },
    "Tainted Jacob": {
        name: "Tainted Jacob", 
        image: "img/Characters/Tainted/Tainted_Jacob.png", 
        image2: "img/Characters/Tainted/Dark_Esau.png", 
        description: "The Jacob and hurtbox experience 4. Hunted by Dark Esau. Can chain him by using Anima Sola.",
        stats: "HP: 3 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        startingItems: [
            { name: "Anima Sola", img: "Anima_Sola.png", condition: null }
        ],
        unlocks: [
            { id: "t_jacob_1", boss: "Boss Rush", item: "Soul of Jacob", diff: "Hard" },
            { id: "t_jacob_2", boss: "Isaac", item: "Esau Jr.", diff: "Hard" },
            { id: "t_jacob_3", boss: "Mega Satan", item: "Golden Trinket", diff: "Hard" },
            { id: "t_jacob_4", boss: "Delirium", item: "Anima Sola", diff: "Hard" },
            { id: "t_jacob_5", boss: "Mother", item: "Vanishing Twin", diff: "Hard" },
            { id: "t_jacob_6", boss: "The Beast", item: "The Moon?", diff: "Hard" },
            { id: "t_jacob_7", boss: "Greedier", item: "Golden Troll Bomb", diff: "Hard" }
        ]
    }
};

const select = document.getElementById('character-select');
const grid = document.getElementById('unlock-grid');
const progressText = document.getElementById('progress-text');
const swapBtn = document.getElementById('swap-btn');

let userProgress = JSON.parse(localStorage.getItem('tboi_progress')) || {};
let isTaintedMode = false;

function populateSelect() {
    select.innerHTML = '';
    const normalChars = Object.keys(gameData).filter(c => !c.startsWith("Tainted"));
    const taintedChars = Object.keys(gameData).filter(c => c.startsWith("Tainted"));
    const currentRoster = isTaintedMode ? taintedChars : normalChars;

    currentRoster.forEach(char => {
        let option = document.createElement('option');
        option.value = char;
        option.textContent = char;
        select.appendChild(option);
    });

    renderAll();
}

function toggleMode() {
    isTaintedMode = !isTaintedMode;
    document.body.classList.toggle('tainted-mode', isTaintedMode);
    populateSelect();
}

function init() {
    populateSelect();
    select.addEventListener('change', renderAll);
    swapBtn.addEventListener('click', toggleMode);
    
    document.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === 'e') {
            toggleMode();
        }
    });
}

function saveProgress() {
    localStorage.setItem('tboi_progress', JSON.stringify(userProgress));
    updateProgressText();
}

function updateProgressText() {
    const char = select.value;
    if (!gameData[char]) return;
    const total = gameData[char].unlocks.length;
    const completed = gameData[char].unlocks.filter(u => userProgress[u.id]).length;
    progressText.textContent = `${completed}/${total}`;
}

function renderCharInfo() {
    const charName = select.value;
    const charData = gameData[charName];
    if (!charData) return;

    document.getElementById('char-name').textContent = charData.name;
    document.getElementById('char-desc').textContent = charData.description;
    document.getElementById('char-stats').innerHTML = charData.stats;
    
    const imgContainer = document.getElementById('char-image-container');
    imgContainer.innerHTML = ''; 

    [charData.image, charData.image2].forEach(src => {
        if (src) {
            const img = document.createElement('img');
            img.src = src;
            img.className = 'char-img';
            img.onerror = () => { img.style.display = 'none'; };
            imgContainer.appendChild(img);
        }
    });

    const itemsList = document.getElementById('starting-items-list');
    itemsList.innerHTML = '';
    
    charData.startingItems.forEach(item => {
        const container = document.createElement('div');
        container.className = 'item-container';
        
        const isUnlocked = !item.condition || userProgress[item.condition];
        const imagePath = `img/Items/${item.img}`;
        
        container.innerHTML = `
            <img src="${imagePath}" class="item-img ${!isUnlocked ? 'item-locked' : ''}" title="${item.name}" onerror="this.style.display='none'">
            <div class="item-name-tag">${item.name}</div>
            ${!isUnlocked ? `<div class="item-unlock-condition">${item.conditionText}</div>` : ''}
        `;
        
        itemsList.appendChild(container);
    });
}

function renderUnlocks() {
    grid.innerHTML = '';
    const char = select.value;
    const charData = gameData[char];
    if (!charData) return;

    charData.unlocks.forEach(unlock => {
        const card = document.createElement('div');
        card.className = `unlock-card ${userProgress[unlock.id] ? 'completed' : ''}`;
        
        let bossImageHtml = '';
        if (bossImagesMap[unlock.boss]) {
            bossImageHtml = `<img src="img/Bosses/${bossImagesMap[unlock.boss]}" class="boss-img" alt="${unlock.boss}" onload="this.style.display='block'" onerror="this.style.display='none'">`;
        }
        
        card.innerHTML = `
            <div class="boss-name">${unlock.boss}</div>
            ${bossImageHtml}
            <div class="item-name">${unlock.item}</div>
            <div class="difficulty ${unlock.diff.includes('Hard') ? 'hard-mode' : ''}">${unlock.diff}</div>
        `;

        card.addEventListener('click', () => {
            userProgress[unlock.id] = !userProgress[unlock.id];
            card.classList.toggle('completed');
            saveProgress();
            renderCharInfo(); 
        });

        grid.appendChild(card);
    });

    updateProgressText();
}

function renderAll() {
    renderCharInfo();
    renderUnlocks();
}

init();