var DATA = [[1e-24,'y'], [1e-21,'z'], [1e-18,'a'], [1e-15,'f'], [1e-12,'p'], [1e-9,'n'], [1e-6,'u'], [1e-3,'m'], [1e-2,'c'], [1e-1,'d'],
           [1e1,'D'], [1e2,'h'], [1e3,'k'], [1e6,'M'], [1e9,'G'], [1e12,'T'], [1e15,'P'], [1e18,'E'], [1e21,'Z'], [1e24,'Y']];

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
