import { http } from '../config';

const getAllCourseList = async (
  costFilter: Object,
  offset: number,
  count: number,
) => {
  try {
    const response = await http.get(
      `?filter_conditions=%7B%22%24and%22%3A%5B%7B%22title%22%3A%22%25%25%22%7D%2C%7B%22%24or%22%3A${JSON.stringify(
        costFilter,
      )}%7D%5D%7D&offset=${offset}&count=${count}`,
    );
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export { getAllCourseList };
