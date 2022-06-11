import Image from "next/image";
import Header from "../../components/common/Header";
import BodyFrame from "../../components/common/BodyFrame";

import styles from "./introduction.module.css";

import sharingImg from "../../public/images/sharingIntro.svg";
import givingImg from "../../public/images/givingIntro.svg";
import footerImg from "../../public/images/footer.svg";

export default function Introduction() {
  return (
    <>
      <Header searchBox />
      <BodyFrame>
        <div className={styles.introduction__title}>나누기 곱하기(÷×)는 ?</div>
        <div className={styles.introduction__divider}></div>
        <p className={styles.introduction__intro}>
          기부 사이트 큐레이션 및 다양한 기부 방법을 소개하기 위한 플랫폼입니다.
          <br />
          자신이 가진 것을 나눌수록 행복은 곱셈이 되어 돌아옵니다.
        </p>
        <div className={styles.introduction__body}>
          <div className={styles.introduction__body_wrapper}>
            <img src={sharingImg.src} height="300px" />
            <div className={styles.introduction__body_title}>나누기(÷)란?</div>
            <div className={styles.introduction__body_content}>
              기부금을 지불하거나 경제적으로 후원하는 형태의 기부 활동입니다.
              정기후원, 1:1 후원, 양육 등이 있습니다.
            </div>
          </div>
          <div className={styles.introduction__body_wrapper}>
            <img src={givingImg.src} height="300px" />
            <div className={styles.introduction__body_title}>곱하기(×)란?</div>
            <div className={styles.introduction__body_content}>
              자원 봉사, 재능 기부 등 직접 참여할 수 있는 기부 활동으로서
              경제적인 부담을 느끼지 않고도 참여할 수 있는 캠페인입니다.
            </div>
          </div>
        </div>
        <img src={footerImg.src} className={styles.introduction__footer} />
      </BodyFrame>
    </>
  );
}
