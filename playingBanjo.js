const areYouPlayingBanjo = (name) => name.charAt(0) == "R" || name.charAt(0) == 'r' ? `${name} plays banjo` : `${name} does not play banjo`

console.log("areYouPlayingBanjo('Robert'): ", areYouPlayingBanjo("Robert"))
console.log("areYouPlayingBanjo('robert'): ", areYouPlayingBanjo("robert"))
console.log("areYouPlayingBanjo('annie'): ", areYouPlayingBanjo('annie'))
console.log("areYouPlayingBanjo('Trish'): ", areYouPlayingBanjo('Trish'))
// console.log("areYouPlayingBanjo(): ", areYouPlayingBanjo())
// console.log("areYouPlayingBanjo(): ", areYouPlayingBanjo())

function areYouPlayingBanjos(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }