import { Formik, Field, Form } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { searchBarProps } from "../../types";
import { FC } from "react";
const SearchBar: FC<searchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (
    values: {
      searchQuery: string;
    },
    actions: any
  ) => {
    if (values.searchQuery.trim() === "") {
      toast.error("Please,type any query", { position: "top-right" });
    } else {
      onSubmit(values.searchQuery);
      actions.resetForm();
    }
  };
  return (
    <Formik initialValues={{ searchQuery: "" }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <Field
          name="searchQuery"
          type="text"
          placeholder="Search images and photos"
          className={css.input}
        />
        <button className={css.btn} type="submit">
          Search
        </button>
        <Toaster />
      </Form>
    </Formik>
  );
};
export default SearchBar;
