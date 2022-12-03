import FILTER_CATEGORYS from '../../constants/filter';
import React, { useState } from 'react';
import $ from './style.module.scss';

export default function FilterBar() {
  return (
    <div className={$.container}>
      {FILTER_CATEGORYS.map(({ title, contents }, idx) => {
        return (
          <div className={$['content']} key={idx}>
            <div className={$['tag']}>{title}</div>
            <div className={$['content-filter']}>
              {contents.map((content, idx) => (
                <div key={idx}>
                  <button>{content}</button>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
