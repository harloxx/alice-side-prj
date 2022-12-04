import React, { useState } from 'react';
import $ from './style.module.scss';
import {
  AiOutlineStock,
  AiOutlineCalendar,
  AiOutlineLaptop,
} from 'react-icons/ai';

interface Props {
  title: string;
  subtitle: string;
  image: string;
  is_free: boolean;
  enroll_type: number;
}

export default function CourseCard({
  title,
  subtitle,
  image,
  is_free,
  enroll_type,
}: Props) {
  return (
    <div className={$.container}>
      <div className={$['content']}>
        <div className={$['label']}>
          {enroll_type === 4 ? '구독' : is_free ? '무료' : '유료'}
        </div>
        <div className={$['title']}>{title}</div>
        <div className={$['subtitle']}>{subtitle}</div>
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
          <img className={$['des-img']} src={image} />
        </div>
      </div>
    </div>
  );
}
