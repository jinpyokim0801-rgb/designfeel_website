"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const processSteps = [
  {
    number: "01",
    title: "Scan & preserve",
    korean: "원본을 먼저 남기는 일",
    text: "작품 제작 전 모든 원본을 가장 먼저 고해상도로 스캔합니다. 아이가 그린 원래의 모습은 디지털 이미지 파일로 온전히 보존해 가족에게 전달하고, 실물의 의미 있는 흔적은 새로운 작품 속에서 이어갑니다.",
    image: "/images/process/private-scan-v2.png",
  },
  {
    number: "02",
    title: "Sort & read",
    korean: "그림 속 이야기를 읽는 일",
    text: "여러 시기의 그림과 기록을 모아 주제, 색, 반복되는 형태와 이야기에 따라 분류하고 작품의 방향을 읽습니다.",
    image: "/images/process/private-sort-v2.png",
  },
  {
    number: "03",
    title: "Review & select",
    korean: "선과 색을 발견하는 일",
    text: "실물 그림의 상태를 한 장씩 검수하고, 작품 안에서 살아날 선과 형태, 색의 조각을 신중하게 선택합니다.",
    image: "/images/process/private-review-v2.png",
  },
  {
    number: "04",
    title: "Cut & compose",
    korean: "새로운 화면을 만드는 일",
    text: "선택한 아이의 실물 그림을 직접 오리고, 캔버스 위에서 조각의 관계와 여백을 살피며 새로운 화면을 구성합니다.",
    image: "/images/process/private-compose-v2.png",
  },
  {
    number: "05",
    title: "Collage & paint",
    korean: "두 사람의 그림이 만나는 일",
    text: "아이의 그림 조각을 캔버스에 직접 붙이고, 그 위와 주변에 작가의 선과 색을 더해 하나의 콜라주 회화로 완성합니다.",
    image: "/images/process/private-paint-v2.png",
  },
  {
    number: "06",
    title: "Certify & preserve",
    korean: "작품의 시간을 기록하는 일",
    text: "완성된 작품을 검수하고 제작 과정과 작품 정보를 인증서에 기록합니다. 스캔 이미지 파일과 기록물, 작품을 안전하게 포장해 전달합니다.",
    image: "/images/process/private-package-v2.png",
  },
];

export default function Home() {
  const processRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const sendApplication = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `[Design Feel 작품 신청] ${form.get("childName") || "새로운 이야기"}`;
    const body = [
      `보호자 성함: ${form.get("parentName") || ""}`,
      `아이 이름 / 나이: ${form.get("childName") || ""}`,
      `연락처: ${form.get("phone") || ""}`,
      `이메일: ${form.get("email") || ""}`,
      `그림 수량: ${form.get("artworkCount") || ""}`,
      "",
      "아이와 그림에 대한 이야기",
      `${form.get("story") || ""}`,
      "",
      "원하는 작품 방향",
      `${form.get("request") || ""}`,
    ].join("\n");

    window.location.href = `mailto:kim.chaewon00@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    const update = () => {
      const section = processRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const progress = Math.min(0.999, Math.max(0, -rect.top / scrollable));
      setActiveStep(Math.min(processSteps.length - 1, Math.floor(progress * processSteps.length)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Design Feel 홈으로">
          <img src="/images/brand/designfeel-logo.png" alt="Design Feel graphic design community" />
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          {[
            ["About", "#about"],
            ["Process", "#process"],
            ["What you receive", "#deliverables"],
            ["Application", "#collection"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a href={href} onClick={() => setMenuOpen(false)} key={label}>{label}</a>
          ))}
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Private childhood archive · Seoul</p>
          <h1>We design<br />what cannot<br />be seen.</h1>
          <p className="hero-description">
            지나쳐버리기 쉬운 유년의 순수한 시선을<br />
            세상에 단 하나뿐인 아카이브 작품으로 보존합니다.
          </p>
          <a className="primary-button" href="#collection">
            첫 번째 이야기 시작하기 <span>→</span>
          </a>
        </div>
        <figure className="hero-image">
          <img src="/images/process/private-finished-selected.png" alt="아이들의 그림과 작가의 회화가 어우러진 Design Feel 완성 작품" />
          <figcaption><span>프라이빗 커미션 · 작품 세부</span><span>단 하나의 작품</span></figcaption>
        </figure>
        <div className="hero-index">
          <span>예약제로 진행되는 작품</span>
          <span>한 가족</span><i /><span>하나의 이야기</span><i /><span>단 하나의 작품</span>
        </div>
      </section>

      <section className="why" id="about">
        <div className="section-label">01 — Philosophy</div>
        <div className="why-heading">
          <p className="why-kicker">Why we preserve childhood</p>
          <h2>Keeping what<br />would disappear.</h2>
        </div>
        <div className="why-visual">
          <figure>
            <img src="/images/process/childhood-why-scene.png" alt="밝은 작업실에서 아이가 그림을 그리고 주변에 어린 시절의 다채로운 그림들이 풍성하게 펼쳐진 모습" />
            <figcaption><span>모든 그림에는 한 시절이 담겨 있습니다</span><span>유년의 기록 · 01</span></figcaption>
          </figure>
          <div className="why-copy">
            <p className="why-lead">
              한 세대의 디자인 유산에서 출발한 디자인필은, 아이가 거침없이
              그어 내린 선과 색채 속에서 그 시절에만 존재하는 빛나는 우주를 발견합니다.
            </p>
            <p>
              아이가 지었던 첫 크레파스의 흔적은 단순한 종이가 아닙니다.
              다시 돌아오지 않는 유년기의 시간이자, 우리 가족만의 찬란한 서사입니다.
            </p>
          </div>
        </div>
      </section>

      <section className="intro" id="studio">
        <div className="section-label">02 — Design Feel Archive</div>
        <div className="intro-heading">
          <h2>The living<br />archive.</h2>
          <p>
            한 아이의 시각 언어가 쌓여<br />
            한 가족의 역사가 됩니다.
          </p>
        </div>
        <div className="intro-grid">
          <figure>
            <img src="/images/process/living-archive-v1.png" alt="여러 시기의 아이 그림과 아카이브 북, 디지털 기록, 작품 증서가 체계적으로 보존된 프라이빗 가족 아카이브" />
            <figcaption>시간과 함께 깊어지는 한 가족의 살아 있는 컬렉션.</figcaption>
          </figure>
          <div className="intro-copy">
            <p>
              디자인필은 아이의 그림을 수집하고 기록해 한 가족만의
              아카이브를 만드는 프라이빗 아트 스튜디오입니다.
            </p>
            <p>
              날짜와 나이, 그림 속 이야기, 반복해서 등장하는 색과 형태를
              함께 기록합니다. 흩어져 있던 그림은 원본 이미지와 작품,
              제작 기록으로 이어지며 하나의 체계적인 컬렉션이 됩니다.
            </p>
            <p>
              단순히 종이를 보관하는 데서 끝나지 않고, 시간이 흐를수록
              의미가 깊어지는 가족의 문화적 자산으로 남깁니다.
            </p>
            <a href="#process">아카이브가 만들어지는 과정 <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="private-notes">
          <article><span>01</span><h3>One child</h3><p>한 아이만의 선과 색, 반복되는 형태와 이야기를 읽습니다.</p></article>
          <article><span>02</span><h3>Many years</h3><p>서로 다른 시기의 그림과 기록을 시간의 흐름 안에서 연결합니다.</p></article>
          <article><span>03</span><h3>One archive</h3><p>작품·원본 파일·제작 기록을 하나의 프라이빗 가족 컬렉션으로 남깁니다.</p></article>
        </div>
      </section>

      <section className="pinned-process" id="process" ref={processRef}>
        <div className="process-sticky">
          <div className="process-header">
            <span>03 — Private commission process</span>
            <span>One family at a time</span>
          </div>
          <div className="process-stage">
            <div className="process-copy">
              <div className="step-count">
                <strong>{processSteps[activeStep].number}</strong>
                <span>/ 06</span>
              </div>
              {processSteps.map((step, index) => (
                <article className={activeStep === index ? "step-info active" : "step-info"} key={step.number}>
                  <p>{step.korean}</p>
                  <h2>{step.title}</h2>
                  <p className="step-description">{step.text}</p>
                </article>
              ))}
              <div className="step-progress">
                {processSteps.map((step, index) => (
                  <i className={index <= activeStep ? "active" : ""} key={step.number} />
                ))}
              </div>
            </div>
            <div className="process-images">
              {processSteps.map((step, index) => (
                <img
                  className={activeStep === index ? "active" : ""}
                  src={step.image}
                  alt={`${step.korean} 과정`}
                  key={step.number}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="deliverables" id="deliverables">
        <div className="section-label">04 — What you receive</div>
        <div className="deliverables-lead">
          <h2>One artwork.<br />A family archive.</h2>
          <p>완성된 회화 한 점뿐 아니라, 작품이 만들어진 시간과 아이의 원본까지 오래 간직할 수 있도록 함께 정리해 전달합니다.</p>
        </div>
        <div className="deliverables-grid">
          <article><span>01</span><h3>Original artwork</h3><p>아이의 그림과 작가의 회화가 결합된 세상에 단 하나뿐인 실물 작품 1점</p></article>
          <article><span>02</span><h3>Premium wood frame</h3><p>작품의 크기와 색, 설치 공간을 고려해 완성한 맞춤 원목 액자</p></article>
          <article><span>03</span><h3>Certificate of ownership</h3><p>작품 번호와 제목, 재료, 제작 연도, 작가의 서명과 압인이 기록된 실물 소장권</p></article>
          <article><span>04</span><h3>Original scans</h3><p>작품 제작 전 보존한 아이 그림의 고해상도 디지털 원본 파일</p></article>
          <article><span>05</span><h3>Digital archive</h3><p>완성 작품과 세부 이미지, 가족 소장용 고화질 디지털 기록 파일</p></article>
          <article><span>06</span><h3>Process documentation</h3><p>선별과 구성, 콜라주와 회화가 완성되는 과정을 담은 기록</p></article>
          <article><span>07</span><h3>Artist letter & QR card</h3><p>작품에 담긴 이야기를 적은 작가의 편지와 기록을 열람하는 프라이빗 아카이브 카드</p></article>
          <article><span>08</span><h3>Archival packaging</h3><p>작품과 모든 기록물을 안전하게 전달하고 보관하기 위한 전용 포장</p></article>
        </div>
      </section>

      <section className="collection" id="collection">
        <div className="section-label">05 — Artwork application</div>
        <div className="collection-intro application-intro">
          <h2>Tell us your<br />child&apos;s story.</h2>
          <p>이번 시즌에는 소수의 커미션만 진행합니다.<br />신청 내용을 확인한 뒤 개별적으로 연락드립니다.</p>
        </div>
        <form className="application-form" onSubmit={sendApplication}>
          <div className="form-row">
            <label>
              <span>보호자 성함 *</span>
              <input name="parentName" type="text" placeholder="성함을 입력해 주세요" required />
            </label>
            <label>
              <span>아이 이름 / 나이 *</span>
              <input name="childName" type="text" placeholder="예: 김하늘 / 6세" required />
            </label>
          </div>
          <div className="form-row">
            <label>
              <span>연락처 *</span>
              <input name="phone" type="tel" placeholder="010-0000-0000" required />
            </label>
            <label>
              <span>이메일 *</span>
              <input name="email" type="email" placeholder="name@email.com" required />
            </label>
          </div>
          <label>
            <span>보관 중인 그림 수량</span>
            <select name="artworkCount" defaultValue="">
              <option value="" disabled>수량을 선택해 주세요</option>
              <option>1–5장</option>
              <option>6–10장</option>
              <option>11–20장</option>
              <option>20장 이상</option>
            </select>
          </label>
          <label>
            <span>아이와 그림에 대한 이야기 *</span>
            <textarea name="story" rows={5} placeholder="그림을 그린 시기, 자주 등장하는 색이나 소재, 기억하고 싶은 이야기를 들려주세요." required />
          </label>
          <label>
            <span>원하는 작품 방향</span>
            <textarea name="request" rows={4} placeholder="원하는 크기, 분위기, 설치 공간 또는 궁금한 점을 자유롭게 적어주세요." />
          </label>
          <div className="form-submit">
            <p>작성 내용은 작품 상담 목적으로만 확인하며 외부에 공개하지 않습니다.<br />제출하면 이메일 전송 화면이 열립니다.</p>
            <button type="submit">신청서 보내기 <span>→</span></button>
          </div>
        </form>
      </section>

      <section className="archive" id="archive">
        <div className="section-label">06 — Archive package</div>
        <div className="archive-lead">
          <h2>Your private<br />family archive.</h2>
          <p>완성 작품과 작품 소장권, 작품 이력, 제작 기록, 원본 스캔 파일을 한 가족만의 프라이빗 아카이브로 보존합니다.</p>
        </div>
        <div className="archive-images">
          <figure className="wide">
            <img src="/images/process/private-ownership-v3.png" alt="완성 작품과 상세 정보가 적힌 작품 소장권, 작가의 자필 편지, QR 아카이브 카드를 함께 보존 포장하는 모습" />
            <figcaption>01 · 작품 소장권, 작가의 편지와 프라이빗 아카이브</figcaption>
          </figure>
          <figure>
            <img src="/images/process/private-scan-v2.png" alt="아이의 원본 그림을 디지털 이미지로 보존하는 모습" />
            <figcaption>02 · 원본 스캔과 디지털 보존 기록</figcaption>
          </figure>
          <div className="package-list">
            <p><span>01</span> 원본 작품과 작품 소장권</p>
            <p><span>02</span> 원본 스캔 이미지 파일</p>
            <p><span>03</span> 작품 정보와 제작 이력</p>
            <p><span>04</span> 제작 기록과 작가의 자필 편지</p>
            <p><span>05</span> 프라이빗 QR 아카이브 카드</p>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-top">
          <p>Private commissions · By appointment</p>
          <img src="/images/brand/designfeel-logo-footer.png" alt="Design Feel graphic design community" />
        </div>
        <h2>Let&apos;s keep<br />this time.</h2>
        <div className="footer-contact">
          <div>
            <span>Studio</span>
            <p>서울 종로구 사직로8길 21-2<br />서라벌 빌딩 502호</p>
            <p>502, Seorabeol Building, 21-2 Sajik-ro 8-gil,<br />Jongno-gu, Seoul, Republic of Korea</p>
          </div>
          <div>
            <span>Email</span>
            <a href="mailto:kim.chaewon00@outlook.com">kim.chaewon00@outlook.com</a>
          </div>
          <div>
            <span>Telephone</span>
            <a href="tel:+821034019632">+82 (0)10 3401 9632</a>
          </div>
        </div>
        <a className="footer-mail" href="mailto:kim.chaewon00@outlook.com">Start a private conversation <span>→</span></a>
        <div className="footer-bottom"><span>Design Feel © 2026</span><span>Seoul, Korea</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
