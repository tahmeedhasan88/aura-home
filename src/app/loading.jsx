import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React from 'react';

const loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <DotLottieReact
                src="/animations/loading.lottie"
                autoplay
                loop
                style={{
                    width: 200,
                    height: 200,
                }}
            />
            
        </div>
    );
};

export default loading;