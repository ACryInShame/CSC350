// Louis J D'Agusto
// April 21st 2026
// Week 6 Assignment - Navigation
type HeaderProps = {
    text: string;
};

export default function Header({text}:HeaderProps)
{
    return(
        <div className='bg-dark py-3 shadow'>
          <h1 className="display-4 text-center fw-bold text-primary mt-4">{text}</h1>
        </div>
    )
}