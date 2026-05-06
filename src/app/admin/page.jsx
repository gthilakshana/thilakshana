'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { addProject, deleteProject, registerAdmin, deleteAdmin, fetchAdmins, addService, deleteService, fetchServices, addFAQ, deleteFAQ, fetchFAQs, updateAdmin, fetchSectionOrder, updateSectionOrder, updateService, updateFAQ, updateServiceOrder, updateFAQOrder } from '../../lib/actions';
import { Briefcase, Layout, HelpCircle, Users, Move, Loader2 } from 'lucide-react';

// Modular Components
import ProjectsTab from './components/ProjectsTab';
import ServicesTab from './components/ServicesTab';
import FAQsTab from './components/FAQsTab';
import LayoutTab from './components/LayoutTab';
import AdminsTab from './components/AdminsTab';
import LoginForm from './components/LoginForm';
import DeleteModal from './components/DeleteModal';
import DashboardHeader from './components/DashboardHeader';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('projects');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [initialCheck, setInitialCheck] = useState(true);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [loginError, setLoginError] = useState('');
  const [checking, setChecking] = useState(false);

  const [projects, setProjects] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [services, setServices] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [sectionOrder, setSectionOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState(null);
  const [editingService, setEditingService] = useState(null);
  const [editingFaq, setEditingFaq] = useState(null);

  // Modal states
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [deleteType, setDeleteType] = useState('project'); // 'project' or 'admin'

  // Form states
  const [formData, setFormData] = useState({
    title: '', category: 'Full Stack', description: '', image: '', github: '', demo: '', tech: '', imageFile: null
  });
  const [adminFormData, setAdminFormData] = useState({
    email: '', password: '', name: ''
  });
  const [serviceFormData, setServiceFormData] = useState({
    title: '', description: '', icon: 'Globe', color: 'from-blue-500/20 to-cyan-500/20', tags: ''
  });
  const [faqFormData, setFaqFormData] = useState({
    question: '', answer: ''
  });

  useEffect(() => {
    checkSession();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      refreshData();
    }
  }, [isLoggedIn, activeTab]);

  const refreshData = async () => {
    setLoading(true);
    if (activeTab === 'projects') {
      await fetchProjects();
    } else if (activeTab === 'admins') {
      const data = await fetchAdmins();
      setAdmins(data);
    } else if (activeTab === 'services') {
      const data = await fetchServices();
      setServices(data);
    } else if (activeTab === 'faqs') {
      const data = await fetchFAQs();
      setFaqs(data);
    } else if (activeTab === 'layout') {
      const data = await fetchSectionOrder();
      setSectionOrder(data);
    }
    setLoading(false);
  };

  const fetchFaqs = async () => {
     const data = await fetchFAQs();
     setFaqs(data);
  };

  const checkSession = async () => {
    try {
      const res = await fetch('/api/admin/check-session');
      if (res.ok) setIsLoggedIn(true);
    } catch (err) {
      console.error('Session check failed');
    } finally {
      setInitialCheck(false);
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setChecking(true);
    setLoginError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPass })
      });
      const data = await res.json();
      if (data.success) setIsLoggedIn(true);
      else setLoginError('Invalid Administrator Credentials');
    } catch (err) {
      setLoginError('Connection Error');
    } finally {
      setChecking(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      setIsLoggedIn(false);
    } catch (err) {
      console.error('Logout failed');
    }
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    if (!formData.imageFile) return alert('Please upload a project image');
    setSubmitting(true);
    try {
      const techArray = formData.tech.split(',').map(t => t.trim()).filter(t => t !== '');
      const data = new FormData();
      data.append('title', formData.title);
      data.append('category', formData.category);
      data.append('description', formData.description);
      data.append('tech', JSON.stringify(techArray));
      data.append('github', formData.github);
      data.append('demo', formData.demo);
      data.append('imageFile', formData.imageFile);

      const result = await addProject(data);
      if (result.success) {
        setFormData({ title: '', category: 'Full Stack', description: '', image: '', github: '', demo: '', tech: '', imageFile: null });
        fetchProjects();
        alert('Project published with Sanity image!');
      } else alert('Error: ' + result.error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleAdminSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      let result;
      if (editingAdmin) {
        result = await updateAdmin(editingAdmin.id, adminFormData);
      } else {
        result = await registerAdmin(adminFormData);
      }
      
      if (result.success) {
        setAdminFormData({ email: '', password: '', name: '' });
        setEditingAdmin(null);
        const data = await fetchAdmins();
        setAdmins(data);
        alert(editingAdmin ? 'Admin updated!' : 'Admin registered!');
      } else alert('Error: ' + result.error);
    } finally {
      setSubmitting(false);
    }
  };

  const startEditAdmin = (admin) => {
    setEditingAdmin(admin);
    setAdminFormData({
      email: admin.email,
      password: admin.password, // Ideally we shouldn't show password, but this is a simple system
      name: admin.name
    });
  };

  const cancelEditAdmin = () => {
    setEditingAdmin(null);
    setAdminFormData({ email: '', password: '', name: '' });
  };

  const confirmDelete = (item, type) => {
    setItemToDelete(item);
    setDeleteType(type);
    setShowDeleteModal(true);
  };

  const handleServiceSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      let result;
      if (editingService) {
        result = await updateService(editingService.id, serviceFormData);
      } else {
        result = await addService(serviceFormData);
      }
      
      if (result.success) {
        setServiceFormData({ title: '', description: '', icon: 'Globe', color: 'from-blue-500/20 to-cyan-500/20', tags: '' });
        setEditingService(null);
        refreshData();
        alert(editingService ? 'Service updated!' : 'Service added!');
      } else alert('Error: ' + result.error);
    } finally {
      setSubmitting(false);
    }
  };

  const startEditService = (service) => {
    setEditingService(service);
    setServiceFormData({
      title: service.title,
      description: service.description,
      icon: service.icon,
      color: service.color,
      tags: service.tags
    });
  };

  const cancelEditService = () => {
    setEditingService(null);
    setServiceFormData({ title: '', description: '', icon: 'Globe', color: 'from-blue-500/20 to-cyan-500/20', tags: '' });
  };

  const handleFaqSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      let result;
      if (editingFaq) {
        result = await updateFAQ(editingFaq.id, faqFormData);
      } else {
        result = await addFAQ(faqFormData);
      }
      
      if (result.success) {
        setFaqFormData({ question: '', answer: '' });
        setEditingFaq(null);
        refreshData();
        alert(editingFaq ? 'FAQ updated!' : 'FAQ added!');
      } else alert('Error: ' + result.error);
    } finally {
      setSubmitting(false);
    }
  };

  const startEditFaq = (faq) => {
    setEditingFaq(faq);
    setFaqFormData({
      question: faq.question,
      answer: faq.answer
    });
  };

  const cancelEditFaq = () => {
    setEditingFaq(null);
    setFaqFormData({ question: '', answer: '' });
  };

  const moveSection = async (index, direction) => {
    const newOrder = [...sectionOrder];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= newOrder.length) return;
    
    [newOrder[index], newOrder[newIndex]] = [newOrder[newIndex], newOrder[index]];
    setSectionOrder(newOrder);
    
    const result = await updateSectionOrder(newOrder);
    if (!result.success) alert(result.error);
  };

  const moveService = async (index, direction) => {
    const newItems = [...services];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= newItems.length) return;
    
    [newItems[index], newItems[newIndex]] = [newItems[newIndex], newItems[index]];
    setServices(newItems);
    
    const result = await updateServiceOrder(newItems);
    if (!result.success) alert(result.error);
  };

  const moveFAQ = async (index, direction) => {
    const newItems = [...faqs];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= newItems.length) return;
    
    [newItems[index], newItems[newIndex]] = [newItems[newIndex], newItems[index]];
    setFaqs(newItems);
    
    const result = await updateFAQOrder(newItems);
    if (!result.success) alert(result.error);
  };

  const executeDelete = async () => {
    if (!itemToDelete) return;
    setSubmitting(true);
    
    try {
      let result;
      if (deleteType === 'project') {
        result = await deleteProject(itemToDelete.id);
        if (result.success) fetchProjects();
      } else if (deleteType === 'admin') {
        result = await deleteAdmin(itemToDelete.id);
        if (result.success) {
          const data = await fetchAdmins();
          setAdmins(data);
        }
      } else if (deleteType === 'service') {
        result = await deleteService(itemToDelete.id);
        if (result.success) {
          const data = await fetchServices();
          setServices(data);
        }
      } else if (deleteType === 'faq') {
        result = await deleteFAQ(itemToDelete.id);
        if (result.success) {
          const data = await fetchFAQs();
          setFaqs(data);
        }
      }
      
      if (!result.success) alert(result.error);
      setShowDeleteModal(false);
      setItemToDelete(null);
    } catch (err) {
      alert('Action failed');
    } finally {
      setSubmitting(false);
    }
  };

  if (initialCheck) return (
    <div className="min-h-screen bg-[var(--bg-main)] flex items-center justify-center">
      <Loader2 className="text-primary animate-spin" size={40} />
    </div>
  );

  if (!isLoggedIn) return <LoginForm loginEmail={loginEmail} setLoginEmail={setLoginEmail} loginPass={loginPass} setLoginPass={setLoginPass} loginError={loginError} handleLogin={handleLogin} checking={checking} />;

  return (
    <main className="min-h-screen bg-[var(--bg-main)]">
      <section className="pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <DashboardHeader 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            handleLogout={handleLogout}
            tabs={[
              { id: 'projects', label: 'Projects', icon: <Briefcase size={16} /> },
              { id: 'services', label: 'Services', icon: <Layout size={16} /> },
              { id: 'faqs', label: 'FAQs', icon: <HelpCircle size={16} /> },
              { id: 'layout', label: 'Layout', icon: <Move size={16} /> },
              { id: 'admins', label: 'Admins', icon: <Users size={16} /> }
            ]}
          />

          <AnimatePresence mode="wait">
            {activeTab === 'projects' ? (
              <ProjectsTab 
                projects={projects} 
                loading={loading} 
                submitting={submitting} 
                formData={formData} 
                setFormData={setFormData} 
                handleProjectSubmit={handleProjectSubmit} 
                confirmDelete={confirmDelete} 
              />
            ) : activeTab === 'services' ? (
              <ServicesTab 
                services={services} 
                loading={loading} 
                submitting={submitting} 
                serviceFormData={serviceFormData} 
                setServiceFormData={setServiceFormData} 
                handleServiceSubmit={handleServiceSubmit} 
                editingService={editingService} 
                startEditService={startEditService} 
                cancelEditService={cancelEditService} 
                confirmDelete={confirmDelete} 
                moveService={moveService}
              />
            ) : activeTab === 'faqs' ? (
              <FAQsTab 
                faqs={faqs} 
                loading={loading} 
                submitting={submitting} 
                faqFormData={faqFormData} 
                setFaqFormData={setFaqFormData} 
                handleFaqSubmit={handleFaqSubmit} 
                editingFaq={editingFaq} 
                startEditFaq={startEditFaq} 
                cancelEditFaq={cancelEditFaq} 
                confirmDelete={confirmDelete} 
                moveFAQ={moveFAQ}
              />
            ) : activeTab === 'layout' ? (
              <LayoutTab 
                sectionOrder={sectionOrder} 
                moveSection={moveSection} 
              />
            ) : (
              <AdminsTab 
                admins={admins} 
                loading={loading} 
                submitting={submitting} 
                adminFormData={adminFormData} 
                setAdminFormData={setAdminFormData} 
                handleAdminSubmit={handleAdminSubmit} 
                editingAdmin={editingAdmin} 
                startEditAdmin={startEditAdmin} 
                cancelEditAdmin={cancelEditAdmin} 
                confirmDelete={confirmDelete} 
              />
            )}
          </AnimatePresence>
        </div>
      </section>

      <DeleteModal show={showDeleteModal} setShow={setShowDeleteModal} item={itemToDelete} type={deleteType} onConfirm={executeDelete} submitting={submitting} />

      <Footer />
    </main>
  );
}
