import React, { useState } from 'react';
import {
  IconMail,
  IconGithub,
  IconLinkedin,
  IconTwitter,
  IconCalendar,
  IconCopy,
  IconCheck,
  IconExternalLink,
} from './Icons';

export default function Links() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'vishalbhagattt01@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2400);
  };

  return (
    <section className="links-section" id="links">
      <div className="section-header">
        <div className="section-label-tag">
          <span className="label-dot"></span>
          <span className="font-mono">COMMUNICATIONS</span>
        </div>
        <h2 className="section-main-title">Direct Connections &amp; Profiles</h2>
      </div>

      <div className="links-grid-container">
        {/* Card 1: Email */}
        <div className="link-card glassmorphic-card">
          <div className="link-card-top">
            <div className="link-icon-box">
              <IconMail size={20} className="accent-rose" />
            </div>
            <span className="link-card-type font-mono">PRIMARY INBOX</span>
          </div>
          <div className="link-card-body">
            <h3 className="link-card-title">EMAIL</h3>
            <p className="link-card-val font-mono">{emailAddress}</p>
            <p className="link-card-note">
              Fastest channel for AI engineering roles, project collaboration, or technical discussions.
            </p>
          </div>
          <div className="link-card-actions">
            <button
              onClick={copyEmail}
              className={`link-btn copy-btn font-mono ${copied ? 'copied' : ''}`}
            >
              {copied ? (
                <>
                  <IconCheck size={14} className="accent-green" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <IconCopy size={14} />
                  <span>Copy Address</span>
                </>
              )}
            </button>
            <a
              href={`mailto:${emailAddress}`}
              className="link-btn primary-link-btn font-mono"
            >
              <span>Compose Email</span>
              <IconExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Card 2: GitHub */}
        <div className="link-card glassmorphic-card">
          <div className="link-card-top">
            <div className="link-icon-box">
              <IconGithub size={20} className="accent-rose" />
            </div>
            <span className="link-card-type font-mono">CODE REPOSITORIES</span>
          </div>
          <div className="link-card-body">
            <h3 className="link-card-title">GITHUB</h3>
            <p className="link-card-val font-mono">@VishalBhagat01</p>
            <p className="link-card-note">
              Explore source repositories, agent orchestration workflows, and open-source contributions.
            </p>
          </div>
          <div className="link-card-actions">
            <a
              href="https://github.com/VishalBhagat01"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn primary-link-btn font-mono w-full"
            >
              <span>Visit Profile</span>
              <IconExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Card 3: LinkedIn */}
        <div className="link-card glassmorphic-card">
          <div className="link-card-top">
            <div className="link-icon-box">
              <IconLinkedin size={20} className="accent-rose" />
            </div>
            <span className="link-card-type font-mono">PROFESSIONAL NETWORK</span>
          </div>
          <div className="link-card-body">
            <h3 className="link-card-title">LINKEDIN</h3>
            <p className="link-card-val font-mono">Vishal Bhagat</p>
            <p className="link-card-note">
              Professional history, engineering discussions, and academic milestones.
            </p>
          </div>
          <div className="link-card-actions">
            <a
              href="https://linkedin.com/in/vishalbhagat01"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn primary-link-btn font-mono w-full"
            >
              <span>Connect</span>
              <IconExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Card 4: Twitter / X */}
        <div className="link-card glassmorphic-card">
          <div className="link-card-top">
            <div className="link-icon-box">
              <IconTwitter size={20} className="accent-rose" />
            </div>
            <span className="link-card-type font-mono">THOUGHTS &amp; UPDATES</span>
          </div>
          <div className="link-card-body">
            <h3 className="link-card-title">X / TWITTER</h3>
            <p className="link-card-val font-mono">@vishalbhagat_ai</p>
            <p className="link-card-note">
              Tracking advancements in LLM models, inference hardware, and agentic paradigms.
            </p>
          </div>
          <div className="link-card-actions">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn primary-link-btn font-mono w-full"
            >
              <span>Follow Updates</span>
              <IconExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Card 5: Cal / Book a Chat */}
        <div className="link-card glassmorphic-card">
          <div className="link-card-top">
            <div className="link-icon-box">
              <IconCalendar size={20} className="accent-rose" />
            </div>
            <span className="link-card-type font-mono">MEETINGS</span>
          </div>
          <div className="link-card-body">
            <h3 className="link-card-title">CAL / BOOK A CHAT</h3>
            <p className="link-card-val font-mono">Schedule 1:1 Discussion</p>
            <p className="link-card-note">
              Available for technical interviews, architecture chats, or exploratory collaboration.
            </p>
          </div>
          <div className="link-card-actions">
            <a
              href={`mailto:${emailAddress}?subject=Technical%20Chat%20%2F%20Collaboration`}
              className="link-btn primary-link-btn font-mono w-full"
            >
              <span>Schedule Call</span>
              <IconExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
