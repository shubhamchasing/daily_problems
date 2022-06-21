const league_data = require("./File")

Object.keys(league_data).forEach((team) => {
    league_data[team]['pts'] = league_data[team]['table']['wins'] * 3 + league_data[team]['table']['draws']
})

//console.log(league_data)

const sortObj = (league_data) => {
    let dataArr = []

    Object.keys(league_data).forEach((team) => {
        let teamData = { ...league_data[team], 'table': { ...league_data[team]['table'] } }

        dataArr.push(teamData)
    })

    let sortData = dataArr.sort((team1, team2) => {
        if (team1.pts < team2.pts) {
            return 1
        }
        else if (team1.pts > team2.pts) {
            return -1
        }
        else if (team1.name < team2.name) {
            return 1
        }
        else if (team1.name > team2.name) {
            return -1
        }
        else {
            return 0
        }
    })



    return sortData;
}

console.log(sortObj(league_data))

const teamFormat = sortObj(league_data).reduce((acc, curr) => {
    acc[[curr['name']]] = [curr['table']['wins'], curr['table']['wins']]

    return acc
}, {})

//console.log(teamFormat)
 
const newObj = (league_data) => {
    let newObject = {}
    Object.keys(league_data).forEach((team) => {
        newObject[team] = { ...league_data[team], table: { ...league_data[team]['table'] } }

    })

    return newObject
}

//console.log(newObj(league_data))
