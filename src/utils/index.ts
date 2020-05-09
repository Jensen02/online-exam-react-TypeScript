/*
 * @fileheader.Author: asd
 */
/*
 * @fileheader.Author: asd
 */
interface IClassInfo {
  classId?: string;
  teacher: string;
  classNo: string;
  className: string;
  school: string;
  foundTime: string;
  inspect?: boolean;
}

export const changeClassInfo = (classList: IClassInfo[]) => {
  const classIdList = classList.map((item) => {
    const { className, classId } = item;
    return { className, classId };
  });
  return classIdList;
}