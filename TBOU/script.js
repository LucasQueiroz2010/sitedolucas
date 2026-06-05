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
    "Soul_Heart.png": "depende de Soul/Black Hearts",
    "Black_Heart.png": "depende de Black/Soul Hearts",
    "Double_Penny.png": "Uses coins as health",
    "Golden_Penny.png": "Enemies drop temporary coins on death",
    "Blended_Heart.png": "Uses Red/Soul/Black Hearts as active item charges",
    "Bone_Heart.png": "Can only have Bone Hearts",
    "Half_Soul_Heart.png": "Starts with Soul Hearts",
    "Half_Black_Heart.png": "Starts with Black Hearts",
    "Half_Red_Heart.png": "Don't start with, but can have Red Hearts"
};

const secondaryUnlocks = {
    "chal_31": { id: "chal_31", boss: "Challenge #31", item: "Anemic", diff: "Backasswards" },
    "chal_32": { id: "chal_32", boss: "Challenge #32", item: "Full Health Pill", diff: "April's Fool" },
    "chal_34": { id: "chal_34", boss: "Challenge #34", item: "Child's Heart", diff: "Ultra Hard" },
    "greed_68": { id: "greed_68", boss: "Greed Donation Machine", item: "Paper Clip", diff: "Donate 68 coins " },
    "greed_439": { id: "greed_439", boss: "Greed Donation Machine", item: "Razor Blade", diff: "Donate 439c" },
    "greed_879": { id: "greed_879", boss: "Greed Donation Machine", item: "Holy Mantle", diff: "Donate 879c" },
    "greed_1000": { id: "greed_1000", boss: "Greed Donation Machine", item: "Keeper", diff: "Donate 1000c" }
};

const greedDonationUnlocks = [
    { coins: 68, id: "greed_68", reward: "Paper Clip" },
    { coins: 439, id: "greed_439", reward: "Razor Blade" },
    { coins: 879, id: "greed_879", reward: "Lost starts with Holy Mantle" },
    { coins: 1000, id: "greed_1000", reward: "Keeper" }
];

const dailyAchievements = [
    { id: "daily_broken_modem", name: "Broken Modem", reward: "Win 7 Daily Runs", stat: "wins", goal: 7 },
    { id: "daily_cracked_crown", name: "Cracked Crown", reward: "Get a 5 Daily Run victory streak", stat: "streak", goal: 5 },
    { id: "daily_dedication", name: "Dedication", reward: "Play 31 Daily Runs", stat: "played", goal: 31 }
];

const challengeData = [
    { id: "chal_1", name: "Pitch Black", reward: "Rune of Hagalaz", requirements: [] },
    { id: "chal_2", name: "High Brow", reward: "Rune of Jera", requirements: [] },
    { id: "chal_3", name: "Head Trauma", reward: "Rune of Ehwaz", requirements: [] },
    { id: "chal_4", name: "Darkness Falls", reward: "Rune of Dagaz", requirements: [{ id: "eve_6", text: "Defeat ??? as Eve" }] },
    { id: "chal_5", name: "The Tank", reward: "Rune of Algiz", requirements: [] },
    { id: "chal_6", name: "Solar System", reward: "Rune of Perthro", requirements: [{ text: "Defeat Mom's Heart 3 times" }] },
    { id: "chal_7", name: "Suicide King", reward: "Suicide King card", requirements: [{ text: "Defeat Mom's Heart 11 times" }, { text: "Unlock Lazarus" }] },
    { id: "chal_8", name: "Cat Got Your Tongue", reward: "Rune of Ansuz", requirements: [{ id: "mag_5", text: "Unlock Maggy's Faith" }] },
    { id: "chal_9", name: "Demo Man", reward: "Chaos Card", requirements: [] },
    { id: "chal_10", name: "Cursed!", reward: "Credit Card", requirements: [] },
    { id: "chal_11", name: "Glass Cannon", reward: "Rules Card", requirements: [{ text: "Defeat Mom's Heart 11 times" }] },
    { id: "chal_12", name: "When Life Gives You Lemons", reward: "Card Against Humanity", requirements: [] },
    { id: "chal_13", name: "Beans!", reward: "Burnt Penny", requirements: [] },
    { id: "chal_14", name: "It's in the Cards", reward: "SMB Super Fan", requirements: [] },
    { id: "chal_15", name: "Slow Roll", reward: "Swallowed Penny", requirements: [] },
    { id: "chal_16", name: "Computer Savvy", reward: "Robo-Baby 2.0", requirements: [] },
    { id: "chal_17", name: "Waka Waka", reward: "Death's Touch", requirements: [] },
    { id: "chal_18", name: "The Host", reward: "Technology .5", requirements: [] },
    { id: "chal_19", name: "The Family Man", reward: "Epic Fetus", requirements: [{ id: "isaac_13", text: "Defeat Mega Satan as Isaac" }] },
    { id: "chal_20", name: "Purist", reward: "Rune of Berkano", requirements: [] },
    { id: "chal_21", name: "XXXXXXXXL", reward: "Gold Heart", requirements: [{ text: "Defeat Mom's Heart 11 times" }] },
    { id: "chal_22", name: "SPEED!", reward: "Get out of Jail Free Card", requirements: [{ text: "Defeat Mom" }] },
    { id: "chal_23", name: "Blue Bomber", reward: "Gold Bomb", requirements: [{ text: "Destroy 10 Tinted Rocks" }, { text: "Defeat Mom's Heart 11 times" }] },
    { id: "chal_24", name: "PAY TO PLAY", reward: "2 new pills", requirements: [{ id: "cain_4", text: "Defeat Isaac as Cain" }, { text: "Destroy 10 Tinted Rocks" }] },
    { id: "chal_25", name: "Have a Heart", reward: "2 new pills", requirements: [{ text: "Defeat Mom" }] },
    { id: "chal_26", name: "I RULE!", reward: "Poker Chip", requirements: [{ id: "global_mega_blast", text: "Defeat Mega Satan" }, { text: "Unlock The Negative" }] },
    { id: "chal_27", name: "BRAINS!", reward: "Stud Finder", requirements: [{ id: "bluebaby_4", text: "Defeat Isaac as ???" }] },
    { id: "chal_28", name: "PRIDE DAY!", reward: "D8", requirements: [{ text: "Defeat Mom" }] },
    { id: "chal_29", name: "Onan's Streak", reward: "Kidney Stone", requirements: [{ text: "Unlock Judas" }, { text: "Unlock It Lives" }] },
    { id: "chal_30", name: "The Guardian", reward: "Blank Rune", requirements: [{ text: "Defeat Mom" }] },
    { id: "chal_31", name: "Backasswards", reward: "Anemic", requirements: [{ id: "global_mega_blast", text: "Defeat Mega Satan" }, { text: "Unlock The Negative" }] },
    { id: "chal_32", name: "Aprils Fool", reward: "Maggy starts with a Full Health pill", requirements: [{ text: "Defeat Mom" }] },
    { id: "chal_33", name: "Pokey Mans", reward: "Charged Key", requirements: [{ text: "Defeat Mom's Heart 11 times" }] },
    { id: "chal_34", name: "Ultra Hard", reward: "Samson starts with Child's Heart", requirements: [{ id: "global_mega_blast", text: "Defeat Mega Satan" }, { text: "Unlock The Negative" }] },
    { id: "chal_35", name: "Pong", reward: "Greed's Gullet", requirements: [{ id: "bluebaby_4", text: "Defeat Isaac as ???" }] },
    { id: "chal_36", name: "Scat Man", reward: "Dirty Mind", requirements: [] },
    { id: "chal_37", name: "Bloody Mary", reward: "Sigil of Baphomet", requirements: [{ text: "Unlock Bethany" }, { text: "Unlock Blood Bag" }, { text: "Unlock It Lives" }] },
    { id: "chal_38", name: "Baptism by Fire", reward: "Purgatory", requirements: [{ id: "bethany_3", text: "Defeat Satan as Bethany" }, { id: "mag_5", text: "Unlock Maggy's Faith" }, { text: "Defeat Mom's Heart 11 times" }] },
    { id: "chal_39", name: "Isaac's Awakening", reward: "Spirit Sword", requirements: [{ id: "isaac_11", text: "Defeat Mother as Isaac" }] },
    { id: "chal_40", name: "Seeing Double", reward: "Broken Glasses", requirements: [{ id: "jacob_11", text: "Defeat Mother as Jacob & Esau" }] },
    { id: "chal_41", name: "Pica Run", reward: "Ice Cube", requirements: [{ text: "Defeat Mom's Heart 11 times" }, { text: "Unlock Marbles" }] },
    { id: "chal_42", name: "Hot Potato", reward: "The Chariot?", requirements: [{ id: "t_forgotten_6", text: "Unlock Tainted Forgotten" }] },
    { id: "chal_43", name: "Cantripped!", reward: "Justice?", requirements: [{ id: "t_cain_6", text: "Unlock Tainted Cain" }] },
    { id: "chal_44", name: "Red Redemption", reward: "The Hermit?", requirements: [{ id: "t_jacob_6", text: "Unlock Tainted Jacob" }] },
    { id: "chal_45", name: "DELETE THIS", reward: "Temperance?", requirements: [{ id: "t_eden_6", text: "Unlock Tainted Eden" }] }
];

const gameData = {
"Isaac": {
        name: "Isaac", image: "img/Characters/Normal/Isaac.png", description: "The default guy. Starts with the D6 to reroll items onto their items pools. The best item pool is the Secret Room pool. Is recommended to unlock Mom's Knife, Options? and D-Infinity. Isaac is unlocked by default. Lucas' note: D6 goes crazy until you get Kamikaze.",
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
        name: "Magdalene", image: "img/Characters/Normal/Magdalene.png", description: "The tanky girl. Starts with high health and Yum Heart for healing 1 red heart. Magdalene is unlocked by having 7 red heart container or more at once. Is recommended to unlock Eucharist, Purity and the Full Health Pill (starting pill). Lucas' note: A Speed Down pill disguised as a character.",
        stats: "HP: 4 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 0.85",
        effects: ["Red_Heart.png"],
        startingItems: [
            { name: "Yum Heart", img: "Yum_Heart.png", condition: null },
            { name: "Full Health Pill", img: "Pill.png", isEffectImg: true, tooltip: "Starts with a pill", condition: "chal_32", conditionText: "April's Fool Challenge" }
        ],
        unlocks: [
            { id: "mag_1", boss: "Boss Rush", item: "Maggy's Bow", diff: "Normal/Hard" },
            { id: "mag_2", boss: "Mom's Heart", item: "Cute Baby", diff: "Hard" },
            { id: "mag_3", boss: "Satan", item: "Guardian Angel", diff: "Normal/Hard" },
            { id: "mag_4", boss: "Isaac", item: "The Relic", diff: "Normal/Hard" },
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
        name: "Cain", image: "img/Characters/Normal/Cain.png", description: "The lucky 'pirate'. Starts with high speed and Lucky Foot, that makes you have only good pills, but shoots with one eye. Cain is unlocked by having 55 pennies or more at once. Is recommended to unlock Paper Clip (starting trinket), Guppy's Eye and Silver Dollar. Lucas' note: No more 'Tears Down'!",
        stats: "HP: 2 Red<br>DMG: 4.20<br>Tears: 2.73<br>Speed: 1.30",
        effects: ["Red_Heart.png"],
        startingItems: [
            { name: "1 Key", img: "Key.png", isEffectImg: true, tooltip: "Starts with a key", condition: null },
            { name: "Lucky Foot", img: "Lucky_Foot.png", condition: null },
            { name: "Paper Clip", img: "Paper_Clip.png", condition: "greed_68", conditionText: "Donate 68 cents to the Greed Donation Machine" }
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
        name: "Judas", image: "img/Characters/Normal/Judas.png", description: "The glass cannon. Starts with 1 red heart and The Book of Belial for temporary damage buff + increased devil/angel deal chance. Judas is unlocked by defeating Satan for the first time. Is recommended to unlock Judas' Shadow, Judas' Tongue and the Eye of Belial. Lucas' note: First floor spider: 'Allow me to introduce myself'.",
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
        name: "Blue Baby", image: "img/Characters/Normal/Blue_Baby.png", description: "The dead boy. Can only have Soul/Black hearts and starts with The Poop. Destroying poops spawn blue flies. Blue Baby is unlocked by defeating Mom's Heart 10 times. Is recommended to unlock Forget Me Now, The D6 and the Eternal D6. Lucas' note: Literally a piece of shit of a character.",
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
        name: "Eve", image: "img/Characters/Normal/Eve.png", description: "The edgy kid. Starts with weak stats, but triggers the Whore of Babylon effect at 1 Red Heart or less. Eve is unlocked by not picking up any hearts for 2 floors (don't need to be consecutive). Is recommended to unlock Eve's Mascara, the Athame and the Razor Blade (starting item). Lucas' note: The hurt yourself simulador.",
        stats: "HP: 2 Red<br>DMG: 2.62<br>Tears: 2.73<br>Speed: 1.23",
        effects: ["Red_Heart.png"],
        startingItems: [
            { name: "Whore of Babylon", img: "Whore_of_Babylon.png", condition: null },
            { name: "Dead Bird", img: "Dead_Bird.png", condition: null },
            { name: "Razor Blade", img: "Razor_Blade.png", condition: "greed_439", conditionText: "Donate 439 cents to the Greed Donation Machine" }
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
        name: "Samson", image: "img/Characters/Normal/Samson.png", description: "The guy with angry issues. Starts with Bloody Lust, gaining damage when taking damage. The damage buff resets when entering a new floor. Samson is unlocked by completing 2 floors without taking damage (don't need to be consecutive). Is recommended to unlock the Bloody Lust, bloody Crown and the Bloody Gust. Lucas' note: Skill issue? No, it's a damage up!",
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
        name: "Azazel", image: "img/Characters/Normal/Azazel.png", description: "The demon. Starts with flying and a short-range Brimstone. 'Range up' items increase the Brimstone's range. Azazel is unlocked by making 3 deals with the Devil (trading your health for items 3 times in a run). Is recommended to unlock Lilith, Satanic Bible and the Demon's Tail. Lucas' note: The 'I just want to unlock things quickly' character.",
        stats: "HP: 3 Black<br>DMG: 5.50<br>Tears: 0.76<br>Speed: 1.25",
        effects: ["Half_Red_Heart.png", "Half_Black_Heart.png"],
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
        description: "The guy who lived twice. Gets a all-stats up on death, but the buffs are reset on each new floor, except for a +0,5 damage up per death. Every time Lazarus dies, he loses one red heart container. Lazarus is unlocked by having 4 soul hearts at the same time. Is recommended to unlock the Lazarus' Rags, the Pandora's Box and the Store Credit (Bonus to the Anemic starting item). Lucas' note: The 'kill yourself' experience",
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
        name: "Eden", image: "img/Characters/Normal/Eden.png", description: "The glitchy girl. Starts with completely randomized stats and items per run. Her appearance is also randomized per run. Eden is unlocked by completing The Womb floor for the first time. Is recommended to unlock Eden's Blessing, Eden's Soul and Blank Card. Lucas' note: Hold 'R' simulator until you don't start with 1 fire rate and Bob's Brain.",
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
        name: "The Lost", image: "img/Characters/Normal/The_Lost.png", description: "The ghost. Has no health, starts with Holy Mantle, flying and spectral tears. Can take one item of the devil deals for free, but the rest will disappear. The Lost is unlocked by dying on a Sacrifice Room while holding the 'Missing Poster' trinket. Is recommended to unlock The Mind, Lost Soul and Holy Card (Bonus for Godhead). Lucas' note: The embodiment of skill solution, until a random spider ends your career.",
        stats: "HP: None<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        effects: ["Soul_Heart.png"],
        startingItems: [
            { name: "Eternal D6", img: "Eternal_D6.png", condition: null },
            { name: "Holy Mantle", img: "Holy_Mantle.png", condition: "greed_879", conditionText: "Donate 879 coins to the Greed Donation Machine" }
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
        name: "Lilith", image: "img/Characters/Normal/Lilith.png", description: "The mother of demons. Cannot shoot tears by herself, so she relies entirely on familiars and on the Box of Friends item, that creates a clone of every single familiar she has. Lilith is unlocked by defeating Ultra Greed as Azazel. Is recommended to unlock Rune Bag, C-Section and Duality (Bonus for Incubus and Succubus). Lucas' note: Blindfolded, but still manages to fill the screen with more garbage than the game engine can handle.",
        stats: "HP: 1 Red, 2 Black<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        effects: ["Half_Red_Heart.png", "Half_Black_Heart.png"],
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
        name: "Keeper", image: "img/Characters/Normal/Keeper.png", description: "The greedy corpse. Uses coins as health and has triple shots. Is highly recommended to let coins on the ground, so that you can collect them later, either for health or for shops. Keeper is unlocked by donating 1000 coins into the Greed Donation machine. Is recommended to unlock the Wooden Nickel (Starting item), the third coin container (Starting event) and Keeper's sack (Bonus for Deep Pockets and The Store Key starting Trinket). Lucas' note: -99 win streak simulator (Pre-Repentance PTSD).",
        stats: "HP: 2 Coin Hearts<br>DMG: 4.20<br>Tears: 1.20<br>Speed: 0.85",
        effects: ["Double_Penny.png"],
        startingItems: [
            { name: "1 Bomb", img: "Bomb.png", isEffectImg: true, tooltip: "Starts with a Bomb", condition: null },
            { name: "Wooden Nickel", img: "Wooden_Nickel.png", condition: "keeper_4", conditionText: "Defeat Isaac" },
            { name: "Store Key", img: "Store_Key.png", condition: "keeper_3", conditionText: "Defeat Satan" },
            { name: "3rd Coin Heart", img: "coin_container.png", lockedImg: "empty_coin_container.png", isEffectImg: true, condition: "keeper_9", conditionText: "Defeat Hush", tooltip: "Starts with 3 Coin Hearts" }
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
        name: "Apollyon", image: "img/Characters/Normal/Apollyon.png", description: "The destroyer. Starts with Void to suck up passive items for stats or copy active items. If you collect an item that you don't like, you can use The Void on the item during the pick-up animation. Apollyon is unlocked by defeating Mega Satan for ther first time. Is recommended to unlock The Smalter, Blank Rune and any of the Locust trinkets. Lucas' note: Sucking up a decent item just to get +0.2 shot speed and +0.2 luck.",
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
        description: "Two characters in one: Melee skeleton and flying soul. The Forgotten is unlocked via a complicated proccess: The Lamb must have been defeated previously before The Forgotten can be unlocked, then you have to defeat the first floor boss under 1 minute. After that, go into the starting room and bomb the middle of the room. This will drop the broken shovel item, that will make Mom's foot fall on top of you for the entire run. Your objective is, with the broken shovel, defeat Boss Rush, collect the second part of the shovel, creating the Mom's Shovel item and head into the Dark Room, on a specific room and use the Shovel on the pile of dirt that is on the room. Is recommended to unlock Divorce Papers, The Book of the Dead and Dad's Ring. Lucas' note: Bonk simulador.",
        stats: "HP: 2 Bone (Soul has 1 Soul)<br>DMG: 5.25<br>Tears: 1.36<br>Speed: 1.00",
        effectGroups: [
            { label: "The Forgotten", effects: ["Bone_Heart.png"] },
            { label: "The Soul", effects: ["Soul_Heart.png", "Black_Heart.png"] }
        ],
        startingItems: [],
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
        name: "Bethany", image: "img/Characters/Normal/Bethany.png", description: "The faithful. Cannot use Soul Hearts for health, but uses for soul charges. Use your active as often as possible for the wisps protection. Bethany is unlocked by defeating Mom's Heart/It Lives! as Lazarus on hard mode, while not dying once. Is recommended to unlock the Book of Virtudes, Blessed Penny and Revelation. Lucas' note: Protect the wisps with your life, only for them to instantly die to a red poop.",
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
        name: "Jacob & Esau", image: "img/Characters/Normal/Jacob_&_Esau.png", description: "The twins. Control two characters at the exact same time with separate health and items. The best stragety is to not let them get separated at all. Jacob & Esau are unlocked by defeating Mother for the first time. Is recommended to unlock Rock Bottom, Birthright and The Stairway. Lucas' note: The Jacob and Hitbox experience.",
        stats: "Jacob stats:<br>HP: 3 Red<br>DMG: 2.75<br>Tears: 2.73<br>Speed: 1.00<br><br>Esau stats:<br>HP: 1 Red, 1 Soul<br>DMG: 3.75<br>Tears: 2.73<br>Speed: 1.00",
        effectGroups: [
            { label: "Jacob", effects: ["Red_Heart.png"] },
            { label: "Esau", effects: ["Red_Heart.png", "Half_Soul_Heart.png"] }
        ],
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
        name: "Tainted Isaac", image: "img/Characters/Tainted/Tainted_Isaac.png", description: "The Hoarder. Items cycles through 2 item choices but can only hold 8 passives at a time. 'Health up' items don't lost their effect when dropped of, so collet the item and get rid of it when possible. Tainted Isaac is unlocked by using either Red Key, cracked key or soul of Cain to open the hidden closet in the Home floor as Isaac. All Tainted Characters are unlocked with the same method, the only diferrent is the character you are actually playing as. Is recommended to unlock Soul of Isaac, the Spindown Dice and Glitched Crown (Bonus for 'The Stars?'). Lucas' note: Minecraft full inventory gameplay",
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
        name: "Tainted Magdalene", image: "img/Characters/Tainted/Tainted_Magdalene.png", description: "The Dauntless. Bleeds out constantly buthugging enemies to death drops temporary half red hearts. Items that heals you have double effect. Tainted Magdalene is unlocked via the same method as Tainted Isaac, but you need to play as Magdalene. Is recommended to unlock Holy Crown, Belly Jelly and 'The Lovers?' (Bonus for Mother's kiss). Lucas' note: *DOOM music kicks in* TIME TO HUG 'EM ALL!",
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
        name: "Tainted Cain", image: "img/Characters/Tainted/Tainted_Cain.png", description: "The Hoarder. Cannot pick up items directly, and must craft them using pickups in a bag. The best strategy is to let pick-ups on the ground, complete the whole floor and then start crafting, being the first item you want to craft being Birthright. Tainted Cain is unlocked via the same method as Tainted Isaac, but you need to play as Cain. Is recommended to unlock Soul of Cain, the Bag of Crafting and Golden Pill (Bonus for 'Wheel of Fortune?'). Lucas' note: First we Cry, then we Craft.",
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
        name: "Tainted Judas", image: "img/Characters/Tainted/Tainted_Judas.png", description: "The Deceiver. Can only have Soul/Black hearts and starts with Dark Arts to slice through enemies. Tainted Judas is unlocked via the same method as Tainted Isaac, but you need to play as Judas. Is recommended to unlock Your Soul, Number Magnet and Black Sack (Bonus for 'The Magician?' and Soul of Judas). Lucas' note: Omae wa, MOU shindeiru.",
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
        name: "Tainted Blue Baby", image: "img/Characters/Tainted/Tainted_Blue_Baby.png", description: "The Enigma. Cannot use bombs, but throws various types of poop instead. Tainted Blue Baby spawns Poop pickups passively for you to have more poop options. Tainted Blue Baby is unlocked via the same method as Tainted Isaac, but you need to play as Blue Baby. Is recommended to unlock Charming Poop, The Swarm and 'The Emperor?' (Bonus for Dingle Berry). Lucas' note: Taco Bell aftermath.",
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
        name: "Tainted Eve", image: "img/Characters/Tainted/Tainted_Eve.png", description: "The Curdled. Drains her own health to spawn a army of blood clots. You can refresh the clots health by using Sumptorium. Tainted Eve is unlocked via the same method as Tainted Isaac, but you need to play as Eve. Is recommended to unlock Strange Key, Horse Pill and Sumptorium (Bonus for 'The Empress?' and Soul of Eve). Lucas' note: Pikmin, but make it bloody.",
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
        name: "Tainted Samson", image: "img/Characters/Tainted/Tainted_Samson.png", description: "The Savage. Goes into a doom-slayer berserk rage after dealing/taking damage. One of the best strategies is to build your rage to use the berserker form against the boss. Tainted Samson is unlocked via the same method as Tainted Isaac, but you need to play as Samson. Is recommended to unlock Soul of Samson, Crain Game and 'Strength?'. Lucas' note: *Ultrakill music kicks in* RIP AND TEAR, BABY!",
        stats: "HP: 3 Red<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.10",
        effects: ["Red_Heart.png"],
        startingItems: [
            { name: "Berserk!", img: "Berserk.png", condition: null }
        ],
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
        name: "Tainted Azazel", image: "img/Characters/Tainted/Tainted_Azazel.png", description: "The Benighted. Has a skinny Brimstone and sneezes to push and curse enemies. Tainted Azazel is unlocked via the same method as Tainted Isaac, but you need to play as Azazel. Is recommended to unlock Soul of Azazel, Azazel's Rage and Wicked Crown (Bonus for 'The Devil?'). Lucas' note: Bless him.",
        stats: "HP: 3 Black<br>DMG: 5.50<br>Tears: 1.20<br>Speed: 1.25",
        effects: ["Half_Red_Heart.png", "Half_Black_Heart.png"],
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
        image2: "img/Characters/Tainted/Dead_Tainted_Lazarus.png", 
        description: "The Flipped. Swaps between an alive and dead form every time a room is cleared, splitting items between them. The best strategy is to have Flip fully charged when entering treasure rooms, boss rooms and shops. Tainted Lazarus is unlocked via the same method as Tainted Isaac, but you need to play as Lazarus. Is recommended to unlock  Soul of Lazarus, Flip and 'Judgment?' (Bonus for Salvation and Wooden Chest). Lucas' note: Two half-baked runs glued together by a mid item.",
        stats: "HP: 3 Red (Alive) / 3 Soul (Dead)<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        effectGroups: [
            { label: "Tainted Lazarus", effects: ["Red_Heart.png"] },
            { label: "Dead Tainted Lazarus", effects: ["Half_Red_Heart.png", "Half_Soul_Heart.png"] }
        ],
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
        name: "Tainted Eden", image: "img/Characters/Tainted/Tainted_Eden.png", description: "The Capricious. Rerolls stats, items, and pickups upon taking damage. Get items that avoid hits, like Holy Mantle. Tainted Eden is unlocked via the same method as Tainted Isaac, but you need to play as Eden. Is recommended to unlock Soul of Eden, Wild Card and Modeling Clay (Bonus for 'The World?' and 'Nuh Uh!'). Lucas' note: Oh, you have a broken build? *Gets hit by a fly* Enjoy your The Wiz + Cursed Eye run.",
        stats: "HP: Random<br>DMG: Random<br>Tears: Random<br>Speed: Random",
        effects: ["Red_Heart.png"],
        startingItems: [
            { name: "Random Active", img: "Random_item.png", condition: null, tooltip: "Starts with a random Active item" },
            { name: "Random Passive", img: "Random_item.png", condition: null, tooltip: "Starts with a random Passive item" }
        ],
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
        name: "Tainted Lost", image: "img/Characters/Tainted/Tainted_Lost.png", description: "The Baleful. No health, no mantle, better items and no defensive items. You should use obstacles to your advantage, since most enemies don't have flight. Tainted Lost is unlocked via the same method as Tainted Isaac, but you need to play as The Lost. Is recommended to unlock Soul of The Lost, Sacred Orb and Crystal Key (Bonus for 'The Fool?'). Lucas' note: Dying to a spiked rock because you couldn't see it under the 50 items you picked up.",
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
        name: "Tainted Lilith", image: "img/Characters/Tainted/Tainted_Lilith.png", description: "The Harlot. Whips her unborn fetus out to deal massive melee damage. Tainted Lilith is unlocked via the same method as Tainted Isaac, but you need to play as Lilith. Is recommended to unlock Soul of Lilith, Twisted Pair and Fool's Gold. Lucas' note: Yeetus the fetus.",
        stats: "HP: 1 Red, 2 Black<br>DMG: 3.50<br>Tears: 2.73<br>Speed: 1.00",
        effects: ["Half_Red_Heart.png", "Half_Black_Heart.png"],
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
        name: "Tainted Keeper", image: "img/Characters/Tainted/Tainted_Keeper.png", description: "The Miser. Enemies drop temporary coins on death, but all items costs money instead of finding them free. Try to be greedy and collect as much coiins as possible, even if you take damage, and atch out for nickels and dimes! Tainted Keeper is unlocked via the same method as Tainted Isaac, but you need to play as Keeper. Is recommended to unlock Soul of The Keeper, Keeper's Kin and Golden Penny (Bonus for 'The Hermit?'). Lucas' note: Capitalism at its finest.",
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
        name: "Tainted Apollyon", image: "img/Characters/Tainted/Tainted_Apollyon.png", description: "The Empty. Sucks up items to create an army of locusts with Abyss. You can use the same strategy as Appolyon with Void, but with Abyss. Tainted Appolyon is unlocked via the same method as Tainted Isaac, but you need to play as Apollyon. Is recommended to unlock Soul of Appolyon, Echo Chamber and 'The Tower?' (Bonus for Rotten Beggar). Lucas' note: When in doubt, make a fly.",
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
        description: "The Fettered. The soul carries the skeleton and literally throws it at enemies to deal damage. The Tainted Soul alone can't deal any damage by itself. Is recommended to unlock Soul of The Forgotten, Golden Battery and Polished Bones (Bonus for 'Death?' and Isaac's Tomb). Lucas' Note: Ludovico special + American Football simulator.",
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
        name: "Tainted Bethany", image: "img/Characters/Tainted/Tainted_Bethany.png", description: "The Zealot. Uses red charges to spawn random item wisps with Lemegeton. The Lemegeton has a 25% chance to give you a item wisp based on the item pool of the room you're currently in. Is recommended to unlock Soul of Bethany, Lemegeton and Confessional (Bonus for 'The Hierophant?' and Vengeful Spirit). Lucas' note: When you spawn a The Wiz wisp, you immediately regrets everything.",
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
        description: "The Deserter. Chased endlessly by Dark Esau. Touching him turns you into a mantle-less ghost. At the end of the floor, turn yourself into a ghost to enter the devil room, because Ghost Tainted Jacob have the same propieties of The Lost when on Devil Deals. Is recommended to unlock Soul of Jacob & Esau, 'The Sun?' & 'The Moon?' and Golden Trinkets. (Bonus for Esau Jr and Found Soul). Lucas' note: You thought Jacob & Esau was bad? Now one of them is actively trying to kill you + Tainted Lost experience.",
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
const screens = document.querySelectorAll('.screen');
const navButtons = document.querySelectorAll('[data-view]');
const greedCoinTotal = document.getElementById('greed-coin-total');
const greedMachineCounter = document.getElementById('greed-machine-counter');
const greedUnlocks = document.getElementById('greed-unlocks');
const challengeGrid = document.getElementById('challenge-grid');
const challengeProgress = document.getElementById('challenge-progress');
const dailyPlayed = document.getElementById('daily-played');
const dailyStreak = document.getElementById('daily-streak');
const dailyAchievementsGrid = document.getElementById('daily-achievements');
const dailyVictoryBtn = document.getElementById('daily-victory-btn');
const dailyDefeatBtn = document.getElementById('daily-defeat-btn');

let isTaintedMode = false;
let userProgress = JSON.parse(localStorage.getItem('isaacUnlocksProgress')) || {};
let greedCoins = Number(localStorage.getItem('isaacGreedCoins')) || 0;
let dailyProgress = JSON.parse(localStorage.getItem('isaacDailyProgress')) || {
    played: 0,
    wins: 0,
    streak: 0
};

const globalSpecialUnlocks = [
    { id: "global_mega_blast", item: "Mega Blast", boss: "Mega Satan", diff: "Hard" },
    { id: "global_mega_mush", item: "Mega Mush", boss: "All Hard Mode Marks", diff: "Hard" }
];

const characterStats = {
    "Isaac": { hp: "3 Red", damage: "3.50", tears: "2.73", range: "6.50", speed: "1.00", shotSpeed: "1.00", luck: "0.00" },
    "Magdalene": { hp: "4 Red", damage: "3.50", tears: "2.73", range: "6.50", speed: "0.85", shotSpeed: "1.00", luck: "0.00" },
    "Cain": { hp: "2 Red", damage: "4.20", tears: "2.73", range: "4.50", speed: "1.30", shotSpeed: "1.00", luck: "1.00" },
    "Judas": { hp: "1 Red", damage: "4.72", tears: "2.73", range: "6.50", speed: "1.00", shotSpeed: "1.00", luck: "0.00" },
    "Blue Baby": { hp: "3 Soul", damage: "3.50", tears: "2.73", range: "6.50", speed: "1.05", shotSpeed: "1.00", luck: "0.00" },
    "Eve": { hp: "2 Red", damage: "2.62", tears: "2.73", range: "6.50", speed: "1.23", shotSpeed: "1.00", luck: "0.00" },
    "Samson": { hp: "3 Red", damage: "3.50", tears: "2.45", range: "5.00", speed: "1.10", shotSpeed: "1.00", luck: "0.00" },
    "Azazel": { hp: "3 Black", damage: "5.50", tears: "0.76", range: "4.50", speed: "1.25", shotSpeed: "1.00", luck: "0.00" },
    "Lazarus": { hp: "3 Red", damage: "3.50", tears: "2.73", range: "4.50", speed: "1.00", shotSpeed: "1.00", luck: "-1.00" },
    "Eden": { hp: "Random", damage: "Random", tears: "Random", range: "Random", speed: "Random", shotSpeed: "Random", luck: "Random" },
    "The Lost": { hp: "None", damage: "3.50", tears: "2.73", range: "6.50", speed: "1.00", shotSpeed: "1.00", luck: "0.00" },
    "Lilith": { hp: "1 Red, 2 Black", damage: "3.50", tears: "2.73", range: "6.50", speed: "1.00", shotSpeed: "1.00", luck: "0.00" },
    "Keeper": { hp: "2 Coin Hearts", damage: "4.20", tears: "1.20", range: "4.50", speed: "0.85", shotSpeed: "1.00", luck: "-2.00" },
    "Apollyon": { hp: "2 Red", damage: "3.50", tears: "2.73", range: "6.50", speed: "1.00", shotSpeed: "1.00", luck: "0.00" },
    "The Forgotten": [
        { label: "The Forgotten", hp: "2 Bone, 1 Soul", damage: "5.25", tears: "1.36", range: "6.50", speed: "1.00", shotSpeed: "1.00", luck: "0.00" },
        { label: "The Soul", hp: "Shared Soul Heart", damage: "3.50", tears: "2.73", range: "6.50", speed: "1.30", shotSpeed: "1.00", luck: "0.00" }
    ],
    "Bethany": { hp: "3 Red", damage: "3.50", tears: "2.73", range: "6.50", speed: "1.00", shotSpeed: "1.00", luck: "0.00" },
    "Jacob & Esau": [
        { label: "Jacob", hp: "3 Red", damage: "2.75", tears: "2.73", range: "5.00", speed: "1.00", shotSpeed: "1.00", luck: "0.00" },
        { label: "Esau", hp: "1 Red, 1 Soul", damage: "3.75", tears: "2.73", range: "8.00", speed: "1.00", shotSpeed: "1.00", luck: "0.00" }
    ],
    "Tainted Isaac": { hp: "3 Red", damage: "3.50", tears: "2.73", range: "6.50", speed: "1.00", shotSpeed: "1.00", luck: "0.00" },
    "Tainted Magdalene": { hp: "4 Red (Empty)", damage: "2.62", tears: "2.73", range: "6.50", speed: "1.20", shotSpeed: "1.00", luck: "0.00" },
    "Tainted Cain": { hp: "2 Red", damage: "3.50", tears: "2.73", range: "4.50", speed: "1.30", shotSpeed: "1.00", luck: "1.00" },
    "Tainted Judas": { hp: "2 Black", damage: "3.50", tears: "2.73", range: "6.50", speed: "1.00", shotSpeed: "1.00", luck: "0.00" },
    "Tainted Blue Baby": { hp: "3 Soul", damage: "3.50", tears: "2.73", range: "6.50", speed: "1.05", shotSpeed: "1.00", luck: "0.00" },
    "Tainted Eve": { hp: "2 Red", damage: "3.50", tears: "1.20", range: "6.50", speed: "1.00", shotSpeed: "1.00", luck: "0.00" },
    "Tainted Samson": { hp: "3 Red", damage: "3.50", tears: "2.73", range: "6.50", speed: "1.10", shotSpeed: "1.00", luck: "0.00" },
    "Tainted Azazel": { hp: "3 Black", damage: "5.50", tears: "1.20", range: "4.50", speed: "1.25", shotSpeed: "1.00", luck: "0.00" },
    "Tainted Lazarus": [
        { label: "Tainted Lazarus", hp: "3 Red", damage: "3.50", tears: "2.73", range: "6.50", speed: "1.00", shotSpeed: "1.00", luck: "0.00" },
        { label: "Dead Tainted Lazarus", hp: "3 Soul", damage: "3.50", tears: "2.73", range: "6.50", speed: "1.00", shotSpeed: "1.00", luck: "0.00" }
    ],
    "Tainted Eden": { hp: "Random", damage: "Random", tears: "Random", range: "Random", speed: "Random", shotSpeed: "Random", luck: "Random" },
    "Tainted Lost": { hp: "None", damage: "3.50 (x1.30 multiplier)", tears: "2.73", range: "6.50", speed: "1.00", shotSpeed: "1.00", luck: "0.00" },
    "Tainted Lilith": { hp: "1 Red, 2 Black", damage: "3.50", tears: "2.73", range: "6.50", speed: "1.00", shotSpeed: "1.00", luck: "0.00" },
    "Tainted Keeper": { hp: "2 Coin Hearts", damage: "4.20", tears: "1.20", range: "4.50", speed: "0.85", shotSpeed: "1.00", luck: "-2.00" },
    "Tainted Apollyon": { hp: "2 Red", damage: "3.50", tears: "2.73", range: "6.50", speed: "1.00", shotSpeed: "1.00", luck: "0.00" },
    "Tainted Forgotten": [
        { label: "Tainted Forgotten", hp: "None", damage: "3.50 (x1.50 bone)", tears: "1.20", range: "6.50", speed: "1.00", shotSpeed: "1.00", luck: "0.00" },
        { label: "Tainted Soul", hp: "3 Soul", damage: "3.50", tears: "2.73", range: "6.50", speed: "1.30", shotSpeed: "1.00", luck: "0.00" }
    ],
    "Tainted Bethany": { hp: "3 Red", damage: "3.50 (x0.75 multiplier)", tears: "2.73", range: "6.50", speed: "1.00", shotSpeed: "1.00", luck: "0.00" },
    "Tainted Jacob": { hp: "3 Red", damage: "3.50", tears: "2.73", range: "6.50", speed: "1.00", shotSpeed: "1.00", luck: "0.00" }
};

const unlockImageNameOverrides = {
    "A Bag of Bombs": "Bomb_Bag.png",
    "A Pound of Flesh": "A_Pound_of_Flesh.png",
    "A Sack of Pennies": "Sack_of_Pennies.png",
    "A Cross": "Maggy_Bow.png",
    "Abel": "Abel.png",
    "Akeldama": "Akeldama.png",
    "Anemic": "Anemic.png",
    "Belial baby": "Belial_Baby.png",
    "Betrayal": "Betrayal.png",
    "Brown baby": "Brown_Baby.png",
    "Buddy Baby": "Buddy_Baby.png",
    "Cain' Eye": "Cain_Eye.png",
    "Cain's Other Eye": "Cain_Other_Eye.png",
    "Candy Heart": "Candy_Heart.png",
    "Celtic Cross": "Celtic_Cross.png",
    "Censer": "Censer.png",
    "Child's Heart": "Child_Heart.png",
    "Colorful Baby": "Colorful_Baby.png",
    "3rd Coin Heart": "coin_container.png",
    "Cry Baby": "Cry_Baby.png",
    "Curved Horn": "Curved_Horn.png",
    "Cute Baby": "Cute_Baby.png",
    "D1": "D1.png",
    "D12": "D12.png",
    "D20": "D20.png",
    "D Infinity": "D_Infinity.png",
    "D6": "D6.png",
    "Eucharist": "Eucharist.png",
    "Evil Eye": "Evil_Eye.png",
    "Eye of Belial": "Eye_of_Belial.png",
    "Fart Baby": "Fart_Baby.png",
    "Full Health Pill": "Pill.png",
    "Glass baby": "Glass_Baby.png",
    "Glyph of Balance": "Glyph_of_Balance.png",
    "Green baby": "Green_Baby.png",
    "Guardian Angel": "Guardian_Angel.png",
    "Guillotine": "Guillotine.png",
    "Guppy's Eye": "Guppy_Eye.png",
    "Lost starts with Holy Mantle": "Holy_Mantle.png",
    "Isaac's Head": "Isaac_Head.png",
    "Isaac's Tears": "Isaac_Tears.png",
    "Judas' Shadow": "Judas_Shadow.png",
    "Judas' Tongue": "Judas_Tongue.png",
    "Little Chest": "Lil_Chest.png",
    "Lost Baby": "Lost_Baby.png",
    "Maggy's Bow": "Maggy_Bow.png",
    "Maggy's Faith": "Maggy_Faith.png",
    "Meat Cleaver": "Meat_Cleaver.png",
    "Mega Blast": "Mega Blast.png",
    "Mega Mush": "Mega Mush.png",
    "Missing poster": "Missing_Poster.png",
    "Mom's Knife": "Mom_Knife.png",
    "My Shadow": "My_Shadow.png",
    "Options?": "Options_question.png",
    "Paper Clip": "Paper_Clip.png",
    "Picky baby": "Picky_Baby.png",
    "Purity": "Purity.png",
    "Razor Blade": "Razor_Blade.png",
    "Red Baby": "Red_Baby.png",
    "Redemption": "Redemption.png",
    "Sack of Sacks": "Sack_of_Sacks.png",
    "Shade": "Shade.png",
    "Shadow baby": "Shadow_Baby.png",
    "Silver Dollar": "Silver_Dollar.png",
    "Store Key": "Store_Key.png",
    "The Razor": "Razor_Blade.png",
    "The Left Hand": "The_Left_Hand.png",
    "The Relic": "The_Relic.png",
    "Wooden Nickel": "Wooden_Nickel.png",
    "Yuck Heart": "Yuck_Heart.png"
};

const itemTooltipOverrides = {
    "D6": " A active item that rerolls items in the current room pool.",
    "D20": "A active item that rerolls all pickups in the room.",
    "D Infinity": "A active item that cycles between all dices in the game (except Spindown dice) by pressing the drop button.",
    "Mom's Knife": "A passive item that replaces your tears with a charged knife attack that deals damage based on the knife charge.",
    "Holy Mantle": "A passive item that blocks the first hit in the room and can be replaced if you leave the room.",
    "Lost starts with Holy Mantle": "Gives the Holy Mantle for The Lost at the start of every run.",
    "Paper Clip": "A trinket that allows golden chests to be opened without keys.",
    "Razor Blade": "A active item that trades health for temporary damage. If used, it gives you a damage boost for the current room and takes a full red heart of damage. Afer that, it will cost half a red heart.",
    "Mega Blast": "A active item that creates a huge Brimstone laser that lasts 15 seconds and it stays between rooms.",
    "Mega Mush": "A active item that turns Isaac temporary enormous, invincible, and gives him a damage boost.",
    "Wooden Nickel": "A active item that has a 50% chance to spawn a random coin per use.",
    "Store Key": "A trinket that allows shops to be opened without keys.",
    "The Relic": "A passive item that grants a familiar that drops Soul Hearts every     7-8 rooms.",
    "Eucharist": "A passive item that makes angel room deals be at 100% for the rest of the run. The Angel deal also stays open even if you get out of it's room.",
    "Glyph of Balance": "A passive item that improves pickup drops based on the pickups you have the least of.",
    "Curved Horn": "A trinket that grants a +1 flat damage up while held.",
    "The Left Hand": "A trinket that turns all kind of chests into red chests.",
    "Eye of Belial": "A passive item that allows tears to pierce through enemies, then gain damage and homing after passing through them.",
    "Anemic": "A passive item that makes taking damage leave a creep trail.",
    "Child's Heart": "A trinket that increases the chance of red hearts being dropped from room clear rewards and chests."
};

const coinSoundState = {
    timers: [],
    sounds: []
};

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

function stopCoinSounds() {
    coinSoundState.timers.forEach(timer => clearTimeout(timer));
    coinSoundState.timers = [];
    coinSoundState.sounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
    });
    coinSoundState.sounds = [];
}

function playCoinSoundRepeated(id, count) {
    stopCoinSounds();
    const source = document.getElementById(id);
    if (!source || count <= 0) return;

    const maxSounds = Math.min(count, 100);
    for (let i = 0; i < maxSounds; i++) {
        const timer = setTimeout(() => {
            const sound = source.cloneNode(true);
            coinSoundState.sounds.push(sound);
            sound.play().catch(() => {});
            sound.addEventListener('ended', () => {
                coinSoundState.sounds = coinSoundState.sounds.filter(activeSound => activeSound !== sound);
            }, { once: true });
        }, i * 60);
        coinSoundState.timers.push(timer);
    }
}

function sanitizeKey(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

function getGlobalSpecialCharacters() {
    return Object.values(gameData).filter(charData => !charData.name.startsWith("Tainted"));
}

function getGlobalSpecialCharacterId(baseId, charName) {
    return `${baseId}_${sanitizeKey(charName)}`;
}

function isGlobalSpecialUnlock(unlock) {
    return globalSpecialUnlocks.some(special => special.id === unlock.id);
}

function getGlobalSpecialSourceUnlock(baseId, charData) {
    if (baseId === "global_mega_blast") {
        return charData.unlocks.find(unlock => !isGlobalSpecialUnlock(unlock) && unlock.boss === "Mega Satan");
    }

    if (baseId === "global_mega_mush") {
        return charData.unlocks.find(unlock => !isGlobalSpecialUnlock(unlock) && unlock.boss === "All Hard Mode Marks");
    }

    return null;
}

function getCharacterMarkUnlocks(charData) {
    return charData.unlocks.filter(unlock => !isGlobalSpecialUnlock(unlock) && unlock.boss !== "All Hard Mode Marks");
}

function areCharacterMarksComplete(charData) {
    const markUnlocks = getCharacterMarkUnlocks(charData);
    return markUnlocks.length > 0 && markUnlocks.every(unlock => userProgress[unlock.id]);
}

function syncGlobalSpecialCharacterProgress(baseId, charData) {
    const sourceUnlock = getGlobalSpecialSourceUnlock(baseId, charData);
    if (!sourceUnlock) return false;

    if (baseId === "global_mega_mush" && areCharacterMarksComplete(charData)) {
        userProgress[sourceUnlock.id] = true;
    }

    return Boolean(userProgress[sourceUnlock.id]);
}

function getGlobalSpecialCount(baseId) {
    const characters = getGlobalSpecialCharacters();
    return characters.filter(charData => userProgress[getGlobalSpecialCharacterId(baseId, charData.name)]).length;
}

function syncGlobalSpecialUnlocks() {
    let changed = false;
    const goal = getGlobalSpecialCharacters().length;
    getGlobalSpecialCharacters().forEach(charData => {
        globalSpecialUnlocks.forEach(unlock => {
            const subId = getGlobalSpecialCharacterId(unlock.id, charData.name);
            const sourceUnlock = getGlobalSpecialSourceUnlock(unlock.id, charData);
            const wasSourceComplete = sourceUnlock ? Boolean(userProgress[sourceUnlock.id]) : false;
            const shouldComplete = syncGlobalSpecialCharacterProgress(unlock.id, charData);
            if (sourceUnlock && wasSourceComplete !== Boolean(userProgress[sourceUnlock.id])) {
                changed = true;
            }
            if (userProgress[subId] !== shouldComplete) {
                userProgress[subId] = shouldComplete;
                changed = true;
            }
        });
    });

    globalSpecialUnlocks.forEach(unlock => {
        const count = getGlobalSpecialCount(unlock.id);
        const completed = count >= goal;
        if (userProgress[unlock.id] !== completed) {
            userProgress[unlock.id] = completed;
            changed = true;
        }
    });

    if (changed) saveProgress();
}

function toggleGlobalSpecialCharacterProgress(baseId, charData) {
    const sourceUnlock = getGlobalSpecialSourceUnlock(baseId, charData);
    if (!sourceUnlock) return false;

    const completed = toggleProgress(sourceUnlock.id);
    syncGlobalSpecialUnlocks();
    return completed;
}

function makeItemFilename(name) {
    return `${name.replace(/'s\b/g, '').replace(/\?/g, 'question').replace(/&/g, 'and').replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_|_$/g, '')}.png`;
}

function getUnlockImageCandidates(charName, itemName) {
    if (charName === "Azazel" && itemName === "Lilith") {
        const imageName = userProgress["azazel_7"] ? "Lilith_Thumbs_Up.png" : "Lilith.png";
        return [
            `img/Characters/Character_Unlocks/Azazel/${imageName}`,
            `img/Characters/Character_Unlocks/Azazel/Lilith.png`,
            `img/Characters/Character_Unlocks/Azazel/Lilith_Thumbs_Up.png`,
            "img/Characters/Character_Unlocks/no_set.png"
        ];
    }

    const folder = charName.replace(/&/g, 'and').replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_|_$/g, '');
    const override = unlockImageNameOverrides[itemName];
    const generated = makeItemFilename(itemName);
    const possessiveGenerated = `${itemName.replace(/\?/g, 'question').replace(/&/g, 'and').replace(/'/g, '').replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_|_$/g, '')}.png`;
    const candidates = [];

    if (override) candidates.push(`img/Characters/Character_Unlocks/${folder}/${override}`);
    candidates.push(`img/Characters/Character_Unlocks/${folder}/${generated}`);
    candidates.push(`img/Characters/Character_Unlocks/${folder}/${possessiveGenerated}`);
    if (override) candidates.push(`img/Characters/Character_Unlocks/${override}`);
    candidates.push(`img/Characters/Character_Unlocks/${generated}`);
    candidates.push(`img/Characters/Character_Unlocks/${possessiveGenerated}`);
    candidates.push(`img/Characters/Character_Items/${override || generated}`);
    candidates.push(`img/Characters/Character_Items/${generated}`);
    candidates.push("img/Characters/Character_Unlocks/no_set.png");

    return [...new Set(candidates)];
}

function setImageWithFallback(img, sources) {
    let currentIdx = 0;
    img.src = sources[currentIdx];
    img.onerror = function() {
        currentIdx++;
        if (currentIdx < sources.length) {
            this.src = sources[currentIdx];
        }
    };
}

function isBabyUnlock(itemName) {
    return /\bbaby\b/i.test(itemName);
}

function getItemTooltip(itemName) {
    if (itemTooltipOverrides[itemName]) return itemTooltipOverrides[itemName];
    if (isBabyUnlock(itemName)) return `${itemName} is a co-op baby skin. It does not fix your run, but it does attend it with confidence.`;
    return `${itemName}: unlocks this item or trinket for future runs. Exact chaos may vary, as Isaac intended.`;
}

function getStatsEntries(charData) {
    const detailedStats = characterStats[charData.name];
    if (detailedStats) return Array.isArray(detailedStats) ? detailedStats : [{ label: charData.name, ...detailedStats }];

    const fallback = {};
    (charData.stats || '').split('<br>').forEach(row => {
        const [label, value] = row.split(':');
        if (!label || !value) return;
        const key = label.trim().toLowerCase();
        fallback[key === 'dmg' ? 'damage' : key] = value.trim();
    });

    return [{
        label: charData.name,
        hp: fallback.hp || "Unknown",
        damage: fallback.damage || "3.50",
        tears: fallback.tears || "2.73",
        range: fallback.range || "6.50",
        speed: fallback.speed || "1.00",
        shotSpeed: fallback.shotSpeed || fallback['shot speed'] || "1.00",
        luck: fallback.luck || "0.00"
    }];
}

function renderStats(charData) {
    const statLabels = [
        ["hp", "HP"],
        ["damage", "Damage"],
        ["tears", "Tears"],
        ["range", "Range"],
        ["speed", "Speed"],
        ["shotSpeed", "Shot Speed"],
        ["luck", "Luck"]
    ];

    return getStatsEntries(charData).map(entry => `
        <div class="stat-block">
            <div class="stat-owner">${entry.label}</div>
            <div class="stat-grid">
                ${statLabels.map(([key, label]) => `
                    <div class="stat-row">
                        <span>${label}</span>
                        <strong>${entry[key]}</strong>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

document.addEventListener('click', () => {
    if (audioPlayer && audioPlayer.paused) {
        audioPlayer.play().catch(() => {});
    }
}, { once: true });

function saveProgress() {
    localStorage.setItem('isaacUnlocksProgress', JSON.stringify(userProgress));
}

function saveGreedProgress() {
    localStorage.setItem('isaacGreedCoins', String(greedCoins));
}

function saveDailyProgress() {
    localStorage.setItem('isaacDailyProgress', JSON.stringify(dailyProgress));
}

function showView(viewId) {
    const wasGreedScreen = document.getElementById('greed-screen')?.classList.contains('active');
    if (wasGreedScreen && viewId !== 'greed-screen') stopCoinSounds();

    screens.forEach(screen => {
        screen.classList.toggle('active', screen.id === viewId);
    });

    if (viewId === 'greed-screen') renderGreedMachine();
    if (viewId === 'challenges-screen') renderChallenges();
    if (viewId === 'daily-screen') renderDailyRuns();
}

function syncGreedUnlocks() {
    let changed = false;
    greedDonationUnlocks.forEach(unlock => {
        const shouldUnlock = greedCoins >= unlock.coins;
        if (shouldUnlock && !userProgress[unlock.id]) {
            userProgress[unlock.id] = true;
            changed = true;
        }
    });

    if (changed) saveProgress();
}

function getRequirementKey(requirement) {
    if (requirement.id) return requirement.id;
    return `manual_req_${requirement.text.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`;
}

function isRequirementMet(requirement) {
    return Boolean(userProgress[getRequirementKey(requirement)]);
}

function getMissingRequirements(challenge) {
    return (challenge.requirements || []).filter(requirement => !isRequirementMet(requirement));
}

const linkedProgressIds = {
    "chal_31": ["chal_31"],
    "chal_32": ["chal_32"],
    "chal_34": ["chal_34"],
    "greed_68": ["greed_68"],
    "greed_439": ["greed_439"],
    "greed_879": ["greed_879"],
    "greed_1000": ["greed_1000"]
};

function setProgress(id, value) {
    const linkedIds = linkedProgressIds[id] || [id];
    linkedIds.forEach(linkedId => {
        userProgress[linkedId] = value;
    });
}

function toggleProgress(id) {
    const nextValue = !userProgress[id];
    setProgress(id, nextValue);
    return nextValue;
}

function updateProgressDisplay() {
    const char = select.value;
    const charData = gameData[char];
    if (!charData) return;
    
    syncGlobalSpecialUnlocks();
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

const characterModePairs = {
    "Isaac": "Tainted Isaac",
    "Magdalene": "Tainted Magdalene",
    "Cain": "Tainted Cain",
    "Judas": "Tainted Judas",
    "Blue Baby": "Tainted Blue Baby",
    "Eve": "Tainted Eve",
    "Samson": "Tainted Samson",
    "Azazel": "Tainted Azazel",
    "Lazarus": "Tainted Lazarus",
    "Eden": "Tainted Eden",
    "The Lost": "Tainted Lost",
    "Lilith": "Tainted Lilith",
    "Keeper": "Tainted Keeper",
    "Apollyon": "Tainted Apollyon",
    "The Forgotten": "Tainted Forgotten",
    "Bethany": "Tainted Bethany",
    "Jacob & Esau": "Tainted Jacob"
};

const reverseCharacterModePairs = Object.fromEntries(
    Object.entries(characterModePairs).map(([normalName, taintedName]) => [taintedName, normalName])
);

function getCharacterModeCounterpart(charName) {
    return characterModePairs[charName] || reverseCharacterModePairs[charName] || null;
}

function getValidImagePath(baseName, defaultFolder, imgElement) {
    const folders = [defaultFolder, 'Characters/Character_Items', 'Characters/Character_Effects', 'Pickups', 'Trinkets', 'UI', 'Bosses'];
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
    return charData.unlocks.filter(unlock => !globalSpecialUnlocks.some(special => special.id === unlock.id));
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

function createEffectChip(effect) {
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
    getValidImagePath(effect, 'Characters/Character_Effects', img);
    chip.appendChild(img);

    return chip;
}

function renderCharInfo() {
    const char = select.value;
    const charData = gameData[char];
    if (!charData) return;

    charName.textContent = charData.name;
    charDesc.textContent = charData.description;
    charStats.innerHTML = renderStats(charData);

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
    if (charData.effectGroups) {
        charData.effectGroups.forEach(group => {
            const groupWrap = document.createElement('div');
            groupWrap.className = 'effect-group';

            const label = document.createElement('span');
            label.className = 'effect-group-label';
            label.textContent = group.label;
            groupWrap.appendChild(label);

            const chips = document.createElement('span');
            chips.className = 'effect-group-chips';
            group.effects.forEach(effect => {
                chips.appendChild(createEffectChip(effect));
            });
            groupWrap.appendChild(chips);
            charEffects.appendChild(groupWrap);
        });
    } else if (charData.effects) {
        charData.effects.forEach(effect => {
            charEffects.appendChild(createEffectChip(effect));
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
            li.title = item.tooltip || getItemTooltip(item.name);
            
            if (conditionId) {
                if (!userProgress[conditionId]) {
                    li.classList.add('item-locked');
                }
                li.style.cursor = 'pointer';
                li.title = `${item.tooltip || getItemTooltip(item.name)} Unlock condition: ${getConditionText(item)}`;
                li.addEventListener('click', () => {
                    const completed = toggleProgress(conditionId);
                    if (completed) {
                        playSFX('sfx-mark-complete');
                    } else {
                        playSFX('sfx-mark-incomplete');
                    }
                    saveProgress();
                    renderAll();
                });
            }
            
            const defaultFolder = item.isEffectImg ? 'Characters/Character_Effects' : 'Characters/Character_Items';
            
            const img = document.createElement('img');
            img.className = 'item-icon';
            img.alt = item.name;
            img.title = item.tooltip || getItemTooltip(item.name);
            if (conditionId && !item.tooltip) img.title = `${getItemTooltip(item.name)} Unlock condition: ${getConditionText(item)}`;
            
            const itemImg = item.lockedImg && conditionId && !userProgress[conditionId] ? item.lockedImg : item.img;
            getValidImagePath(itemImg, defaultFolder, img);

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

function renderSpecialGlobalUnlocks() {
    let specialContainer = document.getElementById('special-unlocks');
    if (!specialContainer) {
        specialContainer = document.createElement('div');
        specialContainer.id = 'special-unlocks';
        specialContainer.className = 'special-unlocks';
        grid.parentNode.insertBefore(specialContainer, grid);
    }

    const characters = getGlobalSpecialCharacters();
    const goal = characters.length;
    specialContainer.innerHTML = '';

    globalSpecialUnlocks.forEach(unlock => {
        const count = getGlobalSpecialCount(unlock.id);
        const completed = count >= goal;
        userProgress[unlock.id] = completed;

        const card = document.createElement('div');
        card.className = `unlock-card special-unlock-card ${completed ? 'completed' : ''}`;
        card.title = getItemTooltip(unlock.item);

        const img = document.createElement('img');
        img.className = 'unlock-item-img';
        img.alt = unlock.item;
        img.title = getItemTooltip(unlock.item);
        setImageWithFallback(img, getUnlockImageCandidates("Isaac", unlock.item));

        const title = document.createElement('div');
        title.className = 'boss-name';
        title.textContent = unlock.boss;

        const itemName = document.createElement('div');
        itemName.className = 'item-name';
        itemName.textContent = unlock.item;

        const counter = document.createElement('div');
        counter.className = 'special-counter';
        counter.textContent = `${count}/${goal}`;

        const difficulty = document.createElement('div');
        difficulty.className = 'difficulty hard-mode';
        difficulty.textContent = unlock.diff;

        const subBosses = document.createElement('div');
        subBosses.className = 'sub-boss-container';
        characters.forEach(charData => {
            const subId = getGlobalSpecialCharacterId(unlock.id, charData.name);
            const sourceUnlock = getGlobalSpecialSourceUnlock(unlock.id, charData);
            const button = document.createElement('button');
            button.className = `sub-boss-btn ${userProgress[subId] || (userProgress[unlock.id] && count === goal) ? 'active' : ''}`;
            button.dataset.subid = subId;
            if (sourceUnlock) {
                button.title = `${sourceUnlock.boss}: ${sourceUnlock.item}`;
            }
            button.textContent = charData.name;
            button.addEventListener('click', event => {
                event.stopPropagation();
                const completed = toggleGlobalSpecialCharacterProgress(unlock.id, charData);
                playSFX(completed ? 'sfx-mark-complete' : 'sfx-mark-incomplete');
                saveProgress();
                renderAll();
            });
            subBosses.appendChild(button);
        });

        card.appendChild(title);
        card.appendChild(img);
        card.appendChild(itemName);
        card.appendChild(counter);
        card.appendChild(difficulty);
        card.appendChild(subBosses);
        specialContainer.appendChild(card);
    });
}

function renderUnlocks() {
    grid.innerHTML = '';
    const char = select.value;
    const charData = gameData[char];
    if (!charData) return;
    syncGlobalSpecialUnlocks();
    renderSpecialGlobalUnlocks();
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

        const itemTooltip = getItemTooltip(unlock.item);

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
            <img class="unlock-item-img" alt="${unlock.item}">
            <div class="item-name">${unlock.item}</div>
            <div class="difficulty ${unlock.diff.includes('Hard') ? 'hard-mode' : ''}">${unlock.diff}</div>
            ${subBossesHtml}
        `;

        card.title = `${unlock.boss}: ${itemTooltip}`;
        const itemImg = card.querySelector('.unlock-item-img');
        itemImg.title = itemTooltip;
        setImageWithFallback(itemImg, getUnlockImageCandidates(charData.name, unlock.item));

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
                
                const completed = toggleProgress(unlock.id);
                const isNow100 = checkAllComplete();
                
                if (completed) {
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

function renderGreedMachine() {
    syncGreedUnlocks();
    if (greedCoinTotal) greedCoinTotal.textContent = greedCoins;
    if (greedMachineCounter) {
        greedMachineCounter.innerHTML = '';
        String(greedCoins).padStart(3, '0').slice(-3).split('').forEach(digit => {
            const digitEl = document.createElement('span');
            digitEl.className = 'machine-counter-digit';
            digitEl.textContent = digit;
            greedMachineCounter.appendChild(digitEl);
        });
    }
    if (!greedUnlocks) return;

    greedUnlocks.innerHTML = '';
    greedDonationUnlocks.forEach(unlock => {
        const card = document.createElement('div');
        const completed = userProgress[unlock.id];
        const remaining = Math.max(unlock.coins - greedCoins, 0);
        card.className = `status-card ${completed ? 'completed' : ''}`;
        card.innerHTML = `
            <div class="status-title">${unlock.reward}</div>
            <div class="status-detail">${unlock.coins} coins</div>
            <div class="${completed ? 'status-detail' : 'status-missing'}">${completed ? 'Unlocked' : `${remaining} coins remaining`}</div>
        `;
        greedUnlocks.appendChild(card);
    });
}

function renderChallenges() {
    if (!challengeGrid) return;
    challengeGrid.innerHTML = '';

    const completedCount = challengeData.filter(challenge => userProgress[challenge.id]).length;
    if (challengeProgress) {
        challengeProgress.textContent = `Challenges: ${completedCount}/${challengeData.length}`;
    }

    challengeData.forEach(challenge => {
        const missing = getMissingRequirements(challenge);
        const locked = missing.length > 0;
        const completed = userProgress[challenge.id];
        const card = document.createElement('div');
        card.className = `challenge-card ${locked ? 'locked' : ''} ${completed ? 'completed' : ''}`;

        const missingText = locked
            ? 'Missing:'
            : 'Unlocked';
        const missingButtons = locked
            ? `<div class="challenge-requirements">${missing.map(requirement => `<button class="requirement-btn" data-req="${getRequirementKey(requirement)}">${requirement.text}</button>`).join('')}</div>`
            : '';

        card.innerHTML = `
            <div class="challenge-title">#${challenge.id.replace('chal_', '')} ${challenge.name}</div>
            <div class="challenge-reward">Unlocks: ${challenge.reward}</div>
            <div class="${locked ? 'challenge-missing' : 'challenge-reward'}">${missingText}</div>
            ${missingButtons}
        `;

        card.querySelectorAll('.requirement-btn').forEach(button => {
            button.addEventListener('click', event => {
                event.stopPropagation();
                setProgress(button.dataset.req, true);
                playSFX('sfx-mark-complete');
                saveProgress();
                renderAll();
            });
        });

        if (!locked) {
            card.addEventListener('click', () => {
                const completed = toggleProgress(challenge.id);
                playSFX(completed ? 'sfx-mark-complete' : 'sfx-mark-incomplete');
                saveProgress();
                renderAll();
            });
        }

        challengeGrid.appendChild(card);
    });
}

function getDailyStatValue(stat) {
    if (stat === 'played') return dailyProgress.played;
    if (stat === 'wins') return dailyProgress.wins;
    if (stat === 'streak') return dailyProgress.streak;
    return 0;
}

function syncDailyAchievements() {
    let changed = false;
    dailyAchievements.forEach(achievement => {
        const complete = getDailyStatValue(achievement.stat) >= achievement.goal;
        if (complete && !userProgress[achievement.id]) {
            userProgress[achievement.id] = true;
            changed = true;
        }
    });
    if (changed) saveProgress();
}

function renderDailyRuns() {
    syncDailyAchievements();
    if (dailyPlayed) dailyPlayed.textContent = dailyProgress.played;
    if (dailyStreak) dailyStreak.textContent = dailyProgress.streak;
    if (!dailyAchievementsGrid) return;

    dailyAchievementsGrid.innerHTML = '';
    dailyAchievements.forEach(achievement => {
        const current = getDailyStatValue(achievement.stat);
        const completed = userProgress[achievement.id];
        const card = document.createElement('div');
        card.className = `status-card ${completed ? 'completed' : ''}`;
        card.innerHTML = `
            <div class="status-title">${achievement.name}</div>
            <div class="status-detail">${achievement.reward}</div>
            <div class="${completed ? 'status-detail' : 'status-missing'}">${Math.min(current, achievement.goal)}/${achievement.goal}</div>
        `;
        dailyAchievementsGrid.appendChild(card);
    });
}

function renderAll() {
    syncGlobalSpecialUnlocks();
    syncGreedUnlocks();
    renderCharInfo();
    renderUnlocks();
    updateProgressDisplay();
    renderGreedMachine();
    renderChallenges();
    renderDailyRuns();
}

navButtons.forEach(button => {
    button.addEventListener('click', () => showView(button.dataset.view));
});

document.querySelectorAll('.coin-btn').forEach(button => {
    button.addEventListener('click', () => {
        const coins = Number(button.dataset.coins) || 0;
        const nextCoins = Math.max(0, Math.min(greedCoins + coins, 1000));
        const delta = nextCoins - greedCoins;
        greedCoins = nextCoins;
        saveGreedProgress();
        syncGreedUnlocks();
        if (delta > 0) playCoinSoundRepeated('sfx-coin-insert', delta);
        if (delta < 0) playCoinSoundRepeated('sfx-coin-unsert', Math.abs(delta));
        renderAll();
    });
});

window.addEventListener('pagehide', stopCoinSounds);
window.addEventListener('beforeunload', stopCoinSounds);

if (dailyVictoryBtn) {
    dailyVictoryBtn.addEventListener('click', () => {
        dailyProgress.played += 1;
        dailyProgress.wins += 1;
        dailyProgress.streak += 1;
        saveDailyProgress();
        playSFX('sfx-mark-complete');
        renderAll();
    });
}

if (dailyDefeatBtn) {
    dailyDefeatBtn.addEventListener('click', () => {
        dailyProgress.played += 1;
        dailyProgress.streak = 0;
        saveDailyProgress();
        playSFX('sfx-mark-incomplete');
        renderAll();
    });
}

select.addEventListener('change', renderAll);

function toggleTaintedMode() {
    const counterpart = getCharacterModeCounterpart(select.value);
    isTaintedMode = !isTaintedMode;
    document.body.classList.toggle('tainted-mode', isTaintedMode);
    playMusic(isTaintedMode ? 'tainted' : 'normal');
    populateSelect();
    if (counterpart && gameData[counterpart]) {
        select.value = counterpart;
    }
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

const itemsMenuBtn = document.querySelector('.menu-btn[data-view="items-screen"]');
const searchBar = document.getElementById('item-search-bar');
const itemsSearchCount = document.getElementById('items-search-count');
const itemsContainer = document.getElementById('items-container');
let searchableEntries = [];

function fetchItems() {
    if (!window.TBOU_SEARCH_DATA || !window.TBOU_SEARCH_DATA.items || !window.TBOU_SEARCH_DATA.transformations) {
        console.error('Erro: TBOU_SEARCH_DATA nao foi carregado corretamente ou esta incompleto.');
        itemsContainer.innerHTML = '<p style="color: #aaa;">Não foi possível carregar os dados de pesquisa.</p>';
        return;
    }

    const itemsData = window.TBOU_SEARCH_DATA.items.map(item => ({
        ...item,
        type: 'item'
    }));

    const transformationsData = window.TBOU_SEARCH_DATA.transformations.map(trans => ({
        name: trans.Name,
        description: trans.Description,
        functionality: trans.Method,
        image: trans.Image,
        type: 'transformation',
        id: 'N/A', quality: 'N/A', pool: 'N/A', transformation: 'N/A'
    }));

    searchableEntries = [...itemsData, ...transformationsData];
    renderSearchResults();
}

const popupOverlay = document.getElementById('item-popup-overlay');
const popupContent = document.getElementById('item-popup-content');
const popupCloseBtn = document.getElementById('item-popup-close');

function getSearchIconUrl(entry) {
    const image = entry.image ? entry.image.trim() : '';
    return image || 'img/Search/Items/no_set.png';
}

function getQualityInfo(quality) {
    const qualityString = String(quality || '').trim();
    const match = qualityString.match(/Quality([0-4])\.png$/i) || qualityString.match(/^([0-4])$/);
    const qualityKey = match ? match[1] : 'N/A';
    const qualityMap = {
        '0': {
            src: 'img/Search/Quality/Quality0.png',
            tooltip: 'Quality 0... This is so terrible it should come with a support group.',
            label: 'Quality 0...'
        },
        '1': {
            src: 'img/Search/Quality/Quality1.png',
            tooltip: 'Quality 1. Not great, not tragic. Just quietly sad.',
            label: 'Quality 1.'
        },
        '2': {
            src: 'img/Search/Quality/Quality2.png',
            tooltip: 'Quality 2. Normal item. Mid-tier, middling, mundanity embodied.',
            label: 'Quality 2.'
        },
        '3': {
            src: 'img/Search/Quality/Quality3.png',
            tooltip: 'Quality 3. Actually decent. It makes the rest of your build feel fancy.',
            label: 'Quality 3.'
        },
        '4': {
            src: 'img/Search/Quality/Quality4.png',
            tooltip: 'Quality 4! Legendary flex energy detected.',
            label: 'Quality 4!'
        },
        'N/A': {
            src: 'img/Search/Items/no_set.png',
            tooltip: 'No quality has been assigned. This item is emotionally indefinite.',
            label: 'Quality N/A'
        }
    };
    const qualityInfo = qualityMap[qualityKey] || qualityMap['N/A'];
    return { ...qualityInfo, key: qualityKey };
}

function getPoolInfo(pool) {
    const normalized = pool ? pool.toLowerCase() : '';
    const poolMap = [
        { test: p => p.includes('treasure room'), src: 'img/Search/Items_pool/Treasure_Room.png', tooltip: 'The biggest item pool of the game. If a item pool runs out of items to give, it will fall onto the treasure room items pool!' },
        { test: p => p.includes('secret room') && !p.includes('ultra'), src: 'img/Search/Items_pool/Secret_Room.png', tooltip: 'The best item pool of the game! Always try to reroll items on there!' },
        { test: p => p.includes('ultra secret'), src: 'img/Search/Items_pool/Ultra_Secret_Room.png', tooltip: 'All the items are red on this pool! Try to reroll these to get the best or decent things!' },
        { test: p => p.includes('super secret'), src: 'img/Search/Items_pool/Secret_Room.png', tooltip: 'The best item pool of the game! Always try to reroll items on there!' },
        { test: p => p.includes('shop'), src: 'img/Search/Items_pool/Shop.png', tooltip: 'The shop item pool.' },
        { test: p => p.includes('curse room'), src: 'img/Search/Items_pool/Curse_Room.png', tooltip: 'Somewhat decent. Some items from the devil pool are in here, so if you can, reroll it.' },
        { test: p => p.includes('devil room') || p.includes('devil pool'), src: 'img/Search/Items_pool/Devil_Room.png', tooltip: 'The diabolical side have some decent items by default. Always try to keep a reroll ready for the devil room!' },
        { test: p => p.includes('angel room') || p.includes('angel pool'), src: 'img/Search/Items_pool/Angel_Room.png', tooltip: 'The angelic side needs some work to have good items, but is worth it! Always try to keep a reroll ready for the angel room!' },
        { test: p => p.includes('boss reward'), src: 'img/Search/Items_pool/Boss_Room.png', tooltip: 'Boss reward item pool.' },
        { test: p => p.includes('golden chest'), src: 'img/Search/Items_pool/Golden_Chest.png', tooltip: 'Golden Chest item pool.' },
        { test: p => p.includes('crane game'), src: 'img/Search/Items_pool/Crane_Game.png', tooltip: 'Crane Game item pool.' },
        { test: p => p.includes('baby shop'), src: 'img/Search/Items_pool/Baby_Shop.png', tooltip: 'Baby Shop item pool.' },
        { test: p => p.includes('rotten beggar'), src: 'img/Search/Items_pool/Rotten_Beggar.png', tooltip: 'Rotten Beggar Pool.' }
    ];
    const found = poolMap.find(entry => entry.test(normalized));
    return found || { src: 'img/Search/Items/no_set.png', tooltip: pool ? `${pool} item pool.` : 'Pool not available' };
}

function getTransformationName(entry) {
    if (!entry) return null;
    const text = entry.transformation || '';
    let match = text.match(/['"]([^'"]+)['"]/);
    if (match) return match[1];
    match = text.match(/contribute to the ([^.]+?) transformation/i);
    if (match) return match[1].trim();
    if (entry.functionality) {
        match = entry.functionality.match(/belongs to the ([^.]+?) set/i);
        if (match) return match[1].trim();
    }
    return null;
}

function getTransformationIcon(name) {
    if (!name || !window.TBOU_SEARCH_DATA || !Array.isArray(window.TBOU_SEARCH_DATA.transformations)) {
        return 'img/Search/Items/no_set.png';
    }
    const transformation = window.TBOU_SEARCH_DATA.transformations.find(trans => trans.Name.toLowerCase() === name.toLowerCase());
    return transformation && transformation.Image ? transformation.Image : 'img/Search/Items/no_set.png';
}

function showSearchPopup(entry) {
    if (!popupOverlay || !popupContent) return;
    const imageUrl = getSearchIconUrl(entry);
    const qualityInfo = entry.type === 'item' ? getQualityInfo(entry.quality) : null;
    const poolInfo = entry.type === 'item' ? getPoolInfo(entry.pool) : null;
    const transformationName = entry.type === 'item' ? getTransformationName(entry) : entry.type === 'transformation' ? entry.name : null;
    const transformationIcon = getTransformationIcon(transformationName);
    const transformationLabel = transformationName || (entry.type === 'item' ? entry.transformation || 'Nenhuma' : 'Sem transformação');
    const qualityClass = entry.type === 'item' ? `quality-${qualityInfo ? qualityInfo.key.toLowerCase() : 'n-a'}` : '';

    popupContent.innerHTML = `
        <div class="item-popup-header">
            <img src="${imageUrl}" alt="${entry.name}" onerror="this.src='img/Search/Items/no_set.png'">
            <div>
                <h2 id="item-popup-title">${entry.name}</h2>
                <p class="item-popup-label">${entry.type === 'item' ? 'Item' : 'Transformation'}</p>
                <div class="item-popup-meta">
                    ${qualityInfo ? `<span class="meta-pill quality-pill ${qualityClass}" title="${qualityInfo.tooltip}"><img src="${qualityInfo.src}" alt="Quality icon" onerror="this.src='img/Search/Items/no_set.png'"><span>${qualityInfo.label}</span></span>` : ''}
                    ${poolInfo ? `<span class="meta-pill" title="${poolInfo.tooltip}"><img src="${poolInfo.src}" alt="Pool icon" onerror="this.src='img/Search/Items/no_set.png'"><span>${entry.pool}</span></span>` : ''}
                </div>
            </div>
        </div>
        <div class="item-popup-details">
            <p><strong>Descripcion:</strong> ${entry.description || 'No given description.'}</p>
            <p><strong>Functionality:</strong> ${entry.functionality || 'No given functionality.'}</p>
            ${entry.type === 'item' ? `<p><strong>ID:</strong> ${entry.id || 'N/A'}</p>` : `<p><strong>Method:</strong> ${entry.functionality || 'Nenhuma informação.'}</p>`}
            ${entry.type === 'item' ? `<p class="item-popup-transformation"><strong>Transformation:</strong> <img src="${transformationIcon}" alt="Transformation icon" onerror="this.src='img/Search/Items/no_set.png'"> ${transformationLabel}</p>` : ''}
        </div>
    `;

    popupOverlay.classList.add('active');
    popupOverlay.setAttribute('aria-hidden', 'false');
}

function hideSearchPopup() {
    if (!popupOverlay) return;
    popupOverlay.classList.remove('active');
    popupOverlay.setAttribute('aria-hidden', 'true');
}

function renderSearchResults() {
    if (!itemsContainer) return;
    const term = searchBar ? searchBar.value.toLowerCase() : '';
    
    const entries = searchableEntries.filter(entry => {
        const name = entry.name ? entry.name.toLowerCase() : '';
        const desc = entry.description ? entry.description.toLowerCase() : '';
        const func = entry.functionality ? entry.functionality.toLowerCase() : '';
        return name.includes(term) || desc.includes(term) || func.includes(term);
    });

    itemsContainer.innerHTML = '';
    if (itemsSearchCount) {
        itemsSearchCount.textContent = `${entries.length}/${searchableEntries.length} results`;
    }
    
    if (entries.length === 0) {
        itemsContainer.innerHTML = '<p style="color: #aaa;">Nenhum item encontrado.</p>';
        return;
    }

    entries.forEach(entry => {
        const card = document.createElement('div');
        card.className = `item-card item-card-${entry.type}`;
        const imageUrl = getSearchIconUrl(entry);
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'item-icon-btn';
        button.title = entry.name;
        button.innerHTML = `<img src="${imageUrl}" alt="${entry.name}" loading="lazy" onerror="this.onerror=null;this.src='img/Search/Items/no_set.png'">`;
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            showSearchPopup(entry);
        });

        card.appendChild(button);
        itemsContainer.appendChild(card);
    });
}

if (searchBar) searchBar.addEventListener('input', renderSearchResults);
if (popupCloseBtn) popupCloseBtn.addEventListener('click', hideSearchPopup);
if (popupOverlay) popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) hideSearchPopup();
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') hideSearchPopup();
});

setTimeout(fetchItems, 100);

const musicToggleBtn = document.getElementById('music-toggle-btn');
const bgMusic = document.getElementById('bg-music');

if (musicToggleBtn && bgMusic) {
    musicToggleBtn.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play().then(() => {
                musicToggleBtn.textContent = '🎵 ON';
                musicToggleBtn.classList.remove('music-muted');
            }).catch(err => console.log("Audio play blocked", err));
        } else {
            bgMusic.pause();
            musicToggleBtn.textContent = '🔇 OFF';
            musicToggleBtn.classList.add('music-muted');
        }
    });
}