import { createPortal } from "react-dom";
import styles from "./AlbumDetail.module.css";
import {useEffect, useState, useRef} from "react";
import {useParams} from "react-router-dom";
import AlbumReviewWrite from "../../components/albumReviewModal/AlbumReviewWrite";

const AlbumDetail = () =>{
    const [reviewWriteModalOpen, setReviewWriteModalOpen] = useState(false);
    const reviewWriteModalBackground = useRef();
    const { id } = useParams(); // id 파라미터 추출

    return (
        <>
         <h1>Album ID: {id}</h1> {/* ID 출력 */}
        <div className={styles.reviewBtn}>
            <button className={styles.writeReview} onClick={() => setReviewWriteModalOpen(true)}>
            이 앨범 리뷰하기
            </button>
        </div>

        {reviewWriteModalOpen &&            
               <AlbumReviewWrite 
                    reviewWriteModalOpen={reviewWriteModalOpen}
                    setReviewWriteModalOpen={setReviewWriteModalOpen}
                    reviewWriteModalBackground={reviewWriteModalBackground}
               />
        }
        </>
    );
}

export default AlbumDetail;