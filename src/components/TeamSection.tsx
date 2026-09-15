'use client';

import Image from 'next/image';

export default function TeamSection() {
  return (
    <>
      <main className="leadership-page">
        <section className="cfo-section">
          <div className="cfo-image-wrapper">
            <Image
              src="/assets/brands/rohit.png"
              alt="Dr. Ashok Eknathrao Pagire"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="cfo-image"
            />
          </div>

          <div className="cfo-content">
            <div className="section-label">
              <span>VISHWASAI CONSULTANCY</span>
              <span className="label-line" />
            </div>

            <h1>Dr. Ashok Eknathrao Pagire</h1>

            <h2>PhD in Co-operative Agriculture and Finance, India</h2>

            <p className="cfo-tagline">
              Hello, I am Dr. Ashok Eknathrao Pagire. I have been working as a consultant in the
              Co-operative Agriculture and Finance field for 17 years all over India.
            </p>

            <div className="highlights-header">
              <span>OUR WORK</span>
              <span className="highlight-line" />
            </div>

            <div className="highlights-list">
              <div className="highlight-item">
                <div className="highlight-icon">▣</div>
                <div className="highlight-content">
                  <h3>570+ Registered Societies</h3>
                  <p>
                    Co-operative banks, NBFCs, multistate and credit societies, agro, hospital and
                    housing societies, multipurpose NGOs, Section 8 companies, Mahila Bachat Gats
                    and state-level co-operative institutions.
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">◉</div>
                <div className="highlight-content">
                  <h3>17,000+ Employment Opportunities</h3>
                  <p>
                    I have provided employment to 17,000+ unemployed people in this field. People
                    across Maharashtra are working with me in the co-operative and other related
                    fields.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="quote-block">
              <span className="quote-mark">“</span>
              <p>Thank you! VISHWASAI CONSULTANCY</p>
            </div> */}
          </div>
        </section>
      </main>

      <style jsx>{`
        .leadership-page {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          padding: 40px 4%;
          box-sizing: border-box;
        }

        .cfo-section {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(320px, 1fr) minmax(360px, 0.9fr);
          gap: 42px;
          align-items: center;
        }

        .cfo-image-wrapper {
          position: relative;
          width: 100%;
          height: 620px;
          overflow: hidden;
          border-radius: 10px;
          background: #eef2f6;
        }

        .cfo-image {
          object-fit: cover;
          object-position: center;
          transition: transform 0.6s ease;
        }

        .cfo-image-wrapper:hover .cfo-image {
          transform: scale(1.02);
        }

        .cfo-content {
          width: 100%;
          padding: 20px 0;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 18px;
          color: #243f70;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2.5px;
        }

        .label-line {
          display: block;
          width: 60px;
          height: 1px;
          background: #9aacc5;
        }

        .cfo-content h1 {
          margin: 0;
          color: #122b55;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(36px, 2.9vw, 52px);
          line-height: 1.05;
          font-weight: 600;
          letter-spacing: -1.5px;
        }

        .cfo-content h2 {
          margin: 18px 0 0;
          color: #142f5b;
          font-size: 24px;
          line-height: 1.2;
          font-weight: 500;
        }

        .cfo-tagline {
          margin: 18px 0 0;
          color: #71819b;
          font-size: 16px;
          line-height: 1.6;
          font-weight: 400;
        }

        .highlights-header {
          display: flex;
          align-items: center;
          gap: 25px;
          margin-top: 48px;
          margin-bottom: 25px;
          color: #142f5b;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2.5px;
        }

        .highlight-line {
          flex: 1;
          height: 1px;
          background: #bdc8d7;
        }

        .highlights-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        .highlight-icon {
          width: 58px;
          height: 58px;
          min-width: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #edf3fa;
          color: #1f62b4;
          font-size: 27px;
          font-weight: 400;
          transition: all 0.3s ease;
        }

        .highlight-item:hover .highlight-icon {
          background: #1f62b4;
          color: #ffffff;
          transform: translateY(-3px);
        }

        .highlight-content {
          padding-top: 2px;
        }

        .highlight-content h3 {
          margin: 0 0 5px;
          color: #172f55;
          font-size: 16px;
          line-height: 1.4;
          font-weight: 700;
        }

        .highlight-content p {
          margin: 0;
          max-width: 550px;
          color: #71819b;
          font-size: 14px;
          line-height: 1.55;
        }

        .quote-block {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 28px;
          color: #1a2e4d;
          font-size: 18px;
          font-weight: 600;
        }

        .quote-mark {
          color: #1f62b4;
          font-size: 28px;
          line-height: 1;
          font-weight: 700;
        }

        .quote-block p {
          margin: 0;
          font-size: 17px;
          line-height: 1.4;
        }

        @media (max-width: 1100px) {
          .leadership-page {
            padding: 50px 4%;
          }

          .cfo-section {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }

          .cfo-image-wrapper {
            height: 650px;
          }

          .cfo-content h1 {
            font-size: 50px;
          }

          .cfo-content h2 {
            font-size: 26px;
          }

          .cfo-tagline {
            font-size: 16px;
          }
        }

        @media (max-width: 768px) {
          .leadership-page {
            padding: 24px 16px 40px;
          }

          .cfo-section {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .cfo-image-wrapper {
            height: 360px;
            border-radius: 8px;
          }

          .cfo-content {
            padding: 0;
          }

          .section-label {
            font-size: 12px;
            letter-spacing: 2px;
            gap: 15px;
            margin-bottom: 18px;
          }

          .label-line {
            width: 40px;
          }

          .cfo-content h1 {
            font-size: 34px;
            letter-spacing: -1px;
          }

          .cfo-content h2 {
            margin-top: 14px;
            font-size: 23px;
          }

          .cfo-tagline {
            margin-top: 14px;
            font-size: 15px;
          }

          .highlights-header {
            margin-top: 28px;
            margin-bottom: 18px;
            font-size: 12px;
            letter-spacing: 2px;
          }

          .highlight-item {
            gap: 15px;
          }

          .highlight-icon {
            width: 48px;
            height: 48px;
            min-width: 48px;
            font-size: 22px;
          }

          .highlight-content h3 {
            font-size: 16px;
          }

          .highlight-content p {
            font-size: 14px;
          }

          .quote-block {
            margin-top: 26px;
          }

          .quote-block p {
            font-size: 17px;
          }
        }

        @media (max-width: 480px) {
          .leadership-page {
            padding: 16px 12px 28px;
          }

          .cfo-image-wrapper {
            height: 280px;
          }

          .section-label {
            gap: 10px;
            font-size: 11px;
            letter-spacing: 1px;
          }

          .cfo-content h1 {
            font-size: 30px;
          }

          .cfo-content h2 {
            font-size: 20px;
          }

          .cfo-tagline {
            font-size: 14px;
            line-height: 1.5;
          }

          .highlight-content p {
            font-size: 13px;
          }

          .quote-block {
            gap: 8px;
          }

          .quote-block p {
            font-size: 15px;
          }
        }
      `}</style>
    </>
  );
}
