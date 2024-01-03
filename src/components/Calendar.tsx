import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

interface CalendarTypes {
  handleXMark: () => void;
  handleSelectDates: (newDates: string[]) => void;
  selectedDatesProps: string[];
}

export function Calendar({
  handleXMark,
  handleSelectDates,
  selectedDatesProps,
}: CalendarTypes) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<string[]>(
    Array.isArray(selectedDatesProps) ? selectedDatesProps : []
  );

  const getCalendarData = (year: number, month: number) => {
    // 현재 달의 첫 날과 마지막 날
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // 달력 시작 날짜: 현재 달의 첫 날보다 이전의 가장 가까운 일요일
    const startDay = new Date(firstDayOfMonth);
    startDay.setDate(startDay.getDate() - startDay.getDay());

    // 달력 끝 날짜: 현재 달의 마지막 날 다음의 가장 가까운 토요일
    const endDay = new Date(lastDayOfMonth);
    endDay.setDate(endDay.getDate() + (6 - endDay.getDay()));

    // 날짜 데이터를 담을 배열
    const dates = [];

    // 시작 날짜부터 끝 날짜까지 순회하며 날짜 배열에 추가
    for (
      let date = new Date(startDay);
      date <= endDay;
      date.setDate(date.getDate() + 1)
    ) {
      dates.push(new Date(date));
    }

    return dates;
  };

  const isCurrentMonth = (date: any) => {
    if (date.getMonth() === currentDate.getMonth()) {
      return "current";
    } else if (date.getMonth() < currentDate.getMonth()) {
      return "prev";
    } else {
      return "next";
    }
  };

  const formatDate = (date: Date) => {
    const d = new Date(date);
    let month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const handlePrevMonth = () => {
    // 이전 달로 이동
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    // 다음 달로 이동
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  // 주 단위로 날짜를 그룹화하기 위한 함수
  const getWeeks = (dates: Date[]) => {
    const weeks = [];
    let week: Date[] = [];

    dates.forEach((date) => {
      if (week.length < 7) {
        week.push(date);
      } else {
        weeks.push(week);
        week = [date];
      }
    });

    if (week.length) {
      weeks.push(week); // 마지막 주 추가
    }

    return weeks;
  };

  const dates = getCalendarData(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  const weeks = getWeeks(dates);

  const CurrentMonth =
    currentDate.getMonth() + 1 >= 10
      ? currentDate.getMonth() + 1
      : "0" + (currentDate.getMonth() + 1);

  return (
    <div
      className="w-[100vw] h-[100vh] top-0 left-0 fixed"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
    >
      <div className="h-full w-full flex justify-center items-center">
        <div className="h-[330px] w-[500px] bg-white flex rounded">
          <div className="w-full">
            <div className="h-[80px] flex justify-center items-center gap-2">
              <button onClick={handlePrevMonth}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-rodu-medium"
                />
              </button>
              <p className="font-medium text-[16px] text-darkGrey">
                {currentDate.getFullYear()}.{CurrentMonth}.
              </p>
              <button onClick={handleNextMonth}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-rodu-medium"
                />
              </button>
            </div>

            <div className="border-b-background border-b-[0.5px] pb-[7px]">
              <div className="px-4 w-full grid grid-cols-7">
                {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
                  <p
                    className="w-full text-center font-medium text-[12px] text-lightGrey"
                    key={day}
                  >
                    {day}
                  </p>
                ))}
              </div>
            </div>
            {weeks.map((week, index) => (
              <div key={index} className="px-4 grid grid-cols-7 pt-[7px]">
                {week.map((date: Date) => {
                  const dateString = formatDate(date);
                  const isSelected = !!selectedDates.length
                    ? selectedDates?.includes(dateString)
                    : false;
                  return (
                    <button
                      key={dateString}
                      className="flex items-center justify-center"
                      onClick={() =>
                        setSelectedDates((prev) => {
                          const prevCopy = [...prev];
                          const index = prevCopy.indexOf(dateString);

                          if (index > -1) {
                            // 값이 배열에 있으면 제거
                            prevCopy.splice(index, 1);
                          } else {
                            // 값이 배열에 없으면 추가
                            prevCopy.push(dateString);
                          }

                          // 배열을 오름차순으로 정렬
                          prevCopy.sort((a, b) => a.localeCompare(b));
                          handleSelectDates(prevCopy);
                          return prevCopy;
                        })
                      }
                    >
                      <p
                        className={`flex items-center justify-center hover:bg-[#fcbc74] hover:text-white h-[26px] w-[26px] rounded-full font-medium text-[12px] ${
                          isCurrentMonth(date) === "current"
                            ? "text-lightGrey"
                            : "text-[#D4D4D4]"
                        } ${isSelected ? "bg-rodu-medium text-white" : ""}`}
                      >
                        {date.getDate()}
                      </p>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="h-full w-[260px] flex flex-col items-center">
            <div className="w-full flex justify-end pr-5 mt-3">
              <button onClick={handleXMark}>
                <FontAwesomeIcon icon={faXmark} size="sm" />
              </button>
            </div>
            <p className="flex items-center mt-4">선택한 날짜</p>
            <div className="flex flex-col gap-2 m-4 w-full items-center overflow-auto">
              {selectedDates?.map((item, i) => {
                return (
                  <button
                    className="flex items-center justify-between bg-rodu-medium w-[110px] pl-1 pr-[6px] py-1 rounded-[2px]"
                    onClick={() =>
                      setSelectedDates((prev) => {
                        const prevCopy = [...prev];
                        prevCopy.splice(i, 1);
                        return prevCopy;
                      })
                    }
                  >
                    <div className="text-white flex justify-center items-center text-[14px]">
                      {item}
                    </div>
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      className="text-white"
                      size="sm"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
