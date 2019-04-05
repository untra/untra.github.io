
const FULLSTOP = ''
class RadixTrie<T> {
    public entries : T[] = []
    private tree : object = {}
    constructor(words : T[]) {
        this.entries = words
        words.forEach(word => this.insert(word))
    }

    insert(word: T, tree: object | undefined) : boolean {
        const trie = tree || this.tree
        const trieSiblings = Object.keys(trie)
        const wordString = `${word}`.toLowerCase()
        const length = wordString.length
        let index = length
        // iterating over each substring of the given word
        while (index--) {
            const prefix = wordString.substring(0, index)
            const trieValue = trie[prefix]
            const trieChildren = Object.keys(trieValue)
            const isLeafNode = !trieChildren.length
            // if the prefix substring is already in the trie...
            if (trieValue) {
                // ..and if it has no child nodes (dog -> dogs)...
                if (isLeafNode) {
                    // create a new subtree
                    trie[prefix][''] = {}
                }
                const suffix : unknown = wordString.substring(index)
                return this.insert(suffix as T, trie)
            }
            // ... else try a smaller substring
        }
        // the word entirely doesn't exist in our trie. Add it
        trieSiblings.some((sibling => ))
        return true
    }
}