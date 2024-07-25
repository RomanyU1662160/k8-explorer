import DropDown from '../components/DropDown';
import React from 'react';

export type DataItem = {
  id: string;
  category: string;
  title: string;
  code: string;
  shortcut?: string;
  description: string;
};

export type Data = {
  Behavioral: Array<DataItem>;
  Creational: Array<DataItem>;
};

type Props = {
  data: Data;
};

function DesignPatternsPage({ data }: Props) {
  return (
    <>
      <h3 className='text-info text-center'> Design Patterns</h3>
      <DropDown data={data}></DropDown>
    </>
  );
}

export default DesignPatternsPage;
