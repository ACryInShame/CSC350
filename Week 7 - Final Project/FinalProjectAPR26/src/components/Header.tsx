// Louis J D'Agusto
// April 21st 2026
// Week 7 - Final Project
type HeaderProps = {
    text: string;
    className?: string; // optional
};

export default function Header({text,className="display-4 text-center fw-bold text-primary mt-4"}:HeaderProps)
{
    return(
        <div className='bg-dark py-3 shadow'>
          <h1 className={className}>{text}</h1>
        </div>
    )
}