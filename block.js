class Block {
    constructor({timestamp, lastHash, hash, data}) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

}

const block1 = new Block({
    timestamp: "01/01/2022",
    lastHash: "lastHash",
    hash: "hash",
    data: "data"
});


console.log('block1', block1);