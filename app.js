let raceNumber = Math.floor(Math.random() * 1000);
const earlyRegister = false;
const runnersAge = 18;

if (earlyRegister && runnersAge > 18) {
  raceNumber += 1000;
}

if (earlyRegister && runnersAge > 18) {
  console.log(`You will race at 9:30 am, your race number is ${raceNumber}.`);
} else if (!earlyRegister && runnersAge > 18) {
  console.log(`You did not register early and will race at 11:00 am, your race number is ${raceNumber}`)
} else if (runnersAge < 18) {
  console.log(`As a youth participant you will race at 12:30 and your race number will be ${raceNumber}`)
} else {
  console.log(`Please see the registration desk`);
}
