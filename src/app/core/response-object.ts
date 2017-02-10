export class ResponseObject<T> {
  constructor(
    public code: number,
    public message: string,
    public result: T
  ) {}
}
