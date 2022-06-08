import React,{useState} from 'react';
import './select_dropdown.css';

const SelectDropdown = ({items, default_val}) => {
      const [openSelect, setOpenSelect] = useState(false);
      const [selected_item, setSelectedItem] =useState(null);
  return (
    <div className='category-select'>
          <div className='selected-value f_flex' onClick={()=>setOpenSelect(!openSelect)}>
            {selected_item !== null ? <div className='item center_flex'>{items[selected_item].flag && <img src={items[selected_item].flag} alt="flag_image"/>}{items[selected_item].name}<i class="fa-solid fa-angle-down"></i></div>  : default_val}
          </div>
          {openSelect &&<div className='select-options'>
            {
              items.map((option,index)=>(
                <span key={option.name} onClick={e=>{
                  setSelectedItem(index);
                  setOpenSelect(false);
                }}><div className='option-item'>{option.flag &&<img src={option.flag} alt="flag_image"/>}{option.name}</div></span>
              ))
            }
      </div>}
    </div>
  )
}

export default SelectDropdown