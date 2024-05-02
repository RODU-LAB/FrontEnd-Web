interface BannerTypes {
  img: string;
  title: string;
  subTitle: string;
  content: string;
}

export function Banner({ img, title, subTitle, content }: BannerTypes) {
  return (
    <div className="h-screen w-full pt-[78px] px-[20px] flex items-center gap-36 justify-center bg-[#E5E3E3]">
      <div className="flex items-center justify-center min-w-[200px]">
        <img
          src={img}
          alt="title"
          className="max-h-[330px] max-w-[460px] object-contain"
        />
      </div>
      <div className="flex flex-col gap-[100px]">
        <div className="text-[#3B3B3B] pt-6">
          <p className="text-[60px] font-bold leading-[60px]">{title}</p>
          <p className="text-[22px]">{subTitle}</p>
        </div>
        <p className="whitespace-pre-line text-[20px] text-[#3B3B3B] font-semibold">
          {content}
        </p>
      </div>
    </div>
  );
}
