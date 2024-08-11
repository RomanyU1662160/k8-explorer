import {
  cloneObjectCode,
  cloneObjectDescription,
  convertObjectToArrayCode,
  flatAnArrayOfObjectToSingleObjectCode,
  RemoveAPropertyFromObjectCode,
} from '../code/JSCode/objects';

export const JsData = {
  'Local storage': [
    {
      id: '1',
      category: 'Local storage',
      title: 'set a variable in the storage',
      description: 'Set a variable in the storage',
      code: "localStorage.setItem('key', 'value')",
    },
  ],
  Arrays: [
    {
      id: '1',
      category: 'Arrays',
      title: 'Sort an array',
      code: '<array>.sort( (a,b)=> a-b ) ',
      description: 'List all pods in the namespace',
    },
    {
      id: '2',
      category: 'Arrays',
      title: 'Sort an array by a boolean value',
      code: '<array>.sort( (a,b)=> Number(b)- Number(a)) ',
      description: 'Sort an array by a boolean value(true first)',
    },
  ],
  Strings: [
    {
      id: '1',
      category: 'Strings',
      title: 'TO BE ADDED',
      code: 'kubectl get pods',
      description: 'List all pods in the namespace',
    },
  ],
  Math: [
    {
      id: '1',
      category: 'stings',
      title: 'TO BE ADDED',
      description: 'List all pods in the namespace',
      code: 'TO BE ADDED',
    },
  ],
  'Dates and Times': [
    {
      id: '1',
      category: 'Math',
      title: 'TO BE ADDED',
      description: 'List all pods in the namespace',
      code: 'TO BE ADDED',
    },
  ],
  Objects: [
    {
      id: '1',
      category: 'Objects',
      title: 'Clone an object',
      code: cloneObjectCode,
      shortcut: '',
      description: cloneObjectDescription,
    },
    {
      id: '2',
      category: 'Objects',
      title: 'Convert object to array',
      code: convertObjectToArrayCode,
      shortcut: '',
      description: `Object.values(obj)`,
    },
    {
      id: '3',
      category: 'Objects',
      title: 'Flat an array of objects',
      code: flatAnArrayOfObjectToSingleObjectCode,
      shortcut: '',
      description: `We can use arr.reduce to flatten an array of objects to a single object`,
    },
    {
      id: '3',
      category: 'Objects',
      title: 'Remove property from object',
      code: RemoveAPropertyFromObjectCode,
      shortcut: '',
      description: `const  { [keyToRemove]: _, ...newObj} = obj;`,
    },
  ],
  Currying: [
    {
      id: '1',
      category: 'Currying',
      title: ' TO Be ADDED',
      description: 'Currying example',
      code: 'TO BE ADDED',
    },
  ],
};
