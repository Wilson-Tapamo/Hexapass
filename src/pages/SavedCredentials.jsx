import React, { useState } from 'react';
import { Key, Eye, EyeOff, Copy, Edit, Trash2, Plus, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from '../components/Common/Modal';

const SavedCredentials = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCred, setEditingCred] = useState(null);
    const [showPasswords, setShowPasswords] = useState({});
    const [credentials, setCredentials] = useState([
        { id: 1, name: 'GitHub Personal', username: 'jd@entreprise.com', password: 'password123', lastUsed: 'Il y a 2h' },
        { id: 2, name: 'AWS Console', username: 'admin-prod', password: 'secure_aws_key', lastUsed: 'Hier' },
        { id: 3, name: 'Vercel Deployment', username: 'jean.dupont', password: 'vercel_token_456', lastUsed: 'Il y a 3 jours' },
        { id: 4, name: 'Slack Workspace', username: 'jd.slack', password: 'slack_secret_789', lastUsed: 'Il y a 10 min' },
    ]);

    const [form, setForm] = useState({ name: '', username: '', password: '' });

    const togglePassword = (id) => {
        setShowPasswords(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleOpenModal = (cred = null) => {
        if (cred) {
            setEditingCred(cred);
            setForm({ name: cred.name, username: cred.username, password: cred.password });
        } else {
            setEditingCred(null);
            setForm({ name: '', username: '', password: '' });
        }
        setIsModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingCred) {
            setCredentials(credentials.map(c => c.id === editingCred.id ? { ...c, ...form } : c));
        } else {
            setCredentials([...credentials, { id: Date.now(), ...form, lastUsed: 'À l\'instant' }]);
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        if (window.confirm('Voulez-vous vraiment supprimer cet identifiant ?')) {
            setCredentials(credentials.filter(c => c.id !== id));
        }
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert('Copié dans le presse-papier !');
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="page-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <header className="page-header">
                <div>
                    <h1 className="page-title">Identifiants Enregistrés</h1>
                    <p className="page-subtitle">Gérez vos mots de passe et secrets en toute sécurité.</p>
                </div>
                <button className="btn btn-primary" onClick={() => handleOpenModal()}>
                    <Plus size={18} /> Ajouter un Secret
                </button>
            </header>

            <section className="card" style={{ padding: 0 }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ position: 'relative', width: '300px' }}>
                        <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input type="text" className="form-input" placeholder="Rechercher un secret..." style={{ paddingLeft: '2.5rem' }} />
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {credentials.map(cred => (
                        <div key={cred.id} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            padding: '1.25rem 1.5rem',
                            borderBottom: '1px solid var(--border)',
                            transition: 'background 0.2s'
                        }} className="list-item">
                            <div style={{ backgroundColor: 'var(--primary-soft)', color: 'var(--primary)', padding: '0.75rem', borderRadius: '12px' }}>
                                <Key size={20} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: '600', fontSize: '1rem' }}>{cred.name}</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{cred.username} • {cred.lastUsed}</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <div style={{
                                    backgroundColor: 'var(--bg-main)',
                                    padding: '0.4rem 0.75rem',
                                    borderRadius: '8px',
                                    fontSize: '0.9rem',
                                    fontFamily: 'monospace',
                                    border: '1px solid var(--border)',
                                    minWidth: '120px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <span>{showPasswords[cred.id] ? cred.password : '••••••••'}</span>
                                    <button onClick={() => togglePassword(cred.id)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', padding: '0 0.25rem' }}>
                                        {showPasswords[cred.id] ? <EyeOff size={14} /> : <Eye size={14} />}
                                    </button>
                                </div>
                                <button className="btn btn-ghost" style={{ padding: '0.5rem' }} onClick={() => copyToClipboard(cred.password)} title="Copier le MDP">
                                    <Copy size={16} />
                                </button>
                                <button className="btn btn-ghost" style={{ padding: '0.5rem' }} onClick={() => handleOpenModal(cred)} title="Modifier">
                                    <Edit size={16} />
                                </button>
                                <button className="btn btn-ghost" style={{ padding: '0.5rem', color: '#EF4444' }} onClick={() => handleDelete(cred.id)} title="Supprimer">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={editingCred ? "Modifier le Secret" : "Ajouter un Secret"}
            >
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nom de l'application / service</label>
                        <input
                            type="text"
                            className="form-input"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="ex: GitHub Enterprise"
                        />
                    </div>
                    <div className="form-group">
                        <label>Nom d'utilisateur / Identifiant</label>
                        <input
                            type="text"
                            className="form-input"
                            required
                            value={form.username}
                            onChange={(e) => setForm({ ...form, username: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label>Mot de passe / Secret</label>
                        <input
                            type="password"
                            className="form-input"
                            required
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                        />
                    </div>
                    <div className="modal-actions">
                        <button type="button" className="btn btn-ghost" onClick={() => setIsModalOpen(false)}>Annuler</button>
                        <button type="submit" className="btn btn-primary">
                            {editingCred ? "Mettre à jour" : "Enregistrer le secret"}
                        </button>
                    </div>
                </form>
            </Modal>
        </motion.div>
    );
};

export default SavedCredentials;
