import { useState } from "react";

export default function AddCourse() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    skill: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("author", formData.author);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("skill", formData.skill);
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    const response = await fetch("/api/courses/addCourse/", {
      method: "POST",
      body: formDataToSend,
    });

    if (response.ok) {
      console.log("successfully added course to database from form");
    } else {
      alert("Failed to add course");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Course</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="title">
            Course Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="author">
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="skill">
            Skill
          </label>
          <input
            type="text"
            name="skill"
            id="skill"
            value={formData.skill}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="image">
            Course Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
            className="w-full border rounded p-2"
            accept="image/*"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-600 text-white p-2 rounded"
        >
          Add Course
        </button>
      </form>
    </div>
  );
}
