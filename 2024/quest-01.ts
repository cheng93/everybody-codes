function solve1(input: string) {
    return solve(input, 1);
}

function solve2(input: string) {
    return solve(input, 2);
}

function solve3(input: string) {
    return solve(input, 3);
}

function solve(input: string, groupSize: number) {
    let potions = 0;
    for (let i = 0; i < input.length - groupSize + 1; i += groupSize) {
        const group = input.substring(i, i + groupSize);
        potions += [...group].reduce((agg, cur) => {
            switch (cur) {
                case 'B':
                    agg++;
                    break;
                case 'C':
                    agg += 3;
                    break;
                case 'D':
                    agg += 5;
                    break;
            }
            return agg;
        }, 0);

        const creatures = [...group].filter((x) => x !== 'x').length;
        potions += creatures * (creatures - 1);
    }
    return potions;
}

const example1 = 'ABBAC';
const example2 = 'AxBCDDCAxD';
const example3 = 'xBxAAABCDxCC';

console.log(solve1(example1));
console.log(solve2(example2));
console.log(solve3(example3));

const problem1 =
    'CAABCBCBAACAACCBACACBCABCBCBCACBACBCACBAABCBCBCAABCBACABBBCCCBCBABACCCCABABCBCCBBCBCCABACBBBBABBCBACBBACABBCCBABAACCCBCCCAABCAABBCABBAACAABBAABABBABABCABBABCBAACBCCBAAACCAABBAAAAABBCCCCAACCBCCAAACABCBCAABBACBBBCACACABABCBBACBBCABCCBCABCBCCABCACACACBABCABCCAACBCABAABCBABCCBACBCAACCCCACCCACCBACBCCACBCCCABAAAAAACAABCAABBCBBAAABBBABABCCBCCBCABBCBCBCAABBBCAABABABCBACBAACBCAABBCACBACACBCABBBCBBACACBCCBACBACCBBBCCBAACCCBBABCBBBABCACAABCCABBABCCABAAACBAABBABAACCCCABBBCACBBAAAABBBBABCAACBBBBACBBBCCBACCCCCACCCACACCACCBBBCAAACCBBABABCAACBAABBACBACCACABABBCACCABCACBCACAACBBACACCBCAAAAAABCCCABACAACBAABBCAAABCBACABCABBCACACBCACCBBBCBCBACCBACACABCABACCACBCABACABABCBBBAACBCBBACABBABCCAAABBBBBCAABCACCBABBCAABBBBBCACCABACBCBCBBCABABCCCABABBBBCBCAAABCCCACCCACAAAACAACAABBCBABCCCCABBCACBCAACCCACABAABBCACBABCBCBCCBCBACCBCABBCCCACBACABACAABABCACCACBABCCCBBCBCBCBBAAACCABCAAABBBABBCABBBCBBABBCCABBBAACCBCCCCABBCABABBCCBACCABAAABBAACABBBBACBCACABBABCBBAABCCAABAAACBBCBBABBACACBACBCABCCCABACCBBAACCABABBABBBAACABCA';
const problem2 =
    'DBBCDAACBBDBBBADxDDxABxCDDDBCBCDCDAADCCCxACDDACCDDBCBCDCDxCCBxCAAACAAxxBDCAADBBDCDADxBCCBDABCCAAAxCBDADACBADAxAABCABCxCCADDBBDDDDDCDCDxCCxDDAxCBDDACDBBDDCCCBDxDBCBCACxxDxBADBBDAACDxCDCxCDBCCCCDDCDxCBCBCCDDDxCABAAAAAAxDxCxBCCAxDCCCAADCACDxADDABDCABCDDAADABCBCCBDCADCxCADCDCCDDDDCxCxBCBDBAxDxCBBBBCDBAxCCxDCCBDBCDDCDxACCxBDCBADAxxxCCCDDCxBBACBADADACDxDCDCDABCCAADCDCACADDxBxCADBDCDCABDBABCDACDCDBBDBBBDACCDDDDCDBCAxCAAACBBDBDxCBCBDBDBxCBxDxAABCxCBCBxDCCCBBADDCxCDCBDBxxxBxDCABCDBCBCCADCCCCDCADDACBBBBADAABADxCCDCxBAADBADABxADADAABBCxDADBBxBBDDAxDDCACAAxADCDCDxDAxCBACBBCAAAACCCDBBDABDCDDBCDxAACxAAAAxADAACCCCCABDxDBCBDBBBDBCBDDAxBABBCBCAAxxDBCxDABCDDCDACABxCDCDCADDDxCDDCABxAxAABBxADBCABBDBABDxAACCDCABxCBADAABCxACADCDDAxACACABBACCDDDBBxxDCCDDBABBDCCAxABACCBAxBCBDADCCCBCBCBAABDDxCAxBBDBCDDCxCDBDADDDDCDABDDAAxCAxBADCCCxCCCDAABACDDABxDDDAAAxBABCxDxADAABACBABABAxADCxACxCCDADDBADBCBDCDxBAABADDBDCBxBDBCCDCABDAAABABxCAADxAxBxCBBCDBCCDBCxDCBCxABBACBxBCDCABBBDBBADxCDDCDxBACxADAxBDBDAADDDxBxCBDADxCACxCACCDDxCCDxADBABBBACBCBCBDCxAADCACDDDCxDBBDDxDABDDCADADxxDADADADBDDADBDCDADDAADDADCBCADxDDDBBxACBBxAxCBDCBCBDBABBCBCBADCBACAxDADxCxABBBABACBADDCBADDDADADBAxCAADBCBCCCAxDCxABCACBABxCCCCCBCBAxBxCCAxDxBABBDBABxDDDDAxACDBCCCCDDACDDDBACDBABCBDDDDxBBBAAAABxBAAAxBBDCDCBDDDCDAADADAxAACBBABCAAxCBCADABBDCDxACCDABxAxCBxxADBCCBCDBDCCCDxDxxCBDCBABCxADAADAACCADxADCBBABCDCBDCDCBDDCDxxCBCACDACBAABCDBBxDDADDDABCDCDCxxCBDDCBCBxxCDDDBDBCDAAABBDAACCxDACCxCBBCCDDxCDBxABDCAxDxxCCDCACDDCABABDABxAxxBDCAACBACCCBCBBxADABDxCABBBxCABDCBxBBADCCBxBABACDCDDACxCDABCBDCACxxAABxCCCBDCBACBBDxCDDCxxCCDDBBDBxBxDxDBCxDBABCBACBDxDAxCCBDBxBBBxDAAxAxDBCxCADDAACADAABDDABxCCCBxCBCDDBDCAxBADCDAAADBDDBDCCCDDBCBxDACBxxBCxCCACDAACDCCCADBCCBCABDBxBDACDCADDDCCAABBAxBCBDBAAxDDBDBADDxAAACCDBxAAADDCBCxCABBDACxABABCADADCCCBBCBBDBCAACABADDCCDADAAxBBxDBCBDDBDxAAABCCDAABCBDAAACDBCDBDADxxAACDDBBCAxCBAxABBCBCDCACADCAxxDxxxxxxxCCCABCBBDADxACCxBBDBCBDBBCDCADDADDBBxABCxADBxACxBBACAADACDAACBCBCDBBCACxDAAxCCxDADDAAAAxxDADCDDAAABBCDACBxCDBABxDCCBCCxxCCA';
const problem3 =
    'CCxDxDBDCxxxxxxBCADACDCADDBDCBxDDCDABCADCABAxBBxDBxBxCxACDADxxDBxBBBDACBACDCCCACxBACDCCBABxAADxxBAxBBCCDCBADBDCCBxAACCxDCDDDxBCACCCxCBxDxCAACDxCDxxCxABCCBCCxBDCDBBBAxBBAxBCDBBBxCxBAACDxxBxDACCxCxABBBACAxAxCCCDxBxDADxDDDABxABBxACAxADCDCDxBCxABBCDADxDxAxABADDBBACBCAABxAxxBDCADDCDDxBABCxxACxACBAxCCBxAADCxCxDxADAACxCBCABxCBBBAABxCDBACCCBDxCDAAxCABAxCCACBAxAAxxDBABBxxCxACADABDxDxBBDDCDAxCDDDDxAxDADBABDBDCADDBBBBACDxDBxABCCxDACDDBBCBCxCxBDBBCBADDDxADCCBCCxACDDAAADCBCBCADDABAxBCABBBACDBACCAxBxCADDBxADxxADABBBCxABDCBxACABxCBADxCCDABCBCxCDxAxBCxBxDDCDACCCDxxxCAxCDCxxDBBxDxBxxCxBDDBCxCDCAACDxCDxxDABACDCBBAxABBxBxACBxADxxBBBCCBxCCDDCCBDCBBDBBCCDCxDAxCBxDBADCABADDAxBBDAxABBCADAxCBACCCDCAxxBDBBAxCBCBxAxDDBACBAADxBABADCCDACxxCxxAxCAABDDxBBBxAxDBADAADDBBDDAxDDBxBABCBACDBACDDBDxCCBACADDBABCBCCBBAAABxCxxxCACDBCBBxDABBxABxDxCDABDAAADCDAxCCCDBxxBBCDBBDDBxADACCACCAxCDBCxBDBBxCDxCDxDDxxDAxxABAAAxABADAxBCAABCBxBBBCDDBDBxBDCxxCAAxACDCAxDADCxCCCDCCDAxAxDDxCxACADBBDBDxBCxDxCDCDBxxBxDBBABACxxBDxCBxxDAxDDBDxCABDBxCBAAxAAAACCDDAxBxAADxCBAABBBCADCBxABABxBDBDDADBxxAACxBBxABCCBxxxxBDACCAxBACADxBxDDCxCDxCADxCABBDDCBxDCxDxBAAxBADBCDADCABACxBBDDAADCxCCxDABDDCxCABABAACCDCAADBxAxADBxxCABCABAAADDBCADCDBBxCDxDxDACxACCDxCDCACBBBCDBxDABxCDBCAxBxDxDCDCDAxBxDxxxCBCDDABCABxCDxBBADxBxDxCDCDDADxACxDxxBCCABCDACAxDABBDDCACCCCxBBDDBDCDBBBAAADxxCxDCDxAAAAAxDxCDDAxAxBBACDxCDDxCACCxCADDACDABDBxBDxADCxADDBACDDxADBxxABCBDDBDBDBDBxCDCxADBADBDCxDxADDBBABACBxBxDxxCCxBABxABAxxACxCDCDDDAxCDxBCBBCCxCAxCCACBxxCDDCAxCxCCBxDCDBCDBDxDxDCBCAABDDBCCADCBxCACDBBCCDDxBDCDxBBBCDBCCAxBAxAABDDBCxBCCBCxBDxBBDDBBxBBBCxDBBABABBDCCBCAxAxCCDACxDCBxxBBDBxCCxAxBCCAxBAxDxADxBBBCxBDBxCBxxCBDADxxDxCDxBxBBCCBCCCxCAxxBBxxxDADCCDDCCxCBxBxAAABCACxDDABCDCCxCACAABABCCxDDCBDACxBADCDCBBACDBDACDDADAAxACxDCBBDDCBDCABCCDBxxxDBxABxBCCAxBAxBxAxxBAxDBDxBBBCCCACDBCBAxABxDBxDDxCDCCBBABCDBCBBxACBDCCxDDCBBCABACCBABCxCAxBDxCAAACCDCxCDDBABDCBxDDCDDDBCDDCxCCxAABCDxAAAAxxDCAxCxDDCBDDABxxCBADxCxDxBBDBAABxCCCAABABCDxAxCCBDADxCCDADBAADxDBDBADDxAAxxCBBACDBBAxACACBBDAAxCCCCxCBBxABAACBDCCBACDDxDBBDBDDxxDDxDxxBxADCDCABxBDxxxBCACxxBCAxBDCDCAxDAxxCAACCBDxBBxxDxxBBCCCCCxDCAADxxxDBCCCCBBBBADCxCCxBAABDCCCCBDDBxBCCACDCDxDDDBCCCBBDCCAADxBADBCAxCBCCBCDxACBDDCDDBxAAACBBACACxBDAABxDACDxBCxDDBDxCBAxAxAxCxCBDCxxxDBxxxDDCACCABBAACDxAABxxDxACABBAADADCBxBxADBBACDCDCCBCCDxDABDDBxDDCxxDxBADBxxDCxBDBxBDxADCBxxACBDBABxxCCBxBDCDxBxCDxxBCBDBCDCBxxDAACxDxCxxxDDDxCCCxxDDDCDBABxABxBCCBxABDCDACxDAAxCBCCBDBBABCxDCBDACxDCCxxBDADCBADDADxCxCABCDCDDCBDCBCBCBADBCCACAABBAADCCCCDABBDxxAABAAADDDxADBABxBBxBBDCxDCCABBAACxDACDxCDDDABBxBDAxAxxBCDxxBDDxCAADxxxxBBxxCBADCBDCABBAxADCCxABxCCCDDDxxxBBCAxxACBDxxABCCAxABxCABCxCBBxxDBDBBDxxDCADABAxABBBCDxDBBxBBCADxABxDDBABDDAxDCDBCCAACBDCCBAxCBDxACxBxDCBBCBCDxDDCABCABDCACADCDBBACBCDDDxDBCAxBABCxABCxCCBBBDBABBBDBxDDDBDCAxCADxxDDBCAxBBxxABxABCDBxCAAxDDBxCABCCBCxxAABCBBDDxBxDAAABBCDACxBBBBxxBBxADxAxDxDxCCDDBCAxBxxCAxBDAxDDxDBACBDACxCBBDCxDDCxCBDCxCAAxAxAxDCxACDDBDxCCAxDCCBxBxDDxCACBAAxCBDDAAADABDADDxDBACAACAAxBxxBAxxxBBABCBDCBxxxxAxDxxADDxABDBCBACxBCBCCxCBBxBADBDBxCBxACCxxxCCxxBxxABCDACBAxAxCDxAAADBBxxCxDxDDxAACCDCxCBABxxABxxDCDBACxACDCACDBBBxAxDACDxBCACxBxDDBDDAADCAxADADCxDxDACBAAABCBBxBAAxBCxADDCxCCBAxDBAxCxADBBCCDDBxDxxABDxDABBDCDBBxADxDDDBDBxDABxxDCBxBCCAAxAxCAAxCDxxCxxDDACABBCDAACACDCAACBDBADDxBCxCCCCABBCDCAAABBDBDCDBBCBCDxxxxADBCBADAADCDDCADxBBDAABAxACDxDADBDCDCBxxxCDDBxBBCABCAxBBDDACCCCDBCCABCDBDCxABAAABACCABxBDAxxBxDDCBBDCxDDBCDBBCDBxBCBxBxDDAADCACBACDCDxxDBAAxABAxDxCAAxAAAAACCBCDBCCCxAxxDDDBBDACCxBxDACDAAxDxDBDDDCBxCBDDCxxxCDACCBBDBDxCDABDCABBAxBBDxDDxADCACBBDBAAABCCAABxABxCAxxxBCCBADDBBCCABBADBxBBxxBADCDxAxDAADBxxBCAxCDxDBCDxxBCDACAACCACBBDBBABDxBBAxxBDxACxDBAxxCAACxxxBCDxADADAxBCAADBBAADCDxCBCDCAAxCxABABCCCDxADxBCBCCCCDADCABCADAxxCAxDBBBDxxxDDDBBBDABBBxADCBxABAABDCBxBDxAACxxDBAABCDBBAxDxBDxDCxxxxDDBCACAADCAxCCACADABxCADBCBCxDBCDCCCAAxBAxCxCAAACxDABDxxDBBxxDAxABACAABACDxxBBBCBBBBCDxDCACDCBACxCCCDxBAxxBBACxCxxCDBCABBDCBxxACADDBDBCCDDCDDCAxAACDBCDBBDxDDADxDDACCBxxAxxDABAAACCCBCxADDAxABDBDxDDxDDBCBCDBBCBDAxDBACxxxADAABDCxAADDADxDBCCBxCADABCxxACCDAABBxBDxBAABCADDxBCDxBDAxDDDxADCAAAxBDBCDBAxACCxDBxCCxDxADDxxAxADDADABBABxDxAADCDxxxxDABAxAxDBxDxBxBDxABBCACBDxBAABCBDBBxCCADBADxCBDADABCBDACBDBAABxBCxBADACADxABCBCCDxCxDxxAxCxCCxDCCABDxDADDDDAAxABBxAxxCDBCBxxDCxxACxxCDCxAADxBBxBAxDABBAxABAxBxCCBDBDBDxxCABDDCxAACBxBCxBDxBCDCDADCxBADDDDCDxCCxBBBBxAAABxBBBxAABDDxDBCAADDxxBCxxDxCCBCDCBCDDCCACABDDBDCxCDAADxCDBBxADCDxBDxBCADABCACxDCBBADCCACDxACDAxxxCDBAxBBBxDADADCBDCDBBxAxADBDCxxCDxDBCCBxDxBCABCxBxxBDDBxABADxAxCDCBACBxBCCACCABBBDBDCxDDBDxDADAAAABBBBAxCBCBxDxCBxBCDDBBxAxxDxDDBCxDACACDDxAADxABADCDDxDADDxDxxDDCBCABDBCDAxBxCxBxCxxBDAxABxxDDDACABBBxDBxCxBDxAxADCADADADDCxCBBBxxAxDBxxxAABxxxBDACABxAAAAxDxBCDxxxxADxxxDBCCDCDDxBDCBDBCxDDABxxxAACAxCADCDBDBBCAxDxBBxCxxCAABDCCxAAACBAxBDAAxABCADABDCABxAxABxxBCAxxCBxACxCBCBAxAABABBDDAACDxCCBCBCAxAAAxCDBACxxDAxCxCBxCABxDAADCBACAACCDDDBADxBABBDxABAxCDDCBBDxCCBACCDCxADABDCAxBDxCBABAxBxCADDCDCDDxxACDCCCxCABxxDxADCACCBxBDCAxxxBDxADACCAAxAxCDDBDBAxCDAxDDxBDCBBBCBDAxBDCDADAxBAxDBCxDBBCCDCBBADBCDDCxxABxCDBBDDBCAxBDCABCCADABCxxDCDAACBBxxDCBAxDCABxBCCxxDDACDCDBBDxBCxBABDAxCBCADAxACADBxxAAAACCADBxxCBCCAxADAADCCACBDACBDAxBBxBACxxxDDDCDDCBCxCCDDDDDDCACDDCAxxAxABxAACADxDACABCABDDDxAxxCBBxACCADBCBBBBBADxAACADCDDACxACAxCxxCAxDADDDBBxADBCABBDDDAAxCBDCBDAAxAAACDCxBBBBBxBBBDBADxABBACDBADxCxBxxDCBCBCCxBADCABDDBDBBxCDDxDxBxCxCBBBxBAxABCCDADAADABBCDADxDDCxBDDABxxADAxAABxBDABCxBBDDDCxDxxCAADACxxCDDCAACxCABADBBCxDDABxBCDxCADxCAxAxDDDDxBCxCBDDxxBCxDDDCDxDACCAAABADxxADACDBBDAACCxxAxBxCBCxAxCDBAxCDxCDAADxBDAxBxCBABCBADCACBCCDDxxBDAxCBDBAxACABxDxDDBxCADxDCDxDxxxCDDABxDABAxxDxxDDDDCxCxBDABCDxDxDBBBxCCADBxDACxCBBCACAACDCCCDACCBDCDCAACAxBBCCxBBxABDDxxCCCxBCCAAxxxDBDADACBDABxADDCxCxDCCCCBAAADAAxACCDDBBBCDACACxBxDDBDDxBACCBxCBBDCACBAxxDxDDDBxCCCCCCABBDxAxBxCDBCCDABCCABCCAxDxCCDDACDBBBDBADxDCBCACBCCBABAxCBDDBxAxBxBBCBCCDADxxBxDABDxABCBACDxCxBDDABACCCDCxxBxDACCBABDDxCxCCxxxxBDxBDABCCxBDDDBBCCBACCAACDxACBCxBADxxxABxABxDBxDxCCDBCCACBBxDCCCxBxDAxDDBACCABCCDCACBxCCABxCAxDxBxCADBxxDDAxDADBACAADABBDxDBAxDAAxDDCxBxAABCABBBCDxAxBBBBBDDBADBBBDACCDCCxDxxBBABxDDBDDCxAxDCBAxADBDxDBBCBCBxDDxBABxxBDxxCDxxACBxCACxCDCDBABDABDABCCBCDBACCDDADDxADAAAACDABAAAABxxxAAxDBAABxDxBAxxCACDDCxDDADDBAxDBBDCxxABCACACxBBBCBCDBxDDBAABABCDCBABDBCxBDAxCDDBxxBBACACAxDDCBCADABABCDBCCAxAABDxACBBBCxAxBDACCBCBAADADCDxADDDBBCBxBDBCDDBBxCDACCCxCCCDAACDADxDAAxCBCDxCCDCxCACCDDBxDxDCCAxCxCBCDDxBAxBBCCBxACDBCCBCBBACABAxAxADDACBBADxxACACADDxxCAxADACBDCBBCBABBBCDDDxxBxxACCDCDBADDxDxBADBxDDDDAxxBBxABDABBxCBBxADBxCDAABCDBCxDCxxDxxCxxABCDABDxDDxxDxBAACxCAADDBADxxxBCCxDDABAxBCCADxBACAxDBBACBDCDxADDDBCADxCAADCCDCBDxCCDxCCxABxBADxBxDBBACBCxDxBxxDDCBDCxBDADDACCxBDCBDDDCDxDDDBBDDBCBADAABDADBBBxBxAxCBxBAxBCxxxAxDBxCCBBDADBDBBDDDCBBxCCxCBCCCAAxDABxCCxxCBBABACDxACABxDBBADAAABxBDxxDxAACxBAAAABBACABDDCBDAABDxxDAADBxCxCBxxCxxDDAADADxDAAxCxBAAxBxCACBCBBCAAAACCACACACDxBCDDDxCDBACDDDCAABBAAxCxBBDDxDCDDxDxCBAxADxxxADDDDBCCDDxABABBADDxDACCxAACAADxACADCAxBDAxDAxxDxDBBAxxBCxADCDCBCACDADDDAxDAACADCDAAxAxCDDxAACCxACCxCCxCBDCBDAxCCBxDxDACAADxCADxDCDxCDBBBDxxDDxCBBxxCDxCCBDCBDDABCxCCBBAxBCAxAxDCCCBBBCCBDCxBCCBDAxDCCDCxAAxBDCBBBAACBDAAADxCADxAxAxBDACAxDDCBBxCxCCCCxBDBADAACDCDDAxCBBAAABDBDAACxxCADBDBxBBBCBABDxACDDBDDABxCABAAABBCDAxDxAxxDAxxDBBDCxADDDDxBBAABADCxCDCABCBxDABxBDCxDBCDADCCDBDDxCAxADxCxCBADBxxDAADCACBxAxDCDCBCCCADxABCDBDBDBCBBCAxBBDDBBxCDACDDCCDxxCBCxxACxBxBDDDACACBADABxADCDDADBABCCBAABxxAAAxxxxBCCCCDCxxBCBABxCABxCxBxCxxBDxCCxDBDBADDBCDAAAxxCAxDCAxCABCACBCBADxBCACCBxDxDBADxAAADDBDCxxCxBCBCCCABBxBDDBCABABxxCBDCBACCACDBBBCAxBABDDBCCDAxDBBACCCBDxCxAxDxAABCCACACCBDDDAxBDDCBCACAACDBDCCAxDCACDDBDBABBCABxBBDBDBACxDxCBBACDCAADBxADDDxxxBBBBCBCxBxBDDADDxBCDCBDABACCAxDDAxAAABADDAxBxDBxBxDDDADAAxxxABDxBCAADAACABAxDxCDDBDCBCBxxCCDADDABDBCBDADxDCACDxBBCCADAxCBCDDBDDABAAAADCCCxxxxCAAxDCxxAxBDDxACBBBBBxAxxDBABBCCxxADDAADDBxCCxDxABBBCxADxDBBADxAxCAxAAAxDBCxDDxDBxxCCBBxxxxBCADBAxADDDACxxCxAADCxAAACDDBAACABxBCxxxADCxBCBBACCDBDDADADDxxCxxADDBBBCxxCBxADDABDDDDADADCBDCCxxDCxDDCCBxBCBAAAxDDACxADxADCCBDACxBBCADCDBCDBCADAxAAAABxCDAABDBABBxxDCCxDxAxBDDABxCDCCxCxBxCCACCCDxDDBAxxAxAxCBADDDAAACCBDAACDBBBDBDxCBBBxCBCxCACADDAAADDDDCBxABBxBAxAxxCxBxCAxAxCxDDBxBCxBCxCDxDAxDCxDACBDCBADCxBBDDBxCBxxxDxBDxBCCADBxCBCCxACBxxCBDADCBAxxCxxAxAABACxBCCxACBDBDDDADBBBBBCCDxBDAADDDACDBABBBCCxABDABABBxDAxDADxCBDBDAAxCBADBBBDCxADAAxDDBDxBBDBDBxCAAxDADxBxBCBAxBAAAxCxDDABADCBBABBCCBxBxACABCACDABDBDxADCAxCCxDxCCACxBAADDBxCCBCBDDCDxBBBDABCCxDCDACDDACACCBAAxDCCDxBABABAxACDBCBABAACCDDBBABDADACxDDDACBCDxBxDxCCBDCCBACCBxBABxBCAAxACBCDxBxCDDxDABBxxBBBxABCxxCxADAxBDBDACCCABxAABADCCBADCDADCADCDAxDDDBBCCBBCBBxABBBxxxDCBCDAxADxCxDAAxBBxCxCACBxxCxBCBxBACCxxACDABCBxBDxDAAAxxCBACDBBABBBxxBBBABxDxxxCABBDABDACAxCAxxCCxBAAxDCBCBAABCBxBBBCxDxDABABACDxDxADBACDACDCBCCDCxCDCADBCxxABxCCBCDAxBDCACCADCAADADBxBAxBDxACBACBADAAxAxxBxBDBDBDACxBCDCDBCxxCDBCBxxAABxCxBCCDDBDADCxCCCxxDDxDACBBABxADBxDDDxxCDDDxDxBxBAADCDCABDxCDBBxBxxDAxxCDBBxCAAABBDBDxxCBABAADCxAxxxDDACCxxCBxABBCADACCxBCBABDCDADABCCDBAABBCxDBxxCBBDxDABBABBABxCCCBADCBDxBxxAAxDAACDBxADBCBDACBBBBCDCDCAxxDCADDADACxCCCxxxD';

console.log(solve1(problem1));

console.log(solve2(problem2));

console.log(solve3(problem3));
