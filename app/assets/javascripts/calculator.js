let char1Name = "",
    char1Realm = "",
    char1AchPts = "",
    char1Hnr = "",
    char1Thumb = "",
    char1Points = 0,
    char2Name = "",
    char2Realm = "",
    char2AchPts = "",
    char2Hnr = "",
    char2Thumb = "",
    char2Points = 0,
    id = 'd10e052f60f54b3faa1d45ac314963cb',
    secret = 'aaIQTibsWLvi6Axqa6DWM72G0r0oMsBA',
    accessToken = ""

    window.onload = function(){
        fetch(`https://us.battle.net/oauth/token?grant_type=client_credentials&client_id=${id}&client_secret=${secret}`)
        .then(r => r.json())
        .then(r => {
            console.log(r)
            accessToken = r['access_token']
        })
    }



// fetch(`https://us.api.battle.net/wow/character/${char1Realm}/${char1Name}?locale=en_US&`)
// .then(r => r.json())
// .then(r => {
//     char1Thumb = r['thumbnail']
//     char1Hnr = r['totalHonor']
//     char1AchPts = r['achievementPoints']
//     document.getElementById('name').innerHTML = points


// })

// fetch(`https://us.api.battle.net/wow/character/${char1Realm}/${char1Name}?locale=en_US&`)
// .then(r => r.json())
// .then(r => {
//     char2Thumb = r['thumbnail']
//     char2Hnr = r['totalHonor']
//     char2AchPts = r['achievementPoints']
//     document.getElementById('name').innerHTML = points


// })

// fetch(`https://us.api.battle.net/wow/character/${char1Realm}/${char1Name}?locale=en_US&`)
// .then(r => r.json())
// .then(r => {
//     char2Thumb = r['thumbnail']
//     char2Hnr = r['totalHonor']
//     char2AchPts = r['achievementPoints']
//     document.getElementById('name').innerHTML = points


// })