const songs = [
    "The Kid LAROI & Justin Bieber - Stay",
    "Ed Sheeran - Bad Habbits",
    "Olivia Rodrigo - Rumors",
    "Doja Cat Featuring SZA - Kiss me More",
    "Dua Lipa - Levitating",
    "Lil Nas X & Jack Harlow - Industry Baby",
    "BTS - Butter",
    "Olivia Rodrigo - Deja Vu",
    "Lil Nas X - Montero (Call me by your name)",
    "The Weeknd & Ariane Grande - Save your tears",
    "Walker Hayes - Fancy Like",
    "The Weeknd - Take My Breath",
    "Justin Bieber Featuring Daniel Caesar & Giveon - Peaches",
    "Silk Sonic - Leave the door open", 
    "Wizkid Featuring Justin Bieber & Terms - Essence",
    "Doja Cat & The Weeknd - You Right",
    "Billi Ellish - Happier Than Ever",
    "Doja Cat - Need to know",
    "The Weeknd - Blinding Lights"
];

const prepositions = [
    "out of nowhere",
    "with extra sugar on top",
    "in my ass",
    "under my bed",
    "at the bus stop",
    "ontop of my salad",
    "in my closet",
    "at the barber shop",
    "next to my weird uncle",
    "with elderly man surrounding me",
    "on an airplane to hell",
    "by holding my breath"
];

function selectPhrase(array) {
    return array[Math.floor(Math.random() * array.length)]
}

console.log(selectPhrase(songs) + " " + selectPhrase(prepositions));


