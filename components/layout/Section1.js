import react from "react";
import Image from "next/image";
import Form from "../form";

function SectionA() {
  return (
    <react.Fragment>
      <div className="row cotainer">
        <div className="col  d-flex align-items-end flex-column mb-5 ">
          <h5 className="font-weight-bold mt-auto p-2">
            دنبال نزدیکترین فروشگاه واسه خریدت میگردی؟
            <br />
            <br />
            میخوای بدونی کجا ارزونتره؟
            <br />
            <br />
            یا مثلا میخوای نظر بقیه کاربرا رو از اون فروشگاه بدونی؟
            <br />
            <br />
            <b>پس با سین، ببین</b>
          </h5>
        </div>
        <div className="col-md-6 py-5 ">
          <Image
            src="/location.png"
            alt="Picture of the author"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
      <div className="row   justify-content-md-center">
        <Image
          src="/Group 18.png"
          alt="Picture of the author"
          width={100}
          height={50}
          priority
        />
      </div>

      <div>
        <h2 className="text-center">خدمات سین کالا</h2>
      </div>
      <div className="row mx-5 mt-5">
        <div className=" col">
          <Image
            src="/Group-114.png"
            alt="Picture of the author"
            width={200}
            height={320}
            priority
          />
        </div>
        <div className=" col">
          <Image
            src="/Group-115.png"
            alt="Picture of the author"
            width={200}
            height={320}
            priority
          />
        </div>{" "}
        <div className=" col">
          {" "}
          <Image
            src="/Group-116.png"
            alt="Picture of the author"
            width={200}
            height={320}
            priority
          />
        </div>{" "}
        <div className=" col">
          {" "}
          <Image
            src="/Group-117.png"
            alt="Picture of the author"
            width={200}
            height={320}
            priority
          />
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <Image
          src="/Layer_1.png"
          alt="Picture of the author"
          width={800}
          height={100}
          priority
        />
      </div>
      <div className="row text-center my-5">
        <h3>دستـــه بندی ها</h3>
      </div>
      <div className="row text-center">
        <div className="col">
          {" "}
          <Image
            src="/Group 141.png"
            alt="Picture of the author"
            width={300}
            height={100}
            priority
          />
        </div>
        <div className="col">
          {" "}
          <Image
            src="/Group 2.png"
            alt="Picture of the author"
            width={300}
            height={100}
            priority
          />
        </div>
        <div className="col">
          {" "}
          <Image
            src="/Group 1.png"
            alt="Picture of the author"
            width={300}
            height={100}
            priority
          />
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          {" "}
          <Image
            src="/Group 144.png"
            alt="Picture of the author"
            width={300}
            height={100}
            priority
          />
        </div>
        <div className="col">
          {" "}
          <Image
            src="/Group 143.png"
            alt="Picture of the author"
            width={300}
            height={100}
            priority
          />
        </div>
        <div className="col">
          {" "}
          <Image
            src="/Group 142.png"
            alt="Picture of the author"
            width={300}
            height={100}
            priority
          />
        </div>
      </div>
      <div className="row container my-5">
        {" "}
        <div className="col-6 pe-5" dir="rtl">
          <Image
            src="/all.png"
            alt="Picture of the author"
            width={300}
            height={250}
            priority
          />
        </div>{" "}
        <div className="col-6" dir="rtl">
          <h3>درباره ما</h3>
          <br />
          <p>
            سایت و اپلیکیشن ببین زیر مجموعه شرکت بخت افرینی ایزد میباشد کارخورد
            را در زمستان 1400 با هدف اشنایی حداکثری مشاغل کسب و کارهای اطراف
            کاربران خود در تمامی صنوف اغاز کرد کاربران با نصب اپلیکیشن سین قادر
            خواهند بود تا اطلاعات مشاغل مورد نیاز خود را نظیر شماره تلفن ادرس
            ساعتن فعالیت خدمات و قیمت کالا هارا در صفحه منحصر به ان کسب و کار
            مشاهده نمایند کاربران صاحب شغل و کسب .کار نیز ب نصب اپلیکیشن مخصوص
            کسب و کارها میتوانند تبلیغات نظرات و امتیازات خود را در اپلیکشن کسب
            و کار سین کشاهده نمایند صاحبان مشاغل همچنین میتوانند از امکانات عالی
            بخش تامین مواد اولیه اپلیکیشن و سایت ببین که سعی شده تمامی قیمت ها
            زیر قیمت تامین عمده مواد اولیه میباشد و سایر امکانات و تخفیفات
            استفاده نمایند
          </p>
        </div>{" "}
      </div>
      <div className="row container" dir="rtl">
        {" "}
        <div className="col-4">
          <Form />
        </div>{" "}
        <div className="col-8 align-self-end px-5">
          {" "}
          <Image
            src="/loc.png"
            alt="Picture of the author"
            width={200}
            height={175}
            priority
          />{" "}
        </div>
      </div>
    </react.Fragment>
  );
}
export default SectionA;
