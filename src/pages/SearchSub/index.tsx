import CourseCard from '@components/CourseCard';
import FilterBar from '@components/FilterBar';
import SearchBar from '@components/SearchBar';
import React, { useState } from 'react';
import $ from './style.module.scss';

export default function SearchSub() {
  return (
    <div className={$.container}>
      <SearchBar />
      <br />
      <FilterBar />
      <br />
      <br />
      <div className={$['cards']}>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
}
