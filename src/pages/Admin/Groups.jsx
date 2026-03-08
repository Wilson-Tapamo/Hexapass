import React, { useState } from 'react';
import { Plus, FolderOpen, Users, AppWindow, MoreVertical, Edit, ShieldCheck, Trash2, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from '../../components/Common/Modal';

const AdminGroups = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingGroup, setEditingGroup] = useState(null);
    const [groups, setGroups] = useState([
        { id: 1, name: 'Équipe Design', members: 12, apps: 5, status: 'Actif', desc: 'Designers UI/UX et graphistes.' },
        { id: 2, name: 'Ingénierie Frontend', members: 45, apps: 12, status: 'Actif', desc: 'Équipes React et Mobile.' },
        { id: 3, name: 'Marketing Digital', members: 8, apps: 3, status: 'Actif', desc: 'Gestion des réseaux sociaux et ads.' },
        { id: 4, name: 'Ressources Humaines', members: 5, apps: 2, status: 'Actif', desc: 'Admin RH et recrutement.' },
        { id: 5, name: 'Stagiaires 2024', members: 15, apps: 1, status: 'Inactif', desc: 'Accès limité pour les stagiaires.' },
    ]);

    const [form, setForm] = useState({ name: '', desc: '', status: 'Actif' });

    const handleOpenModal = (group = null) => {
        if (group) {
            setEditingGroup(group);
            setForm({ name: group.name, desc: group.desc || '', status: group.status });
        } else {
            setEditingGroup(null);
            setForm({ name: '', desc: '', status: 'Actif' });
        }
        setIsModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingGroup) {
            setGroups(groups.map(g => g.id === editingGroup.id ? { ...g, ...form } : g));
        } else {
            setGroups([...groups, { id: groups.length + 1, ...form, members: 0, apps: 0 }]);
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        if (window.confirm('Voulez-vous vraiment supprimer ce groupe ? Tous les membres perdront leurs accès spécifiques.')) {
            setGroups(groups.filter(g => g.id !== id));
        }
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="page-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <header className="page-header">
                <div>
                    <h1 className="page-title">Gestion des Groupes</h1>
                    <p className="page-subtitle">Organisez les utilisateurs en groupes pour une gestion simplifiée des accès.</p>
                </div>
                <button className="btn btn-primary" onClick={() => handleOpenModal()}>
                    <Plus size={18} /> Créer un Groupe
                </button>
            </header>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                <div style={{ position: 'relative', width: '300px' }}>
                    <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input type="text" className="form-input" placeholder="Rechercher un groupe..." style={{ paddingLeft: '2.5rem' }} />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
                {groups.map((group) => (
                    <div key={group.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div style={{ padding: '0.75rem', backgroundColor: 'var(--primary-soft)', color: 'var(--primary)', borderRadius: '12px' }}>
                                <FolderOpen size={24} />
                            </div>
                            <div style={{ display: 'flex', gap: '0.25rem' }}>
                                <button className="btn btn-ghost" style={{ padding: '0.4rem' }} onClick={() => handleOpenModal(group)}><Edit size={16} /></button>
                                <button className="btn btn-ghost" style={{ padding: '0.4rem', color: '#EF4444' }} onClick={() => handleDelete(group.id)}><Trash2 size={16} /></button>
                            </div>
                        </div>

                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <h2 style={{ fontSize: '1.15rem', fontWeight: '700' }}>{group.name}</h2>
                                <span style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: group.status === 'Actif' ? '#10B981' : '#EF4444'
                                }}></span>
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.4rem', minHeight: '2.5rem' }}>{group.desc}</p>
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
                            <button className="btn btn-secondary" style={{ flex: 1, fontSize: '0.85rem' }}>Gérer Membres</button>
                            <button className="btn btn-ghost" style={{ border: '1px solid var(--border)', fontSize: '0.85rem' }}><ShieldCheck size={16} /> Accès</button>
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={editingGroup ? "Modifier le Groupe" : "Créer un Groupe"}
            >
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nom du groupe</label>
                        <input
                            type="text"
                            className="form-input"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="ex: Équipe Backend"
                        />
                    </div>
                    <div className="form-group">
                        <label>Description (Optionnel)</label>
                        <textarea
                            className="form-input"
                            rows="3"
                            value={form.desc}
                            onChange={(e) => setForm({ ...form, desc: e.target.value })}
                            placeholder="À quoi sert ce groupe ?"
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Statut</label>
                        <select
                            className="form-input"
                            value={form.status}
                            onChange={(e) => setForm({ ...form, status: e.target.value })}
                        >
                            <option value="Actif">Actif</option>
                            <option value="Inactif">Inactif</option>
                        </select>
                    </div>
                    <div className="modal-actions">
                        <button type="button" className="btn btn-ghost" onClick={() => setIsModalOpen(false)}>Annuler</button>
                        <button type="submit" className="btn btn-primary">
                            {editingGroup ? "Mettre à jour" : "Créer le groupe"}
                        </button>
                    </div>
                </form>
            </Modal>
        </motion.div>
    );
};

export default AdminGroups;
