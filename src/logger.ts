/**
 * @Author       : Humility
 * @Date         : 2023-08-25 16:54:30
 * @LastEditTime : 2023-08-29 14:05:32
 * @LastEditors  : Humility
 * @FilePath     : \humble-log\src\logger.ts
 * @Description  : 日志类
 */
export class Logger {
  style = `
  border-radius: 6px;
  padding: 3px 6px;
  color: #fff;
  `;
  color = {
    log: "#2274A5",
    info: "#95B46A",
    error: "#D33F49",
    warn: "#F5A623",
  };

  constructor(override = false) {
    if (override) {
      this.override();
    }
  }
  /**
   * @param {array} data
   * @return {*}
   * @description: 日志
   */
  log(...data: any[]) {
    const date = new Date();
    console.log(
      `%c🧐 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`,
      `${this.style}
      background-color:${this.color.log}
      `
    );
    console.log(...data);
  }
  /**
   * @param {array} data
   * @return {*}
   * @description: 信息
   */
  info(...data: any[]) {
    const date = new Date();
    console.log(
      `%c😀 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`,
      `${this.style}
      background-color:${this.color.info}
      `
    );
    console.info(...data);
  }
  /**
   * @param {array} data
   * @return {*}
   * @description: 警告
   */
  warn(...data: any[]) {
    const date = new Date();
    console.log(
      `%c😥 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`,
      `${this.style}
      background-color:${this.color.warn}
      `
    );
    console.warn(...data);
  }
  /**
   * @param {array} data
   * @return {*}
   * @description: 错误
   */
  error(...data: any[]) {
    const date = new Date();
    console.log(
      `%c🥵 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`,
      `${this.style}
      background-color:${this.color.error}
      `
    );
    console.error(...data);
  }
  /**
   * @return {*}
   * @description: 覆盖console原生的方法
   */
  override() {
    console.log = this.log;
    console.info = this.info;
    console.warn = this.warn;
    console.error = this.error;
  }
}
