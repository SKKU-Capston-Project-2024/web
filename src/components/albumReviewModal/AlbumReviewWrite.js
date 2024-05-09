import React from 'react';
import styles from './AlbumReviewWrite.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const AlbumReviewWrite = ({ albumId, reviewWriteModalOpen, setReviewWriteModalOpen, reviewWriteModalBackground }) => {
    const [albumInfo, setAlbumInfo] = useState(null); // 앨범 정보를 저장할 상태

    useEffect(() => {
        const fetchAlbumInfo = async () => {
            if (!albumId) return;
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_HOST}/album/info/${albumId}`, {});
                console.log(response.data);
                setAlbumInfo(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAlbumInfo();
    }, [albumId]); // albumId가 변경될 때마다 함수 실행

    if (!albumInfo) {
        return <div>Loading...</div>; // 데이터 로딩 중 표시
    }
    
    return (
        <div className={styles.modalContainer} ref={reviewWriteModalBackground} onClick={e => {
            if (e.target === reviewWriteModalBackground.current) {
                setReviewWriteModalOpen(false);
            }
        }}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <div className={styles.modalName}>앨범 리뷰 작성하기</div>
                    <input type="button" className={styles.modalCloseBtn} onClick={() => setReviewWriteModalOpen(false)}></input>
                </div>
                <div className={styles.albumCover}>
                    <div>
                        <img src={albumInfo.albumImg} alt="albumCover" className={styles.albumCoverImg}></img>
                    </div>
                    <div className={styles.albumInfo}>
                        <div className={styles.albumName}>{albumInfo.albumName}</div>
                        <div className={styles.albumArtist}>{albumInfo.artistName}</div>
                    </div>
                </div>
                <div className={styles.starRating}>
                    <div className={styles.starName}>별점</div>
                    <div></div>
                </div>
                <div className={styles.review}>
                    <div className={styles.reviewName}>리뷰</div>
                    <form className={styles.reviewForm}>
                        <input className={styles.reviewTitle} type="text" placeholder="제목을 입력하세요"></input>
                        <textarea className={styles.reviewContent} type="text" placeholder="내용을 입력하세요"></textarea>
                        <input className={styles.submitBtn} type="submit" value="저장하기"></input>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AlbumReviewWrite;
