"use client";

import styles from './page.module.css';
import {useRouter} from 'next/navigation';
import {useEffect, useState} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";


export default function Home() {
    const router = useRouter();
    //今日の日付を取得するnew Dataを格納
    const today = new Date();
    //年・月・日・曜日を取得
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDate();
    const weekday = ["日", "月", "火", "水", "木", "金", "土"];
    const dayText = weekday[today.getDay()]; // 例えば水曜日なら "水" になる
    const [emblaRef] = useEmblaCarousel({
        loop: false,
        align: 'start',
        skipSnaps: false
    }, [Autoplay({delay: 3000})]);

    return (
        <main className={styles.main}>

            {/*年月日曜日の表示*/}
            <div className={styles.days}>
                {year + "年" + month + "月" + date + "日" + "(" + dayText + ")"}
            </div>

            <div className={styles.summary}>
                <div className={styles.text_title}>今日の歩数</div>


                <div className={styles.Task}>
                    <div className={styles.challenge_line}>
                        チャレンジライン未達成！
                    </div>
                    <div className={styles.consecutive_achievement_record}>
                        連続記録達成中！現在：x1.5
                    </div>
                </div>
            </div>

            {/*------------------歩数データの表示---------------*/}
            <div className={styles.data}>
                    <p>歩数データ取得中．．．</p>
            </div>

            {/*--------------------------距離、カロリー、時間の表示---------------------------*/}
            <div className={styles.daily_activity_summary_box}/>
            <section className={styles.daily_activity_summary}>
                <div className={styles.embla_viewport} ref={emblaRef}>
                    <div className={styles.embla_container} style={{transform: "translate3d(0px, 0px, 0px)"}}>
                        <div className={styles.range}>
                            <p className={styles.range_title}>距離</p>

                            <div className={styles.range_data}>

                                <div className={styles.range_img}>
                                    <img className={styles.range_imgrun}
                                         src="/images/run_100km.png"
                                         alt="距離の画像"/>
                                </div>

                                <div className={styles.range_km}>
                                    100.0km
                                </div>
                            </div>
                        </div>

                        <div className={styles.calorie}>
                            <p className={styles.calorie_title}>カロリー</p>

                            <div className={styles.calorie_data}>

                                <div className={styles.calorie_img}>
                                    <img className={styles.calorie_imgfiea}
                                         src="/images/calorie.png"
                                         alt="カロリーの画像"/>
                                </div>
                                <div className={styles.calorie_kcal}>
                                    1000kcal
                                </div>
                            </div>
                        </div>

                        <div className={styles.time}>
                            <p className={styles.time_title}>時間</p>

                            <div className={styles.time_data}>

                                <div className={styles.time_img}>
                                    <img className={styles.time_imgtimer}
                                         src="/images/timer.png"
                                         alt="時間の画像"/>
                                </div>
                                <div className={styles.time_timer}>
                                    00:40
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*---------------------ランキングの表示-------------------------*/}
            <div className={styles.ranking}>
                <div className={styles.ranking_line}>
                    <div className={styles.ranking_title}>ランキング一覧（1 ~ 100位）</div>
                    <div className={styles.ranking_list}>

                    </div>
                    <div className={styles.ranking_you}>
                        <p className={styles.ranking_now}>あなたの順位は：{}</p>
                    </div>
                </div>
            </div>

            {/*------------------------下部のナビゲーション----------------------*/}
            <div className={styles.nav}>
                <button
                    className={styles.button01}
                    onClick={() => router.push('/recode')}
                >
                    <img
                        className={styles.home_img03}
                        src="/images/recode.png"
                        alt="記録ボタン用の画像"
                    />
                </button>

                <button className={styles.button02}>
                    <img
                        className={styles.home_img02}
                        src="/images/run_human.png"
                        alt="ホームボタン用の画像"
                    />
                </button>
            </div>
        </main>
    );
}
