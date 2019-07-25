// import { zipWith } from '../utils/fp'
const { zipWith } = require('../utils/fp')

function ip2int(ip) {
    // 10.0.1.1
    // 0000 1010 0000 0000 0000 0001 0000 0001
    const ints = ip.split('.')
        .map(x => parseInt(x))

    return zipWith((x, y) => x << y, ints, [24, 16, 8, 0])
        .reduce((z, x) => z + x, 0)

}

console.log(ip2int('10.0.1.1'))
