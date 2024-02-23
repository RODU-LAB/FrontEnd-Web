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
  width,
  mobileWidth,
  smallTitle,
}: TitleProps) {
  return (
    <div
      className={`inline-flex flex-col max-md-home:flex max-md-home:items-center ${
        textCenter && "flex items-center"
      } ${!noMarginBottom && "mb-[46px]"}`}
    >
      <p
        className={`max-tablet:text-center ${
          smallTitle ? "text-[20px]" : "text-[27px]"
        }  tablet:text-[36px] font-bold border-b-[3.5px] border-rodu-medium leading-[1.24] max-md-home:px-1 ${
          textCenter ? "text-center px-1" : "pr-1"
        } ${mobileWidth} ${width}`}
      >
        {text}
      </p>
      {subText && (
        <p className="mt-[15px] text-rodu-grey whitespace-pre-line">
          {subText}
        </p>
      )}
    </div>
  );
}
