function solve1(input: string) {
    return solve(input, (dance) => {
        let i = 0;
        for (const shout of dance()) {
            if (i == 9) {
                return shout;
            }
            i++;
        }
        throw new Error();
    });
}

function solve2(input: string) {
    return solve(input, (dance) => {
        const counts: { [number: number]: number } = {};
        let i = 0;
        for (const shout of dance()) {
            if (!counts[shout]) {
                counts[shout] = 0;
            }
            counts[shout]++;

            if (counts[shout] === 2024) {
                return (i + 1) * shout;
            }
            i++;
        }
        throw new Error();
    });
}

function solve3(input: string) {
    return solve(input, (dance, columns) => {
        let max = 0;
        const seen = new Set();
        for (const shout of dance()) {
            const state = columns.map((x) => x.join()).join('|');
            if (seen.has(state)) {
                break;
            }
            seen.add(state);
            max = Math.max(max, shout);
        }
        return max;
    });
}

function solve(
    input: string,
    callback: (
        dance: () => Generator<number, void, unknown>,
        columns: number[][]
    ) => number
) {
    const columns: number[][] = [[], [], [], []];

    input.split(`\n`).forEach((line) => {
        line.split(' ')
            .map((x) => +x)
            .forEach((x, i) => columns[i].push(x));
    });

    return callback(dance, columns);

    function* dance() {
        let i = 0;
        while (true) {
            const c = i % columns.length;
            const next = columns[(c + 1) % columns.length];
            const clapper = columns[c].shift()!;
            const modded = (clapper - 1 + next.length * 2) % (next.length * 2);
            const insert =
                modded < next.length ? modded : 2 * next.length - modded;
            next.splice(insert, 0, clapper);
            yield +columns.map((x) => x[0]).join('');
            i++;
        }
    }
}

const example1 = `2 3 4 5
3 4 5 2
4 5 2 3
5 2 3 4`;
const example2 = `2 3 4 5
6 7 8 9`;
const example3 = `2 3 4 5
6 7 8 9`;

console.log(solve1(example1));
console.log(solve2(example2));
console.log(solve3(example3));

const problem1 = `3 5 3 2
2 5 3 4
5 4 5 5
2 3 3 4
4 4 2 2`;
const problem2 = `70 33 75 97
69 63 56 24
54 43 15 73
51 30 26 89
86 76 83 80
92 10 68 94
42 82 61 20
22 86 27 70
68 79 13 32
43 25 15 58
31 62 63 29
79 22 19 54
98 57 65 58
45 57 25 49
71 54 51 18
41 15 83 47
15 73 60 44
53 32 88 83
76 80 90 81
25 71 78 55
91 87 64 34
41 38 56 82
62 28 66 31
66 34 77 40
79 19 29 79
40 88 46 19
11 26 13 72
60 30 24 34
10 44 35 42
77 53 14 77
74 35 22 48
28 16 73 33
16 36 45 48
56 64 78 26
65 31 41 35
27 76 65 53
78 31 93 39
43 14 87 22
37 23 98 52
13 11 53 45
20 21 19 96
14 37 48 55
49 93 28 68
50 51 38 43
55 70 21 64
61 20 73 81
52 28 91 47
89 12 17 23
31 39 33 75
90 18 16 40
49 96 21 30
44 58 36 28
24 59 11 62
96 29 25 87
47 16 84 81
67 64 48 17
15 20 11 74
37 37 69 23
35 50 41 84
82 90 46 56
32 50 74 23
80 85 36 29
65 98 58 33
34 54 18 21
39 97 60 72
24 46 59 36
41 95 52 94
96 66 38 67
88 25 19 57
35 32 46 59
18 39 95 55
30 75 86 12
61 99 42 42
89 84 57 97
40 26 16 39
80 12 27 99
18 72 95 12
11 37 85 86
38 92 24 78
50 40 67 76
72 29 52 69
17 45 98 91
44 99 10 32
85 33 84 10
88 46 45 70
44 99 67 71
92 68 93 51
59 62 26 94
43 94 75 69
77 34 49 20
21 14 36 60
91 83 74 61
12 90 97 30
81 63 95 87
13 47 38 27
71 66 13 85
17 82 92 42
89 63 22 23
17 93 14 27`;
const problem3 = `1005 1001 1006 1000
1000 1002 1004 1001
1007 1008 1002 1007
1002 1000 1009 1002
1003 1007 1009 1007
1003 1005 1001 1002
1001 1008 1000 1005
1000 1007 1008 1008
1006 1009 5073 1003
1002 1006 1005 1001
1001 1004 1001 1006
1001 1007 1009 1002
1007 1001 1001 1008
1000 1002 1001 1009
1002 1006 1002 1003
1004 1002 1006 1001
1002 6667 1002 1000
1006 1005 1009 1001
1004 1005 3274 1008
1000 1007 1007 1000
3374 1001 1009 1006
1002 1002 1006 1000
1003 1009 1005 1008
1001 6826 1001 1002
1000 1009 7650 1002
1004 1001 1001 1000
4978 1009 1001 1007
1000 1007 1008 1008
1005 1007 1009 1001
1004 1007 1009 1002
1008 1007 1008 1008
6500 1007 1009 2062
1004 1001 7877 1002
1006 1000 3477 1009
1004 1006 1004 7973
1000 1009 1003 8274
1003 1005 1006 1005
1007 1006 1001 1001
1006 1004 1009 1001
2283 1006 1005 1007
1004 1000 1009 1005
4091 1008 1002 1005
1008 1003 1005 1000
1003 1001 1002 1009
1007 1005 1009 4114
1002 1004 5708 1000
1004 1002 1007 1006
2944 1006 1008 1000
1009 1009 1001 1000
6974 1005 1001 4806`;

console.log(solve1(problem1));

console.log(solve2(problem2));

console.log(solve3(problem3));
