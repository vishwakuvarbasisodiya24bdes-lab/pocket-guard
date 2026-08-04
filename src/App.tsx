import { useState, useEffect } from 'react'

// ─── Modern Outline Icons (GPay / Material 3 Style) ─────────────────────────

function IconHome({ active }: { active?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#0B57D0' : '#5E5E5E'} strokeWidth={active ? '2.5' : '2'} strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function IconTransactions({ active }: { active?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#0B57D0' : '#5E5E5E'} strokeWidth={active ? '2.5' : '2'} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

function IconReports({ active }: { active?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#0B57D0' : '#5E5E5E'} strokeWidth={active ? '2.5' : '2'} strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  )
}

function IconProfile({ active }: { active?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#0B57D0' : '#5E5E5E'} strokeWidth={active ? '2.5' : '2'} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function IconBell() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B57D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
}

// Highly visible back arrow button styled in GPay Blue
function IconChevronLeft({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="flex items-center justify-center w-9 h-9 rounded-full bg-[#E2F0F8] text-[#0B57D0] hover:bg-blue-100 active:scale-95 transition-all shadow-sm">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
    </button>
  )
}

function IconMore() {
  return (
    <button className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-slate-100 active:scale-95 transition-all">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1" />
        <circle cx="12" cy="5" r="1" />
        <circle cx="12" cy="19" r="1" />
      </svg>
    </button>
  )
}

function IconSearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5E5E5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function ActionIcon({ name }: { name: string }) {
  switch (name) {
    case 'set-budget':
      return (
        <svg className="w-6 h-6 stroke-[#0B57D0]" fill="none" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    case 'current-balance':
      return (
        <svg className="w-6 h-6 stroke-[#0B57D0]" fill="none" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      )
    case 'weekly-balance':
      return (
        <svg className="w-6 h-6 stroke-[#0B57D0]" fill="none" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      )
    case 'low-balance':
      return (
        <svg className="w-6 h-6 stroke-[#0B57D0]" fill="none" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="1" y="6" width="18" height="12" rx="2" />
          <line x1="23" y1="11" x2="23" y2="13" />
          <line x1="6" y1="10" x2="6" y2="14" />
        </svg>
      )
    case 'scan':
      return (
        <svg className="w-6 h-6 stroke-[#0B57D0]" fill="none" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
          <rect x="7" y="7" width="10" height="10" rx="1" />
        </svg>
      )
    case 'pay':
      return (
        <svg className="w-6 h-6 stroke-[#0B57D0]" fill="none" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="23" y1="11" x2="17" y2="11" />
          <line x1="20" y1="8" x2="20" y2="14" />
        </svg>
      )
    case 'bank':
      return (
        <svg className="w-6 h-6 stroke-[#0B57D0]" fill="none" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M2 11l10-9 10 9" />
        </svg>
      )
    case 'recharge':
      return (
        <svg className="w-6 h-6 stroke-[#0B57D0]" fill="none" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}

// ─── Splash Screen ───────────────────────────────────────────────────────────

function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500)
    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#E2F0F8] via-white to-[#CDEDDE] flex flex-col items-center justify-between p-8 z-50 animate-fade-in">
      <div />
      {/* Pocket Guard Brand Logo Group */}
      <div className="flex flex-col items-center gap-6">
        {/* Logo image with subtle drop shadow */}
        <div className="w-52 h-52 bg-white rounded-[40px] shadow-2xl flex items-center justify-center overflow-hidden border border-slate-100">
          <img
            src="/pocket_guard_logo.jpg"
            alt="Pocket Guard Logo"
            className="w-full h-full object-contain p-4"
          />
        </div>
        {/* Tagline below logo */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-bold text-[#0B57D0] tracking-widest uppercase">Your Money. Protected.</span>
        </div>
      </div>

      {/* Footer spinner */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-7 h-7 border-[3px] border-[#0B57D0] border-t-transparent rounded-full animate-spin" />
        <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">Secured by Pocket Guard</span>
      </div>
    </div>
  )
}

// ─── Dummy Login Screen ──────────────────────────────────────────────────────

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="absolute inset-0 bg-white flex flex-col justify-between p-6 z-50 animate-fade-in pt-16">
      {/* Intro Illustration & Copy */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <div className="w-44 h-44 bg-[#E2F0F8]/40 rounded-[36px] flex items-center justify-center shadow-inner border border-[#E2F0F8]">
          <img
            src="/pocket_guard_logo.jpg"
            alt="Pocket Guard Logo"
            className="w-full h-full object-contain p-4 rounded-[36px]"
          />
        </div>

        <div className="flex flex-col items-center text-center px-4 gap-2">
          <h2 className="text-2xl font-black text-slate-800 leading-tight">Welcome to Pocket Guard</h2>
          <p className="text-xs font-semibold text-[#5E5E5E] leading-relaxed">
            Manage your monthly budget, categorise transactions, and receive smart alerts — all in one secure place.
          </p>
        </div>
      </div>

      {/* Action Buttons Area */}
      <div className="flex flex-col gap-3 pb-8">
        {/* Continue with Google */}
        <button 
          onClick={onLogin}
          className="w-full h-12 bg-white border border-slate-200 hover:bg-slate-50 rounded-full flex items-center justify-center gap-3 active:scale-95 transition-all shadow-sm cursor-pointer"
        >
          {/* Google Color G logo SVG */}
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M12 5.04c1.7 0 3.2.6 4.4 1.7l3.3-3.3C17.7 1.4 15 0 12 0 7.3 0 3.3 2.7 1.3 6.6l3.9 3c.9-2.7 3.4-4.56 6.8-4.56z"/>
            <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"/>
            <path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.7-2.9c-1.1.7-2.5 1.2-4.2 1.2-3.4 0-6.2-2.3-7.2-5.4l-3.9 3C3.1 21.2 7.2 24 12 24z"/>
            <path fill="#FBBC05" d="M4.8 14c-.3-.9-.4-1.9-.4-3s.1-2.1.4-3L.9 5c-1 2-1.5 4.3-1.5 7s.5 5 1.5 7l3.9-3z"/>
          </svg>
          <span className="text-xs font-bold text-neutral-800">Continue with Google</span>
        </button>

        {/* Login with Phone */}
        <button 
          onClick={onLogin}
          className="w-full h-12 bg-[#0B57D0] hover:bg-[#0B57D0]/95 text-white rounded-full flex items-center justify-center gap-3 active:scale-95 transition-all shadow-sm cursor-pointer"
        >
          <svg className="w-5 h-5 stroke-white" fill="none" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="3" />
          </svg>
          <span className="text-xs font-bold">Login with Mobile Number</span>
        </button>

        {/* Sandbox Access */}
        <button 
          onClick={onLogin}
          className="text-xs font-bold text-[#0B57D0] hover:underline py-2 active:scale-95 transition-all cursor-pointer"
        >
          Try in guest mode
        </button>
      </div>
    </div>
  )
}

// ─── Bottom Navigation ───────────────────────────────────────────────────────

type Screen = 'home' | 'transactions' | 'reports' | 'profile'

function BottomNav({ active, onNav }: { active: Screen; onNav: (s: Screen) => void }) {
  const items: { key: Screen; label: string; icon: (a: boolean) => JSX.Element }[] = [
    { key: 'home', label: 'Home', icon: (a) => <IconHome active={a} /> },
    { key: 'transactions', label: 'Activity', icon: (a) => <IconTransactions active={a} /> },
    { key: 'reports', label: 'Insights', icon: (a) => <IconReports active={a} /> },
    { key: 'profile', label: 'Profile', icon: (a) => <IconProfile active={a} /> },
  ]
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[76px] bg-white border-t border-slate-100 flex items-center justify-around px-4 z-40 pb-2 shadow-[0_-4px_16px_rgba(0,0,0,0.02)]">
      {items.map(({ key, label, icon }) => (
        <button
          key={key}
          onClick={() => onNav(key)}
          className="flex flex-col items-center justify-center flex-1 h-full group cursor-pointer"
        >
          <div className="relative w-16 h-8 flex items-center justify-center mb-1">
            {active === key ? (
              <span className="absolute inset-0 rounded-full bg-[#E2F0F8] scale-100 transition-transform duration-300" />
            ) : (
              <span className="absolute inset-0 rounded-full bg-[#E2F0F8] scale-0 group-hover:scale-75 opacity-0 group-hover:opacity-40 transition-all duration-200" />
            )}
            <span className={`relative z-10 transition-transform duration-200 ${active === key ? 'scale-105' : 'group-active:scale-95'}`}>
              {icon(active === key)}
            </span>
          </div>
          <span className={`text-[10px] font-medium tracking-wide transition-colors duration-200 ${active === key ? 'text-[#0B57D0] font-semibold' : 'text-[#5E5E5E]'}`}>
            {label}
          </span>
        </button>
      ))}
    </div>
  )
}

// ─── Shared header bar (96px height to prevent overlap with status bar) ───────

function SubHeader({
  title,
  onBack,
  rightIcon,
}: {
  title: string
  onBack: () => void
  rightIcon?: JSX.Element
}) {
  return (
    <div className="absolute top-0 left-0 right-0 bg-white border-b border-slate-100 h-[96px] pt-10 flex items-center px-4 justify-between z-30 shadow-sm">
      <div className="flex items-center gap-3">
        <IconChevronLeft onClick={onBack} />
        <span className="text-[16px] font-bold text-[#1F1F1F] tracking-wide">{title}</span>
      </div>
      <div className="flex items-center gap-1">
        {rightIcon ?? <IconMore />}
      </div>
    </div>
  )
}

// ─── Bar Chart component ─────────────────────────────────────────────────────

function BarChart({
  bars,
}: {
  bars: { label: string; value: number; color?: string }[]
}) {
  const max = Math.max(...bars.map((b) => b.value))
  return (
    <div className="flex items-end justify-around w-full h-full px-4 pb-4">
      {bars.map((bar) => {
        const pct = Math.max(10, Math.round((bar.value / max) * 100))
        return (
          <div key={bar.label} className="flex flex-col items-center gap-2 h-full justify-end" style={{ flex: 1 }}>
            <div className="w-full flex-1 flex items-end justify-center">
              <div
                className="w-8 rounded-t-lg hover:brightness-95 transition-all duration-300 relative group"
                style={{
                  height: `${pct}%`,
                  backgroundColor: bar.color ?? '#0B57D0',
                }}
              >
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  ₹{bar.value}
                </span>
              </div>
            </div>
            <span className="text-[12px] font-semibold text-[#5E5E5E] tracking-wide">
              {bar.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}

// ─── Screen 1: Home ──────────────────────────────────────────────────────────

function HomeScreen({
  onNav,
  onSection,
}: {
  onNav: (s: Screen) => void
  onSection: (s: string) => void
}) {
  const quickActions = [
    { label: 'Set monthly\nbudget', key: 'budget-setting', icon: 'set-budget' },
    { label: 'Current\nbalance', key: 'current-balance', icon: 'current-balance' },
    { label: 'Weekly\nbalance', key: 'weekly-balance', icon: 'weekly-balance' },
    { label: 'Low balance', key: 'low-balance', icon: 'low-balance' },
  ]
  const quickActions2 = [
    { label: 'Scan QR', key: 'scan', icon: 'scan' },
    { label: 'Pay Contacts', key: 'pay', icon: 'pay' },
    { label: 'Bank Transfer', key: 'bank', icon: 'bank' },
    { label: 'Recharge', key: 'recharge', icon: 'recharge' },
  ]

  return (
    <div className="absolute inset-0 bg-[#F8F9FA] overflow-y-auto overflow-x-hidden pt-12 pb-[84px]">
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-2 pb-2">
        <div className="flex items-center gap-3">
          <div className="w-[42px] h-[42px] bg-[#E2F0F8] border border-blue-100 flex items-center justify-center rounded-full shadow-sm">
            <span className="text-sm font-bold text-[#0B57D0]">PG</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-[#5E5E5E] font-medium leading-tight">Welcome back</span>
            <span className="text-sm font-bold text-[#1F1F1F]">Prakashji G.</span>
          </div>
        </div>
        <button onClick={() => onNav('profile')} className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 rounded-full active:scale-95 transition-all">
          <IconBell />
        </button>
      </div>

      {/* Search bar */}
      <div className="mx-5 mt-2 bg-[#F0F4F9] border border-slate-100 h-[48px] flex items-center px-4 gap-3 rounded-full transition-colors hover:bg-slate-100 group">
        <IconSearch />
        <input 
          type="text" 
          placeholder="Search people, bills, transactions..." 
          className="text-[14px] text-[#1F1F1F] placeholder-[#5E5E5E] bg-transparent outline-none flex-1 font-medium"
        />
      </div>

      {/* Budget status bar */}
      <button
        onClick={() => onSection('budget-status')}
        className="mx-5 mt-5 bg-[#CDEDDE] hover:opacity-95 active:scale-[0.99] transition-all rounded-3xl p-5 flex items-center justify-between w-[calc(100%-40px)] border border-[#b2ded0] shadow-[0_2px_8px_rgba(0,0,0,0.02)] group"
      >
        <div className="flex flex-col text-left gap-1">
          <span className="text-[10px] font-bold text-[#0F5132] uppercase tracking-wider">Budget Status</span>
          <span className="text-[18px] font-bold text-[#1F1F1F] leading-tight">Monthly Budget Safe</span>
          <span className="text-xs text-[#0F5132]/80">60% of limit consumed so far</span>
        </div>
        <div className="bg-white/60 p-2.5 rounded-full group-hover:scale-105 transition-transform duration-200">
          <svg width="24" height="24" viewBox="0 0 31 32" fill="none">
            <rect x="2" y="16" width="5" height="16" rx="1.5" fill="#0F5132" />
            <rect x="11" y="6" width="5" height="26" rx="1.5" fill="#0F5132" />
            <rect x="20" y="11" width="5" height="21" rx="1.5" fill="#0F5132" />
          </svg>
        </div>
      </button>

      {/* Quick actions grid row 1 */}
      <div className="mx-5 mt-6">
        <p className="text-xs font-bold text-[#5E5E5E] uppercase tracking-wider mb-3 px-1">Finance Tools</p>
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((a) => (
            <button
              key={a.key}
              onClick={() => onSection(a.key)}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="bg-[#E2F0F8] border border-blue-55 w-full aspect-square flex items-center justify-center rounded-2xl group-hover:scale-105 group-active:scale-95 transition-all shadow-sm">
                <ActionIcon name={a.icon} />
              </div>
              <span className="text-[11px] font-semibold text-[#1F1F1F] text-center whitespace-pre-wrap leading-tight">
                {a.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Quick actions grid row 2 */}
      <div className="mx-5 mt-6">
        <p className="text-xs font-bold text-[#5E5E5E] uppercase tracking-wider mb-3 px-1">Quick Payments</p>
        <div className="grid grid-cols-4 gap-3">
          {quickActions2.map((a) => (
            <button
              key={a.key}
              onClick={() => onSection(a.key)}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="bg-[#E2F0F8] border border-blue-55 w-full aspect-square flex items-center justify-center rounded-full group-hover:scale-105 group-active:scale-95 transition-all shadow-sm">
                <ActionIcon name={a.icon} />
              </div>
              <span className="text-[11px] font-semibold text-[#1F1F1F] text-center whitespace-pre-wrap leading-tight">
                {a.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Transaction Tracking banner */}
      <button
        onClick={() => onNav('transactions')}
        className="mx-5 mt-6 bg-[#CDEDDE] hover:opacity-95 active:scale-[0.99] transition-all rounded-3xl p-5 flex items-center justify-between w-[calc(100%-40px)] border border-[#b2ded0] shadow-[0_2px_8px_rgba(0,0,0,0.02)] group"
      >
        <div className="flex flex-col text-left gap-1">
          <span className="text-[10px] font-bold text-[#0F5132] uppercase tracking-wider">Track Spending</span>
          <span className="text-[18px] font-bold text-[#1F1F1F] leading-tight">Transaction Tracking</span>
          <span className="text-xs text-[#0F5132]/80">Analyze your expenses instantly</span>
        </div>
        <div className="bg-white/60 p-2.5 rounded-full group-hover:scale-105 transition-transform duration-200">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F5132" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.5-9H13V7a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2z" />
          </svg>
        </div>
      </button>

      {/* Bottom nav spacer */}
      <BottomNav active="home" onNav={onNav} />
    </div>
  )
}

// ─── Screen 2: Budget Status Bar (monthly bar chart) ─────────────────────────

function BudgetStatusScreen({ onBack, onNav }: { onBack: () => void; onNav: (s: Screen) => void }) {
  return (
    <div className="absolute inset-0 bg-[#F8F9FA] pt-[96px] pb-[76px]">
      <SubHeader
        title="Budget Status Bar"
        onBack={onBack}
        rightIcon={
          <div className="flex items-center gap-1">
            <svg width="24" height="24" viewBox="0 0 31 32" fill="none" className="mr-1">
              <rect x="0" y="16" width="7" height="16" rx="1.5" fill="#0F5132" />
              <rect x="10" y="6" width="7" height="26" rx="1.5" fill="#0F5132" />
              <rect x="20" y="11" width="7" height="21" rx="1.5" fill="#0F5132" />
            </svg>
            <IconMore />
          </div>
        }
      />

      <div className="p-5 flex flex-col gap-6 h-full overflow-y-auto">
        {/* Bar chart area */}
        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm h-[320px] flex flex-col">
          <p className="text-xs font-bold text-[#5E5E5E] uppercase tracking-wider mb-4">Monthly Expenses</p>
          <div className="flex-1">
            <BarChart
              bars={[
                { label: 'Jan', value: 4500, color: '#0F5132' },
                { label: 'Feb', value: 6500, color: '#0F5132' },
                { label: 'Mar', value: 2500, color: '#0F5132' },
              ]}
            />
          </div>
        </div>

        {/* Usage percentage */}
        <div className="bg-[#CDEDDE] border border-[#b2ded0] rounded-2xl p-5 flex items-center justify-between">
          <span className="text-sm font-semibold text-[#0F5132]">Usage in percentage</span>
          <span className="text-2xl font-black text-[#0F5132]">60%</span>
        </div>
      </div>

      <BottomNav active="home" onNav={onNav} />
    </div>
  )
}

// ─── Screen 3: Current Balance ────────────────────────────────────────────────

function CurrentBalanceScreen({ onBack, onNav }: { onBack: () => void; onNav: (s: Screen) => void }) {
  return (
    <div className="absolute inset-0 bg-[#F8F9FA] pt-[96px] pb-[76px]">
      <SubHeader
        title="Current Balance"
        onBack={onBack}
        rightIcon={
          <div className="flex items-center gap-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B57D0" strokeWidth="2.5" className="mr-1">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <path d="M2 10h20" />
            </svg>
            <IconMore />
          </div>
        }
      />

      <div className="p-5 flex flex-col gap-4">
        <div className="bg-[#CDEDDE] border border-[#b2ded0] rounded-3xl p-6 flex flex-col gap-1 shadow-sm">
          <span className="text-xs font-bold text-[#0F5132] uppercase tracking-wider">Source Wallet</span>
          <span className="text-3xl font-black text-neutral-900 mt-2">₹7,000</span>
          <span className="text-xs text-[#0F5132] opacity-80 mt-1">Available to spend</span>
        </div>

        <div className="bg-[#E2F0F8] border border-[#b2d5ed] rounded-3xl p-6 flex flex-col gap-1 shadow-sm">
          <span className="text-xs font-bold text-[#0B57D0] uppercase tracking-wider">Account Balance</span>
          <span className="text-3xl font-black text-neutral-900 mt-2">₹5,000</span>
          <span className="text-xs text-[#0B57D0] opacity-80 mt-1">Direct Bank Balance</span>
        </div>
      </div>

      <BottomNav active="home" onNav={onNav} />
    </div>
  )
}

// ─── Screen 4: Low Balance ────────────────────────────────────────────────────

function LowBalanceScreen({ onBack, onNav }: { onBack: () => void; onNav: (s: Screen) => void }) {
  return (
    <div className="absolute inset-0 bg-[#F8F9FA] pt-[96px] pb-[76px]">
      <SubHeader
        title="Low Balance"
        onBack={onBack}
        rightIcon={
          <div className="flex items-center gap-1">
            <div className="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold mr-1">Lo</div>
            <IconMore />
          </div>
        }
      />

      <div className="p-5 flex flex-col gap-4">
        {/* Warning card */}
        <div className="bg-red-50 border border-red-100 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-2 text-red-700 mb-3">
            <svg className="w-6 h-6 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="text-lg font-bold">Warning Alert</span>
          </div>
          <p className="text-sm text-red-600 leading-relaxed">
            Your wallet balance is critically low. Add money soon to avoid failed transactions or standard recharge requests.
          </p>
        </div>

        {/* Amount */}
        <div className="bg-[#E2F0F8] border border-[#b2d5ed] rounded-2xl p-5 flex items-center justify-between shadow-sm">
          <span className="text-sm font-semibold text-neutral-700">Remaining Balance</span>
          <span className="text-2xl font-black text-red-600">₹20</span>
        </div>
      </div>

      <BottomNav active="home" onNav={onNav} />
    </div>
  )
}

// ─── Screen 5: Weekly Balance ─────────────────────────────────────────────────

function WeeklyBalanceScreen({ onBack, onNav }: { onBack: () => void; onNav: (s: Screen) => void }) {
  return (
    <div className="absolute inset-0 bg-[#F8F9FA] pt-[96px] pb-[76px]">
      <SubHeader
        title="Weekly Balance"
        onBack={onBack}
        rightIcon={
          <div className="flex items-center gap-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B57D0" strokeWidth="2.5" className="mr-1">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            <IconMore />
          </div>
        }
      />

      <div className="p-5 flex flex-col gap-6 h-full overflow-y-auto">
        {/* Bar chart */}
        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm h-[280px] flex flex-col">
          <p className="text-xs font-bold text-[#5E5E5E] uppercase tracking-wider mb-4">This Week's Activity</p>
          <div className="flex-1">
            <BarChart
              bars={[
                { label: 'Mon', value: 3500, color: '#0B57D0' },
                { label: 'Tue', value: 5500, color: '#0B57D0' },
                { label: 'Wed', value: 2000, color: '#0B57D0' },
              ]}
            />
          </div>
        </div>

        {/* Bottom info */}
        <div className="flex flex-col gap-3">
          <div className="bg-[#CDEDDE] border border-[#b2ded0] rounded-2xl p-5 flex items-center justify-between shadow-sm">
            <span className="text-sm font-semibold text-[#0F5132]">Starting Balance</span>
            <span className="text-xl font-extrabold text-[#0F5132]">₹7,000</span>
          </div>
          <div className="bg-[#E2F0F8] border border-[#b2d5ed] rounded-2xl p-5 flex items-center justify-between shadow-sm">
            <span className="text-sm font-semibold text-[#0B57D0]">Weekly Spend</span>
            <span className="text-xl font-extrabold text-[#0B57D0]">₹2,000</span>
          </div>
        </div>
      </div>

      <BottomNav active="home" onNav={onNav} />
    </div>
  )
}

// ─── Screen 6: Transaction Flow ───────────────────────────────────────────────

function TransactionsScreen({ onNav, onSection }: { onNav: (s: Screen) => void; onSection: (s: string) => void }) {
  const [activeTab, setActiveTab] = useState<'rewards' | 'cashback' | 'credits'>('rewards')

  const transactions = [
    { name: 'Vishwakuvraba Sisodiya', initial: 'V', amount: 2000, type: 'debit', time: '11:45 AM' },
    { name: 'Lipsa vamja', initial: 'L', amount: 500, type: 'credit', time: '09:20 AM' },
    { name: 'khusbhu bhati', initial: 'K', amount: 700, type: 'debit', time: 'Yesterday' },
    { name: 'Nidhi Patel', initial: 'N', amount: 250, type: 'debit', time: '2 days ago' },
    { name: 'Jaythrajsinh Sisodiya', initial: 'J', amount: 850, type: 'credit', time: '3 days ago' },
  ]

  return (
    <div className="absolute inset-0 bg-[#F8F9FA] pt-[96px] pb-[76px] flex flex-col">
      {/* SubHeader */}
      <SubHeader title="Transaction Flow" onBack={() => onNav('home')} />

      <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
        {/* Navigation list */}
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => onSection('transaction-list')} className="bg-white border border-slate-100 hover:bg-slate-50 transition-colors p-4 rounded-2xl flex items-center gap-3 shadow-sm text-left font-sans">
            <div className="bg-[#E2F0F8] p-2.5 rounded-xl">
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path d="M0 0h20v2H0zm0 6h14v2H0zm0 6h20v2H0z" fill="#0B57D0" />
              </svg>
            </div>
            <span className="text-[13px] font-bold text-neutral-800">Transaction List</span>
          </button>

          <button onClick={() => onSection('category')} className="bg-white border border-slate-100 hover:bg-slate-50 transition-colors p-4 rounded-2xl flex items-center gap-3 shadow-sm text-left font-sans">
            <div className="bg-[#CDEDDE] p-2.5 rounded-xl">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                <circle cx="5" cy="8" r="4" stroke="#0F5132" strokeWidth="2" />
                <circle cx="15" cy="4" r="3" stroke="#0F5132" strokeWidth="2" />
                <circle cx="15" cy="12" r="3" stroke="#0F5132" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-[13px] font-bold text-neutral-800">Category Tags</span>
          </button>
        </div>

        {/* Tab row */}
        <div className="bg-slate-100 p-1 rounded-full flex gap-1 border border-slate-200/50 mt-1">
          {(['rewards', 'cashback', 'credits'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-center text-xs font-semibold rounded-full capitalize transition-all cursor-pointer ${
                activeTab === tab ? 'bg-white text-[#0B57D0] shadow-sm' : 'text-[#5E5E5E] hover:text-neutral-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Transaction History Section Header */}
        <div className="bg-[#E2F0F8] border border-[#b2d5ed] rounded-2xl p-4 flex items-center justify-between shadow-sm mt-1">
          <span className="text-sm font-bold text-[#0B57D0] tracking-wide">Transaction History</span>
          <button onClick={() => onSection('transaction-tracking')} className="text-xs font-bold text-[#0B57D0] flex items-center gap-0.5 hover:underline">
            See analytics <span>›</span>
          </button>
        </div>

        {/* Transaction list */}
        <div className="flex flex-col bg-white border border-slate-100 rounded-3xl p-4 shadow-sm">
          {transactions.map((tx, idx) => (
            <div key={tx.name} className={`flex items-center gap-3 py-3.5 ${idx !== transactions.length - 1 ? 'border-b border-slate-100' : ''}`}>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#E2F0F8] to-[#CDEDDE] border border-blue-50 flex items-center justify-center text-[#0B57D0] text-lg font-black shrink-0 shadow-sm">
                {tx.initial}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[#1F1F1F] truncate">{tx.name}</p>
                <p className="text-[10px] text-[#5E5E5E] mt-0.5">{tx.time}</p>
              </div>
              <div className="text-right shrink-0">
                <span className={`text-sm font-bold tracking-wide ${tx.type === 'credit' ? 'text-green-600' : 'text-neutral-800'}`}>
                  {tx.type === 'credit' ? '+' : '-'} ₹{tx.amount}
                </span>
                <p className="text-[9px] text-[#5E5E5E] uppercase tracking-wider font-semibold mt-0.5">{tx.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="transactions" onNav={onNav} />
    </div>
  )
}

// ─── Screen 7: Report Flow ────────────────────────────────────────────────────

function ReportsScreen({ onNav, onSection }: { onNav: (s: Screen) => void; onSection: (s: string) => void }) {
  const cards = [
    {
      label: 'Weekly Spend\nReport',
      key: 'weekly-balance',
      color: 'bg-[#E2F0F8] border-[#b2d5ed] text-[#0B57D0]',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0B57D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      ),
    },
    {
      label: 'Micro Spend\nSummary',
      key: 'micro-spend-summary',
      color: 'bg-[#CDEDDE] border-[#b2ded0] text-[#0F5132]',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0F5132" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20V10M18 20V4M6 20v-6" />
        </svg>
      ),
    },
    {
      label: 'Category Chat',
      key: 'category',
      color: 'bg-[#CDEDDE] border-[#b2ded0] text-[#0F5132]',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0F5132" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      label: 'Monthly Trends',
      key: 'budget-status',
      color: 'bg-[#E2F0F8] border-[#b2d5ed] text-[#0B57D0]',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0B57D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="absolute inset-0 bg-[#F8F9FA] pt-[96px] pb-[76px] flex flex-col">
      {/* Header */}
      <SubHeader title="Insights & Reports" onBack={() => onNav('home')} />

      {/* 2×2 grid */}
      <div className="flex-1 overflow-y-auto p-5">
        <p className="text-xs font-bold text-[#5E5E5E] uppercase tracking-wider mb-4 px-1">Financial Reports</p>
        <div className="grid grid-cols-2 gap-4">
          {cards.map((card) => (
            <button
              key={card.label}
              onClick={() => onSection(card.key)}
              className={`${card.color} border shadow-sm aspect-square flex flex-col items-center justify-center gap-4 rounded-3xl hover:opacity-95 active:scale-[0.98] transition-all cursor-pointer p-4`}
            >
              <div className="bg-white/60 p-3 rounded-2xl shadow-sm">
                {card.icon}
              </div>
              <p className="text-xs font-bold text-neutral-900 text-center whitespace-pre-wrap leading-snug">
                {card.label}
              </p>
            </button>
          ))}
        </div>
      </div>

      <BottomNav active="reports" onNav={onNav} />
    </div>
  )
}

// ─── Screen 8: Profile ────────────────────────────────────────────────────────

function ProfileScreen({ onNav, onSection }: { onNav: (s: Screen) => void; onSection: (s: string) => void }) {
  const alerts = [
    { icon: '🚨', title: 'Low Balance Alert', subtitle: 'Balance is below ₹500', time: '10:30 AM', color: 'bg-red-50 border-red-100 text-red-700' },
    { icon: '📊', title: 'Budget Alert', subtitle: "Spent 80% of your food limit", time: '09:15 AM', color: 'bg-amber-50 border-amber-100 text-amber-700' },
    { icon: '⏰', title: 'Bill Reminder', subtitle: 'Electricity bill due in 2 days', time: 'Yesterday', color: 'bg-blue-50 border-blue-100 text-blue-700' },
  ]

  const settings = [
    { label: 'Budget Configuration', icon: '🔧', key: 'budget-setting' },
    { label: 'Notification Preferences', icon: '🔔', key: 'notification-setting' },
    { label: 'Manage Categories', icon: '🏷️', key: 'category' },
  ]

  return (
    <div className="absolute inset-0 bg-[#F8F9FA] pt-10 pb-[76px] overflow-y-auto">
      {/* Profile banner */}
      <div className="bg-gradient-to-b from-[#E2F0F8] to-[#CDEDDE] p-6 pb-12 relative border-b border-slate-100">
        <div className="flex justify-between items-start mt-6">
          <div className="flex flex-col text-left">
            <span className="text-xl font-black text-neutral-900">Prakashji G.</span>
            <span className="text-xs text-neutral-700/80 font-medium mt-1">UI/UX Designer & Dev</span>
          </div>
          <div className="w-16 h-16 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#0B57D0] text-3xl font-black shadow-md">
            P
          </div>
        </div>
      </div>

      {/* Main profile content */}
      <div className="px-5 -mt-6 flex flex-col gap-6 relative z-10">
        {/* UPI / Mobile info */}
        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-50">
              <span className="text-xs font-bold text-[#5E5E5E] uppercase tracking-wider">UPI ID</span>
              <span className="text-sm font-semibold text-[#0B57D0]">303040XXXXX@ybl</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#5E5E5E] uppercase tracking-wider">Mobile No</span>
              <span className="text-sm font-semibold text-neutral-800">+91 9998301761</span>
            </div>
          </div>
        </div>

        {/* Alerts Preview */}
        <div>
          <p className="text-xs font-bold text-[#5E5E5E] uppercase tracking-wider mb-3 px-1">Recent Alerts</p>
          <div className="flex flex-col gap-2">
            {alerts.map((a, i) => (
              <div key={i} className={`flex items-start gap-3 p-3.5 border rounded-2xl shadow-sm ${a.color}`}>
                <span className="text-lg leading-none mt-0.5">{a.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold leading-tight">{a.title}</p>
                  <p className="text-[10px] opacity-90 mt-0.5 truncate">{a.subtitle}</p>
                </div>
                <span className="text-[9px] opacity-75 font-semibold shrink-0 mt-0.5">{a.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Settings rows */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-bold text-[#5E5E5E] uppercase tracking-wider mb-1 px-1">Account settings</p>
          {settings.map((s) => (
            <button
              key={s.label}
              onClick={() => onSection(s.key)}
              className="bg-white border border-slate-100 hover:bg-slate-50 transition-colors p-4 rounded-2xl flex items-center justify-between w-full text-left shadow-sm group"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl leading-none">{s.icon}</span>
                <span className="text-xs font-bold text-neutral-800">{s.label}</span>
              </div>
              <span className="text-slate-400 group-hover:text-slate-600 transition-colors text-lg font-bold">›</span>
            </button>
          ))}
        </div>
      </div>

      <BottomNav active="profile" onNav={onNav} />
    </div>
  )
}

// ─── Screen 9: Transaction Tracking detail ────────────────────────────────────

function TransactionTrackingScreen({ onBack, onNav }: { onBack: () => void; onNav: (s: Screen) => void }) {
  const mostlySpend = [
    { label: 'Traveling', amount: 1000 },
    { label: 'Food', amount: 1500 },
    { label: 'Shopping', amount: 700 },
  ]
  const lessSpend = [
    { label: 'Recharge', amount: 199 },
    { label: 'Electricity', amount: 300 },
    { label: 'Subscriptions', amount: 450 },
  ]

  return (
    <div className="absolute inset-0 bg-[#F8F9FA] pt-[96px] pb-[76px] overflow-y-auto">
      <SubHeader title="Expense Analysis" onBack={onBack} />

      <div className="p-5 flex flex-col gap-6">
        {/* Mostly spend on */}
        <div>
          <div className="bg-[#E2F0F8] border border-[#b2d5ed] p-4 rounded-2xl flex items-center justify-between mb-3 shadow-sm">
            <span className="text-sm font-extrabold text-[#0B57D0]">High Expense Categories</span>
            <span className="text-xs font-semibold text-[#0B57D0]">Mostly spend on</span>
          </div>
          <div className="flex flex-col bg-white border border-slate-100 rounded-3xl p-3 shadow-sm">
            {mostlySpend.map((item) => (
              <div key={item.label} className="flex items-center justify-between py-3 px-2 border-b border-slate-50 last:border-0">
                <span className="text-xs font-bold text-[#1F1F1F]">{item.label}</span>
                <span className="text-sm font-extrabold text-neutral-900">₹{item.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Less spend on */}
        <div>
          <div className="bg-[#CDEDDE] border border-[#b2ded0] p-4 rounded-2xl flex items-center justify-between mb-3 shadow-sm">
            <span className="text-sm font-extrabold text-[#0F5132]">Low Expense Categories</span>
            <span className="text-xs font-semibold text-[#0F5132]">Less spend on</span>
          </div>
          <div className="flex flex-col bg-white border border-slate-100 rounded-3xl p-3 shadow-sm">
            {lessSpend.map((item) => (
              <div key={item.label} className="flex items-center justify-between py-3 px-2 border-b border-slate-50 last:border-0">
                <span className="text-xs font-bold text-[#1F1F1F]">{item.label}</span>
                <span className="text-sm font-extrabold text-neutral-900">₹{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav active="transactions" onNav={onNav} />
    </div>
  )
}

// ─── Screen: Category ─────────────────────────────────────────────────────────

// Screen: Category
function CategoryScreen({ onBack, onNav }: { onBack: () => void; onNav: (s: Screen) => void }) {
  const [activeCategory, setActiveCategory] = useState<'food' | 'travel' | 'shopping' | 'other'>('food')

  const categories = [
    {
      key: 'food' as const,
      label: 'Food',
      color: '#0F5132',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      key: 'travel' as const,
      label: 'Travel',
      color: '#0B57D0',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      ),
    },
    {
      key: 'shopping' as const,
      label: 'Shopping',
      color: '#E65100',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
    },
    {
      key: 'other' as const,
      label: 'Other',
      color: '#555555',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      ),
    },
  ]

  const categoryTransactions: Record<string, { date: string; amount: number }[]> = {
    food: [
      { date: '23 April 2026', amount: 250 },
      { date: '20 April 2026', amount: 100 },
      { date: '18 April 2026', amount: 150 },
      { date: '14 April 2026', amount: 200 },
    ],
    travel: [
      { date: '21 April 2026', amount: 500 },
      { date: '15 April 2026', amount: 300 },
      { date: '10 April 2026', amount: 200 },
    ],
    shopping: [
      { date: '22 April 2026', amount: 700 },
      { date: '12 April 2026', amount: 350 },
    ],
    other: [
      { date: '19 April 2026', amount: 199 },
      { date: '11 April 2026', amount: 120 },
    ],
  }

  const currentLabel = categories.find((c) => c.key === activeCategory)?.label ?? 'Food'

  return (
    <div className="absolute inset-0 bg-[#F8F9FA] pt-[96px] pb-[76px] overflow-y-auto">
      <SubHeader title="Category Breakdown" onBack={onBack} />

      {/* Category icons row */}
      <div className="grid grid-cols-4 gap-3 p-5">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div
              className={`w-full aspect-square flex items-center justify-center rounded-2xl border transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-[#E2F0F8] border-blue-200 text-[#0B57D0] shadow-sm'
                  : 'bg-white border-slate-100 text-[#5E5E5E] shadow-[0_2px_4px_rgba(0,0,0,0.01)]'
              }`}
            >
              {cat.icon}
            </div>
            <span className={`text-xs font-bold transition-colors ${activeCategory === cat.key ? 'text-[#0B57D0]' : 'text-[#5E5E5E]'}`}>
              {cat.label}
            </span>
          </button>
        ))}
      </div>

      {/* This month section */}
      <div className="px-5">
        <p className="text-xs font-bold text-[#5E5E5E] uppercase tracking-wider mb-3 px-1">This Month</p>
        <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
          {/* Category header */}
          <div className="bg-[#E2F0F8]/50 px-5 py-4 border-b border-slate-100">
            <p className="text-sm font-extrabold text-[#0B57D0]">{currentLabel} Transactions</p>
          </div>
          {/* Transactions */}
          <div className="flex flex-col">
            {categoryTransactions[activeCategory].map((tx, idx) => (
              <div
                key={tx.date}
                className={`flex items-center justify-between px-5 py-3.5 ${
                  idx !== categoryTransactions[activeCategory].length - 1 ? 'border-b border-slate-50' : ''
                }`}
              >
                <span className="text-xs font-semibold text-[#5E5E5E]">{tx.date}</span>
                <span className="text-sm font-bold text-neutral-800">₹{tx.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav active="profile" onNav={onNav} />
    </div>
  )
}

// ─── Screen: Transaction List ─────────────────────────────────────────────────

function TransactionListScreen({ onBack, onNav }: { onBack: () => void; onNav: (s: Screen) => void }) {
  const [activeTab, setActiveTab] = useState<'history' | 'date' | 'amount'>('history')

  const thisMonth = [
    { name: 'Vishwakuvraba Sisodiya', initial: 'V', amount: 2000, type: 'debit' },
    { name: 'Lipsa vamja', initial: 'L', amount: 500, type: 'credit' },
    { name: 'khusbhu bhati', initial: 'K', amount: 700, type: 'debit' },
    { name: 'Nidhi Patel', initial: 'N', amount: 250, type: 'debit' },
    { name: 'Jaythrajsinh Sisodiya', initial: 'J', amount: 850, type: 'credit' },
  ]
  const lastMonth = [
    { name: 'Lipsa vamja', initial: 'L', amount: 500, type: 'credit' },
  ]

  const sorted = {
    history: thisMonth,
    date: [...thisMonth].reverse(),
    amount: [...thisMonth].sort((a, b) => b.amount - a.amount),
  }[activeTab]

  return (
    <div className="absolute inset-0 bg-[#F8F9FA] pt-[96px] pb-[76px] overflow-y-auto">
      <SubHeader title="Transaction Ledger" onBack={onBack} />

      {/* Filter tabs */}
      <div className="bg-slate-100 p-1 rounded-full flex gap-1 border border-slate-200/50 mx-5 mt-4">
        {(['history', 'date', 'amount'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-center text-xs font-semibold rounded-full capitalize transition-all cursor-pointer ${
              activeTab === tab ? 'bg-white text-[#0B57D0] shadow-sm' : 'text-[#5E5E5E] hover:text-neutral-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* This month */}
      <div className="p-5">
        <p className="text-xs font-bold text-[#5E5E5E] uppercase tracking-wider mb-3 px-1">This month</p>
        <div className="flex flex-col bg-white border border-slate-100 rounded-3xl p-4 shadow-sm">
          {sorted.map((tx, i) => (
            <div key={`${tx.name}-${i}`} className={`flex items-center gap-3 py-3.5 ${i !== sorted.length - 1 ? 'border-b border-slate-50' : ''}`}>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#E2F0F8] to-[#CDEDDE] border border-blue-50 flex items-center justify-center text-[#0B57D0] text-lg font-black shrink-0 shadow-sm">
                {tx.initial}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[#1F1F1F] truncate">{tx.name}</p>
                <p className="text-[9px] text-[#5E5E5E] uppercase tracking-wider font-semibold mt-0.5">{tx.type}</p>
              </div>
              <span className={`text-sm font-bold shrink-0 ${tx.type === 'credit' ? 'text-green-600' : 'text-neutral-800'}`}>
                {tx.type === 'credit' ? '+' : '-'} ₹{tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Last month */}
      <div className="px-5 pb-5">
        <p className="text-xs font-bold text-[#5E5E5E] uppercase tracking-wider mb-3 px-1">Last month</p>
        <div className="flex flex-col bg-white border border-slate-100 rounded-3xl p-4 shadow-sm">
          {lastMonth.map((tx, i) => (
            <div key={`last-${tx.name}-${i}`} className="flex items-center gap-3 py-1">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#E2F0F8] to-[#CDEDDE] border border-blue-55 flex items-center justify-center text-[#0B57D0] text-lg font-black shrink-0 shadow-sm">
                {tx.initial}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[#1F1F1F] truncate">{tx.name}</p>
                <p className="text-[9px] text-[#5E5E5E] uppercase tracking-wider font-semibold mt-0.5">{tx.type}</p>
              </div>
              <span className={`text-sm font-bold shrink-0 ${tx.type === 'credit' ? 'text-green-600' : 'text-neutral-800'}`}>
                {tx.type === 'credit' ? '+' : '-'} ₹{tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="transactions" onNav={onNav} />
    </div>
  )
}

// ─── Screen: Micro Spend Summary ──────────────────────────────────────────────

function MicroSpendSummaryScreen({ onBack, onNav }: { onBack: () => void; onNav: (s: Screen) => void }) {
  return (
    <div className="absolute inset-0 bg-[#F8F9FA] pt-[96px] pb-[76px] overflow-y-auto">
      <SubHeader title="Micro Spend Analysis" onBack={onBack} />

      <div className="p-5 flex flex-col gap-6">
        {/* Micro spend chart */}
        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm flex flex-col h-[280px]">
          <p className="text-xs font-bold text-[#5E5E5E] uppercase tracking-wider mb-4">Micro Spend (Daily Essentials)</p>
          <div className="flex-1">
            <BarChart
              bars={[
                { label: 'Food', value: 65, color: '#0F5132' },
                { label: 'Travel', value: 100, color: '#0F5132' },
                { label: 'Shopping', value: 40, color: '#0F5132' },
              ]}
            />
          </div>
        </div>

        {/* Large spend chart */}
        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm flex flex-col h-[280px]">
          <p className="text-xs font-bold text-[#5E5E5E] uppercase tracking-wider mb-4">Large Spend (Major Investments)</p>
          <div className="flex-1">
            <BarChart
              bars={[
                { label: 'Decor', value: 70, color: '#0B57D0' },
                { label: 'Fees', value: 95, color: '#0B57D0' },
                { label: 'Auto', value: 50, color: '#0B57D0' },
              ]}
            />
          </div>
        </div>
      </div>

      <BottomNav active="reports" onNav={onNav} />
    </div>
  )
}

// ─── Screen: Notification Setting ────────────────────────────────────────────

function NotificationSettingScreen({ onBack, onNav }: { onBack: () => void; onNav: (s: Screen) => void }) {
  const notifications = [
    { label: 'Low Balance Threshold Crossed', time: '2 weeks ago', color: 'bg-[#E2F0F8] border-[#b2d5ed] text-[#0B57D0]' },
    { label: 'Budget Cap Alert Activated', time: '3 weeks ago', color: 'bg-[#E2F0F8] border-[#b2d5ed] text-[#0B57D0]' },
    { label: 'Automatic Recharge Completed', time: '3 weeks ago', color: 'bg-[#CDEDDE] border-[#b2ded0] text-[#0F5132]' },
  ]

  return (
    <div className="absolute inset-0 bg-[#F8F9FA] pt-[96px] pb-[76px] overflow-y-auto">
      <SubHeader title="Notifications Ledger" onBack={onBack} />

      <div className="p-5 flex flex-col gap-4">
        {notifications.map((n, i) => (
          <div
            key={i}
            className={`border rounded-2xl p-5 flex items-center justify-between shadow-sm ${n.color}`}
          >
            <div className="flex flex-col gap-1 text-left">
              <span className="text-xs font-bold leading-snug">{n.label}</span>
              <span className="text-[10px] opacity-75 font-semibold">{n.time}</span>
            </div>
            <span className="text-lg leading-none font-bold">✓</span>
          </div>
        ))}
      </div>

      <BottomNav active="profile" onNav={onNav} />
    </div>
  )
}

// ─── Screen: Budget Setting ───────────────────────────────────────────────────

function BudgetSettingScreen({ onBack, onNav }: { onBack: () => void; onNav: (s: Screen) => void }) {
  const [amount, setAmount] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const pastBudgets = [1000, 2000, 5000, 3000]

  const handleSubmit = () => {
    if (!amount || Number(amount) <= 0) return
    setSubmitted(true)
  }

  return (
    <div className="absolute inset-0 bg-[#F8F9FA] pt-[96px] pb-[76px] overflow-y-auto">
      <SubHeader
        title="Budget Settings"
        onBack={onBack}
        rightIcon={
          <div className="flex items-center gap-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B57D0" strokeWidth="2.5" className="mr-1">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
            <IconMore />
          </div>
        }
      />

      <div className="p-5 flex flex-col gap-6">
        {/* Monthly budget label card */}
        <div className="bg-[#E2F0F8] border border-[#b2d5ed] rounded-3xl p-5 shadow-sm text-left flex flex-col gap-1">
          <span className="text-xs font-bold text-[#0B57D0] uppercase tracking-wider">Configuration</span>
          <span className="text-lg font-black text-neutral-800 mt-1">Monthly Budget Setup</span>
        </div>

        {/* Amount input card */}
        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm flex flex-col gap-2">
          <label className="text-xs font-bold text-[#5E5E5E] uppercase tracking-wider">Set Limit Amount (₹)</label>
          <div className="flex items-center gap-2 border-b border-slate-100 py-2">
            <span className="text-xl font-bold text-neutral-400">₹</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => { setAmount(e.target.value); setSubmitted(false) }}
              placeholder="Enter limit e.g. 5000"
              className="flex-1 bg-transparent text-lg font-bold text-neutral-900 outline-none placeholder-slate-300"
            />
          </div>
        </div>

        {/* Shortcuts / Past values */}
        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm flex flex-col gap-3">
          <p className="text-xs font-bold text-[#5E5E5E] uppercase tracking-wider">Predefined Limits</p>
          <div className="flex flex-wrap gap-2.5">
            {pastBudgets.map((b) => (
              <button
                key={b}
                onClick={() => { setAmount(String(b)); setSubmitted(false) }}
                className={`px-4 py-2 rounded-full border text-xs font-bold transition-all cursor-pointer ${
                  amount === String(b)
                    ? 'bg-[#E2F0F8] border-blue-200 text-[#0B57D0] shadow-sm'
                    : 'bg-white border-slate-100 text-[#5E5E5E] hover:bg-slate-50'
                }`}
              >
                ₹{b}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!amount || Number(amount) <= 0}
          className={`w-full h-14 rounded-2xl text-sm font-bold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 shadow-sm
            ${amount && Number(amount) > 0
              ? 'bg-[#0B57D0] text-white hover:bg-[#0B57D0]/90 active:scale-[0.98] cursor-pointer'
              : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
        >
          {submitted ? (
            <>
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Budget Set Successfully!
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Set Budget Limit
            </>
          )}
        </button>

        {/* Success confirmation card */}
        {submitted && (
          <div className="bg-[#CDEDDE] border border-[#b2ded0] rounded-2xl p-4 flex items-center gap-3 shadow-sm animate-fade-in">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
              <svg className="w-5 h-5 text-[#0F5132]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-black text-[#0F5132]">Budget Saved!</span>
              <span className="text-[11px] text-[#0F5132]/80 font-semibold mt-0.5">Monthly limit set to ₹{Number(amount).toLocaleString()}</span>
            </div>
          </div>
        )}
      </div>

      <BottomNav active="profile" onNav={onNav} />
    </div>

  )
}

// ─── Mobile Simulator Shell Wrapper ──────────────────────────────────────────

function MobileShell({ children }: { children: React.ReactNode }) {
  const [currentTime, setCurrentTime] = useState('9:41')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }))
    }
    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-0 sm:p-4 font-sans text-neutral-900 select-none animate-fade-in">
      {/* Phone container simulator */}
      <div className="relative w-full h-screen sm:w-[412px] sm:h-[846px] sm:rounded-[40px] bg-white shadow-2xl overflow-hidden flex flex-col border-0 sm:border-[8px] sm:border-slate-800">
        
        {/* Status Bar (Transparent background so headers flow underneath) */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-transparent flex items-center justify-between px-6 z-50 text-[11px] font-bold text-neutral-800 select-none pointer-events-none">
          <span>{currentTime}</span>
          
          {/* Dynamic Speaker Notch Design */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-28 h-[16px] bg-slate-800 rounded-b-2xl hidden sm:block" />
          
          <div className="flex items-center gap-1.5">
            {/* Cellular Signal Icon */}
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M2 22h20V2z" />
            </svg>
            {/* Wifi Icon */}
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 21c-2.93 0-5.67-1.12-7.78-3.12l1.4-1.4C7.38 18.14 9.59 19 12 19s4.62-.86 6.38-2.52l1.4 1.4C17.67 19.88 14.93 21 12 21zm6.36-8.36c-1.66-1.66-3.88-2.64-6.36-2.64s-4.7.98-6.36 2.64l1.42 1.42c1.28-1.28 3-2.06 4.94-2.06s3.66.78 4.94 2.06l1.42-1.42zM12 3C7.3 3 3.07 4.9 0 8l1.42 1.42c2.72-2.72 6.42-4.42 10.58-4.42s7.86 1.7 10.58 4.42L24 8c-3.07-3.1-7.3-5-12-5z" />
            </svg>
            {/* Battery Icon */}
            <div className="relative w-5 h-3 border border-neutral-800 rounded-sm px-0.5 flex items-center">
              <div className="h-full bg-neutral-800 w-3/4 rounded-[1px]" />
              <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-[4px] bg-neutral-800 rounded-r-sm" />
            </div>
          </div>
        </div>

        {/* Screen Content (Set pt-0 to let children start at physical top) */}
        <div className="flex-1 relative overflow-hidden bg-[#F8F9FA] pt-0">
          {children}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-[4px] bg-slate-900/30 rounded-full z-50 pointer-events-none hidden sm:block" />
      </div>
    </div>
  )
}

// ─── Root App ─────────────────────────────────────────────────────────────────

type SectionKey =
  | 'budget-status'
  | 'current-balance'
  | 'weekly-balance'
  | 'low-balance'
  | 'set-budget'
  | 'transaction-tracking'
  | 'transaction-list'
  | 'category'
  | 'micro-spend-summary'
  | 'notification-setting'
  | 'budget-setting'
  | null

export default function App() {
  const [appState, setAppState] = useState<'splash' | 'login' | 'app'>('splash')
  const [activeScreen, setActiveScreen] = useState<Screen>('home')
  const [activeSection, setActiveSection] = useState<SectionKey>(null)

  const handleNav = (s: Screen) => {
    setActiveSection(null)
    setActiveScreen(s)
  }

  const handleSection = (s: string) => {
    setActiveSection(s as SectionKey)
  }

  const handleBack = () => {
    setActiveSection(null)
  }

  // Section sub-screens (rendered inside phone shell)
  const renderScreenContent = () => {
    if (appState === 'splash') {
      return <SplashScreen onFinish={() => setAppState('login')} />
    }
    if (appState === 'login') {
      return <LoginScreen onLogin={() => setAppState('app')} />
    }

    if (activeSection === 'budget-status') {
      return <BudgetStatusScreen onBack={handleBack} onNav={handleNav} />
    }
    if (activeSection === 'current-balance') {
      return <CurrentBalanceScreen onBack={handleBack} onNav={handleNav} />
    }
    if (activeSection === 'low-balance') {
      return <LowBalanceScreen onBack={handleBack} onNav={handleNav} />
    }
    if (activeSection === 'weekly-balance') {
      return <WeeklyBalanceScreen onBack={handleBack} onNav={handleNav} />
    }
    if (activeSection === 'transaction-tracking') {
      return <TransactionTrackingScreen onBack={handleBack} onNav={handleNav} />
    }
    if (activeSection === 'transaction-list') {
      return <TransactionListScreen onBack={handleBack} onNav={handleNav} />
    }
    if (activeSection === 'category') {
      return <CategoryScreen onBack={handleBack} onNav={handleNav} />
    }
    if (activeSection === 'micro-spend-summary') {
      return <MicroSpendSummaryScreen onBack={handleBack} onNav={handleNav} />
    }
    if (activeSection === 'notification-setting') {
      return <NotificationSettingScreen onBack={handleBack} onNav={handleNav} />
    }
    if (activeSection === 'budget-setting') {
      return <BudgetSettingScreen onBack={handleBack} onNav={handleNav} />
    }

    // Main screens
    switch (activeScreen) {
      case 'home':
        return <HomeScreen onNav={handleNav} onSection={handleSection} />
      case 'transactions':
        return <TransactionsScreen onNav={handleNav} onSection={handleSection} />
      case 'reports':
        return <ReportsScreen onNav={handleNav} onSection={handleSection} />
      case 'profile':
        return <ProfileScreen onNav={handleNav} onSection={handleSection} />
      default:
        return <HomeScreen onNav={handleNav} onSection={handleSection} />
    }
  }

  return (
    <MobileShell>
      {renderScreenContent()}
    </MobileShell>
  )
}
