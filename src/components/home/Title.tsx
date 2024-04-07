interface TitleProps {
  text: string;
  textCenter?: boolean;
  subText?: string;
  noMarginBottom?: boolean;
  width?: string;
  smallTitle?: boolean;
  mobileWidth?: string;
}

export function Title({
  text,
  textCenter,
  subText,
  noMarginBottom,
  smallTitle,
}: TitleProps) {
  return (
    <div
      className={`flex flex-col max-md-home:items-center ${
        textCenter && "items-center"
      } ${!noMarginBottom && "mb-[46px]"}`}
    >
      <div className="inline-flex">
        <p
          className={`max-tablet:text-center ${
            smallTitle ? "text-[20px]" : "text-[27px]"
          }  tablet:text-[36px] font-bold border-b-[3.5px] border-rodu-medium leading-[1.24] max-md-home:px-1 ${
            textCenter ? "text-center px-1" : "pr-1"
          } `}
        >
          {text}
        </p>
      </div>
      {subText && (
        <p className="mt-[15px] text-rodu-grey whitespace-pre-line">
          {subText}
        </p>
      )}
    </div>
  );
}
