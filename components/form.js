function Form() {
  return (
    <form dir="rtl">
      {" "}
      <label className="form-label">* نام و نام خانوادگی</label>
      <input
        type="text"
        className="form-control"
        id="validationTooltip01"
        value=""
        required
      />{" "}
      <label className="form-label">*ایمیل</label>
      <input
        type="email"
        className="form-control"
        id="validationTooltip01"
        value=""
        required
      />{" "}
      <label className="form-label">*موضوع</label>
      <input
        type="text"
        className="form-control"
        id="validationTooltip01"
        value=""
        required
      />{" "}
      <div className="mb-3">
        <label className="form-label">*متن پیام</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </form>
  );
}
export default Form;
