import Link from "next/link";
import Image from "next/image";

import arrow from "public/images/right-arrow.png";

interface Props {
  img: string;
  name: string;
  firstText: string;
  secondText: string;
  LastText: string;
  routerIndex: number;
}

export default function ContentsBox({
  img,
  name,
  firstText,
  secondText,
  LastText,
  routerIndex,
}: Props) {
  return (
    <Link
      href="/contents"
      className="transition-all duration-500 hover:shadow-[0_0_15px_rgba(0,0,0,0.15)] hover:border-[#f8c58a] 
            w-[250px] tablet:w-[220px] h-[350px] laptop:w-[220px] laptop:h-[350px] desktop:w-[234px] desktop:h-[372px] 
            rounded-[10px] border-[2px] border-super-light-grey bg-super-light-grey 
            flex flex-col items-center justify-between 
            pt-[30px] desktop:pt-[32px] 
            px-[16px] laptop:px-[18px] desktop:px-[20px] 
            pb-[15px] laptop:pb-[16px] desktop:pb-[17px]"
    >
      <div className="flex flex-col items-center">
        <Image
          src={img}
          alt={name}
          height={96}
          width={96}
          className="w-[80px] laptop:w-[88px] desktop:w-[96px]"
        />
        <p className="text-[28px] laptop:text-[30px] desktop:text-[33px] font-bold my-[13px]">
          {name}
        </p>
        <p className="text-[13px] desktop:text-[13.8px] text-justify text-rodu-grey">
          {firstText}
          <strong>{secondText}</strong>
          {LastText}
        </p>
      </div>
      <div className="flex w-full justify-between items-center">
        <p className="text-[13px] desktop:text-[14px] font-semibold">
          교육 커리큘럼 보기
        </p>
        <Image
          src={arrow.src}
          alt="arrow"
          width={6.8}
          height={12}
          className="h-3 tablet:h-2.5 desktop:h-3"
        />
      </div>
    </Link>
  );
}
