class ApiRespones {
  constructor(statusCode = 201, message = "success", data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}
export default ApiRespones;
