// https://websitesetup.org/javascript-cheat-sheet/

import DropDown from '../components/DropDown';

export type DataItem = {
  id: string;
  category: string;
  title: string;
  code: string;
  shortcut?: string;
  description: string;
};

export type JsDropDownProps = {
  data: any;
};

const JSCodePage = ({ data }: JsDropDownProps) => {
  return (
    <>
      <h3 className='text-info text-center'> Js code snippets</h3>
      <DropDown data={data}></DropDown>
    </>
  );
};

export default JSCodePage;
