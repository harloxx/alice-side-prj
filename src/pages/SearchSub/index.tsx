import CourseCard from '@components/CourseCard';
import FilterBar from '@components/FilterBar';
import SearchBar from '@components/SearchBar';
import { getAllCourseList } from '../../api/courselist';
import React, { useState } from 'react';
import { useEffect } from 'react';
import $ from './style.module.scss';
import { useAppDispatch } from '../../store';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
export default function SearchSub() {
  const [courseList, setCourseList] = useState([]);
  const [courseCount, setCourseCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(-1);
  const [CurrentPageArr, setCurrentPageArr] = useState<number[]>([]);
  const [page, setPage] = useState<number[]>([]);
  const [pageNumber, setPageNumber] = useState<number[]>([]);
  //const pageNumber: number[] = [];

  useEffect(() => {
    getAllCourseList()
      .then((data: any) => {
        setCourseCount(data.course_count);
        setCourseList(data.courses);
        for (let i = 1; i <= courseCount; i++) {
          setPageNumber([...pageNumber, i]);
          //pageNumber.push(i);
          console.log(courseCount);
          console.log(pageNumber);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    let tempArr = [...pageNumber];
    console.log(tempArr);
    if (pageNumber.length < 5) {
    } else if (currentPage - 2 >= 1) {
      if (currentPage <= pageNumber.length - 2) {
        tempArr = tempArr.slice(currentPage - 3, currentPage + 2);
      } else {
        // 마지막 페이지일때
        console.log('aas');
        tempArr = tempArr.slice(pageNumber.length - 5, pageNumber.length + 1);
      }
    } else {
      //첫번째 페이지일때->1,2
      tempArr = tempArr.slice(0, 5);
    }
    setPage(tempArr);
  }, [currentPage]);
  console.log(pageNumber);

  return (
    <div className={$.container}>
      <SearchBar />
      <br />
      <FilterBar />
      <br />
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
          className={
            currentPage === 1 ? $['arrow-deactive'] : $['arrow-active']
          }
          onClick={() => setCurrentPage(prev => (prev === 1 ? prev : prev - 1))}
        />
        {page.map(p => {
          return (
            <div
              key={p}
              className={
                currentPage === p
                  ? $['index-num-active']
                  : $['index-num-deactive']
              }
              onClick={() => setCurrentPage(p)}
            >
              {p}
            </div>
          );
        })}

        <AiOutlineRight
          className={
            currentPage === pageNumber.length
              ? $['arrow-deactive']
              : $['arrow-active']
          }
          onClick={() =>
            setCurrentPage(prev =>
              prev === pageNumber.length ? prev : prev + 1,
            )
          }
        />
      </div>
    </div>
  );
}
