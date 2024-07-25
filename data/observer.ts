import fs from 'fs';

let observerCode: string = '';

fs.readFile(
  'src/designn-patterns-code/observer.ts',
  'utf-8',
  (err: any, data: any) => {
    if (err) {
      console.log(err);
    } else {
      observerCode = data;
    }
  }
);

export { observerCode };
