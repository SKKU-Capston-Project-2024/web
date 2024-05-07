import styles from './ReviewDetail.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ReviewDetail = () => {
    return (
        <>
        <div className={styles.reviewContainer}>
            <div ckassName={styles.reviewWriter}>
                <span ckassName={styles.writerName}>아무거나듣는사람</span>
                <img className={styles.writerPhoto}src="/defaultProfile.svg" />
            </div>
            <div className={styles.reviewCover}>
                앨범커버 및 별점
            </div>
            <div className={styles.reviewTitle}>
                <span className={styles.title}>리뷰제목</span>
                <span className={styles.Dates}>수정일자</span>
            </div>
            <div className={styles.reviewContent}>
                리뷰내용
            </div>
            <div className={styles.reivewNav}>
                리뷰 네비게이션
            </div>
            <div className={styles.commentContainer}></div>
        </div>
        <div>
            <button className={styles.btnWrite}>이 앨범 리뷰하기</button>
        </div>
        <div>
            <div className={styles.othersContainer}>
                다른 사람 리뷰 및 수록곡 리뷰
            </div>
        </div>
        </>
    );
}

export default ReviewDetail;