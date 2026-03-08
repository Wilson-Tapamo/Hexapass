import React from 'react';
import { Plus, FolderOpen, Users, AppWindow, MoreVertical, Edit, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminGroups = () => {
    const groups = [
        { id: 1, name: 'Équipe Design', members: 12, apps: 5, status: 'Actif' },
        { id: 2, name: 'Ingénierie Frontend', members: 45, apps: 12, status: 'Actif' },
        { id: 3, name: 'Marketing Digital', members: 8, apps: 3, status: 'Actif' },
        { id: 4, name: 'Ressources Humaines', members: 5, apps: 2, status: 'Actif' },
        { id: 5, name: 'Stagiaires 2024', members: 15, apps: 1, status: 'Inactif' },
    ];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.25rem' }}>Gestion des Groupes</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Organisez les utilisateurs en groupes pour une gestion simplifiée des accès.</p>
                </div>
                <button className="btn btn-primary"><Plus size={18} /> Créer un Groupe</button>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
                {groups.map((group) => (
                    <div key={group.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div style={{ padding: '0.75rem', backgroundColor: 'var(--primary-soft)', color: 'var(--primary)', borderRadius: '12px' }}>
                                <FolderOpen size={24} />
                            </div>
                            <button className="btn btn-ghost" style={{ padding: '0.25rem' }}><MoreVertical size={18} /></button>
                        </div>

                        <div>
                            <h2 style={{ fontSize: '1.15rem', fontWeight: '700' }}>{group.name}</h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                                Statut: <span style={{ color: group.status === 'Actif' ? '#10B981' : '#EF4444', fontWeight: '600' }}>{group.status}</span>
                            </p>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                <Users size={16} /> <strong>{group.members}</strong> membres
                            </div>
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                <AppWindow size={16} /> <strong>{group.apps}</strong> apps
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <button className="btn btn-secondary" style={{ flex: 1, fontSize: '0.85rem' }}><Edit size={16} /> Modifier</button>
                            <button className="btn btn-ghost" style={{ border: '1px solid var(--border)', fontSize: '0.85rem' }}><ShieldCheck size={16} /> Accès</button>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default AdminGroups;
