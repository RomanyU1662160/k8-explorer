import { ReactElement, useEffect, useRef } from 'react';
import { useState } from 'react';
import { Data, DataItem } from '../pages/K8Page';

import { CodeBlock, dracula, atomOneDark } from 'react-code-blocks';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  docco,
  darcula,
  dark,
  monokai,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Markdown from 'react-markdown';
import {
  vs,
  vs2015,
  arta,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type DropDownProps = {
  data: any;
};
const DropDown = ({ data }: DropDownProps): ReactElement => {
  const [categories, setCategories] = useState<Array<string>>();
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [selectedOption, setSelectedOption] = useState<DataItem>();
  const [availableOptions, setAvailableOptions] = useState<Array<DataItem>>([]);
  const [command, setCommand] = useState<string>();
  const [description, setDescription] = useState<string>();

  useEffect(() => {
    setCategories(Object.keys(data));
    console.log('categories:::>>>', categories);
  }, [categories, availableOptions, command, data]);

  if (availableOptions) {
    console.log('available options', availableOptions);
  }

  const handleSelectedCategory = (value: string) => {
    setSelectedOption(undefined);
    setCommand(undefined);
    setDescription(undefined);
    setSelectedCategory(value);
    setAvailableOptions(data[value as keyof Data]);
  };
  const handleSelectedOption = (option: DataItem) => {
    setSelectedOption(option);
    setCommand(option.code);
    setDescription(option.description);
  };

  console.log(Object.keys(data));
  return (
    <>
      <div className='d-flex justify-content-between  mt-3 gap-2'>
        <div className='w-25 border'>
          <div className=' dropdown w-100  '>
            <button
              className='btn btn-lg btn-dark text-info dropdown-toggle w-100 '
              type='button'
              id='dropdownMenuButton2'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              {selectedCategory ?? ' Please Select'}
            </button>
            <ul
              className='dropdown-menu dropdown-menu-dark '
              aria-labelledby='dropdownMenuButton2'
            >
              {categories?.map((category, index) => {
                return (
                  <>
                    <li
                      key={index}
                      className='p-2 border-bottom text-info'
                      style={{ cursor: 'pointer' }}
                      value={category}
                      onClick={() => {
                        handleSelectedCategory(category);
                      }}
                    >
                      {category}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>

          {availableOptions.length >= 1 && (
            <div className=' dropdown w-100  mt-3 '>
              <button
                className='btn btn-lg btn-dark text-info dropdown-toggle w-100 '
                type='button'
                id='dropdownMenuButton2'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                {selectedOption ? selectedOption.title : ' Please Select'}
              </button>
              <ul
                className='dropdown-menu dropdown-menu-dark '
                aria-labelledby='dropdownMenuButton2'
              >
                {availableOptions.map((option, index) => {
                  return (
                    <>
                      <li
                        key={index}
                        className='p-2 border-bottom text-info'
                        style={{ cursor: 'pointer' }}
                        value={option.title}
                        onClick={() => {
                          handleSelectedOption(option);
                        }}
                      >
                        {option.title}
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <div className='bg-dark row rounded  w-75 d-flex align-items-center justify-content-center'>
          {description ? (
            <div className='col-md-4 align-self-start '>
              <h4 className='text-center m-3 text-white'> Description</h4>
              <p className='text-warning'>{description}</p>
            </div>
          ) : null}

          {command ? (
            <div className='col-md-7 border'>
              <p
                className='text-warning slide-in-right '
                id='command'
                style={{
                  transition: '3000ms all ease',
                  opacity: 1,
                  willChange: 'opacity',
                }}
              >
                <SyntaxHighlighter language='typescript' style={monokai}>
                  {command}
                </SyntaxHighlighter>
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default DropDown;
