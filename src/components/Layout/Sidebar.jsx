import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    AppWindow,
    KeyRound,
    Bell,
    UserCircle,
    Shield,
    Users,
    FolderOpen,
    ScrollText,
    Settings,
    Hexagon
} from 'lucide-react';

const Sidebar = ({ isAdmin }) => {
    const userNav = [
        { name: 'Tableau de Bord', icon: LayoutDashboard, path: '/Dashboard' },
        { name: 'Mes Apps', icon: AppWindow, path: '/MyApplications' },
        { name: 'Identifiants', icon: KeyRound, path: '/SavedCredentials' },
        { name: 'Notifications', icon: Bell, path: '/Notifications' },
        { name: 'Profil', icon: UserCircle, path: '/Profile' },
    ];

    const adminNav = [
        { name: 'Dashboard Admin', icon: Shield, path: '/AdminDashboard' },
        { name: 'Applications', icon: AppWindow, path: '/AdminApplications' },
        { name: 'Utilisateurs', icon: Users, path: '/AdminUsers' },
        { name: 'Groupes', icon: FolderOpen, path: '/AdminGroups' },
        { name: 'Logs d\'Audit', icon: ScrollText, path: '/AdminLogs' },
        { name: 'Paramètres', icon: Settings, path: '/AdminSettings' },
    ];

    const navigation = isAdmin ? adminNav : userNav;

    return (
        <aside style={{
            width: 'var(--sidebar-width)',
            backgroundColor: 'var(--bg-sidebar)',
            borderRight: '1px solid var(--border)',
            padding: '2rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            position: 'sticky',
            top: 0,
            height: '100vh'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '2.5rem',
                padding: '0 0.75rem',
                color: 'var(--primary)',
                fontWeight: '700',
                fontSize: '1.25rem'
            }}>
                <Hexagon size={32} fill="var(--primary)" color="white" />
                <span>HexaPass</span>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {navigation.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        style={({ isActive }) => ({
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1rem',
                            borderRadius: 'var(--radius-md)',
                            textDecoration: 'none',
                            color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                            backgroundColor: isActive ? 'var(--primary-soft)' : 'transparent',
                            fontWeight: isActive ? '600' : '500',
                            transition: 'all 0.2s ease'
                        })}
                    >
                        <item.icon size={20} />
                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </nav>

            <div style={{ marginTop: 'auto', padding: '0 0.75rem' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem',
                    backgroundColor: 'var(--bg-main)',
                    borderRadius: 'var(--radius-lg)',
                    fontSize: '0.875rem'
                }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '600'
                    }}>
                        JD
                    </div>
                    <div style={{ flex: 1, overflow: 'hidden' }}>
                        <div style={{ fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Jean Dupont</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{isAdmin ? 'Administrateur' : 'Utilisateur'}</div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
