import React, { useState } from "react";
import styles from "../../styles/modules/app.module.scss";
import { SelectButton } from "../Button/Button";
import { TodoModal } from "../TodoModal/TodoModal";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../Slices/todoSlices";

export const AppHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value));
  };

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle("dark-mode");
  };

  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Todo
      </Button>
      <SelectButton id="status" value={filterStatus} onChange={updateFilter}>
        <option value="all">ALL</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">complete</option>
      </SelectButton>
      <Button variant="secondary" onClick={toggleDarkMode}>
        Dark Mode
      </Button>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};
