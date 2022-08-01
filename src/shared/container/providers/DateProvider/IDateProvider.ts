export interface IDateProvider {
  addDays(days: number): Date;
  convertToUTC(date: Date): string;
  dateNow(): Date;
  compareDates(start_date: Date, end_date: Date): number;
}
