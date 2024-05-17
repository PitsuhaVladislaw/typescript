"use strict";
var node = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3
        }
    }
};
console.log(node);
var numbersList = [1, [2, [3, 4], 5], 6];
console.log(numbersList);
var treeNode = {
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
};
console.log(treeNode);
var stringsList = ['a', ['b', ['c', 'd'], 'e'], 'f'];
console.log(stringsList);
var dataFamily = {
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
                        { name: 'Pregrandchild 5' },
                        { name: 'Pregrandchild 6' },
                        { name: 'Pregrandchild 7' }
                    ]
                }
            ]
        }
    ]
};
console.log(dataFamily);
var graph = {
    value: 1,
    neighbors: [
        { value: 2, neighbors: [{ value: 3 }, { value: 4 }] },
        { value: 5 }
    ]
};
console.log(graph);
var treeData = {
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
