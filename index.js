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
  let price
  if (distanceTravelledInFeet(startBlock, endBlock) <= 400) {
    price = 0
    return price
  } else if (distanceTravelledInFeet(startBlock, endBlock)) > 400 && distanceTravelledInFeet(startBlock, endBlock) <= 2000 {
    price = distanceTravelledInFeet(startBlock, endBlock) * .02
      return price 
  }


}
