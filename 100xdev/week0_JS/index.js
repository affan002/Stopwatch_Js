function filterMale(users) {
    let output = []
    for (i=0; i<users.length; i++) {
        if (users[i].age>=18 && users[i].gender==="M") {
            output.push(users[i].name)
        }

    }
    return output

}

const users = [
    {
        name: "Affan",
        age: 20,
        gender: "M"
    },
    {
        name: "Anabiya",
        age: 22,
        gender: "F"
    },
    {
        name: "Max",
        age:3,
        gender: "M"
    }
]

// console.log(filterMale(users))

console.log(users.filter(function(value) {
    if (value.age >= 18 && value.gender === "M") {
        return value.name
    }
}))