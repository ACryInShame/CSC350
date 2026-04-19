// Louis J D'Agusto
// April 18th 2026
// Week 5 Assignment - Photo shoot Game

export default function Image({src,alt,size})
{
    return(
        <img src={src}
            alt = {alt}
            className="ImageComponent"
            style={{ width: size, height: size}}
        />
    );
}