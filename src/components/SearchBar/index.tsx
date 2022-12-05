import React, { useState, useCallback, useEffect } from 'react';
import $ from './style.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { useAppDispatch } from '../../store';
import { setSearch } from '../../store/features/searchSlice';

interface Child {
  click: boolean;
  setClick: (v: boolean) => void;
}

export default function SearchBar({ click, setClick }: Child) {
  const [input, setInput] = useState('');

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setInput(e.target.value);
    },
    [input],
  );

  useEffect(() => {
    setSearchValue(input);
  }, [input]);
  const dispatch = useAppDispatch();
  const setSearchValue = (val: string) => {
    dispatch(setSearch(val));
  };

  return (
    <div className={$.container}>
      <div className={$['content']}>
        <div className={$['content-search']}>
          <AiOutlineSearch
            className={$['search-logo']}
            size="16"
            onClick={e => {
              setClick(!click);
            }}
          />
        </div>
        <div className={$['content-input']}>
          <input
            placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
            type="text"
            value={input}
            onChange={onChangeInput}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                setClick(!click);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
