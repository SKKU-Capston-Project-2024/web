import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styles from './ReviewDetail.module.css';
import StarRating from '../../components/starRating/StarRating';
import ToggleFilter from "../../components/toggleFilter/ToggleFilter";
import ReviewPreview from "../../components/reviewPreview/ReviewPreview";
import { UserContext } from "../../context/UserContext";
import AlbumReviewWrite from "../../components/albumReviewModal/AlbumReviewWrite";


const ReviewDetail = (props) => {
    const { user } = useContext(UserContext);
    const [albumInfo, setAlbumInfo] = useState(null);
    const [myRating, setMyRating] = useState("-");
    const [myReviewId, setMyReviewId] = useState(null); 
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가
    const [reviewWriteModalOpen, setReviewWriteModalOpen] = useState(false); 
    const [isLiked, setIsLiked] = useState(false); // 추가: 좋아요 상태 관리
    
    const fetchAlbumInfo = async () => {
        try {
            setIsLoading(true); // 데이터를 불러오기 시작할 때 로딩 상태를 true로 설정
            const response = await axios.get(`${process.env.REACT_APP_API_HOST}/album/info/${props.albumId}`, {});
            console.log(response.data);
            setAlbumInfo(response.data);
            setIsLoading(false); // 데이터를 불러온 후 로딩 상태를 false로 설정
        } catch (error) {
            console.error('Failed to fetch album information:', error);
            alert('잘못된 접근입니다.');
            history.back();
        }
    };

    const getMyReview = async () => {
        const jwt = localStorage.getItem("accessToken");
        if (jwt) {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_HOST}/album/review/check?albumId=${props.albumId}`, {
                    headers: { Authorization: `Bearer ${jwt}` }
                });
                if (response.data.userHasReviewed && response.data.albumReviewId !== null) {
                    setMyReviewId(response.data.albumReviewId);
                }
            } catch (error) {
                console.error('Failed to fetch my review:', error);
            }
        }
    };

    const getMyRating = async () => {
        const jwt = localStorage.getItem("accessToken");
        if (jwt === null) {
            return;
        }
        axios.get(`${process.env.REACT_APP_API_HOST}/album/${props.albumId}/rating`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        }).then((response) => {
            if (response.data.rating !== null) {
                setMyRating(response.data.rating)
            }
        }).catch((error) => {
            console.error('Failed to fetch my review:', error);
        });
    }

    const moveToMyReviewOrWrite = () => {
        console.log(user?.id);
        if (!user?.id) {
            alert('로그인이 필요합니다.');
            const loginDialog = document.getElementById("loginModal");
            loginDialog.showModal();
            return;
        }
        if (myReviewId) {
            window.location.href = `/album/review/${myReviewId}`;
        } else {
            setReviewWriteModalOpen(true);
        }
    };

    const toggleReviewLike = () => {
        const jwt = localStorage.getItem("accessToken");
        if (!jwt) {
            alert('로그인이 필요합니다.');
            const loginDialog = document.getElementById("loginModal");
            loginDialog.showModal();
            return;
        }
        axios.post(`${process.env.REACT_APP_API_HOST}/album/review/${myReviewId}/like/toggle`, {}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        }).then((response) => {
            setIsLiked(response.data.likeStatus === "ON")
        }).catch((error) => {
            console.error('Failed to toggle like:', error);
            setIsLiked(!isLiked); // 실패 시 현재 상태 반전
        });
    };

    const onReviewLikeClicked = () => {
        setIsLiked(!isLiked);
        toggleReviewLike();
    };
    
    const onContainerClick = () => {
    };

    useEffect(() => {
        fetchAlbumInfo();
        getMyReview();
        getMyRating();
    }, [props.albumId]);

    if (isLoading) {
        return <div>Loading album information...</div>; // 로딩 상태일 때 로딩 메시지 표시
    }

    return (
        <>
        <div className={styles.reviewContainer}>
            <div className={styles.reviewWriter}>
                <span className={styles.writerName}>아무거나듣는사람</span>
                <img className={styles.writerPhoto} src="/defaultProfile.svg" />
            </div>
            <div className={styles.reviewCover}>
                <img src={albumInfo?.albumImg} alt="Album Art" className={styles.albumArt}/>
                <div className={styles.reviewInfo}>
                    <div className={styles.albumTitle}>{albumInfo?.albumName}</div>
                    <div className={styles.artist}>{albumInfo?.artistName}</div>  
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
                    <img src="/heart-icon.svg" alt="likes" className={styles.socialIcon} onClick={onReviewLikeClicked} />
                    <div className={styles.socialCount}>100</div>    
                </div>
                <img src="/share.svg" alt="share" className={styles.shareIcon} />
            </div>
        </div>
        <button className={styles.btnWrite} onClick={moveToMyReviewOrWrite}>이 앨범 리뷰하기 / 나의 리뷰보기</button>     
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