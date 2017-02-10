export class User {
  constructor(
    public username: string,
    public password: string,
    public name: string,
    public phone: string,
    public address: string,
    public QQ: string,
    public wechat: string,
    public sales: number,
    public id?: number
  ) {

  }
}
