
// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
//       assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
//       assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
//       });
//     })

const DNAtoRNA = (dna) => dna.split('').map((nuc) => nuc === 'T' ? 'U' : nuc).join('')

console.log("DNAtoRNA('TTTT'): ", DNAtoRNA('TTTT'))
console.log("DNAtoRNA('GCAT'): ", DNAtoRNA('GCAT'))
console.log("DNAtoRNA('GACCGCCGCC'): ", DNAtoRNA('GACCGCCGCC'))