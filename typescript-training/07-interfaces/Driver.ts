import { Coach } from "./Coach";
import { GolfCoach } from "./GolfCoach";
import { SoccerCoach } from "./SoccerCoach";

let mySoccerCoach = new SoccerCoach();
let myGolfCoach = new GolfCoach();

let coaches: Coach[] = [];

coaches.push(mySoccerCoach);
coaches.push(myGolfCoach);

for (let coach of coaches) {
    console.log(coach.getDailyWorkout());
}