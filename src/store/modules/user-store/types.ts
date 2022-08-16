export type RoleType = '' | '*' | 'admin' | 'user';
export default interface UserState {
  ID?: number,
  Avatar?: string,
  CreatedAt?: number,
  DeletedAt?: null,
  IsAdmin?: number,
  Nickname?: string,
  SessionKey?: string,
  State?: number,
  UnionId?: string,
  UpdatedAt?:  number,
  WxOpenid?: string,
  access_token?: string,
  username?: string,
  Token?:string,
  role?:string,
}
