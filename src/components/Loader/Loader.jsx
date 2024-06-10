import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import css from "./Loader.module.css"
import { Logo } from 'components/Logo/Logo';


const Loader = () => {
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        if (!loading) {
            const interval = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress >= 100) {
                        clearInterval(interval);
                        return 100;
                    }
                    return prevProgress + 1;
                });
            }, 20);

            return () => {
                clearInterval(interval);
            };
        }

        return () => {
            clearTimeout(timer);
        };
    }, [loading]);

    return (
        <div className={css.loader_bg}>
            <div className={css.container}>
                {loading ?
                    <Logo loader={true} />



                    :
                    <CircularProgressbar
                        value={progress}
                        text={`${progress}%`}
                        styles={buildStyles({
                            textColor: '#fff',
                            pathColor: '#fff',
                            trailColor: 'rgba(255, 255, 255, 0.3)',
                            textSize: '16px',
                            pathTransitionDuration: 0.5,


                        })} strokeWidth={0.5} backgroundColor={"transparent"}
                    />
                }
            </div>
        </div>
    );
};

export default Loader;
