import styles from './ReviewDetail.module.css';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import StarRating from '../../components/starRating/StarRating';
import ToggleFilter from "../../components/toggleFilter/ToggleFilter";
import ReviewPreview from "../../components/reviewPreview/ReviewPreview";
import {UserContext} from "../../context/UserContext";

const ReviewDetail = (props) => {
    const onContainerClick = () => {
    };
    const { user } = useContext(UserContext); 
    const [isLoading, setIsLoading] = useState(true);
    const [reviewStatus, setReviewStatus] = useState(null); 

    useEffect(() => {
        const fetchReviewStatus = async () => {
            if (!user) {
                setReviewStatus(null);
                setIsLoading(false);
                return;
            }
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_HOST}/album/review/status/${props.albumId}`, {
                    headers: { Authorization: `Bearer ${user.token}` }
                });
                setReviewStatus(response.data.hasReviewed ? 'written' : 'not_written');
            } catch (error) {
                console.error('Error fetching review status:', error);
                setReviewStatus('not_written'); 
            }
            setIsLoading(false);
        };

        fetchReviewStatus();
    }, [user, props.albumId]);

    const handleButtonClick = () => {
        if (!user) {
            // 여기에서 로그인 모달을 표시하는 로직
            alert('로그인이 필요합니다.');
            return;
        }
        if (reviewStatus === 'written') {
            // 리뷰 상세 페이지로 이동
            window.location.href = `/review/${props.albumId}`;
        } else {
            // 리뷰 작성 모달 표시
            alert('리뷰 작성 페이지로 이동합니다.');
        }
    };

    return (
        <>
        <div className={styles.reviewContainer}>
            <div className={styles.reviewWriter}>
                <span className={styles.writerName}>아무거나듣는사람</span>
                <img className={styles.writerPhoto} src="/defaultProfile.svg" />
            </div>
            <div className={styles.reviewCover}>
                <img className={styles.albumCover} src="/ive.png"/>
                <div className={styles.reviewInfo}>
                    <div className={styles.albumTitle}>9자넘으면...</div>
                    <div className={styles.artist}>아티스트</div>  
                    <div className={styles.rating}>
                        <StarRating score={10}/>
                    </div>
                    <div className={styles.dates}>2024.04.01 작성 (수정됨)</div>
                </div>
            </div>
            <div className={styles.reviewTitle}>
                리뷰제목이만약길어지면어떻게 되려나 말이야 모르겠네
            </div>
            <div className={styles.reviewContent}>
                &ldquo;다른 문을 열어/따라갈 필요는 없어&rdquo;라 외쳤던 &lsquo;I am&rsquo;의 가사가 무색하게 많은 것이 겹쳐 보인다. 베이스라인을 강조한 &lsquo;Off the record&rsquo;는 피프티 피프티의 &lsquo;Cupid&rsquo;와 태연의 &lsquo;Weekend&rsquo;가 레퍼런스로 삼은 도자 캣의 분홍색 디스코 감성을 닮았고, &lsquo;Baddie&rsquo;의 사운드 질감과 랩 위주의 구성에서 에스파의 &lsquo;Savage&rsquo;와 NCT의 잔향을 지우기란 쉽지 않다. 전통적인 색채로 &lsquo;정통성&rsquo;을 손에 쥐었던 아이브가 눈치를 많이 보고 있다.
                그동안 확고한 캐릭터로 단단한 입지를 구축한 그룹이기에 익숙한 무기를 내려놓은 이번 전략은 다소 의아하다. 사실 직전 정규 앨범 &lt; I&rsquo;ve IVE &gt;에서도 여러 장르적인 시도를 펼치긴 했으나 핵심으로 배치하지는 않았기에 &lt; I&rsquo;ve Mine &gt;의 태도 전환은 조금은 갑작스러운 면이 있다. 짐작하자면 맹렬한 고음과 선명한 멜로디 라인 중심의 이미지로 굳어지는 것에 대한 &ldquo;
            </div>
            <div className={styles.reivewNav}>
                <div className={styles.likeIcon}>
                    <img src="/heart-icon.svg" alt="likes" className={styles.socialIcon} />
                    <div className={styles.socialCount}>100</div>    
                </div>
                <img src="/share.svg" alt="share" className={styles.shareIcon} />
            </div>
        </div>
        <button className={styles.btnWrite}>이 앨범 리뷰하기 / 나의 리뷰보기</button>        
        <div>
            <div className={styles.othersContainer}>
                <div className={styles.headerContainer}>
                    <h2>~의 다른 리뷰</h2>
                    <ToggleFilter menu={["최근", "인기"]} />
                    </div>
                    <div className="verticalScroll">
                    <ReviewPreview
                        ellipse85="/ellipse-85@2x.png"
                        iFeel="I feel"
                        rectangle1480="/rectangle-1480@2x.png"
                        prop="아이들 리뷰 제목"
                        onContainerClick={onContainerClick}
                    />
                    <ReviewPreview
                        ellipse85="/ellipse-85@2x.png"
                        iFeel="I feel"
                        rectangle1480="/rectangle-1480@2x.png"
                        prop="아이들 리뷰 제목"
                        onContainerClick={onContainerClick}/>
                </div>
            </div>

            <div className={styles.othersContainer}>
                <div className={styles.headerContainer}>
                    <h2>이 앨범의 다른 리뷰</h2>
                    <ToggleFilter menu={["최근", "인기"]} />
                    </div>
                    <div className="verticalScroll">
                    <ReviewPreview
                        ellipse85="/ellipse-85@2x.png"
                        iFeel="I feel"
                        rectangle1480="/rectangle-1480@2x.png"
                        prop="아이들 리뷰 제목"
                        onContainerClick={onContainerClick}
                    />
                    <ReviewPreview
                        ellipse85="/ellipse-85@2x.png"
                        iFeel="I feel"
                        rectangle1480="/rectangle-1480@2x.png"
                        prop="아이들 리뷰 제목"
                        onContainerClick={onContainerClick}/>
                </div>
            </div>

        </div>
        </>
    );
}

export default ReviewDetail;