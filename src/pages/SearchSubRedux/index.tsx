import CourseCard from '@components/CourseCard';
import FilterBar from '@components/FilterBar';
import SearchBar from '@components/SearchBar';
import { getAllCourseList } from '../../api/courselist';
import React, { useState } from 'react';
import { useEffect } from 'react';
import $ from './style.module.scss';
import { useAppDispatch, useAppSelector } from '../../store';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import {
  setInitialArray,
  setCurrent,
  setCount,
  setArrayView,
} from '../../store/features/courseSlice';
import calcArray from '../../utils/calcArray';
import calcArrayView from '../../utils/calcArrayView';
export default function SearchSub() {
  const [courseList, setCourseList] = useState([]);
  const [courseCount, setCourseCount] = useState(0);

  const dispatch = useAppDispatch();
  const setPageArray = (page: any) => {
    dispatch(setInitialArray(page));
  };
  const setC = (number: any) => {
    dispatch(setCurrent(number));
  };
  const setA = (number: any) => {
    dispatch(setCount(number));
  };
  const setAV = (number: any) => {
    dispatch(setArrayView(number));
  };

  const { arrayView, current, count } = useAppSelector(state => state.course);

  useEffect(() => {
    getAllCourseList(0, 20)
      .then((data: any) => {
        console.log(data);
        setCourseCount(data.course_count);
        setCourseList(data.courses);
      })
      .then(() => {
        setA(courseCount);

        console.log('couseCount : ' + courseCount, count);
        setPageArray(calcArray(count));
        console.log('-');

        //맨 처음 접속 시 current index 값 1
        if (count) {
          setC(1);
          {
            count >= 1
              ? count >= 5
                ? setAV(calcArrayView(1, 5))
                : setAV(calcArrayView(1, count))
              : '';
          }
        } else {
          setC(current);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  const onClickLeft = () => {
    current === 1 ? '' : setC(current - 1);
  };
  const onClickRight = () => {
    current === count ? '' : setC(current + 1);
  };
  useEffect(() => {
    let tempArr: number[] = [];
    if (count < 5) {
      setAV(calcArrayView(1, count));
    } else if (current - 2 >= 1) {
      if (current <= count - 2) {
        setAV(calcArrayView(current - 2, current + 2));
      } else {
        // 마지막 페이지일때
        setAV(calcArrayView(current - 5, current + 2));
      }
    } else {
      //첫번째 페이지일때->1,2
      setAV(calcArrayView(1, 5));
    }
    setC(current);
  }, [current]);

  console.log(current, '현재, ', arrayView, ' 배열');

  return (
    <div className={$.container}>
      <SearchBar />
      <br />
      <FilterBar />
      <br />
      <br />
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
          return (
            <div
              key={p}
              className={
                current === p ? $['index-num-active'] : $['index-num-deactive']
              }
              onClick={() => setC(p)}
            >
              {p}
            </div>
          );
        })}

        <AiOutlineRight
          className={
            current === count ? $['arrow-deactive'] : $['arrow-active']
          }
          onClick={onClickRight}
        />
      </div>
    </div>
  );
}
