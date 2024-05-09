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

export default function Calendar({
  handleXMark,
  handleSelectDates,
  selectedDatesProps,
}: CalendarTypes) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<string[]>(
    Array.isArray(selectedDatesProps) ? selectedDatesProps : []
  );

  /** 날짜 데이터를 생성하고 주 단위로 그룹화하는 함수 */
  const getCalendarData = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // 현재 달의 첫 날
    const firstDayOfMonth = new Date(year, month, 1);
    // 달력 시작 날짜를 현재 달의 첫 날의 주의 일요일로 설정
    const startDay = new Date(firstDayOfMonth);
    startDay.setDate(1 - firstDayOfMonth.getDay());

    // 현재 달의 마지막 날
    const lastDayOfMonth = new Date(year, month + 1, 0);
    // 달력 끝 날짜를 현재 달의 마지막 날의 주의 토요일로 설정
    const endDay = new Date(lastDayOfMonth);
    endDay.setDate(lastDayOfMonth.getDate() + (6 - lastDayOfMonth.getDay()));

    /** startDay부터 endDay까지의 날짜를 주 단위로 그룹화하는 함수 */
    const groupDatesByWeek = (startDay: Date, endDay: Date): Date[][] => {
      const weeks: Date[][] = []; // 주 단위로 그룹화된 날짜 배열
      let currentWeek: Date[] = []; // 현재 처리 중인 주
      let date = new Date(startDay); // 시작 날짜로 초기화된 현재 날짜 변수

      while (date <= endDay) {
        currentWeek.push(new Date(date)); // 현재 날짜를 현재 주에 추가

        if (currentWeek.length === 7 || date.getDay() === 6) {
          weeks.push(currentWeek); // 완성된 주를 weeks 배열에 추가
          currentWeek = []; // 새로운 주를 시작하기 위해 재초기화
        }

        date.setDate(date.getDate() + 1); // 현재 날짜를 다음 날로 변경
      }

      if (currentWeek.length > 0) {
        weeks.push(currentWeek); // 마지막 주 처리
      }

      return weeks; // 주 단위로 그룹화된 날짜 배열 반환
    };

    return groupDatesByWeek(startDay, endDay);
  };

  const weeks = getCalendarData();

  const currentMonth =
    currentDate.getMonth() + 1 >= 10
      ? currentDate.getMonth() + 1
      : "0" + (currentDate.getMonth() + 1);

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
                {currentDate.getFullYear()}.{currentMonth}.
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
                        handleSelectDates(prevCopy);
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
