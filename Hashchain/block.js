const Cryptr = require('cryptr');
const crypt = new Cryptr("secret");

function encrypt(string) {
    return crypt.encrypt(string);
}

function decrypt(string) {
    return crypt.decrypt(string);
}

function htoa(nbr) {
    return (nbr.toString(16).toUpperCase())
}

// var nbr = 0x123;
// console.log(htoa(nbr));
// console.log(nbr.toString(16).toUpperCase());
// console.log(encrypt(nbr));

class List {
    constructor(data, difficulty) {
        this.data = allocate(data);
        this.difficulty = difficulty;
        this.nonce = nonce;
        this.total = 0;
        this.next = null;
        this.prev = null;
    }
    allocate(data) {
        var salt = 0;
        var temp = data;
        while (!checkNonce(data)) {
            data = temp;
            data = encrypt(data + salt++);
        }
    }
    checkNonce(data) {
        var i;

        for (i = 0; data[i]; i++) {
            if (data[i] == '0')
                continue ;
        }
        if (i == nonce)
            return (1);
        return (0);
    }

}

class Block {
    constructor(nonce) {
        this.hash = 0;
        this.private = [];
        this.nonce = nonce;
        this.list = null;
    }

    createBlock(data) {
        if (this.list) {
            var ptr = this.list;
            while (ptr.next)
                ptr = ptr.next;
            ptr.next = new List(data, this.nonce);
            ptr.next.prev = ptr;
        } else {
            this.list = new List(data, this.nonce);
        }
    }

    printData() {
        console.log(this.hash);
        console.log(this.private);
        console.log(this.difficulty);
        console.log(this.list);
    }
}

var chain = new Block(1);

chain.createBlock("1")
chain.createBlock("2")
chain.createBlock("3")
chain.printData()
