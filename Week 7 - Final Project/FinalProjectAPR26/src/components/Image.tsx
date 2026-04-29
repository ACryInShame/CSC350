// Louis J D'Agusto
// April 21st 2026
// Week 6 Assignment - Navigation
type ImageProps = {
    src: string;
    alt: string;
    className?: string; // optional
};

export default function Image({src,alt, className="col-md-6 img-fluid rounded shadow-sm"}:ImageProps)
{
    return(
        <img src={src}
            alt = {alt}
            className={className}
        />
    );
}