var DATA = [[1e3,'K'], [1e6,'M'], [1e9,'G'], [1e12,'T'], [1e15,'P'], [1e18,'E'], [1e21,'Z'], [1e24,'Y']];

function numterse(n) {
    if (typeof n !== 'number') {
        n ^= n;
        return n;
    } else {
        for (var i = 0, len = DATA.length; i < len - 1; i++) {
            if (n >= DATA[i][0] && n < DATA[i + 1][0]) {
                n /= DATA[i][0];
                return n.toString() + DATA[i][1];
            } 
        }
    }
    return n;
}
