import FILTER_CATEGORYS from '../../constants/filter';
import React, { useState, useEffect } from 'react';
import $ from './style.module.scss';
import findAllIndex from '../../utils/findAllIndex';
import { useAppDispatch } from '../../store';
import { setFilter } from '../../store/features/filterSlice';

export default function FilterBar() {
  const [isCategorySelect, setIsCategorySelect] = useState<any>(false);

  const dispatch = useAppDispatch();
  const setFilterValue = (val: Object) => {
    dispatch(setFilter(val));
  };

  useEffect(() => {
    let arrTest: boolean[][] = [];
    FILTER_CATEGORYS.map(x => {
      const test = Array(x.contents.length).fill(false);
      arrTest.push(test);
    });
    setIsCategorySelect(arrTest);
  }, []);

  const handleClick = (row: number, column: number) => {
    const tmp = isCategorySelect;
    tmp[row][column] = !isCategorySelect[row][column];
    setIsCategorySelect(tmp);
    let a: Object[] = [];
    findAllIndex(tmp[2], true).map((x: number) => {
      a.push(FILTER_CATEGORYS[2].json[x]);
    });
    setFilterValue(a);
  };

  return (
    <div className={$.container}>
      {FILTER_CATEGORYS.map(({ title, contents }, idx) => {
        return (
          <div className={$['content']} key={idx}>
            <div className={$['tag']}>{title}</div>
            <div className={$['content-filter']}>
              {isCategorySelect &&
                contents.map((content, idx2) => (
                  <div key={idx2}>
                    <button
                      onClick={() => handleClick(idx, idx2)}
                      className={
                        isCategorySelect[idx][idx2]
                          ? $['active']
                          : $['deactive']
                      }
                    >
                      {content}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
