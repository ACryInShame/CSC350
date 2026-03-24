export default function Image({img_file, alt, width, height, name})
{
    return (
        <img src={`/src/assets/${img_file}`}
            alt={alt}
            width={width}
            height={height}
         />
    );
}

