/**
 * Jan 28/31 - The Office Supply List!
 * What's the output of the code below - and why?
 */

const supplies = ['Pens', 'Notebooks', 'Markets', 'Sticky Notes', 'Hightlighters'];

supplies.splice(2,1,'Whiteboard Markers','Erasers');

// array.splice(index,count(to be deleted from the index),items to add)
console.log(supplies) //   ['Pens', 'Notebooks', 'Whiteboard Markers','Erasers', 'Sticky Notes', 'Hightlighters'];