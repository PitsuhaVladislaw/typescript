"use strict";
/*

const palette = {
    red: [255, 0, 0],
    green: '#00ff00',
    bleu: [0, 0, 255],
    //  ^^^^ sacrebleu - we've made a typo!
};

// We want to be able to use array methods on 'red'...
const redComponent = palette.red.at(0);

// or string methods on 'green'...
const greenNormalized = palette.green.toUpperCase();
Notice that we’ve written bleu, whereas we probably should have written blue.We could try to catch that bleu typo by using a type annotation on palette, but we’d lose the information about each property.

    type Colors = 'red' | 'green' | 'blue';
type RGB = [red: number, green: number, blue: number];

const palette: Record<Colors, string | RGB> = {
    red: [255, 0, 0],
    green: '#00ff00',
    bleu: [0, 0, 255],
    //  ~~~~ The typo is now correctly detected
};
// But we now have an undesirable error here - 'palette.red' "could" be a string.
const redComponent = palette.red.at(0);
The satisfies operator lets us validate that the type of an expression matches some type, without changing the resulting type of that expression.As an example, we could use satisfies to validate that all the properties of palette are compatible with string | number[]:

type Colors = 'red' | 'green' | 'blue';
type RGB = [red: number, green: number, blue: number];

const palette = {
    red: [255, 0, 0],
    green: '#00ff00',
    bleu: [0, 0, 255],
    //  ~~~~ The typo is now caught!
} satisfies Record<Colors, string | RGB>;

// Both of these methods are still accessible!
const redComponent = palette.red.at(0);
const greenNormalized = palette.green.toUpperCase();

*/ 
