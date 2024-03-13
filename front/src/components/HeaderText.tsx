type HeaderTextProps = {
  label: string;
};

const HeaderText = ({ label }: HeaderTextProps) => {
  return (
    <h2 className="font-[700] text-[32px] text-[#121316] font-sans">{label}</h2>
  );
};

export default HeaderText;
