import Modal from "react-modal";

interface ModalTypes {
  title: string;
  yesHandler: () => void;
  noHandler: () => void;
  isOpen: boolean;
}

export function YesNoModal({
  title,
  yesHandler,
  noHandler,
  isOpen,
}: ModalTypes) {
  return (
    <Modal isOpen={isOpen} className="Posts-modal">
      <div className="Posts-modal-container min-h-[106px]">
        <div className="min-h-[3rem] flex items-center justify-center bg-rodu-medium rounded-t-[10px] p-5">
          <p className="text-white whitespace-pre-line">{title}</p>
        </div>
        <div className="Posts-modal-form">
          <button
            onClick={() => yesHandler()}
            className="Post-modal-button-yes"
          >
            예
          </button>
          <button onClick={() => noHandler()} className="Post-modal-button-no">
            아니오
          </button>
        </div>
      </div>
    </Modal>
  );
}
