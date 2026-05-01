import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import Header from '../components/Header';
import "../App.css"

function AddCreator() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    imageURL: '',
    description: '',
    youtube: '',
    twitter: '',
    instagram: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from('creators').insert([form]);
    navigate('/');
  };

  return (
    <>
      <Header />
      <div className="form-page">
        <form onSubmit={handleSubmit} className="creator-form">
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

          <label>&#9654; YouTube</label>
          <small>The creator's YouTube handle (without the @)</small>
          <input name="youtube" value={form.youtube} onChange={handleChange} />

          <label>&#120143; Twitter</label>
          <small>The creator's Twitter handle (without the @)</small>
          <input name="twitter" value={form.twitter} onChange={handleChange} />

          <label>&#9711; Instagram</label>
          <small>The creator's Instagram handle (without the @)</small>
          <input name="instagram" value={form.instagram} onChange={handleChange} />

          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </>
  );
}

export default AddCreator;
