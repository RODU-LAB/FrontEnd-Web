interface BannerTypes {
  backgroundImg: string;
  title: string;
  subTitle: string;
  content: string;
}

export function Banner({
  backgroundImg,
  title,
  subTitle,
  content,
}: BannerTypes) {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="w-full h-screen pt-[78px] px-[120px] justify-between z-10">
        <div className="h-full flex flex-col justify-between py-[110px] text-white">
          <div>
            <p className="text-[60px] font-bold">{title}</p>
            <p className="text-rodu-light-grey text-[22px]">{subTitle}</p>
          </div>
          <p className="whitespace-pre-line text-[20px]">{content}</p>
        </div>
      </div>
    </div>
  );
}
