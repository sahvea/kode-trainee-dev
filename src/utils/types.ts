export type EmployeeData = {
  id: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  userTag: string;
  department: string;
  position: string;
  birthday: string;
  phone: string;
}

export interface ParsedEmployeeData {
  id: string;
  avatar: string;
  name: string;
  nickname: string;
  post: string;
  birthDate: string;
  phone: string;
}

export type TabArray = {
  id: number;
  name: string;
  tag: string;
}