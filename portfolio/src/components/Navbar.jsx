import { IconHome } from './Icons';

export default function Navbar({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: true },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'resume', label: 'Resume' },
    { id: 'links', label: 'Links' },
  ];

  return (
    <header className="navbar-wrapper">
      <nav className="floating-navbar" aria-label="Main Navigation">
        <button
          className="nav-brand"
          onClick={() => onTabChange('home')}
          aria-label="Go to home"
        >
          <span className="brand-dot"></span>
          <span className="brand-text">vishal<span className="brand-accent">.ai</span></span>
        </button>

        <div className="nav-pill-container">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`nav-tab-btn ${isActive ? 'active' : ''}`}
                aria-selected={isActive}
                role="tab"
              >
                {tab.icon ? (
                  <span className="nav-icon-wrap" title="Home">
                    <IconHome size={15} />
                    <span className="nav-label-mobile">Home</span>
                  </span>
                ) : (
                  <span>{tab.label}</span>
                )}
                {isActive && <span className="active-pill-glow" />}
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
