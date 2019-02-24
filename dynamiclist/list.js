class List {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function main() {
    var head = new List(0);
    var ptr = head;

    for (var i = 1; i < 8; i++) {
        head.next = new List(i);
        head = head.next;
    }
    while (ptr){
        console.log(ptr.data);
        ptr = ptr.next;
    }
}

main()
