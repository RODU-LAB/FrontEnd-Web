import Link from "next/link";

export default function HomeBanner() {
  return (
    <>
      <div className="w-full h-[100vh] relative overflow-hidden">
        <video
          className="w-full h-full object-cover"
          style={{ objectPosition: "center top" }}
          autoPlay
          muted
          loop
        >
          <source src="/images/home-banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55">
          <div className="absolute w-full flex flex-col gap-[30px] text-center top-[39vh] tablet:top-[38vh]  px-5">
            <p className="font-bold text-white text-[20px] tablet:text-[24px] md:text-[33px] lg:text-[44px] ">
              &quot;로봇 기술의 미래를 이끌어가다&quot;
            </p>
            <p className="text-white text-[16px] tablet:text-[20px] md:text-[28px] lg:text-[36px]">
              전문성을 갖춘 로봇 직무교육의 선두주자 RODU
            </p>
            <p className="text-white text-[12px] tablet:text-[14px] md:text-[18px] lg:text-[22px]">
              로봇을 전공하는 대학생들과 전문가들에게 맞춤형 커리큘럼과 실질적
              기술을 제공합니다.
            </p>
          </div>
        </div>
        <Link href="/post/updatepost">
          <button className="absolute border border-white rounded-[26px] text-[12px] tablet:text-[18px] text-white top-[73vh] tablet:top-[82vh] max-md-home:transform max-md-home:-translate-x-1/2 max-md-home:left-[50%] md-home:right-[160px] py-3 px-5 hover:bg-white hover:text-black transition-colors duration-500 opacity-80">
            교육 문의하기
          </button>
        </Link>
      </div>
    </>
  );
}
