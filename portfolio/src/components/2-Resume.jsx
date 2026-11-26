import { IconDownload, IconExternalLink, IconFileText, IconMail, IconGithub, IconLinkedin } from './Icons';

export default function Resume() {
  const resumePdfUrl = '/Vishal_Kumar_Bhagat_Resume.pdf';

  return (
    <section className="resume-section" id="resume">
      {/* Top Action Toolbar */}
      <div className="resume-toolbar-header">
        <div className="resume-status-title">
          <span className="live-dot pulse-rose"></span>
          <div>
            <span className="resume-title-text font-mono">OFFICIAL RESUME // VISHAL KUMAR BHAGAT</span>
            <span className="resume-subtitle-chip font-mono">1-PAGE ATS FORMAT</span>
          </div>
        </div>

        <div className="resume-actions-group font-mono">
          <a
            href={resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
            title="Open Resume PDF in New Tab"
          >
            <IconExternalLink size={15} />
            <span>Open in Tab</span>
          </a>
          <a
            href={resumePdfUrl}
            download="Vishal_Kumar_Bhagat_Resume.pdf"
            className="resume-btn primary-resume-btn"
            title="Direct Download Official Resume PDF"
          >
            <IconDownload size={15} />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Executive Quick Glance Grid */}
      <div className="resume-summary-grid">
        {/* Card 1: Contact & Links */}
        <div className="resume-summary-card font-mono">
          <div className="summary-card-header">
            <span className="summary-card-dot"></span>
            <span>CONTACT &amp; PROFILES</span>
          </div>
          <div className="summary-card-body">
            <div className="summary-meta-item">
              <IconMail size={14} className="accent-rose" />
              <a href="mailto:vishalbhagattt01@gmail.com" className="summary-link">
                vishalbhagattt01@gmail.com
              </a>
            </div>
            <div className="summary-meta-item">
              <span className="summary-label">Phone:</span>
              <span className="summary-val">+91-8920248819</span>
            </div>
            <div className="summary-links-row">
              <a
                href="https://github.com/VishalBhagat01"
                target="_blank"
                rel="noopener noreferrer"
                className="summary-pill-link"
              >
                <IconGithub size={13} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/vishalbhagat01"
                target="_blank"
                rel="noopener noreferrer"
                className="summary-pill-link"
              >
                <IconLinkedin size={13} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://leetcode.com/u/VishalBhagat01"
                target="_blank"
                rel="noopener noreferrer"
                className="summary-pill-link"
              >
                <span>LeetCode</span>
              </a>
              <a
                href="https://codeforces.com/profile/VishalBhagat01"
                target="_blank"
                rel="noopener noreferrer"
                className="summary-pill-link"
              >
                <span>Codeforces</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: Education */}
        <div className="resume-summary-card font-mono">
          <div className="summary-card-header">
            <span className="summary-card-dot"></span>
            <span>EDUCATION</span>
          </div>
          <div className="summary-card-body">
            <div className="summary-edu-row">
              <div className="summary-edu-main">
                <span className="summary-bold">Bhagwan Parshuram Institute of Technology</span>
                <span className="summary-sub">B.Tech in Computer Science Engineering (GGSIPU) &bull; CGPA 8.6/10</span>
              </div>
              <span className="summary-year">Expected 2028 &bull; Delhi</span>
            </div>
            <div className="summary-edu-row mt-2">
              <div className="summary-edu-main">
                <span className="summary-bold">Modern School, Vaishali</span>
                <span className="summary-sub">Senior Secondary Education</span>
              </div>
              <span className="summary-year">2024 &bull; Delhi</span>
            </div>
          </div>
        </div>

        {/* Card 3: Metrics & Achievements */}
        <div className="resume-summary-card font-mono">
          <div className="summary-card-header">
            <span className="summary-card-dot"></span>
            <span>KEY ACHIEVEMENTS</span>
          </div>
          <div className="summary-card-body">
            <div className="summary-achievement-item">
              <span className="accent-rose">&bull;</span>
              <span><strong>500+ DSA</strong> problems solved in C++ on LeetCode &amp; Codeforces</span>
            </div>
            <div className="summary-achievement-item">
              <span className="accent-rose">&bull;</span>
              <span>Peak ratings: <strong>1500</strong> LeetCode, <strong>1157</strong> Codeforces</span>
            </div>
            <div className="summary-achievement-item">
              <span className="accent-rose">&bull;</span>
              <span><strong>IBM Advanced AI Agent</strong> Certification</span>
            </div>
            <div className="summary-achievement-item">
              <span className="accent-rose">&bull;</span>
              <span>Multiple AI &amp; full-stack software hackathons</span>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Document Viewer Container */}
      <div className="resume-pdf-viewer-card">
        <div className="pdf-viewer-header font-mono">
          <div className="pdf-title-group">
            <IconFileText size={15} className="accent-rose" />
            <span className="pdf-filename">Vishal_Kumar_Bhagat_Resume.pdf</span>
            <span className="pdf-badge">OFFICIAL DOCUMENT</span>
          </div>
          <div className="pdf-header-actions">
            <a
              href={resumePdfUrl}
              download="Vishal_Kumar_Bhagat_Resume.pdf"
              className="pdf-quick-dl-btn"
            >
              <IconDownload size={14} />
              <span>Download File</span>
            </a>
          </div>
        </div>

        <div className="pdf-embed-container">
          <iframe
            src={`${resumePdfUrl}#view=FitH`}
            title="Vishal Kumar Bhagat Official Resume PDF"
            className="resume-pdf-frame"
          />
        </div>

        <div className="pdf-viewer-footer font-mono">
          <span>Need a direct copy? Download the official PDF above or open in full window.</span>
          <a
            href={resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-footer-link"
          >
            <span>Open in Full Window &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
