import {ButtonProps} from "@/models/interface";
import Image from "next/image";

const Button = ({name, onClick, className, imageSrc, ...props}: ButtonProps) => {
    return (
        <button className={`${className}`} onClick={onClick} {...props}>
            {/*<span>{name}</span>*/}
            {imageSrc ? (
                <Image
                    src={imageSrc as string}
                    alt=""
                    quality={100}
                    priority
                    width={24} height={24}
                />
            ) : null}
        </button>
    )
}
export default Button;