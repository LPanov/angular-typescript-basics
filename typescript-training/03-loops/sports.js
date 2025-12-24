var sports = ["Golf", "Soccer", "Basketball"];
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    console.log(sport);
    if (sport == "Soccer") {
        console.log("My favourite sport");
    }
}
sports.push("Volleyball");
for (var _a = 0, sports_2 = sports; _a < sports_2.length; _a++) {
    var sport = sports_2[_a];
    console.log(sport);
}
