// Louis J D'Agusto
// April 21st 2026
// Week 6 Assignment - Navigation
type RowProps = {
  children: React.ReactNode;
};

export default function TwoColumnRow({ children }: RowProps) {
  return (
    <div className="row m-3 align-items-start g-4">
      {children}
    </div>
  );
}