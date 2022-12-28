const experiences = [
    {
        company: "something boring2",
        title: "Amazing person",
        number: 2,
        time: "forever",
    },
    {
        company: "something boring1",
        title: "Amazing person",
        number: 1,
        time: "forever",
    },
    {
        company: "something boring6",
        title: "Amazing person",
        number: 6,
        time: "forever",
    },
    {
        company: "something boring3",
        title: "Amazing person",
        number: 3,
        time: "forever",
    },
    {
        company: "something boring5",
        title: "Amazing person",
        number: 5,
        time: "forever",
    },
    {
        company: "something boringer4",
        title: "Amazing person",
        number: 4,
        time: "forever",
    },
]

const sortedExperiences = experiences.sort((a,b) => a.number - b.number)


console.log("sortedExperiences: ", sortedExperiences)