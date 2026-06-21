//helper
function cleanText(text){
return text.trim()
}

//helper
function capitalize(text){
return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

//main function
function formatDisplayName(firstName, lastName){
const formatFirst = capitalize(cleanText(firstName))
const formatLast = capitalize(cleanText(lastName))
return `${formatFirst} ${formatLast}` 
}


//trigger that throw data in the main function
console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA', 'pATEL'));


