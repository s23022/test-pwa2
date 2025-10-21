'use client';

import styles from './recode.module.css';
import { useRouter } from 'next/navigation';


export default function Recode() {

    const router = useRouter();
    return (
        <main className={styles.main}>{/* スマホのサイズに設定 */}

            <p className={styles.text}>recode</p> {/* とりあえず配置したテキスト、上下左右スマホのサイズになったら真ん中に来るようCSS書いてる */}
            <div className={styles.nav}>
                <button className={styles.button01}>
                    <img className={styles.home_img03} src="/images/recode.png" alt="記録ボタン用の画像"/>
                </button>
                <button
                    className={styles.button02}
                    onClick={() => router.push('/')}
                >
                    <img className={styles.home_img02} src="/images/run_human.png" alt="ホームボタン用の画像"/>
                </button>
                <button
                    className={styles.button03}
                    onClick={() => router.push('/ranking')}
                >
                    <img className={styles.home_img03} src="/images/ranking.png" alt="ランキングボタン用の画像"/>
                </button>
            </div>
        </main>
    )
}