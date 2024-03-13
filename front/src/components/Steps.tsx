const Steps = ({ label }: { label: string }) => {
  return (
    <section className="w-[792px] h-fit px-[24px]">
      {label === "1" && (
        <ul className="steps w-full h-full">
          <li className="step step-primary">Дэлгүүрийн нэр</li>
          <li className="step">Бүс нутаг</li>
          <li className="step">Нэмэлт мэдээлэл</li>
        </ul>
      )}
      {label === "2" && (
        <ul className="steps w-full h-full">
          <li className="step step-primary" data-content="✓">
            Дэлгүүрийн нэр
          </li>
          <li className="step step-primary">Бүс нутаг</li>
          <li className="step">Нэмэлт мэдээлэл</li>
        </ul>
      )}
      {label === "3" && (
        <ul className="steps w-full h-full">
          <li className="step step-primary " data-content="✓">
            Дэлгүүрийн нэр
          </li>
          <li className="step step-primary" data-content="✓">
            Бүс нутаг
          </li>
          <li className="step step-primary">Нэмэлт мэдээлэл</li>
        </ul>
      )}
    </section>
  );
};
export default Steps;
