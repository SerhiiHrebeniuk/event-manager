import React, {useState} from 'react';
import { useSelector } from "react-redux";

import './Published.scss';

import EventItem from '../EventItem/EventItem';

const Published = () => {
  let tasks = useSelector((state) => state);
  const [items, setItems] = useState(tasks)

  const updateStatus = (id, newStatus) => {
    let allItems = items;
    allItems = allItems.map((item) => {
      if (item.id === id) {
        item.status = newStatus;
      }
      return item;
    });
    setItems(allItems);
  };
  return (
    <div className='itemList'>
      {tasks.map((item) => {
             if (item && item.status === "Published") 
          return (
              <EventItem key={item.id} task={item} updateStatus={updateStatus} />
          );
          })}
    </div>
  )
}

export default Published;