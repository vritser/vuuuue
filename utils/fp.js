export function zipWith(f, [x, ...xs], [y, ...ys]) {
    return x == void 0
        ? []
        : [f(x, y), ...zipWith(f, xs, ys)]
}