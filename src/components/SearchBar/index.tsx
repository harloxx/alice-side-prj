import React, { useState } from 'react';
import $ from './style.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBar() {
  return (
    <div className={$.container}>
      <div className={$['content']}>
        <div className={$['content-search']}>
          <AiOutlineSearch className={$['search-logo']} size="16" />
        </div>
        <div className={$['content-input']}>
          <input placeholder="배우고 싶은 언어, 기술을 검색해 보세요" />
        </div>
      </div>
    </div>
  );
}
