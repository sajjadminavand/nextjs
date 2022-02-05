import react from "react";
import Image from "next/image";
import Form from "../form";
import styles from "./Section.module.css";
import { MdLunchDining, MdShoppingCart } from "react-icons/md";
import {
  GiAmpleDress,
  GiCarousel,
  GiLipstick,
  GiBrickWall,
} from "react-icons/gi";
import { FaTelegramPlane, FaFacebookF, FaTwitter } from "react-icons/fa";
import { CgTwitter } from "react-icons/cg";
function Section() {
  return (
    <react.Fragment>
      <div className="row cotainer justify-content-around">
        <div className="col-md-4  align-self-end mb-5 ">
          <div className="mr-5">
            {" "}
            <Image
              src="/sin.png"
              alt="Picture of the author"
              width={400}
              height={150}
              priority
            />
          </div>
          <h5 className="font-weight-bold  p-2">
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
        <div className="col-md-4 py-5 ">
          <Image
            src="/location.png"
            alt="Picture of the author"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>

      <div>
        <h2 className="text-center">خدمات سین کالا</h2>
      </div>
      <div className="row mx-5 mt-5 container">
        <div className=" col-md-3">
          <a href="">
            {" "}
            <Image
              src="/Group-114.png"
              alt="Picture of the author"
              width={200}
              height={320}
              priority
              className={styles.ac}
            />
          </a>
        </div>
        <div className=" col-md-3">
          <a href="">
            {" "}
            <Image
              src="/Group-115.png"
              alt="Picture of the author"
              width={200}
              height={320}
              priority
              className={styles.ac}
            />
          </a>
        </div>{" "}
        <div className=" col-md-3">
          {" "}
          <a href="">
            {" "}
            <Image
              src="/Group-116.png"
              alt="Picture of the author"
              width={200}
              height={320}
              priority
              className={styles.ac}
            />
          </a>
        </div>{" "}
        <div className=" col-md-3">
          {" "}
          <a href="">
            {" "}
            <Image
              src="/Group-117.png"
              alt="Picture of the author"
              width={200}
              height={320}
              priority
              className={styles.ac}
            />
          </a>
        </div>
      </div>
      <div className="row justify-content-center mt-5 container">
        <Image
          src="/Layer_1.png"
          alt="Picture of the author"
          width={800}
          height={100}
          priority
        />
      </div>
      <div className="row text-center my-5 container">
        <h3>دستـــه بندی ها</h3>
      </div>
      <div className="row text-center container mb-5">
        <div className="col-md-4">
          {" "}
          <button type="" className={styles.ad}>
            <div className={styles.af}>
              <MdLunchDining className={styles.ag} />
            </div>
            <p className={styles.at}>غـــذایی</p>
          </button>
        </div>
        <div className="col-md-4">
          {" "}
          <button type="" className={styles.ad}>
            <div className={styles.af}>
              <MdShoppingCart className={styles.ag} />
            </div>
            <p className={styles.ar}> فروشگاه های زنجیره ای</p>
          </button>
        </div>
        <div className="col-md-4">
          {" "}
          <button type="" className={styles.ad}>
            <div className={styles.af}>
              <GiBrickWall className={styles.ag} />
            </div>
            <p className={styles.ar}>مصالح ساختمانی</p>
          </button>
        </div>
      </div>
      <div className="row text-center container">
        <div className="col-md-4">
          {" "}
          <button type="" className={styles.ad}>
            <div className={styles.af}>
              <GiLipstick className={styles.ag} />
            </div>
            <p className={styles.at}>زیبـــــایی</p>
          </button>
        </div>
        <div className="col-md-4">
          {" "}
          <button type="" className={styles.ad}>
            <div className={styles.af}>
              <GiAmpleDress className={styles.ag} />
            </div>
            <p className={styles.at}>پوشــــاک</p>
          </button>
        </div>
        <div className="col-md-4">
          {" "}
          <button type="" className={styles.ad}>
            <div className={styles.af}>
              <GiCarousel className={styles.ag} />
            </div>
            <p className={styles.ar}>تفریحی و ورزشی</p>
          </button>
        </div>
      </div>
      <div className="row container my-5 container">
        {" "}
        <div className="col-md-6 pe-5" dir="rtl">
          <Image
            src="/all.png"
            alt="Picture of the author"
            width={300}
            height={250}
            priority
          />
        </div>{" "}
        <div className="col-md-6" dir="rtl">
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
      <div className="row container pb-4" dir="rtl">
        {" "}
        <div className="col-md-4">
          <Form />
        </div>{" "}
        <div className="col-md-8 align-self-end px-5">
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
      <footer>
        <div className={styles.ft}>
          <div className="row p-5">
            {" "}
            <div className="col-md-4">
              <Image
                src="/Group 119.png"
                alt="Picture of the author"
                width={260}
                height={115}
                priority
              />
            </div>
            <div className="col-md-4">
              <div className="row  ">
                <div className="col-md-4 ">
                  <p className={styles.ti}>products</p>
                  <ul className={styles.ul}>
                    <a href="" className={styles.ul}>
                      {" "}
                      <li>IOS</li>
                    </a>
                    <a href="" className={styles.ul}>
                      <li>Android</li>
                    </a>
                    <a href="" className={styles.ul}>
                      <li>Web Apps</li>
                    </a>
                    <a href="" className={styles.ul}>
                      {" "}
                      <li>Hardware</li>
                    </a>
                    <a href="" className={styles.ul}>
                      {" "}
                      <li>Trio Cloud</li>
                    </a>
                  </ul>
                </div>{" "}
                <div className="col-md-4">
                  <p className={styles.ti}>services</p>
                  <ul className={styles.ul}>
                    <a href="" className={styles.ul}>
                      <li>Bradning</li>
                    </a>
                    <a href="" className={styles.ul}>
                      {" "}
                      <li>Development</li>
                    </a>
                    <a href="" className={styles.ul}>
                      <li>Research</li>
                    </a>
                    <a href="" className={styles.ul}>
                      <li>UI/UX Design</li>
                    </a>
                    <a href="" className={styles.ul}>
                      {" "}
                      <li>SEO</li>
                    </a>
                  </ul>
                </div>{" "}
                <div className="col-md-4">
                  <p className={styles.ti}>contacts</p>
                  <ul className={styles.ul}>
                    <a href="" className={styles.ul}>
                      <li>unit 5, plaque 84 ,</li>
                    </a>
                    <a href="" className={styles.ul}>
                      <li>Azadi st, Tehran</li>
                    </a>
                    <a href="" className={styles.ul}>
                      {" "}
                      <li>iran</li>
                    </a>
                    <a href="" className={styles.ul}>
                      {" "}
                      <li>+98 21 66 92 20 13</li>
                    </a>
                    <a href="" className={styles.ul}>
                      {" "}
                      <li>seenco@gmail.com</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 " dir="rtl">
              <div className="row">
                <div class="input">
                  <button class={styles.ba}>
                    <FaTelegramPlane className={styles.bb} />
                  </button>
                  <input
                    type="text"
                    id="autoSizingInputGroup"
                    placeholder="E-mail"
                    className={styles.bc}
                  />
                </div>
              </div>
              <div className="row my-3">
                <button type="" className={styles.bd}>
                  <FaFacebookF className={styles.be} />
                </button>
                <button type="" className={styles.bd}>
                  <FaTwitter className={styles.be} />
                </button>
                <button type="" className={styles.bd}>
                  <CgTwitter className={styles.be} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ftz}>
          <div className="row p-3 text-center">
            <div className="col-6">
              <Image
                src="/path 28.png"
                alt="Picture of the author"
                width={42}
                height={22}
                priority
              />
            </div>
            <div className="col-6">
              <pre className={styles.ul}>Privacy Policy Help Center</pre>
            </div>
          </div>
        </div>
      </footer>
    </react.Fragment>
  );
}
export default Section;
