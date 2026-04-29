// Louis J D'Agusto
// April 21st 2026
// Week 7 - Final Project
type ImageProps = {
    src: string;
    alt: string;
    style?: React.CSSProperties;
    className?: string; // optional
};

export default function Image({src,alt,style, className="img-fluid rounded m-3"}:ImageProps)
{
    return(
        <img src={src}
            alt = {alt}
            className={className}
            style={style}
        />
    );
}