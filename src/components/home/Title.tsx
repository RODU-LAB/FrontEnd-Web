interface TitleProps {
  text: string;
  textCenter?: boolean;
  subText?: string;
}

export function Title({ text, textCenter, subText }: TitleProps) {
  return (
    <div className="inline-flex flex-col mb-[46px] max-md-home:flex max-md-home:items-center">
      <p
        className={`text-[42px] font-bold border-b-[3.5px] border-rodu-medium leading-[1.24] max-md-home:px-1 ${
          textCenter ? "text-center px-1" : "pr-1"
        }`}
      >
        {text}
      </p>
      {subText && <p className="mt-[15px] text-rodu-grey">{subText}</p>}
    </div>
  );
}
