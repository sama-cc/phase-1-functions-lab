// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    if (street < 42) {
        return 42 - street;
    } else {
        return street - 42;
    }
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return ((destination - start) * 264)
    } else {
        return ((start - destination) * 264)
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) < 2000) {
        return ((distanceTravelledInFeet(start, destination) - 400) * .02);
    } else if (distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far";
    }

}