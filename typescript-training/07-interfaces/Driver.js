"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GolfCoach_1 = require("./GolfCoach");
var SoccerCoach_1 = require("./SoccerCoach");
var mySoccerCoach = new SoccerCoach_1.SoccerCoach();
var myGolfCoach = new GolfCoach_1.GolfCoach();
var coaches = [];
coaches.push(mySoccerCoach);
coaches.push(myGolfCoach);
for (var _i = 0, coaches_1 = coaches; _i < coaches_1.length; _i++) {
    var coach = coaches_1[_i];
    console.log(coach.getDailyWorkout());
}
