// Code your solution in this file!

const hq = 42

function distanceFromHqInBlocks(starting_block_number) {
    if (hq > starting_block_number) {
        return hq - starting_block_number
    } else {
        return starting_block_number - hq
    }
}

function distanceFromHqInFeet(some_block_number) {
    const amount_of_blocks = distanceFromHqInBlocks(some_block_number)
    return amount_of_blocks * 264
}

function distanceTravelledInFeet(start, destination) {
    let result
    if (start > destination) {
        result = start - destination
    } else {
        result = destination - start
    }
    return result * 264
}

function calculatesFarePrice(start, destination) {
    const totalFeet = distanceTravelledInFeet(start, destination)

    if (totalFeet < 400) {
        return 0
    } else if (totalFeet >= 400 && totalFeet <= 2000) {
        return (totalFeet - 400) * 0.02
    } else if (totalFeet > 2000 && totalFeet <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }

}