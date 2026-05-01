import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import Header from '../components/Header';
import "../App.css"

function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    imageURL: '',
    description: '',
    youtube: '',
    twitter: '',
    instagram: '',
  });

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase.from('creators').select().eq('id', id).single();
      if (data) setForm(data);
    };
    fetchCreator();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from('creators').update(form).eq('id', id);
    navigate('/');
  };

  const handleDelete = async () => {
    await supabase.from('creators').delete().eq('id', id);
    navigate('/');
  };

  return (
    <>
      <Header />
      <div className="form-page">
      <form onSubmit={handleSubmit} className="creator-form">
        <h2 className="edit-title">EDIT CREATOR</h2>

        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>Image</label>
        <small>Provide a link to an image of your creator. Be sure to include the http://</small>
        <input name="imageURL" value={form.imageURL} onChange={handleChange} />

        <label>Description</label>
        <small>Provide a description of the creator. Who are they? What makes them interesting?</small>
        <textarea name="description" value={form.description} onChange={handleChange} />

        <h3 className="social-heading">SOCIAL MEDIA LINKS</h3>
        <small>Provide at least one of the creator's social media links.</small>

        <label>▶ YouTube</label>
        <small>The creator's YouTube handle (without the @)</small>
        <input name="youtube" value={form.youtube || ''} onChange={handleChange} />

        <label>𝕏 Twitter</label>
        <small>The creator's Twitter handle (without the @)</small>
        <input name="twitter" value={form.twitter || ''} onChange={handleChange} />

        <label>⊙ Instagram</label>
        <small>The creator's Instagram handle (without the @)</small>
        <input name="instagram" value={form.instagram || ''} onChange={handleChange} />

        <button type="submit">SAVE CHANGES</button>
        <button type="button" className="delete-btn" onClick={handleDelete}>DELETE CREATOR</button>
      </form>
      </div>
    </>
  );
}

export default EditCreator;
