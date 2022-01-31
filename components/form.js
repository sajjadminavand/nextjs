function Form() {
  return (
    <form dir="rtl">
      {" "}
      <label for="validationTooltip01" class="form-label">
        * نام و نام خانوادگی
      </label>
      <input
        type="text"
        class="form-control"
        id="validationTooltip01"
        value=""
        required
      />{" "}
      <label for="validationTooltip01" class="form-label">
        *ایمیل
      </label>
      <input
        type="email"
        class="form-control"
        id="validationTooltip01"
        value=""
        required
      />{" "}
      <label for="validationTooltip01" class="form-label">
        *موضوع
      </label>
      <input
        type="text"
        class="form-control"
        id="validationTooltip01"
        value=""
        required
      />{" "}
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          *متن پیام
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </form>
  );
}
export default Form;
