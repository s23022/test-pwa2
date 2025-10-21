"use client";

import styles from './page.module.css';
import { useRouter } from 'next/navigation';{/* next/router だとだめらしく、navigationにすると治った*/}


export default function Home() {
    const router = useRouter();
    return (
        <main className={styles.main}>{/* スマホのサイズに設定 */}

            <p className={styles.text}>Home</p> {/* とりあえず配置したテキスト、上下左右スマホのサイズになったら真ん中に来るようCSS書いてる */}
            <div className={styles.nav}>
                <button
                    className={styles.button01}
                    onClick={() => router.push('/recode')}
                >
                    <img className={styles.home_img03} src="/images/recode.png" alt="記録ボタン用の画像"/>
                </button>
                <button className={styles.button02}>
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