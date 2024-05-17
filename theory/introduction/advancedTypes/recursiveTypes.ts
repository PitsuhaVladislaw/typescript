type ListNode<T> = {
    value: T;
    next?: ListNode<T>;
}

const node: ListNode<number> = {
    value: 1, 
    next: {
        value: 2,
        next: {
            value: 3
        }
    }
}

console.log(node);



type NumberList = number | NumberList[];

let numbersList: NumberList = [1, [2, [3, 4], 5], 6];
console.log(numbersList);



type TreeNode = {
    value: number;
    left?: TreeNode;
    right?: TreeNode;
}

let treeNode: TreeNode = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 3
        },
        right: {
            value: 4
        }
    },
    right: {
        value: 5
    }
}

console.log(treeNode);



type StringList = string | StringList[];

let stringsList: StringList = ['a', ['b', ['c', 'd'], 'e'], 'f']
console.log(stringsList);



type NestedObject = {
    name: string;
    children?: NestedObject[];
}

let dataFamily: NestedObject = {
    name: 'Parent',
    children: [
        {
            name: 'Child 1',
            children: [
                { name: 'Grandchild 1' },
                { name: 'Grandchild 2' }
            ]
        },
        {
            name: 'Child 2',
            children: [
                { name: 'Grandchild 3' },
                {
                    name: 'Grandchild 4',
                    children: [
                        {name: 'Pregrandchild 5'},
                        {name: 'Pregrandchild 6'},
                        {name: 'Pregrandchild 7'}
                    ]
                }
            ]
        }
    ]
}

console.log(dataFamily);



type GraphNode = {
    value: number;
    neighbors?: GraphNode[];
}

let graph: GraphNode = {
    value: 1,
    neighbors: [
        { value: 2, neighbors: [{ value: 3 }, { value: 4 }] },
        { value: 5 }
    ]
}

console.log(graph);



type Tree<T> = {
    value: T;
    children?: Tree<T>[];
};

let treeData: Tree<number> = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                { value: 3 },
                { value: 4 }
            ]
        },
        {
            value: 5,
            children: [
                { value: 6 },
                { value: 7 }
            ]
        }
    ]
};

console.log(treeData);