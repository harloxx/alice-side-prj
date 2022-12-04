import FILTER_CATEGORYS from '../../constants/filter';
import React, { useState, useEffect } from 'react';
import $ from './style.module.scss';
import findAllIndex from '../../utils/findAllIndex';

export default function FilterBar() {
  const [isCategorySelect, setIsCategorySelect] = useState<any>(false);
  const [price, setPrice] = useState([]);
  const [priceIdx, setPriceIdx] = useState<any>([]);
  useEffect(() => {
    let arrTest: boolean[][] = [];
    FILTER_CATEGORYS.map(x => {
      const test = Array(x.contents.length).fill(false);
      arrTest.push(test);
    });
    setIsCategorySelect(arrTest);
  }, []);

  const setPriceTag = () => {};

  const handleClick = (row: number, column: number) => {
    const tmp = isCategorySelect;
    tmp[row][column] = !isCategorySelect[row][column];
    //console.log(findAllIndex(tmp[0], true));
    setIsCategorySelect(tmp);
    setPriceIdx(findAllIndex(tmp[2], true));
    console.log(priceIdx);
  };

  // const hh = (idx: number, idx2: number) => {
  //   handleClick(idx, idx2);
  //   console.log(idx, idx2);
  //   console.log(isCategorySelect[idx][idx2]);
  //   console.log(isCategorySelect[idx][idx2] ? 'tt' : 'ff');
  // };

  console.log(isCategorySelect, ' ');

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
                      // prob. 색이 변하지 않는 문제
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
