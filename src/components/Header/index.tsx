/* eslint-disable @next/next/no-img-element */
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="./logo.svg" alt="IgNews" />
                <nav>
                    <a href="" className={styles.active}>Home</a>
                    <a href="">Posts</a>
                </nav>

                <SignInButton/>
            </div>
        </header>
    );
}