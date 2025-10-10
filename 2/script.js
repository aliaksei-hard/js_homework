console.log("hi")
const street = [
    {
        houseNumber: 1,
        address: "Липовая 1",
        residents: [
            { name: "Аня", age: 30, hobbies: ["чай", "сад"] },
            { name: "Игорь", age: 35, hobbies: ["программирование"] }
        ],
        area: 120.5 // число
    },
    {
        houseNumber: 2,
        address: "Липовая 2",
        residents: [],
        area: NaN
    },
    {
        houseNumber: 3,
        address: "Липовая 3",
        residents: [
            { name: "Олег", age: 27, hobbies: ["футбол"] }
        ],
        area: 90
    }
];

const res = {
    housesCount: 0,
    totalResidents: 0,
    addresses: [],
    avgArea: null
}

summarizeStreet(street)

function summarizeStreet(street) {//context, visibility, closure
    const aaa = 'aaa'
    
    if (Array.isArray(street)) {
        res.housesCount = street.length

        for (const address of street) {
            if (Array.isArray(address.residents)) {
                res.totalResidents += address.residents.length
            }
        }

        res.addresses = street.map(house => {//context
            return house.address
        })

        street.map(house => {
            let currentArea = house.area
            if (typeof currentArea === 'number' && Number.isFinite(currentArea) && !Number.isNaN(currentArea)) {
                res.avgArea += currentArea
            }

        })

        console.log(`result obj :`, res)

    } else {
        console.log("Not an array")
    }
}

/////////////////////////////////////////////////////////
// Iterator
function houseIterator() {
    const desiredOrder = ['residents', 'address', 'area', 'houseNumber']

    let index = 0;
    const context = this;
    return {
        next() {
            if (index < desiredOrder.length) {
                const key = desiredOrder[index];
                index++;

                return { done: false, value: [key + ':::' + JSON.stringify(context[key], null, 2)] };
            } else {
                return { done: true };
            }
        }
    };
}

for (const house of street) {
    house[Symbol.iterator] = houseIterator
}

for (const house of street) {
    for (const key of house) {
        console.log(`${key}`)
    }
}
/////////////////////////////////////////////////////////////////
// comparison

function isSameArray(a, b) {
    const res = true
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            res = false
        }
        return res
    }

}
p
function safeEqual(a, b) {
    let typeA = typeof a
    let typeB = typeof b
    let res = true

    const arr = [typeA, typeB]
    if (arr.includes('object')) return false

    if (Number.isNaN(a) && Number.isNaN(b)) {
        return true
    }

    if (typeA !== typeB || a !== b) return false

    return res
}

const alex = NaN
const alex2 = NaN

const sasha = '5'

console.log(safeEqual(alex, alex2))
/////////////////////////////////////////////////////////////////////////

const profile = {
    streetName: 'Lipovaya',
    houses: [...street]
}

function deepCopyFunc(profile) {
    return structuredClone(profile)
}

function shallowCopyFunc(profile) {
    return profile
}

const shallowCopy = deepCopyFunc(profile)
const deepCopy = deepCopyFunc(profile)

deepCopy.houses[0].area = 6666
console.log(JSON.stringify(profile, null, 2))
console.log(JSON.stringify(deepCopy, null, 2))

shallowCopy.houses[0].area = 7777
console.log(JSON.stringify(profile, null, 2))
console.log(JSON.stringify(shallowCopy, null, 2))


