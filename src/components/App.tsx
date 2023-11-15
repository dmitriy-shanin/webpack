import React, {useState} from 'react';
import styles from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import Avatar from '@/assets/cloud.svg'

export const App = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => setCount(count + 1)
    return (
        <div>
            <h1>PLATFORM={__PLATFORM__}</h1>
            <h2>hellodsd</h2>
            <Avatar width={150} height={150} fill={'red'} style={{color: 'green'}}/>
            <Link to={'/about'}>about</Link>
            <Link to={'/shop'}>shop</Link>
            <button onClick={increment} className={styles.button}>inc</button>
            <Outlet />
        </div>
    );
};
