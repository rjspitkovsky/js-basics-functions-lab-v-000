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
