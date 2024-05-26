import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface PwInputModalTypes {
  isOpen: boolean;
  enterPress: () => void;
  onInput: (value: string) => void;
  onClickXmark: () => void;
}

export default function PwInputModal({
  isOpen,
  enterPress,
  onInput,
  onClickXmark,
}: PwInputModalTypes) {
  const handleEnterPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      enterPress();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    onInput(target.value);
  };

  return (
    <Modal isOpen={isOpen} className="Posts-modal">
      <>
        <div className="Posts-modal-container">
          <span className="Posts-modal-title flex justify-between items-center px-4">
            <div className="w-[15px]" />
            <p>게시글 비밀번호를 입력해주세요</p>
            <FontAwesomeIcon
              icon={faXmark}
              size="lg"
              className="cursor-pointer"
              onClick={onClickXmark}
            />
          </span>
          <div className="flex w-full Posts-modal-form">
            <input
              onInput={handleInputChange}
              placeholder="비밀번호를 입력해주세요"
              className="Posts-modal-input"
              type="password"
              onKeyDown={handleEnterPress}
            />
            <button
              className="Posts-modal-button transition-colors"
              onClick={enterPress}
            >
              확인
            </button>
          </div>
        </div>
      </>
    </Modal>
  );
}
