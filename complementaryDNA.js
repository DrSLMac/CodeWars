function DNAStrand(dna){
const compStr = dna.split('').map((nucleotide) => {
  return nucleotide === "A" ? "T"
            : nucleotide === "G" ? "C"
            : nucleotide === "T" ? "A"
            : nucleotide === "C" ? "G" : null
}).join('')
return compStr
}

console.log("DNAStrand('AAAA'): ", DNAStrand("AAAA"))
console.log("DNAStrand('ATTGC'): ", DNAStrand("ATTGC"))
console.log("DNAStrand('GTAT'): ", DNAStrand("GTAT"))