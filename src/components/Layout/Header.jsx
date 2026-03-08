import React from 'react';
import { Search, Bell, Shield, User } from 'lucide-react';

const Header = ({ isAdmin, onToggleAdmin }) => {
    return (
        <header style={{
            height: 'var(--header-height)',
            backgroundColor: 'var(--bg-card)',
            borderBottom: '1px solid var(--border)',
            padding: '0 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 10
        }}>
            <div style={{ position: 'relative', width: '400px' }}>
                <Search
                    size={18}
                    style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
                />
                <input
                    type="text"
                    placeholder="Rechercher une application..."
                    style={{
                        width: '100%',
                        padding: '0.6rem 1rem 0.6rem 2.5rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border)',
                        backgroundColor: 'var(--bg-main)',
                        fontSize: '0.9rem',
                        outline: 'none'
                    }}
                />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <button
                    onClick={onToggleAdmin}
                    className="btn"
                    style={{
                        backgroundColor: isAdmin ? 'var(--primary)' : 'var(--bg-main)',
                        color: isAdmin ? 'white' : 'var(--text-main)',
                        border: '1px solid var(--border)',
                        padding: '0.5rem 1rem',
                        fontSize: '0.85rem'
                    }}
                >
                    {isAdmin ? <Shield size={16} /> : <User size={16} />}
                    {isAdmin ? 'Mode Administrateur' : 'Mode Utilisateur'}
                </button>

                <div style={{ position: 'relative', cursor: 'pointer', color: 'var(--text-muted)' }}>
                    <Bell size={20} />
                    <span style={{
                        position: 'absolute',
                        top: '-2px',
                        right: '-2px',
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#FF4D4F',
                        borderRadius: '50%',
                        border: '2px solid white'
                    }}></span>
                </div>

                <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    cursor: 'pointer'
                }}>
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
                </div>
            </div>
        </header>
    );
};

export default Header;
