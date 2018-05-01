// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  let distance = Math.abs(42-block);
  return distance;
}

function distanceFromHqInFeet(block) {
  let distanceInFeet = distanceFromHqInBlocks(block)*264;
  return distanceInFeet;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  let distanceInFeet = Math.abs(startBlock - endBlock)*264;
  return distanceInFeet;
}

function calculatesFarePrice(startBlock, endBlock) {
  let distanceinFeet = Math.abs(startBlock - endBlock)*264;
  // let price;
  // switch (distanceinFeet) {
  //   case distanceinFeet <= 400:
  //     price = 0;
  //     return price;
  //     case distanceinFeet > 400 && distanceinFeet <= 2000:
  //     price = distanceinFeet * .02;
  //     return price;
  //     case distanceinFeet > 2000 && <= 2500:
  //     price = 25
  //     return price;
  //     default:
  //     price = "cannot travel that far"
  //     return price
  // }
}
