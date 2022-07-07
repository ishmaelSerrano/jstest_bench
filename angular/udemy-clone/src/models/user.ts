import {ICourse} from './course';

export interface IUser {
  id: number,
  name: string,
  email: string,
  password: string,
  jwt: string,
  courses: Array<number>,
  expandedCourses: Array<ICourse>
}
