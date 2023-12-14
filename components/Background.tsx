// components/Background.js
import Image from 'next/image'
import back from '../public/back.png'

const Background = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]">
            <Image
                src={back}
                alt="Background Image"
                fill
            />
        </div>
    );
};

export default Background;
