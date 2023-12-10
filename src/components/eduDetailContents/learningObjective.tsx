interface LearningObjectiveProps {
  title: string;
  titleMarginTop: number;
  contents1: string;
  contents2: string;
}

export function LearningObjective({
  title,
  titleMarginTop,
  contents1,
  contents2,
}: LearningObjectiveProps) {
  return (
    <>
      <div className="Body" style={{ marginTop: `${titleMarginTop}rem` }}>
        <div className="EduTable-container">
          <div className="EduDetailContents-title-box">
            <p className="EduDetailContents-title">{title}</p>
          </div>
        </div>

        <div
          className="LearningObjective-container"
          style={{ marginTop: "2.444rem" }}
        >
          <p className="LearningObjective-content-container">{contents1}</p>
          <p className="LearningObjective-content-container">{contents2}</p>
        </div>
      </div>
    </>
  );
}
