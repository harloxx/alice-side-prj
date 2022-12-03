import React, { useState } from 'react';
import $ from './style.module.scss';
import {
  AiOutlineStock,
  AiOutlineCalendar,
  AiOutlineLaptop,
} from 'react-icons/ai';

export default function CourseCard() {
  return (
    <div className={$.container}>
      <div className={$['content']}>
        <div className={$['label']}>유료</div>
        <div className={$['title']}>취준생을 위한 현직자 IT 직무 특강</div>
        <div className={$['subtitle']}>
          9/4(토) 오후 1시 | 데이터 엔지니어, 데이터 엔지니어, 데이터 엔지니어
        </div>
        <div className={$['des']}>
          <div className={$['des-icon']}>
            <div className={$['content-icon']}>
              <AiOutlineStock />
              <div className={$['icon']}>난이도 : 미설정</div>
            </div>
            <div className={$['content-icon']}>
              <AiOutlineLaptop />
              <div className={$['icon']}>난이도 : 미설정</div>
            </div>
            <div className={$['content-icon']}>
              <AiOutlineCalendar />
              <div className={$['icon']}>난이도 : 미설정</div>
            </div>
          </div>
          <img
            className={$['des-img']}
            src="https://cdn-api.elice.io/api/file/08ee2e13db254d598d7dc0fd4a897adf/Do%20it%21%20C%20%E1%84%8B%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%A5%20%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%86%E1%85%AE%E1%86%AB.jpg?se=2022-12-15T00%3A15%3A00Z&sp=rt&sv=2020-10-02&sr=b&sig=Nf7MY3wSCh9jfjzMJJnAeQSmEMZ1X5C97BcCKw5JVrg%3D"
          />
        </div>
      </div>
    </div>
  );
}
