import React, { useState } from 'react';
import { Plus, Search, Filter, User, MoreHorizontal, ShieldOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Common/Modal';

const AdminUsers = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [users, setUsers] = useState([
        { id: 1, name: 'Jean Dupont', email: 'jean.dupont@base44.app', role: 'Admin', status: 'Actif' },
        { id: 2, name: 'Alice Martin', email: 'alice.m@entreprise.fr', role: 'Utilisateur', status: 'Actif' },
        { id: 3, name: 'Bob Durand', email: 'bob.d@corp.com', role: 'Utilisateur', status: 'Inactif' },
        { id: 4, name: 'Sophie Bernard', email: 'sophie.b@test.re', role: 'Manager', status: 'Actif' },
        { id: 5, name: 'Marc Petit', email: 'marc.p@web.com', role: 'Utilisateur', status: 'Suspendu' },
    ]);

    const [newUser, setNewUser] = useState({ name: '', email: '', role: 'Utilisateur' });

    const handleAddUser = (e) => {
        e.preventDefault();
        const user = {
            id: users.length + 1,
            ...newUser,
            status: 'Actif'
        };
        setUsers([...users, user]);
        setIsModalOpen(false);
        setNewUser({ name: '', email: '', role: 'Utilisateur' });
    };

    return (
        <div className="page-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <header className="page-header">
                <div>
                    <h1 className="page-title">Gestion des Utilisateurs</h1>
                    <p className="page-subtitle">Gérez les comptes, les rôles et les permissions d'accès.</p>
                </div>
                <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                    <Plus size={18} /> Ajouter un Utilisateur
                </button>
            </header>

            <section className="card" style={{ padding: 0 }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ position: 'relative', width: '300px' }}>
                        <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input type="text" className="form-input" placeholder="Rechercher un utilisateur..." style={{ paddingLeft: '2.5rem' }} />
                    </div>
                    <button className="btn btn-secondary"><Filter size={16} /> Filtres</button>
                </div>

                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid var(--border)', textAlign: 'left', backgroundColor: 'var(--bg-main)' }}>
                            <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600' }}>Utilisateur</th>
                            <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600' }}>Rôle</th>
                            <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600' }}>Statut</th>
                            <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600', textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u) => (
                            <tr key={u.id} style={{ borderBottom: '1px solid var(--border)' }}>
                                <td style={{ padding: '1rem 1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--primary-soft)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontWeight: '600', fontSize: '0.8rem' }}>
                                            {u.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: '500', fontSize: '0.95rem' }}>{u.name}</div>
                                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{u.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ padding: '1rem 1.5rem', fontSize: '0.9rem' }}>{u.role}</td>
                                <td style={{ padding: '1rem 1.5rem' }}>
                                    <span style={{
                                        padding: '0.2rem 0.6rem',
                                        borderRadius: '20px',
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        backgroundColor: u.status === 'Actif' ? '#DCFCE7' : u.status === 'Suspendu' ? '#FEE2E2' : '#F1F5F9',
                                        color: u.status === 'Actif' ? '#166534' : u.status === 'Suspendu' ? '#991B1B' : '#475569'
                                    }}>
                                        {u.status}
                                    </span>
                                </td>
                                <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                                        <button className="btn btn-ghost" style={{ padding: '0.4rem' }} title="Détails"><User size={16} /></button>
                                        <button className="btn btn-ghost" style={{ padding: '0.4rem', color: '#EF4444' }} title="Suspendre"><ShieldOff size={16} /></button>
                                        <button className="btn btn-ghost" style={{ padding: '0.4rem' }}><MoreHorizontal size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Inviter un Utilisateur">
                <form onSubmit={handleAddUser}>
                    <div className="form-group">
                        <label>Nom complet</label>
                        <input
                            type="text"
                            className="form-input"
                            required
                            value={newUser.name}
                            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                            placeholder="ex: Jean Dupont"
                        />
                    </div>
                    <div className="form-group">
                        <label>Adresse Email</label>
                        <input
                            type="email"
                            className="form-input"
                            required
                            value={newUser.email}
                            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                            placeholder="ex: jean.dupont@entreprise.com"
                        />
                    </div>
                    <div className="form-group">
                        <label>Rôle</label>
                        <select
                            className="form-input"
                            value={newUser.role}
                            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                        >
                            <option value="Utilisateur">Utilisateur standard</option>
                            <option value="Manager">Manager</option>
                            <option value="Admin">Administrateur</option>
                        </select>
                    </div>
                    <div className="modal-actions">
                        <button type="button" className="btn btn-ghost" onClick={() => setIsModalOpen(false)}>Annuler</button>
                        <button type="submit" className="btn btn-primary">Envoyer l'invitation</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AdminUsers;
