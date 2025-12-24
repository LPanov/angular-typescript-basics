let sports: string[] = ["Golf", "Soccer", "Basketball"];

for (let sport of sports) {
    console.log(sport);

    if (sport == "Soccer") {
        console.log("My favourite sport");
    }
}


sports.push("Volleyball");
for (let sport of sports) {
    console.log(sport);
}
