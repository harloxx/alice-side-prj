import CourseCard from '@components/CourseCard';
import FilterBar from '@components/FilterBar';
import SearchBar from '@components/SearchBar';
import { getAllCourseList } from '../../api/courselist';
import React, { useState, useEffect } from 'react';
import $ from './style.module.scss';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

import calcArrayView from '../../utils/calcArrayView';

export default function SearchSub() {
  const [courseList, setCourseList] = useState([]);
  const [courseCount, setCourseCount] = useState(0);
  const [arrayView, setArrayView] = useState<number[]>([]);
  const [current, setCurrent] = useState(0);

  const MAX_PAGE: number = 9;
  const DISPLAY_CARD: number = 20;
  const DISPLAY_INDEX: number =
    DISPLAY_CARD % MAX_PAGE === 0
      ? Math.floor(courseCount / DISPLAY_CARD)
      : Math.ceil(courseCount / DISPLAY_CARD);
  const SIDE_DISPLAY_INDEX = Math.floor(MAX_PAGE / 2);
  useEffect(() => {
    getAllCourseList(current * DISPLAY_CARD, DISPLAY_CARD)
      .then((data: any) => {
        setCourseCount(data.course_count);
        setCourseList(data.courses);
      })
      .then(() => {
        //맨 처음 접속 시 current index 값 1
        if (current === 1) {
          //현재 값은 redux-persist로 저장해야할 듯
          setCurrent(1);
          {
            DISPLAY_INDEX >= 1
              ? DISPLAY_INDEX >= MAX_PAGE
                ? setArrayView(calcArrayView(1, MAX_PAGE))
                : setArrayView(calcArrayView(1, DISPLAY_INDEX))
              : '';
          }
        } else {
          setCurrent(current);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  const onClickLeft = () => {
    current === 1 ? '' : setCurrent(current - 1);
  };
  const onClickRight = () => {
    current === DISPLAY_INDEX ? '' : setCurrent(current + 1);
  };
  useEffect(() => {
    if (DISPLAY_INDEX < MAX_PAGE) {
      setArrayView(calcArrayView(1, DISPLAY_INDEX));
    } else if (current - SIDE_DISPLAY_INDEX >= 1) {
      if (current <= DISPLAY_INDEX - SIDE_DISPLAY_INDEX) {
        setArrayView(
          calcArrayView(
            current - SIDE_DISPLAY_INDEX,
            current + SIDE_DISPLAY_INDEX,
          ),
        );
      } else {
        // 마지막 페이지일때
        setArrayView(
          calcArrayView(DISPLAY_INDEX - MAX_PAGE + 1, DISPLAY_INDEX),
        );
      }
    } else {
      //첫번째 페이지일때->1,2
      setArrayView(calcArrayView(1, MAX_PAGE));
    }
    setCurrent(current);
    getAllCourseList((current - 1) * DISPLAY_CARD, DISPLAY_CARD)
      .then((data: any) => {
        setCourseCount(data.course_count);
        setCourseList(data.courses);
      })
      .catch(err => console.log(err));
  }, [current]);

  return (
    <div className={$.container}>
      <SearchBar />
      <br />
      <FilterBar />
      <br />
      <span>전체 {courseCount}개</span>
      <hr />
      <div className={$['cards']}>
        {courseList.map((course: any) => {
          return (
            <CourseCard
              key={course.id}
              title={course.title}
              subtitle={course.short_description}
              image={course.logo_file_url}
              is_free={course.is_free}
              enroll_type={course.enroll_type}
            />
          );
        })}
      </div>
      <div className={$['index']}>
        <AiOutlineLeft
          className={current === 1 ? $['arrow-deactive'] : $['arrow-active']}
          onClick={onClickLeft}
        />

        {arrayView.map(p => {
          // prob. 한 번 더 렌더링 되어야 숫자가 다시 나타남
          return (
            <div
              key={p}
              className={
                current === p ? $['index-num-active'] : $['index-num-deactive']
              }
              onClick={() => setCurrent(p)}
            >
              {p}
            </div>
          );
        })}

        <AiOutlineRight
          className={
            current === DISPLAY_INDEX ? $['arrow-deactive'] : $['arrow-active']
          }
          onClick={onClickRight}
        />
      </div>
    </div>
  );
}
