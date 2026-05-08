const bossImagesMap = {
    "Mom's Heart": "Mom_Heart.png",
    "Isaac": "Isaac.png",
    "Isaac Moriah": "Isaac.png",
    "Satan": "Satan.png",
    "Blue Baby": "Blue_Baby.png",
    "???": "Blue_Baby.png",
    "The Lamb": "The_Lamb.png",
    "Mega Satan": "Mega_Satan.png",
    "Hush": "Hush.png",
    "Delirium": "Delirium.png",
    "Mother": "Mother.png",
    "The Beast": "The_Beast.png",
    "Boss Rush": "Boss_Rush.png",
    "Greed Mode": "Ultra_Greed.png",
    "Greedier Mode": "Ultra_Greedier.png",
    "All Hard Mode Marks": "All_Marks.png",
    "Isaac, ???, Satan & The Lamb": "four_bosses_at_once.png",
    "Isaac Moriah, ???, Satan & The Lamb": "four_bosses_at_once.png",
    "Boss Rush & Hush": "boss_rush_and_hush.png"
};

const effectTooltips = {
    "Red_Heart.png": "Can have Red Heart containers",
    "Soul_Heart.png": "Cannot use Red Heart containers, relies on Soul/Black Hearts",
    "Black_Heart.png": "Starts with or can use Black Hearts",
    "Double_Penny.png": "Uses coins as health",
    "Golden_Penny.png": "Enemies drop temporary coins on death",
    "Blended_Heart.png": "Uses Red/Soul/Black Hearts as active item charges"
};

const secondaryUnlocks = {
    "chal_31": { id: "chal_31", boss: "Challenge #31", item: "Anemic", diff: "Backasswards" },
    "chal_32": { id: "chal_32", boss: "Challenge #32", item: "Full Health Pill", diff: "April's Fool" },
    "chal_34": { id: "chal_34", boss: "Challenge #34", item: "Child's Heart", diff: "Ultra Hard" },
    "greed_68": { id: "greed_68", boss: "Greed Donation Machine", item: "Paper Clip", diff: "Donate 68c" },
    "greed_439": { id: "greed_439", boss: "Greed Donation Machine", item: "Razor Blade", diff: "Donate 439c" },
    "greed_879": { id: "greed_879", boss: "Greed Donation Machine", item: "Holy Mantle", diff: "Donate 879c" }
};

const gameData = {
"Isaac": {
        name: "Isaac", image: "img/Characters/Normal/Isaac.png", description: "The default guy. Starts with the D6 to reroll items. Isaac is unlocked by default. Lucas' note: D6 goes brrr until you get Kamikaze.",
        stats: "HP: 3 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        effects: ["Red_Heart.png"],
        startingItems: [
            { name: "1 Bomb", img: "Bomb.png", isEffectImg: true, tooltip: "Starts with a Bomb", condition: null },
            { name: "The D6", img: "D6.png", condition: "bluebaby_4", conditionText: "Beat Isaac as Blue Baby" }
        ],
        unlocks: [
            { id: "isaac_1", boss: "Boss Rush", item: "Isaac's Head", diff: "Normal/Hard" },
            { id: "isaac_2", boss: "Mom's Heart", item: "Lost Baby", diff: "Hard" },
            { id: "isaac_3", boss: "Satan", item: "Mom's Knife", diff: "Normal/Hard" },
            { id: "isaac_4", boss: "Isaac", item: "Isaac's Tears", diff: "Normal/Hard" },
            { id: "isaac_5", boss: "The Lamb", item: "Missing poster", diff: "Normal/Hard" },
            { id: "isaac_6", boss: "Blue Baby", item: "D20", diff: "Normal/Hard" },
            { id: "isaac_7", boss: "Greed Mode", item: "Little Chest", diff: "Normal/Hard" },
            { id: "isaac_8", boss: "Greedier Mode", item: "D1", diff: "Hard" },
            { id: "isaac_9", boss: "Hush", item: "Fart Baby", diff: "Normal/Hard" },
            { id: "isaac_10", boss: "Delirium", item: "D Infinity", diff: "Normal/Hard" },
            { id: "isaac_11", boss: "Mother", item: "Meat Cleaver", diff: "Normal/Hard" },
            { id: "isaac_12", boss: "The Beast", item: "Options?", diff: "Normal/Hard" },
            { id: "isaac_13", boss: "Mega Satan", item: "Cry Baby", diff: "Normal/Hard" },
            { id: "isaac_14", boss: "All Hard Mode Marks", item: "Buddy Baby", diff: "Hard" },
            { id: "global_mega_blast", boss: "Mega Satan", item: "Mega Blast", diff: "Hard" },
            { id: "global_mega_mush", boss: "All Hard Mode Marks", item: "Mega Mush", diff: "Hard" }
        ]
    },
    "Magdalene": {
        name: "Magdalene", image: "img/Characters/Normal/Magdalene.png", description: "The tanky girl. Starts with high health and Yum Heart for healing. Magdalene is unlocked by having 7 red heart container at once. Lucas' note: A Speed Down pill disguised as a character.",
        stats: "HP: 4 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 0.85",
        effects: ["Red_Heart.png"],
        startingItems: [
            { name: "Yum Heart", img: "Yum_Heart.png", condition: null },
            { name: "Full Health Pill", img: "Pill.png", isEffectImg: true, tooltip: "Starts with a pill", condition: "chal_32", conditionText: "April's Fool Challenge" }
        ],
        unlocks: [
            { id: "mag_1", boss: "Boss Rush", item: "The Relic", diff: "Normal/Hard" },
            { id: "mag_2", boss: "Mom's Heart", item: "Cute Baby", diff: "Hard" },
            { id: "mag_3", boss: "Satan", item: "Guardian Angel", diff: "Normal/Hard" },
            { id: "mag_4", boss: "Isaac", item: "A Cross", diff: "Normal/Hard" },
            { id: "mag_5", boss: "The Lamb", item: "Maggy's Faith", diff: "Normal/Hard" },
            { id: "mag_6", boss: "Blue Baby", item: "Celtic Cross", diff: "Normal/Hard" },
            { id: "mag_7", boss: "Greed Mode", item: "Censer", diff: "Normal/Hard" },
            { id: "mag_8", boss: "Greedier Mode", item: "Glyph of Balance", diff: "Hard" },
            { id: "mag_9", boss: "Hush", item: "Purity", diff: "Normal/Hard" },
            { id: "mag_10", boss: "Delirium", item: "Eucharist", diff: "Normal/Hard" },
            { id: "mag_11", boss: "Mother", item: "Yuck Heart", diff: "Normal/Hard" },
            { id: "mag_12", boss: "The Beast", item: "Candy Heart", diff: "Normal/Hard" },
            { id: "mag_13", boss: "Mega Satan", item: "Red Baby", diff: "Normal/Hard" },
            { id: "mag_14", boss: "All Hard Mode Marks", item: "Colorful Baby", diff: "Hard" },
            { id: "global_mega_blast", boss: "Mega Satan", item: "Mega Blast", diff: "Hard" },
            { id: "global_mega_mush", boss: "All Hard Mode Marks", item: "Mega Mush", diff: "Hard" }
        ]
    },
    "Cain": {
        name: "Cain", image: "img/Characters/Normal/Cain.png", description: "The lucky thief. Starts with high speed, Lucky Foot, only gets good pills, but shoots with one eye. Cain is unlocked by having 55 pennies at once. Lucas' note: Paperclip carries the entire run.",
        stats: "HP: 2 Red<br>DMG: 4.20<br>Tears: 2.73<br>Speed: 1.30",
        effects: ["Red_Heart.png"],
        startingItems: [
            { name: "1 Key", img: "Key.png", isEffectImg: true, tooltip: "Starts with a key", condition: null },
            { name: "Lucky Foot", img: "Lucky_Foot.png", condition: null },
            { name: "Paper Clip", img: "Paper_Clip.png", condition: "greed_68", conditionText: "Donate 68c to Greed Machine" }
        ],
        unlocks: [
            { id: "cain_1", boss: "Boss Rush", item: "Cain's Other Eye", diff: "Normal/Hard" },
            { id: "cain_2", boss: "Mom's Heart", item: "Glass baby", diff: "Hard" },
            { id: "cain_3", boss: "Satan", item: "A Bag of Bombs", diff: "Normal/Hard" },
            { id: "cain_4", boss: "Isaac", item: "A Sack of Pennies", diff: "Normal/Hard" },
            { id: "cain_5", boss: "The Lamb", item: "Abel", diff: "Normal/Hard" },
            { id: "cain_6", boss: "Blue Baby", item: "Cain' Eye", diff: "Normal/Hard" },
            { id: "cain_7", boss: "Greed Mode", item: "Evil Eye", diff: "Normal/Hard" },
            { id: "cain_8", boss: "Greedier Mode", item: "Sack of Sacks", diff: "Hard" },
            { id: "cain_9", boss: "Hush", item: "D12", diff: "Normal/Hard" },
            { id: "cain_10", boss: "Delirium", item: "Silver Dollar", diff: "Normal/Hard" },
            { id: "cain_11", boss: "Mother", item: "Guppy's Eye", diff: "Normal/Hard" },
            { id: "cain_12", boss: "The Beast", item: "A Pound of Flesh", diff: "Normal/Hard" },
            { id: "cain_13", boss: "Mega Satan", item: "Green baby", diff: "Normal/Hard" },
            { id: "cain_14", boss: "All Hard Mode Marks", item: "Picky baby", diff: "Hard" },
            { id: "global_mega_blast", boss: "Mega Satan", item: "Mega Blast", diff: "Hard" },
            { id: "global_mega_mush", boss: "All Hard Mode Marks", item: "Mega Mush", diff: "Hard" }
        ]
    },
    "Judas": {
        name: "Judas", image: "img/Characters/Normal/Judas.png", description: "The glass cannon. Starts with 1 Heart and Book of Belial for temporary damage buff. Judas is unlocked by defeating Satan for the first time. Lucas' note: First floor spider: 'Allow me to introduce myself'.",
        stats: "HP: 1 Red<br>DMG: 4.72<br>Tears: 2.73<br>Speed: 1.00",
        effects: ["Red_Heart.png"],
        startingItems: [
            { name: "The Book of Belial", img: "The_Book_of_Belial.png", condition: null },
            { name: "3 Pennies", img: "Penny.png", isEffectImg: true, tooltip: "Starts with 3 pennies", condition: null }
        ],
        unlocks: [
            { id: "judas_1", boss: "Boss Rush", item: "Judas' Shadow", diff: "Normal/Hard" },
            { id: "judas_2", boss: "Mom's Heart", item: "Shadow baby", diff: "Hard" },
            { id: "judas_3", boss: "Satan", item: "Judas' Tongue", diff: "Normal/Hard" },
            { id: "judas_4", boss: "Isaac", item: "Guillotine", diff: "Normal/Hard" },
            { id: "judas_5", boss: "The Lamb", item: "Curved Horn", diff: "Normal/Hard" },
            { id: "judas_6", boss: "Blue Baby", item: "The Left Hand", diff: "Normal/Hard" },
            { id: "judas_7", boss: "Greed Mode", item: "My Shadow", diff: "Normal/Hard" },
            { id: "judas_8", boss: "Greedier Mode", item: "Eye of Belial", diff: "Hard" },
            { id: "judas_9", boss: "Hush", item: "Betrayal", diff: "Normal/Hard" },
            { id: "judas_10", boss: "Delirium", item: "Shade", diff: "Normal/Hard" },
            { id: "judas_11", boss: "Mother", item: "Akeldama", diff: "Normal/Hard" },
            { id: "judas_12", boss: "The Beast", item: "Redemption", diff: "Normal/Hard" },
            { id: "judas_13", boss: "Mega Satan", item: "Brown baby", diff: "Normal/Hard" },
            { id: "judas_14", boss: "All Hard Mode Marks", item: "Belial baby", diff: "Hard" },
            { id: "global_mega_blast", boss: "Mega Satan", item: "Mega Blast", diff: "Hard" },
            { id: "global_mega_mush", boss: "All Hard Mode Marks", item: "Mega Mush", diff: "Hard" }
        ]
    },
    "Blue Baby": {
        name: "Blue Baby", image: "img/Characters/Normal/Blue_Baby.png", description: "The dead boy. Can only have Soul/Black hearts and starts with The Poop. Destroying poops spawn blue flies. Blue Baby is unlocked by defeating Mom's Heart 10 times. Lucas' note: Literally a piece of shit of a character.",
        stats: "HP: 3 Soul<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.05",
        effects: ["Soul_Heart.png"],
        startingItems: [
            { name: "The Poop", img: "The_Poop.png", condition: null }
        ],
        unlocks: [
            { id: "bluebaby_1", boss: "Boss Rush", item: "???'s Only Friend", diff: "Normal/Hard" },
            { id: "bluebaby_2", boss: "Mom's Heart", item: "Dead baby", diff: "Hard" },
            { id: "bluebaby_3", boss: "Satan", item: "Forget Me Now", diff: "Normal/Hard" },
            { id: "bluebaby_4", boss: "Isaac", item: "D6", diff: "Normal/Hard" },
            { id: "bluebaby_5", boss: "The Lamb", item: "???'s Soul", diff: "Normal/Hard" },
            { id: "bluebaby_6", boss: "Blue Baby", item: "Fate", diff: "Normal/Hard" },
            { id: "bluebaby_7", boss: "Greed Mode", item: "Cracked Dice", diff: "Normal/Hard" },
            { id: "bluebaby_8", boss: "Greedier Mode", item: "Meconium", diff: "Hard" },
            { id: "bluebaby_9", boss: "Hush", item: "Fate's Reward", diff: "Normal/Hard" },
            { id: "bluebaby_10", boss: "Delirium", item: "King Baby", diff: "Normal/Hard" },
            { id: "bluebaby_11", boss: "Mother", item: "Eternal D6", diff: "Normal/Hard" },
            { id: "bluebaby_12", boss: "The Beast", item: "Montezuma's Revenge", diff: "Normal/Hard" },
            { id: "bluebaby_13", boss: "Mega Satan", item: "Blue baby", diff: "Normal/Hard" },
            { id: "bluebaby_14", boss: "All Hard Mode Marks", item: "Hive baby", diff: "Hard" },
            { id: "global_mega_blast", boss: "Mega Satan", item: "Mega Blast", diff: "Hard" },
            { id: "global_mega_mush", boss: "All Hard Mode Marks", item: "Mega Mush", diff: "Hard" }
        ]
    },
    "Eve": {
        name: "Eve", image: "img/Characters/Normal/Eve.png", description: "The edgy kid. Starts weak but triggers the Whore of Babylon effect at 1 Red Heart. Eve is unlocked by not picking up any hearts for 2 floors. Lucas' note: The hurt yourself simulador.",
        stats: "HP: 2 Red<br>DMG: 2.62<br>Tears: 2.73<br>Speed: 1.23",
        effects: ["Red_Heart.png"],
        startingItems: [
            { name: "Whore of Babylon", img: "Whore_of_Babylon.png", condition: null },
            { name: "Dead Bird", img: "Dead_Bird.png", condition: null },
            { name: "Razor Blade", img: "Razor_Blade.png", condition: "greed_439", conditionText: "Donate 439c to Greed Machine" }
        ],
        unlocks: [
            { id: "eve_1", boss: "Boss Rush", item: "Eve's Mascara", diff: "Normal/Hard" },
            { id: "eve_2", boss: "Mom's Heart", item: "Crow baby", diff: "Hard" },
            { id: "eve_3", boss: "Satan", item: "The Razor", diff: "Normal/Hard" },
            { id: "eve_4", boss: "Isaac", item: "Eve's Bird Foot", diff: "Normal/Hard" },
            { id: "eve_5", boss: "The Lamb", item: "Black Lipstick", diff: "Normal/Hard" },
            { id: "eve_6", boss: "Blue Baby", item: "Sacrificial Dagger", diff: "Normal/Hard" },
            { id: "eve_7", boss: "Greed Mode", item: "Black Feather", diff: "Normal/Hard" },
            { id: "eve_8", boss: "Greedier Mode", item: "Crow Heart", diff: "Hard" },
            { id: "eve_9", boss: "Hush", item: "Athame", diff: "Normal/Hard" },
            { id: "eve_10", boss: "Delirium", item: "Dull Razor", diff: "Normal/Hard" },
            { id: "eve_11", boss: "Mother", item: "Bird Cage", diff: "Normal/Hard" },
            { id: "eve_12", boss: "The Beast", item: "Cracked Orb", diff: "Normal/Hard" },
            { id: "eve_13", boss: "Mega Satan", item: "Lil' baby", diff: "Normal/Hard" },
            { id: "eve_14", boss: "All Hard Mode Marks", item: "Whore baby", diff: "Hard" },
            { id: "global_mega_blast", boss: "Mega Satan", item: "Mega Blast", diff: "Hard" },
            { id: "global_mega_mush", boss: "All Hard Mode Marks", item: "Mega Mush", diff: "Hard" }
        ]
    },
    "Samson": {
        name: "Samson", image: "img/Characters/Normal/Samson.png", description: "The  guy with angry issues. Starts with Bloody Lust, gaining damage when taking damage. Samson is unlocked by completing 2 floors without taking damage. Lucas' note: Skill issue? No, it's a damage up!",
        stats: "HP: 3 Red<br>DMG: 3.50<br>Tears: 2.45<br>Speed: 1.10",
        effects: ["Red_Heart.png"],
        startingItems: [
            { name: "Bloody Lust", img: "Bloody_Lust.png", condition: null },
            { name: "Child's Heart", img: "Child_Heart.png", condition: "chal_34", conditionText: "Ultra Hard Challenge" }
        ],
        unlocks: [
            { id: "samson_1", boss: "Boss Rush", item: "Samson's Chains", diff: "Normal/Hard" },
            { id: "samson_2", boss: "Mom's Heart", item: "Fighting baby", diff: "Hard" },
            { id: "samson_3", boss: "Satan", item: "Blood Rights", diff: "Normal/Hard" },
            { id: "samson_4", boss: "Isaac", item: "Bloody Lust", diff: "Normal/Hard" },
            { id: "samson_5", boss: "The Lamb", item: "Samson's Lock", diff: "Normal/Hard" },
            { id: "samson_6", boss: "Blue Baby", item: "Bloody Penny", diff: "Normal/Hard" },
            { id: "samson_7", boss: "Greed Mode", item: "Lusty Blood", diff: "Normal/Hard" },
            { id: "samson_8", boss: "Greedier Mode", item: "Stem Cell", diff: "Hard" },
            { id: "samson_9", boss: "Hush", item: "Blind Rage", diff: "Normal/Hard" },
            { id: "samson_10", boss: "Delirium", item: "Bloody Crown", diff: "Normal/Hard" },
            { id: "samson_11", boss: "Mother", item: "Bloody Gust", diff: "Normal/Hard" },
            { id: "samson_12", boss: "The Beast", item: "Empty Heart", diff: "Normal/Hard" },
            { id: "samson_13", boss: "Mega Satan", item: "Rage baby", diff: "Normal/Hard" },
            { id: "samson_14", boss: "All Hard Mode Marks", item: "Revenge baby", diff: "Hard" },
            { id: "global_mega_blast", boss: "Mega Satan", item: "Mega Blast", diff: "Hard" },
            { id: "global_mega_mush", boss: "All Hard Mode Marks", item: "Mega Mush", diff: "Hard" }
        ]
    },
    "Azazel": {
        name: "Azazel", image: "img/Characters/Normal/Azazel.png", description: "The demon. Starts with flying and a short-range Brimstone. Azazel is unlocked by making 3 deals with the Devil. Lucas' note: The 'I just want to unlock things quickly' character.",
        stats: "HP: 3 Black<br>DMG: 5.50<br>Tears: 0.76<br>Speed: 1.25",
        effects: ["Black_Heart.png"],
        startingItems: [
            { name: "0 - The Fool", img: "Fool_Card.png", isEffectImg: true, tooltip: "Starts with The Fool card", condition: null }
        ],
        unlocks: [
            { id: "azazel_1", boss: "Boss Rush", item: "The Nail", diff: "Normal/Hard" },
            { id: "azazel_2", boss: "Mom's Heart", item: "Begotten baby", diff: "Hard" },
            { id: "azazel_3", boss: "Satan", item: "Demon's Tail", diff: "Normal/Hard" },
            { id: "azazel_4", boss: "Isaac", item: "Satanic Bible", diff: "Normal/Hard" },
            { id: "azazel_5", boss: "The Lamb", item: "Demon baby", diff: "Normal/Hard" },
            { id: "azazel_6", boss: "Blue Baby", item: "Abaddon", diff: "Normal/Hard" },
            { id: "azazel_7", boss: "Greed Mode", item: "Lilith", diff: "Normal/Hard" },
            { id: "azazel_8", boss: "Greedier Mode", item: "Bat Wing", diff: "Hard" },
            { id: "azazel_9", boss: "Hush", item: "Maw of the Void", diff: "Normal/Hard" },
            { id: "azazel_10", boss: "Delirium", item: "Dark Prince's Crown", diff: "Normal/Hard" },
            { id: "azazel_11", boss: "Mother", item: "Devil's Crown", diff: "Normal/Hard" },
            { id: "azazel_12", boss: "The Beast", item: "Lil' Abaddon", diff: "Normal/Hard" },
            { id: "azazel_13", boss: "Mega Satan", item: "Black baby", diff: "Normal/Hard" },
            { id: "azazel_14", boss: "All Hard Mode Marks", item: "Sucky baby", diff: "Hard" },
            { id: "global_mega_blast", boss: "Mega Satan", item: "Mega Blast", diff: "Hard" },
            { id: "global_mega_mush", boss: "All Hard Mode Marks", item: "Mega Mush", diff: "Hard" }
        ]
    },
    "Lazarus": {
        name: "Lazarus", 
        image: "img/Characters/Normal/Lazarus.png", 
        image2: "img/Characters/Normal/Lazarus_Risen.png", 
        description: "The boy who lived twice. Revives with better stats upon his first death. Lazarus is unlocked by having 4 soul hearts at the same time. Lucas' note: The 'kill yourself' experience",
        stats: "HP: 3 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        effects: ["Red_Heart.png"],
        startingItems: [
            { name: "Random Pill", img: "Pill.png", isEffectImg: true, tooltip: "Starts with a pill", condition: null },
            { name: "Anemic", img: "Anemic.png", condition: "chal_31", conditionText: "Backasswards Challenge" }
        ],
        unlocks: [
            { id: "laz_1", boss: "Boss Rush", item: "Missing No.", diff: "Normal/Hard" },
            { id: "laz_2", boss: "Mom's Heart", item: "Wrapped baby", diff: "Hard" },
            { id: "laz_3", boss: "Satan", item: "Broken Ankh", diff: "Normal/Hard" },
            { id: "laz_4", boss: "Isaac", item: "Lazarus' Rags", diff: "Normal/Hard" },
            { id: "laz_5", boss: "The Lamb", item: "Pandora's Box", diff: "Normal/Hard" },
            { id: "laz_6", boss: "Blue Baby", item: "Store Credit", diff: "Normal/Hard" },
            { id: "laz_7", boss: "Greed Mode", item: "Key Bum", diff: "Normal/Hard" },
            { id: "laz_8", boss: "Greedier Mode", item: "Plan C", diff: "Hard" },
            { id: "laz_9", boss: "Hush", item: "Empty Vessel", diff: "Normal/Hard" },
            { id: "laz_10", boss: "Delirium", item: "Compound Fracture", diff: "Normal/Hard" },
            { id: "laz_11", boss: "Mother", item: "Tinytoma", diff: "Normal/Hard" },
            { id: "laz_12", boss: "The Beast", item: "Astral Projection", diff: "Normal/Hard" },
            { id: "laz_13", boss: "Mega Satan", item: "Long baby", diff: "Normal/Hard" },
            { id: "laz_14", boss: "All Hard Mode Marks", item: "Dripping baby", diff: "Hard" },
            { id: "global_mega_blast", boss: "Mega Satan", item: "Mega Blast", diff: "Hard" },
            { id: "global_mega_mush", boss: "All Hard Mode Marks", item: "Mega Mush", diff: "Hard" }
        ]
    },
"Eden": {
        name: "Eden", image: "img/Characters/Normal/Eden.png", description: "The glitchy girl. Starts with completely randomized stats and items. Eden is unlocked by completing The Womb floor for the first time. Lucas' note: Hold 'R' simulator until you don't start with 1 fire rate and Bob's Brain.",
        stats: "HP: Random<br>DMG: Random<br>Tears: Random<br>Speed: Random",
        effects: ["Red_Heart.png"],
        startingItems: [
            { name: "Random Active", img: "Random_item.png", condition: null, tooltip: "Starts with a random Active item" },
            { name: "Random Passive", img: "Random_item.png", condition: null, tooltip: "Starts with a random Passive item" }
        ],
        unlocks: [
            { id: "eden_1", boss: "Boss Rush", item: "Undefined", diff: "Normal/Hard" },
            { id: "eden_2", boss: "Mom's Heart", item: "Glitch baby", diff: "Hard" },
            { id: "eden_3", boss: "Satan", item: "Book of Secrets", diff: "Normal/Hard" },
            { id: "eden_4", boss: "Isaac", item: "Blank Card", diff: "Normal/Hard" },
            { id: "eden_5", boss: "The Lamb", item: "Mystery Sack", diff: "Normal/Hard" },
            { id: "eden_6", boss: "Blue Baby", item: "Mysterious Paper", diff: "Normal/Hard" },
            { id: "eden_7", boss: "Greed Mode", item: "GB bug", diff: "Normal/Hard" },
            { id: "eden_8", boss: "Greedier Mode", item: "Metronome", diff: "Hard" },
            { id: "eden_9", boss: "Hush", item: "Eden's Blessing", diff: "Normal/Hard" },
            { id: "eden_10", boss: "Delirium", item: "Eden's Soul", diff: "Normal/Hard" },
            { id: "eden_11", boss: "Mother", item: "'M", diff: "Normal/Hard" },
            { id: "eden_12", boss: "The Beast", item: "Everything Jar", diff: "Normal/Hard" },
            { id: "eden_13", boss: "Mega Satan", item: "Yellow baby", diff: "Normal/Hard" },
            { id: "eden_14", boss: "All Hard Mode Marks", item: "Cracked baby", diff: "Hard" },
            { id: "global_mega_blast", boss: "Mega Satan", item: "Mega Blast", diff: "Hard" },
            { id: "global_mega_mush", boss: "All Hard Mode Marks", item: "Mega Mush", diff: "Hard" }
        ]
    },
"The Lost": {
        name: "The Lost", image: "img/Characters/Normal/The_Lost.png", description: "The ghost. Has no health, starts with Holy Mantle and flying. Can take devil deals for free, but only one of the items. The Lost is unlocked by dying on a Sacrifice Room while holding the 'Missing Poster' trinket. Lucas' note: The embodiment of skill solution, until a random spider ends your career.",
        stats: "HP: None<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        effects: ["Soul_Heart.png"],
        startingItems: [
            { name: "Eternal D6", img: "Eternal_D6.png", condition: null },
            { name: "Holy Mantle", img: "Holy_Mantle.png", condition: "greed_879", conditionText: "Donate 879c to Greed Machine" }
        ],
        unlocks: [
            { id: "lost_1", boss: "Boss Rush", item: "D100", diff: "Normal/Hard" },
            { id: "lost_2", boss: "Mom's Heart", item: "-0- baby", diff: "Hard" },
            { id: "lost_3", boss: "Satan", item: "The Mind", diff: "Normal/Hard" },
            { id: "lost_4", boss: "Isaac", item: "Isaac's Heart", diff: "Normal/Hard" },
            { id: "lost_5", boss: "The Lamb", item: "The Soul", diff: "Normal/Hard" },
            { id: "lost_6", boss: "Blue Baby", item: "The Body", diff: "Normal/Hard" },
            { id: "lost_7", boss: "Greed Mode", item: "Zodiac", diff: "Normal/Hard" },
            { id: "lost_8", boss: "Greedier Mode", item: "Dad's Lost Coin", diff: "Hard" },
            { id: "lost_9", boss: "Hush", item: "Sworn Protector", diff: "Normal/Hard" },
            { id: "lost_10", boss: "Delirium", item: "Holy Card", diff: "Normal/Hard" },
            { id: "lost_11", boss: "Mother", item: "Lost Soul", diff: "Normal/Hard" },
            { id: "lost_12", boss: "The Beast", item: "Hungry Soul", diff: "Normal/Hard" },
            { id: "lost_13", boss: "Mega Satan", item: "White baby", diff: "Normal/Hard" },
            { id: "lost_14", boss: "All Hard Mode Marks", item: "Godhead", diff: "Hard" },
            { id: "global_mega_blast", boss: "Mega Satan", item: "Mega Blast", diff: "Hard" },
            { id: "global_mega_mush", boss: "All Hard Mode Marks", item: "Mega Mush", diff: "Hard" }
        ]
    },
"Lilith": {
        name: "Lilith", image: "img/Characters/Normal/Lilith.png", description: "The mother of demons. Cannot shoot tears, relies entirely on familiars and on the Box of Friends item. Lilith is unlocked my defeating Ultra Greed as Azazel. Lucas' note: Blindfolded, but still manages to fill the screen with more garbage than the game engine can handle.",
        stats: "HP: 1 Red, 2 Black<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        effects: ["Red_Heart.png", "Black_Heart.png"],
        startingItems: [
            { name: "Incubus", img: "Incubus.png", condition: null },
            { name: "Cambion Conception", img: "Cambion_Conception.png", condition: null },
            { name: "Box of Friends", img: "Box_of_Friends.png", condition: null }
        ],
        unlocks: [
            { id: "lilith_1", boss: "Boss Rush", item: "Immaculate Conception", diff: "Normal/Hard" },
            { id: "lilith_2", boss: "Mom's Heart", item: "Goat Head baby", diff: "Hard" },
            { id: "lilith_3", boss: "Satan", item: "Serpent's Kiss", diff: "Normal/Hard" },
            { id: "lilith_4", boss: "Isaac", item: "Rune Bag", diff: "Normal/Hard" },
            { id: "lilith_5", boss: "The Lamb", item: "Succubus", diff: "Normal/Hard" },
            { id: "lilith_6", boss: "Blue Baby", item: "Cambion Conception", diff: "Normal/Hard" },
            { id: "lilith_7", boss: "Greed Mode", item: "Box of Friends", diff: "Normal/Hard" },
            { id: "lilith_8", boss: "Greedier Mode", item: "Duality", diff: "Hard" },
            { id: "lilith_9", boss: "Hush", item: "Incubus", diff: "Normal/Hard" },
            { id: "lilith_10", boss: "Delirium", item: "Euthanasia", diff: "Normal/Hard" },
            { id: "lilith_11", boss: "Mother", item: "Blood Puppy", diff: "Normal/Hard" },
            { id: "lilith_12", boss: "The Beast", item: "C-Section", diff: "Normal/Hard" },
            { id: "lilith_13", boss: "Mega Satan", item: "Big baby", diff: "Normal/Hard" },
            { id: "lilith_14", boss: "All Hard Mode Marks", item: "Dark baby", diff: "Hard" },
            { id: "global_mega_blast", boss: "Mega Satan", item: "Mega Blast", diff: "Hard" },
            { id: "global_mega_mush", boss: "All Hard Mode Marks", item: "Mega Mush", diff: "Hard" }
        ]
    },
"Keeper": {
        name: "Keeper", image: "img/Characters/Normal/Keeper.png", description: "The greedy corpse. Uses coins as health and shoots triple tears. Keeper is unlocked my donate 1000 coins into the Greed Donation machine. Lucas' note: -99 win streak simulator (Pre-Repentance PTSD).",
        stats: "HP: 2 Coin Hearts<br>DMG: 4.20<br>Tears: 1.20<br>Speed: 0.85",
        effects: ["Double_Penny.png"],
        startingItems: [
            { name: "1 Bomb", img: "Bomb.png", isEffectImg: true, tooltip: "Starts with a Bomb", condition: null },
            { name: "Store Key", img: "Store_Key.png", condition: "keeper_3", conditionText: "Beat Satan as Keeper" },
            { name: "Wooden Nickel", img: "Wooden_Nickel.png", condition: "keeper_4", conditionText: "Beat Isaac as Keeper" },
            { name: "3rd Coin Heart", img: "Coin_Heart.png", condition: "keeper_9", conditionText: "Beat Hush as Keeper" }
        ],
        unlocks: [
            { id: "keeper_1", boss: "Boss Rush", item: "Sticky Nickel", diff: "Normal/Hard" },
            { id: "keeper_2", boss: "Mom's Heart", item: "Super Greed baby", diff: "Hard" },
            { id: "keeper_3", boss: "Satan", item: "Store Key", diff: "Normal/Hard" },
            { id: "keeper_4", boss: "Isaac", item: "Wooden Nickel", diff: "Normal/Hard" },
            { id: "keeper_5", boss: "The Lamb", item: "Karma", diff: "Normal/Hard" },
            { id: "keeper_6", boss: "Blue Baby", item: "Deep Pockets", diff: "Normal/Hard" },
            { id: "keeper_7", boss: "Greed Mode", item: "Rib of Greed", diff: "Normal/Hard" },
            { id: "keeper_8", boss: "Greedier Mode", item: "Eye of Greed", diff: "Hard" },
            { id: "keeper_9", boss: "Hush", item: "3rd Coin Heart", diff: "Normal/Hard" },
            { id: "keeper_10", boss: "Delirium", item: "Crooked Penny", diff: "Normal/Hard" },
            { id: "keeper_11", boss: "Mother", item: "Keeper's Sack", diff: "Normal/Hard" },
            { id: "keeper_12", boss: "The Beast", item: "Keeper's Box", diff: "Normal/Hard" },
            { id: "keeper_13", boss: "Mega Satan", item: "Noose baby", diff: "Normal/Hard" },
            { id: "keeper_14", boss: "All Hard Mode Marks", item: "Sale baby", diff: "Hard" },
            { id: "global_mega_blast", boss: "Mega Satan", item: "Mega Blast", diff: "Hard" },
            { id: "global_mega_mush", boss: "All Hard Mode Marks", item: "Mega Mush", diff: "Hard" }
        ]
    },
"Apollyon": {
        name: "Apollyon", image: "img/Characters/Normal/Apollyon.png", description: "The destroyer. Starts with Void to suck up passive items for stats or copy active items. Apollyon is unlocked by defeating Mega Satan for ther first time. Lucas' note: Sucking up a decent item just to get +0.2 shot speed and +0.2 luck.",
        stats: "HP: 2 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        effects: ["Red_Heart.png"],
        startingItems: [
            { name: "Void", img: "Void.png", condition: null }
        ],
        unlocks: [
            { id: "apollyon_1", boss: "Boss Rush", item: "Locust of Conquest", diff: "Normal/Hard" },
            { id: "apollyon_2", boss: "Mom's Heart", item: "Smelter", diff: "Hard" },
            { id: "apollyon_3", boss: "Satan", item: "Locust of Pestilence", diff: "Normal/Hard" },
            { id: "apollyon_4", boss: "Isaac", item: "Locust of Wrath", diff: "Normal/Hard" },
            { id: "apollyon_5", boss: "The Lamb", item: "Locust of Death", diff: "Normal/Hard" },
            { id: "apollyon_6", boss: "Blue Baby", item: "Locust of Famine", diff: "Normal/Hard" },
            { id: "apollyon_7", boss: "Greed Mode", item: "Brown Nugget", diff: "Normal/Hard" },
            { id: "apollyon_8", boss: "Greedier Mode", item: "Blank Rune", diff: "Hard" },
            { id: "apollyon_9", boss: "Hush", item: "Hushy", diff: "Normal/Hard" },
            { id: "apollyon_10", boss: "Delirium", item: "Void", diff: "Normal/Hard" },
            { id: "apollyon_11", boss: "Mother", item: "Lil' Portal", diff: "Normal/Hard" },
            { id: "apollyon_12", boss: "The Beast", item: "Worm Friend", diff: "Normal/Hard" },
            { id: "apollyon_13", boss: "Mega Satan", item: "Mort Baby", diff: "Normal/Hard" },
            { id: "apollyon_14", boss: "All Hard Mode Marks", item: "Apollyon baby", diff: "Hard" },
            { id: "global_mega_blast", boss: "Mega Satan", item: "Mega Blast", diff: "Hard" },
            { id: "global_mega_mush", boss: "All Hard Mode Marks", item: "Mega Mush", diff: "Hard" }
        ]
    },
"The Forgotten": {
        name: "The Forgotten", 
        image: "img/Characters/Normal/The_Forgotten.png", 
        image2: "img/Characters/Normal/The_Soul.png", 
        description: "Two characters in one: Melee skeleton and flying soul. The Forgotten is unlocked via a complicated proccess: The Lamb must have been defeated previously before The Forgotten can be unlocked, then you have to defeat the first floor boss under 1 minute. After that, go into the starting room and bomb the middle of the room. This will drop the broken shovel item, that will make Mom's foot fall on top of you for the entire run. Your objective is, with the broken shovel, defeat Boss Rush, collect the second part of the shovel, creating the Mom's Shovel item and head into the Dark Room, on a specific room and use the Shovel on the middle of the room. Lucas' note: Bonk simulador.",
        stats: "HP: 2 Bone (Soul has 1 Soul)<br>DMG: 5.25<br>Tears: 1.36<br>Speed: 1.00",
        effects: ["Soul_Heart.png"],
        startingItems: [
            { name: "Bone Club", img: "Bone_Club.png", condition: null }
        ],
        unlocks: [
            { id: "forgotten_1", boss: "Boss Rush", item: "Divorce Papers", diff: "Normal/Hard" },
            { id: "forgotten_2", boss: "Mom's Heart", item: "Marrow", diff: "Hard" },
            { id: "forgotten_3", boss: "Satan", item: "Pointy Rib", diff: "Normal/Hard" },
            { id: "forgotten_4", boss: "Isaac", item: "Slipped Rib", diff: "Normal/Hard" },
            { id: "forgotten_5", boss: "The Lamb", item: "Brittle Bones", diff: "Normal/Hard" },
            { id: "forgotten_6", boss: "Blue Baby", item: "Jaw Bone", diff: "Normal/Hard" },
            { id: "forgotten_7", boss: "Greed Mode", item: "Finger Bone", diff: "Normal/Hard" },
            { id: "forgotten_8", boss: "Greedier Mode", item: "Dad's Ring", diff: "Hard" },
            { id: "forgotten_9", boss: "Hush", item: "Hallowed Ground", diff: "Normal/Hard" },
            { id: "forgotten_10", boss: "Delirium", item: "Book of the Dead", diff: "Normal/Hard" },
            { id: "forgotten_11", boss: "Mother", item: "Bone Spurs", diff: "Normal/Hard" },
            { id: "forgotten_12", boss: "The Beast", item: "Spirit Shackles", diff: "Normal/Hard" },
            { id: "forgotten_13", boss: "Mega Satan", item: "Bound Baby", diff: "Normal/Hard" },
            { id: "forgotten_14", boss: "All Hard Mode Marks", item: "Bone baby", diff: "Hard" },
            { id: "global_mega_blast", boss: "Mega Satan", item: "Mega Blast", diff: "Hard" },
            { id: "global_mega_mush", boss: "All Hard Mode Marks", item: "Mega Mush", diff: "Hard" }
        ]
    },
"Bethany": {
        name: "Bethany", image: "img/Characters/Normal/Bethany.png", description: "The faithful. Cannot use Soul Hearts for health, but uses for soul charges. Bethany is unlocked by defeating Mom's Heart/It Lives! as Lazarus on hard mode, while not dying once. Lucas' note: Protect the wisps with your life, only for them to instantly die to a red poop.",
        stats: "HP: 3 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        effects: ["Red_Heart.png", "Blended_Heart.png"],
        startingItems: [
            { name: "Book of Virtues", img: "Book_of_Virtues.png", condition: null }
        ],
        unlocks: [
            { id: "bethany_1", boss: "Boss Rush", item: "Beth's Faith", diff: "Normal/Hard" },
            { id: "bethany_2", boss: "Mom's Heart", item: "Wisp Baby", diff: "Hard" },
            { id: "bethany_3", boss: "Satan", item: "Urn of Souls", diff: "Normal/Hard" },
            { id: "bethany_4", boss: "Isaac", item: "Book of Virtues", diff: "Normal/Hard" },
            { id: "bethany_5", boss: "The Lamb", item: "Alabaster Box", diff: "Normal/Hard" },
            { id: "bethany_6", boss: "Blue Baby", item: "Blessed Penny", diff: "Normal/Hard" },
            { id: "bethany_7", boss: "Greed Mode", item: "Soul Locket", diff: "Normal/Hard" },
            { id: "bethany_8", boss: "Greedier Mode", item: "Vade Retro", diff: "Hard" },
            { id: "bethany_9", boss: "Hush", item: "Divine Intervention", diff: "Normal/Hard" },
            { id: "bethany_10", boss: "Delirium", item: "Star of Bethlehem", diff: "Normal/Hard" },
            { id: "bethany_11", boss: "Mother", item: "Revelation", diff: "Normal/Hard" },
            { id: "bethany_12", boss: "The Beast", item: "Jar of Wisps", diff: "Normal/Hard" },
            { id: "bethany_13", boss: "Mega Satan", item: "Glowing Baby", diff: "Normal/Hard" },
            { id: "bethany_14", boss: "All Hard Mode Marks", item: "Hope baby", diff: "Hard" },
            { id: "global_mega_blast", boss: "Mega Satan", item: "Mega Blast", diff: "Hard" },
            { id: "global_mega_mush", boss: "All Hard Mode Marks", item: "Mega Mush", diff: "Hard" }
        ]
    },
"Jacob & Esau": {
        name: "Jacob & Esau", image: "img/Characters/Normal/Jacob_&_Esau.png", description: "The twins. Control two characters at the exact same time with separate health and items. Jaboc & Esau are unlocked by defeating Mother for the first time. Lucas' note: The Jacob and Hitbox experience.",
        stats: "Jacob stats:<br>HP: 3 Red<br>DMG: 2.75<br>Tears: 2.73<br>Speed: 1.00<br><br>Esau stats:<br>HP: 1 Red, 1 Soul<br>DMG: 3.75<br>Tears: 2.73<br>Speed: 1.00",
        effects: ["Red_Heart.png", "Soul_Heart.png"],
        startingItems: [],
        unlocks: [
            { id: "jacob_1", boss: "Boss Rush", item: "Rock Bottom", diff: "Normal/Hard" },
            { id: "jacob_2", boss: "Mom's Heart", item: "Double baby", diff: "Hard" },
            { id: "jacob_3", boss: "Satan", item: "Red Stew", diff: "Normal/Hard" },
            { id: "jacob_4", boss: "Isaac", item: "The Stairway", diff: "Normal/Hard" },
            { id: "jacob_5", boss: "The Lamb", item: "Damocles", diff: "Normal/Hard" },
            { id: "jacob_6", boss: "Blue Baby", item: "Birthright", diff: "Normal/Hard" },
            { id: "jacob_7", boss: "Greed Mode", item: "Inner Child", diff: "Normal/Hard" },
            { id: "jacob_8", boss: "Greedier Mode", item: "Genesis", diff: "Hard" },
            { id: "jacob_9", boss: "Hush", item: "Vanishing Twin", diff: "Normal/Hard" },
            { id: "jacob_10", boss: "Delirium", item: "Suplex!", diff: "Normal/Hard" },
            { id: "jacob_11", boss: "Mother", item: "Magic Skin", diff: "Normal/Hard" },
            { id: "jacob_12", boss: "The Beast", item: "Friend Finder", diff: "Normal/Hard" },
            { id: "jacob_13", boss: "Mega Satan", item: "Illusion baby", diff: "Normal/Hard" },
            { id: "jacob_14", boss: "All Hard Mode Marks", item: "Solomon's baby", diff: "Hard" },
            { id: "global_mega_blast", boss: "Mega Satan", item: "Mega Blast", diff: "Hard" },
            { id: "global_mega_mush", boss: "All Hard Mode Marks", item: "Mega Mush", diff: "Hard" }
        ]
    },

"Tainted Isaac": {
        name: "Tainted Isaac", image: "img/Characters/Tainted/Tainted_Isaac.png", description: "The Hoarder. Items cycles through 2 item choices but can only hold 8 passives at a time. Tainted Isaac is unlocked by using either Red Key, cracked key or soul of Cain to open the hidden closet in the Home floor as Isaac. All Tainted Characters are unlocked with the same method, the only diferrent is the character you are actually playing as. Lucas' note: Minecraft full inventory gameplay",
        stats: "HP: 3 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        effects: ["Red_Heart.png"],
        startingItems: [
            { name: "1 Bomb", img: "Bomb.png", isEffectImg: true, tooltip: "Starts with a Bomb", condition: null }
        ],
        unlocks: [
            { id: "t_isaac_1", boss: "Boss Rush & Hush", item: "Soul of Isaac", diff: "Hard" },
            { id: "t_isaac_2", boss: "Isaac, ???, Satan & The Lamb", item: "Mom's Lock", diff: "Hard" },
            { id: "t_isaac_3", boss: "Mega Satan", item: "Mega Chest", diff: "Hard" },
            { id: "t_isaac_4", boss: "Delirium", item: "Spindown Dice", diff: "Hard" },
            { id: "t_isaac_5", boss: "Mother", item: "Dice Bag", diff: "Hard" },
            { id: "t_isaac_6", boss: "The Beast", item: "Glitched Crown", diff: "Hard" },
            { id: "t_isaac_7", boss: "Greedier Mode", item: "The Stars?", diff: "Hard" }
        ]
    },
"Tainted Magdalene": {
        name: "Tainted Magdalene", image: "img/Characters/Tainted/Tainted_Magdalene.png", description: "The Dauntless. Bleeds out constantly buthugging enemies to death drops temporary half-red hearts. Tainted Magdalene is unlocked via the same method as Tainted Isaac, but you need to play as Magdalene. Lucas' note: *DOOM music kicks in* TIME TO HUG 'EM ALL!",
        stats: "HP: 4 Red (Empty)<br>DMG: 2.62<br>Tears: 2.73<br>Speed: 1.20",
        effects: ["Red_Heart.png"],
        startingItems: [
            { name: "Yum Heart", img: "Yum_Heart.png", condition: null }
        ],
        unlocks: [
            { id: "t_mag_1", boss: "Boss Rush & Hush", item: "Soul of Magdalene", diff: "Hard" },
            { id: "t_mag_2", boss: "Isaac, ???, Satan & The Lamb", item: "Holy Crown", diff: "Hard" },
            { id: "t_mag_3", boss: "Mega Satan", item: "Queen of Hearts", diff: "Hard" },
            { id: "t_mag_4", boss: "Delirium", item: "Hypercoagulation", diff: "Hard" },
            { id: "t_mag_5", boss: "Mother", item: "Mother's Kiss", diff: "Hard" },
            { id: "t_mag_6", boss: "The Beast", item: "Belly Jelly", diff: "Hard" },
            { id: "t_mag_7", boss: "Greedier Mode", item: "The Lovers?", diff: "Hard" }
        ]
    },
"Tainted Cain": {
        name: "Tainted Cain", image: "img/Characters/Tainted/Tainted_Cain.png", description: "The Hoarder. Cannot pick up items directly, and must craft them using pickups in a bag. Items turns into pickups. Tainted Cain is unlocked via the same method as Tainted Isaac, but you need to play as Cain. Lucas' note: First we Cry, then we Craft.",
        stats: "HP: 2 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.30",
        effects: ["Red_Heart.png"],
        startingItems: [
            { name: "Bag of Crafting", img: "Bag_of_Crafting.png", condition: null }
        ],
        unlocks: [
            { id: "t_cain_1", boss: "Boss Rush & Hush", item: "Soul of Cain", diff: "Hard" },
            { id: "t_cain_2", boss: "Isaac, ???, Satan & The Lamb", item: "Gilded Key", diff: "Hard" },
            { id: "t_cain_3", boss: "Mega Satan", item: "Golden Pill", diff: "Hard" },
            { id: "t_cain_4", boss: "Delirium", item: "Bag of Crafting", diff: "Hard" },
            { id: "t_cain_5", boss: "Mother", item: "Lucky Sack", diff: "Hard" },
            { id: "t_cain_6", boss: "The Beast", item: "Blue Key", diff: "Hard" },
            { id: "t_cain_7", boss: "Greedier Mode", item: "Wheel of Fortune?", diff: "Hard" }
        ]
    },
"Tainted Judas": {
        name: "Tainted Judas", image: "img/Characters/Tainted/Tainted_Judas.png", description: "The Deceiver. Can only have Soul/Black hearts and starts with Dark Arts to slice through enemies. Tainted Judas is unlocked via the same method as Tainted Isaac, but you need to play as Judas. Lucas' note: Omae wa, MOU shindeiru.",
        stats: "HP: 2 Black<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        effects: ["Black_Heart.png"],
        startingItems: [
            { name: "Dark Arts", img: "Dark_Arts.png", condition: null }
        ],
        unlocks: [
            { id: "t_judas_1", boss: "Boss Rush & Hush", item: "Soul of Judas", diff: "Hard" },
            { id: "t_judas_2", boss: "Isaac, ???, Satan & The Lamb", item: "Your Soul", diff: "Hard" },
            { id: "t_judas_3", boss: "Mega Satan", item: "Black Sack", diff: "Hard" },
            { id: "t_judas_4", boss: "Delirium", item: "Dark Arts", diff: "Hard" },
            { id: "t_judas_5", boss: "Mother", item: "Number Magnet", diff: "Hard" },
            { id: "t_judas_6", boss: "The Beast", item: "Sanguine Bond", diff: "Hard" },
            { id: "t_judas_7", boss: "Greedier Mode", item: "The Magician?", diff: "Hard" }
        ]
    },
"Tainted Blue Baby": {
        name: "Tainted Blue Baby", image: "img/Characters/Tainted/Tainted_Blue_Baby.png", description: "The Enigma. Cannot use bombs, but throws various types of poop instead. Tainted Blue Baby is unlocked via the same method as Tainted Isaac, but you need to play as Blue Baby. Lucas' note: Taco Bell aftermath.",
        stats: "HP: 3 Soul<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.05",
        effects: ["Soul_Heart.png"],
        startingItems: [
            { name: "Hold", img: "Hold.png", condition: null }
        ],
        unlocks: [
            { id: "t_bluebaby_1", boss: "Boss Rush & Hush", item: "Soul of ???", diff: "Hard" },
            { id: "t_bluebaby_2", boss: "Isaac Moriah, ???, Satan & The Lamb", item: "Dingle Berry", diff: "Hard" },
            { id: "t_bluebaby_3", boss: "Mega Satan", item: "Charming Poop", diff: "Hard" },
            { id: "t_bluebaby_4", boss: "Delirium", item: "IBS", diff: "Hard" },
            { id: "t_bluebaby_5", boss: "Mother", item: "Ring Cap", diff: "Hard" },
            { id: "t_bluebaby_6", boss: "The Beast", item: "The Swarm", diff: "Hard" },
            { id: "t_bluebaby_7", boss: "Greedier Mode", item: "The Emperor?", diff: "Hard" }
        ]
    },
"Tainted Eve": {
        name: "Tainted Eve", image: "img/Characters/Tainted/Tainted_Eve.png", description: "The Curdled. Drains her own health to spawn a army of blood clots. Tainted Eve is unlocked via the same method as Tainted Isaac, but you need to play as Eve. Lucas' note: Pikmin, but make it bloody.",
        stats: "HP: 2 Red<br>DMG: 3.50<br>Tears: 1.20<br>Speed: 1.00",
        effects: ["Red_Heart.png"],
        startingItems: [
            { name: "Sumptorium", img: "Sumptorium.png", condition: null }
        ],
        unlocks: [
            { id: "t_eve_1", boss: "Boss Rush & Hush", item: "Soul of Eve", diff: "Hard" },
            { id: "t_eve_2", boss: "Isaac Moriah, ???, Satan & The Lamb", item: "Strange Key", diff: "Hard" },
            { id: "t_eve_3", boss: "Mega Satan", item: "Horse Pill", diff: "Hard" },
            { id: "t_eve_4", boss: "Delirium", item: "Sumptorium", diff: "Hard" },
            { id: "t_eve_5", boss: "Mother", item: "Lil Clot", diff: "Hard" },
            { id: "t_eve_6", boss: "The Beast", item: "Heartbreak", diff: "Hard" },
            { id: "t_eve_7", boss: "Greedier Mode", item: "The Empress?", diff: "Hard" }
        ]
    },
"Tainted Samson": {
        name: "Tainted Samson", image: "img/Characters/Tainted/Tainted_Samson.png", description: "The Savage. Goes into a doom-slayer berserk rage after dealing/taking damage. Tainted Samson is unlocked via the same method as Tainted Isaac, but you need to play as Samson Lucas' note: *Ultrakill music kicks in* RIP AND TEAR, BABY!",
        stats: "HP: 3 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.10",
        effects: ["Red_Heart.png"],
        startingItems: [],
        unlocks: [
            { id: "t_samson_1", boss: "Boss Rush & Hush", item: "Soul of Samson", diff: "Hard" },
            { id: "t_samson_2", boss: "Isaac Moriah, ???, Satan & The Lamb", item: "Temporary Tattoo", diff: "Hard" },
            { id: "t_samson_3", boss: "Mega Satan", item: "Crane Game", diff: "Hard" },
            { id: "t_samson_4", boss: "Delirium", item: "Berserk!", diff: "Hard" },
            { id: "t_samson_5", boss: "Mother", item: "Swallowed M80", diff: "Hard" },
            { id: "t_samson_6", boss: "The Beast", item: "Larynx", diff: "Hard" },
            { id: "t_samson_7", boss: "Greedier Mode", item: "Strength?", diff: "Hard" }
        ]
    },
"Tainted Azazel": {
        name: "Tainted Azazel", image: "img/Characters/Tainted/Tainted_Azazel.png", description: "The Benighted. Has a skinny Brimstone and sneezes to push and curse enemies. Tainted Azazel is unlocked via the same method as Tainted Isaac, but you need to play as Azazel Lucas' note: Bless him.",
        stats: "HP: 3 Black<br>DMG: 5.50<br>Tears: 1.20<br>Speed: 1.25",
        effects: ["Black_Heart.png"],
        startingItems: [],
        unlocks: [
            { id: "t_azazel_1", boss: "Boss Rush & Hush", item: "Soul of Azazel", diff: "Hard" },
            { id: "t_azazel_2", boss: "Isaac Moriah, ???, Satan & The Lamb", item: "Wicked Crown", diff: "Hard" },
            { id: "t_azazel_3", boss: "Mega Satan", item: "Hell Game", diff: "Hard" },
            { id: "t_azazel_4", boss: "Delirium", item: "Hemoptysis", diff: "Hard" },
            { id: "t_azazel_5", boss: "Mother", item: "Azazel's Stump", diff: "Hard" },
            { id: "t_azazel_6", boss: "The Beast", item: "Azazel's Rage", diff: "Hard" },
            { id: "t_azazel_7", boss: "Greedier Mode", item: "The Devil?", diff: "Hard" }
        ]
    },
"Tainted Lazarus": {
        name: "Tainted Lazarus", 
        image: "img/Characters/Tainted/Tainted_Lazarus.png", 
        image2: "img/Characters/Tainted/Tainted_Lazarus_Dead.png", 
        description: "The Flipped. Swaps between an alive and dead form every time a room is cleared, splitting items between them. Tainted Lazarus is unlocked via the same method as Tainted Isaac, but you need to play as Lazarus. Lucas' note: Two half-baked runs glued together by a mid item.",
        stats: "HP: 3 Red (Alive) / 3 Soul (Dead)<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        effects: ["Red_Heart.png", "Soul_Heart.png"],
        startingItems: [
            { name: "Flip", img: "Flip.png", condition: null }
        ],
        unlocks: [
            { id: "t_laz_1", boss: "Boss Rush & Hush", item: "Soul of Lazarus", diff: "Hard" },
            { id: "t_laz_2", boss: "Isaac Moriah, ???, Satan & The Lamb", item: "Torn Pocket", diff: "Hard" },
            { id: "t_laz_3", boss: "Mega Satan", item: "Wooden Chest", diff: "Hard" },
            { id: "t_laz_4", boss: "Delirium", item: "Flip", diff: "Hard" },
            { id: "t_laz_5", boss: "Mother", item: "Torn Card", diff: "Hard" },
            { id: "t_laz_6", boss: "The Beast", item: "Salvation", diff: "Hard" },
            { id: "t_laz_7", boss: "Greedier Mode", item: "Judgment?", diff: "Hard" }
        ]
    },
"Tainted Eden": {
        name: "Tainted Eden", image: "img/Characters/Tainted/Tainted_Eden.png", description: "The Capricious. Rerolls stats, items, and pickups upon taking damage. Tainted Eden is unlocked via the same method as Tainted Isaac, but you need to play as Eden Lucas' note: Oh, you have a broken build? *Gets hit by a fly* Enjoy your The Wiz + Cursed Eye run.",
        stats: "HP: Random<br>DMG: Random<br>Tears: Random<br>Speed: Random",
        effects: ["Red_Heart.png"],
        startingItems: [],
        unlocks: [
            { id: "t_eden_1", boss: "Boss Rush & Hush", item: "Soul of Eden", diff: "Hard" },
            { id: "t_eden_2", boss: "Isaac Moriah, ???, Satan & The Lamb", item: "Nuh Uh!", diff: "Hard" },
            { id: "t_eden_3", boss: "Mega Satan", item: "Wild Card", diff: "Hard" },
            { id: "t_eden_4", boss: "Delirium", item: "Corrupted Data", diff: "Hard" },
            { id: "t_eden_5", boss: "Mother", item: "Modeling Clay", diff: "Hard" },
            { id: "t_eden_6", boss: "The Beast", item: "TMTRAINER", diff: "Hard" },
            { id: "t_eden_7", boss: "Greedier Mode", item: "The World?", diff: "Hard" }
        ]
    },
"Tainted Lost": {
        name: "Tainted Lost", image: "img/Characters/Tainted/Tainted_Lost.png", description: "The Baleful. No health, no mantle, better items and no defensive items. Tainted Lost is unlocked via the same method as Tainted Isaac, but you need to play as The Lost Lucas' note: Dying to a spiked rock because you couldn't see it under the 50 items you picked up.",
        stats: "HP: None<br>DMG: 3.50 (x1.3 multiplier)<br>Tears: 2.73<br>Speed: 1.00",
        effects: ["Soul_Heart.png"],
        startingItems: [
            { name: "Holy Card", img: "Holy_Card.png", isEffectImg: true, tooltip: "Starts with a Holy Card", condition: null }
        ],
        unlocks: [
            { id: "t_lost_1", boss: "Boss Rush & Hush", item: "Soul of The Lost", diff: "Hard" },
            { id: "t_lost_2", boss: "Isaac Moriah, ???, Satan & The Lamb", item: "Kid's Drawing", diff: "Hard" },
            { id: "t_lost_3", boss: "Mega Satan", item: "Haunted Chest", diff: "Hard" },
            { id: "t_lost_4", boss: "Delirium", item: "Ghost Bombs", diff: "Hard" },
            { id: "t_lost_5", boss: "Mother", item: "Crystal Key", diff: "Hard" },
            { id: "t_lost_6", boss: "The Beast", item: "Sacred Orb", diff: "Hard" },
            { id: "t_lost_7", boss: "Greedier Mode", item: "The Fool?", diff: "Hard" }
        ]
    },
"Tainted Lilith": {
        name: "Tainted Lilith", image: "img/Characters/Tainted/Tainted_Lilith.png", description: "The Harlot. Whips her unborn fetus out to deal massive melee damage. Tainted Lilith is unlocked via the same method as Tainted Isaac, but you need to play as Lilith Lucas' note: Yeetus the fetus.",
        stats: "HP: 1 Red, 2 Black<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        effects: ["Red_Heart.png", "Black_Heart.png"],
        startingItems: [],
        unlocks: [
            { id: "t_lilith_1", boss: "Boss Rush & Hush", item: "Soul of Lilith", diff: "Hard" },
            { id: "t_lilith_2", boss: "Isaac Moriah, ???, Satan & The Lamb", item: "The Twins", diff: "Hard" },
            { id: "t_lilith_3", boss: "Mega Satan", item: "Fool's Gold", diff: "Hard" },
            { id: "t_lilith_4", boss: "Delirium", item: "Gello", diff: "Hard" },
            { id: "t_lilith_5", boss: "Mother", item: "Adoption Papers", diff: "Hard" },
            { id: "t_lilith_6", boss: "The Beast", item: "Twisted Pair", diff: "Hard" },
            { id: "t_lilith_7", boss: "Greedier Mode", item: "The High Priestess?", diff: "Hard" }
        ]
    },
"Tainted Keeper": {
        name: "Tainted Keeper", image: "img/Characters/Tainted/Tainted_Keeper.png", description: "The Miser. Enemies drop temporary coins on death, but all items costs money instead of finding them free. Tainted Keeper is unlocked via the same method as Tainted Isaac, but you need to play as Keeper Lucas' note: Capitalism at its finest.",
        stats: "HP: 2 Coin Hearts<br>DMG: 4.20<br>Tears: 1.20<br>Speed: 0.85",
        effects: ["Double_Penny.png", "Golden_Penny.png"],
        startingItems: [
            { name: "1 Bomb", img: "Bomb.png", isEffectImg: true, tooltip: "Starts with a Bomb", condition: null }
        ],
        unlocks: [
            { id: "t_keeper_1", boss: "Boss Rush & Hush", item: "Soul of The Keeper", diff: "Hard" },
            { id: "t_keeper_2", boss: "Isaac Moriah, ???, Satan & The Lamb", item: "Keeper's Bargain", diff: "Hard" },
            { id: "t_keeper_3", boss: "Mega Satan", item: "Golden Penny", diff: "Hard" },
            { id: "t_keeper_4", boss: "Delirium", item: "Keeper's Kin", diff: "Hard" },
            { id: "t_keeper_5", boss: "Mother", item: "Cursed Penny", diff: "Hard" },
            { id: "t_keeper_6", boss: "The Beast", item: "Strawman", diff: "Hard" },
            { id: "t_keeper_7", boss: "Greedier Mode", item: "The Hanged Man?", diff: "Hard" }
        ]
    },
"Tainted Apollyon": {
        name: "Tainted Apollyon", image: "img/Characters/Tainted/Tainted_Apollyon.png", description: "The Empty. Sucks up items to create an army of locusts with Abyss. Tainted Appolyon is unlocked via the same method as Tainted Isaac, but you need to play as Apollyon. Lucas' note: When in doubt, make a fly.",
        stats: "HP: 2 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        effects: ["Red_Heart.png"],
        startingItems: [
            { name: "Abyss", img: "Abyss.png", condition: null }
        ],
        unlocks: [
            { id: "t_apollyon_1", boss: "Boss Rush & Hush", item: "Soul of Apollyon", diff: "Hard" },
            { id: "t_apollyon_2", boss: "Isaac Moriah, ???, Satan & The Lamb", item: "Cricket's Leg", diff: "Hard" },
            { id: "t_apollyon_3", boss: "Mega Satan", item: "Rotten Beggar", diff: "Hard" },
            { id: "t_apollyon_4", boss: "Delirium", item: "Abyss", diff: "Hard" },
            { id: "t_apollyon_5", boss: "Mother", item: "Apollyon's Best Friend", diff: "Hard" },
            { id: "t_apollyon_6", boss: "The Beast", item: "Echo Chamber", diff: "Hard" },
            { id: "t_apollyon_7", boss: "Greedier Mode", item: "The Tower?", diff: "Hard" }
        ]
    },
"Tainted Forgotten": {
        name: "Tainted Forgotten", 
        image: "img/Characters/Tainted/Tainted_Forgotten.png", 
        image2: "img/Characters/Tainted/Tainted_Soul.png",
        description: "The Fettered. The soul carries the skeleton and literally throws it at enemies. Ludovico special.",
        stats: "HP: 3 Soul<br>DMG: 3.50 (x1.5 Bone damage)<br>Tears: 1.20<br>Speed: 1.30",
        effects: ["Soul_Heart.png"],
        startingItems: [],
        unlocks: [
            { id: "t_forgotten_1", boss: "Boss Rush & Hush", item: "Soul of The Forgotten", diff: "Hard" },
            { id: "t_forgotten_2", boss: "Isaac Moriah, ???, Satan & The Lamb", item: "Polished Bone", diff: "Hard" },
            { id: "t_forgotten_3", boss: "Mega Satan", item: "Golden Battery", diff: "Hard" },
            { id: "t_forgotten_4", boss: "Delirium", item: "Decap Attack", diff: "Hard" },
            { id: "t_forgotten_5", boss: "Mother", item: "Hollow Heart", diff: "Hard" },
            { id: "t_forgotten_6", boss: "The Beast", item: "Isaac's Tomb", diff: "Hard" },
            { id: "t_forgotten_7", boss: "Greedier Mode", item: "Death?", diff: "Hard" }
        ]
    },
"Tainted Bethany": {
        name: "Tainted Bethany", image: "img/Characters/Tainted/Tainted_Bethany.png", description: "The Zealot. Uses red charges to spawn random item wisps with Lemegeton. Tainted Bethany is unlocked via the same method as Tainted Isaac, but you need to play as Bethany Lucas' note: When you spawn a The Wiz wisp, you immediately regrets everything.",
        stats: "HP: 3 Soul<br>DMG: 3.50 (x0.75 multiplier)<br>Tears: 2.73<br>Speed: 1.00",
        effects: ["Soul_Heart.png"],
        startingItems: [
            { name: "Lemegeton", img: "Lemegeton.png", condition: null }
        ],
        unlocks: [
            { id: "t_bethany_1", boss: "Boss Rush & Hush", item: "Soul of Bethany", diff: "Hard" },
            { id: "t_bethany_2", boss: "Isaac Moriah, ???, Satan & The Lamb", item: "Expansion Pack", diff: "Hard" },
            { id: "t_bethany_3", boss: "Mega Satan", item: "Confessional", diff: "Hard" },
            { id: "t_bethany_4", boss: "Delirium", item: "Lemegeton", diff: "Hard" },
            { id: "t_bethany_5", boss: "Mother", item: "Beth's Essence", diff: "Hard" },
            { id: "t_bethany_6", boss: "The Beast", item: "Vengeful Spirit", diff: "Hard" },
            { id: "t_bethany_7", boss: "Greedier Mode", item: "The Hierophant?", diff: "Hard" }
        ]
    },
"Tainted Jacob": {
        name: "Tainted Jacob", image: "img/Characters/Tainted/Tainted_Jacob.png", 
        description: "The Deserter. Chased endlessly by Dark Esau. Touching him turns you into a mantle-less ghost. Tainted Jacob is unlocked via the same method as Tainted Isaac, but you need to play as Jacob & Esau Lucas' note: You thought Jacob & Esau was bad? Now one of them is actively trying to kill you + Tainted Lost experience.",
        stats: "HP: 3 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        effects: ["Red_Heart.png"],
        startingItems: [
            { name: "Anima Sola", img: "Anima_Sola.png", condition: null }
        ],
        unlocks: [
            { id: "t_jacob_1", boss: "Boss Rush & Hush", item: "Soul of Jacob & Esau", diff: "Hard" },
            { id: "t_jacob_2", boss: "Isaac Moriah, ???, Satan & The Lamb", item: "RC Remote", diff: "Hard" },
            { id: "t_jacob_3", boss: "Mega Satan", item: "Golden Trinkets", diff: "Hard" },
            { id: "t_jacob_4", boss: "Delirium", item: "Anima Sola", diff: "Hard" },
            { id: "t_jacob_5", boss: "Mother", item: "Found Soul", diff: "Hard" },
            { id: "t_jacob_6", boss: "The Beast", item: "Esau JR.", diff: "Hard" },
            { id: "t_jacob_7", boss: "Greedier Mode", item: "The Sun? & The Moon?", diff: "Hard" }
        ]
    },
};

const select = document.getElementById('character-select');
const swapBtn = document.getElementById('swap-btn');
const charInfo = document.getElementById('char-info');
const charName = document.getElementById('char-name');
const charDesc = document.getElementById('char-desc');
const charStats = document.getElementById('char-stats');
const charEffects = document.getElementById('char-effects');
const startingItemsList = document.getElementById('starting-items-list');
const grid = document.getElementById('unlock-grid');
const progressText = document.getElementById('progress-text');
const charImageContainer = document.getElementById('char-image-container');

let isTaintedMode = false;
let userProgress = JSON.parse(localStorage.getItem('isaacUnlocksProgress')) || {};

const soundtrack = {
    normal: "sound/Normal_Music.mp3",
    tainted: "sound/Tainted_Music.mp3"
};

const audioPlayer = document.getElementById('bg-music');
const musicSource = document.getElementById('music-source');

function playMusic(mode) {
    if (!audioPlayer || !musicSource) return;
    const newSrc = mode === 'tainted' ? soundtrack.tainted : soundtrack.normal;
    if (!musicSource.src.includes(newSrc)) {
        musicSource.src = newSrc;
        audioPlayer.load();
        audioPlayer.play().catch(() => {});
    }
}

function playSFX(id) {
    const sfx = document.getElementById(id);
    if (sfx) {
        sfx.currentTime = 0;
        sfx.play().catch(() => {});
    }
}

document.addEventListener('click', () => {
    if (audioPlayer && audioPlayer.paused) {
        audioPlayer.play().catch(() => {});
    }
}, { once: true });

function saveProgress() {
    localStorage.setItem('isaacUnlocksProgress', JSON.stringify(userProgress));
}

function updateProgressDisplay() {
    const char = select.value;
    const charData = gameData[char];
    if (!charData) return;
    
    const unlocks = getUnlocksForCharacter(charData);
    const total = unlocks.length;
    const completed = unlocks.filter(u => userProgress[u.id]).length;
    if (progressText) progressText.innerText = `${completed}/${total}`;
}

function populateSelect() {
    select.innerHTML = '';
    const chars = Object.keys(gameData).filter(c => {
        const isTaintedChar = c.startsWith("Tainted");
        return isTaintedMode ? isTaintedChar : !isTaintedChar;
    });

    chars.forEach(char => {
        const option = document.createElement('option');
        option.value = char;
        option.textContent = gameData[char].name;
        select.appendChild(option);
    });
}

function getValidImagePath(baseName, defaultFolder, imgElement) {
    const folders = [defaultFolder, 'Items', 'Characters/Effects', 'Pickups', 'Effects', 'Trinkets', 'UI', 'Bosses'];
    const uniqueFolders = [...new Set(folders)];
    let currentIdx = 0;

    imgElement.src = `img/${uniqueFolders[currentIdx]}/${baseName}`;
    
    imgElement.onerror = function() {
        currentIdx++;
        if (currentIdx < uniqueFolders.length) {
            this.src = `img/${uniqueFolders[currentIdx]}/${baseName}`;
        } else {
            this.style.display = 'none';
        }
    };
}

function getUnlocksForCharacter(charData) {
    const unlocks = [...charData.unlocks];
    const existingIds = new Set(unlocks.map(unlock => unlock.id));

    (charData.startingItems || []).forEach(item => {
        if (item.condition && secondaryUnlocks[item.condition] && !existingIds.has(item.condition)) {
            unlocks.push({ ...secondaryUnlocks[item.condition], secondary: true });
            existingIds.add(item.condition);
        }
    });

    return unlocks;
}

function getUnlockById(id) {
    for (const charData of Object.values(gameData)) {
        const unlock = charData.unlocks.find(entry => entry.id === id);
        if (unlock) return unlock;
    }

    return secondaryUnlocks[id] || null;
}

function getConditionText(item) {
    if (item.conditionText) return item.conditionText;

    const unlock = getUnlockById(item.condition);
    if (!unlock) return item.condition;

    return `${unlock.boss}: ${unlock.item}`;
}

function renderCharInfo() {
    const char = select.value;
    const charData = gameData[char];
    if (!charData) return;

    charName.textContent = charData.name;
    charDesc.textContent = charData.description;
    charStats.innerHTML = charData.stats;

    charImageContainer.innerHTML = '';
    const mainImg = document.createElement('img');
    mainImg.src = charData.image;
    mainImg.alt = charData.name;
    charImageContainer.appendChild(mainImg);
    
    if (charData.image2) {
        const secondImg = document.createElement('img');
        secondImg.src = charData.image2;
        secondImg.alt = `${charData.name} 2`;
        charImageContainer.appendChild(secondImg);
    }

    charEffects.innerHTML = '';
    if (charData.effects) {
        charData.effects.forEach(effect => {
            const chip = document.createElement('span');
            chip.className = 'effect-chip';

            const img = document.createElement('img');
            img.className = 'effect-icon';
            const title = typeof effectTooltips !== 'undefined' && effectTooltips[effect] ? effectTooltips[effect] : "";
            if (title) {
                chip.title = title;
                img.title = title;
                img.setAttribute('aria-label', title);
            }
            getValidImagePath(effect, 'Effects', img);
            chip.appendChild(img);
            charEffects.appendChild(chip);
        });
    }

    startingItemsList.innerHTML = '';
    if (!charData.startingItems || charData.startingItems.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'None';
        startingItemsList.appendChild(li);
    } else {
        charData.startingItems.forEach(item => {
            const li = document.createElement('li');
            li.className = 'starting-item';
            const conditionId = item.condition;
            
            if (conditionId) {
                if (!userProgress[conditionId]) {
                    li.classList.add('item-locked');
                }
                li.style.cursor = 'pointer';
                li.title = getConditionText(item);
                li.addEventListener('click', () => {
                    userProgress[conditionId] = !userProgress[conditionId];
                    if (userProgress[conditionId]) {
                        playSFX('sfx-mark-complete');
                    } else {
                        playSFX('sfx-mark-incomplete');
                    }
                    saveProgress();
                    renderAll();
                });
            }
            
            const defaultFolder = item.isEffectImg ? 'Effects' : 'Items';
            
            const img = document.createElement('img');
            img.className = 'item-icon';
            img.alt = item.name;
            if (item.tooltip || conditionId) img.title = item.tooltip || getConditionText(item);
            
            getValidImagePath(item.img, defaultFolder, img);

            const nameSpan = document.createElement('span');
            nameSpan.className = 'item-name-tag';
            nameSpan.textContent = item.name;
            
            li.appendChild(img);
            li.appendChild(nameSpan);

            if (conditionId) {
                const br = document.createElement('br');
                const condSpan = document.createElement('span');
                condSpan.className = 'item-unlock-condition';
                condSpan.textContent = userProgress[conditionId] ? '' : `(${getConditionText(item)})`;
                li.appendChild(br);
                li.appendChild(condSpan);
            }
            
            startingItemsList.appendChild(li);
        });
    }
}

function renderUnlocks() {
    grid.innerHTML = '';
    const char = select.value;
    const charData = gameData[char];
    if (!charData) return;
    const unlocks = getUnlocksForCharacter(charData);

    const checkAllComplete = () => {
        return unlocks.every(u => userProgress[u.id]);
    };

    unlocks.forEach(unlock => {
        const card = document.createElement('div');
        const bosses = unlock.boss.split(/,\s*|\s*&\s*/);
        const isMulti = bosses.length > 1;

        if (isMulti) {
            const allCompleted = bosses.every(b => userProgress[`${unlock.id}_${b}`]);
            userProgress[unlock.id] = allCompleted;
        }

        card.className = `unlock-card ${userProgress[unlock.id] ? 'completed' : ''} ${isMulti ? 'multi-boss' : ''} ${unlock.secondary ? 'secondary-unlock' : ''}`;
        
        let bossImageHtml = '';
        if (typeof bossImagesMap !== 'undefined' && bossImagesMap[unlock.boss]) {
            bossImageHtml = `<img src="img/Bosses/${bossImagesMap[unlock.boss]}" class="boss-img" alt="${unlock.boss}" onload="this.style.display='block'" onerror="this.style.display='none'">`;
        }

        let subBossesHtml = '';
        if (isMulti) {
            subBossesHtml = '<div class="sub-boss-container">';
            bosses.forEach(b => {
                const subId = `${unlock.id}_${b}`;
                const isChecked = userProgress[subId];
                subBossesHtml += `<button class="sub-boss-btn ${isChecked ? 'active' : ''}" data-subid="${subId}">${b}</button>`;
            });
            subBossesHtml += '</div>';
        }

        card.innerHTML = `
            <div class="boss-name">${unlock.boss}</div>
            ${bossImageHtml}
            <div class="item-name">${unlock.item}</div>
            <div class="difficulty ${unlock.diff.includes('Hard') ? 'hard-mode' : ''}">${unlock.diff}</div>
            ${subBossesHtml}
        `;

        if (isMulti) {
            const btns = card.querySelectorAll('.sub-boss-btn');
            btns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const subId = btn.dataset.subid;
                    const wasAlready100 = checkAllComplete();
                    
                    userProgress[subId] = !userProgress[subId];

                    const parentAllDone = bosses.every(b => userProgress[`${unlock.id}_${b}`]);
                    userProgress[unlock.id] = parentAllDone;
                    
                    const isNow100 = checkAllComplete();

                    if (userProgress[subId]) {
                        if (!wasAlready100 && isNow100) {
                            playSFX('sfx-all-complete');
                        } else {
                            playSFX('sfx-mark-complete');
                        }
                    } else {
                        playSFX('sfx-mark-incomplete');
                    }
                    
                    saveProgress();
                    renderAll();
                });
            });
        } else {
            card.addEventListener('click', () => {
                const wasAlready100 = checkAllComplete();
                
                userProgress[unlock.id] = !userProgress[unlock.id];
                const isNow100 = checkAllComplete();
                
                if (userProgress[unlock.id]) {
                    if (!wasAlready100 && isNow100) {
                        playSFX('sfx-all-complete');
                    } else {
                        playSFX('sfx-mark-complete');
                    }
                } else {
                    playSFX('sfx-mark-incomplete');
                }
                
                saveProgress();
                renderAll();
            });
        }
        grid.appendChild(card);
    });
}

function renderAll() {
    renderCharInfo();
    renderUnlocks();
    updateProgressDisplay();
}

select.addEventListener('change', renderAll);

function toggleTaintedMode() {
    isTaintedMode = !isTaintedMode;
    document.body.classList.toggle('tainted-mode', isTaintedMode);
    playMusic(isTaintedMode ? 'tainted' : 'normal');
    populateSelect();
    renderAll();
}

swapBtn.addEventListener('click', toggleTaintedMode);

document.addEventListener('keydown', (event) => {
    const target = event.target;
    const isTyping = target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
    if (isTyping) return;

    if (event.key.toLowerCase() === 'e') {
        toggleTaintedMode();
    }
});

populateSelect();
renderAll();
