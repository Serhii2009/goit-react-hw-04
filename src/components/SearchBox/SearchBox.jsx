import { useState } from "react";
import toast from "react-hot-toast";

export const SearchBox = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = ({ target: { value } }) => setValue(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      toast("The search input can not be empty. Please enter a search query");
      return;
    }
    onSubmit(value.trim().toLowerCase());
    setValue(value);
  };

  return (
    <header>
      <form>
        <input
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
        />
        <button onSubmit={handleSubmit} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
